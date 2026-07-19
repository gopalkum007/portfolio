import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

export default function Projects() {

  const projectsData = [
    {
      id: 1,
      title: 'Civix',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Mapbox API'],
      desc: 'A modern, interactive citizen engagement portal enabling public grievance reporting, geo-tagging of issues, and real-time updates from municipality officials.',
      features: [
        'Interactive Mapbox interface for geo-tagging civic complaints.',
        'Real-time status tracking via WebSockets push alerts.',
        'Admin dashboard with priority sorting and automated task routing.'
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    },
    {
      id: 2,
      title: 'POS Billing System',
      category: 'java',
      tags: ['Java', 'Swing / JavaFX', 'MySQL', 'JDBC'],
      desc: 'A robust desktop Point-of-Sale (POS) cashier application designed for retail shops. Features live transaction invoicing, inventory control, and sales charts.',
      features: [
        'Secure multi-tier cashier authorization and login credentials.',
        'Dynamic barcode scanning integration with instant inventory deduction.',
        'Detailed PDF invoice generation and monthly sales dashboard reporting.'
      ],
      github: 'https://github.com/gopalkum007/pos_bill_System.git',
      live: 'https://gopalkum007.github.io/pos_bill_System/',
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      id: 3,
      title: 'Portfolio',
      category: 'frontend',
      tags: ['React', 'Framer Motion', 'HTML5 Canvas', 'Vite'],
      desc: 'A recruiter-friendly creative developer portfolio featuring scroll tracking, interactive cursor particles, dark theme toggle, and Web3Forms email relay.',
      features: [
        'Interactive canvas background and hover-responsive coordinate glow.',
        '100% SEO optimization with metadata, JSON-LD schema, and og:tags.',
        'Excellent mobile and desktop responsive layouts with zero external UI kits.'
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    },
    {
      id: 4,
      title: 'Advanced Weather Forecast App',
      category: 'frontend',
      tags: ['React', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
      desc: 'A dynamic weather dashboard providing live 7-day reports, wind vectors, and responsive atmospheric theme changes matching current weather conditions.',
      features: [
        'Location autocomplete using geocoding APIs.',
        'Interactive canvas temperature charts showing daily trends.',
        'Dynamic styling backgrounds (e.g. rain, snow, sunny, night particles).'
      ],
      github: 'https://github.com/gopalkum007/weatherApp.git',
      live: 'https://gopalkum007.github.io/weatherApp/',
      color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
  ]

  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="hero-subtitle">Selected Work</span>
          <h2>Featured Projects</h2>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="project-card glass-card"
              >
                <div className="project-img-wrapper">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: project.color,
                      opacity: 0.85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      textShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      padding: '24px',
                      textAlign: 'center'
                    }}
                  >
                    {project.title}
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div style={{ margin: '0 0 24px 0', textAlign: 'left' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Key Features:</h4>
                    <ul style={{ listStyle: 'circle', paddingLeft: '18px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {project.features.map((feat, idx) => (
                        <li key={idx} style={{ marginBottom: '4px' }}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-links" style={{ marginTop: 'auto' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiCode /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
