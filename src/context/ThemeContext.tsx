// UPDATED 2025-11-22: Simplified to Dark/Dracula theme toggle (removed light mode and system preference)
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'dracula'

type ThemeProviderContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(
  undefined
)

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',  // UPDATED: Default to dark instead of system
  storageKey = 'portfolio-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as Theme
      // Fallback any old 'light' or 'system' values to 'dark'
      return stored === 'dark' || stored === 'dracula' ? stored : defaultTheme
    }
    return defaultTheme
  })

  // REMOVED: actualTheme state (no longer needed)
  // DEPRECATED - OLD CODE:
  // const [actualTheme, setActualTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove('light', 'dark', 'dracula')

    // Add current theme class
    root.classList.add(theme)

    // REMOVED: System preference detection logic
    // DEPRECATED - OLD CODE:
    // let effectiveTheme: 'dark' | 'light'
    // if (theme === 'system') {
    //   effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    //     ? 'dark'
    //     : 'light'
    // } else {
    //   effectiveTheme = theme
    // }
    // root.classList.add(effectiveTheme)
    // setActualTheme(effectiveTheme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  // REMOVED: System theme change listener
  // DEPRECATED - OLD CODE:
  // useEffect(() => {
  //   if (theme !== 'system') return
  //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  //   const handleChange = () => { ... }
  //   mediaQuery.addEventListener('change', handleChange)
  //   return () => mediaQuery.removeEventListener('change', handleChange)
  // }, [theme])

  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}