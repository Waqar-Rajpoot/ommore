// // src/app/blog/page.tsx
// import type { Metadata } from "next";
// import { getAllPosts, getFeaturedPost } from "@/data/blog-posts";
// import { FeaturedPost } from "@/components/blog/featured-post";
// import { BlogCard } from "@/components/blog/blog-card";
// import SectionHeading from "@/components/ui/SectionHeading";

// export const metadata: Metadata = {
//   title: "Blog | Ommore",
//   description:
//     "Notes on product design, engineering, and running a software house — from the team at Ommore.",
// };

// export default function BlogPage() {
//   const featured = getFeaturedPost();
//   const posts = getAllPosts().filter((p) => p.slug !== featured.slug);

//   return (
//     <div className="min-h-screen bg-[#0A0B0F] text-white">
//       <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
//         {/* Page header */}
//         <div className="mx-auto max-w-2xl text-center">
//         <SectionHeading eyebrow="The Ommore Journal" heading="" />
          
//           <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//             Ideas, process, and lessons from the studio
//           </h1>
//           <p className="mt-4 leading-relaxed text-[#9BA1AF] sm:text-lg">
//             Field notes on design systems, engineering decisions, and the
//             day-to-day of building software for real clients.
//           </p>
//         </div>

//         {/* Featured post */}
//         <div className="mt-14">
//           <FeaturedPost post={featured} />
//         </div>

//         {/* Divider / section label */}
//         <div className="mt-20 flex items-center gap-4">
//           <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#6B7280]">
//             All articles
//           </h2>
//           <div className="h-px flex-1 bg-white/10" />
//         </div>

//         {/* Grid of remaining posts */}
//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {posts.map((post) => (
//             <BlogCard key={post.slug} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







// src/app/blog/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/blog-card";
import SectionHeading from "@/components/ui/SectionHeading";
import { CalendarIcon, ClockIcon } from "@/components/blog/icons";

export const metadata: Metadata = {
  title: "Blog | Ommore",
  description:
    "Notes on product design, engineering, and running a software house — from the team at Ommore.",
};

// How many posts to spotlight in the featured strip.
const FEATURED_COUNT = 3;

/**
 * Pulls the posts to feature at the top of the page.
 * Prefers posts explicitly flagged `featured: true` in your data source.
 * Falls back to the most recent posts if none are flagged, so this
 * never renders an empty featured section.
 *
 * NOTE: if `featured` isn't a field on your Post type yet, add
 * `featured?: boolean` to it in `@/data/blog-posts` — everything
 * else here works either way.
 */
function getFeaturedPosts(allPosts: ReturnType<typeof getAllPosts>) {
  const flagged = allPosts.filter((p) => (p as { featured?: boolean }).featured);
  const source = flagged.length > 0 ? flagged : allPosts;
  return source.slice(0, FEATURED_COUNT);
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPosts(allPosts);
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const posts = allPosts.filter((p) => !featuredSlugs.has(p.slug));

  const categories = Array.from(new Set(allPosts.map((p) => p.category)));
  const totalReadMinutes = allPosts.reduce((sum, p) => {
    const mins = parseInt(String(p.readTime).replace(/\D/g, ""), 10);
    return sum + (Number.isNaN(mins) ? 0 : mins);
  }, 0);

  return (
    <section className="mx-auto max-w-[1280px] px-20 py-24 max-md:px-5 max-md:py-16">
      <SectionHeading
        eyebrow="The Ommore Journal"
        heading="Ideas, Process, and Lessons from the Studio"
      />

      <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
        Field notes on design systems, engineering decisions, and the day-to-day of
        building software for real clients. No filler — just what we actually learned.
      </p>

      {/* Stat strip — same glass pill pattern as the portfolio page */}
      <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-border-glass bg-glass px-8 py-6 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]">
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-text-primary">
            {allPosts.length}
          </span>
          <span className="text-xs text-text-muted">articles published</span>
        </div>
        <div className="h-8 w-px bg-border-glass" />
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-primary">
            {categories.length}
          </span>
          <span className="text-xs text-text-muted">topics covered</span>
        </div>
        <div className="h-8 w-px bg-border-glass" />
        <div className="flex flex-col items-center">
          <span className="font-display text-xl font-bold text-text-primary">
            {totalReadMinutes}
          </span>
          <span className="text-xs text-text-muted">minutes of reading</span>
        </div>
      </div>

      {/* Featured posts — multiple, not a single hero */}
      {featured.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Featured
            </h2>
            <div className="h-px flex-1 bg-border-glass" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featured.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-border-glass bg-glass shadow-glass backdrop-blur-glass backdrop-saturate-[180%] transition-transform duration-300 hover:-translate-y-1 ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    i === 0 ? "aspect-[16/10]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority={i === 0}
                    sizes={i === 0 ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary backdrop-blur-glass">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    className={`font-display font-bold leading-snug text-text-primary transition-colors group-hover:text-primary ${
                      i === 0 ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {post.title}
                  </h3>
                  {i === 0 && (
                    <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Divider / section label */}
      <div className="mt-20 flex items-center gap-4">
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
          All articles
        </h2>
        <div className="h-px flex-1 bg-border-glass" />
      </div>

      {/* Grid of remaining posts */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}