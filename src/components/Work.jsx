import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

const projects = [
  {
    index: '01',
    title: 'The Bold and Beautiful',
    subtitle: 'Whole Home Renovation',
    location: 'Riverside, CA',
    year: '2024',
    category: 'Whole-Home',
    description: 'A full-scope residential transformation — from structural layout changes to curated finishes — reimagining a dated Inland Empire home into a modern, cohesive living environment.',
    image: '/images/bold-beautiful-kitchen.jpg',
  },
  {
    index: '02',
    title: 'The House of Paonazzo',
    subtitle: 'Luxury Kitchen & Living',
    location: 'Orange County, CA',
    year: '2024',
    category: 'Kitchen',
    description: 'Paonazzo marble anchors a dramatic kitchen redesign. Custom cabinetry, integrated appliances, and a waterfall island create a culinary showpiece that doubles as an entertainer\'s dream.',
    image: '/images/paonazzo-marble-kitchen.jpg',
  },
  {
    index: '03',
    title: 'Montecito-Inspired Kitchen',
    subtitle: 'Kitchen Transformation',
    location: 'Corona Del Mar, CA',
    year: '2023',
    category: 'Kitchen',
    description: 'Warm whites, unlacquered brass, and locally sourced stone bring the effortless elegance of Santa Barbara\'s enclave into a kitchen with clean architectural lines.',
    image: '/images/montecito-kitchen.jpg',
  },
  {
    index: '04',
    title: 'A Marble-Clad Spa Bath',
    subtitle: 'Bathroom Renovation',
    location: 'Inland Empire, CA',
    year: '2023',
    category: 'Bathroom',
    description: 'Floor-to-ceiling marble, Pinky\'s arched steel door, a freestanding soaking tub, and a steam shower transform a basic bathroom into a private spa retreat with hotel-grade luxury.',
    image: '/images/marble-spa-bath.jpg',
  },
  {
    index: '05',
    title: 'Azusa Reimagination',
    subtitle: 'Home Addition',
    location: 'Azusa, CA',
    year: '2023',
    category: 'Addition',
    description: 'A structural home addition and comprehensive interior redesign that unified disconnected living spaces, adding 800 sq ft while preserving the home\'s original character.',
    image: '/images/azusa-home-addition.jpg',
  },
  {
    index: '06',
    title: 'From Garage to Guesthouse',
    subtitle: 'ADU Conversion',
    location: 'Riverside, CA',
    year: '2022',
    category: 'ADU',
    description: 'A single-car garage reimagined as a fully permitted, self-contained guesthouse with a bedroom, full bath, kitchenette, and living area — maximizing property value and flexibility.',
    image: '/images/garage-to-guesthouse.jpg',
  },
  {
    index: '07',
    title: 'The Coastal Escape',
    subtitle: 'Full Interior Renovation',
    location: 'Santa Ana, CA',
    year: '2024',
    category: 'Whole-Home',
    description: 'A serene coastal palette woven through every room — white oak cabinetry, limewash walls, and natural stone bring calm and character to a complete home transformation.',
    image: '/images/coastal-escape.jpg',
  },
  {
    index: '08',
    title: 'Coastal Calm Kitchen',
    subtitle: 'Kitchen Renovation',
    location: 'Santa Ana, CA',
    year: '2023',
    category: 'Kitchen',
    description: 'Soft blues and warm greiges anchor a kitchen that feels like a weekend retreat every day. Custom shaker cabinetry, honed marble counters, and a generous island for gathering.',
    image: '/images/coastal-calm-kitchen.jpg',
  },
  {
    index: '09',
    title: 'Little Powder Room, Big Drama',
    subtitle: 'Powder Room',
    location: 'Inland Empire, CA',
    year: '2023',
    category: 'Bathroom',
    description: 'A compact powder room turned into a statement space with bold wallpaper, vessel sink, and custom vanity — proof that small rooms deserve the biggest ideas.',
    image: '/images/powder-room.jpg',
  },
  {
    index: '10',
    title: 'Riverside Second Story ADU',
    subtitle: 'ADU Addition',
    location: 'Riverside, CA',
    year: '2023',
    category: 'ADU',
    description: 'A fully permitted second-story ADU addition — creating an independent living suite above the garage with its own entrance, kitchen, and outdoor deck.',
    image: '/images/riverside-adu.jpg',
  },
  {
    index: '11',
    title: 'Café au Luxe',
    subtitle: 'Kitchen Renovation',
    location: 'Inland Empire, CA',
    year: '2022',
    category: 'Kitchen',
    description: 'A French-inspired kitchen renovation with custom fluted cabinetry, unlacquered brass fixtures, and a dramatic La Cornue-style range as the centerpiece.',
    image: '/images/cafe-au-luxe-kitchen.jpg',
  },
  {
    index: '12',
    title: 'Heritage Restored on Central',
    subtitle: 'Historic Restoration',
    location: 'Riverside, CA',
    year: '2022',
    category: 'Whole-Home',
    description: 'Preserving the original craftsman bones while upgrading every interior surface — a careful balance of historic charm and modern livability.',
    image: '/images/heritage-restored.jpg',
  },
]

