import { motion } from 'motion/react'
import { AlertTriangle, ExternalLink, Wind, HeartPulse, TreePine, CloudRain } from 'lucide-react'

export function RealitySection() {
  const impacts = [
    {
      icon: TreePine,
      title: 'Kerusakan Ekosistem Gambut & Tropis',
      desc: 'Kebakaran lahan gambut membakar lapisan organik hingga kedalaman beberapa meter, menghancurkan bank benih alami dan memicu kebakaran bawah tanah yang sulit dipadamkan.',
    },
    {
      icon: Wind,
      title: 'Kabut Asap Lintas Wilayah',
      desc: 'Partikel mikro PM2.5 dari jelaga karhutla menyebar ratusan kilometer, mengorbankan kualitas udara kota-kota sekitar dan melumpuhkan aktivitas sosial-ekonomi.',
    },
    {
      icon: HeartPulse,
      title: 'Risiko Kesehatan Akut',
      desc: 'Infeksi Saluran Pernapasan Akut (ISPA), iritasi mata, dan gangguan paru kronis menyerang jutaan warga, terutama anak-anak, lansia, dan ibu hamil di sekitar kantong asap.',
    },
    {
      icon: CloudRain,
      title: 'Emisi Karbon Masif Global',
      desc: 'Lahan gambut Indonesia menyimpan salah satu cadangan karbon terestrial terbesar di dunia. Ketika terbakar, karbon yang tersimpan ribuan tahun terlepas seketika ke atmosfer.',
    },
  ]

  return (
    <section id="reality" className="relative py-28 sm:py-36 bg-[#07110D] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF5A36] uppercase">
            <AlertTriangle className="h-4 w-4" />
            <span>THE REALITY</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.1]">
            THIS IS NOT JUST A FIRE.
            <br />
            <span className="text-[#FF5A36]">THIS IS A LOSS OF LIFE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Setiap hektare hutan yang terbakar bukan sekadar statistik pepohonan yang hangus.
            Di dalamnya ada rumah jutaan satwa, paru-paru bumi yang menyaring udara kita, dan
            fondasi keseimbangan ekologis yang runtuh dalam hitungan jam.
          </p>
        </div>

        {/* Central Photographic & Statistic Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Editorial Photograph */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-white/10 group min-h-[380px] sm:min-h-[460px]">
            <img
              src="/images/reality.webp"
              alt="Petugas Manggala Agni sedang memadamkan titik api di kawasan hutan dan lahan gambut yang terbakar pekat asap."
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded bg-[#FF5A36]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                Dokumentasi Lapangan
              </span>
              <p className="mt-2 text-sm text-[#F2F4ED] font-medium leading-snug">
                Petugas pemadam karhutla berjuang di tengah kepulan asap pekat gambut di Kalimantan.
              </p>
              <p className="text-xs text-[#A1ADA3] mt-1">
                Foto oleh DenY Krisbiyantoro (CC BY-SA 4.0 via Wikimedia Commons)
              </p>
            </div>
          </div>

          {/* Stat Highlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#FF5A36]/20 bg-[#101A14] p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF5A36]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-[#A1ADA3] uppercase">
                <span>Data Resmi Nasional</span>
                <span className="rounded-full bg-[#FF5A36]/10 px-2.5 py-1 text-[#FF5A36]">Periode 2024</span>
              </div>

              {/* Verified Statistic Display */}
              <div className="mt-8">
                <span className="text-xs font-semibold text-[#FF5A36] tracking-widest uppercase">
                  Indikasi Luas Kebakaran Hutan & Lahan
                </span>
                <div className="mt-2 text-5xl sm:text-6xl font-black tracking-tight text-[#F2F4ED] tabular-nums">
                  376.805<span className="text-2xl sm:text-3xl font-bold text-[#FF5A36]">,05</span>
                </div>
                <div className="text-lg font-medium text-[#A1ADA3] mt-1">
                  Hektare (Ha) Hutan & Lahan Terdampak
                </div>
              </div>

              <p className="mt-6 text-sm text-[#A1ADA3] leading-relaxed">
                Meskipun mengalami penurunan dibanding puncak El Niño 2023 (1,16 juta ha), ratusan ribu hektare area terbakar di tahun 2024 tetap memberikan dampak ekologis yang parah pada keanekaragaman hayati dan kualitas udara.
              </p>
            </div>

            {/* Official Source Attribution */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2">
              <div className="text-xs text-[#A1ADA3]">
                Sumber Data Resmi:
                <strong className="block text-[#F2F4ED] font-medium mt-0.5">
                  SiPongi+ — Direktorat Pengendalian Kebakaran Hutan, Kementerian Kehutanan RI
                </strong>
              </div>
              <a
                href="https://sipongi.gakkum.kehutanan.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B6F36B] hover:underline"
              >
                <span>Kunjungi Portal SiPongi+ Kementerian Kehutanan</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Impact Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#101A14]/70 p-6 transition-all hover:border-white/20 hover:bg-[#14291C]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#244B32] text-[#B6F36B]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#F2F4ED]">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
