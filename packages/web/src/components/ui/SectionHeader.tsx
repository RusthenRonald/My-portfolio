interface SectionHeaderProps {
  eyebrow: string
  title:   string
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="w-6 h-[2px] bg-[var(--color-accent)]" />
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
          {eyebrow}
        </span>
      </div>
      <h2
        className="font-display font-bold tracking-tight text-[var(--color-text)]"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
      >
        {title}
      </h2>
    </div>
  )
}