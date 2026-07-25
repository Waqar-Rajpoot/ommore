'use client';

import { useTranslations } from 'next-intl';
import { buildWhatsAppURL } from '@/lib/constants';

// Stub for Ticket-008. Pulse animation + mobile bottom-80px offset land in Ticket-012.
export default function WhatsAppFloat() {
  const t = useTranslations('whatsapp');
  return (
    <a
      href={buildWhatsAppURL(t('defaultMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('ariaLabel')}
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_#25D36650] transition-transform hover:scale-[1.08] rtl:right-auto rtl:left-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5.1 2 7.3L2 30l6.9-1.8c2.1 1.2 4.5 1.8 7.1 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25.5c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.1 1.1 1.1-4-.3-.5c-1.3-2-2-4.3-2-6.7 0-6.6 5.4-12 12-12s12 5.4 12 12-5.3 12.2-12 12.2zm6.6-9c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.3-.6.1-.2.1-.5 0-.7-.1-.2-.8-1.9-1-2.6-.3-.7-.5-.6-.8-.6h-.7c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 2.8 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.1.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
