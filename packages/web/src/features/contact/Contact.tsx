import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import SectionHeader from '../../components/ui/SectionHeader'
import ContactForm   from './ContactForm'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">

        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14 items-start">

          <div>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              {t('contact.text')}
            </p>

            <a
              href="mailto:[rusthenronald9@.com]"
              className="inline-flex items-center gap-3
                text-[var(--color-text)] font-semibold text-sm
                transition-colors duration-200
                hover:text-[var(--color-accent)]"
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center
                  border border-[var(--color-line)]
                  bg-[var(--color-surface)]"
              >
                <Mail size={18} className="text-[var(--color-accent)]" />
              </span>
              [rusthenronald9@gmail.com]
            </a>
          </div>

 
          <div
            className="rounded-2xl border border-[var(--color-line)] p-8"
            style={{ background: 'var(--color-surface)' }}
          >
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}