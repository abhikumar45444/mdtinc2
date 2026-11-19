import { useState } from 'react'
import { X, ArrowUpRight, Phone, Mail } from 'lucide-react'

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'Whole-Home Renovation',
    message: '',
  })
  const [sent, setSent] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Discovery Inquiry: ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.project}\n\nProject Scope & Timeline:\n${form.message}`
    )
    window.location.href = `mailto:themejiateam@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-[4px] p-8 sm:p-12 shadow-2xl border border-soft max-h-[90vh] overflow-y-auto"
        style={{
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:opacity-70 transition-opacity"
          aria-label="Close dialog"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {sent ? (
          <div className="py-12 text-center flex flex-col items-center gap-4">
            <span className="font-display text-4xl sm:text-5xl italic">
              Thank you.
            </span>
            <p className="font-body font-light text-sm sm:text-base text-muted max-w-md">
              Your inquiry has been prepared. Ashlee and Alexis will review your
              scope and contact you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSent(false)
                onClose()
              }}
              className="mt-4 px-6 py-3 font-mono text-xs tracking-widest uppercase bg-onyx text-alabaster dark:bg-alabaster dark:text-onyx rounded-[2px]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-mono text-xs tracking-widest uppercase opacity-40 block mb-2">
                Discovery Session
              </span>
              <h3 className="font-display text-3xl sm:text-4xl tracking-tight">
                Book a Project Consultation
              </h3>
              <p className="font-body font-light text-sm text-muted mt-2">
                Tell us about your upcoming project in Riverside, Inland Empire,
                or Orange County.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs tracking-widest uppercase block mb-1 opacity-60">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-transparent border border-soft rounded-[2px] focus:outline-none focus:border-onyx dark:focus:border-alabaster"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest uppercase block mb-1 opacity-60">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-transparent border border-soft rounded-[2px] focus:outline-none focus:border-onyx dark:focus:border-alabaster"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs tracking-widest uppercase block mb-1 opacity-60">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-transparent border border-soft rounded-[2px] focus:outline-none focus:border-onyx dark:focus:border-alabaster"
                    placeholder="(951) 000-0000"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest uppercase block mb-1 opacity-60">
                    Project Type
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-transparent border border-soft rounded-[2px] focus:outline-none focus:border-onyx dark:focus:border-alabaster"
                  >
                    <option value="Whole-Home Renovation">Whole-Home Renovation</option>
                    <option value="Kitchen & Bath Remodel">Kitchen & Bath Remodel</option>
                    <option value="Structural Addition">Structural Addition</option>
                    <option value="ADU & Guesthouse">ADU & Guesthouse</option>
                    <option value="Interior Design & Styling">Interior Design & Styling</option>
                    <option value="Preconstruction Consultation">Preconstruction Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-xs tracking-widest uppercase block mb-1 opacity-60">
                  Project Scope & Timeline
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your vision, location, target timeframe, and any architect drawings if available..."
                  className="w-full px-3 py-2.5 text-sm bg-transparent border border-soft rounded-[2px] focus:outline-none focus:border-onyx dark:focus:border-alabaster resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 font-mono text-xs text-muted">
                  <a
                    href="tel:+19513739868"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Phone size={12} />
                    <span>(951) 373-9868</span>
                  </a>
                  <span>•</span>
                  <a
                    href="mailto:themejiateam@gmail.com"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Mail size={12} />
                    <span>Email</span>
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 font-mono text-xs tracking-widest uppercase bg-onyx text-alabaster dark:bg-alabaster dark:text-onyx rounded-[2px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <span>Submit Inquiry</span>
                  <ArrowUpRight size={13} strokeWidth={2} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
