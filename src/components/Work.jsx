import { useState, useEffect, useRef } from 'react'
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  LayoutGrid,
  Layers,
  MapPin,
  Calendar,
} from 'lucide-react'
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
    scope: 'Full Interior & Structural Layout Overhaul',
    description:
      'A comprehensive residential transformation — structural reconfiguration, custom cabinetry, bespoke lighting design, and curated material finishes that turned an outdated layout into an open, modern sanctuary.',
    image: '/images/bold-beautiful-kitchen-lg.jpg',
  },
  {
    index: '02',
    title: 'The House of Paonazzo',
    subtitle: 'Luxury Kitchen & Living',
    location: 'Orange County, CA',
    year: '2024',
    category: 'Kitchen',
    scope: 'Bookmatched Marble & Architectural Millwork',
    description:
      'Dramatic Paonazzo marble slabs anchor this culinary showpiece. Features a monolithic waterfall island, integrated luxury appliances, concealed prep pantry, and seamless transitions into the living area.',
    image: '/images/paonazzo-marble-kitchen-lg.jpg',
  },
  {
    index: '03',
    title: 'Montecito-Inspired Kitchen',
    subtitle: 'Kitchen Transformation',
    location: 'Corona Del Mar, CA',
    year: '2023',
    category: 'Kitchen',
    scope: 'Transitional Coastal Renovation',
    description:
      'Warm limewash tones, unlacquered brass hardware, custom rift-sawn white oak millwork, and locally sourced stone replicate the timeless calm of Santa Barbara living with modern engineering.',
    image: '/images/montecito-kitchen-lg.jpg',
  },
  {
    index: '04',
    title: 'A Marble-Clad Spa Bath',
    subtitle: 'Bathroom Renovation',
    location: 'Inland Empire, CA',
    year: '2023',
    category: 'Bathroom',
    scope: 'Primary Suite Sanctuary',
    description:
      'Floor-to-ceiling honed marble, a custom Pinky’s arched steel-and-glass entryway, a sculpted freestanding soaking tub, and a dual-head steam shower deliver hotel-level indulgence at home.',
    image: '/images/marble-spa-bath-lg.jpg',
  },
  {
    index: '05',
    title: 'Azusa Reimagination',
    subtitle: 'Home Addition & Overhaul',
    location: 'Azusa, CA',
    year: '2023',
    category: 'Addition',
    scope: '800 Sq Ft Structural Addition',
    description:
      'A structural extension seamlessly integrated with the existing footprint. Unified previously fragmented living areas, introduced vaulted ceilings with exposed beams, and flooded the interior with natural light.',
    image: '/images/azusa-home-addition-lg.jpg',
  },
  {
    index: '06',
    title: 'From Garage to Guesthouse',
    subtitle: 'ADU Conversion',
    location: 'Riverside, CA',
    year: '2022',
    category: 'ADU',
    scope: 'Complete Permitted Conversion',
    description:
      'An underutilized detached garage transformed into a fully permitted luxury ADU with a private bedroom suite, custom kitchenette, designer bath, and private landscaped courtyard.',
    image: '/images/garage-to-guesthouse-lg.jpg',
  },
  {
    index: '07',
    title: 'The Coastal Escape',
    subtitle: 'Full Interior Renovation',
    location: 'Santa Ana, CA',
    year: '2024',
    category: 'Whole-Home',
    scope: 'Complete Interior Reimagining',
    description:
      'A curated palette of textured plaster, neutral European oak floors, and minimalist stone elements creates an enduring ambiance of coastal serenity across every living zone.',
    image: '/images/coastal-escape-lg.jpg',
  },
  {
    index: '08',
    title: 'Coastal Calm Kitchen',
    subtitle: 'Kitchen Renovation',
    location: 'Santa Ana, CA',
    year: '2023',
    category: 'Kitchen',
    scope: 'Custom Shaker & Honed Surfaces',
    description:
      'Gentle coastal hues paired with handcrafted ceramic tile backsplash, quartz countertops with subtle veining, and an expansive entertainment island designed for family gatherings.',
    image: '/images/coastal-calm-kitchen-lg.jpg',
  },
  {
    index: '09',
    title: 'Little Powder Room, Big Drama',
    subtitle: 'Powder Room Transformation',
    location: 'Inland Empire, CA',
    year: '2023',
    category: 'Bathroom',
    scope: 'High-Impact Statement Space',
    description:
      'Dramatic botanical wall covering, reeded black oak vanity, antique bronze plumbing fixtures, and integrated warm perimeter LED illumination elevate a compact space into an unforgettable design statement.',
    image: '/images/powder-room-lg.jpg',
  },
  {
    index: '10',
    title: 'Riverside Second Story ADU',
    subtitle: 'Detached ADU Build',
    location: 'Riverside, CA',
    year: '2023',
    category: 'ADU',
    scope: 'Ground-Up Multi-Story Living',
    description:
      'A multi-level addition above an existing structure with private exterior staircase, panoramic mountain views, energy-efficient envelope, and modern Scandinavian-inspired finishes.',
    image: '/images/riverside-adu-lg.jpg',
  },
  {
    index: '11',
    title: 'Café au Luxe',
    subtitle: 'French-Transitional Kitchen',
    location: 'Inland Empire, CA',
    year: '2022',
    category: 'Kitchen',
    scope: 'Bespoke Culinary Suite',
    description:
      'French bistro elegance reimagined: fluted cabinet millwork, polished unlacquered brass accents, integrated paneled refrigeration, and a custom statement range hood.',
    image: '/images/cafe-au-luxe-kitchen-lg.jpg',
  },
  {
    index: '12',
    title: 'Heritage Restored on Central',
    subtitle: 'Historic Craftsmanship',
    location: 'Riverside, CA',
    year: '2022',
    category: 'Whole-Home',
    scope: 'Historic Architectural Preservation',
    description:
      'Honoring original historic Craftsman architectural details while completely replacing electrical, plumbing, insulation, and kitchen infrastructure with invisible modern performance.',
    image: '/images/heritage-restored-lg.jpg',
  },
]

