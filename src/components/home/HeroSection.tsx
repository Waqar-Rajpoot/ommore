'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Users, Clock, Star, Globe } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: 2 + ((i * 7) % 5),
  left: (i * 41) % 100,
  top: (i * 29) % 100,
  duration: 6 + (i % 5),        // was 6 + (i % 5) — lower = faster
  opacity: 0.15 + ((i % 4) * 0.1),
  driftX: 10 + (i % 3) * 8,     // NEW — horizontal wander
}));

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const badges = [
    { icon: Users, label: '100+ Clients Served' },
    { icon: Clock, label: 'US LLC in 48hrs' },
    { icon: Star, label: '5★ Rated' },
    { icon: Globe, label: 'Global Reach' },
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
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%`, opacity: p.opacity }}
            animate={
              shouldReduceMotion
                ? {}
                : { y: [0, -90, 0], x: [0, p.driftX, 0] }   // was y: [0, -24, 0] — 2.5x travel, plus x
            }
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
          Digital Solutions
          <span className="h-1 w-4 rounded-sm bg-primary" />
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display text-6xl font-bold leading-[1.1] tracking-[-0.02em] text-text-primary max-md:text-4xl"
        >
          Your Gateway to Global Markets
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
          US LLC formation, marketplace account setup, and digital marketing for entrepreneurs building an
          international business.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-8 py-3.5 font-display text-base font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px"
          >
            Get Started
          </Link>
          <a
            href="#services"
            className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
          >
            Explore Services
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
