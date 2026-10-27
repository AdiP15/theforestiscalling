import { AlertCircle, Flame, Compass } from 'lucide-react'
import { ImageComparison } from './ui/image-comparison'
import { Reveal, RevealImage } from './ui/Reveal'

export function OctoberReality() {
  return (
    <section id="october-reality" className="relative py-28 sm:py-36 bg-[#07110D] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <Reveal className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A36]/30 bg-[#14291C] px-3.5 py-1 text-xs font-bold tracking-widest text-[#FF5A36] uppercase">
            <Flame className="h-3.5 w-3.5 text-[#FF5A36]" />
            <span>SECTION 01 — THE REALITY OF OCTOBER</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]">
            THIS OCTOBER, THE FIRE REACHED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] via-[#FF8A65] to-[#F2F4ED]">
              FAR BEYOND THE FOREST.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Sepanjang tanggal 1 hingga 26 Oktober 2026, kebakaran hutan dan lahan (karhutla) di Indonesia memasuki babak kritis.
            Kombinasi cuaca kering ekstrem, angin muson kencang, dan kerentanan lahan gambut yang terdegradasi mendorong lidah api menembus batas-batas tradisional rimba—menjalar ke pemukiman warga di Bangka Belitung, mengepung cagar lukisan purba di Maros-Pangkep, menekan koridor satwa di taman nasional, serta menyebarkan selimut asap aerosol hingga melintasi Laut Jawa.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#A1ADA3]/80 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
            <AlertCircle className="h-4 w-4 text-[#FF5A36] shrink-0" />
            <span>
              <strong>Catatan Faktual:</strong> Rekapitulasi resmi luas lahan terbakar nasional untuk keseluruhan bulan Oktober belum dirilis penuh oleh otoritas berwenang. Dossier ini hanya menyajikan data harian terverifikasi dan laporan lapangan aktual.
            </span>
          </div>
        </Reveal>

        {/* Central Photographic & Comparative Investigation */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Real Field Photo Banner */}
          <RevealImage delay={0.15} className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101A14] overflow-hidden group shadow-xl">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src="/images/reality.webp"
                alt="Petugas Manggala Agni sedang berupaya mengisolasi dan memadamkan titik api di kawasan lahan gambut pekat asap di Kalimantan."
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A14] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold text-[#FF5A36] uppercase backdrop-blur-md">
                Garis Depan Karhutla
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F2F4ED] leading-snug">
                  Manggala Agni & Satgas Gabungan Menahan Bara Bawah Tanah
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">
                  Di lahan gambut, bara api dapat tertanam hingga kedalaman 3–5 meter di bawah permukaan, mengeluarkan asap pekat tanpa kobaran api terbuka. Hal ini menuntut ribuan liter air dan injeksi nozzle gambut ke dalam tanah selama berminggu-minggu.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#A1ADA3]">
                Dokumentasi Lapangan: DenY Krisbiyantoro (CC BY-SA 4.0 via Wikimedia Commons)
              </div>
            </div>
          </RevealImage>

          {/* Interactive Before & After Slider (Preserved 21st.dev Component) */}
          <Reveal delay={0.25} className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101A14] p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#F2F4ED] uppercase">
                <Compass className="h-4 w-4 text-[#B6F36B]" />
                <span>Bukti Visual: Kontras Kehancuran & Kelestarian</span>
              </div>
              <span className="text-[11px] text-[#B6F36B] font-mono">21st.dev Interactive Slider</span>
            </div>

            <div className="my-6">
              <ImageComparison
                beforeImage="/images/hero.webp"
                afterImage="/images/after.webp"
                beforeAlt="Hutan hujan tropis rimbun alami di Indonesia"
                afterAlt="Bentang lahan gambut yang hangus menjadi abu akibat karhutla"
                beforeLabel="Kanopi Hutan Alami"
                afterLabel="Kondisi Pasca-Karhutla"
              />
            </div>

            <p className="text-xs text-[#A1ADA3] leading-relaxed">
              Pergeseran dari kanopi hijau berlumut ke hamparan tanah berjelaga hitam bukan sekadar perbedaan warna—ini adalah hilangnya cadangan karbon ribuan tahun, matinya mikroorganisme tanah, dan hilangnya ruang hidup satwa.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
