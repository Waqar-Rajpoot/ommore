// src/components/testimonials/testimonial-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Testimonial } from "@/data/testimonials";
import GlassCard from "@/components/ui/GlassCard";
import { StarRating } from "./star-rating";
import { QuoteMarkIcon, CheckBadgeIcon } from "./icons";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const topMetric = testimonial.metrics[0];

  return (
    <GlassCard as={Link} href={`/testimonials/${testimonial.slug}`} className="relative flex flex-col gap-4">
      <QuoteMarkIcon className="absolute right-6 top-6 h-8 w-8 text-text-muted/20" />

      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.clientName}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-text-primary">
            {testimonial.clientName}
          </p>
          <p className="truncate text-xs text-text-muted">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="line-clamp-4 text-sm leading-relaxed text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {topMetric && (
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-primary-muted px-2.5 py-1 font-semibold text-primary">
            {topMetric.value}
          </span>
          <span className="text-text-muted">{topMetric.label}</span>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-text-muted">
        <span className="rounded-full border border-border-glass px-2.5 py-1">
          {testimonial.category}
        </span>
        {testimonial.verified && (
          <span className="flex items-center gap-1 text-success">
            <CheckBadgeIcon className="h-3.5 w-3.5" />
            Verified
          </span>
        )}
      </div>
    </GlassCard>
  );
}
