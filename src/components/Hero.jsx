import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import profileImg from '../assets/profile.jpg'

const words = ['Software Engineer', 'Full Stack Developer', 'Problem Solver']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typedText, setTypedText] = useState('')

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIdx((prev) => (prev + 1) % words.length)
      }, 100)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setTypedText(words[wordIdx].substring(0, subIndex + (isDeleting ? -1 : 1)))
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, wordIdx])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Dynamic floating particles list - initialized via state to maintain purity
  const [particlesList] = useState(() =>
    Array.from({ length: 15 }).map((_, idx) => ({
      id: idx,
      size: Math.random() * 6 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 12 + 12,
      delay: Math.random() * 4,
    }))
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const handleScrollToContact = () => {
    const contactSec = document.getElementById('contact')
    if (contactSec) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = contactSec.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="hero" className="hero-section">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {particlesList.map((p) => (
          <motion.div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ['0px', '-100px', '0px'],
              x: ['0px', '30px', '0px'],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-grid">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content"
          >
            <motion.span variants={itemVariants} className="hero-subtitle">
              Hello, World! I am
            </motion.span>
            
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}>
              Gopal Kumar
            </motion.h1>

            <motion.h2 
              variants={itemVariants} 
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', margin: '12px 0 20px', fontWeight: '600' }}
            >
              I am a <span className="text-gradient typewriter-cursor">{typedText}</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="hero-description">
            I am passionate about software engineering and enjoy building web applications while learning Data Structures & Algorithms, React, Node.js, and modern development tools. I believe in continuous learning and creating projects that solve real-world problems and become skilled software developers.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-cta" style={{ marginBottom: '32px' }}>
              <button onClick={handleScrollToContact} className="btn btn-primary">
                Get In Touch <FiArrowRight />
              </button>
            </motion.div>

            {/* Social profiles icons shortcut */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual"
          >
            <div className="glow-ring" style={{ width: '380px', height: '380px' }}></div>
            
            {/* Interactive avatar card that tilts with mouse position */}
            <motion.div
              style={{
                rotateX: -mousePosition.y,
                rotateY: mousePosition.x,
                transformStyle: 'preserve-3d',
              }}
              className="hero-avatar-box glass-card"
              style={{
                width: '320px',
                height: '320px',
                padding: '0',
                border: '2px solid transparent',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-secondary) 100%)',
                boxShadow: '0 20px 50px rgba(var(--accent-rgb), 0.25)',
              }}
            >
              {/* Outer glowing border overlay */}
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  boxSizing: 'border-box'
                }}
              >
                <img 
                  src={profileImg} 
                  alt="Gopal Kumar" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
