import { useState, useEffect } from 'react'
import { ArrowUpRight, Sun, Moon } from 'lucide-react'

export default function Navbar({ onBookCall, dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? 'rgba(234, 234, 234, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-[1560px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Komma-inspired Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="MDT Design & Build Home"
          >
            {/* Minimal Double Quote Icon matching Komma Komma ” */}
            <span
              className="font-display text-3xl md:text-4xl leading-none font-bold select-none transition-transform duration-300 group-hover:scale-110"
              style={{ color: 'var(--color-text)' }}
            >
              ”
            </span>
            <span
              className="font-mono text-xs tracking-widest uppercase font-semibold ml-1"
              style={{ color: 'var(--color-text)' }}
            >
              MDT
            </span>
          </a>

          {/* Right Navigation Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-full transition-opacity hover:opacity-70"
              style={{ color: 'var(--color-text)' }}
            >
              {dark ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
            </button>

            {/* "Book a call" Pill Button */}
            <button
              onClick={onBookCall}
              className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 font-mono text-xs tracking-wider uppercase transition-all duration-300 rounded-[3px] group shadow-sm"
              style={{
                backgroundColor: 'var(--color-text)',
                color: 'var(--color-bg)',
              }}
            >
              <span>Book a call</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={13} strokeWidth={2} />
              </span>
            </button>

            {/* Hamburger Button (= two horizontal bars) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-opacity hover:opacity-75 focus:outline-none"
              style={{ color: 'var(--color-text)' }}
              aria-label="Toggle navigation menu"
            >
              <span
                className="w-5 h-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-text)',
                  transform: menuOpen ? 'rotate(45deg) translate(2px, 4px)' : 'none',
                }}
              />
              <span
                className="w-5 h-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-text)',
                  transform: menuOpen ? 'rotate(-45deg) translate(2px, -4px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Minimal Navigation Menu Drawer */}
      <div
        className="fixed inset-0 z-40 transition-all duration-500 ease-in-out flex flex-col justify-between p-8 md:p-16"
        style={{
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        {/* Top spacer */}
        <div className="h-16" />

        {/* Menu Links */}
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 my-auto">
          <nav className="md:col-span-8 flex flex-col gap-4 md:gap-6">
            {[
              { label: 'Work', href: '#work', index: '01' },
              { label: 'Services', href: '#services', index: '02' },
              { label: 'Studio', href: '#about', index: '03' },
              { label: 'Testimonials', href: '#testimonials', index: '04' },
              { label: 'Contact', href: '#contact', index: '05' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-6 font-display text-4xl sm:text-6xl md:text-7xl tracking-tight transition-all duration-300 hover:translate-x-3"
                style={{ color: 'var(--color-text)' }}
              >
                <span className="font-mono text-xs tracking-widest opacity-40">
                  {item.index}
                </span>
                <span className="group-hover:italic transition-all duration-200">
                  {item.label}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl">
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Right Column Metadata */}
          <div className="md:col-span-4 flex flex-col justify-end gap-8 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-soft md:pl-12">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase block opacity-40 mb-2">
                Studio Location
              </span>
              <p className="font-mono text-xs tracking-wider leading-relaxed">
                Riverside, California
                <br />
                Inland Empire & Orange County
                <br />
                34.0300° N, 117.3700° W
              </p>
            </div>

            <div>
              <span className="font-mono text-xs tracking-widest uppercase block opacity-40 mb-2">
                License & Credentials
              </span>
              <p className="font-mono text-xs tracking-wider leading-relaxed">
                CSLB #1054266
                <br />
                General Building Contractor (B)
              </p>
            </div>

            <div>
              <span className="font-mono text-xs tracking-widest uppercase block opacity-40 mb-2">
                Direct Inquiries
              </span>
              <p className="font-mono text-xs tracking-wider leading-relaxed">
                themejiateam@gmail.com
                <br />
                (951) 373-9868
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1440px] mx-auto w-full pt-8 border-t border-soft flex items-center justify-between font-mono text-xs tracking-widest uppercase opacity-40">
          <span>© 2026 MDT, Inc.</span>
          <span>Building Web Experiences for Homes</span>
        </div>
      </div>
    </>
  )
}
