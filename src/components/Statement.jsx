import useInView from '../hooks/useInView'

export default function Statement() {
  const [ref, inView] = useInView()

  return (
    <section
      className="py-24 md:py-36 px-6 md:px-12"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
    >
      <div className="max-w-[1560px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Left Col: Minimal Double Quote Mark */}
        <div className="md:col-span-3">
          <span
            className="font-display text-7xl md:text-8xl leading-none font-bold block select-none"
            style={{ color: 'var(--color-text)' }}
          >
            ”
          </span>
          <span
            className="font-mono text-xs tracking-widest uppercase block mt-4"
            style={{ color: 'var(--color-muted)' }}
          >
            01 / Philosophy
          </span>
        </div>

        {/* Right Col: Massive Statement matching Frame 010 */}
        <div
          ref={ref}
          className="md:col-span-9 flex flex-col justify-end"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <h2
            className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[1.02] tracking-tightest mb-10 max-w-4xl"
            style={{ color: 'var(--color-text)' }}
          >
            Great design and
            <br />
            great construction
            <br />
            <span className="italic">should never</span>
            <br />
            exist separately.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 max-w-3xl border-t border-soft">
            <p className="font-body font-light text-sm md:text-base leading-relaxed text-muted">
              Growing up around job sites with their builder father Martin and real
              estate mother Domika, sisters Ashlee and Alexis Mejia founded MDT to
              eliminate the chaos and finger-pointing between architects and
              general contractors.
            </p>
            <p className="font-body font-light text-sm md:text-base leading-relaxed text-muted">
              We operate on the premise that vision, investment, and execution belong
              together from day one. Full-service residential remodeling and custom
              luxury construction across Riverside, the Inland Empire, and Orange
              County.
            </p>
          </div>

          {/* Founders Sign-off */}
          <div className="flex flex-wrap gap-10 mt-10 font-mono text-xs tracking-widest uppercase text-muted">
            <div>
              <span className="font-semibold block text-onyx dark:text-alabaster">
                Ashlee Mejia
              </span>
              <span>Co-Founder & Lead Designer</span>
            </div>
            <div>
              <span className="font-semibold block text-onyx dark:text-alabaster">
                Alexis Mejia
              </span>
              <span>Co-Founder & Project Director</span>
            </div>
            <div>
              <span className="font-semibold block text-onyx dark:text-alabaster">
                CSLB #1054266
              </span>
              <span>Licensed & Insured B-General</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
