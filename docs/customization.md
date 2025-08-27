# 🛠️ Complete Customization Guide

This comprehensive guide walks you through customizing every aspect of the portfolio, from personal data to advanced styling and animations.

## 📝 **Personal Data Customization**

### **Basic Information (`src/data/personal.ts`)**
This file contains your core identity information displayed across the portfolio. 
The tagline supports multi-line format with emojis for visual impact and professional branding.
Update these fields to reflect your current role, skills, and contact preferences.

```typescript
export const personalInfo = {
  name: "Your Full Name",
  tagline: `🚀 Senior Software Engineer | AI/ML Expert at Your Company
🐍 Python | ☁️ AWS | 🤖 Machine Learning | 📊 Data Science
🏆 5+ Years Building Scalable Solutions | 💡 Innovation Driver
🔧 Docker | React | TypeScript | 🌐 Full-Stack Development`,
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567", // Optional
  location: "Your City, State",
  
  // Social Links
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername", // Optional
  website: "https://yourwebsite.com" // Optional
}

// Bio for about section
export const bio = `
Passionate software engineer with 5+ years of experience building scalable 
applications and AI/ML solutions. Currently leading innovative projects at 
[Your Company], focusing on cloud architecture and data-driven solutions.

Expertise in Python, AWS, React, and modern web technologies. Love solving 
complex problems and mentoring junior developers.
`
```

### **Work Experience (`src/data/experience.ts`)**
Define your professional journey with detailed job descriptions and achievements.
The timeline automatically calculates years worked and applies color coding (green for current, yellow for past roles).
Include quantifiable achievements and relevant technologies to showcase your impact and expertise.

```typescript
export const workExperience = [
  {
    title: "Senior Python & AI Engineer",
    company: "Your Current Company",
    period: "2022 - Present", // Use "Present" for current job
    location: "City, State",
    description: "Leading AI/ML initiatives and cloud infrastructure development",
    achievements: [
      "Built scalable ML pipelines processing 1M+ daily transactions",
      "Reduced system latency by 40% through optimization",
      "Led team of 5 developers on critical projects"
    ],
    technologies: ["Python", "AWS", "Docker", "TensorFlow", "React"],
    companyUrl: "https://company.com", // Optional
    companyLogo: "/images/company-logo.png" // Optional
  },
  {
    title: "Software Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    location: "Another City, State", 
    description: "Full-stack development and system architecture",
    achievements: [
      "Developed 10+ web applications using React and Node.js",
      "Improved code quality through testing and CI/CD implementation"
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"]
  }
  // Add more experiences as needed
]
```

### **Featured Projects (`src/data/projects.ts`)**
Showcase your best work with links to live demos and GitHub repositories.
The system supports project images, GitHub stats integration, and technology badges for visual appeal.
Categories help organize projects and must match the types defined in your TypeScript interfaces.

```typescript
export const featuredProjects = [
  {
    title: "AI Chat Application",
    description: "Intelligent chatbot using OpenAI API with real-time messaging and context awareness",
    github: "https://github.com/yourusername/ai-chat-app",
    live: "https://your-app.vercel.app", // Optional
    image: "/images/projects/ai-chat.png", // Optional
    technologies: ["React", "TypeScript", "OpenAI", "WebSocket"],
    category: "ai" as const, // Must match types in src/types/index.ts
    featured: true, // Shows in featured section
    stats: {
      stars: 45, // GitHub stars (optional)
      forks: 12,  // GitHub forks (optional)
      downloads: "1.2k" // npm downloads (optional)
    }
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    github: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "web" as const,
    featured: true
  },
  // Add up to 6 featured projects for optimal display
]

// Available categories (must match src/types/index.ts):
// 'data-science' | 'automation' | 'web' | 'ai' | 'cryptography' | 'other'
```

