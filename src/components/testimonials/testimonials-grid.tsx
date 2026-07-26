"use client";
// src/components/testimonials/testimonials-grid.tsx

import { useMemo, useState } from "react";
import { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsGrid({
  testimonials,
  categories,
}: {
  testimonials: Testimonial[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const tabs = useMemo(
    () => [
      { label: "All", count: testimonials.length },
      ...categories.map((cat) => ({
        label: cat,
        count: testimonials.filter((t) => t.category === cat).length,
      })),
    ],
    [categories, testimonials]
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? testimonials
        : testimonials.filter((t) => t.category === active),
    [active, testimonials]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter testimonials by service">
        {tabs.map((tab) => {
          const isActive = tab.label === active;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.label)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary-muted text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab.label}
              <span className={`ml-1.5 ${isActive ? "text-primary/70" : "text-text-muted"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TestimonialCard key={t.slug} testimonial={t} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-sm text-text-muted">
          No testimonials in this category yet.
        </p>
      )}
    </div>
  );
}
