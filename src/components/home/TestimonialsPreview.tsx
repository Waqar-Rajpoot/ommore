import { Star, BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

const HOME_FEATURED_LIMIT = 3;

export default function TestimonialsPreview() {
  const seen = new Set<string>();

  const featured = testimonials
    .filter((t) => t.featured)
    .filter((t) => t.category && typeof t.rating === 'number' && Array.isArray(t.metrics))
    .filter((t) => {
      if (seen.has(t.slug)) return false;
      seen.add(t.slug);
      return true;
    })
    .slice(0, HOME_FEATURED_LIMIT);

  if (featured.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-12 max-md:px-5 max-md:py-8">
      <SectionHeading eyebrow="Client Words" heading="What Clients Say After We Ship" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((testimonial) => (
          <div
            key={testimonial.slug}
            className="flex flex-col rounded-2xl border border-border-glass bg-glass p-7 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary-muted px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-primary">
                {testimonial.category}
              </span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < testimonial.rating
                        ? 'fill-primary text-primary'
                        : 'fill-transparent text-text-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-5 text-base leading-relaxed text-text-secondary">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {testimonial.metrics.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border-glass pt-5">
                {testimonial.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="font-display text-base font-bold text-text-primary">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-text-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex items-center gap-3 border-t border-border-glass pt-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={testimonial.avatar}
                alt={testimonial.clientName}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold text-text-primary">
                    {testimonial.clientName}
                  </p>
                  {testimonial.verified && (
                    <span title={testimonial.verifiedNote}>
                      <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-muted">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}