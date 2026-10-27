import { Home, Users, ExternalLink, ShieldAlert, HeartCrack } from 'lucide-react'
import { AnimatedNumber } from './ui/AnimatedNumber'
import { Reveal } from './ui/Reveal'

export function HumanCost() {
  return (
    <section id="human-cost" className="relative py-28 sm:py-36 bg-[#101A14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Tag */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5A36]/30 bg-[#07110D] px-3.5 py-1 text-xs font-bold tracking-widest text-[#FF5A36] uppercase">
            <HeartCrack className="h-3.5 w-3.5 text-[#FF5A36]" />
            <span>SECTION 02 — THE HUMAN COST</span>
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]">
                WHEN THE FIRE SPREADS,
                <br />
                <span className="text-[#FF5A36]">PEOPLE LOSE MORE THAN LAND.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
                Dampak kebakaran hutan dan lahan bukan abstraksi di pedalaman tak berpenghuni.
                Ketika semak belukar dan lahan gambut kering terbakar di bawah hembusan angin kencang,
                lidah api melompati parit batas dan merangsek langsung ke jantung pemukiman warga.
              </p>
            </Reveal>

            {/* In-depth Bangka Belitung Feature */}
            <Reveal delay={0.2} className="mt-8 rounded-2xl border border-[#FF5A36]/30 bg-[#07110D] p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#FF5A36] uppercase pb-3 border-b border-white/10">
                <span>Laporan Investigasi Terverifikasi</span>
                <span>Reuters · 12 Oktober 2026</span>
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#F2F4ED] leading-snug">
                Bangka Belitung: 300+ Rumah Rusak, 500 Warga Dievakuasi
              </h3>

              <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                Menurut laporan Reuters yang mengutip Badan Penanggulangan Bencana Daerah (BPBD) setempat, kobaran api lahan gambut di wilayah Bangka Selatan meluas tak terkendali menuju pemukiman warga. Embusan angin kencang menyebarkan percikan api ke atap-atap rumah, menyebabkan sedikitnya 300 rumah mengalami kerusakan berat hingga rata dengan tanah, serta memaksa sekitar 500 warga mengungsi mencari perlindungan darurat.
              </p>

              {/* Verified Metrics Grid with Count-up */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#14291C] p-4 text-center">
                  <AnimatedNumber
                    prefix="≥ "
                    value={300}
                    className="block text-3xl font-extrabold text-[#FF5A36] tabular-nums"
                  />
                  <span className="mt-1 block text-xs text-[#A1ADA3] font-medium">Rumah Terbakar / Rusak</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#14291C] p-4 text-center">
                  <AnimatedNumber
                    prefix="± "
                    value={500}
                    className="block text-3xl font-extrabold text-[#F2F4ED] tabular-nums"
                  />
                  <span className="mt-1 block text-xs text-[#A1ADA3] font-medium">Warga Dievakuasi</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#14291C] p-4 text-center flex flex-col justify-center">
                  <span className="block text-xl font-bold text-[#B6F36B]">Bangka Selatan</span>
                  <span className="mt-1 block text-xs text-[#A1ADA3] font-medium">Kepulauan Bangka Belitung</span>
                </div>
              </div>

              {/* Source Link & Disclaimer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <a
                  href="https://www.reuters.com/business/environment/wildfires-spread-into-residential-areas-indonesias-bangka-belitung-destroying-2026-10-12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#B6F36B] hover:underline"
                >
                  <span>Baca Laporan Orisinal Reuters (12 Okt 2026)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <span className="text-[11px] text-[#A1ADA3]/70 italic">
                  *Sumber: Reuters & data BPBD Bangka Belitung.
                </span>
              </div>
            </Reveal>

            {/* Scope Clarification Notice */}
            <div className="mt-4 rounded-lg bg-black/40 border border-white/5 p-3 text-xs text-[#A1ADA3]">
              <strong className="text-[#F2F4ED]">Batasan Pelaporan:</strong> Angka 300 rumah dan 500 pengungsi di atas merupakan data dokumentasi khusus insiden di Bangka Belitung per laporan 12 Oktober 2026, bukan akumulasi kerusakan pemukiman nasional.
            </div>
          </div>

          {/* Right Column: Narrative Impact Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.15} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#14291C]/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#244B32] text-[#B6F36B]">
                <Home className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-[#F2F4ED]">Kehilangan Tempat Berlindung</h4>
              <p className="mt-2 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">
                Bagi keluarga yang kehilangan rumah, kebakaran bukan hanya melenyapkan atap pelindung, tetapi juga arsip identitas, tabungan hidup, hewan ternak, dan rasa aman anak-anak mereka.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#14291C]/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#244B32] text-[#B6F36B]">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-[#F2F4ED]">Kerentanan Komunitas Pinggiran</h4>
              <p className="mt-2 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">
                Pemukiman di pinggir kawasan perkebunan dan semak belukar kering seringkali memiliki akses air hydrant yang sangat terbatas, membuat warga hanya bertumpu pada ember manual sebelum satgas pemadam tiba.
              </p>
            </Reveal>

            <Reveal delay={0.35} className="rounded-2xl border border-white/10 bg-[#07110D] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#14291C]/60">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5A36]/20 text-[#FF5A36]">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-[#F2F4ED]">Trauma & Rekonstruksi Jangka Panjang</h4>
              <p className="mt-2 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">
                Pemulihan pemukiman pasca-api membutuhkan waktu berbulan-bulan dan biaya besar di saat mata pencaharian warga sekitar yang bergantung pada kebun dan lahan ikut hangus terbakar.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
