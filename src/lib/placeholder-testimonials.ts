import type { Testimonial } from '@/components/testimonials/TestimonialCard';

// SAMPLE DATA — not real client reviews. Your Security and Access Document
// (Issue 3) flags unverifiable trust claims as a credibility risk. Replace
// with real reviews (min 5–8, per PRD Technical Constraints) before launch.
export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sample Client A',
    country: 'Saudi Arabia',
    countryFlag: '🇸🇦',
    service: 'LLC Formation USA',
    rating: 5,
    quote: {
      en: '[Sample quote — replace with a real client review before launch.]',
      ar: '[AR sample — replace with a real client review before launch.]',
    },
  },
  {
    name: 'Sample Client B',
    country: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    service: 'Marketplace Account',
    rating: 5,
    quote: {
      en: '[Sample quote — replace with a real client review before launch.]',
      ar: '[AR sample — replace with a real client review before launch.]',
    },
  },
  {
    name: 'Sample Client C',
    country: 'Pakistan',
    countryFlag: '🇵🇰',
    service: 'Digital Marketing',
    rating: 4,
    quote: {
      en: '[Sample quote — replace with a real client review before launch.]',
      ar: '[AR sample — replace with a real client review before launch.]',
    },
  },
];
