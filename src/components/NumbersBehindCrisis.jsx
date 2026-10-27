import { BarChart3, Satellite, Flame, Users, Landmark, ExternalLink, HelpCircle } from 'lucide-react'
import { DAILY_HOTSPOT_OBSERVATIONS } from '../data/octoberReports'
import { AnimatedNumber } from './ui/AnimatedNumber'
import { Reveal } from './ui/Reveal'

export function NumbersBehindCrisis() {
  return (
    <section id="numbers" className="relative py-28 sm:py-36 bg-[#101A14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <Reveal className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A36]/30 bg-[#07110D] px-3.5 py-1 text-xs font-bold tracking-widest text-[#FF5A36] uppercase">
            <BarChart3 className="h-3.5 w-3.5 text-[#FF5A36]" />
            <span>SECTION 04 — THE STORY BEHIND THE NUMBERS</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]">
            BEHIND EVERY NUMBER IS A PLACE,
            <br />
            <span className="text-[#FF5A36]">A COMMUNITY, AND A LIVING ECOSYSTEM.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Dalam pelaporan krisis lingkungan, angka seringkali disederhanakan hingga kehilangan konteks aslinya.
            Di bawah ini kami membedakan secara tegas antara <em>pengamatan titik panas harian satelit</em>, <em>estimasi luas area terbakar bulanan</em>, <em>dampak pemukiman warga</em>, dan <em>konsekuensi ekologis cagar alam</em>.
          </p>
        </Reveal>

        {/* Vital Science Callout Box */}
        <Reveal delay={0.1} className="mt-12 rounded-2xl border border-white/15 bg-[#07110D] p-6 sm:p-8 flex flex-col md:flex-row items-start gap-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div className="text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">
            <strong className="text-[#F2F4ED] block text-sm sm:text-base font-bold mb-1">
              Prinsip Metodologis: Titik Panas (Hotspot) ≠ Jumlah Kebakaran Hutan Pasti
            </strong>
            Hotspot adalah anomali termal suhu permukaan bumi yang tertangkap sensor satelit (seperti Terra, Aqua, SNPP, NOAA20).
            Satu titik panas tidak selalu mewakili satu kejadian kebakaran terpisah, dan penurunan angka hotspot harian tidak serta-merta berarti seluruh kebakaran telah padam (bisa dipengaruhi tutupan awan tebal atau bara gambut yang tertanam di bawah tanah). Data titik panas harian tidak boleh diakumulasikan sebagai total luas kebakaran bulan Oktober.
          </div>
        </Reveal>

        {/* 4 Categorized Metric Blocks */}
        <div className="mt-14 space-y-12">
          {/* CATEGORY 1: Daily Hotspot Observations */}
          <Reveal delay={0.15} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF5A36]/20 text-[#FF5A36]">
                  <Satellite className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#FF5A36] uppercase tracking-wider block">
                    Kategori 1 · Pengamatan Sensor Satelit
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F2F4ED]">
                    Titik Panas Harian Kepercayaan Tinggi (High Confidence Hotspots)
                  </h3>
                </div>
              </div>
              <span className="text-xs text-[#A1ADA3] font-mono">Sumber: Kementerian Kehutanan RI (SiPongi+)</span>
            </div>

            {/* Daily hotspot cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {DAILY_HOTSPOT_OBSERVATIONS.map((obs, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-[#14291C]/70 p-5 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#14291C]">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#A1ADA3] font-mono">
                      <span>{obs.date}</span>
                      <span className="text-[#B6F36B]">{obs.time}</span>
                    </div>

                    <div className="mt-4 flex items-baseline gap-2">
                      <AnimatedNumber
                        value={typeof obs.hotspotsCount === 'number' ? obs.hotspotsCount : parseInt(String(obs.hotspotsCount), 10)}
                        className="text-4xl sm:text-5xl font-extrabold text-[#F2F4ED] tabular-nums"
                      />
                      <span className="text-xs font-bold text-[#FF5A36] uppercase">Titik Panas</span>
                    </div>

                    <p className="mt-1 text-xs text-[#A1ADA3]">{obs.confidence}</p>
                    <p className="mt-3 text-xs text-[#F2F4ED] font-medium leading-relaxed">{obs.notes}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-[#A1ADA3]">{obs.change}</span>
                    <a
                      href={obs.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B6F36B] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Rilis Resmi</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CATEGORY 2 & 3 & 4 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CATEGORY 2: Burned Area Estimates (Preceding Month vs Cumulative) */}
            <Reveal delay={0.2} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF8A65] uppercase pb-3 border-b border-white/10">
                  <Flame className="h-4 w-4" />
                  <span>Kategori 2 · Estimasi Area Terbakar</span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-semibold text-[#A1ADA3] uppercase tracking-wider block">
                    Data September (Rilis 20 Okt 2026)
                  </span>
                  <div className="mt-2 text-3xl font-extrabold text-[#F2F4ED]">
                    Lonjakan &gt; 2x Lipat
                  </div>
                  <p className="text-xs text-[#A1ADA3] mt-2 leading-relaxed">
                    Data satelit Nusantara Atlas yang diberitakan Reuters (20 Okt 2026) mencatat luas terbakar bulanan September melonjak dua kali lipat dibanding Agustus akibat kemarau kering sebelum memasuki Oktober.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-[#101A14] p-3.5 text-xs">
                  <span className="text-[#B6F36B] font-semibold block">Baseline 2024 Resmi SiPongi+:</span>
                  <span className="text-[#F2F4ED] font-bold">376.805,05 Ha</span> luas kebakaran hutan dan lahan terverifikasi nasional tahun 2024.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#A1ADA3] flex items-center justify-between">
                <span>Sumber: Nusantara Atlas &amp; Reuters</span>
                <span className="text-[#FF5A36] font-mono">Bukan total Okt</span>
              </div>
            </Reveal>

            {/* CATEGORY 3: Human Impacts */}
            <Reveal delay={0.3} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5A36] uppercase pb-3 border-b border-white/10">
                  <Users className="h-4 w-4" />
                  <span>Kategori 3 · Dampak Pemukiman Warga</span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-semibold text-[#A1ADA3] uppercase tracking-wider block">
                    Bangka Belitung (Reuters, 12 Okt 2026)
                  </span>
                  <div className="mt-2 text-3xl font-extrabold text-[#FF5A36] tabular-nums">
                    <AnimatedNumber prefix="≥ " value={300} suffix=" Rumah" />
                  </div>
                  <div className="text-xl font-bold text-[#F2F4ED] mt-1 tabular-nums">
                    <AnimatedNumber prefix="± " value={500} suffix=" Jiwa Mengungsi" />
                  </div>
                  <p className="text-xs text-[#A1ADA3] mt-3 leading-relaxed">
                    Peristiwa kebakaran semak belukar gambut yang meluas di Bangka Selatan, memaksa ratusan keluarga meninggalkan tempat tinggal mereka demi keselamatan.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#A1ADA3] flex items-center justify-between">
                <span>Sumber: BPBD &amp; Reuters</span>
                <span className="text-[#FF5A36] font-mono">Spesifik Bangka</span>
              </div>
            </Reveal>

            {/* CATEGORY 4: Environmental & Cultural Consequences */}
            <Reveal delay={0.4} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 shadow-xl">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B6F36B] uppercase pb-3 border-b border-white/10">
                  <Landmark className="h-4 w-4" />
                  <span>Kategori 4 · Cagar Budaya &amp; Atmosfer</span>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-semibold text-[#A1ADA3] uppercase tracking-wider block">
                    Maros-Pangkep (30 Sep – 18 Okt 2026)
                  </span>
                  <div className="mt-2 text-3xl font-extrabold text-[#B6F36B] tabular-nums">
                    <AnimatedNumber prefix="> " value={270} suffix=" Hektare" />
                  </div>
                  <p className="text-xs text-[#A1ADA3] mt-2 leading-relaxed">
                    Area penyangga sekitar TN Bantimurung-Bulusaraung terbakar, memancarkan panas ekstrem ke situs lukisan gua berumur 51.200 tahun.
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-[#101A14] p-3.5 text-xs text-[#A1ADA3]">
                  <strong className="text-[#F2F4ED] block">16 Okt 2026:</strong> Asap gambut Kalimantan terdeteksi citra satelit menaungi atmosfer atas Jakarta dan Banten.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#A1ADA3] flex items-center justify-between">
                <span>Sumber: Reuters &amp; Jakarta Post</span>
                <span className="text-[#B6F36B] font-mono">Dampak Ekologis</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
