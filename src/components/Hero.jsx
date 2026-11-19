import { useEffect, useRef } from 'react'
import { ArrowDownRight } from 'lucide-react'
import { asset } from '../utils/asset'

const heroImages = [
  asset('/images/bold-beautiful-kitchen-lg.jpg'),
  asset('/images/coastal-escape-lg.jpg'),
  asset('/images/montecito-kitchen-lg.jpg'),
]

export default function Hero() {
  const headlineRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  // Cycle background images
  useEffect(() => {
    let idx = 0
    const bg = bgRef.current
    if (!bg) return
    bg.style.backgroundImage = `url(${heroImages[0]})`
    const interval = setInterval(() => {
      idx = (idx + 1) % heroImages.length
      bg.style.opacity = '0'
      setTimeout(() => {
        bg.style.backgroundImage = `url(${heroImages[idx]})`
        bg.style.opacity = '0.18'
      }, 600)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 max-w-[1440px] mx-auto">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${heroImages[0]})`,
          opacity: 0.18,
          transition: 'opacity 0.6s ease',
          zIndex: 0,
        }}
      />
      {/* Top metadata row */}
      <div
        className="absolute top-24 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between"
        style={{ color: 'var(--color-muted)', zIndex: 1 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">
          Riverside, CA — Est. 2018
        </span>
        <span className="font-mono text-xs tracking-widest uppercase hidden md:block">
          CSLB #1054266
        </span>
        <span className="font-mono text-xs tracking-widest uppercase">
          Design & Build
        </span>
      </div>

      {/* Main headline */}
      <div ref={headlineRef} className="mb-12 relative" style={{ zIndex: 1 }}>
        <h1
          className="font-display text-[clamp(3.5rem,10vw,9.5rem)] leading-[0.9] tracking-tightest mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          Where Design
          <br />
          <span className="italic">Meets</span> Build.
        </h1>

        {/* Bottom row: description + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-8">
          <p
            className="font-body font-light text-base md:text-lg max-w-md leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            A sister-led design-build firm bringing vision, investment, and
            execution together from day one — in Riverside & Orange County, CA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-text)',
                color: 'var(--color-bg)',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              View Our Work
              <ArrowDownRight size={14} strokeWidth={1.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300"
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
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="flex flex-wrap gap-8 pt-10 relative"
        style={{ borderTop: '1px solid var(--color-border)', zIndex: 1 }}
      >
        {[
          { value: '100+', label: 'Projects Completed' },
          { value: '8+', label: 'Years of Experience' },
          { value: '2', label: 'Counties Served' },
          { value: '1', label: 'Team. Full Service.' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span
              className="font-display text-3xl md:text-4xl"
              style={{ color: 'var(--color-text)' }}
            >
              {stat.value}
            </span>
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
