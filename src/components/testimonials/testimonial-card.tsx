// src/components/testimonials/testimonial-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Testimonial } from "@/data/testimonials";
import { CompanyMark } from "./company-mark";
import { StarRating } from "./star-rating";
import { QuoteMarkIcon, CheckBadgeIcon } from "./icons";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const topMetric = testimonial.metrics[0];

  return (
    <Link
      href={`/testimonials/${testimonial.slug}`}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-glass p-6 shadow-glass backdrop-blur-glass backdrop-saturate-180 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6FF0]/40 hover:shadow-[0_0_0_1px_rgba(124,111,240,0.15),0_20px_40px_-20px_rgba(124,111,240,0.35)]"
    >
      <QuoteMarkIcon className="absolute right-6 top-6 h-8 w-8 text-white/5" />

      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.clientName}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            {testimonial.clientName}
          </p>
          <p className="truncate text-xs text-[#6B7280]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
        <CompanyMark company={testimonial.company} className="ml-auto h-7 w-7 flex-shrink-0" />
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="line-clamp-4 text-sm leading-relaxed text-[#B7BCC7]">
        “{testimonial.quote}”
      </p>

      {topMetric && (
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-[#7C6FF0]/15 px-2.5 py-1 font-semibold text-[#B4A9FF]">
            {topMetric.value}
          </span>
          <span className="text-[#6B7280]">{topMetric.label}</span>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-[#6B7280]">
        <span className="rounded-full border border-white/10 px-2.5 py-1">
          {testimonial.category}
        </span>
        {testimonial.verified && (
          <span className="flex items-center gap-1 text-[#4FD1C5]">
            <CheckBadgeIcon className="h-3.5 w-3.5" />
            Verified
          </span>
        )}
      </div>
    </Link>
  );
}
