'use client';
import { useState, useEffect } from 'react';
import { scrollTo } from '@/lib/utils';
import { NAV_ITEMS } from '@/constants/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const goto = (id: string) => { scrollTo(id); setMenuOpen(false); };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? 'rgba(4,13,26,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(6,255,165,0.07)' : 'none',
      transition: 'all .4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo */}
        <button onClick={() => goto('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
            <span style={{ color: '#06FFA5' }}>{'<'}</span>
            <span style={{ color: '#E2EBF8' }}>Fauzan</span>
            <span style={{ color: '#06FFA5' }}>{'/>'}</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 28, alignItems: 'center' }}>
          {NAV_ITEMS.map((n) => (
            <button key={n} className="nav-link" onClick={() => goto(n)}>{n}</button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button className="btn-primary hidden md:block" style={{ padding: '8px 20px', fontSize: 14 }} onClick={() => goto('contact')}>
            Hire Me ✦
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid rgba(6,255,165,.3)', borderRadius: 8, color: '#06FFA5', padding: '6px 10px', cursor: 'pointer', fontSize: 18 }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(4,13,26,0.97)', borderTop: '1px solid rgba(6,255,165,.07)', padding: '16px 24px 24px' }}>
          {NAV_ITEMS.map((n) => (
            <button key={n} className="nav-link" onClick={() => goto(n)} style={{ display: 'block', padding: '10px 0', fontSize: 16 }}>{n}</button>
          ))}
          <button className="btn-primary" style={{ marginTop: 12, padding: '10px 24px', fontSize: 14, width: '100%' }} onClick={() => goto('contact')}>Hire Me</button>
        </div>
      )}
    </nav>
  );
}
