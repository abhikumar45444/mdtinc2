import { useState } from 'react'
import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

const servicesData = [
  {
    index: '(01)',
    title: 'Whole-Home Renovation',
    summary:
      'We strip outdated floorplans down to the studs and rebuild them into cohesive, high-performance modern environments. Electrical, plumbing, structural engineering, and luxury finishes executed under one roof.',
    image: '/images/bold-beautiful-kitchen-lg.jpg',
  },
  {
    index: '(02)',
    title: 'Kitchens & Bathrooms',
    summary:
      'Custom millwork, monolithic stone slabs, spa steam showers, and chef-level appliance integrations. We balance everyday functional utility with gallery-grade architectural beauty.',
    image: '/images/paonazzo-marble-kitchen-lg.jpg',
  },
  {
    index: '(03)',
    title: 'Structural Additions',
    summary:
      'Expanding square footage thoughtfully. Whether a master suite wing, a second-story extension, or vaulted living expansion, we integrate new construction invisibly into existing architecture.',
    image: '/images/azusa-home-addition-lg.jpg',
  },
  {
    index: '(04)',
    title: 'ADUs & Guesthouses',
    summary:
      'From garage conversions to detached two-story guesthouses. We manage the full lifecycle — zoning checks, architectural blueprints, city submittals, and turnkey construction.',
    image: '/images/garage-to-guesthouse-lg.jpg',
  },
  {
    index: '(05)',
    title: 'Interior Design & Styling',
    summary:
      'Available standalone or bundled with our builds. Virtual Design Direction packages start at $3,500/room, covering curated finish schedules, mood boards, trade procurement, and styling.',
    image: '/images/design-services.jpg',
  },
  {
    index: '(06)',
    title: 'Preconstruction & Permitting',
    summary:
      'Trade walkthroughs, line-item budgeting, value engineering, and city plan check submittals. Eliminating surprises before a single hammer is swung.',
    image: '/images/coastal-escape-lg.jpg',
  },
]

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section
      id="services"
      className="py-24 md:py-36 px-6 md:px-12"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Section Header with Accent Dot (Matching Frame 020) */}
        <div className="flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase mb-16 opacity-75">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Where we can add value</span>
        </div>

        {/* 2-Column Split Layout */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Left Column: Numbered Typography List (Frame 020) */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {servicesData.map((svc, idx) => {
              const isActive = idx === activeIdx
              return (
                <div
                  key={svc.title}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className="group cursor-pointer pb-6 border-b border-soft transition-all duration-300"
                >
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-mono text-xs md:text-sm tracking-wider opacity-40 shrink-0">
                      {svc.index}
                    </span>
                    <h3
                      className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'italic text-onyx dark:text-alabaster font-semibold'
                          : 'opacity-50 hover:opacity-85 font-normal'
                      }`}
                    >
                      {svc.title}
                    </h3>
                  </div>

                  {/* Smooth Accordion Body */}
                  {isActive && (
                    <div className="mt-4 pl-8 md:pl-12 transition-all duration-300">
                      <p className="font-body font-light text-sm md:text-base leading-relaxed text-muted max-w-xl">
                        {svc.summary}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Tall Editorial Sticky Image (Frame 020) */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div
              className="relative w-full aspect-[3/4] rounded-[3px] overflow-hidden shadow-xl border border-soft"
              style={{ backgroundColor: '#141414' }}
            >
              {servicesData.map((svc, idx) => (
                <div
                  key={svc.title}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                  style={{
                    backgroundImage: `url(${asset(svc.image)})`,
                    opacity: idx === activeIdx ? 1 : 0,
                    transform: idx === activeIdx ? 'scale(1)' : 'scale(1.06)',
                  }}
                />
              ))}

              {/* Bottom Editorial Badge */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-white font-mono text-xs tracking-widest uppercase bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-[2px] border border-white/10">
                <span>{servicesData[activeIdx].title}</span>
                <span>MDT Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
