import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Blog cover images / testimonial avatars are external URLs
      // (Cloudinary or similar) per the Technical Architecture Document.
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default withNextIntl(nextConfig);
