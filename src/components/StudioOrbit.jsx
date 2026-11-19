import { useState, useRef } from 'react'
import { Sparkles, Layers } from 'lucide-react'
import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

const studioCards = [
  {
    id: 'riverside',
    label: 'RIVERSIDE RESIDENCE',
    sub: 'Full Interior Remodel',
    image: '/images/bold-beautiful-kitchen-lg.jpg',
    // In stacked deck
    stacked: { x: 0, y: 0, rot: -2, scale: 1, z: 30 },
    // In scattered state
    scattered: { x: 0, y: 20, rot: 0, scale: 1.15, z: 35 },
  },
  {
    id: 'procurement',
    label: 'MATERIAL PROCUREMENT',
    sub: 'Custom Millwork & Hardware',
    image: '/images/design-services.jpg',
    stacked: { x: -35, y: 35, rot: -9, scale: 0.98, z: 25 },
    scattered: { x: -340, y: 150, rot: -8, scale: 1.04, z: 25 },
  },
  {
    id: 'corona',
    label: 'CORONA DEL MAR',
    sub: 'Santa Barbara Inspired',
    image: '/images/montecito-kitchen-lg.jpg',
    stacked: { x: -45, y: -30, rot: -6, scale: 0.96, z: 20 },
    scattered: { x: -330, y: -160, rot: -12, scale: 1.04, z: 20 },
  },
  {
    id: 'paonazzo',
    label: 'PAONAZZO MARBLE',
    sub: 'Monolithic Waterfall Island',
    image: '/images/paonazzo-marble-kitchen-lg.jpg',
    stacked: { x: 28, y: -38, rot: 7, scale: 0.95, z: 15 },
    scattered: { x: 330, y: -160, rot: 11, scale: 1.04, z: 22 },
  },
  {
    id: 'spa-bath',
    label: 'PRIMARY SPA BATH',
    sub: 'Pinky’s Arched Steel Door',
    image: '/images/marble-spa-bath-lg.jpg',
    stacked: { x: 45, y: 22, rot: 11, scale: 0.97, z: 18 },
    scattered: { x: 340, y: 160, rot: 9, scale: 1.04, z: 24 },
  },
  {
    id: 'blueprint',
    label: 'ARCHITECTURAL SPEC',
    sub: 'CSLB #1054266 Plan Check',
    isBlueprint: true,
    image: '/images/coastal-escape-lg.jpg',
    stacked: { x: 38, y: -10, rot: 14, scale: 0.94, z: 12 },
    scattered: { x: 15, y: -210, rot: -3, scale: 0.98, z: 18 },
  },
]

