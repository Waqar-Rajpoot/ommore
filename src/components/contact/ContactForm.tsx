'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations, useLocale } from 'next-intl';
import axios from 'axios';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { SERVICE_OPTIONS, buildWhatsAppURL } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  whatsapp: z.string().min(7).max(20).regex(/^\+?[0-9]+$/),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().min(20).max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations('contactForm');
  const locale = useLocale();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('idle');
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        { ...data, locale },
        { timeout: 10000 }
      );
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border-[1.5px] border-border-glass bg-surface px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/20';
  const labelClass = 'mb-2 block text-sm font-medium text-text-secondary';
  const errorClass = 'mt-1.5 flex items-center gap-1.5 text-sm text-error';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label className={labelClass}>
          {t('nameLabel')} <span className="text-error">*</span>
        </label>
        <input {...register('name')} placeholder={t('namePlaceholder')} className={inputClass} />
        {errors.name && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> {t('errorRequired')}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          {t('emailLabel')} <span className="text-error">*</span>
        </label>
        <input {...register('email')} type="email" placeholder={t('emailPlaceholder')} className={inputClass} />
        {errors.email && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> {t('errorEmail')}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          {t('whatsappLabel')} <span className="text-error">*</span>
        </label>
        <input {...register('whatsapp')} placeholder={t('whatsappPlaceholder')} className={inputClass} />
        {errors.whatsapp && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> {t('errorWhatsapp')}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          {t('serviceLabel')} <span className="text-error">*</span>
        </label>
        <select {...register('service')} defaultValue="" className={inputClass}>
          <option value="" disabled>
            {t('servicePlaceholder')}
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> {t('errorRequired')}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          {t('messageLabel')} <span className="text-error">*</span>
        </label>
        <textarea
          {...register('message')}
          placeholder={t('messagePlaceholder')}
          rows={5}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> {t('errorMessageMin')}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-8 py-3.5 font-display text-base font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px disabled:opacity-80"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? t('submitting') : t('submit')}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg border border-success/40 bg-success/15 px-4 py-3 text-sm text-text-primary">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <span>
            <strong>{t('successTitle')}</strong> — {t('successBody')}
          </span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-error/40 bg-error/15 px-4 py-3 text-sm text-text-primary">
          <span className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-error" />
            <strong>{t('errorTitle')}</strong>
          </span>
          <a
            href={buildWhatsAppURL("Hi, I tried your contact form but had an issue.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-semibold text-primary underline"
          >
            {t('errorBody')}
          </a>
        </div>
      )}
    </form>
  );
}
