// src/app/testimonials/page.tsx
import type { Metadata } from "next";
import { getAllTestimonials, getCategories } from "@/data/testimonials";
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid";
import { StarRating } from "@/components/testimonials/star-rating";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Client Testimonials | Ommore",
  description:
    "Verified feedback from real Ommore clients — with links back to the original review and the results behind each project.",
};

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();
  const categories = getCategories();

  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const verifiedCount = testimonials.filter((t) => t.verified).length;

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading
        eyebrow="Client Testimonials"
        heading="What Our Clients Say, and How You Can Check It"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
        Every review here links back to where it actually lives — Clutch, Google, Upwork, or
        LinkedIn — so you&rsquo;re never taking our word for it alone.
      </p>

      <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border-glass bg-glass px-8 py-6 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]">
        <div className="flex flex-col items-center gap-1.5">
          <StarRating rating={avgRating} size="md" />
          <span className="text-xs text-text-muted">
            {avgRating.toFixed(1)} average rating
          </span>
        </div>
        <div className="h-8 w-px bg-border-glass" />
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-text-primary">{testimonials.length}</span>
          <span className="text-xs text-text-muted">client reviews</span>
        </div>
        <div className="h-8 w-px bg-border-glass" />
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-success">{verifiedCount}</span>
          <span className="text-xs text-text-muted">independently verified</span>
        </div>
      </div>

      <div className="mt-16">
        <TestimonialsGrid testimonials={testimonials} categories={categories} />
      </div>
    </section>
  );
}
