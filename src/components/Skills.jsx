import { motion } from 'framer-motion'
import {
  FaCode,
  FaLaptopCode,
  FaGitAlt,
  FaChartBar,
  FaJava,
} from 'react-icons/fa'
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiDjango,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 90 },
      ],
      color: '#6366f1',
    },
    {
      title: 'Web Development',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Django', level: 60 },
      ],
      color: '#8b5cf6',
    },
    {
      title: 'Version Control',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
      ],
      color: '#ec4899',
    },
    {
      title: 'Data Handling & Visualization',
      icon: <FaChartBar />,
      skills: [
        { name: 'Excel', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Tableau', level: 75 },
      ],
      color: '#10b981',
    },
  ]

  const getSkillIcon = (skillName) => {
    const icons = {
      Python: <SiPython />,
      JavaScript: <SiJavascript />,
      React: <SiReact />,
      Django: <SiDjango />,
      HTML: <SiHtml5 />,
      CSS: <SiCss3 />,
      Java: <FaJava />,
      Git: <FaGitAlt />,
    }
    return icons[skillName] || <FaCode />
  }

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
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="skill-category-header">
                <div
                  className="skill-category-icon"
                  style={{ background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)` }}
                >
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{getSkillIcon(skill.name)}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
