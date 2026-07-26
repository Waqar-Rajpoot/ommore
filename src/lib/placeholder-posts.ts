import type { BlogPostSummary } from '@/components/blog/blog-card';

// SAMPLE DATA — placeholder posts until the backend (Ticket-030) and real
// content (min. per PRD open question #5) exist.
export const PLACEHOLDER_POSTS: BlogPostSummary[] = [
  {
    slug: 'how-to-open-us-llc-from-pakistan',
    title: 'How to Open a US LLC from Pakistan',
    excerpt: 'A step-by-step look at what it actually takes to register a US LLC as a non-resident.',
    coverImage: 'https://picsum.photos/seed/ommore-llc/800/450',
    category: 'Business Setup',
    author: 'Ommore Team',
    readTime: 5,
    publishedAt: '2026-06-01',
  },
  {
    slug: 'amazon-seller-account-setup-guide',
    title: 'Amazon Seller Account Setup: What You Need',
    excerpt: 'The documents, bank setup, and verification steps for a non-resident Amazon seller account.',
    coverImage: 'https://picsum.photos/seed/ommore-amazon/800/450',
    category: 'E-commerce',
    author: 'Ommore Team',
    readTime: 6,
    publishedAt: '2026-06-10',
  },
  {
    slug: 'digital-marketing-for-new-ecommerce-brands',
    title: 'Digital Marketing Basics for New Ecommerce Brands',
    excerpt: 'Where to spend your first marketing budget when you are just getting a store off the ground.',
    coverImage: 'https://picsum.photos/seed/ommore-marketing/800/450',
    category: 'Digital Marketing',
    author: 'Ommore Team',
    readTime: 4,
    publishedAt: '2026-06-18',
  },
];
