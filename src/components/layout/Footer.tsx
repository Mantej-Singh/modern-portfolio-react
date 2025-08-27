import { socialLinks, personalInfo } from '@/data/personal'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience  
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect
            </h3>
            <TooltipProvider>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const getIcon = () => {
                    switch (link.platform) {
                      case 'GitHub':
                        return <Github className="h-5 w-5" />
                      case 'LinkedIn':
                        return <Linkedin className="h-5 w-5" />
                      case 'Twitter':
                        return <Twitter className="h-5 w-5" />
                      case 'Email':
                        return <Mail className="h-5 w-5" />
                      default:
                        return <Mail className="h-5 w-5" />
                    }
                  }

                  const getTooltipText = () => {
                    switch (link.platform) {
                      case 'GitHub':
                        return "🚀 Check out my GitHub"
                      case 'LinkedIn':
                        return "💼 Connect with me on LinkedIn - Let's network!"
                      case 'Twitter':
                        return "🐦 Follow me on Twitter"
                      case 'Email':
                        return "✉️ Drop me a line - I reply within 24hrs, No Promises tho!"
                      default:
                        return "Get in touch!"
                    }
                  }

                  return (
                    <Tooltip key={link.platform}>
                      <TooltipTrigger asChild>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label={link.label}
                        >
                          {getIcon()}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{getTooltipText()}</p>
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-1">
              Forged together with Claude Code <span className="text-red-500">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}