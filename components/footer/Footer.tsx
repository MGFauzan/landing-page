'use client';
import { scrollTo } from '@/lib/utils';
import { PERSON } from '@/constants/data';
import Orb from '@/components/ui/Orb';

const NAV = ['Home', 'About', 'Services', 'Projects', 'Contact'];

export default function Footer() {
  return (
    <footer style={{ padding: '48px 24px 32px', borderTop: '1px solid rgba(6,255,165,0.07)', position: 'relative' }}>
      <Orb top="-50%" left="40%" size={400} color="#10B981" opacity={0.02} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div>
            <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800 }}>
                <span style={{ color: '#06FFA5' }}>{'<'}</span>
                <span style={{ color: '#E2EBF8' }}>Fauzan</span>
                <span style={{ color: '#06FFA5' }}>{'/>'}</span>
              </span>
            </button>
            <p style={{ color: '#64748B', fontSize: 14, maxWidth: 280, lineHeight: 1.7, marginTop: 10 }}>
              Building digital experiences that inspire and perform.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, color: '#06FFA5', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Navigation</div>
              {NAV.map((n) => (
                <div key={n} style={{ marginBottom: 8 }}>
                  <button onClick={() => scrollTo(n)} style={{ background: 'none', border: 'none', color: '#64748B', fontSize: 14, cursor: 'pointer', padding: 0, fontFamily: "'DM Sans',sans-serif", transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#06FFA5')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}>
                    {n}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, color: '#06FFA5', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
              {SOCIALS.map((s) => (
                  <div key={s.label} style={{ marginBottom: 8 }}>
                    
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 14, color: '#64748B', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif", transition: 'color .2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = s.color)}
                      onMouseLeave={e => (e.currentTarget.style.color = '#64748B')}
                    >
                      {s.label}
                    </a>
                  </div>
                ))}</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(6,255,165,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: '#475569' }}>© {new Date().getFullYear()} {PERSON.fullName}. All rights reserved.</span>
          <span style={{ fontSize: 13, color: '#475569' }}>Built with Next.js, TypeScript &amp; ☕</span>
        </div>
      </div>
    </footer>
  );
}
