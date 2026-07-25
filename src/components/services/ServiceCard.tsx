'use client';

import { Building2, ShoppingCart, Megaphone, Landmark, FileText, Store, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import GlassCard from '@/components/ui/GlassCard';
import type { ServiceSummary } from '@/lib/services-data';

const ICONS = {
  Building2,
  ShoppingCart,
  Megaphone,
  Landmark,
  FileText,
  Store,
};

export default function ServiceCard({
  service,
  locale,
  learnMoreLabel,
}: {
  service: ServiceSummary;
  locale: 'en' | 'ar';
  learnMoreLabel: string;
}) {
  const Icon = ICONS[service.icon];

  return (
    <GlassCard className="relative flex min-h-[240px] flex-col overflow-hidden">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="mb-2 text-xs font-medium uppercase tracking-[0.08em] text-primary">
        {service.category}
      </span>
      <h3 className="mb-3 font-display text-lg font-semibold text-text-primary">
        {service.title[locale]}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-text-secondary">
        {service.description[locale]}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary"
      >
        {learnMoreLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </Link>
    </GlassCard>
  );
}
