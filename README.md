# Muhammad Ghiyyast Fauzan — Portfolio Website

Futuristic portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React
- **Deploy**: Vercel

## 📂 Project Structure

```
├── app/
│   ├── api/contact/route.ts     # Contact form API
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout + metadata
│   ├── page.tsx                 # Main page
│   └── sitemap.ts               # Auto sitemap
├── components/
│   ├── navbar/                  # Sticky glass navbar
│   ├── hero/                    # Hero with framer-motion
│   ├── about/                   # About section
│   ├── services/                # Services grid
│   ├── portfolio/               # Projects grid
│   ├── game/                    # 🎮 Dino Canvas Game
│   ├── testimonials/            # Auto-rotate testimonials
│   ├── techstack/               # Tech pills
│   ├── contact/                 # Form with validation
│   ├── footer/                  # Footer
│   └── ui/                      # Shared components (Orb, SectionLabel)
├── hooks/
│   ├── useGameEngine.ts         # Dino game logic
│   ├── useScrollReveal.ts       # IntersectionObserver reveal
│   └── useWindowWidth.ts        # Responsive width
├── lib/
│   ├── utils.ts                 # cn(), scrollTo()
│   └── validation.ts            # Zod contact schema
├── constants/
│   └── data.ts                  # All static data
├── types/
│   └── index.ts                 # TypeScript interfaces
└── styles/
    └── animations.css           # CSS animations
```

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> Get a free Resend API key at [resend.com](https://resend.com)

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## 🎮 Dino Game Controls

| Control | Action |
|---------|--------|
| `Space` | Jump |
| Mouse click | Jump |
| Touch tap | Jump |

## ✏️ Customization

- **Personal info**: Edit `constants/data.ts`
- **Colors**: Edit CSS variables in `app/globals.css`
- **SEO metadata**: Edit `app/layout.tsx`
- **Email template**: Edit `app/api/contact/route.ts`

## 📄 License

MIT — Free to use and modify.
