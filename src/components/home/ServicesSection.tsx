'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES, type ServiceCategory } from '@/data/services-data';
import { fadeUp, staggerContainer } from '@/lib/motion';

const tabs: { key: ServiceCategory | 'All'; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'Business Setup', label: 'Business Setup' },
  { key: 'Marketplace Accounts', label: 'Marketplace Accounts' },
  { key: 'Digital Services', label: 'Digital Services' },
];

export default function ServicesSection() {
  const [active, setActive] = useState<ServiceCategory | 'All'>('All');

  const visible = active === 'All' ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section id="services" className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading eyebrow="Our Services" heading="Our Services" />

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
            <ServiceCard service={service} learnMoreLabel="Learn More" />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
