import { ThemeToggle } from '@/components/ThemeToggle'
import { personalInfo } from '@/data/personal'
import { Download } from 'lucide-react'

export function Header() {
  const navItems = [
    { label: "About Me", href: "#about" },
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">
            My Portfolio
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleResumeDownload}
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>
          <a
            href={personalInfo.email.includes('@') ? `mailto:${personalInfo.email}` : personalInfo.email}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile menu button - we'll implement this later */}
        <button className="md:hidden p-2 rounded-md hover:bg-accent">
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  )
}