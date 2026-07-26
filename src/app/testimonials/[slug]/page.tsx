// src/app/testimonials/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatDate,
  getAllTestimonials,
  getRelatedTestimonials,
  getTestimonialBySlug,
} from "@/data/testimonials";
import { CompanyMark } from "@/components/testimonials/company-mark";
import { StarRating } from "@/components/testimonials/star-rating";
import { VerifiedRow } from "@/components/testimonials/verified-row";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { ArrowLeftIcon, QuoteMarkIcon } from "@/components/testimonials/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllTestimonials().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const testimonial = getTestimonialBySlug(slug);
  if (!testimonial) return { title: "Testimonial not found | Ommore" };

  return {
    title: `${testimonial.clientName}, ${testimonial.company} | Ommore Testimonials`,
    description: testimonial.quote,
  };
}

export default async function TestimonialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const testimonial = getTestimonialBySlug(slug);

  if (!testimonial) notFound();

  const related = getRelatedTestimonials(slug, 3);

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#9BA1AF] transition-colors hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to testimonials
        </Link>

        {/* Reviewer header */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.clientName}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-white">{testimonial.clientName}</p>
              <p className="flex items-center gap-1.5 text-sm text-[#9BA1AF]">
                {testimonial.role} at {testimonial.company}
                <CompanyMark company={testimonial.company} className="h-5 w-5 text-[10px]" />
              </p>
            </div>
          </div>
          <StarRating rating={testimonial.rating} size="md" />
        </div>

        {/* Pull quote with signature quote-mark motif */}
        <div className="relative mt-10 rounded-3xl border border-white/10 bg-[#12141B] px-7 py-10 sm:px-10">
          <QuoteMarkIcon className="absolute left-7 top-7 h-10 w-10 text-[#7C6FF0]/20 sm:left-10 sm:top-10" />
          <p className="relative text-xl font-medium leading-relaxed text-white sm:text-2xl">
            {testimonial.fullQuote}
          </p>
        </div>

        {/* Verification row */}
        <div className="mt-6">
          <VerifiedRow testimonial={testimonial} size="md" />
        </div>

        {/* Metrics */}
        {testimonial.metrics.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {testimonial.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-[#12141B] p-5 text-center"
              >
                <p className="text-2xl font-bold text-[#B4A9FF]">{m.value}</p>
                <p className="mt-1 text-xs text-[#6B7280]">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Project context */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm">
          <p className="text-[#9BA1AF]">
            Project: <span className="text-white">{testimonial.projectName}</span>
            <span className="mx-2 text-[#6B7280]">·</span>
            <span className="text-[#6B7280]">{formatDate(testimonial.date)}</span>
          </p>
          {testimonial.projectUrl && (
            <Link
              href={testimonial.projectUrl}
              className="font-medium text-[#B4A9FF] hover:text-white"
            >
              View case study →
            </Link>
          )}
        </div>
      </div>

      {/* Related testimonials */}
      {related.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#6B7280]">
              More from {testimonial.category}
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <TestimonialCard key={t.slug} testimonial={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
