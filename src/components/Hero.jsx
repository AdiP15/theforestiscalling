import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, Flame, ShieldAlert, Calendar } from 'lucide-react'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const fadeIn = (delay = 0, y = 16) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#07110D]">
      {/* Background Rainforest Image with Cinematic Restrained Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/hero.webp"
          alt="Kanopi lebat hutan hujan tropis Gunung Leuser di Aceh dengan kabut atmosferik dan keanekaragaman lumut serta pakis."
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Cinematic gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/70 to-[#07110D]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07110D]/85 via-transparent to-[#07110D]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07110D]/25 to-[#07110D]/90" />

        {/* ATMOSPHERIC DEPTH: Soft Mist Layers (CSS Only, pointer-events-none) */}
        {!shouldReduceMotion && (
          <>
            {/* Drifting Mist Layer 1 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-20 top-1/4 h-2/3 bg-radial from-white/[0.04] via-[#244B32]/10 to-transparent blur-3xl animate-mist-slow"
            />
            {/* Drifting Mist Layer 2 (Opposite direction) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 bottom-10 h-1/2 bg-radial from-[#FF5A36]/[0.03] via-transparent to-transparent blur-2xl animate-mist-slow-reverse"
            />
            {/* Subtle floating forest embers / spores */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <span
                className="absolute bottom-16 left-[20%] h-1 w-1 rounded-full bg-[#B6F36B]/40 blur-[0.5px]"
                style={{ animation: 'ember-float 14s infinite ease-in-out', animationDelay: '1s' }}
              />
              <span
                className="absolute bottom-24 left-[45%] h-1.5 w-1.5 rounded-full bg-[#FF5A36]/30 blur-[0.5px]"
                style={{ animation: 'ember-float 18s infinite ease-in-out', animationDelay: '4s' }}
              />
              <span
                className="absolute bottom-12 right-[25%] h-1 w-1 rounded-full bg-[#B6F36B]/35 blur-[0.5px]"
                style={{ animation: 'ember-float 16s infinite ease-in-out', animationDelay: '7s' }}
              />
              <span
                className="absolute bottom-32 right-[40%] h-1 w-1 rounded-full bg-white/20 blur-[0.5px]"
                style={{ animation: 'ember-float 20s infinite ease-in-out', animationDelay: '10s' }}
              />
            </div>
          </>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 pt-32 pb-24 text-center flex flex-col items-center">
        {/* Campaign Label Badge */}
        <motion.div
          {...fadeIn(0.2, 14)}
          className="inline-flex items-center gap-2 rounded-full border border-[#FF5A36]/40 bg-[#14291C]/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#F2F4ED] uppercase backdrop-blur-md shadow-lg"
        >
          <Calendar className="h-3.5 w-3.5 text-[#FF5A36]" />
          <span>OCTOBER 2026 CRISIS DOSSIER</span>
          <span className="h-1 w-1 rounded-full bg-[#B6F36B]" />
          <span className="text-[#B6F36B]">A CALL TO PROTECT</span>
        </motion.div>

        {/* Campaign Statement Subheading */}
        <motion.div
          {...fadeIn(0.35, 12)}
          className="mt-6 text-xs sm:text-sm font-mono tracking-widest text-[#FF5A36] uppercase"
        >
          OCTOBER 2026 — WHEN THE FOREST BURNS, WE ALL FEEL THE CONSEQUENCES.
        </motion.div>

        {/* Oversized Progressive Editorial Headline */}
        <motion.h1
          {...fadeIn(0.5, 20)}
          className="mt-4 max-w-4xl text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.05]"
        >
          <span>WHEN THE FOREST BURNS,</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] via-[#B6F36B] to-[#F2F4ED]">
            OUR FUTURE BURNS WITH IT.
          </span>
        </motion.h1>

        {/* Supporting Narrative Text */}
        <motion.p
          {...fadeIn(0.7, 16)}
          className="mt-6 max-w-2xl text-base sm:text-xl text-[#A1ADA3] font-normal leading-relaxed"
        >
          Forests are more than trees. They are homes, living ecosystems, and part of the future we share.
          Pada Oktober 2026, lonjakan kebakaran hutan dan lahan di Indonesia mengancam pemukiman warga, cagar prasejarah purba, habitat satwa langka, dan kualitas udara jutaan jiwa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeIn(0.9, 16)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#action"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B6F36B] px-8 py-4 text-xs sm:text-sm font-bold tracking-widest text-[#07110D] uppercase transition-all duration-300 hover:bg-[#c9fb88] hover:shadow-[0_0_28px_rgba(182,243,107,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <ShieldAlert className="h-4 w-4" />
            <span>STAND FOR THE FOREST</span>
          </a>

          <a
            href="#october-reality"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest text-[#F2F4ED] uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <Flame className="h-4 w-4 text-[#FF5A36]" />
            <span>INVESTIGATE OCTOBER 2026</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          {...fadeIn(1.15, 10)}
          className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-[#A1ADA3] text-xs uppercase tracking-widest"
        >
          <span>Jelajahi Kronik Oktober</span>
          <ArrowDown className="h-4 w-4 text-[#B6F36B] animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
