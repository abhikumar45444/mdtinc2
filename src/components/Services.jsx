import useInView from '../hooks/useInView'

const services = [
  {
    index: '01',
    title: 'Residential Remodeling',
    description:
      'From kitchen and bathroom overhauls to whole-home transformations — we bring every inch of your home to life with precision craftsmanship and elevated design.',
    tags: ['Kitchens', 'Bathrooms', 'Whole-Home'],
  },
  {
    index: '02',
    title: 'Home Additions',
    description:
      'Expand your living space thoughtfully. Whether a room addition, second story, or multi-use extension, we plan and build with your lifestyle in mind.',
    tags: ['Extensions', 'Second Stories', 'Room Additions'],
  },
  {
    index: '03',
    title: 'ADUs & Guesthouses',
    description:
      'From garage conversions to fully detached guesthouses, we handle the full scope — design, permits, and construction — to maximize your property value.',
    tags: ['Garage Conversions', 'Detached ADUs', 'Guesthouses'],
  },
  {
    index: '04',
    title: 'Outdoor Living',
    description:
      'Transform your exterior into a true extension of your home. Custom patios, outdoor kitchens, and entertainment spaces built to California living standards.',
    tags: ['Patios', 'Outdoor Kitchens', 'Entertainment'],
  },
  {
    index: '05',
    title: 'Interior Design',
    description:
      'Standalone design services — concept boards, custom layouts, curated finish selections, and virtual styling packages starting at $3,500 per room.',
    tags: ['Design Direction', 'Full Room Design', 'Virtual Styling'],
  },
  {
    index: '06',
    title: 'Design Management',
    description:
      'Already have a contractor? We embed our design expertise directly into the build process to ensure your vision survives contact with construction.',
    tags: ['Coordination', 'Quality Control', 'Finish Oversight'],
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section
      id="services"
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <span
            className="font-mono text-xs tracking-widest uppercase block mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            02 / Services
          </span>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-tightest"
            style={{ color: 'var(--color-text)' }}
          >
            What We
            <br />
            <span className="italic">Offer</span>
          </h2>
        </div>
        <p
          className="font-body font-light text-base max-w-xs leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          A full-service, concierge-level approach to residential design and construction.
        </p>
      </div>

      {/* Services grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <ServiceCard
            key={svc.index}
            svc={svc}
            delay={i * 80}
            inView={inView}
          />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ svc, delay, inView }) {
  return (
    <div
      className="p-8 md:p-10 flex flex-col gap-6 group cursor-default transition-all duration-500"
      style={{
        border: '1px solid var(--color-border)',
        marginTop: '-1px',
        marginLeft: '-1px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, background-color 0.3s ease`,
      }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-text)'; e.currentTarget.style.color = 'var(--color-bg)' }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-text)' }}
    >
      <span
        className="font-mono text-xs tracking-widest"
        style={{ color: 'var(--color-muted)', opacity: 0.5 }}
      >
        {svc.index}
      </span>

      <h3
        className="font-display text-2xl md:text-3xl leading-tight"
      >
        {svc.title}
      </h3>

      <p
        className="font-body font-light text-sm leading-relaxed flex-1"
        style={{ opacity: 0.7 }}
      >
        {svc.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs tracking-wide px-2.5 py-1"
            style={{ border: '1px solid currentColor', opacity: 0.4 }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
