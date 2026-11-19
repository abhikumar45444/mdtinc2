import { useState } from 'react'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import useInView from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    // Open email client as fallback
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.project}\n\n${form.message}`
    )
    window.location.href = `mailto:themejiateam@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        {/* Left col */}
        <div className="md:col-span-5">
          <span
            className="font-mono text-xs tracking-widest uppercase block mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            06 / Contact
          </span>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-tightest mb-10"
            style={{ color: 'var(--color-text)' }}
          >
            Let's Build
            <br />
            <span className="italic">Something</span>
            <br />
            Together.
          </h2>
          <p
            className="font-body font-light text-base leading-relaxed mb-14"
            style={{ color: 'var(--color-muted)' }}
          >
            Ready to start a project? Book a complimentary discovery call to discuss scope,
            timeline, and your anticipated investment. No pressure — just clarity.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: Phone, label: '(951) 373-9868', href: 'tel:+19513739868' },
              { icon: Mail, label: 'themejiateam@gmail.com', href: 'mailto:themejiateam@gmail.com' },
              { icon: MapPin, label: '6744 Magnolia Ave, Riverside, CA 92506', href: 'https://maps.google.com' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 group transition-opacity duration-200 hover:opacity-70"
                style={{ color: 'var(--color-text)', textDecoration: 'none' }}
              >
                <Icon size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" style={{ opacity: 0.5 }} />
                <span className="font-body font-light text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right col: form */}
        <div
          ref={ref}
          className="md:col-span-7"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {sent ? (
            <div className="flex flex-col items-start gap-6 py-16">
              <span
                className="font-display text-5xl italic"
                style={{ color: 'var(--color-text)' }}
              >
                Thank you.
              </span>
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                Your message has been prepared. We'll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="font-mono text-xs tracking-widest uppercase link-underline"
                style={{ color: 'var(--color-muted)' }}
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  className="font-mono text-xs tracking-widest uppercase block mb-2"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Project Type
                </label>
                <select
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  className="w-full px-0 py-3 font-body font-light text-sm bg-transparent appearance-none cursor-pointer"
                  style={{
                    color: form.project ? 'var(--color-text)' : 'var(--color-muted)',
                    borderBottom: '1px solid var(--color-border)',
                    outline: 'none',
                  }}
                >
                  <option value="">Select a service...</option>
                  <option value="Kitchen Remodel">Kitchen Remodel</option>
                  <option value="Bathroom Remodel">Bathroom Remodel</option>
                  <option value="Whole-Home Renovation">Whole-Home Renovation</option>
                  <option value="Home Addition">Home Addition</option>
                  <option value="ADU / Guesthouse">ADU / Guesthouse</option>
                  <option value="Outdoor Living">Outdoor Living</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="font-mono text-xs tracking-widest uppercase block mb-2"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Scope, timeline, and anything else you'd like us to know..."
                  className="w-full px-0 py-3 font-body font-light text-sm bg-transparent resize-none"
                  style={{
                    color: 'var(--color-text)',
                    borderBottom: '1px solid var(--color-border)',
                    outline: 'none',
                    '::placeholder': { color: 'var(--color-muted)' },
                  }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4">
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-muted)', opacity: 0.6 }}
                >
                  Complimentary discovery calls available
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 shrink-0"
                  style={{
                    backgroundColor: 'var(--color-text)',
                    color: 'var(--color-bg)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  Send Message
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label
        className="font-mono text-xs tracking-widest uppercase block mb-2"
        style={{ color: 'var(--color-muted)' }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-0 py-3 font-body font-light text-sm bg-transparent"
        style={{
          color: 'var(--color-text)',
          borderBottom: '1px solid var(--color-border)',
          outline: 'none',
        }}
        onFocus={e => { e.target.style.borderBottomColor = 'var(--color-text)' }}
        onBlur={e => { e.target.style.borderBottomColor = 'var(--color-border)' }}
      />
    </div>
  )
}
