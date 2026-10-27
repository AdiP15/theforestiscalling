import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react'
import { cn } from '../../lib/utils'

/**
 * ImageComparison component adapted from 21st.dev (@ibelick / motion-primitives)
 * Enhanced for effortless mouse dragging, touch support, instant cursor tracking,
 * native image drag suppression, and keyboard accessibility.
 */
export function ImageComparison({
  beforeImage,
  afterImage,
  beforeAlt = 'Sebelum',
  afterAlt = 'Sesudah',
  beforeLabel = 'Hutan Sehat (Sebelum)',
  afterLabel = 'Terbakar (Sesudah)',
  className,
}) {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const shouldReduceMotion = useReducedMotion()

  const motionValue = useMotionValue(50)
  // High stiffness and critically damped spring so cursor tracking feels direct and instantaneous
  const smoothPosition = useSpring(motionValue, {
    stiffness: 800,
    damping: 50,
    mass: 0.1,
  })

  // Calculate position percentage from viewport clientX
  const updatePosition = useCallback(
    (clientX) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      
      // Instant jump on motionValue for zero-latency mouse tracking
      motionValue.set(percent)
      setSliderPosition(percent)
    },
    [motionValue]
  )

  // Start drag on mouse down / touch start
  const handlePointerDown = (e) => {
    // Only primary button
    if (e.button !== undefined && e.button !== 0) return
    setIsDragging(true)
    updatePosition(e.clientX)
  }

  // Window-level pointer tracking for 100% reliable mouse drag even outside container
  useEffect(() => {
    if (!isDragging) return

    const handleWindowPointerMove = (e) => {
      updatePosition(e.clientX)
    }

    const handleWindowPointerUp = () => {
      setIsDragging(false)
    }

    // Set cursor grabbing globally during drag
    const originalCursor = document.body.style.cursor
    const originalUserSelect = document.body.style.userSelect
    document.body.style.cursor = 'ew-resize'
    document.body.style.userSelect = 'none'

    window.addEventListener('pointermove', handleWindowPointerMove, { passive: true })
    window.addEventListener('pointerup', handleWindowPointerUp)
    window.addEventListener('pointercancel', handleWindowPointerUp)

    return () => {
      document.body.style.cursor = originalCursor
      document.body.style.userSelect = originalUserSelect
      window.removeEventListener('pointermove', handleWindowPointerMove)
      window.removeEventListener('pointerup', handleWindowPointerUp)
      window.removeEventListener('pointercancel', handleWindowPointerUp)
    }
  }, [isDragging, updatePosition])

  const handleKeyDown = (e) => {
    let next = sliderPosition
    if (e.key === 'ArrowLeft') next = Math.max(sliderPosition - 5, 0)
    else if (e.key === 'ArrowRight') next = Math.min(sliderPosition + 5, 100)
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = 100
    else return

    e.preventDefault()
    motionValue.set(next)
    setSliderPosition(next)
  }

  // Clip paths for the before/after layers
  const rightClip = useTransform(smoothPosition, (v) => `inset(0 ${100 - v}% 0 0)`)
  const sliderLeft = useTransform(smoothPosition, (v) => `${v}%`)

  return (
    <div className={cn('relative w-full select-none', className)}>
      <div
        ref={containerRef}
        role="slider"
        aria-label="Penggeser perbandingan visual dampak kebakaran hutan"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuetext={`${Math.round(sliderPosition)} persen kanopi alami ditampilkan`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        className={cn(
          'group relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07110D] shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F36B] touch-none select-none',
          isDragging ? 'cursor-ew-resize ring-1 ring-[#B6F36B]/50' : 'cursor-ew-resize'
        )}
      >
        {/* Layer 2: After (Burned) — Full background layer */}
        <img
          src={afterImage}
          alt={afterAlt}
          draggable="false"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
          loading="lazy"
        />

        {/* Layer 1: Before (Healthy forest) — Clipped from left to slider */}
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden select-none"
          style={{ clipPath: rightClip }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            draggable="false"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
            loading="lazy"
          />
        </motion.div>

        {/* Dual Contextual Labels (pointer-events-none so mouse drags right through them) */}
        <div className="pointer-events-none absolute top-4 left-4 z-10 rounded-full border border-white/20 bg-black/65 px-3.5 py-1.5 backdrop-blur-md shadow-lg transition-opacity duration-300 select-none">
          <span className="text-xs font-semibold tracking-wider text-[#B6F36B] uppercase">
            {beforeLabel}
          </span>
        </div>

        <div className="pointer-events-none absolute top-4 right-4 z-10 rounded-full border border-white/20 bg-black/65 px-3.5 py-1.5 backdrop-blur-md shadow-lg transition-opacity duration-300 select-none">
          <span className="text-xs font-semibold tracking-wider text-[#FF5A36] uppercase">
            {afterLabel}
          </span>
        </div>

        {/* Slider Divider Line */}
        <motion.div
          className={cn(
            'pointer-events-none absolute top-0 bottom-0 z-20 w-0.5 bg-white/95 transition-shadow select-none',
            isDragging
              ? 'shadow-[0_0_20px_rgba(182,243,107,1)]'
              : 'shadow-[0_0_10px_rgba(255,255,255,0.7)] group-hover:shadow-[0_0_14px_rgba(182,243,107,0.8)]'
          )}
          style={{ left: sliderLeft }}
        >
          {/* Thumb handle with active drag response */}
          <div
            className={cn(
              'absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-[#07110D]/95 backdrop-blur-md shadow-2xl transition-all duration-150 select-none',
              isDragging
                ? 'scale-115 border-[#B6F36B] ring-4 ring-[#B6F36B]/40 shadow-[0_0_24px_rgba(182,243,107,0.7)]'
                : 'border-white/90 group-hover:scale-110 group-hover:border-[#B6F36B] group-hover:shadow-[0_0_16px_rgba(182,243,107,0.5)]'
            )}
          >
            <svg
              className={cn(
                'h-5 w-5 transition-colors',
                isDragging ? 'text-[#B6F36B]' : 'text-[#F2F4ED]'
              )}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Accessible hint and status below */}
      <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#A1ADA3]">
        <button
          type="button"
          onClick={() => {
            motionValue.set(15)
            setSliderPosition(15)
          }}
          className="hover:text-[#B6F36B] transition-colors cursor-pointer text-left"
        >
          ← Geser ke kiri (kondisi terbakar)
        </button>

        <span className="hidden sm:inline font-mono text-[11px] text-[#A1ADA3]/80">
          Posisi Pembagi: {Math.round(sliderPosition)}% · [←] [→] keyboard
        </span>

        <button
          type="button"
          onClick={() => {
            motionValue.set(85)
            setSliderPosition(85)
          }}
          className="hover:text-[#B6F36B] transition-colors cursor-pointer text-right"
        >
          Geser ke kanan (hutan lestari) →
        </button>
      </div>
    </div>
  )
}
