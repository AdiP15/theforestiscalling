import { motion, useReducedMotion } from 'motion/react'
import { TreePine, ArrowUpRight } from 'lucide-react'

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion()

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#07110D] border-t border-white/10">
      {/* Background Living Forest Canopy with Calm Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/final.webp"
          alt="Pohon-pohon raksasa menjulang ke langit dengan kanopi hijau yang rimbun di Taman Nasional Gunung Gede Pangrango."
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/80 to-[#07110D]/50" />
        <div className="absolute inset-0 bg-[#14291C]/50 mix-blend-multiply" />

        {/* Calm ambient breathing light */}
        {!shouldReduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial from-[#B6F36B]/[0.08] via-transparent to-transparent blur-3xl animate-mist-slow"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 py-28 text-center flex flex-col items-center">
        {/* Category Tag */}
        <motion.div
          {...anim(0.1)}
          className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/40 bg-[#14291C]/90 px-4 py-1.5 text-xs font-bold tracking-widest text-[#B6F36B] uppercase backdrop-blur-md shadow-lg"
        >
          <TreePine className="h-3.5 w-3.5" />
          <span>HARAPAN &amp; TANGGUNG JAWAB KITA</span>
        </motion.div>

        {/* Closing Headline */}
        <motion.h2
          {...anim(0.25)}
          className="mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]"
        >
          THE NEXT GENERATION DESERVES
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6F36B] via-[#F2F4ED] to-[#B6F36B]">
            A FOREST, NOT ITS ASHES.
          </span>
        </motion.h2>

        {/* Final Campaign Core Message */}
        <motion.div
          {...anim(0.4)}
          className="mt-6 inline-block rounded-xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-md shadow-lg"
        >
          <p className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#FF5A36] uppercase">
            "THE FOREST IS CALLING. OCTOBER IS A WARNING. THE FUTURE IS STILL OURS TO PROTECT."
          </p>
        </motion.div>

        {/* Narrative text */}
        <motion.p
          {...anim(0.55)}
          className="mt-6 max-w-2xl text-base sm:text-lg text-[#A1ADA3] font-normal leading-relaxed"
        >
          Kita tidak bisa mengulang apa yang telah hangus di masa lalu. Namun bersama-sama, kita memiliki daya penuh untuk melindungi apa yang tersisa dan memastikan bumi tetap bernapas.
        </motion.p>

        {/* Final CTA Buttons */}
        <motion.div
          {...anim(0.7)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#action"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B6F36B] px-9 py-4 text-xs sm:text-sm font-bold tracking-widest text-[#07110D] uppercase transition-all duration-300 hover:bg-[#c9fb88] hover:shadow-[0_0_36px_rgba(182,243,107,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <span>LET THE FOREST LIVE</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#october-reality"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest text-[#F2F4ED] uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <span>PELAJARI KEMBALI</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
