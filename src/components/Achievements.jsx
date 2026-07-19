import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'
import { FaJava, FaLaptopCode, FaFolderOpen, FaLightbulb } from 'react-icons/fa'

export default function Achievements() {
  const achievements = [
    {
      icon: <SiLeetcode />,
      title: 'LeetCode Problems Solved',
      desc: 'Actively solving Data Structures and Algorithms problems on LeetCode to improve problem-solving abilities and prepare for technical interviews.',
    },
    {
      icon: <FaJava />,
      title: 'Strong Foundation in OOP',
      desc: 'Good understanding of OOP concepts including classes, objects, inheritance, polymorphism, abstraction, and encapsulation using Java.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack Development',
      desc: 'Building and exploring full stack web applications using modern technologies such as React, Node.js, Express.js, and MongoDB.',
    },
    {
      icon: <FaFolderOpen />,
      title: 'Project Development',
      desc: 'Worked on multiple academic and personal projects to gain practical experience in software development, debugging, version control, and deployment.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Continuous Learning',
      desc: 'Passionate about learning new technologies and continuously improving programming and software engineering skills.',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="achievements">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="hero-subtitle">Milestones</span>
          <h2>Key Achievements</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            A brief summary of my engineering accomplishments, academic focus, and problem-solving benchmarks.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="achievements-grid"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className="achievement-card glass-card"
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{
                  fontSize: '1.75rem',
                  color: 'var(--accent-color)',
                  background: 'rgba(var(--accent-rgb), 0.08)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {ach.icon}
                </div>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '16px', fontWeight: '700' }}>{ach.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '8px' }}>{ach.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
