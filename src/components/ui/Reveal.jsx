import { motion, useReducedMotion } from 'motion/react'

/**
 * Editorial reveal container for headings, paragraphs, and cards
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 20,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Documentary smooth ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Reveal with gentle scale for imagery
 */
export function RevealImage({
  children,
  delay = 0,
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
