'use client';
// src/components/portfolio/project-filter-grid.tsx

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/portfolio/project-card';
import { getAllProjects, type ProjectCategory } from '@/data/portfolio-data';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function ProjectFilterGrid({ categories }: { categories: ProjectCategory[] }) {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');
  const allProjects = useMemo(() => getAllProjects(), []);

  const tabs = useMemo(
    () => [
      { key: 'All' as const, label: 'All', count: allProjects.length },
      ...categories.map((cat) => ({
        key: cat,
        label: cat,
        count: allProjects.filter((p) => p.category === cat).length,
      })),
    ],
    [categories, allProjects]
  );

  const visible =
    active === 'All' ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <>
      <div
        className="mt-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === tab.key
                ? 'bg-primary-muted text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
            <span
              className={`ml-1.5 ${active === tab.key ? 'text-primary/70' : 'text-text-muted'}`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <motion.div
          key={active}
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {visible.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="mt-12 text-center text-sm text-text-muted">
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
