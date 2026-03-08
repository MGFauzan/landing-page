'use client';
import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';

interface Project {
  emoji: string;
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
  tech: string[];
  color: string;
  demo: string;
  github: string;
}

const PROJECTS: Project[] = [
  {
    emoji: '🗂️',
    title: 'Sistem Arsip Digital',
    desc: 'Web aplikasi manajemen arsip digital dengan admin panel dan pencarian cepat.',
    longDesc: 'Sistem manajemen arsip digital berbasis web yang memungkinkan pengguna untuk menyimpan, mencari, dan mengelola dokumen secara efisien. Dilengkapi dengan admin panel lengkap untuk pengelolaan kategori, user, dan laporan.',
    features: ['Upload & Download Dokumen', 'Pencarian & Filter', 'Admin Panel', 'Manajemen Kategori'],
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#06FFA5',
    demo: '#',
    github: '#',
  },
  {
    emoji: '⛺',
    title: 'Web Sewa Alat Camping',
    desc: 'Platform sewa perlengkapan camping online dengan sistem booking dan katalog.',
    longDesc: 'Platform e-commerce sewa perlengkapan camping yang memudahkan pengguna untuk menyewa tenda, sleeping bag, dan perlengkapan outdoor lainnya. Sistem booking otomatis dengan manajemen ketersediaan alat real-time.',
    features: ['Katalog Produk', 'Sistem Booking', 'Manajemen Stok', 'Histori Transaksi'],
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    color: '#10B981',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🕌',
    title: 'Website Pondok Pesantren',
    desc: 'Website profil pondok pesantren dengan CMS menggunakan Python Flask.',
    longDesc: 'Website resmi pondok pesantren yang dibangun menggunakan Python Flask. Menampilkan informasi profil, kegiatan, pengumuman, dan galeri pesantren. Dilengkapi CMS sederhana untuk pengelolaan konten oleh admin pesantren.',
    features: ['Profil & Sejarah', 'Galeri Kegiatan', 'Pengumuman', 'CMS Admin'],
    tech: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    color: '#06B6D4',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🏘️',
    title: 'e-Kampung (Web RT/RW)',
    desc: 'Sistem informasi warga dengan jadwal ronda dan notifikasi WhatsApp otomatis.',
    longDesc: 'Sistem informasi digital untuk lingkungan RT/RW yang memudahkan pengelolaan data warga, jadwal ronda, dan komunikasi antar tetangga. Fitur unggulan: notifikasi otomatis via WhatsApp/SMS Gateway saat jadwal ronda tiba.',
    features: ['Data Warga', 'Jadwal Ronda', 'WhatsApp Gateway', 'Notifikasi Otomatis'],
    tech: ['PHP', 'MySQL', 'WhatsApp API', 'JavaScript'],
    color: '#8B5CF6',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🚀',
    title: 'Portfolio Futuristik',
    desc: 'Landing page portfolio modern dengan animasi, dark theme, dan Dino Game.',
    longDesc: 'Personal portfolio website dengan desain futuristik, dark mode, dan berbagai animasi interaktif menggunakan Framer Motion. Fitur spesial: mini game Dino yang fully playable, typing animation, dan glassmorphism design.',
    features: ['Framer Motion Animations', 'Dino Mini Game', 'Typing Effect', 'Dark Glassmorphism'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#F59E0B',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🛠️',
    title: 'OpenHelp Platform',
    desc: 'Platform jasa coding: pembuatan website, refactoring, dan joki tugas.',
    longDesc: 'Platform jasa digital yang menyediakan layanan coding untuk pelajar dan profesional. Melayani pembuatan website dari nol, refactoring kode yang berantakan, modifikasi project open source, dan bantuan tugas pemrograman.',
    features: ['Pembuatan Website', 'Joki Tugas Coding', 'Refactoring Kode', 'Open Source Modding'],
    tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
    color: '#EF4444',
    demo: '#',
    github: '#',
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 500,
          background: 'rgba(4,13,26,0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          animation: 'fadeInBd .2s ease',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 501, width: '100%', maxWidth: 560,
        padding: '0 16px',
        maxHeight: '90vh',
        overflowY: 'auto',
        animation: 'slideUpM .25s ease',
      }}>
        <div style={{
          background: 'rgba(8,18,38,0.98)',
          border: `1px solid ${project.color}30`,
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: `0 32px 80px rgba(0,0,0,0.7), 0 0 40px ${project.color}12`,
        }}>

          {/* Preview area (emoji placeholder) */}
          <div style={{
            height: 190,
            background: `linear-gradient(135deg, ${project.color}18, ${project.color}06, rgba(4,13,26,0.9))`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            borderBottom: `1px solid ${project.color}18`,
          }}>
            <div style={{ fontSize: 72, filter: 'drop-shadow(0 0 24px rgba(0,0,0,0.5))' }}>
              {project.emoji}
            </div>
            {/* Color accent bar top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${project.color}, ${project.color}44, transparent)` }} />
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 14, right: 14,
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(4,13,26,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94A3B8', fontSize: 14,
                cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                transition: 'all .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(4,13,26,0.7)'; e.currentTarget.style.color = '#94A3B8'; }}
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: '24px 28px 28px' }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: '#E2EBF8', marginBottom: 10 }}>
              {project.title}
            </h3>
            <p style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.8, marginBottom: 22 }}>
              {project.longDesc}
            </p>

            {/* Features */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, color: '#E2EBF8', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
                Features:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.features.map(f => (
                  <span key={f} style={{
                    padding: '5px 14px', borderRadius: 100,
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}30`,
                    fontSize: 12, color: project.color,
                    fontFamily: "'DM Sans',sans-serif", fontWeight: 500,
                  }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, color: '#E2EBF8', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
                Tech Stack:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '5px 14px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: 12, color: '#CBD5E1',
                    fontFamily: "'Syne',sans-serif", fontWeight: 600,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 10 }}>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                <button style={{
                  width: '100%', padding: '12px',
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
                  border: 'none', color: '#030B14',
                  fontFamily: "'Syne',sans-serif", fontWeight: 800,
                  fontSize: 14, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  transition: 'box-shadow .3s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 24px ${project.color}55`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  🔗 Demo
                </button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                <button style={{
                  width: '100%', padding: '12px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#E2EBF8',
                  fontFamily: "'Syne',sans-serif", fontWeight: 700,
                  fontSize: 14, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  transition: 'all .2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >
                  🐙 Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInBd { from{opacity:0} to{opacity:1} }
        @keyframes slideUpM { from{opacity:0;transform:translate(-50%,-47%)} to{opacity:1;transform:translate(-50%,-50%)} }
      `}</style>
    </>
  );
}

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <section id="projects" style={{ padding: 'clamp(70px, 10vw, 100px) 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel text="Portfolio" centered />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, marginTop: 18 }}>
              Featured <span style={{ color: '#06FFA5' }}>Projects</span>
            </h2>
            <p style={{ color: '#64748B', marginTop: 12, fontSize: 15 }}>
              Klik kartu project untuk melihat detail lengkap
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-d${(i % 3) + 1}`}
                onClick={() => setSelected(p)}
                style={{
                  background: 'rgba(8,20,40,0.82)',
                  border: '1px solid rgba(6,255,165,0.1)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.borderColor = `${p.color}44`;
                  el.style.boxShadow = `0 12px 48px ${p.color}14`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = 'rgba(6,255,165,0.1)';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Color top bar */}
                <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}55, transparent)` }} />

                {/* Preview */}
                <div style={{
                  height: 140,
                  background: `linear-gradient(135deg, ${p.color}16, ${p.color}06)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 60, position: 'relative',
                }}>
                  {p.emoji}
                  {/* Click hint */}
                  <div style={{
                    position: 'absolute', bottom: 10, right: 12,
                    fontSize: 11, color: `${p.color}99`,
                    fontFamily: "'Syne',sans-serif", fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    Click for details →
                  </div>
                  <div className="animate-glow-pulse" style={{ position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: '50%', background: p.color, opacity: 0.6 }} />
                </div>

                <div style={{ padding: '18px 22px 22px' }}>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#E2EBF8' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: '#64748B', marginBottom: 14, lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        padding: '2px 9px', borderRadius: 100,
                        background: `${p.color}12`,
                        border: `1px solid ${p.color}28`,
                        fontSize: 11, color: p.color,
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
      </section>
    </>
  );
}
