import { type Experience } from './data'

interface TimelineItemProps {
  experience: Experience
  index:      number
  lang:       'pt' | 'en'
}

export default function TimelineItem({ experience, index, lang }: TimelineItemProps) {
  const isLeft = index % 2 === 0

  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] items-start gap-0`}
    >
      <div className={`pb-10 md:pr-10 ${isLeft ? 'md:block' : 'md:block md:invisible'}`}>
        {isLeft && (
          <Card experience={experience} lang={lang} align="right" />
        )}
      </div>

      <div className="hidden md:flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full border-4 shrink-0 z-10 mt-5"
          style={{
            background:   'var(--color-accent)',
            borderColor:  'var(--color-bg)',
          }}
        />
        <div
          className="w-[2px] flex-1 mt-1"
          style={{ background: 'var(--color-line)' }}
        />
      </div>

      <div className={`pb-10 md:pl-10 ${!isLeft ? 'md:block' : 'md:block md:invisible'}`}>
        {!isLeft && (
          <Card experience={experience} lang={lang} align="left" />
        )}
      </div>

      <div className="md:hidden pb-8 pl-6 border-l-2 border-[var(--color-line)] relative">
        <div
          className="absolute -left-[9px] top-4 w-4 h-4 rounded-full border-4"
          style={{
            background:  'var(--color-accent)',
            borderColor: 'var(--color-bg)',
          }}
        />
        <Card experience={experience} lang={lang} align="left" />
      </div>
    </div>
  )
}

interface CardProps {
  experience: Experience
  lang:       'pt' | 'en'
  align:      'left' | 'right'
}

function Card({ experience, lang, align }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--color-line)] p-6
        bg-[var(--color-surface)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[var(--color-accent)]
        ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-accent)]">
        {experience.period[lang]}
      </span>

      <h3 className="font-display font-semibold text-[var(--color-text)] text-xl mt-2 mb-1">
        {experience.role[lang]}
      </h3>

      <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] font-semibold
        mb-4 flex-wrap"
        style={{ justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}
      >
        <span>{experience.company}</span>
        <span className="w-1 h-1 rounded-full bg-[var(--color-line)]" />
        <span>{experience.location}</span>
      </div>

      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
        {experience.description[lang]}
      </p>

      <div
        className="flex flex-wrap gap-2 mt-4"
        style={{ justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}
      >
        {experience.stack.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md
              border border-[var(--color-line)] text-[var(--color-muted)]"
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}