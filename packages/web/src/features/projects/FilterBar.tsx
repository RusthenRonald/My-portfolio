import { type ProjectCategory } from './data'
import { filterCategories }     from './data'

type Filter = ProjectCategory | 'all'

interface FilterBarProps {
  active:   Filter
  onChange: (filter: Filter) => void
  lang:     'pt' | 'en'
}

export default function FilterBar({ active, onChange, lang }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {filterCategories.map(({ key, label }) => {
        const isOn = active === key
        return (
          <button
            key={key}
            onClick={() => onChange(key as Filter)}
            className={`font-mono text-xs tracking-wide px-4 py-2 rounded-full
              border transition-all duration-200 cursor-pointer
              ${isOn
                ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)] border-[var(--color-accent)]'
                : 'bg-transparent text-[var(--color-muted)] border-[var(--color-line)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]'
              }`}
          >
            {label[lang]}
          </button>
        )
      })}
    </div>
  )
}