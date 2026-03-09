import type { Service, Project, Testimonial, SocialLink } from '@/types';

export const SERVICES: Service[] = [
  { icon: '🌐', title: 'Web Development', desc: 'Website modern, cepat, dan scalable menggunakan Next.js & React dengan performa tinggi.', color: '#06FFA5' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Antarmuka elegan dan intuitif. Dari wireframe hingga prototype high-fidelity.', color: '#10B981' },
  { icon: '⚡', title: 'Fullstack Development', desc: 'End-to-end development: frontend, backend, database, dan deployment ke production.', color: '#06B6D4' },
  { icon: '🤖', title: 'Automation System', desc: 'Sistem otomasi cerdas untuk efisiensi bisnis, workflow digital, dan task scheduling.', color: '#8B5CF6' },
  { icon: '🔌', title: 'API Development', desc: 'RESTful API yang handal, aman, terdokumentasi, dan siap diintegrasikan.', color: '#F59E0B' },
  { icon: '🔗', title: 'System Integration', desc: 'Menghubungkan berbagai sistem dan layanan untuk ekosistem digital yang seamless.', color: '#EF4444' },
];

export const PROJECTS: Project[] = [
  {
    emoji: '🗂️',
    title: 'Sistem Arsip Digital',
    desc: 'Web aplikasi manajemen arsip digital dengan admin panel, pencarian cepat, dan manajemen dokumen berbasis kategori.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#06FFA5',
    demo: '#',
    github: '#',
  },
  {
    emoji: '⛺',
    title: 'Web Sewa Alat Camping',
    desc: 'Platform sewa perlengkapan camping online dengan sistem booking, katalog produk, dan manajemen transaksi.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    color: '#10B981',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🕌',
    title: 'Website Pondok Pesantren',
    desc: 'Website profil dan informasi pondok pesantren yang dibangun menggunakan Python Flask dengan CMS sederhana.',
    tech: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    color: '#06B6D4',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🏘️',
    title: 'e-Kampung (Web RT/RW)',
    desc: 'Sistem informasi warga berbasis web dengan fitur jadwal ronda, notifikasi WhatsApp/SMS Gateway, dan manajemen warga.',
    tech: ['PHP', 'MySQL', 'WhatsApp API', 'JavaScript'],
    color: '#8B5CF6',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🚀',
    title: 'Portfolio Futuristik',
    desc: 'Landing page portfolio modern dengan desain futuristik, animasi Framer Motion, Dino Game, dan dark theme.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#F59E0B',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🛠️',
    title: 'OpenHelp Platform',
    desc: 'Platform jasa coding: joki tugas, pembuatan website, refactoring kode, dan modifikasi project open source.',
    tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
    color: '#EF4444',
    demo: '#',
    github: '#',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Budi Santoso', role: 'Guru SMK RPL', text: 'Fauzan adalah siswa yang sangat berdedikasi. Kemampuan coding-nya jauh di atas rata-rata teman sekelasnya.', avatar: 'BS', color: '#06FFA5' },
  { name: 'Sari Dewi', role: 'Client Freelance', text: 'Sangat profesional dan hasilnya memuaskan. Website yang dibuat berjalan lancar dan sesuai permintaan.', avatar: 'SD', color: '#10B981' },
  { name: 'Rizky Pratama', role: 'Teman Kolaborasi', text: 'Enak banget kerja sama Fauzan, komunikatif dan kodenya rapi. Sangat recommended!', avatar: 'RP', color: '#06B6D4' },
];


export const TECHS: string[] = [
  'PHP', 'JavaScript', 'Python', 'React', 'Next.js',
  'TypeScript', 'Flask', 'Node.js', 'MySQL', 'Laravel',
  'Tailwind CSS', 'Bootstrap', 'CodeIgniter','Dart', 'HTML/CSS',
];

export const SOCIALS: SocialLink[] = [
  { icon: '💬', label: 'WhatsApp', val: '+62 xxx-xxxx-xxxx', color: '#25D366', href: 'https://wa.me/621222939029' },
  { icon: '📧', label: 'Email', val: 'mgfauzan05@gmail.com', color: '#06FFA5', href: 'mailto:mgfauzan05@gmail.com' },
  { icon: '💼', label: 'LinkedIn', val: 'Muhammad Ghiyyast Fauzan', color: '#0A66C2', href: 'https://linkedin.com/in/mgfauzan' },
  { icon: '🐙', label: 'GitHub', val: 'MGFauzan', color: '#E2EBF8', href: 'https://github.com/mgfauzan' },
  { icon: '📸', label: 'Instagram', val: 'yastfauzan_', color: '#E1306C', href: 'https://instagram.com/yastfauzan_' },
];

export const NAV_ITEMS = ['Home', 'About', 'Resume', 'Projects', 'Game', 'Certifications', 'Contact'];

export const STATS = [
  { value: '5+', label: 'Projects Completed' },
  { value: '4+', label: 'Technologies Used' },
  { value: '2+', label: 'Years Coding' },
];

export const PERSON = {
  fullName: 'Muhammad Ghiyyast Fauzan',
  nickname: 'Fauzan',
  email: 'mgfauzan05@gmail.com',
  location: 'Bandung, Indonesia',
  role: 'Web Developer & Student',
  status: 'Mahasiswa UPI — Otomasi Industri & Robotika',
  bio: 'Mahasiswa Universitas Pendidikan Indonesia, program studi Pendidikan Teknik Otomasi Industri dan Robotika. Passionate di bidang web development sekaligus teknologi industri. Aktif membangun web application nyata — dari sistem informasi, e-commerce, hingga landing page modern.',
  cvFile: '/cv.pdf',
  cvDownloadName: 'CV-Muhammad-Ghiyyast-Fauzan.pdf',
  siteUrl: 'https://fauzan.dev',
  twitter: '@mgfauzan',
};
