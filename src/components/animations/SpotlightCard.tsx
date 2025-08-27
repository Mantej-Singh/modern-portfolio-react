import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({ 
  children, 
  className = '', 
  spotlightColor = 'hsl(var(--primary))' 
}: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]))
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
        style={{
          background: `radial-gradient(circle 300px at ${mouseX.get() + 200}px ${mouseY.get() + 200}px, ${spotlightColor}20, transparent 40%)`,
        }}
        animate={{
          background: isHovered 
            ? `radial-gradient(circle 300px at ${mouseX.get() + 200}px ${mouseY.get() + 200}px, ${spotlightColor}20, transparent 40%)`
            : `radial-gradient(circle 300px at 200px 200px, ${spotlightColor}00, transparent 40%)`
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, ${spotlightColor}30, transparent, ${spotlightColor}30)`,
          padding: '1px',
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0
        }}
      >
        <div className="w-full h-full bg-background rounded-lg" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-lg"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${spotlightColor}10 50%, transparent 70%)`,
          transform: 'translateX(-100%)',
        }}
        animate={{
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          opacity: isHovered ? [0, 0.5, 0] : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}