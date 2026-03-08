'use client';
import { useRef, useCallback, useEffect } from 'react';
import type { GameState, SimState } from '@/types';

interface UseGameEngineProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  CW: number;
  CH: number;
  onScoreUpdate: (score: number) => void;
  onGameOver: () => void;
  onStart: () => void;
}

const DW = 34, DH = 46, OW = 18;

export function useGameEngine({
  canvasRef,
  CW,
  CH,
  onScoreUpdate,
  onGameOver,
  onStart,
}: UseGameEngineProps) {
  const GROUND = CH - 60;
  const gRef = useRef<GameState>({ running: false, over: false, score: 0, frame: 0, started: false });
  const sRef = useRef<SimState>({ dino: { x: 80, y: GROUND - DH, vy: 0, onGround: true }, obs: [], speed: 4 });
  const rafRef = useRef<number>(0);

  const render = useCallback(
    (ctx: CanvasRenderingContext2D, s: SimState, g: GameState) => {
      // Background
      ctx.fillStyle = '#040D1A';
      ctx.fillRect(0, 0, CW, CH);
      // Grid
      ctx.strokeStyle = 'rgba(6,255,165,0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < CW; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CH); ctx.stroke(); }
      for (let y = 0; y < CH; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke(); }
      // Ground
      const gg = ctx.createLinearGradient(0, 0, CW, 0);
      gg.addColorStop(0, 'rgba(6,255,165,0.05)');
      gg.addColorStop(0.5, 'rgba(6,255,165,0.5)');
      gg.addColorStop(1, 'rgba(6,255,165,0.05)');
      ctx.fillStyle = gg;
      ctx.fillRect(0, GROUND, CW, 2);
      // Dino
      const dx = s.dino.x, dy = s.dino.y, f = g.frame;
      ctx.fillStyle = '#06FFA5';
      ctx.fillRect(dx + 6, dy + 8, 22, 26);
      ctx.fillRect(dx + 10, dy, 20, 13);
      ctx.fillStyle = '#040D1A';
      ctx.fillRect(dx + 24, dy + 3, 5, 5);
      ctx.fillStyle = '#10B981';
      if (s.dino.onGround) {
        const la = Math.floor(f / 6) % 2;
        if (la === 0) { ctx.fillRect(dx + 10, dy + 34, 7, 12); ctx.fillRect(dx + 21, dy + 34, 7, 6); }
        else { ctx.fillRect(dx + 10, dy + 34, 7, 6); ctx.fillRect(dx + 21, dy + 34, 7, 12); }
      } else {
        ctx.fillRect(dx + 10, dy + 34, 7, 10);
        ctx.fillRect(dx + 21, dy + 34, 7, 10);
      }
      ctx.fillStyle = '#06FFA5';
      ctx.fillRect(dx, dy + 14, 8, 8);
      // Obstacles
      s.obs.forEach((o) => {
        ctx.shadowColor = '#EF4444'; ctx.shadowBlur = 8;
        ctx.fillStyle = '#EF4444';
        ctx.fillRect(o.x, GROUND - o.h, OW, o.h);
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#DC2626';
        ctx.fillRect(o.x - 5, GROUND - o.h, 8, o.h * 0.6);
        ctx.fillRect(o.x + OW - 3, GROUND - o.h, 8, o.h * 0.5);
      });
      // HUD
      ctx.shadowColor = '#06FFA5'; ctx.shadowBlur = 6;
      ctx.fillStyle = '#06FFA5';
      ctx.font = `bold 14px 'Courier New', monospace`;
      ctx.fillText(`SCORE: ${g.score}`, CW - 140, 30);
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(100,116,139,0.6)';
      ctx.font = `11px 'DM Sans', sans-serif`;
      ctx.fillText(`SPD: ${s.speed.toFixed(1)}`, 16, 30);
      // Game Over
      if (g.over) {
        ctx.fillStyle = 'rgba(4,13,26,0.88)';
        ctx.fillRect(0, 0, CW, CH);
        ctx.shadowColor = '#EF4444'; ctx.shadowBlur = 15;
        ctx.fillStyle = '#EF4444';
        ctx.font = `bold 26px 'Courier New', monospace`;
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', CW / 2, CH / 2 - 18);
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#06FFA5';
        ctx.font = `15px 'Courier New', monospace`;
        ctx.fillText(`Score: ${g.score}`, CW / 2, CH / 2 + 14);
        ctx.fillStyle = '#64748B';
        ctx.font = `13px 'DM Sans', sans-serif`;
        ctx.fillText('SPACE or Click to Restart', CW / 2, CH / 2 + 46);
        ctx.textAlign = 'left';
      }
    },
    [CW, CH, GROUND]
  );

  const drawIdle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#040D1A'; ctx.fillRect(0, 0, CW, CH);
    ctx.strokeStyle = 'rgba(6,255,165,0.04)'; ctx.lineWidth = 1;
    for (let x = 0; x < CW; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CH); ctx.stroke(); }
    for (let y = 0; y < CH; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke(); }
    const gg = ctx.createLinearGradient(0, 0, CW, 0);
    gg.addColorStop(0, 'rgba(6,255,165,0.05)'); gg.addColorStop(0.5, 'rgba(6,255,165,0.5)'); gg.addColorStop(1, 'rgba(6,255,165,0.05)');
    ctx.fillStyle = gg; ctx.fillRect(0, GROUND, CW, 2);
    const dx = 80, dy = GROUND - DH;
    ctx.fillStyle = '#06FFA5'; ctx.fillRect(dx + 6, dy + 8, 22, 26); ctx.fillRect(dx + 10, dy, 20, 13);
    ctx.fillStyle = '#040D1A'; ctx.fillRect(dx + 24, dy + 3, 5, 5);
    ctx.fillStyle = '#10B981'; ctx.fillRect(dx + 10, dy + 34, 7, 12); ctx.fillRect(dx + 21, dy + 34, 7, 6);
    ctx.fillStyle = '#06FFA5'; ctx.fillRect(dx, dy + 14, 8, 8);
    ctx.fillStyle = '#64748B'; ctx.font = `14px 'DM Sans', sans-serif`; ctx.textAlign = 'center';
    ctx.fillText('Press SPACE or Click to Start', CW / 2, CH / 2 + 70);
    ctx.textAlign = 'left';
  }, [CW, CH, GROUND, canvasRef]);

  const loop = useCallback(() => {
    const g = gRef.current, s = sRef.current;
    if (!g.running) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    g.frame++; g.score++;
    s.speed = 4 + Math.floor(g.score / 400) * 0.4;
    s.dino.vy += 0.85;
    s.dino.y += s.dino.vy;
    if (s.dino.y >= GROUND - DH) { s.dino.y = GROUND - DH; s.dino.vy = 0; s.dino.onGround = true; }
    const spawnRate = Math.max(50, 100 - Math.floor(g.score / 300) * 5);
    if (g.frame % spawnRate === 0) { s.obs.push({ x: CW + 10, h: 28 + Math.random() * 26 }); }
    s.obs = s.obs.filter((o) => o.x > -40);
    s.obs.forEach((o) => { o.x -= s.speed; });
    onScoreUpdate(g.score);
    for (const o of s.obs) {
      if (s.dino.x + DW - 10 > o.x + 4 && s.dino.x + 10 < o.x + OW - 4 && s.dino.y + DH - 4 > GROUND - o.h) {
        g.running = false; g.over = true;
        render(ctx, s, g);
        onGameOver();
        return;
      }
    }
    render(ctx, s, g);
    rafRef.current = requestAnimationFrame(loop);
  }, [CW, GROUND, render, onScoreUpdate, onGameOver, canvasRef]);

  const initGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    sRef.current = { dino: { x: 80, y: GROUND - DH, vy: 0, onGround: true }, obs: [], speed: 4 };
    gRef.current = { running: true, over: false, score: 0, frame: 0, started: true };
    onStart();
    rafRef.current = requestAnimationFrame(loop);
  }, [GROUND, loop, onStart]);

  const jump = useCallback(() => {
    if (!gRef.current.started || gRef.current.over) { initGame(); return; }
    const s = sRef.current;
    if (s.dino.onGround) { s.dino.vy = -15; s.dino.onGround = false; }
  }, [initGame]);

  useEffect(() => {
    drawIdle();
    return () => cancelAnimationFrame(rafRef.current);
  }, [drawIdle]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.code === 'Space') { e.preventDefault(); jump(); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [jump]);

  return { jump, initGame };
}
