import { useTranslations } from 'next-intl';

// Stub for Ticket-008. Full four-column layout is Ticket-011.
export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="mt-auto bg-surface px-20 py-12 text-text-secondary max-md:px-5">
      <p className="font-display text-text-primary">Ommore</p>
      <p className="mt-2 text-sm">{t('tagline')}</p>
      <p className="mt-6 text-xs text-text-muted">
        {t('copyright', { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