### **Skills Configuration (`src/data/skills.ts`)**
Organize your technical abilities into categories with realistic proficiency levels and experience duration.
Skills are displayed with animated progress bars, and levels should reflect genuine expertise (60-90% range recommended).
Categories help visitors quickly understand your technical breadth across different domains.

```typescript
export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90, experience: "5+ years" },
      { name: "JavaScript/TypeScript", level: 85, experience: "4+ years" },
      { name: "Java", level: 70, experience: "2+ years" },
      { name: "Go", level: 60, experience: "1+ years" }
    ]
  },
  {
    category: "Frameworks & Libraries", 
    skills: [
      { name: "React", level: 85, experience: "3+ years" },
      { name: "Node.js", level: 80, experience: "3+ years" },
      { name: "Django/Flask", level: 90, experience: "4+ years" },
      { name: "TensorFlow", level: 75, experience: "2+ years" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85, experience: "3+ years" },
      { name: "Docker", level: 80, experience: "2+ years" },
      { name: "Kubernetes", level: 65, experience: "1+ years" },
      { name: "CI/CD", level: 75, experience: "2+ years" }
    ]
  }
]

// Skill Level Guidelines:
// 90-100%: Expert (5+ years, teaching others, leading projects)
// 75-89%:  Advanced (3-4 years, independent work, mentoring)
// 60-74%:  Intermediate (1-2 years, guided work, solid foundation)
// Below 60%: Not displayed (learning phase)
```

## 🎨 **Visual & Layout Customization**

### **Theme Colors (`tailwind.config.js`)**
Customize the entire visual identity by modifying color schemes, typography, and animations.
The configuration supports both light and dark themes with CSS variables for consistent theming.
Custom animations and font families can be added to create a unique brand experience.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',  // Main brand color
          600: '#2563eb',
          900: '#1e3a8a'
        },
        // Custom accent colors
        accent: {
          500: '#10b981',  // Success/current job color
          600: '#059669'
        },
        // Custom background colors
        background: {
          light: '#ffffff',
          dark: '#0a0a0a'
        }
      },
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Poppins', 'sans-serif'] // Optional custom heading font
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }
        }
      }
    }
  },
  plugins: []
}
```

### **Global Styles (`src/index.css`)**
Define CSS variables and utility classes that work across both light and dark themes.
Custom gradients, scrollbar styling, and utility classes enhance the visual consistency.
The layer system ensures proper CSS cascade and component-specific styling.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS Variables for Theme */
:root {
  /* Light theme */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  
  /* Custom gradients */
  --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-card: linear-gradient(145deg, #f0f0f0, #cacaca);
}

.dark {
  /* Dark theme */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  
  /* Dark mode gradients */
  --gradient-hero: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%);
  --gradient-card: linear-gradient(145deg, #374151, #1f2937);
}

/* Custom utility classes */
@layer utilities {
  .gradient-hero {
    background: var(--gradient-hero);
  }
  
  .gradient-card {
    background: var(--gradient-card);
  }
  
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-accent-500 bg-clip-text text-transparent;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-400 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500 dark:bg-gray-500;
}
```

## 🧩 **Component Customization**

### **Header Component (`src/components/layout/Header.tsx`)**
Modify navigation items, styling, and behavior of the main site header.
The header supports both internal section links and external links with icons.
Backdrop blur and responsive design ensure optimal viewing across all devices.

```typescript
// Customize navigation items
const navigationItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Mail },
  // Add custom navigation items
  { label: "Blog", href: "/blog", icon: BookOpen, external: true },
  { label: "Resume", href: "/resume.pdf", icon: Download, external: true }
]

// Customize header styling
const Header = () => {
  return (
    <header className="
      fixed top-0 w-full z-50 
      bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-md border-b border-gray-200 dark:border-gray-700
      transition-all duration-300
    ">
      {/* Header content */}
    </header>
  )
}
```

