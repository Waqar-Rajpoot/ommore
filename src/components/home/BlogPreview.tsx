'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import BlogCard from '@/components/blog/BlogCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { PLACEHOLDER_POSTS } from '@/lib/placeholder-posts';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function BlogPreview() {
  const t = useTranslations('blogSection');

  // Wired to hardcoded PLACEHOLDER_POSTS for now (allowed per Ticket-020).
  // Swap for `GET /api/blog?limit=3` once the backend (Ticket-030) exists.
  if (PLACEHOLDER_POSTS.length === 0) return null;

  return (
    <section className="bg-surface px-20 py-24 max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow={t('eyebrow')} heading={t('heading')} />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-3 gap-6 max-md:grid-cols-1"
        >
          {PLACEHOLDER_POSTS.slice(0, 3).map((post) => (
            <motion.div key={post.slug} variants={fadeUp} className="group">
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="rounded-lg border-[1.5px] border-border-glow px-8 py-3.5 font-display text-base font-semibold text-primary transition-colors hover:bg-primary-muted"
          >
            {t('readAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
