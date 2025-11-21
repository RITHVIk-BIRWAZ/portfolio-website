import { motion } from 'framer-motion'
import { FaLanguage } from 'react-icons/fa'
import './Languages.css'

const Languages = () => {
  const languages = [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Kannada', proficiency: 'Native' },
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'Tulu', proficiency: 'Native' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="languages" className="languages">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Languages
        </motion.h2>

        <motion.div
          className="languages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="language-card card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="language-icon">
                <FaLanguage />
              </div>
              <h3 className="language-name">{language.name}</h3>
              <span className="language-proficiency">{language.proficiency}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Languages

