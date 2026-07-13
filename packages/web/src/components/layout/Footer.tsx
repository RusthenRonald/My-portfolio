import { useTranslation } from 'react-i18next'
import { socialsData, footerConfig } from './footerData'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[var(--color-line)] pt-16 pb-10"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-[1120px] mx-auto px-7">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">

          <h3
            className="font-display font-bold text-[var(--color-text)] max-w-sm leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)' }}
          >
            {t('footer.title')}
          </h3>

          <div className="flex flex-wrap gap-3">
            {socialsData.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                  border border-[var(--color-line)] text-[var(--color-muted)]
                  text-sm font-medium
                  transition-all duration-200
                  hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]
                  hover:border-[var(--color-accent)] hover:-translate-y-0.5"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

        </div>

        <div className="h-px bg-[var(--color-line)] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4
          text-sm text-[var(--color-muted)] font-mono"
        >
          <span>
            © {year} {footerConfig.name}. {t('footer.rights')}
          </span>
          <a
            href="#top"
            className="hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            {t('footer.top')} ↑
          </a>
        </div>

      </div>
    </footer>
  )
}