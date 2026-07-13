import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Loader2 } from 'lucide-react'


const schema = z.object({
  name:    z.string().min(1),
  email:   z.string().email(),
  message: z.string().min(20),
})

type FormData = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })


  async function onSubmit(_data: FormData) {
    setStatus('loading')
    try {
      await new Promise((res) => setTimeout(res, 1500))
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

 
  const inputBase = [
    'w-full px-4 py-3 rounded-xl text-sm',
    'bg-[var(--color-bg)] text-[var(--color-text)]',
    'border border-[var(--color-line)]',
    'placeholder:text-[var(--color-muted)]',
    'outline-none transition-all duration-200',
    'focus:border-[var(--color-accent)]',
    'focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_15%,transparent)]',
  ].join(' ')


  const errorBorder = [
    'border-[var(--color-magenta)]',
    'focus:border-[var(--color-magenta)]',
    'focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-magenta)_15%,transparent)]',
  ].join(' ')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-muted)]">
          {t('contact.name')}
        </label>
        <input
          {...register('name')}
          placeholder={t('contact.namePh')}
          className={`${inputBase} ${errors.name ? errorBorder : ''}`}
        />
        {errors.name && (
          <span className="text-xs text-[var(--color-magenta)] font-mono">
            {t('contact.required')}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-muted)]">
          {t('contact.email')}
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder={t('contact.emailPh')}
          className={`${inputBase} ${errors.email ? errorBorder : ''}`}
        />
        {errors.email && (
          <span className="text-xs text-[var(--color-magenta)] font-mono">
            {t('contact.invalidEmail')}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-muted)]">
          {t('contact.message')}
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder={t('contact.messagePh')}
          className={`${inputBase} resize-none ${errors.message ? errorBorder : ''}`}
        />
        {errors.message && (
          <span className="text-xs text-[var(--color-magenta)] font-mono">
            {t('contact.minMessage')}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2
          px-7 py-3.5 rounded-full font-bold text-sm
          bg-[var(--color-accent)] text-[var(--color-on-accent)]
          transition-all duration-200
          hover:-translate-y-0.5
          hover:shadow-[0_12px_30px_-10px_var(--color-accent)]
          disabled:opacity-60 disabled:cursor-not-allowed
          disabled:hover:translate-y-0 disabled:hover:shadow-none
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[var(--color-accent)]"
      >
        {status === 'loading'
          ? <><Loader2 size={16} className="animate-spin" />{t('contact.sending')}</>
          : <><Send size={16} />{t('contact.send')}</>
        }
      </button>


      {status === 'success' && (
        <p className="text-sm text-[var(--color-accent)] font-mono text-center py-1">
          {t('contact.success')}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-[var(--color-magenta)] font-mono text-center py-1">
          {t('contact.error')}
        </p>
      )}

    </form>
  )
}