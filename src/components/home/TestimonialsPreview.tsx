'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { PLACEHOLDER_TESTIMONIALS } from '@/lib/placeholder-testimonials';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function TestimonialsPreview() {
  // NOTE: wired to hardcoded PLACEHOLDER_TESTIMONIALS for now (Ticket-018 explicitly
  // allows this fallback). Swap for `GET /api/testimonials?featured=true` once the
  // backend (Ticket-031) exists — the fetch/loading/empty-state logic isn't built yet.
  if (PLACEHOLDER_TESTIMONIALS.length === 0) return null;

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
        {PLACEHOLDER_TESTIMONIALS.map((testimonial) => (
          <motion.div key={testimonial.name} variants={fadeUp}>
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/testimonials"
          className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
        >
          View All Testimonials
        </Link>
      </div>
    </section>
  );
}
