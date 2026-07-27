import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { getFeaturedProjects } from '@/data/portfolio-data';

const HOME_FEATURED_LIMIT = 3;

export default function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, HOME_FEATURED_LIMIT);

  if (featured.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-12 max-md:px-5 max-md:py-8">
      <SectionHeading
        eyebrow="Our Portfolio"
        heading="Real Projects, Verified by the Clients"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
        A few case studies from the work we&lsquo;ve delivered — every metric below is real, not a
        mockup number.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border-glass bg-glass shadow-glass backdrop-blur-glass backdrop-saturate-[180%] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary-muted px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-primary">
                  {project.category}
                </span>
                {project.liveUrl && (
                  <ArrowUpRight className="h-4 w-4 text-text-muted transition-colors group-hover:text-primary" />
                )}
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-text-primary transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{project.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border-glass pt-5">
                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="font-display text-lg font-bold text-text-primary">
                      {metric.value}
                    </span>
                    <span className="text-xs text-text-muted">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/portfolio"
          className="rounded-full border border-border-glass bg-glass px-6 py-2.5 text-sm font-medium text-text-primary backdrop-blur-glass transition-colors hover:border-primary/50 hover:text-primary"
        >
          View Full Portfolio
        </Link>
      </div>
    </section>
  );
}