### **Footer Component (`src/components/layout/Footer.tsx`)**
Customize the site footer with copyright information and social media links.
The footer automatically updates the current year and supports responsive layout changes.
Social icons use Lucide React components for consistency with the overall design system.

```typescript
// Customize footer content
const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Your Name. Built with React & TypeScript.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" className="social-link">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="social-link">
              <Linkedin className="w-5 h-5" />
            </a>
            {/* Add more social links */}
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### **Skills Section (`src/components/sections/SkillsVisualization.tsx`)**
Customize the layout and appearance of the technical skills display section.
The component supports grid layouts with responsive breakpoints and hover effects.
Each skill category can be styled independently with custom cards and progress animations.

```typescript
// Customize skills display
const SkillsVisualization = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        
        {/* Grid layout customization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            // Customize skill category cards
            <div key={index} className="
              bg-white dark:bg-gray-800 
              rounded-lg p-6 shadow-lg 
              hover:shadow-xl transition-shadow duration-300
            ">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                {category.category}
              </h3>
              
              {/* Individual skill items */}
              <div className="space-y-4">
                {category.skills.map(skill => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### **Project Cards (`src/components/sections/ProjectCard.tsx`)**
Design and customize the appearance of individual project showcase cards.
Cards support project images, GitHub statistics, technology badges, and action buttons.
The SpotlightCard wrapper provides interactive mouse-following effects for enhanced user engagement.

```typescript
// Customize project card appearance
const ProjectCard = ({ project }) => {
  return (
    <SpotlightCard className="h-full">
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Project image (optional) */}
        {project.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
        
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            {/* GitHub stats (optional) */}
            {project.stats && (
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Star className="w-4 h-4" />
                <span>{project.stats.stars}</span>
                <GitFork className="w-4 h-4" />
                <span>{project.stats.forks}</span>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          
          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="flex space-x-2 mt-auto">
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.live && (
              <Button size="sm" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </SpotlightCard>
  )
}
```

## ⚙️ **App Structure Customization (`src/App.tsx`)**
Control the overall application layout, section ordering, and page structure.
This is where you add new sections, reorder existing ones, or modify the core app architecture.
The component structure supports easy addition of features like blog sections, testimonials, or achievements.

```typescript
function App() {
  return (
    <div className="App">
      {/* Always include these core components */}
      <Header />
      <TargetCursor /> {/* Mouse cursor effect */}
      
      {/* Customize section order and content */}
      <main>
        {/* Hero section with background animation */}
        <section className="relative min-h-screen flex items-center justify-center">
          <PrismBackground /> {/* Animated background */}
          <HeroContent />
        </section>
        
        {/* Add/remove/reorder these sections as needed */}
        <AboutSection />        {/* Personal bio */}
        <SkillsSection />       {/* Technical skills */}
        <ExperienceSection />   {/* Work timeline */}
        <ProjectsSection />     {/* Featured projects */}
        <ContactSection />     {/* Contact form */}
        
        {/* Optional additional sections */}
        <TestimonialsSection /> {/* Client testimonials */}
        <BlogSection />        {/* Recent blog posts */}
        <AchievementsSection /> {/* Certifications, awards */}
      </main>
      
      <Footer />
      <ScrollToTop /> {/* Back to top button */}
    </div>
  )
}
```

## 🎭 **Animation Customization**

### **DecryptedText Animation (`src/components/animations/DecryptedText.tsx`)**
Customize the matrix-style text reveal effect used in hero sections and headings.
You can modify the character set, animation speed, and iteration patterns for different visual styles.
The component supports different character themes like binary, alphabet, or custom symbol sets.

```typescript
// Customize decryption characters and timing
const DecryptedText = ({ text, className, delay = 0 }) => {
  // Customize these characters for different effects
  const chars = '!<>-_\\/[]{}—=+*^?#________' // Matrix style
  // const chars = '01010101010101010101010101' // Binary style  
  // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // Alphabet style
  
  // Customize timing
  const decryptionSpeed = 50 // milliseconds between character changes
  const iterationSpeed = 1/3 // how fast to reveal each character
  
  // Rest of component logic...
}
```

### **Custom Animation Components**
Create your own animation components using Framer Motion and Intersection Observer APIs.
This example shows how to build scroll-triggered animations with customizable timing and effects.
The pattern can be extended for various animation types like fade-in, slide-up, or scale effects.

```typescript
// Create your own animation component
const FadeInOnScroll = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
```

## 📱 **Responsive Design Customization**

### **Breakpoint Customization**
Define responsive behavior across different screen sizes using Tailwind's utility classes.
The example shows progressive enhancement from mobile to desktop with increasing padding and content width.
Breakpoints can be customized in tailwind.config.js for specific design requirements.

```typescript
// Custom responsive component
const ResponsiveSection = ({ children }) => {
  return (
    <section className="
      px-4 py-8          /* Mobile: smaller padding */
      sm:px-6 sm:py-12   /* Tablet: medium padding */
      lg:px-8 lg:py-16   /* Desktop: larger padding */
      xl:px-12 xl:py-20  /* Large desktop: maximum padding */
      
      max-w-sm mx-auto   /* Mobile: narrow content */
      sm:max-w-2xl       /* Tablet: medium width */
      lg:max-w-4xl       /* Desktop: wide content */
      xl:max-w-7xl       /* Large desktop: maximum width */
    ">
      {children}
    </section>
  )
}
```

## 🔧 **Advanced Customizations**

### **Adding New Sections**
Follow this systematic approach to add completely new sections to your portfolio.
Each step ensures proper integration with the existing architecture and navigation system.
The process maintains consistency with design patterns and component structure.

1. **Create component file**: `src/components/sections/NewSection.tsx`
2. **Add to App.tsx**: Import and place in desired order
3. **Update navigation**: Add to header navigation if needed
4. **Style consistently**: Use existing design patterns

### **Custom Hooks**
Create reusable logic for common functionality like theme management and state persistence.
This example shows theme switching with local storage persistence and system preference detection.
Custom hooks promote code reusability and separation of concerns across components.

```typescript
// Custom hook for theme management
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system'
  })
  
  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])
  
  return { theme, setTheme }
}
```

### **Environment Configuration**
Centralize configuration for different deployment environments and external service integrations.
Environment variables allow different settings for development, staging, and production builds.
Feature flags enable/disable functionality without code changes across different environments.

```typescript
// src/config/env.ts
export const config = {
  // API endpoints
  api: {
    base: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    github: 'https://api.github.com'
  },
  
  // Feature flags
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    contactForm: import.meta.env.VITE_ENABLE_CONTACT === 'true',
    blog: import.meta.env.VITE_ENABLE_BLOG === 'true'
  },
  
  // External services
  services: {
    emailjs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    }
  }
}
```

## 🚀 **Deployment Customization**

### **Custom Build Script (`package.json`)**
Extend the build process with additional scripts for analysis, deployment, and optimization.
Bundle analysis helps identify performance bottlenecks and optimization opportunities.
Platform-specific deployment scripts streamline the publishing process to different hosting providers.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:analyze": "npm run build && npx vite-bundle-analyzer dist/assets/*.js",
    "preview": "vite preview",
    "deploy:github": "npm run build && gh-pages -d dist",
    "deploy:vercel": "vercel --prod",
    "deploy:netlify": "npm run build && netlify deploy --prod --dir=dist"
  }
}
```

### **GitHub Actions Workflow (`.github/workflows/deploy.yml`)**
Automate deployment with continuous integration and delivery pipelines.
The workflow triggers on main branch pushes and handles dependency installation, building, and deployment.
GitHub Actions provide free CI/CD for public repositories with extensive customization options.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

This guide covers every aspect of customization. For specific questions or advanced customizations, refer to the component source code or create an issue in the repository.