import { ArrowUpRight } from 'lucide-react'

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      id="site-footer"
      className="pt-24 md:pt-36 pb-8 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[1560px] mx-auto flex flex-col justify-between">
        {/* Four Column Metadata Layout (Matching Frame 030) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-24 font-mono text-xs tracking-wider">
          {/* Column 1: Contact Info */}
          <div className="flex flex-col gap-3">
            <span className="uppercase opacity-40 font-semibold mb-1">
              CONTACT INFO
            </span>
            <a
              href="mailto:themejiateam@gmail.com"
              className="hover:underline transition-all text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              themejiateam@gmail.com
            </a>
            <a
              href="tel:+19513739868"
              className="hover:underline transition-all text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              (951) 373-9868
            </a>
            <button
              onClick={onOpenContact}
              className="text-left flex items-center gap-1.5 hover:underline text-muted hover:text-onyx dark:hover:text-alabaster pt-1"
            >
              <span>Book a call</span>
              <ArrowUpRight size={12} strokeWidth={1.5} />
            </button>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <span className="uppercase opacity-40 font-semibold mb-1">
              NAVIGATION
            </span>
            <a
              href="#"
              onClick={scrollToTop}
              className="uppercase hover:underline text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              HOME
            </a>
            <a
              href="#work"
              className="uppercase hover:underline text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              WORK
            </a>
            <a
              href="#services"
              className="uppercase hover:underline text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              SERVICES
            </a>
            <a
              href="#about"
              className="uppercase hover:underline text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              STUDIO
            </a>
            <a
              href="#contact"
              className="uppercase hover:underline text-muted hover:text-onyx dark:hover:text-alabaster"
            >
              CONTACT
            </a>
          </div>

          {/* Column 3: Studio Location & Coordinates */}
          <div className="flex flex-col gap-3">
            <span className="uppercase opacity-40 font-semibold mb-1">
              STUDIO
            </span>
            <span className="text-muted">Riverside, CA</span>
            <span className="text-muted">Inland Empire & OC</span>
            <span className="text-muted">34.0300° N, 117.3700° W</span>
            <span className="text-muted">CSLB #1054266</span>
          </div>

          {/* Column 4: Privacy & Legal */}
          <div className="flex flex-col gap-3">
            <span className="uppercase opacity-40 font-semibold mb-1">
              PRIVACY & LICENSE
            </span>
            <span className="text-muted">Copyright © 2026 MDT, Inc.</span>
            <span className="text-muted">B-General Building Contractor</span>
            <span className="text-muted">Licensed, Bonded & Insured</span>
            <span className="text-muted">Terms of Service</span>
          </div>
        </div>

        {/* Massive Edge-to-Edge Macro Typography (Frame 030 / 050) */}
        <div className="w-full pt-12 border-t border-soft select-none overflow-hidden">
          <h1
            className="font-display font-bold text-[clamp(4.2rem,15vw,17rem)] leading-[0.82] tracking-tighter uppercase whitespace-nowrap text-center text-onyx dark:text-alabaster opacity-95 transition-opacity"
          >
            MDT INC
          </h1>
        </div>
      </div>
    </footer>
  )
}
