// UPDATED 2025-11-22: Simplified Dark/Dracula toggle (removed bat animation)
import { useTheme } from '@/context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'dracula' : 'dark')
  }

  const getLabel = () => {
    return `Switch to ${theme === 'dark' ? 'Dracula' : 'Dark'} theme`
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={getLabel()}
      title={getLabel()}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              <path d="M19 3v4" />
              <path d="M21 5h-4" />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}

// REMOVED 2025-11-22: ThemeSelector component (no longer needed for 2-theme toggle)
// DEPRECATED - OLD CODE:
// export function ThemeSelector() {
//   const { theme, setTheme } = useTheme()
//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-sm font-medium text-muted-foreground">Theme:</span>
//       <select
//         value={theme}
//         onChange={(e) => setTheme(e.target.value as 'dark' | 'light' | 'system')}
//         className="rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//       >
//         <option value="system">System</option>
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//       </select>
//     </div>
//   )
// }