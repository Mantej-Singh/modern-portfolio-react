import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Get random funny tooltip message
  const getRandomTooltip = () => {
    const messages = [
      "🚀 Take me back up!!",
      "⬆️ Beam me up, Scotty!",
      "🎈 Let's fly to the top!",
      "🏔️ Back to the summit!",
      "🚁 Emergency evacuation to top!",
      "⭐ To infinity and beyond!",
      "🎯 Target: Hero section!"
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  return (
    <TooltipProvider>
      <AnimatePresence>
        {isVisible && (
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Scroll to top"
              >
                <ChevronUp className="h-6 w-6" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p className="font-medium">{getRandomTooltip()}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </AnimatePresence>
    </TooltipProvider>
  )
}