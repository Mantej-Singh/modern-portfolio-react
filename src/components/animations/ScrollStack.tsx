import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface ScrollStackProps {
  children: ReactNode[]
  className?: string
}

export function ScrollStack({ children, className = '' }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children.map((child, index) => {
        const start = index / children.length
        const end = (index + 1) / children.length
        
        const y = useTransform(
          scrollYProgress,
          [start, end],
          [100, -100]
        )
        
        const scale = useTransform(
          scrollYProgress,
          [start - 0.1, start, end, end + 0.1],
          [0.8, 1, 1, 0.8]
        )
        
        const opacity = useTransform(
          scrollYProgress,
          [start - 0.2, start, end, end + 0.2],
          [0, 1, 1, 0]
        )
        
        const rotate = useTransform(
          scrollYProgress,
          [start, end],
          [index % 2 === 0 ? -2 : 2, index % 2 === 0 ? 2 : -2]
        )

        return (
          <motion.div
            key={index}
            style={{
              y,
              scale,
              opacity,
              rotate,
              zIndex: children.length - index
            }}
            className={`sticky top-24 mb-8 ${index > 0 ? '-mt-24' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotate: 0,
                transition: { duration: 0.2 }
              }}
              className="transform-gpu"
            >
              {child}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}