'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, data, { timeout: 10000 });
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
          Name <span className="text-error">*</span>
        </label>
        <input {...register('name')} placeholder="Your full name" className={inputClass} />
        {errors.name && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> This field is required
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          Email <span className="text-error">*</span>
        </label>
        <input {...register('email')} type="email" placeholder="you@example.com" className={inputClass} />
        {errors.email && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> Please enter a valid email address
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          WhatsApp Number <span className="text-error">*</span>
        </label>
        <input {...register('whatsapp')} placeholder="+923001234567" className={inputClass} />
        {errors.whatsapp && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> Enter a valid WhatsApp number
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          Service Interested In <span className="text-error">*</span>
        </label>
        <select {...register('service')} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> This field is required
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          Message <span className="text-error">*</span>
        </label>
        <textarea
          {...register('message')}
          placeholder="Tell us about what you need..."
          rows={5}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p className={errorClass}>
            <AlertCircle className="h-4 w-4" /> Message must be at least 20 characters
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-primary to-[#0077AA] px-8 py-3.5 font-display text-base font-semibold text-white shadow-glow-md transition-transform hover:-translate-y-px disabled:opacity-80"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg border border-success/40 bg-success/15 px-4 py-3 text-sm text-text-primary">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <span>
            <strong>Message received</strong> — We&apos;ll contact you shortly.
          </span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-error/40 bg-error/15 px-4 py-3 text-sm text-text-primary">
          <span className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-error" />
            <strong>Something went wrong</strong>
          </span>
          <a
            href={buildWhatsAppURL('Hi, I tried your contact form but had an issue.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-semibold text-primary underline"
          >
            Please message us directly on WhatsApp.
          </a>
        </div>
      )}
    </form>
  );
}
