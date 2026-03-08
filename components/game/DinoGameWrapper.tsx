'use client';
import dynamic from 'next/dynamic';

const DinoGame = dynamic(() => import('./DinoGame'), {
  ssr: false,
  loading: () => (
    <section id="game" style={{ padding: '100px 24px', textAlign: 'center', color: '#64748B', background: 'rgba(6,255,165,0.01)' }}>
      <p>Loading Game…</p>
    </section>
  ),
});

export default function DinoGameWrapper() {
  return <DinoGame />;
}
