import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'AJ Institute of Engineering and Technology',
      degree: 'Bachelor of Engineering in Artificial Intelligence & Data Science',
      cgpa: 'CGPA: 8.33 (Till 4th semester)',
      period: '2023 – Present',
      location: 'Mangalore, India',
      icon: <FaGraduationCap />,
    },
    {
      institution: "St. Raymond's Degree College",
      degree: '12th Grade - Science Stream (PCMC)',
      cgpa: 'Aggregate: 86.66%',
      period: '2021 – 2023',
      location: 'Mangalore, India',
      icon: <FaGraduationCap />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="education" className="education">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <div className="education-details">
                  <span className="education-cgpa">{edu.cgpa}</span>
                </div>
                <div className="education-meta">
                  <span className="education-period">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                  <span className="education-location">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

