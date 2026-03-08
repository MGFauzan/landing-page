import ClientWrapper from '@/components/ClientWrapper';
import Navbar from '@/components/navbar/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import ResumeSection from '@/components/resume/ResumeSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import DinoGameWrapper from '@/components/game/DinoGameWrapper';
import CertificationsSection from '@/components/certifications/CertificationsSection';
import TechStackSection from '@/components/techstack/TechStackSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <ClientWrapper>
      <main style={{ background: '#040D1A', minHeight: '100vh' }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <DinoGameWrapper />
        <CertificationsSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </main>
    </ClientWrapper>
  );
}
