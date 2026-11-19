import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statement from './components/Statement'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'
import StudioOrbit from './components/StudioOrbit'
import Testimonials from './components/Testimonials'
import ProjectCta from './components/ProjectCta'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [dark, setDark] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div
      className="min-h-screen selection:bg-onyx selection:text-alabaster dark:selection:bg-alabaster dark:selection:text-onyx"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
    >
      {/* Navigation Header */}
      <Navbar
        onBookCall={() => setContactModalOpen(true)}
        dark={dark}
        setDark={setDark}
      />

      <main>
        {/* Fullscreen Hero Featured Work Slideshow (Frame 001/005) */}
        <Hero />

        {/* Philosophy Statement (Frame 010) */}
        <Statement />

        {/* Featured Projects with 3D Orbit Preview & Hover Pill List (Frame 015) */}
        <FeaturedProjects onSelectProject={() => setContactModalOpen(true)} />

        {/* Services - Where we can add value (Frame 020) */}
        <Services />

        {/* Studio Perspective Orbit Showcase (Frame 045) */}
        <StudioOrbit />

        {/* Testimonials (01 / 03) */}
        <Testimonials />

        {/* "Do you have a project in mind?" CTA (Frame 025) */}
        <ProjectCta onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Macro Typography Footer (Frame 030/050) */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Interactive Discovery Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}
