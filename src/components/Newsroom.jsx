import { motion, useReducedMotion } from 'motion/react'
import { Newspaper, Calendar, ExternalLink, Clock, ArrowUpRight } from 'lucide-react'
import { OCTOBER_REPORTS } from '../data/octoberReports'
import { Reveal } from './ui/Reveal'

export function Newsroom() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="newsroom" className="relative py-28 sm:py-36 bg-[#07110D] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <Reveal className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/30 bg-[#14291C] px-3.5 py-1 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
            <Newspaper className="h-3.5 w-3.5 text-[#B6F36B]" />
            <span>SECTION 05 — THE NEWSROOM</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]">
            THE STORIES THAT DEFINE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6F36B] via-[#E2F79A] to-[#F2F4ED]">
              OCTOBER 2026.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Kronologi liputan investigatif terverifikasi dari media independen nasional dan internasional sepanjang 1–26 Oktober 2026.
            Setiap berita mencatat secara terpisah tanggal publikasi dan periode kejadian aktual guna menjaga akurasi konteks pelaporan.
          </p>
        </Reveal>

        {/* Timeline Layout */}
        <div className="mt-16 relative">
          {/* Subtle Vertical Timeline Guide Line with Progressive Reveal */}
          <motion.div
            initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-[#B6F36B]/60 via-white/15 to-[#FF5A36]/60"
          />

          <div className="space-y-10">
            {OCTOBER_REPORTS.map((report, idx) => (
              <motion.article
                key={report.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : Math.min(idx * 0.08, 0.4),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative md:pl-20 group"
              >
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-6 top-7 h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07110D] shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:border-[#B6F36B]">
                  <div className="h-2 w-2 rounded-full bg-[#B6F36B]" />
                </div>

                {/* Editorial Article Box */}
                <div className="rounded-2xl border border-white/10 bg-[#101A14] p-6 sm:p-9 transition-all duration-300 hover:border-[#B6F36B]/40 hover:bg-[#14291C]/80 hover:-translate-y-0.5 shadow-xl">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase font-mono ${report.badgeColor}`}>
                        {report.theme}
                      </span>
                      <span className="text-[#F2F4ED] font-bold">{report.publication}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1ADA3]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#B6F36B]" />
                        <span>Publikasi: <strong className="text-[#F2F4ED]">{report.publicationDate}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#FF8A65]" />
                        <span>Periode Kejadian: <strong className="text-[#F2F4ED]">{report.eventPeriod}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="mt-5 text-xl sm:text-2xl font-bold text-[#F2F4ED] leading-snug group-hover:text-[#B6F36B] transition-colors">
                    <a
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      <span>{report.title}</span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#B6F36B]" />
                    </a>
                  </h3>

                  {/* Summary */}
                  <p className="mt-4 text-sm sm:text-base text-[#A1ADA3] leading-relaxed">
                    {report.summary}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {report.keyMetrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-lg border border-white/10 bg-[#07110D] px-3.5 py-2 text-xs"
                      >
                        <span className="text-[#A1ADA3] block text-[10px] uppercase font-mono">{m.label}</span>
                        <span className="text-[#F2F4ED] font-bold mt-0.5 block">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Source Attribution & Disclaimer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#A1ADA3]">
                    <span>{report.sourceAttribution}</span>
                    <a
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-[#B6F36B] hover:underline"
                    >
                      <span>Buka Tautan Sumber Orisinal</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Factual Disclaimer Banner */}
                  <div className="mt-3 text-[11px] text-[#A1ADA3]/80 italic">
                    {report.disclaimer}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
