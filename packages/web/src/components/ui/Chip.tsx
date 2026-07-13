import { type IconType } from 'react-icons'

interface ChipProps {
  label: string
  icon?: IconType
}

export default function Chip({ label, icon: Icon }: ChipProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium
        border border-[var(--color-line)] text-[var(--color-text)]
        bg-[var(--color-bg)]
        transition-all duration-200
        hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
        cursor-default select-none"
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {label}
    </span>
  )
}
