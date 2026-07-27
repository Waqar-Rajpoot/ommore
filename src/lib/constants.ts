export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923000767291';

export function buildWhatsAppURL(
  message: string = "Hi Ommore, I'd like to learn more about your services."
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Service enum — must stay in sync with backend/src/models/Lead.ts `service` field
// and the Contact Form's dropdown options (Technical Architecture Document, section 3).
// export const SERVICE_OPTIONS = [
//   'LLC Formation USA',
//   'LTD Registration UK',
//   'Company Registration Australia',
//   'Tax Filing',
//   'Bank Account Registration',
//   'Marketplace Account',
//   'Digital Marketing',
//   'Graphic Designing',
//   'Video Editing',
//   'Website Development',
//   'App Development',
//   'Ecommerce Management',
//   'Other',
// ] as const;

export const SERVICE_OPTIONS = [
  'UK Company',
  'US LLC',
  'Tax',
  'Banking',
  'Web Development',
  'WordPress',
  'Shopify',
  'Programming',
  'SaaS',
  'SEO',
  'Google Ads',
  'Pinterest',
  'YouTube',
  'Branding',
  'Other',
] as const;


export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
