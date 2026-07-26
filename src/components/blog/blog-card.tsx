import Image from "next/image";
import Link from "next/link";
import { BlogPost, formatDate } from "@/data/blog-posts";
import { CalendarIcon, ClockIcon } from "./icons";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-glass shadow-glass backdrop-blur-glass backdrop-saturate-180 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C6FF0]/40 hover:shadow-[0_0_0_1px_rgba(124,111,240,0.15),0_20px_40px_-20px_rgba(124,111,240,0.35)]"
    >


      
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#B4A9FF]">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#9BA1AF]">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-[#6B7280]">
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
  );
}