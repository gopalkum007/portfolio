import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'

export default function CodingProfiles() {
  const profiles = [
    {
      name: 'GitHub',
      username: 'gopalkm007',
      desc: 'Active repositories, open-source pull requests, and software utilities built with Java & React.',
      url: 'https://github.com/gopalkum007',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      username: 'gopalkumar',
      desc: 'Professional connections, industry summaries, software updates, and career experience milestones.',
      url: 'https://www.linkedin.com/in/gopalkumar007/',
      icon: <FaLinkedin />,
    },
    {
      name: 'LeetCode',
      username: 'gopalku007',
      desc: '300+ solved algorithmic problems covering Arrays, HashMaps, Trees, Graphs, and Dynamic Programming.',
      url: 'https://leetcode.com/u/gopalkum007/',
      icon: <SiLeetcode />,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="coding-profiles" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="hero-subtitle">Coding Metrics</span>
          <h2>Professional Profiles</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Check out my active accounts across coding challenges, competitive platforms, and professional software spaces.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="coding-profiles-grid"
        >
          {profiles.map((p, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="coding-profile-card glass-card"
            >
              <div className="coding-profile-icon">{p.icon}</div>
              <h3>{p.name}</h3>
              <span className="coding-profile-username">{p.username}</span>
              <p className="coding-profile-desc">{p.desc}</p>
              
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', padding: '8px 16px', fontSize: '0.9rem', marginTop: '8px' }}
              >
                Visit Profile <FiArrowRight style={{ marginLeft: '4px' }} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
