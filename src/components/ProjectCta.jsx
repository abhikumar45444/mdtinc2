import { ArrowUpRight } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function ProjectCta({ onOpenContact }) {
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      className="py-28 md:py-44 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Col: Headline + Button (Frame 025) */}
        <div
          ref={ref}
          className="lg:col-span-7 flex flex-col items-start gap-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <span className="font-mono text-xs tracking-widest uppercase opacity-40">
            04 / Collaboration
          </span>

          <h2 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-tightest">
            Do you have a
            <br />
            <span className="italic">project</span> in mind?
          </h2>

          <p className="font-body font-light text-base md:text-lg leading-relaxed text-muted max-w-lg">
            Schedule a complimentary discovery consultation to review your scope,
            timeline, permit requirements, and anticipated investment with Ashlee
            and Alexis.
          </p>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-3 px-6 sm:px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-[3px] group shadow-md"
            style={{
              backgroundColor: 'var(--color-text)',
              color: 'var(--color-bg)',
            }}
          >
            <span>Let&apos;s talk</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </button>
        </div>

        {/* Right Col: Minimal Architectural Blueprint / ASCII Wireframe (Frame 025) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="w-full max-w-[420px] p-6 rounded-[4px] border border-soft font-mono text-[9px] sm:text-[10px] leading-[13px] select-none opacity-75 overflow-hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.03)',
            }}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-soft text-[10px] uppercase tracking-wider">
              <span>MDT-SPEC // ARCH.04</span>
              <span>CSLB #1054266</span>
            </div>
            <pre className="overflow-x-auto text-muted">
{`          ┌───────────────────────────┐
          │  RESIDENTIAL DESIGN-BUILD │
  ▲       ├───────────────────────────┤
  │       │  [MASTER SUITE // 840 SQ] │
  │       │  ┌───┐ ┌─────────┐ ┌───┐  │
 14FT     │  │   │ │ PAONAZZO│ │   │  │
  │       │  └───┘ └─────────┘ └───┘  │
  ▼       │   • RIVERSIDE RESIDENCE   │
          └─────────────┬─────────────┘
                        │
       =================┴=================
       GRADE LEVEL // CONCRETE SLAB SPEC
       FOUNDATION: 3000 PSI // REBAR #4`}
            </pre>
            <div className="pt-3 mt-3 border-t border-soft flex items-center justify-between text-[9px] uppercase tracking-wider text-muted">
              <span>34.0300° N, 117.3700° W</span>
              <span>INLAND EMPIRE // OC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
