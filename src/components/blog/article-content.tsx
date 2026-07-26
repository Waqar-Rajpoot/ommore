import Image from "next/image";
import { BlogBlock } from "@/data/blog-posts";

export function ArticleContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-[#B7BCC7]">
                {block.text}
              </p>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="relative my-2 rounded-2xl border border-white/10 bg-[#12141B] px-6 py-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#7C6FF0]"
                />
                <p className="text-lg font-medium leading-relaxed text-white">
                  “{block.text}”
                </p>
                {block.cite && (
                  <cite className="mt-3 block text-sm not-italic text-[#6B7280]">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );

          case "list":
            return (
              <ul key={i} className="flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-[#B7BCC7]">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C6FF0]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={i} className="my-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src={block.src} alt={block.alt} fill className="object-cover" />
                </div>
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-[#6B7280]">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}