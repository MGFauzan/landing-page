'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

const DW = 34, DH = 46, OW = 18;

function useGame(canvasRef: React.RefObject<HTMLCanvasElement | null>, CW: number, CH: number) {
  const GROUND = CH - 60;
  const gRef = useRef({ running: false, over: false, score: 0, frame: 0, started: false });
  const sRef = useRef({ dino: { x: 80, y: GROUND - DH, vy: 0, onGround: true }, obs: [] as { x: number; h: number }[], speed: 4 });
  const rafRef = useRef(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<'idle' | 'running' | 'over'>('idle');

  const draw = useCallback((g: typeof gRef.current, s: typeof sRef.current) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#040D1A';
    ctx.fillRect(0, 0, CW, CH);
    ctx.strokeStyle = 'rgba(6,255,165,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < CW; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CH); ctx.stroke(); }
    for (let y = 0; y < CH; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke(); }
    const gg = ctx.createLinearGradient(0, 0, CW, 0);
    gg.addColorStop(0, 'rgba(6,255,165,0.05)');
    gg.addColorStop(0.5, 'rgba(6,255,165,0.6)');
    gg.addColorStop(1, 'rgba(6,255,165,0.05)');
    ctx.fillStyle = gg;
    ctx.fillRect(0, GROUND, CW, 2);
    const { x: dx, y: dy, onGround } = s.dino;
    const f = g.frame;
    ctx.fillStyle = '#06FFA5';
    ctx.fillRect(dx + 6, dy + 8, 22, 26);
    ctx.fillRect(dx + 10, dy, 20, 13);
    ctx.fillStyle = '#040D1A';
    ctx.fillRect(dx + 24, dy + 3, 5, 5);
    ctx.fillStyle = '#06FFA5';
    ctx.fillRect(dx, dy + 14, 8, 8);
    ctx.fillStyle = '#10B981';
    if (onGround && g.running) {
      const la = Math.floor(f / 6) % 2;
      if (la === 0) { ctx.fillRect(dx + 10, dy + 34, 7, 12); ctx.fillRect(dx + 21, dy + 34, 7, 6); }
      else { ctx.fillRect(dx + 10, dy + 34, 7, 6); ctx.fillRect(dx + 21, dy + 34, 7, 12); }
    } else {
      ctx.fillRect(dx + 10, dy + 34, 7, 10);
      ctx.fillRect(dx + 21, dy + 34, 7, 10);
    }
    s.obs.forEach(o => {
      ctx.shadowColor = '#EF4444'; ctx.shadowBlur = 10;
      ctx.fillStyle = '#EF4444';
      ctx.fillRect(o.x, GROUND - o.h, OW, o.h);
      ctx.fillStyle = '#DC2626';
      ctx.fillRect(o.x - 5, GROUND - o.h, 8, Math.floor(o.h * 0.6));
      ctx.fillRect(o.x + OW - 3, GROUND - o.h, 8, Math.floor(o.h * 0.5));
      ctx.shadowBlur = 0;
    });
    ctx.shadowColor = '#06FFA5'; ctx.shadowBlur = 6;
    ctx.fillStyle = '#06FFA5';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('SCORE: ' + g.score, CW - 16, 30);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(100,116,139,0.7)';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('SPD: ' + s.speed.toFixed(1), 16, 30);
    if (!g.started) {
      ctx.fillStyle = 'rgba(100,116,139,0.8)';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Click or press SPACE to start', CW / 2, CH / 2 + 64);
      ctx.textAlign = 'left';
    }
    if (g.over) {
      ctx.fillStyle = 'rgba(4,13,26,0.85)';
      ctx.fillRect(0, 0, CW, CH);
      ctx.shadowColor = '#EF4444'; ctx.shadowBlur = 18;
      ctx.fillStyle = '#EF4444';
      ctx.font = 'bold 26px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', CW / 2, CH / 2 - 16);
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#06FFA5';
      ctx.font = '15px monospace';
      ctx.fillText('Score: ' + g.score, CW / 2, CH / 2 + 14);
      ctx.fillStyle = 'rgba(100,116,139,0.8)';
      ctx.font = '13px sans-serif';
      ctx.fillText('Click or SPACE to restart', CW / 2, CH / 2 + 46);
      ctx.textAlign = 'left';
    }
  }, [CW, CH, GROUND, canvasRef]);

  const loop = useCallback(() => {
    const g = gRef.current;
    const s = sRef.current;
    if (!g.running) return;
    g.frame++; g.score++;
    s.speed = 4 + Math.floor(g.score / 400) * 0.4;
    s.dino.vy += 0.85;
    s.dino.y += s.dino.vy;
    if (s.dino.y >= GROUND - DH) { s.dino.y = GROUND - DH; s.dino.vy = 0; s.dino.onGround = true; }
    const spawnRate = Math.max(50, 100 - Math.floor(g.score / 300) * 5);
    if (g.frame % spawnRate === 0) s.obs.push({ x: CW + 10, h: 28 + Math.random() * 26 });
    s.obs = s.obs.filter(o => o.x > -40);
    s.obs.forEach(o => { o.x -= s.speed; });
    setScore(g.score);
    for (const o of s.obs) {
      if (s.dino.x + DW - 10 > o.x + 4 && s.dino.x + 10 < o.x + OW - 4 && s.dino.y + DH - 4 > GROUND - o.h) {
        g.running = false; g.over = true;
        draw(g, s); setStatus('over'); return;
      }
    }
    draw(g, s);
    rafRef.current = requestAnimationFrame(loop);
  }, [CW, GROUND, draw]);

  const initGame = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    sRef.current = { dino: { x: 80, y: GROUND - DH, vy: 0, onGround: true }, obs: [], speed: 4 };
    gRef.current = { running: true, over: false, score: 0, frame: 0, started: true };
    setScore(0); setStatus('running');
    rafRef.current = requestAnimationFrame(loop);
  }, [GROUND, loop]);

  const jump = useCallback(() => {
    const g = gRef.current;
    if (!g.started || g.over) { initGame(); return; }
    const s = sRef.current;
    if (s.dino.onGround) { s.dino.vy = -15; s.dino.onGround = false; }
  }, [initGame]);

  useEffect(() => {
    const t = setTimeout(() => draw(gRef.current, sRef.current), 120);
    return () => { clearTimeout(t); cancelAnimationFrame(rafRef.current); };
  }, [draw]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.code === 'Space') { e.preventDefault(); jump(); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [jump]);

  return { score, status, jump, initGame };
}

