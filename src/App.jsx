import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import BackgroundMesh from './components/BackgroundMesh'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="scroll-progress" style={{ scaleX, transformOrigin: '0% 50%' }} />
}

function ScrollTop() {
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const fn = () => setVis(window.scrollY > 600)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center border transition-all duration-300 ${vis ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      style={{
        borderColor: 'var(--floating-border)',
        background: 'var(--floating-bg)',
        borderRadius: '999px',
        backdropFilter: 'blur(14px)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 10V2M2 6l4-4 4 4" stroke="var(--grey-1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh', position: 'relative', isolation: 'isolate' }}>
      <ScrollProgress />
      <BackgroundMesh />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Contact />
      </main>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
      <ScrollTop />
    </div>
  )
}
