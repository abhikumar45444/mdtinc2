import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { asset } from '../utils/asset'

const heroSlides = [
  {
    index: '01',
    title: 'THE BOLD AND BEAUTIFUL',
    category: 'Whole Home Renovation',
    year: '2024',
    location: 'Riverside, CA',
    bgImage: '/images/bold-beautiful-kitchen-lg.jpg',
    cardImage: '/images/bold-beautiful-kitchen-lg.jpg',
    tagline: 'Modern residential reconfiguration & bespoke interior finishes',
  },
  {
    index: '02',
    title: 'THE HOUSE OF PAONAZZO',
    category: 'Luxury Kitchen & Living',
    year: '2024',
    location: 'Orange County, CA',
    bgImage: '/images/paonazzo-marble-kitchen-lg.jpg',
    cardImage: '/images/paonazzo-marble-kitchen-lg.jpg',
    tagline: 'Monolithic Italian marble island & architectural millwork',
  },
  {
    index: '03',
    title: 'MONTECITO KITCHEN',
    category: 'Transitional Renovation',
    year: '2023',
    location: 'Corona Del Mar, CA',
    bgImage: '/images/montecito-kitchen-lg.jpg',
    cardImage: '/images/montecito-kitchen-lg.jpg',
    tagline: 'Limewash walls, unlacquered brass, & white oak craftsmanship',
  },
  {
    index: '04',
    title: 'MARBLE-CLAD SPA BATH',
    category: 'Primary Suite Sanctuary',
    year: '2023',
    location: 'Inland Empire, CA',
    bgImage: '/images/marble-spa-bath-lg.jpg',
    cardImage: '/images/marble-spa-bath-lg.jpg',
    tagline: 'Pinky’s arched steel door with floor-to-ceiling honed marble',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timerRef.current)
  }, [isPaused, current])

  const slide = heroSlides[current]

  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))

  return (
    <section
      className="relative w-full h-screen min-h-[680px] max-h-[1080px] overflow-hidden flex flex-col justify-between"
      style={{ backgroundColor: '#0e0e0e', color: '#EAEAEA' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Fullscreen Visuals with Crossfade */}
      {heroSlides.map((item, idx) => (
        <div
          key={item.title}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out will-change-transform"
          style={{
            backgroundImage: `url(${asset(item.bgImage)})`,
            opacity: idx === current ? 0.35 : 0,
            transform: idx === current ? 'scale(1)' : 'scale(1.08)',
            filter: 'blur(3px)',
            transitionProperty: 'opacity, transform',
          }}
        />
      ))}

      {/* Dark Ambient Gradient Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(14,14,14,0.3) 0%, rgba(14,14,14,0.85) 100%)',
        }}
      />

      {/* Center Floating Poster Card (Komma Komma exact aesthetic) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-6">
        <div
          className="relative w-[85%] max-w-[340px] sm:max-w-[420px] md:max-w-[480px] aspect-[3/4] sm:aspect-[4/5] rounded-[4px] overflow-hidden shadow-2xl transition-all duration-700 ease-out border border-white/15"
          style={{
            backgroundColor: '#161616',
          }}
        >
          {heroSlides.map((item, idx) => (
            <div
              key={item.title}
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
              style={{
                backgroundImage: `url(${asset(item.cardImage)})`,
                opacity: idx === current ? 1 : 0,
                transform: idx === current ? 'scale(1)' : 'scale(1.05)',
              }}
            />
          ))}

          {/* Minimalist Card Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/90 font-mono text-[11px] tracking-widest uppercase z-10 pointer-events-none">
            <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md rounded-[2px] border border-white/10">
              {slide.category}
            </span>
            <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md rounded-[2px] border border-white/10">
              {slide.location}
            </span>
          </div>
        </div>
      </div>

      {/* Middle Horizontal Floating Metadata Bar (Matching Frame 001/005) */}
      <div className="relative z-20 my-auto w-full px-6 md:px-12 pointer-events-auto">
        <div
          className="max-w-[1560px] mx-auto py-4 px-6 md:px-10 rounded-[4px] flex flex-wrap items-center justify-between gap-4 font-mono text-xs md:text-sm tracking-wider uppercase backdrop-blur-md border border-white/15 shadow-lg"
          style={{
            backgroundColor: 'rgba(18, 18, 18, 0.7)',
            color: '#EAEAEA',
          }}
        >
          {/* Left Label */}
          <span className="opacity-60 text-xs">FEATURED PROJECT</span>

          {/* Center Project Name */}
          <a
            href="#work"
            className="font-medium tracking-widest text-sm md:text-base hover:opacity-75 transition-opacity"
          >
            {slide.title}
          </a>

          {/* Year */}
          <span className="opacity-60 text-xs hidden sm:inline">{slide.year}</span>

          {/* View Project Action */}
          <a
            href="#work"
            className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase hover:underline"
          >
            <span>VIEW PROJECT</span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Bottom Section: Studio Statement + Slideshow Progress Dots */}
      <div className="relative z-20 pb-8 md:pb-12 px-6 md:px-12 w-full">
        <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Bottom Left Studio Intro */}
          <p className="font-body font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed text-white/80">
            MDT Design & Build is a family-operated, sister-led general
            contracting and design firm bringing vision, investment, and execution
            together from day one.
          </p>

          {/* Bottom Right Controls & Progress Dots */}
          <div className="flex items-center gap-5 self-start md:self-auto">
            {/* Arrow Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={13} strokeWidth={2} />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight size={13} strokeWidth={2} />
              </button>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center gap-2.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? '24px' : '6px',
                    height: '6px',
                    backgroundColor: i === current ? '#EAEAEA' : 'rgba(255,255,255,0.3)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
