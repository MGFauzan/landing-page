'use client';
import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import CVModal from '@/components/ui/CVModal';
import { PERSON } from '@/constants/data';

const INFO = [
  ['📍 Location', PERSON.location],
  ['📧 Email', PERSON.email],
  ['🎓 Kampus', 'Universitas Pendidikan Indonesia'],
  ['📖 Prodi', 'Otomasi Industri & Robotika'],
  ['🏫 Asal', 'Bandung Barat, Jawa Barat'],
  ['💼 Status', 'Mahasiswa UPI Bandung'],
];

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CVModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <section id="about" style={{ padding: 'clamp(70px, 10vw, 100px) 24px', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="reveal"><SectionLabel text="About Me" /></div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 72px)', alignItems: 'center', marginTop: 56 }}>

            {/* Avatar */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 340, height: 420 }}>
                <div style={{
                  position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                  width: 280, height: 280, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(6,255,165,0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }} />
                  <img
                    src="/foto.jpeg"
                    alt="Muhammad Ghiyyast Fauzan"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',       
                      objectPosition: 'center',    
                      display: 'block',
                      maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    }}
                  />
                <div className="glass-static" style={{ position: 'absolute', bottom: 8, right: -28, padding: '10px 16px', borderRadius: 12, minWidth: 130 }}>
                  <div style={{ fontSize: 10, color: '#64748B', marginBottom: 2 }}>KAMPUS</div>
                  <div style={{ fontSize: 12, color: '#06FFA5', fontWeight: 700 }}>🎓 UPI Bandung</div>
                </div>
                <div className="glass-static" style={{ position: 'absolute', top: 8, left: -28, padding: '10px 16px', borderRadius: 12 }}>
                  <div style={{ fontSize: 10, color: '#64748B', marginBottom: 2 }}>ASAL</div>
                  <div style={{ fontSize: 12, color: '#10B981', fontWeight: 700 }}>Bandung</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(22px,3.5vw,34px)', fontWeight: 800, marginBottom: 4, lineHeight: 1.1 }}>
                {PERSON.fullName}
              </h2>
              <div style={{ fontSize: 13, color: '#475569', marginBottom: 10 }}>
                Nama panggilan: <span style={{ color: '#06FFA5', fontWeight: 600 }}>{PERSON.nickname}</span>
              </div>
              <div style={{ fontSize: 16, color: '#06FFA5', fontWeight: 600, marginBottom: 20 }}>
                {PERSON.role}
              </div>
              <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                {PERSON.bio}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: 28 }}>
                {INFO.map(([k, v]) => (
                  <div key={k} style={{ borderLeft: '2px solid rgba(6,255,165,0.2)', paddingLeft: 12 }}>
                    <div style={{ fontSize: 10, color: '#64748B', marginBottom: 2 }}>{k}</div>
                    <div style={{ fontSize: 13, color: '#E2EBF8' }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn-primary" style={{ padding: '11px 24px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }} onClick={() => setModalOpen(true)}>
                  ⬇ Download CV
                </button>
                <button className="btn-outline" style={{ padding: '11px 24px', fontSize: 14 }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Hire Me ✦
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
