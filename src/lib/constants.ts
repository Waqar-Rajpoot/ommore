export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923000767291';

export function buildWhatsAppURL(
  message: string = "Hi Ommore, I'd like to learn more about your services."
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

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
