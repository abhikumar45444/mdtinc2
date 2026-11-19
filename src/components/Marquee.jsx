import { useEffect, useRef } from 'react'

const items = [
  'Kitchen Renovations',
  'Bathroom Remodels',
  'Whole-Home Transformations',
  'Home Additions',
  'ADUs & Guesthouses',
  'Outdoor Living Spaces',
  'Interior Design',
  'Design Management',
  'Preconstruction Planning',
  'Permit Coordination',
]

export default function Marquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let start = null
    let animId

    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const speed = 40 // px per second
      const offset = (elapsed * speed) / 1000
      const totalWidth = track.scrollWidth / 2
      track.style.transform = `translateX(-${offset % totalWidth}px)`
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden py-5"
      style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              className="font-display italic text-sm md:text-base"
              style={{ color: 'var(--color-text)' }}
            >
              {item}
            </span>
            <span
              className="font-mono text-lg"
              style={{ color: 'var(--color-muted)' }}
            >
              ×
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
