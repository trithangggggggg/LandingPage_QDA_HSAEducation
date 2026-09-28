import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import TimelineSection from '../components/landing/TimelineSection';
import ScheduleSection from '../components/landing/ScheduleSection';
import WhyUsSection from '../components/landing/WhyUsSection';
import TeachersSection from '../components/landing/TeachersSection';
import HonorSection from '../components/landing/HonorSection';
import UniversitySection from '../components/landing/UniversitySection';
import PricingSection from '../components/landing/PricingSection';
import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/landing/Footer';
import '../styles/landing.css';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TimelineSection />
        <ScheduleSection />
        <WhyUsSection />
        <TeachersSection />
        <HonorSection />
        <UniversitySection />
        <PricingSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
