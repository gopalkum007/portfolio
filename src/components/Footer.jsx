import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Navigation / Profiles shortcuts */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
          <a href="https://github.com/gopalkum007" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gopalkumar007/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/gopalkum007/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LeetCode">
            <SiLeetcode />
          </a>
          <a href="mailto:gopalkum007@gmail.com" className="social-btn" aria-label="Email">
            <FiMail />
          </a>
        </div>

        <p>&copy; {currentYear} Gopal Kumar. All rights reserved.</p>
      </div>

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="back-to-top"
            aria-label="Back to Top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
