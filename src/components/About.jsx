import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'
import profileImg from '../assets/profile.jpg'

export default function About() {
  const timelineItems = [
    {
      date: 'School Years',
      title: 'Student Event Organizer',
      org: 'DAV Public School, Kharagpur, Munger',
      desc: 'Organized and coordinated multiple school programs and events. Worked closely with teachers and classmates to ensure successful execution of activities. Developed leadership, teamwork, communication, and event management skills. Learned to take responsibility, solve problems, and manage tasks under deadlines.',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="about">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Top Row: Visual Headshot + Bio Text */}
          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-visual-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                className="glass-card" 
                style={{
                  width: '320px',
                  height: '320px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.06)',
                  padding: '8px',
                  background: 'var(--bg-primary)'
                }}
              >
                <img 
                  src={profileImg} 
                  alt="Gopal Kumar" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'calc(var(--radius-lg) - 8px)',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-text" style={{ textAlign: 'left' }}>
              <span className="hero-subtitle">My Story</span>
              <h2 style={{ marginBottom: '20px' }}>About Me</h2>
              <p style={{ marginBottom: '16px' }}>
                My name is <strong>Gopal Kumar</strong>, and I am currently a 3rd-year <strong>Bachelor of Engineering in Computer Science &amp; Engineering</strong> student at <strong>Chitkara University</strong>.
              </p>
              <p style={{ marginBottom: '16px' }}>
                My academic journey began at <strong>DAV Public School, Kharagpur, Munger</strong>, where I completed my 10th grade. During my school years, I actively participated in academic and extracurricular activities, discovering an early passion for leadership by organizing school programs, managing schedules, and collaborating with classmates.
              </p>
              <p style={{ marginBottom: '16px' }}>
                After completing school, I dedicated myself to preparing for IIT and NIT entrance examinations. Although I did not achieve that specific goal, the journey of intense preparation was highly transformative. It instilled in me a deep sense of resilience, self-discipline, and a love for problem solving. Rather than letting the outcome define me, I channeled that determination into strengthening my skills and began pursuing engineering at Chitkara University.
              </p>
              <p>
                Today, I focus my energy on mastering Data Structures &amp; Algorithms, Full Stack Web Development, and Software Engineering. I enjoy building real-world projects, solving challenging coding problems, and constantly expanding my technical toolkit.
              </p>
            </motion.div>
          </div>

          {/* Bottom Row: Academic Credentials + Leadership Experience */}
          <div className="about-details-grid">
            <motion.div variants={itemVariants} className="education-wrapper" style={{ margin: '0' }}>
              <span className="hero-subtitle">Academic Credentials</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '24px', textAlign: 'left' }}>Education</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="education-card glass-card">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-details">
                    <h3>Bachelor of Engineering in Computer Science &amp; Engineering</h3>
                    <div className="education-meta">
                      <span>Chitkara University</span>
                      <span>•</span>
                      <span>2024 - 2028 (Expected)</span>
                    </div>
                    <p className="education-desc">
                      Focusing on Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Database Systems (DBMS), Operating Systems, and Web Architecture.
                    </p>
                  </div>
                </div>

                <div className="education-card glass-card">
                  <div className="education-icon">
                    <FaSchool />
                  </div>
                  <div className="education-details">
                    <h3>Secondary School Education (10th Grade)</h3>
                    <div className="education-meta">
                      <span>DAV Public School, Kharagpur, Munger</span>
                    </div>
                    <p className="education-desc">
                      Completed secondary education while actively engaging in school club coordination and academic activities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-timeline">
              <span className="hero-subtitle">Roles &amp; Responsibility</span>
              <h2 style={{ marginBottom: '24px', textAlign: 'left' }}>Leadership Experience</h2>
              
              <div className="timeline">
                {timelineItems.map((item, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{item.date}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-org">{item.org}</div>
                    <p style={{ fontSize: '0.95rem', marginTop: '8px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card" style={{ marginTop: '24px', padding: '20px', borderLeft: '4px solid var(--accent-color)', textAlign: 'left' }}>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', margin: '0' }}>
                  &ldquo;These early experiences sparked my interest in leadership and collaboration, which continue to help me in academic projects, group hackathons, and technical learning.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