export default function StudioOrbit() {
  const [isScatter, setIsScatter] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const [ref, inView] = useInView()

  // Subtle interactive parallax based on mouse position
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setMousePos({ x, y })
  }

  return (
    <section
      id="about"
      className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden select-none"
      style={{
        backgroundColor: '#101010',
        color: '#EAEAEA',
      }}
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Top Metadata Row (Matching Frame 045) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs tracking-widest uppercase opacity-60 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="block opacity-40 mb-1">STUDIO</span>
            <span>MDT DESIGN & BUILD</span>
          </div>
          <div>
            <span className="block opacity-40 mb-1">BASED IN</span>
            <span>RIVERSIDE, CALIFORNIA</span>
          </div>
          <div>
            <span className="block opacity-40 mb-1">DISCIPLINE</span>
            <span>GENERAL CONTRACTING & DESIGN</span>
          </div>
          <div>
            <span className="block opacity-40 mb-1">ESTABLISHED</span>
            <span>2018 — CSLB #1054266</span>
          </div>
        </div>

        {/* Section Headline & Interactive Instruction Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Studio Artifacts & Archives
            </h2>
            <p className="font-mono text-xs tracking-widest uppercase opacity-40 mt-1">
              Field photos • Material samples • Structural blueprints
            </p>
          </div>

          {/* Interactive Trigger Indicator */}
          <button
            onClick={() => setIsScatter(!isScatter)}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-mono text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black cursor-pointer group"
          >
            {isScatter ? (
              <>
                <Layers size={13} strokeWidth={2} />
                <span>Click / Hover Out to Stack</span>
              </>
            ) : (
              <>
                <Sparkles size={13} strokeWidth={2} className="animate-spin text-amber-400" />
                <span>Hover over photo deck to scatter</span>
              </>
            )}
          </button>
        </div>

        {/* The Interactive Scatter / Stack Canvas */}
        <div
          ref={ref}
          className="relative w-full min-h-[520px] sm:min-h-[620px] md:min-h-[720px] flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsScatter(true)}
          onMouseLeave={() => {
            setIsScatter(false)
            setActiveCard(null)
          }}
          onMouseMove={handleMouseMove}
          style={{
            perspective: '1400px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-700"
            style={{
              background:
                'radial-gradient(circle, rgba(234,234,234,0.18) 0%, transparent 70%)',
              filter: 'blur(70px)',
              opacity: isScatter ? 0.35 : 0.15,
              transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
            }}
          />

          {/* Stack & Scatter Stage Container */}
          <div
            ref={containerRef}
            className="relative w-full max-w-5xl h-[520px] flex items-center justify-center"
            style={{
              transform: isScatter
                ? `rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 5}deg)`
                : 'none',
              transition: 'transform 0.4s ease-out',
            }}
          >
            {studioCards.map((card) => {
              const isCardHovered = activeCard === card.id
              const state = isScatter ? card.scattered : card.stacked

              // Responsive scaling for smaller viewports so cards don't overflow
              const isMobile =
                typeof window !== 'undefined' && window.innerWidth < 768
              const scaleFactor = isMobile ? 0.45 : 1

              const posX = state.x * scaleFactor + (isScatter ? mousePos.x * 8 : 0)
              const posY = state.y * scaleFactor + (isScatter ? mousePos.y * 8 : 0)
              const rot = isCardHovered ? 0 : state.rot
              const scale = isCardHovered ? state.scale * 1.08 : state.scale
              const zIndex = isCardHovered ? 50 : state.z

              return (
                <div
                  key={card.id}
                  onMouseEnter={(e) => {
                    e.stopPropagation()
                    setActiveCard(card.id)
                  }}
                  onMouseLeave={() => setActiveCard(null)}
                  className="absolute w-[220px] sm:w-[270px] md:w-[330px] aspect-[4/3] rounded-[4px] overflow-hidden shadow-2xl border border-white/20 will-change-transform cursor-pointer"
                  style={{
                    backgroundColor: card.isBlueprint ? '#181b22' : '#141414',
                    transform: `translate3d(${posX}px, ${posY}px, 0px) rotate(${rot}deg) scale(${scale})`,
                    zIndex,
                    boxShadow: isCardHovered
                      ? '0 30px 60px -12px rgba(0, 0, 0, 0.95), 0 0 25px rgba(255, 255, 255, 0.2)'
                      : isScatter
                      ? '0 20px 45px -10px rgba(0, 0, 0, 0.8)'
                      : '0 12px 30px -8px rgba(0, 0, 0, 0.7)',
                    transition:
                      'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.85s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                  }}
                >
                  {/* Photo or Blueprint Artwork */}
                  {card.isBlueprint ? (
                    <div className="w-full h-full p-4 font-mono text-[9px] leading-[14px] text-blue-200/70 bg-[#0f141c] flex flex-col justify-between">
                      <div className="border-b border-blue-400/20 pb-1.5 flex justify-between uppercase">
                        <span>CSLB #1054266</span>
                        <span>MDT BUILD</span>
                      </div>
                      <pre className="text-[8px] leading-[11px] text-blue-300/60 my-auto">
{`┌─────────────────────┐
│ MASTER SUITE 840 SQ │
│ [PAONAZZO WATERFALL]│
│ • RIVERSIDE, CA     │
└─────────────────────┘`}
                      </pre>
                      <div className="border-t border-blue-400/20 pt-1.5 flex justify-between text-[8px] uppercase">
                        <span>STRUCTURAL SPEC</span>
                        <span>SHEET A-102</span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${asset(card.image)})`,
                        transform: isCardHovered ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                  )}

                  {/* Dark Vignette Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)',
                    }}
                  />

                  {/* Minimalist Bottom Caption Bar (Matching User's Reference Photo) */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-[2px] border border-white/10 flex items-center justify-between font-mono text-[10px] tracking-wider uppercase text-white/95">
                    <span className="font-semibold truncate">{card.label}</span>
                    <span className="opacity-50 text-[9px] hidden sm:inline truncate ml-2">
                      {card.sub}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Studio Mission */}
        <div className="max-w-3xl mx-auto text-center mt-12 pt-10 border-t border-white/10">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-relaxed italic text-white/90">
            &ldquo;We don’t just build houses — we curate living environments designed
            to endure for generations.&rdquo;
          </p>
          <span className="font-mono text-xs tracking-widest uppercase block mt-4 opacity-50">
            Ashlee & Alexis Mejia — Co-Founders • Riverside, CA
          </span>
        </div>
      </div>
    </section>
  )
}
