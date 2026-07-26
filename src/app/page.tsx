// import HeroSection from '@/components/home/HeroSection';
// import AboutSection from '@/components/home/AboutSection';
// import ServicesSection from '@/components/home/ServicesSection';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import ContactSection from '@/components/home/ContactSection';
// import { TestimonialCard } from '@/components/testimonials/testimonial-card';
// import { testimonials } from "@/data/testimonials";
// import { BlogCard } from '@/components/blog/blog-card';
// import { blogPosts } from '@/data/blog-posts';


// export default function HomePage() {
//   return (
//     <>
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <WhyChooseUs />
//       <TestimonialCard testimonial={testimonials[0]} />
//       <BlogCard post={blogPosts[0]} />
//       <ContactSection />
//     </>
//   );
// }






import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import BlogPreview from '@/components/home/BlogPreview';
import ContactSection from '@/components/home/ContactSection';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsPreview />
      <BlogPreview />
    </>
  );
}

