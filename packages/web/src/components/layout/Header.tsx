import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'

const navLinks = [
  { href: '#about',      labelKey: 'nav.about'    },
  { href: '#skills',     labelKey: 'nav.skills'   },
  { href: '#experience', labelKey: 'nav.exp'      },
  { href: '#projects',   labelKey: 'nav.projects' },
  { href: '#certs',      labelKey: 'nav.certs'    },
  { href: '#cv',         labelKey: 'nav.resume'   },
]

const LANGUAGES = ['PT', 'EN'] as const

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* close mobile menu on Escape */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* header shadow on scroll */
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  function setLang(lang: string) {
    i18n.changeLanguage(lang.toLowerCase())
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-md
          border-b transition-all duration-300
          bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)]
          ${scrolled
            ? 'border-[var(--color-line)] shadow-[0_4px_24px_-18px_rgba(0,0,0,0.5)]'
            : 'border-transparent'
          }`}
      >
        <div className="max-w-[1120px] mx-auto px-7 h-[74px] flex items-center justify-between">

          {/* ── Brand ── */}
          <a
            href="#top"
            className="font-display font-bold text-xl tracking-tight text-[var(--color-text)]"
          >
            [Rusthen]<span className="text-[var(--color-accent)] md:hidden lg:inline">Ronald</span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, labelKey }) => {
              const sectionId = href.replace('#', '')
              const isActive = active === sectionId
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative text-sm font-medium pb-0.5 transition-colors duration-200
                    after:absolute after:left-0 after:-bottom-0.5 after:h-0.5
                    after:bg-[var(--color-accent)] after:transition-all after:duration-300
                    ${isActive
                      ? 'text-[var(--color-text)] after:w-full'
                      : 'text-[var(--color-muted)] after:w-0 hover:text-[var(--color-text)] hover:after:w-full'
                    }`}
                >
                  {t(labelKey)}
                </a>
              )
            })}
          </nav>

          {/* ── Tools ── */}
          <div className="flex items-center gap-2">

            {/* theme toggle */}
            <Button
              variant="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={17} />
                : <Moon size={17} />
              }
            </Button>

            {/* language switcher */}
            <div className="flex border border-[var(--color-line)] rounded-full overflow-hidden">
              {LANGUAGES.map((lang) => {
                const isOn = i18n.language.toUpperCase() === lang
                return (
                  <button
                    key={lang}
                    onClick={() => setLang(lang)}
                    className={`px-3 py-1.5 font-mono text-xs font-bold tracking-wide
                      transition-colors duration-200 cursor-pointer
                      ${isOn
                        ? 'bg-[var(--color-accent)] text-[var(--color-on-accent)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                      }`}
                  >
                    {lang}
                  </button>
                )
              })}
            </div>

            {/* hamburger — mobile only */}
            <Button
              variant="icon"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>

          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}