const categories = ['All', 'Whole-Home', 'Kitchen', 'Bathroom', 'Addition', 'ADU']

export default function Work() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useInView()

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section
      id="work"
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <span
            className="font-mono text-xs tracking-widest uppercase block mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            04 / Work
          </span>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-tightest"
            style={{ color: 'var(--color-text)' }}
          >
            Selected
            <br />
            <span className="italic">Projects</span>
          </h2>
        </div>
      </div>

      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2 mb-14 pb-8"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
            style={{
              backgroundColor: active === cat ? 'var(--color-text)' : 'transparent',
              color: active === cat ? 'var(--color-bg)' : 'var(--color-muted)',
              border: '1px solid var(--color-border)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project list */}
      <div ref={ref} className="flex flex-col">
        {filtered.map((project, i) => (
          <ProjectRow
            key={project.index}
            project={project}
            delay={i * 80}
            inView={inView}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectRow({ project, delay, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="grid grid-cols-12 py-8 md:py-10 gap-4 cursor-default transition-all duration-300 relative overflow-hidden"
      style={{
        borderBottom: '1px solid var(--color-border)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image reveal on hover */}
      {project.image && (
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${asset(project.image)})`,
            opacity: hovered ? 0.07 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      )}

      {/* Index */}
      <div className="col-span-1">
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: 'var(--color-muted)', opacity: 0.4 }}
        >
          {project.index}
        </span>
      </div>

      {/* Title + subtitle */}
      <div className="col-span-11 md:col-span-3">
        <h3
          className="font-display text-xl md:text-2xl leading-tight transition-all duration-300"
          style={{ color: 'var(--color-text)', fontStyle: hovered ? 'italic' : 'normal' }}
        >
          {project.title}
        </h3>
        <span
          className="font-mono text-xs tracking-widest uppercase mt-1 block"
          style={{ color: 'var(--color-muted)' }}
        >
          {project.subtitle}
        </span>
      </div>

      {/* Thumbnail — appears on hover */}
      <div className="hidden md:block md:col-span-2 md:col-start-5">
        {project.image && (
          <div
            className="w-full h-16 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${asset(project.image)})`,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          />
        )}
      </div>

      {/* Description */}
      <div className="col-span-11 md:col-span-4 md:col-start-7 pl-0 md:pl-4">
        <p
          className="font-body font-light text-sm leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          {project.description}
        </p>
      </div>

      {/* Meta + arrow */}
      <div className="col-span-1 hidden md:flex flex-col items-end gap-2 justify-between">
        <span
          className="font-mono text-xs"
          style={{ color: 'var(--color-muted)', opacity: 0.5 }}
        >
          {project.year}
        </span>
        <ArrowUpRight
          size={16}
          strokeWidth={1.5}
          style={{
            color: 'var(--color-text)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translate(0,0)' : 'translate(-4px,4px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}
