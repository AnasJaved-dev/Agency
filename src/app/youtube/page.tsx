import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorks from '@/components/home/HowItWorks';
import { YouTubePricingSection } from '@/components/sections/YoutubePricingSection';
import { GraphicDesignPricing } from '@/components/sections/GraphicDesignPricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <YouTubePricingSection />
      <GraphicDesignPricing />
    </main>
  );
}
