import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/blog/blog-card';
import { getFeaturedPosts } from '@/data/blog-posts';

const HOME_FEATURED_LIMIT = 3;

export default function BlogPreview() {
  const featured = getFeaturedPosts(HOME_FEATURED_LIMIT);

  if (featured.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-12 max-md:px-5 max-md:py-8">
      <SectionHeading
        eyebrow="From the Journal"
        heading="Notes on Business, Technology, and Marketing"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
        Practical write-ups from the actual work we do for clients — not generic advice.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/blog"
          className="rounded-full border border-border-glass bg-glass px-6 py-2.5 text-sm font-medium text-text-primary backdrop-blur-glass transition-colors hover:border-primary/50 hover:text-primary"
        >
          Read More Articles
        </Link>
      </div>
    </section>
  );
}
