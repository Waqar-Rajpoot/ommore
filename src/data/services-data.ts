// export type ServiceCategory = 'Business Setup' | 'Marketplace Accounts' | 'Digital Services';

// export interface ServiceSummary {
//   slug: string;
//   category: ServiceCategory;
//   icon: 'Building2' | 'ShoppingCart' | 'Megaphone' | 'Landmark' | 'FileText' | 'Store';
//   title: string;
//   description: string;
// }

// // One representative card per route group (6 total), matching the six service
// // detail page routes defined in the Technical Architecture Document folder structure.
// export const SERVICES: ServiceSummary[] = [
//   {
//     slug: 'company-registration',
//     category: 'Business Setup',
//     icon: 'Building2',
//     title: 'Company Registration',
//     description: 'US LLC, UK LTD, and Australian company registration for non-residents.',
//   },
//   {
//     slug: 'tax-filing',
//     category: 'Business Setup',
//     icon: 'FileText',
//     title: 'Tax Filing',
//     description: 'IRS business tax filing and annual report compliance, handled for you.',
//   },
//   {
//     slug: 'bank-accounts',
//     category: 'Business Setup',
//     icon: 'Landmark',
//     title: 'Bank & Payment Accounts',
//     description: 'Wise, Stripe, Payoneer, and physical US bank account setup.',
//   },
//   {
//     slug: 'marketplace-accounts',
//     category: 'Marketplace Accounts',
//     icon: 'ShoppingCart',
//     title: 'Marketplace Accounts',
//     description: 'Amazon, Etsy, eBay, TikTok Shop, and Walmart seller account setup.',
//   },
//   {
//     slug: 'digital-marketing',
//     category: 'Digital Services',
//     icon: 'Megaphone',
//     title: 'Digital Marketing',
//     description: 'Social media management, paid ads, graphic design, and video editing.',
//   },
//   {
//     slug: 'ecommerce-management',
//     category: 'Digital Services',
//     icon: 'Store',
//     title: 'Ecommerce Management',
//     description: 'Full store management so your listings, orders, and ads run themselves.',
//   },
// ];





export type ServiceCategory = 'Business Setup' | 'Marketplace Accounts' | 'Digital Services';

export interface ServiceSummary {
  slug: string;
  category: ServiceCategory;
  icon: 'Building2' | 'ShoppingCart' | 'Megaphone' | 'Landmark' | 'FileText' | 'Store';
  title: string;
  description: string;
  // Longer copy for the detail page. PLACEHOLDER — review before launch,
  // same as PLACEHOLDER_TESTIMONIALS / PLACEHOLDER_POSTS in this codebase.
  longDescription: string;
  features: string[];
}

export const SERVICES: ServiceSummary[] = [
  {
    slug: 'company-registration',
    category: 'Business Setup',
    icon: 'Building2',
    title: 'Company Registration',
    description: 'US LLC, UK LTD, and Australian company registration for non-residents.',
    longDescription:
      'We handle end-to-end company formation for entrepreneurs based outside the US, UK, and Australia — from choosing the right entity structure to filing with the relevant state or national registry.',
    features: [
      'US LLC formation (Delaware, Wyoming, and other states)',
      'UK LTD registration',
      'Australian company registration',
      'Registered agent and EIN application support',
    ],
  },
  {
    slug: 'tax-filing',
    category: 'Business Setup',
    icon: 'FileText',
    title: 'Tax Filing',
    description: 'IRS business tax filing and annual report compliance, handled for you.',
    longDescription:
      'Keep your company in good standing with recurring tax and compliance filings, so a missed deadline doesn\u2019t put your business at risk.',
    features: [
      'Annual IRS business tax filing',
      'State annual report filing',
      'Registered agent renewal tracking',
      'Compliance deadline reminders',
    ],
  },
  {
    slug: 'bank-accounts',
    category: 'Business Setup',
    icon: 'Landmark',
    title: 'Bank & Payment Accounts',
    description: 'Wise, Stripe, Payoneer, and physical US bank account setup.',
    longDescription:
      'Get your business banking and payment processing set up so you can collect from customers and pay suppliers without friction.',
    features: [
      'Wise and Payoneer business account setup',
      'Stripe payment processing setup',
      'Physical US bank account guidance',
      'Documentation support for verification',
    ],
  },
  {
    slug: 'marketplace-accounts',
    category: 'Marketplace Accounts',
    icon: 'ShoppingCart',
    title: 'Marketplace Accounts',
    description: 'Amazon, Etsy, eBay, TikTok Shop, and Walmart seller account setup.',
    longDescription:
      'We set up your seller accounts across major marketplaces, handling the identity and business verification steps that trip up most non-resident applicants.',
    features: [
      'Amazon Seller Central setup',
      'Etsy and eBay store setup',
      'TikTok Shop and Walmart seller onboarding',
      'Verification document preparation',
    ],
  },
  {
    slug: 'digital-marketing',
    category: 'Digital Services',
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description: 'Social media management, paid ads, graphic design, and video editing.',
    longDescription:
      'From your first ad campaign to ongoing social content, we run the marketing work your growing business doesn\u2019t have time to do in-house.',
    features: [
      'Paid ad campaign management',
      'Social media content and scheduling',
      'Graphic design for listings and ads',
      'Video editing for product and promo content',
    ],
  },
  {
    slug: 'ecommerce-management',
    category: 'Digital Services',
    icon: 'Store',
    title: 'Ecommerce Management',
    description: 'Full store management so your listings, orders, and ads run themselves.',
    longDescription:
      'Hand off the day-to-day of running your store — listings, order fulfillment coordination, ad spend, and customer messages — to a team that manages it for you.',
    features: [
      'Listing creation and optimization',
      'Order and inventory coordination',
      'Ad spend management',
      'Customer message handling',
    ],
  },
];