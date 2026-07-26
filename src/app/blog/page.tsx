// src/app/blog/page.tsx
import type { Metadata } from "next";
import { getAllPosts, getFeaturedPost } from "@/data/blog-posts";
import { FeaturedPost } from "@/components/blog/featured-post";
import { BlogCard } from "@/components/blog/blog-card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog | Ommore",
  description:
    "Notes on product design, engineering, and running a software house — from the team at Ommore.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const posts = getAllPosts().filter((p) => p.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        {/* Page header */}
        <div className="mx-auto max-w-2xl text-center">
        <SectionHeading eyebrow="The Ommore Journal" heading="" />
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ideas, process, and lessons from the studio
          </h1>
          <p className="mt-4 leading-relaxed text-[#9BA1AF] sm:text-lg">
            Field notes on design systems, engineering decisions, and the
            day-to-day of building software for real clients.
          </p>
        </div>

        {/* Featured post */}
        <div className="mt-14">
          <FeaturedPost post={featured} />
        </div>

        {/* Divider / section label */}
        <div className="mt-20 flex items-center gap-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#6B7280]">
            All articles
          </h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Grid of remaining posts */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}