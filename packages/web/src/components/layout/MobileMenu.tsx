import { useTranslation } from 'react-i18next'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { href: '#about',      labelKey: 'nav.about',    num: '01' },
  { href: '#skills',     labelKey: 'nav.skills',   num: '02' },
  { href: '#experience', labelKey: 'nav.exp',      num: '03' },
  { href: '#projects',   labelKey: 'nav.projects', num: '04' },
  { href: '#certs',      labelKey: 'nav.certs',    num: '05' },
  { href: '#cv',         labelKey: 'nav.resume',   num: '06' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation()

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[109] bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <nav
        className={`fixed inset-0 z-[110] flex flex-col justify-center gap-1 px-8
          bg-[var(--color-surface)] transition-transform duration-400
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {links.map(({ href, labelKey, num }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className="flex items-baseline gap-4 py-3 border-b border-[var(--color-line)]
              font-display text-3xl font-semibold text-[var(--color-text)]
              hover:text-[var(--color-accent)] transition-colors duration-200
              last:border-b-0"
          >
            <span className="font-mono text-xs text-[var(--color-accent)]">{num}</span>
            {t(labelKey)}
          </a>
        ))}
      </nav>
    </>
  )
}