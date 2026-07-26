// src/components/portfolio/project-card.tsx
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ClientMark from '@/components/portfolio/client-mark';
import type { Project } from '@/data/portfolio-data';

export default function ProjectCard({ project }: { project: Project }) {
  const topMetric = project.metrics[0];

  return (
    <GlassCard className="relative flex min-h-[320px] flex-col overflow-hidden">
      <div className="flex items-center gap-3">
        <ClientMark name={project.clientName} />
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-text-primary">
            {project.clientName}
          </p>
          <p className="truncate text-xs text-text-muted">{project.year}</p>
        </div>
      </div>

      <span className="mt-5 inline-flex w-fit items-center rounded-full bg-primary-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-primary">
        {project.category}
      </span>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-text-primary">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.summary}</p>

      {topMetric && (
        <div className="mt-5 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-primary-muted px-2.5 py-1 font-semibold text-primary">
            {topMetric.value}
          </span>
          <span className="text-text-muted">{topMetric.label}</span>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary"
        >
          View case study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-text-primary"
          >
            Live site
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
