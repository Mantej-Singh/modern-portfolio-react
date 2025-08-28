import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, useRef, type ReactNode } from 'react'

interface TargetCursorProps {
  children: ReactNode
  className?: string
  targetSelector?: string
  spinDuration?: number
  hideDefaultCursor?: boolean
}

export function TargetCursor({ 
  children, 
  className = '',
  targetSelector = '.cursor-target',
  spinDuration = 2,
  hideDefaultCursor = true
}: TargetCursorProps) {
  const [isTargeting, setIsTargeting] = useState(false)
  const [targetBounds, setTargetBounds] = useState<DOMRect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorWidth = useMotionValue(40)
  const cursorHeight = useMotionValue(40)
  
  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const cursorWidthSpring = useSpring(cursorWidth, springConfig)
  const cursorHeightSpring = useSpring(cursorHeight, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isTargeting && targetBounds) {
        // Position cursor to frame the target element
        cursorX.set(targetBounds.left - 10)
        cursorY.set(targetBounds.top - 10)
        cursorWidth.set(targetBounds.width + 20)
        cursorHeight.set(targetBounds.height + 20)
      } else {
        // Default cursor follows mouse
        cursorX.set(e.clientX - 20)
        cursorY.set(e.clientY - 20)
        cursorWidth.set(40)
        cursorHeight.set(40)
      }
    }
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches(targetSelector) || target.closest(targetSelector)) {
        const element = target.matches(targetSelector) ? target : target.closest(targetSelector) as HTMLElement
        const bounds = element.getBoundingClientRect()
        setTargetBounds(bounds)
        setIsTargeting(true)
      }
    }
    
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches(targetSelector) || target.closest(targetSelector)) {
        setIsTargeting(false)
        setTargetBounds(null)
      }
    }
    
    if (containerRef.current) {
      const targetElements = containerRef.current.querySelectorAll(targetSelector)
      
      targetElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter as EventListener)
        element.addEventListener('mouseleave', handleMouseLeave as EventListener)
      })
      
      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        targetElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter as EventListener)
          element.removeEventListener('mouseleave', handleMouseLeave as EventListener)
        })
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [cursorX, cursorY, cursorWidth, cursorHeight, targetSelector, isTargeting, targetBounds])
  
  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ cursor: hideDefaultCursor && isTargeting ? 'none' : 'default' }}
    >
      {children}
      
      {/* Dynamic Target Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          width: cursorWidthSpring,
          height: cursorHeightSpring,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isTargeting ? 1 : 0,
          scale: isTargeting ? 1 : 0
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut"
        }}
      >
        {/* Corner Brackets */}
        {[
          { position: 'top-0 left-0', rotation: 0 },
          { position: 'top-0 right-0', rotation: 90 },
          { position: 'bottom-0 right-0', rotation: 180 },
          { position: 'bottom-0 left-0', rotation: 270 }
        ].map(({ position, rotation }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} w-4 h-4`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isTargeting ? [0.6, 1, 0.6] : 0,
              scale: isTargeting ? [0.8, 1, 0.8] : 0
            }}
            transition={{
              duration: spinDuration,
              repeat: isTargeting ? Infinity : 0,
              ease: "easeInOut",
              delay: index * 0.1
            }}
          >
            <div
              className="w-full h-full border-t-2 border-l-2 border-primary"
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: rotation === 0 ? 'top left' : 
                               rotation === 90 ? 'top right' :
                               rotation === 180 ? 'bottom right' : 'bottom left'
              }}
            />
          </motion.div>
        ))}
        
        {/* Center crosshair (subtle) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-4 h-0.5 bg-primary/50 absolute"
            animate={{
              scaleX: isTargeting ? [0.5, 1, 0.5] : 0
            }}
            transition={{
              duration: spinDuration,
              repeat: isTargeting ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-0.5 h-4 bg-primary/50 absolute"
            animate={{
              scaleY: isTargeting ? [0.5, 1, 0.5] : 0
            }}
            transition={{
              duration: spinDuration,
              repeat: isTargeting ? Infinity : 0,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>
      
      {/* Spinning cursor when not targeting */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: !isTargeting ? 1 : 0,
          scale: !isTargeting ? 1 : 0,
          rotate: !isTargeting ? 360 : 0
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
          rotate: { duration: spinDuration, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-10 h-10 border border-primary/60 rounded-full relative">
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>
    </div>
  )
}