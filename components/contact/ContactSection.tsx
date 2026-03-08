'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactSchema } from '@/lib/validation';
import SectionLabel from '@/components/ui/SectionLabel';
import { SOCIALS } from '@/constants/data';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
        reset();
        setTimeout(() => setSent(false), 6000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: 'clamp(70px, 10vw, 100px) 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel text="Contact" centered />
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800, marginTop: 18,
            }}
          >
            Let&apos;s <span style={{ color: '#06FFA5' }}>Work Together</span>
          </h2>
          <p style={{ color: '#64748B', marginTop: 10, fontSize: 16 }}>
            Punya ide project? Mari kita diskusikan!
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
          }}
        >
          {/* Social links */}
          <div>
            <p style={{ color: '#94A3B8', lineHeight: 1.85, marginBottom: 32, fontSize: 16 }}>
              Saya siap membantu mewujudkan visi digital kamu. Apapun projectnya —
              dari landing page hingga sistem enterprise — let&apos;s talk!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SOCIALS.map(({ icon, label, val, color, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="glass"
                    style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 14 }}
                  >
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 2 }}>{label}</div>
                      <div
                        style={{
                          fontSize: 13.5, color, fontWeight: 500,
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}
                      >
                        {val}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-static" style={{ padding: 32 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>🚀</div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 24, fontWeight: 800, color: '#06FFA5', marginBottom: 10,
                  }}
                >
                  Pesan Terkirim!
                </div>
                <div style={{ color: '#64748B', fontSize: 15, lineHeight: 1.6 }}>
                  Terima kasih! Saya akan membalas dalam 1×24 jam.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 20, fontWeight: 700, marginBottom: 24,
                  }}
                >
                  Kirim Pesan
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label
                      style={{
                        fontSize: 12, color: '#94A3B8',
                        display: 'block', marginBottom: 6, fontWeight: 500,
                      }}
                    >
                      Full Name 
                    </label>
                    <input
                      className="form-input"
                      placeholder="John Doe"
                      {...register('name')}
                    />
                    {errors.name && (
                      <span style={{ fontSize: 12, color: '#EF4444', marginTop: 4, display: 'block' }}>
                        ⚠ {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 12, color: '#94A3B8',
                        display: 'block', marginBottom: 6, fontWeight: 500,
                      }}
                    >
                      Email Address 
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <span style={{ fontSize: 12, color: '#EF4444', marginTop: 4, display: 'block' }}>
                        ⚠ {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 12, color: '#94A3B8',
                        display: 'block', marginBottom: 6, fontWeight: 500,
                      }}
                    >
                      Message 
                    </label>
                    <textarea
                      className="form-input"
                      rows={5}
                      placeholder="Ceritakan tentang project kamu..."
                      style={{ resize: 'none' }}
                      {...register('message')}
                    />
                    {errors.message && (
                      <span style={{ fontSize: 12, color: '#EF4444', marginTop: 4, display: 'block' }}>
                        ⚠ {errors.message.message}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitting}
                    style={{ padding: '14px', fontSize: 15, marginTop: 8, opacity: submitting ? 0.7 : 1 }}
                  >
                    {submitting ? 'Mengirim…' : 'Send Message ✦'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
