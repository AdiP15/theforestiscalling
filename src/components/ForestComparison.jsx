import { ImageComparison } from './ui/image-comparison'
import { Sparkles, Sliders } from 'lucide-react'

export function ForestComparison() {
  return (
    <section id="futures" className="relative py-28 sm:py-36 bg-[#101A14] border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/30 bg-[#14291C] px-3.5 py-1 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>THE FUTURE IS STILL OURS</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.1]">
            TWO POSSIBLE FUTURES.
            <br />
            <span className="text-[#B6F36B]">ONE PLANET.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Pilihan yang kita ambil hari ini menentukan rupa alam yang kita wariskan esok hari.
            Antara kanopi hijau yang berdegup dengan kehidupan, atau bentang abu yang sunyi.
          </p>
        </div>

        {/* Interactive Comparison Component */}
        <div className="mt-14 max-w-5xl mx-auto">
          <ImageComparison
            beforeImage="/images/hero.webp"
            afterImage="/images/after.webp"
            beforeAlt="Kawasan hutan hujan tropis alami Indonesia yang rimbun dan asri"
            afterAlt="Lahan gambut dan hutan sisa kebakaran yang hangus menjadi abu"
            beforeLabel="Hutan Lestari (Jika Dilindungi)"
            afterLabel="Lahan Terbakar (Jika Dibiarkan)"
          />

          <div className="mt-10 rounded-xl border border-white/10 bg-[#07110D]/70 p-6 sm:p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold tracking-wide text-[#F2F4ED] uppercase">
              "THE FUTURE IS NOT DECIDED YET."
            </h3>
            <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
              Protecting forests today means protecting the ecosystems, wildlife, and communities that depend on them.
              Kita tidak bisa mengulang apa yang telah hangus, namun kita memiliki kekuatan penuh untuk menjaga apa yang tersisa.
            </p>
            <p className="mt-3 text-[11px] text-[#A1ADA3]/70 italic">
              *Visualisasi perbandingan di atas menampilkan kontras antara ekosistem hutan hujan tropis primer dan bentang lahan gambut pasca-kebakaran.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
