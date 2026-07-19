import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CodingProfiles from './components/CodingProfiles'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    return 'dark' // Default to dark theme for recruiter portfolios
  })
  
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Scroll Progress Bar calculation
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', handleScrollProgress)
    return () => window.removeEventListener('scroll', handleScrollProgress)
  }, [])

  // Cursor glow coordination
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll Spy to track active sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'skills',
        'projects',
        'coding-profiles',
        'achievements',
        'contact',
      ]
      const scrollPosition = window.scrollY + 180

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-wrapper">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      {/* Mouse cursor glow tracker */}
      <div
        className="cursor-glow"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>

      {/* Background Mesh Gradient */}
      <div className="mesh-bg"></div>

      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
