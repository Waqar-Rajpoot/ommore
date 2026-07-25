'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Users, Clock, Star, Globe } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  size: 2 + ((i * 7) % 5),
  left: (i * 41) % 100,
  top: (i * 29) % 100,
  duration: 6 + (i % 5),
  opacity: 0.15 + ((i % 4) * 0.1),
}));

export default function HeroSection() {
  const t = useTranslations('hero');

  const badges = [
    { icon: Users, label: t('badgeClients') },
    { icon: Clock, label: t('badgeLlc') },
    { icon: Star, label: t('badgeRating') },
    { icon: Globe, label: t('badgeReach') },
  ];

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, #00C8FF0D 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #0099CC08 0%, transparent 60%), #080B14',
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-primary"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -24, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-primary"
        >
          <span className="h-1 w-4 rounded-sm bg-primary" />
          {t('eyebrow')}
          <span className="h-1 w-4 rounded-sm bg-primary" />
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display text-6xl font-bold leading-[1.1] tracking-[-0.02em] text-text-primary max-md:text-4xl"
        >
          {t('headline')}
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
          {t('subheadline')}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-8 py-3.5 font-display text-base font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px"
          >
            {t('getStarted')}
          </Link>
          <a
            href="#services"
            className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
          >
            {t('exploreServices')}
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-4 max-md:grid-cols-2"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-xs text-text-secondary">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
