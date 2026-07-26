'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TestimonialCard } from '@/components/testimonials/testimonial-card';
import SectionHeading from '@/components/ui/SectionHeading';
import { getAllTestimonials } from '@/data/testimonials';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function TestimonialsPreview() {
  // Real data from src/data/testimonials.ts — top 3 most recent.
  // Swap for `GET /api/testimonials?featured=true` once the backend exists.
  const testimonials = getAllTestimonials().slice(0, 3);

  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading eyebrow="Client Reviews" heading="What Our Clients Say" />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-3 gap-6 max-md:grid-cols-1"
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.slug} variants={fadeUp}>
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/testimonials"
          className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display font-semibold text-primary transition-colors hover:bg-primary-muted"
        >
          View All Testimonials
        </Link>
      </div>
    </section>
  );
}
