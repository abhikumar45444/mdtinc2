import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { asset } from '../utils/asset'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--color-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
          style={{ color: 'var(--color-text)' }}
        >
          <img
            src={asset('/images/mdt-logo.png')}
            alt="MDT Design & Build"
            className="h-8 w-auto"
            style={{ filter: 'var(--logo-filter, none)' }}
          />
          <span className="font-body font-light text-sm opacity-50 hidden sm:inline">Design & Build</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase link-underline"
                style={{ color: 'var(--color-muted)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-text)' }}
          >
            {dark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--color-text)'
              e.currentTarget.style.color = 'var(--color-bg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-text)'
            }}
          >
            Start a Project
          </a>

          {/* Mobile menu */}
          <button
            className="md:hidden p-1.5"
            style={{ color: 'var(--color-text)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: 'var(--color-bg)',
            borderColor: 'var(--color-border)',
          }}
        >
          <ul className="px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-muted)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-text)' }}
                onClick={() => setMenuOpen(false)}
              >
                Start a Project →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
