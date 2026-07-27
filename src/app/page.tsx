import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import BlogPreview from '@/components/home/BlogPreview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialsPreview />
      <BlogPreview />
    </>
  );
}