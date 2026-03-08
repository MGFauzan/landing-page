'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { TESTIMONIALS } from '@/constants/data';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" style={{ padding: 'clamp(70px, 10vw, 100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel text="Testimonials" centered />
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, marginTop: 18,
            }}
          >
            Client <span style={{ color: '#06FFA5' }}>Reviews</span>
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{
                borderColor: i === active ? 'rgba(6,255,165,0.5)' : 'rgba(6,255,165,0.1)',
                y: i === active ? -8 : 0,
                boxShadow: i === active ? '0 16px 48px rgba(6,255,165,0.12)' : 'none',
              }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'rgba(8,20,40,0.82)',
                backdropFilter: 'blur(24px)',
                border: '1px solid',
                borderRadius: 16,
                padding: 28,
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  fontSize: 32, color: t.color, marginBottom: 14,
                  lineHeight: 1, fontFamily: 'Georgia, serif',
                }}
              >
                &ldquo;
              </div>
              <p style={{ fontSize: 14.5, color: '#94A3B8', lineHeight: 1.8, marginBottom: 24 }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 800,
                    color: '#040D1A', flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div
          className="reveal"
          style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}
        >
          {TESTIMONIALS.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{ width: i === active ? 24 : 8 }}
              style={{
                height: 8, borderRadius: 4,
                background: i === active ? '#06FFA5' : 'rgba(6,255,165,0.2)',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
