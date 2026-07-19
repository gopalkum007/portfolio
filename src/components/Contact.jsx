import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiMapPin, FiBriefcase, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { BiErrorCircle } from 'react-icons/bi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }))
    }, 4000)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate name
    if (!form.name.trim()) {
      triggerToast('Name field is required.', 'error')
      return
    }

    // Validate email
    if (!form.email.trim()) {
      triggerToast('Email field is required.', 'error')
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email.trim())) {
      triggerToast('Please enter a valid email address.', 'error')
      return
    }

    // Validate subject
    if (!form.subject.trim()) {
      triggerToast('Subject field is required.', 'error')
      return
    }

    // Validate message
    if (!form.message.trim()) {
      triggerToast('Message field is required.', 'error')
      return
    }

    setIsSending(true)

    // Load Access Key
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      triggerToast('Web3Forms Access Key is not configured in .env file.', 'error')
      setIsSending(false)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          from_name: 'Gopal Kumar Portfolio',
        }),
      })

      const data = await response.json()

      if (data.success) {
        triggerToast('Message sent successfully!', 'success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        triggerToast(data.message || 'Server error occurred. Please try again.', 'error')
      }
    } catch {
      triggerToast('A network error occurred. Please check your connection.', 'error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact">
      {/* Toast Notification Box */}
      <div className="toast-container">
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`toast toast-${toast.type}`}
            >
              <div className="toast-icon">
                {toast.type === 'success' ? <FiCheckCircle /> : <BiErrorCircle />}
              </div>
              <div>{toast.message}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="hero-subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Have an internship opportunity, project details, or query? Drop me a message below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p style={{ fontSize: '0.95rem' }}><a href="mailto:gopalkum007@gmail.com">gopalkum007@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p style={{ fontSize: '0.95rem' }}>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiBriefcase />
              </div>
              <div className="contact-details">
                <h4>Employment</h4>
                <p style={{ fontSize: '0.95rem' }}>Available for internships &amp; placements</p>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '16px' }}>Social Profiles</h4>
              <div className="social-links">
                <a
                  href="https://github.com/gopalkum007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/gopalkumar007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form glass-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="floating-label-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    value={form.name}
                    onChange={handleChange}
                    disabled={isSending}
                    required
                  />
                  <label htmlFor="name">Name *</label>
                </div>
                
                <div className="floating-label-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSending}
                    required
                  />
                  <label htmlFor="email">Email *</label>
                </div>
              </div>

              <div className="floating-label-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder=" "
                  value={form.subject}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                />
                <label htmlFor="subject">Subject *</label>
              </div>

              <div className="floating-label-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSending}
                  required
                ></textarea>
                <label htmlFor="message">Message *</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    Sending...{' '}
                    <AiOutlineLoading3Quarters
                      className="spin"
                      style={{ marginLeft: '6px', animation: 'spin 1s linear infinite' }}
                    />
                  </>
                ) : (
                  <>
                    Send Message <FiSend style={{ marginLeft: '6px' }} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
