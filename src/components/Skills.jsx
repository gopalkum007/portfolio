import { motion } from 'framer-motion'
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBrain, FaNetworkWired } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman, SiVite } from 'react-icons/si'
import { GrDatabase } from 'react-icons/gr'
import { VscTerminal, VscVscode } from 'react-icons/vsc'
import { MdSettingsSuggest } from 'react-icons/md'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <IoLogoJavascript /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'VS Code', icon: <VscVscode /> },
        { name: 'Postman', icon: <SiPostman /> },
      ],
    },
    {
      title: 'Core CS',
      skills: [
        { name: 'Data Structures', icon: <FaBrain /> },
        { name: 'Algorithms', icon: <MdSettingsSuggest /> },
        { name: 'OOP', icon: <FaJava /> },
        { name: 'DBMS', icon: <GrDatabase /> },
        { name: 'Operating Systems', icon: <VscTerminal /> },
        { name: 'Computer Networks', icon: <FaNetworkWired /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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
    <section id="skills" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="hero-subtitle">Abilities</span>
          <h2>Skills &amp; CS Fundamentals</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive mapping of my programming capabilities, framework knowledge, development tools, and core computer science foundations.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="skills-grid"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="skills-category glass-card"
            >
              <h3 style={{ fontSize: '1.35rem', marginBottom: '20px' }}>{category.title}</h3>
              <div className="skill-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-color)', display: 'inline-flex', fontSize: '1.25rem' }}>
                      {skill.icon}
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
