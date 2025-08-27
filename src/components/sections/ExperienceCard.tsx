import type { Experience } from '@/types'
import { motion } from 'framer-motion'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-card border border-border rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo/Image placeholder */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">
              {experience.company.charAt(0)}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-primary mb-1">
                {experience.company}
              </h3>
              <p className="text-lg font-semibold text-foreground">
                {experience.role}
              </p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0">
              <p>{experience.period}</p>
              <p>{experience.location}</p>
            </div>
          </div>
          
          {/* Description */}
          <div className="space-y-2 mb-4">
            {experience.description.map((desc, idx) => (
              <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                • {desc}
              </p>
            ))}
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-secondary/20 text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
              {experience.achievements.map((achievement, idx) => (
                <p key={idx} className="text-xs text-muted-foreground">
                  🏆 {achievement}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}