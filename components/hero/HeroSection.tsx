'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollTo } from '@/lib/utils';
import { STATS, PERSON } from '@/constants/data';
import Orb from '@/components/ui/Orb';

const TYPING_WORDS = [
  'Web Developer',
  'PHP & JavaScript Dev',
  'React / Next.js Dev',
  'Python Flask Dev',
  'Mahasiswa UPI',
  'Problem Solver',
];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

export default function HeroSection() {
  const typedText = useTypingEffect(TYPING_WORDS);

  return (
    <section id="home" className="gridbg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      <Orb top="10%" right="5%" size={500} color="#06FFA5" opacity={0.06} />
      <Orb bottom="5%" left="0%" size={350} color="#10B981" opacity={0.05} />

      <motion.div animate={{ y: [0,-22,0], rotate: [0,8,0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '22%', right: '18%', width: 56, height: 56, borderRadius: 14, border: '1px solid rgba(6,255,165,0.2)', background: 'rgba(6,255,165,0.03)' }} />
      <motion.div animate={{ y: [0,-14,0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ position: 'absolute', top: '65%', right: '12%', width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(16,185,129,0.2)' }} />
      <motion.div animate={{ y: [0,-22,0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ position: 'absolute', top: '45%', left: '6%', width: 28, height: 28, transform: 'rotate(45deg)', border: '1px solid rgba(6,255,165,0.15)' }} />
      <motion.div animate={{ top: ['0%','100%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(6,255,165,0.06), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 780 }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 100, border: '1px solid rgba(6,255,165,0.3)', background: 'rgba(6,255,165,0.05)', marginBottom: 28, fontSize: 13, color: '#06FFA5', fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }}>
            <span className="animate-glow-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#06FFA5', display: 'inline-block', flexShrink: 0 }} />
            Mahasiswa UPI • Bandung, Indonesia
          </motion.div>

          {/* Greeting */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(15px,2vw,19px)', color: '#64748B', marginBottom: 10 }}>
            👋 Hi, I&apos;m <span style={{ color: '#E2EBF8', fontWeight: 600 }}>{PERSON.fullName}</span>
          </motion.p>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(36px,5.5vw,76px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 20, color: '#E2EBF8', letterSpacing: -1 }}>
            Creating, learning,{' '}
            <span style={{ color: '#06FFA5' }}>and growing</span>
            <br />through every line of code.
          </motion.h1>

          {/* Typing line */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: 'clamp(15px,2.2vw,21px)', color: '#94A3B8', marginBottom: 36, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span>A passionate</span>
            <span style={{ color: '#06FFA5', fontFamily: "'Syne',sans-serif", fontWeight: 700, minWidth: 240 }}>
              {typedText}
              <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#06FFA5', marginLeft: 2, verticalAlign: 'middle', animation: 'cursorBlink 1s step-end infinite' }} />
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }} onClick={() => scrollTo('projects')}>
              See My Work →
            </button>
            <button className="btn-outline" style={{ padding: '14px 32px', fontSize: 16 }} onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }}
            style={{ display: 'flex', gap: 48, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(6,255,165,0.08)', flexWrap: 'wrap' }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 34, fontWeight: 800, color: '#06FFA5', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 13, color: '#64748B', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
