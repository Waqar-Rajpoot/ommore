import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Blog cover images / testimonial avatars are external URLs
      // (Cloudinary or similar) per the Technical Architecture Document.
      { protocol: "https", hostname: "**" },
      { hostname: "picsum.photos" },
      { hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
