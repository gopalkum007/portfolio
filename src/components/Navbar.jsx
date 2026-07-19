import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'coding-profiles', label: 'Profiles' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="navbar" style={{ 
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      background: isScrolled ? 'rgba(var(--bg-primary-rgb, 250, 249, 246), 0.8)' : 'transparent'
    }}>
      <div className="container">
        <a onClick={() => handleScrollTo('hero')} className="nav-logo" style={{ cursor: 'pointer' }}>
          <span className="text-gradient">Gopal.K</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links d-none d-md-flex" style={{ display: 'flex' }}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => handleScrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-links open"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => handleScrollTo(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
