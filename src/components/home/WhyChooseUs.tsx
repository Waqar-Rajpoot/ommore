'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Layers, Headset } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/lib/motion';

const cards = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'US LLC formation completed within 48 hours of document submission.',
  },
  {
    icon: ShieldCheck,
    title: 'Global Compliance',
    desc: 'We handle IRS filings, annual reports, and registered agent requirements across US, UK, and Australia.',
  },
  {
    icon: Layers,
    title: 'Multi-Platform Expertise',
    desc: 'From Amazon to TikTok Shop, we set up and manage accounts across 7+ marketplaces.',
  },
  {
    icon: Headset,
    title: 'End-to-End Support',
    desc: 'From company registration to digital marketing, one team handles your entire business setup.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface px-20 py-24 max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Why Choose Ommore" heading="Why Choose Ommore" />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {cards.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <GlassCard>
                <Icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-display text-lg font-semibold text-text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