export default function DinoGame() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const CW = mounted ? (window.innerWidth < 640 ? 360 : 660) : 660;
  const CH = 200;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { score, status, jump, initGame } = useGame(canvasRef, CW, CH);

  return (
    <section id="game" style={{ padding: 'clamp(70px,10vw,100px) 24px', background: 'rgba(6,255,165,0.01)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
            <span style={{ display: 'block', width: 24, height: 2, background: 'linear-gradient(90deg,#06FFA5,#10B981)', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: '#06FFA5', textTransform: 'uppercase' as const }}>Mini Game</span>
            <span style={{ display: 'block', width: 24, height: 2, background: 'linear-gradient(90deg,#10B981,#06FFA5)', borderRadius: 2 }} />
          </div>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: '#E2EBF8', margin: 0 }}>
            Take a <span style={{ color: '#06FFA5' }}>Break</span> 🎮
          </h2>
          <p style={{ color: '#64748B', marginTop: 10, fontSize: 15 }}>Press SPACE / click / tap untuk mulai bermain</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{ padding: 20, background: 'rgba(8,20,40,0.82)', backdropFilter: 'blur(24px)', border: '1px solid rgba(6,255,165,0.15)', borderRadius: 16, display: 'inline-block' }}>
            <canvas
              ref={canvasRef}
              width={CW}
              height={CH}
              onClick={jump}
              onTouchStart={e => { e.preventDefault(); jump(); }}
              style={{ display: 'block', cursor: 'pointer', borderRadius: 10, maxWidth: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 800, color: '#06FFA5', lineHeight: 1 }}>{score}</div>
              <div style={{ fontSize: 11, color: '#64748B', marginTop: 4 }}>SCORE</div>
            </div>
            <button onClick={initGame} style={{ padding: '10px 28px', fontSize: 14, fontWeight: 700, background: 'linear-gradient(135deg,#06FFA5,#10B981)', color: '#030B14', border: 'none', borderRadius: 10, cursor: 'pointer' }}>
              {status === 'idle' ? 'Start Game' : 'Restart'}
            </button>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, lineHeight: 1 }}>{status === 'over' ? '💀' : status === 'running' ? '🏃' : '⏸'}</div>
              <div style={{ fontSize: 11, color: '#64748B', marginTop: 4 }}>STATUS</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
            {[['SPACE', 'Jump'], ['CLICK', 'Jump'], ['TAP', 'Mobile']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ padding: '2px 8px', background: 'rgba(6,255,165,0.08)', border: '1px solid rgba(6,255,165,0.2)', borderRadius: 6, fontSize: 11, color: '#06FFA5', fontFamily: 'monospace' }}>{k}</span>
                <span style={{ fontSize: 11, color: '#475569' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
