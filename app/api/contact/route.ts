import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', issues: parsed.error.flatten() }, { status: 400 });
    }

    const { name, email, message } = parsed.data;
    const safeName = name.replace(/[<>]/g, '');
    const safeMessage = message.replace(/[<>]/g, '');

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'mgfauzan05@gmail.com';

    if (!apiKey) {
      console.log('[Contact Form - Dev Mode]', { name: safeName, email, message: safeMessage });
      return NextResponse.json({ success: true, mode: 'dev' });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio Fauzan] Pesan baru dari ${safeName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#040D1A;color:#E2EBF8;border-radius:12px;border:1px solid rgba(6,255,165,0.2);">
          <h2 style="color:#06FFA5;margin-bottom:24px;">📬 Pesan Baru dari Portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="color:#64748B;padding:8px 0;font-size:13px;width:80px;">Nama</td><td style="color:#E2EBF8;padding:8px 0;">${safeName}</td></tr>
            <tr><td style="color:#64748B;padding:8px 0;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#06FFA5;">${email}</a></td></tr>
          </table>
          <hr style="border-color:rgba(6,255,165,0.1);margin:20px 0;">
          <p style="color:#94A3B8;line-height:1.8;white-space:pre-wrap;">${safeMessage}</p>
          <p style="color:#475569;font-size:12px;margin-top:32px;">Terkirim dari portfolio fauzan.dev</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
