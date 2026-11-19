import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useInView from '../hooks/useInView'

const clientReviews = [
  {
    index: '01',
    quote:
      'We have worked with MDT on our full whole-home remodel, and somehow they delivered beyond what we expected. Having the designers also running the construction meant zero miscommunication, transparent budgeting, and incredible attention to detail.',
    author: 'Sarah & Michael Jensen',
    role: 'Whole-Home Renovation, Riverside',
  },
  {
    index: '02',
    quote:
      'Our kitchen and primary suite transformation was completed on time and exactly within the investment scope Alexis outlined during preconstruction. Ashlee’s finish selections made our house feel like an architectural digest feature.',
    author: 'David R. Kensington',
    role: 'Kitchen & Spa Bath, Corona Del Mar',
  },
  {
    index: '03',
    quote:
      'They took our rough garage space and converted it into a permitted luxury guesthouse that has completely elevated our property value. Visitors are always stunned by the layout efficiency and natural lighting.',
    author: 'Elena & Carlos Vance',
    role: 'ADU Guesthouse Conversion, Inland Empire',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView()

  const next = () => setCurrent((prev) => (prev + 1) % clientReviews.length)
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1))

  const review = clientReviews[current]

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 px-6 md:px-12"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="max-w-[1560px] mx-auto">
        {/* Top Counter Bar */}
        <div className="flex items-center justify-between pb-8 mb-16 border-b border-soft font-mono text-xs tracking-widest uppercase opacity-60">
          <span>03 / Client Trust</span>
          <span>
            {review.index} / {String(clientReviews.length).padStart(2, '0')}
          </span>
        </div>

        {/* Big Testimonial Text */}
        <div
          ref={ref}
          className="max-w-4xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight tracking-tight mb-12">
            &ldquo;{review.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-8 border-t border-soft">
            <div>
              <span className="font-display text-xl sm:text-2xl font-semibold block">
                {review.author}
              </span>
              <span className="font-mono text-xs tracking-wider uppercase opacity-60 block mt-1">
                {review.role}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-soft flex items-center justify-center hover:bg-onyx hover:text-alabaster dark:hover:bg-alabaster dark:hover:text-onyx transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={14} strokeWidth={2} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-soft flex items-center justify-center hover:bg-onyx hover:text-alabaster dark:hover:bg-alabaster dark:hover:text-onyx transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
