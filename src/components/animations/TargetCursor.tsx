import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'

interface TargetCursorProps {
  children: ReactNode
  className?: string
}

export function TargetCursor({ children, className = '' }: TargetCursorProps) {
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20)
      cursorY.set(e.clientY - 20)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])
  
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ cursor: isHovering ? 'none' : 'default' }}
    >
      {children}
      
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut"
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center"
          animate={{
            rotate: isHovering ? 360 : 0
          }}
          transition={{
            duration: 2,
            repeat: isHovering ? Infinity : 0,
            ease: "linear"
          }}
        >
          {/* Inner dot */}
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{
              scale: isHovering ? [1, 1.5, 1] : 1
            }}
            transition={{
              duration: 1,
              repeat: isHovering ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Crosshairs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-0.5 bg-primary absolute"
            animate={{
              scaleX: isHovering ? [1, 0.6, 1] : 1
            }}
            transition={{
              duration: 1.5,
              repeat: isHovering ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-0.5 h-8 bg-primary absolute"
            animate={{
              scaleY: isHovering ? [1, 0.6, 1] : 1
            }}
            transition={{
              duration: 1.5,
              repeat: isHovering ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Corner brackets */}
        {[0, 90, 180, 270].map((rotation) => (
          <motion.div
            key={rotation}
            className="absolute w-3 h-3 border-t-2 border-l-2 border-primary"
            style={{
              top: '2px',
              left: '2px',
              transformOrigin: 'center',
              transform: `rotate(${rotation}deg)`,
            }}
            animate={{
              opacity: isHovering ? [0.5, 1, 0.5] : 0
            }}
            transition={{
              duration: 2,
              repeat: isHovering ? Infinity : 0,
              ease: "easeInOut",
              delay: rotation / 360
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}