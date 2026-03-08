import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fauzan.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muhammad Ghiyyast Fauzan — Fullstack Developer & UI/UX Designer',
    template: '%s | Fauzan',
  },
  description:
    'Mahasiswa Teknik Informatika & Fullstack Developer berbasis di Bandung. Spesialis Next.js, React, TypeScript, dan modern web applications.',
  keywords: [
    'fullstack developer', 'ui ux designer', 'next.js developer',
    'react developer', 'web developer bandung', 'mahasiswa developer',
    'muhammad ghiyyast fauzan', 'fauzan developer', 'typescript',
  ],
  authors: [{ name: 'Muhammad Ghiyyast Fauzan', url: siteUrl }],
  creator: 'Muhammad Ghiyyast Fauzan',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    title: 'Muhammad Ghiyyast Fauzan — Fullstack Developer & UI/UX Designer',
    description: 'Membangun digital experiences yang cepat, elegan, dan berdampak.',
    siteName: 'Fauzan Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fauzan Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Ghiyyast Fauzan — Fullstack Developer',
    description: 'Membangun digital experiences yang cepat, elegan, dan berdampak.',
    images: ['/og-image.png'],
    creator: '@mgfauzan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
