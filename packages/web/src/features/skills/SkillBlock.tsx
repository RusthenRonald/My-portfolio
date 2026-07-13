import Chip from '../../components/ui/Chip'
import { type SkillCategory } from './data'

interface SkillBlockProps {
  block: SkillCategory
  title: string
}

export default function SkillBlock({ block, title }: SkillBlockProps) {
  return (
    <div
      className="rounded-2xl border border-[var(--color-line)] p-6
        bg-[var(--color-surface)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[var(--color-accent)]"
      style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span
            className="w-3 h-3 shrink-0 bg-[var(--color-accent)]"
            style={{ borderRadius: '3px', transform: 'rotate(45deg)' }}
          />
          <h3 className="font-display font-semibold text-[var(--color-text)] text-lg">
            {title}
          </h3>
        </div>
        <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-muted)]">
          {block.tag}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <Chip key={item.name} label={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  )
}