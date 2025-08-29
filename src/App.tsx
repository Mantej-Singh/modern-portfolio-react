import { lazy, Suspense, useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { personalInfo } from '@/data/personal'
import { experiences } from '@/data/experience'
import { featuredProjects } from '@/data/projects'
import { DecryptedText, PrismBackground, TargetCursor } from '@/components/animations'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { SectionLoadingSkeleton } from '@/components/ui/loading-spinner'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { motion } from 'framer-motion'

// Lazy load heavy components
const ContactForm = lazy(() => import('@/components/sections/ContactForm').then(module => ({ default: module.ContactForm })))
const SkillsVisualization = lazy(() => import('@/components/sections/SkillsVisualization').then(module => ({ default: module.SkillsVisualization })))

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Projects carousel navigation
  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const goToProjectSlide = (index: number) => {
    setCurrentProjectSlide(index)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Main content area */}
      <main className="flex-1">
        {/* Hero section with PrismBackground and DecryptedText */}
        <section id="hero" className="relative py-32 px-4 overflow-hidden">
          <PrismBackground />
          <div className="container mx-auto text-center relative z-10">
            <DecryptedText 
              text="WHO AM I?"
              className="mb-8 text-6xl md:text-7xl font-bold text-foreground tracking-tight"
              speed={100}
              sequential={true} //DONT TOUCH THIS
              revealDirection={'start'} //start
              useOriginalCharsOnly={false} //true
              //characters={'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+'}
              //maxIterations={50}
              animateOn={'view'}
              

            />
            <motion.p 
              className="text-base md:text-xl text-muted-foreground max-w-6xl mx-auto leading-snug md:leading-relaxed mb-8 md:mb-12 whitespace-pre-line text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {personalInfo.tagline}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background/80 backdrop-blur px-8 py-4 text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="mb-8 text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {personalInfo.bio}
              </motion.p>
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                Want to work together? I'd love to hear from you.
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience section with Responsive Layout */}
        <section id="experience" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Work Experience
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My professional journey across leading organizations in AI, data science, and automation
              </p>
            </motion.div>

            {/* Desktop Timeline Layout */}
            <div className="hidden md:block max-w-6xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                
                {experiences.map((experience, index) => {
                  // Calculate years worked
                  const calculateYearsWorked = (period: string): string => {
                    const [startYear, endYear] = period.split(' - ')
                    const start = parseInt(startYear)
                    const end = endYear === 'Present' ? new Date().getFullYear() : parseInt(endYear)
                    const years = end - start + 1
                    return `${years} year${years > 1 ? 's' : ''}`
                  }

                  // Determine badge colors based on current position
                  const isCurrentPosition = experience.period.includes('Present')
                  const periodBadgeClass = isCurrentPosition 
                    ? 'px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md'
                    : 'px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-md'

                  return (
                    <motion.div
                      key={experience.id}
                      className={`relative flex items-center mb-16 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                      
                      {/* Content card */}
                      <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          {/* Header with image */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-border">
                              <img 
                                src={experience.image} 
                                alt={experience.company}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {experience.company}
                              </h3>
                              <p className="text-muted-foreground font-medium">
                                {experience.role}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                                <span className={periodBadgeClass}>
                                  {experience.period} | {calculateYearsWorked(experience.period)}
                                </span>
                                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-md">
                                  {experience.location}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="mb-4">
                            <ul className="space-y-2">
                              {experience.description.map((desc, i) => (
                                <li key={i} className="text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.slice(0, 6).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded border"
                                >
                                  {tech}
                                </span>
                              ))}
                              {experience.technologies.length > 6 && (
                                <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                                  +{experience.technologies.length - 6} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Achievements */}
                          {experience.achievements && (
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {experience.achievements.map((achievement, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary">🏆</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden max-w-sm mx-auto">
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-xl">
                  <motion.div 
                    className="flex"
                    animate={{ x: -currentSlide * 100 + '%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {experiences.map((experience) => {
                      const isCurrentPosition = experience.period.includes('Present')
                      const isVerizon = experience.company === 'Verizon'
                      
                      return (
                        <div key={experience.id} className="w-full flex-shrink-0">
                          <div className={`bg-card border border-border rounded-xl p-4 shadow-lg transition-all duration-300 ${
                            isVerizon ? 'border-primary/50 bg-primary/5' : ''
                          }`}>
                            {/* Current Position Badge */}
                            {isCurrentPosition && (
                              <div className="mb-3">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                  Current Position
                                </span>
                              </div>
                            )}
                            
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`rounded-lg overflow-hidden flex-shrink-0 border border-border ${
                                isVerizon ? 'w-14 h-14' : 'w-12 h-12'
                              }`}>
                                <img 
                                  src={experience.image} 
                                  alt={experience.company}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className={`font-bold text-foreground ${isVerizon ? 'text-lg' : 'text-base'}`}>
                                  {experience.company}
                                </h3>
                                <p className="text-muted-foreground text-sm font-medium">
                                  {experience.role}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {experience.period} • {experience.location}
                                </p>
                              </div>
                            </div>

                            {/* Condensed Description */}
                            <div className="mb-3">
                              <ul className="space-y-1">
                                {experience.description.slice(0, 2).map((desc, i) => (
                                  <li key={i} className="text-muted-foreground text-xs flex items-start gap-1">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span>{desc}</span>
                                  </li>
                                ))}
                                {experience.description.length > 2 && (
                                  <li className="text-muted-foreground text-xs">
                                    <span className="text-primary">•</span> +{experience.description.length - 2} more responsibilities
                                  </li>
                                )}
                              </ul>
                            </div>

                            {/* Key Technologies */}
                            <div className="mb-3">
                              <div className="flex flex-wrap gap-1">
                                {experience.technologies.slice(0, 4).map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-1.5 py-0.5 text-xs bg-accent text-accent-foreground rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {experience.technologies.length > 4 && (
                                  <span className="px-1.5 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                                    +{experience.technologies.length - 4}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Top Achievement */}
                            {experience.achievements && experience.achievements.length > 0 && (
                              <div className="text-xs">
                                <div className="flex items-start gap-1">
                                  <span className="text-primary">🏆</span>
                                  <span className="text-muted-foreground">{experience.achievements[0]}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
                  aria-label="Previous experience"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
                  aria-label="Next experience"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 gap-2">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-primary w-6'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                      }`}
                      aria-label={`Go to experience ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section with TargetCursor and SpotlightCards */}
        <section id="projects" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-4xl font-bold text-foreground">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Open source contributions, AI innovations, and automation tools that make a real impact
              </p>
            </motion.div>

            <TargetCursor>
              {/* Desktop Grid Layout */}
              <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {featuredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="md:hidden max-w-sm mx-auto">
                <div className="relative">
                  {/* Carousel Container */}
                  <div className="overflow-hidden rounded-xl">
                    <motion.div 
                      className="flex"
                      animate={{ x: -currentProjectSlide * 100 + '%' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      {featuredProjects.map((project) => {
                        const isAICategory = project.category === 'ai'
                        const isAutomationCategory = project.category === 'automation'
                        
                        return (
                          <div key={project.id} className="w-full flex-shrink-0">
                            <div className={`transition-all duration-300 ${
                              isAICategory ? 'ring-2 ring-primary/30' : 
                              isAutomationCategory ? 'ring-2 ring-blue-500/30' : ''
                            }`}>
                              <ProjectCard 
                                project={project} 
                                index={0} 
                              />
                            </div>
                          </div>
                        )
                      })}
                    </motion.div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevProjectSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={nextProjectSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex justify-center mt-6 gap-2">
                    {featuredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToProjectSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentProjectSlide === index
                            ? 'bg-primary w-6'
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TargetCursor>
          </div>
        </section>

        {/* Skills & Technologies */}
        <Suspense fallback={<SectionLoadingSkeleton />}>
          <SkillsVisualization />
        </Suspense>

        {/* Contact Form */}
        <Suspense fallback={<SectionLoadingSkeleton />}>
          <ContactForm />
        </Suspense>
      </main>

      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App