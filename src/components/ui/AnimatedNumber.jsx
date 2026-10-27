import { useEffect, useState, useRef } from 'react'
import { useInView, useReducedMotion, animate } from 'motion/react'

/**
 * AnimatedNumber
 * Displays an environmental statistic with a smooth, once-only count-up
 * animation upon viewport entry.
 * Strictly respects prefers-reduced-motion by rendering the exact final value immediately.
 */
export function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 1.6,
  formatId = true, // Indonesian number formatting (dots for thousands, comma for decimal)
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()

  // Format a numeric value according to Indonesian locale or raw number
  const formatValue = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return value
    if (!formatId) return Math.round(num).toString()
    return Math.round(num).toLocaleString('id-ID')
  }

  // Final verified static representation
  const finalDisplay = typeof value === 'number' ? formatValue(value) : value
  const [displayValue, setDisplayValue] = useState(() => (shouldReduceMotion ? finalDisplay : '0'))

  useEffect(() => {
    // If reduced motion is requested or value is not purely numeric, settle immediately
    if (shouldReduceMotion) {
      setDisplayValue(finalDisplay)
      return
    }

    if (!isInView) return

    // If string that cannot be animated (e.g. non-numeric), settle immediately
    const target = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^0-9.-]+/g, ''))
    if (isNaN(target)) {
      setDisplayValue(finalDisplay)
      return
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Restrained, smooth cubic ease-out
      onUpdate: (latest) => {
        setDisplayValue(formatValue(latest))
      },
      onComplete: () => {
        setDisplayValue(finalDisplay)
      },
    })

    return () => controls.stop()
  }, [isInView, value, shouldReduceMotion, duration, finalDisplay])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${finalDisplay}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {shouldReduceMotion ? finalDisplay : displayValue}
        {suffix}
      </span>
    </span>
  )
}
