import { useState } from 'react'
import { Share2, Trees, Flame, Check, Copy, ExternalLink, Radio } from 'lucide-react'
import { Reveal } from './ui/Reveal'

export function WhatHappensNext() {
  const [copied, setCopied] = useState(false)
  const [shareFeedback, setShareFeedback] = useState('')

  const handleShare = async () => {
    const shareData = {
      title: 'THE FOREST IS CALLING — Krisis Karhutla Oktober 2026',
      text: 'Oktober 2026 adalah peringatan nyata. Mari sebarkan informasi terverifikasi dan dukung perlindungan hutan Indonesia.',
      url: window.location.href,
    }

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        setShareFeedback('Pesan berhasil dibagikan!')
        setTimeout(() => setShareFeedback(''), 4000)
        return
      } catch (err) {
        if (err.name !== 'AbortError') {
          // fall through to clipboard
        } else {
          return
        }
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setShareFeedback('Tautan dossier kampanye disalin ke clipboard!')
      setTimeout(() => {
        setCopied(false)
        setShareFeedback('')
      }, 4000)
    } catch {
      setShareFeedback('Silakan salin URL dari bilah peramban Anda.')
      setTimeout(() => setShareFeedback(''), 4000)
    }
  }

  return (
    <section id="action" className="relative py-28 sm:py-36 bg-[#101A14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/30 bg-[#07110D] px-3.5 py-1 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
            <Radio className="h-3.5 w-3.5 text-[#B6F36B]" />
            <span>SECTION 06 — WHAT HAPPENS NEXT?</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]">
            THE FIRE MUST END.
            <br />
            <span className="text-[#B6F36B]">THE WORK CANNOT.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Ketika asap memudar dan musim hujan tiba, tantangan sesungguhnya baru dimulai: restorasi lahan gambut, pemulihan mata pencaharian warga, dan penegakan komitmen nol-pembakaran lahan.
            Berikut tindakan nyata dan kanal resmi yang dapat Anda ikuti.
          </p>
        </Reveal>

        {/* 3 Action Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* ACTION 01 */}
          <Reveal delay={0.1} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#07110D] p-8 transition-all duration-300 hover:border-[#B6F36B]/40 hover:bg-[#14291C] hover:-translate-y-1 shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#244B32] text-[#B6F36B] transition-transform duration-300 group-hover:scale-110">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="mt-6 block text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
                LANGKAH 01 — SEBARKAN INFORMASI TERPERCAYA
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#F2F4ED] leading-snug">
                Bantu Publik Memahami Realitas Karhutla
              </h3>
              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                Bagikan laporan berbasis data terverifikasi kepada komunitas Anda. Hentikan disinformasi mengenai penyebab dan dampak kebakaran hutan demi perlindungan bersama.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleShare}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#B6F36B] px-6 py-3.5 text-xs font-bold tracking-wider text-[#07110D] uppercase transition-all duration-300 hover:bg-[#c9fb88] hover:shadow-[0_0_20px_rgba(182,243,107,0.35)] active:scale-95 cursor-pointer"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'TAUTAN TERSALIN' : 'SHARE THE MESSAGE'}</span>
              </button>

              {shareFeedback && (
                <div role="status" aria-live="polite" className="mt-3 text-center text-xs font-medium text-[#B6F36B]">
                  {shareFeedback}
                </div>
              )}
            </div>
          </Reveal>

          {/* ACTION 02 */}
          <Reveal delay={0.2} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#07110D] p-8 transition-all duration-300 hover:border-[#B6F36B]/40 hover:bg-[#14291C] hover:-translate-y-1 shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#244B32] text-[#B6F36B]">
                <Trees className="h-6 w-6" />
              </div>
              <span className="mt-6 block text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
                LANGKAH 02 — DUKUNG RISET &amp; RESTORASI
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#F2F4ED] leading-snug">
                Pantau Inisiatif Konservasi Nyata
              </h3>
              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                Pelajari lembaga riset ilmiah dan inisiatif penanaman pohon yang bekerja secara independen di kawasan terdegradasi.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
              <a
                href="https://www.cifor-icraf.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-[#F2F4ED] hover:border-white/30 hover:bg-white/10 transition-all hover:translate-x-0.5"
              >
                <span>CIFOR-ICRAF (Pusat Riset Kehutanan)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#B6F36B]" />
              </a>
              <a
                href="https://lindungihutan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-[#F2F4ED] hover:border-white/30 hover:bg-white/10 transition-all hover:translate-x-0.5"
              >
                <span>LindungiHutan (Penanaman Pohon &amp; Konservasi)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#B6F36B]" />
              </a>
              <a
                href="https://kehati.or.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-[#F2F4ED] hover:border-white/30 hover:bg-white/10 transition-all hover:translate-x-0.5"
              >
                <span>Yayasan KEHATI (Keanekaragaman Hayati)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#B6F36B]" />
              </a>
            </div>
          </Reveal>

          {/* ACTION 03 */}
          <Reveal delay={0.3} className="flex flex-col justify-between rounded-2xl border border-[#FF5A36]/30 bg-[#07110D] p-8 transition-all duration-300 hover:border-[#FF5A36] hover:bg-[#14291C] hover:-translate-y-1 shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5A36]/20 text-[#FF5A36]">
                <Flame className="h-6 w-6" />
              </div>
              <span className="mt-6 block text-xs font-bold tracking-widest text-[#FF5A36] uppercase">
                LANGKAH 03 — KANAL RESMI &amp; PELAPORAN
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#F2F4ED] leading-snug">
                Portal SiPongi+ &amp; Posko Darurat
              </h3>
              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                Pantau sebaran titik panas harian atau laporkan indikasi kebakaran lahan melalui saluran resmi pemerintah. Jangan mendekati lokasi titik api aktif secara mandiri.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://sipongi.gakkum.kehutanan.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#FF5A36] bg-[#FF5A36]/15 px-6 py-3.5 text-xs font-bold tracking-wider text-[#FF5A36] uppercase hover:bg-[#FF5A36] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,90,54,0.35)] active:scale-95"
              >
                <span>KUNJUNGI SIPONGI+ KEMENHUT</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="mt-3 rounded-lg bg-black/50 p-3 text-[11px] text-[#A1ADA3] border border-white/10">
                <strong className="block text-[#F2F4ED] mb-0.5">Penafian Operasional Resmi:</strong>
                Situs web kampanye independen ini <strong>tidak menerima atau meneruskan laporan darurat secara otomatis</strong>. Silakan hubungi aparat BPBD terdekat atau Posko Manggala Agni Kementerian Kehutanan untuk respons darurat kebakaran.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
