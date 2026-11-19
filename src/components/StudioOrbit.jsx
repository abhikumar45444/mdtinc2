import useInView from '../hooks/useInView'
import { asset } from '../utils/asset'

const studioShots = [
  {
    image: '/images/montecito-kitchen-lg.jpg',
    label: 'Corona Del Mar',
    rotate: '-8deg',
    translate: '-40px, -20px',
  },
  {
    image: '/images/paonazzo-marble-kitchen-lg.jpg',
    label: 'Paonazzo Marble',
    rotate: '6deg',
    translate: '30px, -50px',
  },
  {
    image: '/images/bold-beautiful-kitchen-lg.jpg',
    label: 'Riverside Residence',
    rotate: '-3deg',
    translate: '0px, 0px',
  },
  {
    image: '/images/marble-spa-bath-lg.jpg',
    label: 'Primary Spa Bath',
    rotate: '10deg',
    translate: '60px, 30px',
  },
  {
    image: '/images/design-services.jpg',
    label: 'Material Procurement',
    rotate: '-12deg',
    translate: '-60px, 40px',
  },
]

export default function StudioOrbit() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundColor: '#101010',
        color: '#EAEAEA',
      }}
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Top Metadata Row (Matching Frame 045) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs tracking-widest uppercase opacity-60 mb-20 pb-8 border-b border-white/10">
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

        {/* Orbit Perspective Showcase Canvas */}
        <div
          ref={ref}
          className="relative w-full min-h-[460px] sm:min-h-[560px] md:min-h-[640px] flex items-center justify-center"
          style={{
            perspective: '1200px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            className="absolute w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, #EAEAEA 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Orbiting Photo Cards */}
          <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
            {studioShots.map((shot, idx) => (
              <div
                key={shot.label}
                className="absolute w-[200px] sm:w-[260px] md:w-[320px] aspect-[4/3] rounded-[4px] overflow-hidden shadow-2xl transition-all duration-700 ease-out cursor-pointer hover:z-30 hover:scale-110 border border-white/15"
                style={{
                  transform: `rotate(${shot.rotate}) translate(${shot.translate})`,
                  zIndex: idx === 2 ? 20 : 10 + idx,
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${asset(shot.image)})` }}
                />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-[2px] font-mono text-[10px] tracking-wider uppercase text-white/90">
                  {shot.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Studio Mission */}
        <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-white/10">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl leading-relaxed italic text-white/90">
            &ldquo;We don’t just build houses — we curate living environments designed
            to endure for generations.&rdquo;
          </p>
          <span className="font-mono text-xs tracking-widest uppercase block mt-4 opacity-50">
            Ashlee & Alexis Mejia — Co-Founders
          </span>
        </div>
      </div>
    </section>
  )
}
