import SectionLabel from '@/components/ui/SectionLabel';
import Orb from '@/components/ui/Orb';
import { TECHS } from '@/constants/data';

export default function TechStackSection() {
  return (
    <section
      id="techstack"
      style={{
        padding: 'clamp(70px, 10vw, 100px) 24px',
        background: 'rgba(6,255,165,0.012)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Orb top="50%" left="50%" size={500} color="#06FFA5" opacity={0.03} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <SectionLabel text="Tech Stack" centered />
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, marginTop: 18,
            }}
          >
            Tools &amp; <span style={{ color: '#06FFA5' }}>Technologies</span>
          </h2>
          <p style={{ color: '#64748B', marginTop: 10, fontSize: 15 }}>
            Teknologi yang saya kuasai dan gunakan sehari-hari
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}
        >
          {TECHS.map((t) => (
            <div key={t} className="tech-pill">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
