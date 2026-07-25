export type ServiceCategory = 'Business Setup' | 'Marketplace Accounts' | 'Digital Services';

export interface ServiceSummary {
  slug: string;
  category: ServiceCategory;
  icon: 'Building2' | 'ShoppingCart' | 'Megaphone' | 'Landmark' | 'FileText' | 'Store';
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

// One representative card per route group (6 total), matching the six service
// detail page routes defined in the Technical Architecture Document folder structure.
export const SERVICES: ServiceSummary[] = [
  {
    slug: 'company-registration',
    category: 'Business Setup',
    icon: 'Building2',
    title: { en: 'Company Registration', ar: '[AR: Company Registration]' },
    description: {
      en: 'US LLC, UK LTD, and Australian company registration for non-residents.',
      ar: '[AR: US LLC, UK LTD, and Australian company registration for non-residents.]',
    },
  },
  {
    slug: 'tax-filing',
    category: 'Business Setup',
    icon: 'FileText',
    title: { en: 'Tax Filing', ar: '[AR: Tax Filing]' },
    description: {
      en: 'IRS business tax filing and annual report compliance, handled for you.',
      ar: '[AR: IRS business tax filing and annual report compliance, handled for you.]',
    },
  },
  {
    slug: 'bank-accounts',
    category: 'Business Setup',
    icon: 'Landmark',
    title: { en: 'Bank & Payment Accounts', ar: '[AR: Bank & Payment Accounts]' },
    description: {
      en: 'Wise, Stripe, Payoneer, and physical US bank account setup.',
      ar: '[AR: Wise, Stripe, Payoneer, and physical US bank account setup.]',
    },
  },
  {
    slug: 'marketplace-accounts',
    category: 'Marketplace Accounts',
    icon: 'ShoppingCart',
    title: { en: 'Marketplace Accounts', ar: '[AR: Marketplace Accounts]' },
    description: {
      en: 'Amazon, Etsy, eBay, TikTok Shop, and Walmart seller account setup.',
      ar: '[AR: Amazon, Etsy, eBay, TikTok Shop, and Walmart seller account setup.]',
    },
  },
  {
    slug: 'digital-marketing',
    category: 'Digital Services',
    icon: 'Megaphone',
    title: { en: 'Digital Marketing', ar: '[AR: Digital Marketing]' },
    description: {
      en: 'Social media management, paid ads, graphic design, and video editing.',
      ar: '[AR: Social media management, paid ads, graphic design, and video editing.]',
    },
  },
  {
    slug: 'ecommerce-management',
    category: 'Digital Services',
    icon: 'Store',
    title: { en: 'Ecommerce Management', ar: '[AR: Ecommerce Management]' },
    description: {
      en: 'Full store management so your listings, orders, and ads run themselves.',
      ar: '[AR: Full store management so your listings, orders, and ads run themselves.]',
    },
  },
];
