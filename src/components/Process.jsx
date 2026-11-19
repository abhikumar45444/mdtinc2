import useInView from '../hooks/useInView'

const steps = [
  {
    index: '01',
    title: 'Design',
    description:
      'We collaborate closely with you to understand your vision and lifestyle. Custom layouts, curated finish selections, and a design that balances luxury with utility.',
  },
  {
    index: '02',
    title: 'Preconstruction',
    description:
      'Trade walkthroughs, detailed budgets, value engineering, and obstacle planning — all before a single nail is driven. Clarity before construction.',
  },
  {
    index: '03',
    title: 'Permitting',
    description:
      'We manage every city plan submittal, regulatory coordination, and HOA compliance document, so you never have to navigate bureaucracy alone.',
  },
  {
    index: '04',
    title: 'Construction',
    description:
      'Dedicated project management, skilled trades, and transparent communication at every milestone. Your design is protected through every phase of the build.',
  },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <span
            className="font-mono text-xs tracking-widest uppercase block mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            03 / Process
          </span>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-tightest"
            style={{ color: 'var(--color-text)' }}
          >
            From Concept
            <br />
            to <span className="italic">Completion</span>
          </h2>
        </div>
        <p
          className="font-body font-light text-base max-w-xs leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          A seamless, structured journey that keeps you informed and in control at every stage.
        </p>
      </div>

      {/* Steps */}
      <div ref={ref} className="flex flex-col">
        {steps.map((step, i) => (
          <div
            key={step.index}
            className="grid grid-cols-12 py-10 group cursor-default transition-colors duration-300"
            style={{
              borderTop: '1px solid var(--color-border)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-24px)',
              transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
            }}
          >
            {/* Index */}
            <div className="col-span-2 md:col-span-1">
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: 'var(--color-muted)', opacity: 0.5 }}
              >
                {step.index}
              </span>
            </div>

            {/* Title */}
            <div className="col-span-10 md:col-span-3">
              <h3
                className="font-display text-2xl md:text-3xl leading-tight group-hover:italic transition-all duration-300"
                style={{ color: 'var(--color-text)' }}
              >
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-7 md:col-start-5 mt-4 md:mt-0">
              <p
                className="font-body font-light text-base leading-relaxed max-w-lg"
                style={{ color: 'var(--color-muted)' }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
