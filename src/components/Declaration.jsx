import { motion } from 'framer-motion'
import { FaSignature } from 'react-icons/fa'
import './Declaration.css'

const Declaration = () => {
  return (
    <section id="declaration" className="declaration">
      <div className="section-container">
        <motion.div
          className="declaration-card card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="declaration-icon">
            <FaSignature />
          </div>
          <h2 className="declaration-title">Declaration</h2>
          <p className="declaration-text">
            I hereby declare that all the information mentioned above is true to the best of my
            knowledge.
          </p>
          <div className="declaration-signature">
            <span className="signature-name">Rithvik Poojary</span>
          </div>
        </motion.div>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="footer-text">
            © {new Date().getFullYear()} Rithvik Poojary. All rights reserved.
          </p>
          <p className="footer-subtext">
            Built with React, Framer Motion, and ❤️
          </p>
        </motion.footer>
      </div>
    </section>
  )
}

export default Declaration

