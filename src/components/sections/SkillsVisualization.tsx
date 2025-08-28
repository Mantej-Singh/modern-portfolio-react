import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Code2, Database, Cloud, Brain, Zap, Shield, Info } from 'lucide-react'

interface SkillCategory {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  skills: Array<{
    name: string
    level: number
    experience: string
  }>
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    description: 'Advanced AI systems, prompt engineering, and ML model development',
    skills: [
      { name: 'Python', level: 90, experience: '5+ years' },
      { name: 'Machine Learning', level: 80, experience: '3+ years' },
      { name: 'AWS Bedrock', level: 85, experience: '2+ years' },
      { name: 'Prompt Engineering', level: 85, experience: '2+ years' },
      { name: 'AI Red Teaming', level: 75, experience: '1+ years' },
      { name: 'LLM Security', level: 70, experience: '1+ years' }
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    icon: <Database className="w-6 h-6" />,
    description: 'ETL pipelines, data visualization, and large-scale data processing',
    skills: [
      { name: 'SQL', level: 85, experience: '4+ years' },
      { name: 'Pandas', level: 85, experience: '4+ years' },
      { name: 'Jupyter Notebooks', level: 85, experience: '4+ years' },
      { name: 'Apache Spark', level: 80, experience: '3+ years' },
      { name: 'Data Visualization', level: 75, experience: '3+ years' },
      { name: 'ETL Pipelines', level: 75, experience: '2+ years' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Cloud infrastructure, automation, and deployment strategies',
    skills: [
      { name: 'Git/GitHub', level: 85, experience: '5+ years' },
      { name: 'AWS', level: 80, experience: '3+ years' },
      { name: 'Automation Scripts', level: 80, experience: '3+ years' },
      { name: 'PowerShell', level: 70, experience: '2+ years' },
      { name: 'CI/CD', level: 65, experience: '2+ years' },
      { name: 'Docker', level: 60, experience: '1+ years' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    description: 'Versatile programming across multiple languages and frameworks',
    skills: [
      { name: 'Python', level: 90, experience: '5+ years' },
      { name: 'C#/.NET', level: 75, experience: '3+ years' },
      { name: 'HTML/CSS', level: 75, experience: '3+ years' },
      { name: 'JavaScript/TypeScript', level: 70, experience: '2+ years' },
      { name: 'PowerShell', level: 70, experience: '2+ years' },
      { name: 'React', level: 65, experience: '1+ years' }
    ]
  },
  {
    id: 'security',
    title: 'Security & Testing',
    icon: <Shield className="w-6 h-6" />,
    description: 'AI security, vulnerability assessment, and testing frameworks',
    skills: [
      { name: 'Security Analysis', level: 70, experience: '2+ years' },
      { name: 'Cryptography', level: 65, experience: '2+ years' },
      { name: 'AI Red Teaming', level: 75, experience: '1+ years' },
      { name: 'Prompt Injection Testing', level: 70, experience: '1+ years' },
      { name: 'Vulnerability Scanning', level: 65, experience: '1+ years' },
      { name: 'Penetration Testing', level: 60, experience: '1+ years' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: <Zap className="w-6 h-6" />,
    description: 'Development tools, platforms, and productivity software',
    skills: [
      { name: 'Vscode', level: 90, experience: '5+ years' },
      { name: 'Jupyter Lab/Notebook', level: 85, experience: '4+ years' },
      { name: 'Windows 11 Admin', level: 80, experience: '3+ years' },
      { name: 'Plotly/D3.js', level: 75, experience: '2+ years' },
      { name: 'PromptFoo', level: 80, experience: '1+ years' },
      { name: 'GitHub Actions', level: 65, experience: '1+ years' }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export function SkillsVisualization() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-foreground">
              Skills & Technologies
            </h2>
            <div className="relative">
              <Info 
                className="w-5 h-5 text-muted-foreground hover:text-primary cursor-help transition-colors"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-md shadow-lg text-sm text-popover-foreground whitespace-nowrap z-10">
                  Below percentage represents my confidence level and enthusiasm for working with this technology
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                </div>
              )}
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across AI, data engineering, and software development
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
                </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">48+</div>
            <div className="text-sm text-muted-foreground">GitHub Repositories</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">Skill Categories</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}