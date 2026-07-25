'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Zap, ShieldCheck, Layers, Headset } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function WhyChooseUs() {
  const t = useTranslations('whyChooseUs');

  const cards = [
    { icon: Zap, title: t('card1Title'), desc: t('card1Desc') },
    { icon: ShieldCheck, title: t('card2Title'), desc: t('card2Desc') },
    { icon: Layers, title: t('card3Title'), desc: t('card3Desc') },
    { icon: Headset, title: t('card4Title'), desc: t('card4Desc') },
  ];

  return (
    <section className="bg-surface px-20 py-24 max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} />

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
