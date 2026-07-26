// // src/app/blog/[slug]/page.tsx
// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import {
//   formatDate,
//   getAllPosts,
//   getPostBySlug,
//   getRelatedPosts,
// } from "@/data/blog-posts";
// import { ArticleContent } from "@/components/blog/article-content";
// import { BlogCard } from "@/components/blog/blog-card";
// import { CopyLinkButton } from "@/components/blog/copy-link-button";
// import { ArrowLeftIcon, CalendarIcon, ClockIcon, TagIcon } from "@/components/blog/icons";

// type PageProps = {
//   params: Promise<{ slug: string }>;
// };

// export function generateStaticParams() {
//   return getAllPosts().map((post) => ({ slug: post.slug }));
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const post = getPostBySlug(slug);
//   if (!post) return { title: "Article not found | Ommore" };

//   return {
//     title: `${post.title} | Ommore Blog`,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: [{ url: post.coverImage }],
//     },
//   };
// }

// export default async function BlogPostPage({ params }: PageProps) {
//   const { slug } = await params;
//   const post = getPostBySlug(slug);

//   if (!post) notFound();

//   const relatedPosts = getRelatedPosts(slug, 3);

//   return (
//     <div className="min-h-screen text-white">
//       <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
//         {/* Back link */}
//         <Link
//           href="/blog"
//           className="inline-flex items-center gap-2 text-sm font-medium text-[#9BA1AF] transition-colors hover:text-white"
//         >
//           <ArrowLeftIcon className="h-4 w-4" />
//           Back to blog
//         </Link>

//         {/* Article header */}
//         <div className="mt-8">
//           <div className="flex items-center gap-3">
//             <span className="rounded-full bg-[#7C6FF0]/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#B4A9FF]">
//               {post.category}
//             </span>
//           </div>

//           <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
//             {post.title}
//           </h1>

//           <p className="mt-5 text-lg leading-relaxed text-[#9BA1AF]">
//             {post.excerpt}
//           </p>

//           <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-5">
//             <div className="flex items-center gap-3">
//               <Image
//                 src={post.author.avatar}
//                 alt={post.author.name}
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//               />
//               <div>
//                 <p className="text-sm font-medium text-white">{post.author.name}</p>
//                 <p className="text-xs text-[#6B7280]">{post.author.role}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 text-xs text-[#6B7280]">
//               <span className="flex items-center gap-1.5">
//                 <CalendarIcon className="h-3.5 w-3.5" />
//                 {formatDate(post.date)}
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <ClockIcon className="h-3.5 w-3.5" />
//                 {post.readTime}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Cover image */}
//         <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10">
//           <Image
//             src={post.coverImage}
//             alt={post.title}
//             fill
//             priority
//             sizes="(min-width: 1024px) 768px, 100vw"
//             className="object-cover"
//           />
//         </div>

//         {/* Article body */}
//         <div className="mt-10">
//           <ArticleContent blocks={post.content} />
//         </div>

//         {/* Tags + share */}
//         <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
//           <div className="flex flex-wrap items-center gap-2">
//             <TagIcon className="h-4 w-4 text-[#6B7280]" />
//             {post.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-white/10 bg-[#12141B] px-3 py-1 text-xs text-[#9BA1AF]"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <CopyLinkButton />
//         </div>

//         {/* Author bio card */}
//         <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#12141B] p-6">
//           <Image
//             src={post.author.avatar}
//             alt={post.author.name}
//             width={56}
//             height={56}
//             className="rounded-full"
//           />
//           <div>
//             <p className="text-sm font-semibold text-white">{post.author.name}</p>
//             <p className="text-xs text-[#6B7280]">{post.author.role}</p>
//             <p className="mt-1 text-sm text-[#9BA1AF]">
//               Writes about the craft of building software at Ommore.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Related posts */}
//       {relatedPosts.length > 0 && (
//         <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
//           <div className="flex items-center gap-4">
//             <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-[#6B7280]">
//               Keep reading
//             </h2>
//             <div className="h-px flex-1 bg-white/10" />
//           </div>
//           <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {relatedPosts.map((related) => (
//               <BlogCard key={related.slug} post={related} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }








// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog-posts";
import { ArticleContent } from "@/components/blog/article-content";
import { BlogCard } from "@/components/blog/blog-card";
import { CopyLinkButton } from "@/components/blog/copy-link-button";
import { ArrowLeftIcon, CalendarIcon, ClockIcon, TagIcon } from "@/components/blog/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found | Ommore" };

  return {
    title: `${post.title} | Ommore Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to blog
        </Link>

        {/* Article header */}
        <div className="mt-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
              {post.category}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border-glass bg-glass px-6 py-5 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-text-primary">{post.author.name}</p>
                <p className="text-xs text-text-muted">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-text-muted">
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
        </div>

        {/* Cover image */}
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border-glass shadow-glass">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Article body */}
        <div className="prose-invert mt-10 text-text-secondary">
          <ArticleContent blocks={post.content} />
        </div>

        {/* Tags + share */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border-glass pt-8">
          <div className="flex flex-wrap items-center gap-2">
            <TagIcon className="h-4 w-4 text-text-muted" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-glass bg-glass px-3 py-1 text-xs text-text-secondary backdrop-blur-glass"
              >
                {tag}
              </span>
            ))}
          </div>
          <CopyLinkButton />
        </div>

        {/* Author bio card */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-border-glass bg-glass p-6 shadow-glass backdrop-blur-glass backdrop-saturate-[180%]">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-text-primary">{post.author.name}</p>
            <p className="text-xs text-text-muted">{post.author.role}</p>
            <p className="mt-1 text-sm text-text-secondary">
              Writes about the craft of building software at Ommore.
            </p>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
              Keep reading
            </h2>
            <div className="h-px flex-1 bg-border-glass" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}