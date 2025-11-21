import { motion } from 'framer-motion'
import { FaGithub, FaCheckCircle } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Student Attendance Tracking Website',
      description:
        'Designed and implemented a full-stack student attendance management system using Next.js, React, Tailwind CSS, and PostgreSQL (via Drizzle ORM), enabling teachers to manage student records and track daily attendance through a modern web interface.',
      features: [
        'Full-stack attendance management system',
        'User authentication with Kinde (email & social login)',
        'Responsive dashboard with interactive charts',
        'Attendance reports and insights',
        'Downloadable reports for administrative use',
      ],
      tech: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Kinde'],
      github: 'https://github.com/RITHVIk-BIRWAZ/fullstack-attendance-management-nextjs-react',
      color: '#6366f1',
    },
    {
      title: 'Finding Mission Person Using AI with Age and Gender Detection',
      description:
        'Built an AI-powered application to assist in finding missing persons by analyzing facial images and detecting age and gender attributes using deep learning models.',
      features: [
        'AI-powered missing person search',
        'Facial recognition and analysis',
        'Age and gender detection using CNN models',
        'Computer vision with OpenCV',
        'User-friendly image upload interface',
      ],
      tech: ['Python', 'OpenCV', 'CNN', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/RITHVIk-BIRWAZ/FINDING-MISSING-PERSON-USING-AI-AND-ALSO-SHOW-THE-AGE-AND-GENDER-DETECTION',
      color: '#8b5cf6',
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
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div
                className="project-header"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                }}
              >
                <div
                  className="project-icon"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                  }}
                >
                  <FaCheckCircle />
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="project-features-title">Key Features:</h4>
                  <ul className="project-features-list">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <FaCheckCircle className="feature-icon" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      style={{
                        borderColor: project.color,
                        color: project.color,
                        background: `${project.color}10`,
                      }}
                      whileHover={{ scale: 1.05, background: `${project.color}20` }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
