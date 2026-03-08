// ─── Service ───────────────────────────────────────────────
export interface Service {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

// ─── Project ───────────────────────────────────────────────
export interface Project {
  emoji: string;
  title: string;
  desc: string;
  tech: string[];
  color: string;
  demo?: string;
  github?: string;
}

// ─── Testimonial ───────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  color: string;
}

// ─── Social Link ───────────────────────────────────────────
export interface SocialLink {
  icon: string;
  label: string;
  val: string;
  color: string;
  href: string;
}

// ─── Contact Form ──────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ─── Game ──────────────────────────────────────────────────
export interface DinoState {
  x: number;
  y: number;
  vy: number;
  onGround: boolean;
}

export interface Obstacle {
  x: number;
  h: number;
}

export interface GameState {
  running: boolean;
  over: boolean;
  score: number;
  frame: number;
  started: boolean;
}

export interface SimState {
  dino: DinoState;
  obs: Obstacle[];
  speed: number;
}
