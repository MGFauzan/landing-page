'use client';
import SectionLabel from '@/components/ui/SectionLabel';

const CERTS = [
  {
    issuer: 'UPI',
    issuerColor: '#06FFA5',
    year: '2025',
    title: 'Innovate with AI',
    tags: ['JavaScript', 'React', 'Node.js', '+2'],
    certUrl: '#',
    preview: '/certs/inovxupi.jpg',
  },
  {/*
    issuer: 'Badan Nasional Sertifikasi Profesi',
    issuerColor: '#06B6D4',
    year: '2025',
    title: 'BNSP Junior Web Programmer',
    tags: ['React', 'Redux', 'React Native', '+4'],
    certUrl: '#',
    preview: null,
  },
  {
    issuer: 'Microsoft',
    issuerColor: '#10B981',
    year: '2025',
    title: 'Azure AI Fundamentals',
    tags: ['Azure AI Vision', 'Azure ML', '+1'],
    certUrl: '#',
    preview: null,
  },
  {
    issuer: 'Codepolitan',
    issuerColor: '#8B5CF6',
    year: '2025',
    title: 'Fundamentals & Use of Generative AI',
    tags: ['Prompt Engineering', 'Fine-Tuning', 'RAG'],
    certUrl: '#',
    preview: null,
  },
  {
    issuer: 'KEMENPORA',
    issuerColor: '#F59E0B',
    year: '2025',
    title: 'Innovate with AI',
    tags: ['Computer Vision', 'NLP', 'Machine Learning'],
    certUrl: '#',
    preview: null,
  },
  {
    issuer: 'Intelligo ID',
    issuerColor: '#EF4444',
    year: '2025',
    title: 'Data Science & AI Bootcamp',
    tags: ['Scikit-learn', 'TensorFlow', 'PyTorch', '+5'],
    certUrl: '#',
    preview: null,
  */},
];

// Placeholder preview — ganti src dengan path gambar sertifikat kamu di /public/certs/
function CertPreview({ title, issuer, color }: { title: string; issuer: string; color: string }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '4/3',
      background: `linear-gradient(135deg, rgba(8,20,40,0.95), rgba(8,20,40,0.8))`,
      border: `1px solid ${color}22`,
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative corner */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, transparent)` }} />
      <div style={{ fontSize: 36 }}>🏆</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 700, color, letterSpacing: 2, textTransform: 'uppercase' }}>
        SERTIFIKAT
      </div>
      <div style={{ fontSize: 12, color: '#475569', textAlign: 'center', padding: '0 16px', lineHeight: 1.5 }}>
        {issuer}
      </div>
      {/* Hint text */}
      <div style={{ position: 'absolute', bottom: 10, right: 12, fontSize: 10, color: '#334155' }}>
        Ganti dengan gambar asli
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      style={{
        padding: 'clamp(70px, 10vw, 100px) 24px',
        background: 'rgba(6,255,165,0.012)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,255,165,0.04) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Certifications" centered />
          <h2 style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 'clamp(28px,4vw,48px)',
            fontWeight: 800,
            marginTop: 18,
            lineHeight: 1.1,
          }}>
            Professional{' '}
            <span style={{ color: '#06FFA5' }}>Certifications</span>
          </h2>
          {/* Underline accent */}
          <div style={{
            width: 80, height: 3,
            background: 'linear-gradient(90deg, #06FFA5, #10B981)',
            borderRadius: 2,
            margin: '16px auto 20px',
          }} />
          <p style={{ color: '#64748B', fontSize: 15, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Validated expertise through industry-recognized certifications and specialized training
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className={`reveal reveal-d${(i % 3) + 1}`}
              style={{
                background: 'rgba(8,20,40,0.82)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(6,255,165,0.1)',
                borderRadius: 18,
                overflow: 'hidden',
                transition: 'all .35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.issuerColor}44`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 48px ${cert.issuerColor}12`;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,255,165,0.1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Certificate image area */}
              <div style={{ padding: '16px 16px 0' }}>
                {cert.preview
                  ? <img src={cert.preview} alt={cert.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 10, display: 'block' }} />
                  : <CertPreview title={cert.title || ""} issuer={cert.issuer || ""} color={cert.issuerColor || ""} />
                }
              </div>

              {/* Info */}
              <div style={{ padding: '18px 20px 0' }}>
                {/* Issuer + Year row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 13, fontWeight: 700,
                    color: cert.issuerColor,
                  }}>
                    {cert.issuer}
                  </span>
                  <span style={{
                    fontSize: 13, color: '#64748B', fontWeight: 500,
                  }}>
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 17, fontWeight: 800,
                  color: '#E2EBF8', marginBottom: 12, lineHeight: 1.25,
                }}>
                  {cert.title}
                </h3>
              </div>

              {/* View button */}
              <a
                href={cert.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  margin: '0 20px 20px',
                  padding: '11px',
                  borderRadius: 10,
                  border: `1px solid ${cert.issuerColor}28`,
                  background: `${cert.issuerColor}08`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  cursor: 'pointer',
                  transition: 'all .25s',
                  color: cert.issuerColor,
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = `${cert.issuerColor}18`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.issuerColor}55`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = `${cert.issuerColor}08`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.issuerColor}28`;
                  }}
                >
                  View Certificate
                  <span style={{ fontSize: 14 }}>↗</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
