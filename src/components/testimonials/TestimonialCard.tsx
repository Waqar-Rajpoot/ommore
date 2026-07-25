'use client';

import { Star } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export interface Testimonial {
  name: string;
  country: string;
  countryFlag: string;
  service: string;
  rating: number;
  quote: string;
  avatarUrl?: string | null;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name.charAt(0).toUpperCase();

  return (
    <GlassCard className="p-8">
      <div className="mb-5 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill={i < testimonial.rating ? '#FFB800' : 'transparent'}
            stroke={i < testimonial.rating ? '#FFB800' : '#1A2040'}
          />
        ))}
      </div>

      <p className="relative mb-6 text-base italic leading-relaxed text-text-primary before:mr-1 before:text-3xl before:text-primary/40 before:content-['\201C']">
        {testimonial.quote}
      </p>

      <div className="mb-5 border-t border-border-glass" />

      <div className="flex items-center gap-3">
        {testimonial.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-text-primary">
            {testimonial.name} <span className="ml-1">{testimonial.countryFlag}</span>
          </p>
          <p className="text-xs text-text-secondary">{testimonial.country}</p>
        </div>
      </div>

      <span className="mt-4 inline-block rounded bg-primary-muted px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-primary">
        {testimonial.service}
      </span>
    </GlassCard>
  );
}