const categories = ['All', 'Whole-Home', 'Kitchen', 'Bathroom', 'Addition', 'ADU']

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState('showcase') // 'showcase' | 'grid'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [ref, inView] = useInView()
  const timerRef = useRef(null)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

  // Autoplay slider for showcase view
  useEffect(() => {
    if (!isPlaying || viewMode !== 'showcase' || filtered.length <= 1) return

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filtered.length)
    }, 6000)

    return () => clearInterval(timerRef.current)
  }, [isPlaying, viewMode, filtered.length, currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length)
  }

  const activeProject = filtered[currentIndex] || filtered[0] || projects[0]

  return (
    <section
      id="work"
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
        <div>
          <span
            className="font-mono text-xs tracking-widest uppercase block mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            04 / Selected Works
          </span>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-tightest"
            style={{ color: 'var(--color-text)' }}
          >
            Architecture &
            <br />
            <span className="italic">Interiors</span>
          </h2>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-3">
          <div
            className="inline-flex p-1 rounded-sm"
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: 'rgba(0,0,0,0.02)',
            }}
          >
            <button
              onClick={() => setViewMode('showcase')}
              className="flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs tracking-wider uppercase transition-all duration-200"
              style={{
                backgroundColor:
                  viewMode === 'showcase' ? 'var(--color-text)' : 'transparent',
                color:
                  viewMode === 'showcase' ? 'var(--color-bg)' : 'var(--color-muted)',
              }}
              aria-label="Showcase View"
            >
              <Layers size={13} strokeWidth={1.5} />
              <span>Showcase</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className="flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs tracking-wider uppercase transition-all duration-200"
              style={{
                backgroundColor:
                  viewMode === 'grid' ? 'var(--color-text)' : 'transparent',
                color:
                  viewMode === 'grid' ? 'var(--color-bg)' : 'var(--color-muted)',
              }}
              aria-label="Gallery Grid View"
            >
              <LayoutGrid size={13} strokeWidth={1.5} />
              <span>Grid ({filtered.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-12 pb-6 items-center justify-between"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-mono text-xs tracking-widest uppercase px-3.5 py-2 transition-all duration-300 flex items-center gap-1.5"
                style={{
                  backgroundColor:
                    activeCategory === cat ? 'var(--color-text)' : 'transparent',
                  color:
                    activeCategory === cat ? 'var(--color-bg)' : 'var(--color-muted)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <span>{cat}</span>
                <span className="opacity-50 text-[10px]">({count})</span>
              </button>
            )
          })}
        </div>

        {viewMode === 'showcase' && (
          <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-muted">
            <span>Use arrows or thumbnail rail to explore</span>
          </div>
        )}
      </div>

      {/* VIEW 1: CINEMATIC SHOWCASE (Smooth Crossfade Theater) */}
      {viewMode === 'showcase' && (
        <div
          ref={ref}
          className="flex flex-col gap-6"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Main Expansive Stage */}
          <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[460px] md:min-h-[580px] overflow-hidden"
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: '#0c0c0c',
            }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Stacked Images for Ultra-Smooth Crossfade */}
            {filtered.map((proj, idx) => {
              const isActive = idx === currentIndex
              return (
                <div
                  key={proj.index}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out will-change-transform"
                  style={{
                    backgroundImage: `url(${asset(proj.image)})`,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.06)',
                    pointerEvents: isActive ? 'auto' : 'none',
                    zIndex: isActive ? 1 : 0,
                  }}
                />
              )
            })}

            {/* Subtle Gradient Overlays for High Legibility */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.5) 100%)',
              }}
            />

            {/* Top Stage Bar */}
            <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/20">
                  {activeProject.index} / {String(filtered.length).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs tracking-widest uppercase px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20">
                  {activeProject.category}
                </span>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs tracking-wider opacity-90 hidden sm:flex">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} strokeWidth={1.5} />
                  {activeProject.location}
                </span>
                <span className="opacity-40">•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} strokeWidth={1.5} />
                  {activeProject.year}
                </span>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-mono text-xs tracking-widest uppercase opacity-75 mb-2">
                  {activeProject.subtitle} — {activeProject.scope}
                </p>
                <h3 className="font-display text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[0.95] tracking-tight mb-3">
                  {activeProject.title}
                </h3>
                <p className="font-body font-light text-sm md:text-base leading-relaxed opacity-85 line-clamp-2 md:line-clamp-3 max-w-xl">
                  {activeProject.description}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 transition-all duration-200"
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause size={15} strokeWidth={1.5} />
                  ) : (
                    <Play size={15} strokeWidth={1.5} />
                  )}
                </button>

                <button
                  onClick={handlePrev}
                  className="p-3 bg-black/50 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 transition-all duration-200"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </button>

                <button
                  onClick={handleNext}
                  className="p-3 bg-black/50 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 transition-all duration-200"
                  aria-label="Next project"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Active Slideshow Progress Bar */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 z-30">
                <div
                  key={currentIndex}
                  className="h-full bg-white transition-all"
                  style={{
                    animation: 'progress 6s linear forwards',
                  }}
                />
              </div>
            )}
          </div>

          {/* Interactive Filmstrip Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
            {filtered.map((proj, idx) => {
              const isSelected = idx === currentIndex
              return (
                <button
                  key={proj.index}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setIsPlaying(false)
                  }}
                  className="text-left group relative flex flex-col gap-2 transition-all duration-300"
                  aria-label={`Select ${proj.title}`}
                >
                  <div
                    className="w-full aspect-[16/10] bg-cover bg-center overflow-hidden transition-all duration-500 relative"
                    style={{
                      backgroundImage: `url(${asset(proj.image)})`,
                      border: isSelected
                        ? '2px solid var(--color-text)'
                        : '1px solid var(--color-border)',
                      opacity: isSelected ? 1 : 0.65,
                      transform: isSelected ? 'scale(1)' : 'scale(0.98)',
                    }}
                  >
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        backgroundColor: 'var(--color-text)',
                        opacity: isSelected ? 0 : 0.25,
                      }}
                    />
                    <span
                      className="absolute top-1.5 left-2 font-mono text-[10px] tracking-widest px-1.5 py-0.5 bg-black/60 text-white backdrop-blur-sm"
                    >
                      {proj.index}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span
                      className="font-display text-sm leading-tight truncate transition-all duration-200"
                      style={{
                        color: 'var(--color-text)',
                        fontStyle: isSelected ? 'italic' : 'normal',
                        fontWeight: isSelected ? 600 : 400,
                      }}
                    >
                      {proj.title}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-wider uppercase truncate"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      {proj.category}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: EDITORIAL 2-COLUMN GALLERY GRID (Large Image Cards) */}
      {viewMode === 'grid' && (
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {filtered.map((project) => (
            <GalleryCard key={project.index} project={project} />
          ))}
        </div>
      )}

      {/* Bottom CTA Bar */}
      <div
        className="mt-20 pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-1"
            style={{ color: 'var(--color-muted)' }}
          >
            Have a custom space in mind?
          </p>
          <p
            className="font-display text-xl md:text-2xl"
            style={{ color: 'var(--color-text)' }}
          >
            Every transformation starts with a discovery session.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-7 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 self-start sm:self-auto"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          <span>Discuss Your Project</span>
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
      </div>

      {/* Keyframe animation inline for progress bar */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}

function GalleryCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group flex flex-col gap-5 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large Image Viewport */}
      <div
        className="relative w-full aspect-[16/10] overflow-hidden"
        style={{
          border: '1px solid var(--color-border)',
          backgroundColor: '#121212',
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out will-change-transform"
          style={{
            backgroundImage: `url(${asset(project.image)})`,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* Subtle Dark Gradient at Bottom */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)',
            opacity: hovered ? 0.9 : 0.5,
          }}
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
          <span className="font-mono text-xs tracking-widest px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/20">
            {project.index}
          </span>
          <span className="font-mono text-xs tracking-widest uppercase px-2.5 py-1 bg-white/20 backdrop-blur-md border border-white/20">
            {project.category}
          </span>
        </div>

        {/* Floating Corner Arrow on Hover */}
        <div
          className="absolute bottom-4 right-4 z-10 p-2.5 bg-white text-black rounded-full transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translate(0, 0)' : 'translate(-6px, 6px)',
          }}
        >
          <ArrowUpRight size={15} strokeWidth={2} />
        </div>
      </div>

      {/* Meta + Title + Description */}
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center justify-between font-mono text-xs tracking-widest uppercase"
          style={{ color: 'var(--color-muted)' }}
        >
          <span>
            {project.location} — {project.year}
          </span>
          <span className="opacity-60">{project.subtitle}</span>
        </div>

        <h3
          className="font-display text-2xl md:text-3xl leading-tight transition-all duration-300"
          style={{
            color: 'var(--color-text)',
            fontStyle: hovered ? 'italic' : 'normal',
          }}
        >
          {project.title}
        </h3>

        <p
          className="font-body font-light text-sm leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          {project.description}
        </p>
      </div>
    </article>
  )
}
