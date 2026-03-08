'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
