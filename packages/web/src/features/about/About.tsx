import { useTranslation } from 'react-i18next'
import SectionHeader from '../../components/ui/SectionHeader'
import { aboutData } from './data'

const cardKeys = ['name', 'role', 'location', 'langs', 'status'] as const

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'pt' | 'en'

  const bio = aboutData.bio[lang] ?? aboutData.bio.pt

  const cardValues: Record<typeof cardKeys[number], string> = {
    name:     aboutData.card.name,
    role:     aboutData.card.role,
    location: aboutData.card.location,
    langs:    aboutData.card.langs,
    status:   t('about.card.available'), 
  }

  return (
    <section id="about" className="py-24">
      <div className="max-w-[1120px] mx-auto px-7">

        <SectionHeader
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-14 items-start">

          {/* ── Bio text ── */}
          <div className="flex flex-col gap-5">
            {bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--color-muted)] leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.3vw, 1.08rem)' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* ── Info card ── */}
          <aside
            className="rounded-2xl border border-[var(--color-line)] overflow-hidden"
            style={{ background: 'var(--color-surface)' }}
          >
            {cardKeys.map((key, i) => (
              <div
                key={key}
                className={`flex items-center justify-between px-6 py-4 gap-4
                  ${i < cardKeys.length - 1 ? 'border-b border-[var(--color-line)]' : ''}`}
              >
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-muted)] shrink-0">
                  {t(`about.card.${key}`)}
                </span>
                <span
                  className={`font-semibold text-sm text-right
                    ${key === 'status' ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]'}`}
                >
                  {key === 'status' && (
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)] mr-2 animate-pulse" />
                  )}
                  {cardValues[key]}
                </span>
              </div>
            ))}
          </aside>

        </div>
      </div>
    </section>
  )
}