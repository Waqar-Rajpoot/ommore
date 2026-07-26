// src/components/testimonials/star-rating.tsx
import { StarIcon } from "./icons";

export function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const dims = size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          filled={i < Math.round(rating)}
          className={`${dims} ${i < Math.round(rating) ? "text-warning" : "text-text-muted"}`}
        />
      ))}
    </div>
  );
}
