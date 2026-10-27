import { useState } from 'react'
import { Share2, Trees, Flame, Check, Copy, ExternalLink, ShieldAlert } from 'lucide-react'

export function TakeAction() {
  const [copied, setCopied] = useState(false)
  const [shareFeedback, setShareFeedback] = useState('')

  const handleShare = async () => {
    const shareData = {
      title: 'THE FOREST IS CALLING — Lindungi Hutan Kita',
      text: 'Ketika hutan terbakar, masa depan kita ikut terbakar. Mari bersama jaga hutan Indonesia dari kebakaran dan perusakan.',
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
          // fall through to clipboard copy
        } else {
          return
        }
      }
    }

    // Fallback: Copy URL to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setShareFeedback('Tautan kampanye disalin ke clipboard!')
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
    <section id="action" className="relative py-28 sm:py-36 bg-[#07110D] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/30 bg-[#14291C] px-3.5 py-1 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>BE PART OF THE CHANGE</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.1]">
            THE FOREST NEEDS MORE
            <br />
            <span className="text-[#B6F36B]">THAN OUR SYMPATHY.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Perubahan besar selalu bermula dari kepedulian yang diwujudkan dalam tindakan nyata.
            Berikut tiga langkah konkret yang dapat Anda lakukan hari ini.
          </p>
        </div>

        {/* 3 Action Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ACTION 01 */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101A14] p-8 transition-all hover:border-[#B6F36B]/40 hover:bg-[#14291C]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#244B32] text-[#B6F36B]">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="mt-6 block text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
                ACTION 01 — SPREAD THE MESSAGE
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#F2F4ED] leading-snug">
                Sebarkan Suara Hutan
              </h3>
              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                Help more people understand why forests must be protected. Ajak kawan, keluarga, dan jejaring sosial Anda untuk memahami urgensi perlindungan hutan Indonesia.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleShare}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#B6F36B] px-6 py-3.5 text-xs font-bold tracking-wider text-[#07110D] uppercase transition-all hover:bg-[#c9fb88] active:scale-95 cursor-pointer"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'TAUTAN TERSALIN' : 'SHARE THE MESSAGE'}</span>
              </button>

              {shareFeedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-3 text-center text-xs font-medium text-[#B6F36B]"
                >
                  {shareFeedback}
                </div>
              )}
            </div>
          </div>

          {/* ACTION 02 */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101A14] p-8 transition-all hover:border-[#B6F36B]/40 hover:bg-[#14291C]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#244B32] text-[#B6F36B]">
                <Trees className="h-6 w-6" />
              </div>
              <span className="mt-6 block text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
                ACTION 02 — SUPPORT CONSERVATION
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#F2F4ED] leading-snug">
                Dukung Inisiatif Konservasi
              </h3>
              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                Learn about credible forest conservation and restoration initiatives. Kenali lembaga riset dan organisasi lapangan terverifikasi yang mendedikasikan upaya untuk menjaga keanekaragaman hayati.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
              <a
                href="https://www.cifor-icraf.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-[#F2F4ED] hover:border-white/30 hover:bg-white/10 transition-colors"
              >
                <span>CIFOR-ICRAF (Pusat Riset Kehutanan)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#B6F36B]" />
              </a>
              <a
                href="https://lindungihutan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-[#F2F4ED] hover:border-white/30 hover:bg-white/10 transition-colors"
              >
                <span>LindungiHutan (Gerakan Penanaman Pohon)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#B6F36B]" />
              </a>
              <a
                href="https://kehati.or.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-[#F2F4ED] hover:border-white/30 hover:bg-white/10 transition-colors"
              >
                <span>Yayasan KEHATI (Keanekaragaman Hayati)</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#B6F36B]" />
              </a>
              <p className="text-[10px] text-[#A1ADA3] mt-2 italic">
                *Tautan referensi eksternal untuk studi mandiri; kampanye independen ini tidak berafiliasi resmi atau mengumpulkan donasi langsung.
              </p>
            </div>
          </div>

          {/* ACTION 03 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#FF5A36]/30 bg-[#101A14] p-8 transition-all hover:border-[#FF5A36] hover:bg-[#14291C]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5A36]/20 text-[#FF5A36]">
                <Flame className="h-6 w-6" />
              </div>
              <span className="mt-6 block text-xs font-bold tracking-widest text-[#FF5A36] uppercase">
                ACTION 03 — REPORT A FIRE
              </span>
              <h3 className="mt-2 text-xl font-bold text-[#F2F4ED] leading-snug">
                Pantau & Laporkan Karhutla
              </h3>
              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                If you encounter a suspected forest or land fire, use the appropriate official reporting channels and avoid entering dangerous areas. Jangan mendekati lokasi titik api aktif secara mandiri.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://sipongi.gakkum.kehutanan.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#FF5A36] bg-[#FF5A36]/15 px-6 py-3.5 text-xs font-bold tracking-wider text-[#FF5A36] uppercase hover:bg-[#FF5A36] hover:text-white transition-all active:scale-95"
              >
                <span>VISIT OFFICIAL RESOURCES</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="mt-3 rounded-lg bg-black/40 p-3 text-[11px] text-[#A1ADA3] border border-white/5">
                <strong className="block text-[#F2F4ED]">Perhatian Penting:</strong>
                Situs kampanye edukatif ini tidak mengirimkan laporan darurat otomatis. Gunakan kanal resmi Kementerian Kehutanan (SiPongi+) atau hubungi Posko Manggala Agni setempat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
