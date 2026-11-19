import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left col: label + index */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div>
            <span
              className="font-mono text-xs tracking-widest uppercase block mb-3"
              style={{ color: 'var(--color-muted)' }}
            >
              01 / About
            </span>
            <div
              className="w-8 h-px mt-6"
              style={{ backgroundColor: 'var(--color-border)' }}
            />
          </div>

          <div className="mt-10 md:mt-0">
            <p
              className="font-mono text-xs tracking-widest uppercase leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              Riverside, CA
              <br />
              Inland Empire &
              <br />
              Orange County
            </p>
          </div>
        </div>

        {/* Right col: content */}
        <div
          ref={ref}
          className="md:col-span-9"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <h2
            className="font-display text-[clamp(2.2rem,5vw,5rem)] leading-[1] tracking-tightest mb-10"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <p
              className="font-body font-light text-base leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              Growing up around construction sites with their father Martin —
              a builder — and a real estate professional mother Domika, sisters
              Ashlee and Alexis Mejia founded MDT to bridge the gap between
              design and construction.
            </p>
            <p
              className="font-body font-light text-base leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              We operate on the premise that vision, investment, and execution
              belong together from day one. Our concierge-level approach clears
              project complexity so you can focus on what matters: your home.
            </p>
          </div>

          {/* Founders */}
          <div
            className="mt-14 pt-10 flex flex-wrap gap-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            {[
              { name: 'Ashlee Mejia', role: 'Co-Founder & Lead Designer' },
              { name: 'Alexis Mejia', role: 'Co-Founder & Project Director' },
            ].map((founder) => (
              <div key={founder.name} className="flex flex-col gap-1">
                <span
                  className="font-display text-xl italic"
                  style={{ color: 'var(--color-text)' }}
                >
                  {founder.name}
                </span>
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {founder.role}
                </span>
              </div>
            ))}
          </div>

          {/* Image strip */}
          <div className="mt-14 grid grid-cols-3 gap-3">
            {[
              asset('/images/montecito-kitchen.jpg'),
              asset('/images/marble-spa-bath.jpg'),
              asset('/images/coastal-escape.jpg'),
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
