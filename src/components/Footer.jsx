export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* Big statement */}
      <div
        className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <p
          className="font-display text-[clamp(2rem,6vw,7rem)] leading-[0.9] tracking-tightest"
          style={{ color: 'var(--color-text)' }}
        >
          Built with intention.
          <br />
          <span className="italic" style={{ color: 'var(--color-muted)' }}>
            Finished with care.
          </span>
        </p>
      </div>

      {/* Bottom row */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span
              className="font-display text-lg tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              MDT Design & Build
            </span>
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              CSLB #1054266 — Riverside, CA
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase link-underline"
                style={{ color: 'var(--color-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-5">
            {[
              { label: 'Instagram', href: 'https://instagram.com' },
              { label: 'Houzz', href: 'https://houzz.com' },
              { label: 'Email', href: 'mailto:themejiateam@gmail.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-mono text-xs tracking-widest uppercase link-underline"
                style={{ color: 'var(--color-muted)' }}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-8 pt-6"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: 'var(--color-muted)', opacity: 0.5 }}
          >
            © {year} MDT, Inc. All rights reserved.
          </span>
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: 'var(--color-muted)', opacity: 0.5 }}
          >
            34°03′N 117°22′W — Riverside, California
          </span>
        </div>
      </div>
    </footer>
  )
}
