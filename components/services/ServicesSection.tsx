import SectionLabel from '@/components/ui/SectionLabel';
import Orb from '@/components/ui/Orb';
import { SERVICES } from '@/constants/data';

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(70px, 10vw, 100px) 24px',
        background: 'rgba(6,255,165,0.012)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Orb top="50%" left="50%" size={600} color="#10B981" opacity={0.03} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel text="Services" centered />
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, marginTop: 18,
            }}
          >
            What I <span style={{ color: '#06FFA5' }}>Offer</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`glass reveal reveal-d${(i % 3) + 1}`}
            >
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 40, marginBottom: 18 }}>{s.icon}</div>
                <div
                  style={{
                    width: 36, height: 3,
                    background: `linear-gradient(90deg, ${s.color}, transparent)`,
                    borderRadius: 2, marginBottom: 16,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#E2EBF8',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
