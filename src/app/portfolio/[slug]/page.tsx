// src/app/portfolio/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from '@/data/portfolio-data';
import ClientMark from '@/components/portfolio/client-mark';
import ProjectCard from '@/components/portfolio/project-card';
import GlassCard from '@/components/ui/GlassCard';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Case study not found — Ommore' };

  return {
    title: `${project.clientName} — ${project.title} | Ommore Portfolio`,
    description: project.summary,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);

  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="mt-8">
          <span className="inline-flex items-center rounded-full bg-primary-muted px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            {project.category}
          </span>

          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem]">
            {project.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-text-secondary">{project.tagline}</p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-border-glass py-5">
            <div className="flex items-center gap-3">
              <ClientMark name={project.clientName} />
              <div>
                <p className="text-sm font-medium text-text-primary">{project.clientName}</p>
                <p className="text-xs text-text-muted">{project.year}</p>
              </div>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary"
              >
                Visit live site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <GlassCard key={m.label} className="p-5 text-center">
                <p className="font-display text-2xl font-bold text-primary">{m.value}</p>
                <p className="mt-1 text-xs text-text-muted">{m.label}</p>
              </GlassCard>
            ))}
          </div>
        )}

        {/* Services provided */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.servicesProvided.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border-glass px-3 py-1 text-xs text-text-secondary"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Narrative */}
        <div className="mt-12 space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-text-primary">Overview</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{project.overview}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-text-primary">
              The challenge
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{project.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-text-primary">
              What we did
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{project.solution}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-text-primary">The results</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{project.results}</p>
          </div>
        </div>

        {/* Testimonial pull-quote */}
        {project.testimonial && (
          <GlassCard className="relative mt-12 px-7 py-10 sm:px-10">
            <p className="relative font-display text-xl font-medium leading-relaxed text-text-primary sm:text-2xl">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">
                {project.testimonial.authorName}
              </span>
              , {project.testimonial.authorRole} at {project.clientName}
            </p>
          </GlassCard>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border-glass pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary"
          >
            Start a similar project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1280px] px-20 pb-24 max-md:px-5">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              More {project.category} work
            </h2>
            <div className="h-px flex-1 bg-border-glass" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
