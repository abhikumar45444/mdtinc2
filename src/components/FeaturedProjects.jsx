import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

const featuredList = [
  {
    index: '01',
    id: 'bold-and-beautiful',
    title: 'The Bold and Beautiful',
    category: 'Whole Home Renovation',
    year: '2024',
    location: 'Riverside, CA',
    image: '/images/bold-beautiful-kitchen-lg.jpg',
    description:
      'A full-scope residential transformation — from structural layout changes to bespoke kitchen cabinetry and curated European finishes — reimagining an Inland Empire home into a cohesive living sanctuary.',
  },
  {
    index: '02',
    id: 'house-of-paonazzo',
    title: 'The House of Paonazzo',
    category: 'Kitchen & Living',
    year: '2024',
    location: 'Orange County, CA',
    image: '/images/paonazzo-marble-kitchen-lg.jpg',
    description:
      'Dramatic bookmatched Paonazzo marble slabs anchor this culinary showpiece. Features a monolithic waterfall island, integrated appliances, concealed prep pantry, and seamless transitions into the living area.',
  },
  {
    index: '03',
    id: 'montecito-kitchen',
    title: 'Montecito-Inspired Kitchen',
    category: 'Transitional Renovation',
    year: '2023',
    location: 'Corona Del Mar, CA',
    image: '/images/montecito-kitchen-lg.jpg',
    description:
      'Warm whites, limewash plaster, unlacquered brass, and locally sourced stone replicate the timeless calm of Santa Barbara enclave living with crisp architectural precision.',
  },
  {
    index: '04',
    id: 'marble-spa-bath',
    title: 'A Marble-Clad Spa Bath',
    category: 'Bathroom Renovation',
    year: '2023',
    location: 'Inland Empire, CA',
    image: '/images/marble-spa-bath-lg.jpg',
    description:
      'Floor-to-ceiling honed marble, a custom Pinky’s arched steel entryway, sculpted freestanding soaking tub, and a dual-head steam shower deliver five-star hotel indulgence at home.',
  },
  {
    index: '05',
    id: 'azusa-reimagination',
    title: 'Azusa Reimagination',
    category: 'Home Addition',
    year: '2023',
    location: 'Azusa, CA',
    image: '/images/azusa-home-addition-lg.jpg',
    description:
      'An 800 sq ft structural home addition and comprehensive interior redesign that unified previously disconnected living spaces while honoring the home’s original character.',
  },
  {
    index: '06',
    id: 'garage-to-guesthouse',
    title: 'From Garage to Guesthouse',
    category: 'ADU Conversion',
    year: '2022',
    location: 'Riverside, CA',
    image: '/images/garage-to-guesthouse-lg.jpg',
    description:
      'A single-car garage reimagined into a fully permitted luxury ADU with private bedroom suite, full bath, custom kitchenette, and private landscaped courtyard.',
  },
  {
    index: '07',
    id: 'coastal-escape',
    title: 'The Coastal Escape',
    category: 'Whole-Home',
    year: '2024',
    location: 'Santa Ana, CA',
    image: '/images/coastal-escape-lg.jpg',
    description:
      'A serene coastal palette woven through every room — white oak cabinetry, lime plaster walls, and natural stone bring calm and character to an expansive home transformation.',
  },
]

export default function FeaturedProjects({ onSelectProject }) {
  const [hoveredIdx, setHoveredIdx] = useState(0)
  const [ref, inView] = useInView()

  const activeProject = featuredList[hoveredIdx] || featuredList[0]

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase block mb-3 opacity-50">
              02 / Portfolio
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] tracking-tightest leading-[0.95]">
              Featured Projects
            </h2>
          </div>
          <p className="font-mono text-xs tracking-widest uppercase opacity-50 max-w-xs">
            Hover to explore project previews • Inland Empire & Orange County
          </p>
        </div>

        {/* Orbit Split Layout (Matching Frame 015) */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Left Column: 3D Perspective Floating Preview Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
            {/* Background Orbiting Cards */}
            <div
              className="absolute w-[70%] aspect-[4/3] rounded-[4px] bg-cover bg-center shadow-xl opacity-30 transition-all duration-700 pointer-events-none"
              style={{
                backgroundImage: `url(${asset(
                  featuredList[(hoveredIdx + 1) % featuredList.length].image
                )})`,
                transform: 'rotate(-10deg) translate(-40px, -30px) scale(0.85)',
                filter: 'grayscale(40%)',
              }}
            />
            <div
              className="absolute w-[70%] aspect-[4/3] rounded-[4px] bg-cover bg-center shadow-xl opacity-20 transition-all duration-700 pointer-events-none"
              style={{
                backgroundImage: `url(${asset(
                  featuredList[(hoveredIdx + 2) % featuredList.length].image
                )})`,
                transform: 'rotate(8deg) translate(50px, 40px) scale(0.8)',
                filter: 'grayscale(50%)',
              }}
            />

            {/* Main Active Floating Card */}
            <div
              className="relative w-[85%] sm:w-[80%] aspect-[16/10] sm:aspect-[4/3] rounded-[4px] overflow-hidden shadow-2xl transition-all duration-700 ease-out z-10 border border-white/20"
              style={{
                transform: 'rotate(-2deg) scale(1)',
                backgroundColor: '#141414',
              }}
            >
              {featuredList.map((item, idx) => (
                <div
                  key={item.id}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                  style={{
                    backgroundImage: `url(${asset(item.image)})`,
                    opacity: idx === hoveredIdx ? 1 : 0,
                    transform: idx === hoveredIdx ? 'scale(1)' : 'scale(1.08)',
                  }}
                />
              ))}

              {/* Minimal floating card badge */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white font-mono text-[11px] tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-2 rounded-[2px] border border-white/10">
                <span>{activeProject.location}</span>
                <span>{activeProject.year}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive List with Pill Hover Highlight (Frame 015) */}
          <div className="lg:col-span-6 flex flex-col">
            {featuredList.map((project, idx) => {
              const isActive = idx === hoveredIdx
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={onSelectProject}
                  className="flex flex-col py-3 border-b border-soft transition-all duration-300 cursor-pointer"
                >
                  {/* Row Trigger */}
                  <div
                    className="flex items-center justify-between px-4 py-3 rounded-md transition-all duration-300"
                    style={{
                      backgroundColor: isActive
                        ? 'var(--color-text)'
                        : 'transparent',
                      color: isActive
                        ? 'var(--color-bg)'
                        : 'var(--color-text)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs opacity-50">
                        {project.index}
                      </span>
                      <span
                        className="font-display text-xl sm:text-2xl md:text-3xl leading-tight"
                        style={{
                          fontWeight: isActive ? 600 : 400,
                          fontStyle: isActive ? 'italic' : 'normal',
                        }}
                      >
                        {project.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[11px] tracking-wider uppercase opacity-60 hidden sm:inline"
                      >
                        {project.category}
                      </span>
                      <ArrowRight
                        size={15}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 ${
                          isActive
                            ? 'translate-x-1 opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Smooth Accordion Description (Only under active row) */}
                  {isActive && (
                    <div className="px-5 pt-3 pb-2 transition-all duration-300">
                      <p className="font-body font-light text-xs sm:text-sm leading-relaxed text-muted max-w-xl">
                        {project.description}
                      </p>
                      <div className="mt-3 flex items-center gap-4 font-mono text-[11px] tracking-widest uppercase">
                        <span className="text-muted">
                          {project.location} • {project.year}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
