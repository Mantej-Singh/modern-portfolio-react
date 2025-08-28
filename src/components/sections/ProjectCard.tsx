import type { Project } from '@/types'
import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/animations'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors = {
    'ai': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'data-science': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'automation': 'bg-green-500/10 text-green-400 border-green-500/20',
    'web': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'cryptography': 'bg-red-500/10 text-red-400 border-red-500/20',
    'other': 'bg-gray-500/10 text-gray-400 border-gray-500/20'
  }

  return (
    <SpotlightCard 
      className="h-full"
      spotlightColor={project.featured ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'}
    >
      <motion.div
        className="cursor-target bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => window.open(project.githubUrl, '_blank')}
      >
      {/* Featured badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Featured
        </motion.div>
      )}
      
      {/* Category badge */}
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[project.category]}`}>
        {project.category.replace('-', ' ').toUpperCase()}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      
      {/* Links */}
      <div className="flex items-center gap-4 mt-auto">
        <motion.div
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          whileHover={{ x: 5 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span className="text-sm font-medium">View Code</span>
        </motion.div>
        
        {project.liveUrl && (
          <motion.div
            className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            whileHover={{ x: 5 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="text-sm font-medium">Live Demo</span>
          </motion.div>
        )}
      </div>
      
        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </motion.div>
    </SpotlightCard>
  )
}