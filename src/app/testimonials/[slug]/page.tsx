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
import ClientMark from "@/components/ui/ClientMark";
import GlassCard from "@/components/ui/GlassCard";
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
    <div>
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
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
              <p className="text-lg font-semibold text-text-primary">{testimonial.clientName}</p>
              <p className="flex items-center gap-1.5 text-sm text-text-secondary">
                {testimonial.role} at {testimonial.company}
                <ClientMark name={testimonial.company} className="h-5 w-5 text-[10px]" />
              </p>
            </div>
          </div>
          <StarRating rating={testimonial.rating} size="md" />
        </div>

        {/* Pull quote with signature quote-mark motif */}
        <GlassCard className="relative mt-10 px-7 py-10 sm:px-10">
          <QuoteMarkIcon className="absolute left-7 top-7 h-10 w-10 text-primary/20 sm:left-10 sm:top-10" />
          <p className="relative font-display text-xl font-medium leading-relaxed text-text-primary sm:text-2xl">
            {testimonial.fullQuote}
          </p>
        </GlassCard>

        {/* Verification row */}
        <div className="mt-6">
          <VerifiedRow testimonial={testimonial} size="md" />
        </div>

        {/* Metrics */}
        {testimonial.metrics.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {testimonial.metrics.map((m) => (
              <GlassCard key={m.label} className="p-5 text-center">
                <p className="font-display text-2xl font-bold text-primary">{m.value}</p>
                <p className="mt-1 text-xs text-text-muted">{m.label}</p>
              </GlassCard>
            ))}
          </div>
        )}

        {/* Project context */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border-glass pt-6 text-sm">
          <p className="text-text-secondary">
            Project: <span className="text-text-primary">{testimonial.projectName}</span>
            <span className="mx-2 text-text-muted">·</span>
            <span className="text-text-muted">{formatDate(testimonial.date)}</span>
          </p>
          {testimonial.projectUrl && (
            <Link
              href={testimonial.projectUrl}
              className="font-display font-medium text-primary hover:text-text-primary"
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
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              More from {testimonial.category}
            </h2>
            <div className="h-px flex-1 bg-border-glass" />
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
