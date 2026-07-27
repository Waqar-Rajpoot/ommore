'use client';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Megaphone, Landmark } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { fadeUp } from '@/lib/motion';

const stats = [
  { value: '100+', label: 'Clients' },
  { value: '4', label: 'Countries' },
  { value: '20+', label: 'Services' },
  { value: '48hr', label: 'LLC Formation' },
];

const highlights = [
  { icon: Building2, label: 'Company Registration' },
  { icon: Landmark, label: 'Bank Accounts' },
  { icon: ShoppingCart, label: 'Marketplace Setup' },
  { icon: Megaphone, label: 'Digital Marketing' },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-primary">
            <span className="h-1 w-4 rounded-sm bg-primary" />
            About Ommore
          </span>
          <h2 className="font-display text-5xl font-bold leading-[1.15] text-text-primary max-md:text-3xl">
            We Are Your Gateway to Global Markets
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Ommore is a Pakistan-based digital solutions company helping entrepreneurs across Asia and the
            Middle East register companies, open marketplace accounts, and reach global customers.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            From US LLC formation to Amazon seller accounts to full digital marketing support, we handle the
            paperwork and platforms so you can focus on selling.
          </p>

          <div className="mt-10 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <GlassCard>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-xl bg-surface p-6 text-center"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="text-sm text-text-secondary">{label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
