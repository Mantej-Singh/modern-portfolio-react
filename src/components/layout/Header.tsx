import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { personalInfo } from '@/data/personal'
import { Download, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [brandOpacity, setBrandOpacity] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Simplified Hero section-based brand visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (!heroSection) return

      const scrollY = window.scrollY
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const isInHeroSection = scrollY < heroBottom

      if (isInHeroSection) {
        setBrandOpacity(1)
      } else {
        setBrandOpacity(0)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/Mantej-Singh CV.pdf'
    link.download = 'Mantej-Singh CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        {/* Modern centered layout inspired by Figma Templates */}
        <div className="flex items-center justify-between">
          
          {/* Left: inspired transparent glass navigation (Desktop only) */}
          <nav className="hidden lg:flex items-center bg-black/20 rounded-full px-6 py-4 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 hover:bg-background/50 rounded-full relative group"
              >
                {item.label}
                <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10" />
              </a>
            ))}
          </nav>

          {/* Center: Brand with Progressive Opacity - Perfect Center */}
          <motion.div 
            className="flex-1 lg:flex-none text-center lg:fixed lg:left-1/2 lg:top-6 lg:transform lg:-translate-x-1/2 lg:z-50 lg:w-auto"
            animate={{ 
              opacity: brandOpacity,
              y: brandOpacity < 1 ? -10 : 0 
            }}
            transition={{ 
              duration: isMobile ? 0.2 : 0.3, 
              ease: "easeOut" 
            }}
            style={{ 
              pointerEvents: brandOpacity < 0.1 ? 'none' : 'auto',
              left: '42%',
              transform: 'translateX(-90%)'
            }}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-xl lg:text-2xl font-bold text-primary tracking-tight">
                Mantej Singh's Portfolio
              </h1>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                AI/Data Engineer @ Verizon
              </p>
            </div>
          </motion.div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleResumeDownload}
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl px-4 py-2 text-sm font-medium text-foreground hover:bg-white/10 hover:text-primary transition-all duration-200 hover:scale-105 shadow-xl shadow-black/10"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
            <a
              href={personalInfo.email.includes('@') ? `mailto:${personalInfo.email}` : personalInfo.email}
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              Get in Touch
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-muted/50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-200" />
            ) : (
              <svg className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-all duration-200 font-medium text-lg py-3 px-4 rounded-full hover:bg-muted/50 relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-200 -z-10" />
                </a>
              ))}
            </nav>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-border/30">
              <button
                onClick={() => {
                  handleResumeDownload()
                  setIsMobileMenuOpen(false)
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 hover:text-primary transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
              <a
                href={personalInfo.email.includes('@') ? `mailto:${personalInfo.email}` : personalInfo.email}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}