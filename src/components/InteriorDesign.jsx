import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

const packages = [
  {
    name: 'Design Direction',
    price: 'From $3,500',
    unit: '/ room',
    description:
      'Virtual styling packages that give you a clear design roadmap. Includes concept boards, color palettes, material selections, and sourcing guides — without the in-person commitment.',
    includes: ['Concept Board', 'Color Palette', 'Material Selections', 'Sourcing Guide', 'Virtual Consultation'],
  },
  {
    name: 'Full Room Design',
    price: 'Custom',
    unit: 'Pricing',
    description:
      'End-to-end interior design for a single room or multiple spaces. We handle layout planning, finish specifications, vendor coordination, and design management through the full project.',
    includes: ['Layout Planning', 'Finish Specifications', 'Vendor Coordination', 'Design Management', 'Walkthroughs'],
  },
]

export default function InteriorDesign() {
  const [ref, inView] = useInView()

  return (
    <section
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Left col */}
        <div className="md:col-span-4">
          <span
            className="font-mono text-xs tracking-widest uppercase block mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            05 / Interior Design
          </span>
          <h2
            className="font-display text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.95] tracking-tightest mb-8"
            style={{ color: 'var(--color-text)' }}
          >
            Design, as a
            <br />
            <span className="italic">standalone</span>
            <br />
            service.
          </h2>
          <p
            className="font-body font-light text-base leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            Not building with us? We offer interior design services independently — from virtual direction packages to full room design and project oversight.
          </p>
        </div>

        {/* Right col: packages */}
        <div
          ref={ref}
          className="md:col-span-8 flex flex-col gap-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Full-width feature image */}
          <div
            className="w-full aspect-[16/7] bg-cover bg-center"
            style={{ backgroundImage: `url(${asset('/images/design-services.jpg')})` }}
          />

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="p-8 md:p-10 flex flex-col gap-6 h-full"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-start justify-between">
                <h3
                  className="font-display text-2xl leading-tight"
                  style={{ color: 'var(--color-text)' }}
                >
                  {pkg.name}
                </h3>
              </div>

              <div className="flex items-baseline gap-1">
                <span
                  className="font-display text-3xl italic"
                  style={{ color: 'var(--color-text)' }}
                >
                  {pkg.price}
                </span>
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {pkg.unit}
                </span>
              </div>

              <p
                className="font-body font-light text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                {pkg.description}
              </p>

              <ul className="flex flex-col gap-2 mt-auto pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    <span style={{ opacity: 0.4 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
