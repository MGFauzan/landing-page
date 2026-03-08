'use client';
import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

const EXPERIENCE = [
  {
    role: 'Web Developer — Freelance',
    company: 'OpenHelp / Mandiri',
    period: '2024 – Present',
    desc: 'Membuka jasa coding meliputi pembuatan website, joki tugas pemrograman, refactoring kode, dan modifikasi project open source. Melayani klien dari berbagai kebutuhan digital.',
    tags: ['PHP', 'JavaScript', 'Python', 'Next.js'],
    color: '#06FFA5',
    icon: '💻',
  },
  {
    role: 'Fullstack Web Developer',
    company: 'Proyek e-Kampung (RT/RW)',
    period: '2024',
    desc: 'Membangun sistem informasi warga berbasis web dengan fitur jadwal ronda, notifikasi WhatsApp/SMS Gateway otomatis, manajemen data warga, dan admin panel lengkap.',
    tags: ['PHP', 'MySQL', 'WhatsApp API', 'JavaScript'],
    color: '#10B981',
    icon: '🏘️',
  },
  {
    role: 'Backend Developer',
    company: 'Proyek Pondok Pesantren',
    period: '2023',
    desc: 'Mengembangkan website profil pondok pesantren menggunakan Python Flask. Membangun CMS sederhana untuk pengelolaan konten dan informasi kegiatan pesantren.',
    tags: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    color: '#06B6D4',
    icon: '🕌',
  },
];

const EDUCATION = [
  {
    degree: 'Pendidikan Teknik Otomasi Industri & Robotika',
    institution: 'Universitas Pendidikan Indonesia (UPI)',
    period: '2025 – Present',
    desc: 'Diterima di UPI pada program studi yang menggabungkan rekayasa industri, sistem kontrol otomasi, IoT, dan teknologi robotika. Berfokus pada integrasi software dengan hardware untuk Industry 4.0.',
    tags: ['Robotika', 'IoT', 'Otomasi Industri', 'AI'],
    color: '#8B5CF6',
    icon: '🎓',
  },
  {
    degree: 'SMK — Rekayasa Perangkat Lunak (RPL)',
    institution: 'SMK — Subang',
    period: '2022 – 2025',
    desc: 'Mendalami pengembangan perangkat lunak, pemrograman web, basis data, dan algoritma. Aktif mengerjakan berbagai proyek nyata mulai dari sistem arsip digital, web sewa, hingga sistem informasi warga.',
    tags: ['Web Dev', 'PHP', 'JavaScript', 'Database'],
    color: '#F59E0B',
    icon: '📚',
  },
];

type Tab = 'experience' | 'education';

export default function ResumeSection() {
  const [tab, setTab] = useState<Tab>('experience');
  const items = tab === 'experience' ? EXPERIENCE : EDUCATION;

  return (
    <section
      id="resume"
      style={{
        padding: 'clamp(70px, 10vw, 100px) 24px',
        background: 'rgba(6,255,165,0.012)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionLabel text="Resume" centered />
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, marginTop: 18 }}>
            Professional <span style={{ color: '#06FFA5' }}>Journey</span>
          </h2>
          <p style={{ color: '#64748B', marginTop: 10, fontSize: 15 }}>
            Perjalanan belajar dan berkarya dalam dunia teknologi
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 52 }}>
          {([
            { key: 'experience', label: '💼 Work Experience' },
            { key: 'education',  label: '🎓 Education' },
          ] as { key: Tab; label: string }[]).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                padding: '11px 28px',
                borderRadius: 100,
                border: tab === key ? '1px solid rgba(6,255,165,0.6)' : '1px solid rgba(6,255,165,0.15)',
                background: tab === key ? 'rgba(6,255,165,0.1)' : 'transparent',
                color: tab === key ? '#06FFA5' : '#64748B',
                fontFamily: "'Syne',sans-serif",
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all .25s',
                boxShadow: tab === key ? '0 0 20px rgba(6,255,165,0.12)' : 'none',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="reveal" style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 22, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, #06FFA5, rgba(6,255,165,0.08))',
            borderRadius: 2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 28, paddingBottom: i < items.length - 1 ? 32 : 0, position: 'relative' }}>

                {/* Timeline dot */}
                <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}0a)`,
                    border: `2px solid ${item.color}55`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                    boxShadow: `0 0 20px ${item.color}22`,
                  }}>
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: 'rgba(8,20,40,0.82)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(6,255,165,0.1)',
                    borderRadius: 16,
                    padding: '22px 26px',
                    transition: 'border-color .3s, box-shadow .3s, transform .3s',
                    marginBottom: 4,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = `${item.color}44`;
                    el.style.boxShadow = `0 8px 40px ${item.color}12`;
                    el.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(6,255,165,0.1)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 800, color: '#E2EBF8', margin: 0, lineHeight: 1.2 }}>
                        {tab === 'experience'
                          ? (item as typeof EXPERIENCE[0]).role
                          : (item as typeof EDUCATION[0]).degree}
                      </h3>
                      <div style={{ fontSize: 13, color: item.color, fontWeight: 600, marginTop: 4 }}>
                        {tab === 'experience'
                          ? (item as typeof EXPERIENCE[0]).company
                          : (item as typeof EDUCATION[0]).institution}
                      </div>
                    </div>
                    <span style={{
                      padding: '4px 12px', borderRadius: 100,
                      background: `${item.color}14`,
                      border: `1px solid ${item.color}30`,
                      fontSize: 12, color: item.color,
                      fontFamily: "'Syne',sans-serif", fontWeight: 600,
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      {item.period}
                    </span>
                  </div>

                  <div style={{ height: 1, background: 'rgba(6,255,165,0.06)', margin: '12px 0' }} />

                  <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.8, margin: '0 0 14px' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.tags.map(t => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: 100,
                        background: `${item.color}10`,
                        border: `1px solid ${item.color}28`,
                        fontSize: 11, color: item.color,
                        fontFamily: "'Syne',sans-serif", fontWeight: 600,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
