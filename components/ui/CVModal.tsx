'use client';
import { useEffect } from 'react';
import { PERSON } from '@/constants/data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  // Close on Escape key
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 500,
          background: 'rgba(4,13,26,0.80)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          animation: 'fadeIn .2s ease',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 501, width: '100%', maxWidth: 440,
        padding: '0 16px',
        animation: 'slideUpModal .25s ease',
      }}>
        <div style={{
          background: 'rgba(10,24,48,0.98)',
          border: '1px solid rgba(6,255,165,0.2)',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,255,165,0.05)',
        }}>

          {/* Header */}
          <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid rgba(6,255,165,0.08)', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(6,255,165,0.1)', border: '1px solid rgba(6,255,165,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
              📄
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 800, color: '#E2EBF8', marginBottom: 4 }}>
                Download CV
              </div>
              <div style={{ fontSize: 13, color: '#64748B' }}>
                Anda akan mendownload CV dalam format PDF
              </div>
            </div>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#64748B', width: 30, height: 30, cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#E2EBF8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#64748B'; }}>
              ✕
            </button>
          </div>

          {/* File info card */}
          <div style={{ padding: '16px 24px' }}>
            <div style={{ background: 'rgba(6,255,165,0.04)', border: '1px solid rgba(6,255,165,0.12)', borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* PDF icon */}
              <div style={{ width: 46, height: 46, borderRadius: 10, background: 'linear-gradient(135deg, #1a56db, #1e40af)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>PDF</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: '#E2EBF8', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  CV_{PERSON.fullName.replace(/\s+/g, '_')}
                </div>
                <div style={{ fontSize: 12, color: '#64748B' }}>~500 KB</div>
              </div>
              {/* Download icon */}
              <a href={PERSON.cvFile} download={PERSON.cvDownloadName} onClick={onClose} style={{ color: '#06FFA5', textDecoration: 'none', fontSize: 20, flexShrink: 0, transition: 'opacity .2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                ⬇
              </a>
            </div>

            {/* File details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 0', marginTop: 14, padding: '0 4px' }}>
              {[['Format', 'PDF Document'], ['Halaman', '1 halaman']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gridColumn: '1 / -1', paddingBottom: 8, borderBottom: '1px solid rgba(6,255,165,0.06)' }}>
                  <span style={{ fontSize: 13, color: '#64748B' }}>{k}</span>
                  <span style={{ fontSize: 13, color: '#94A3B8', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ padding: '12px 24px 24px', display: 'flex', gap: 10 }}>
            <button onClick={onClose} style={{ flex: 1, padding: '12px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = '#E2EBF8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94A3B8'; }}>
              Batal
            </button>
            <a href={PERSON.cvFile} download={PERSON.cvDownloadName} onClick={onClose} style={{ flex: 2, textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '12px', borderRadius: 12, background: 'linear-gradient(135deg, #06FFA5, #10B981)', border: 'none', color: '#030B14', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'box-shadow .3s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 28px rgba(6,255,165,0.45)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                ⬇ Download CV
              </button>
            </a>
          </div>

          {/* Footer note */}
          <div style={{ padding: '0 24px 18px', textAlign: 'center' }}>
            <span style={{ fontSize: 12, color: '#475569' }}>
              File akan tersimpan di folder &ldquo;Downloads&rdquo; perangkat Anda
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUpModal { from{opacity:0;transform:translate(-50%,-46%)} to{opacity:1;transform:translate(-50%,-50%)} }
      `}</style>
    </>
  );
}
