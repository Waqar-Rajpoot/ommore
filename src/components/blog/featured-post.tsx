import Image from "next/image";
import Link from "next/link";
import { BlogPost, formatDate } from "@/data/blog-posts";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "./icons";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#12141B]"
    >
      {/* signature aurora glow behind the featured card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 40%, rgba(124,111,240,0.55) 0%, rgba(124,111,240,0) 70%), radial-gradient(50% 50% at 75% 60%, rgba(255,159,90,0.35) 0%, rgba(255,159,90,0) 70%)",
        }}
      />

      <div className="relative grid gap-0 lg:grid-cols-2">
        <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#7C6FF0]/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#B4A9FF]">
              Featured
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">
              {post.category}
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {post.title}
          </h2>

          <p className="leading-relaxed text-[#9BA1AF] line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-[#6B7280]">
            <span className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-[#C4C9D4]">{post.author.name}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <span className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#B4A9FF] transition-transform group-hover:translate-x-1">
            Read the article
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}