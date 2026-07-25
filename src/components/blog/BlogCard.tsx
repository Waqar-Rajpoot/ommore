'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  readTime: number;
  publishedAt: string;
}

export default function BlogCard({ post }: { post: BlogPostSummary }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <GlassCard className="overflow-hidden p-0">
        <div className="h-[200px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt=""
            className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className="mb-3 inline-block rounded bg-primary-muted px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-primary">
            {post.category}
          </span>
          <h3 className="mb-3 line-clamp-2 font-display text-lg font-semibold text-text-primary">
            {post.title}
          </h3>
          <p className="mb-5 line-clamp-3 text-sm text-text-secondary">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted">
              {post.author} · {post.readTime} min read · {formattedDate}
            </span>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:-rotate-45" />
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
