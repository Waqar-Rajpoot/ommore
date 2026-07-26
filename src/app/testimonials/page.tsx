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
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        {/* Page header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C6FF0]">
            
        <SectionHeading eyebrow="Client Testimonials" heading="What Our Clients Say, and how you can check it" />
          </span>
          <p className="mt-4 leading-relaxed text-[#9BA1AF] sm:text-lg">
            Every review here links back to where it actually lives —
            Clutch, Google, Upwork, or LinkedIn — so you&lsquo;re never taking
            our word for it alone.
          </p>
        </div>

        {/* Aggregate trust stats */}
        <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-white/10 px-8 py-6 bg-glass shadow-glass backdrop-blur-glass backdrop-saturate-180">
          <div className="flex flex-col items-center gap-1.5">
            <StarRating rating={avgRating} size="md" />
            <span className="text-xs text-[#6B7280]">
              {avgRating.toFixed(1)} average rating
            </span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-white">{testimonials.length}</span>
            <span className="text-xs text-[#6B7280]">client reviews</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-[#4FD1C5]">{verifiedCount}</span>
            <span className="text-xs text-[#6B7280]">independently verified</span>
          </div>
        </div>

        {/* Filterable grid */}
        <div className="mt-16">
          <TestimonialsGrid testimonials={testimonials} categories={categories} />
        </div>
      </div>
    </div>
  );
}
