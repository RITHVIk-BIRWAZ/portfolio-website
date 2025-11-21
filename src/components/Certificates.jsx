import { motion } from 'framer-motion'
import { FaCertificate, FaAward } from 'react-icons/fa'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      title: 'AINNOVATION 2025 : Microsoft AI Learning Challenge',
      issuer: 'Microsoft',
      icon: <FaAward />,
      color: '#0078d4',
    },
    {
      title: 'AINNOVATION 2025 : Microsoft Azure Learning Challenge',
      issuer: 'Microsoft',
      icon: <FaAward />,
      color: '#0078d4',
    },
    {
      title: 'Artificial Intelligence Project',
      issuer: 'Great Learning',
      icon: <FaCertificate />,
      color: '#10b981',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="certificates" className="certificates">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>

        <motion.div
          className="certificates-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div
                className="certificate-icon"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}40)`,
                  borderColor: cert.color,
                }}
              >
                {cert.icon}
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
              </div>
              <div
                className="certificate-badge"
                style={{ background: cert.color }}
              >
                Verified
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates

