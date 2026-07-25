'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ServiceCard from '@/components/services/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES, type ServiceCategory } from '@/lib/services-data';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function ServicesSection() {
  const t = useTranslations('servicesSection');
  const locale = useLocale() as 'en' | 'ar';
  const [active, setActive] = useState<ServiceCategory | 'All'>('All');

  const tabs: { key: ServiceCategory | 'All'; label: string }[] = [
    { key: 'All', label: t('tabAll') },
    { key: 'Business Setup', label: t('tabBusiness') },
    { key: 'Marketplace Accounts', label: t('tabMarketplace') },
    { key: 'Digital Services', label: t('tabDigital') },
  ];

  const visible = active === 'All' ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section id="services" className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === tab.key
                ? 'bg-primary-muted text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
      >
        {visible.map((service) => (
          <motion.div key={service.slug} variants={fadeUp}>
            <ServiceCard service={service} locale={locale} learnMoreLabel={t('learnMore')} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
        >
          {t('viewAll')}
        </Link>
      </div>
    </section>
  );
}
