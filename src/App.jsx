import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import InteriorDesign from './components/InteriorDesign'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Work />
        <InteriorDesign />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
