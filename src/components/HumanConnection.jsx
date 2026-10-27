import { Users, Droplets, ShieldCheck, HeartHandshake } from 'lucide-react'

export function HumanConnection() {
  const points = [
    {
      icon: Users,
      title: 'Masyarakat Adat & Komunitas Lokal',
      text: 'Bagi jutaan masyarakat adat dan warga tepi hutan, ekosistem adalah sumber pangan, obat-obatan tradisional, dan identitas budaya luhur yang tidak tergantikan oleh ganti rugi apa pun.',
    },
    {
      icon: Droplets,
      title: 'Kedaulatan Air Bersih',
      text: 'Daerah Aliran Sungai (DAS) yang terjaga oleh tutupan vegetasi hutan menyediakan pasokan air minum, irigasi sawah, dan penahan erosi alami bagi jutaan penduduk di hilir.',
    },
    {
      icon: HeartHandshake,
      title: 'Tanggung Jawab Kolektif',
      text: 'Mencegah pembakaran lahan bukan hanya kewajiban petugas di garis depan, melainkan komitmen moral seluruh bangsa untuk menghentikan praktik perusakan demi kepentingan jangka pendek.',
    },
  ]

  return (
    <section className="relative py-28 sm:py-36 bg-[#101A14] border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Story Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>THE HUMAN CONNECTION</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.1]">
              WHEN A FOREST DISAPPEARS,
              <br />
              <span className="text-[#FF5A36]">THE LOSS REACHES FAR</span>
              <br />
              BEYOND THE TREES.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
              Dampak kebakaran dan hilangnya hutan tropis tidak pernah berhenti di garis batas rimba.
              Asapnya memasuki ruang kelas anak-anak kita, racun udaranya dihirup keluarga kita, dan
              hilangnya daerah resapan memicu bencana banjir bandang di musim hujan berikutnya.
            </p>

            <div className="mt-8 space-y-6">
              {points.map((pt, idx) => {
                const Icon = pt.icon
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#244B32] text-[#B6F36B]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#F2F4ED]">{pt.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed">{pt.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Large Powerful Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl group">
              <img
                src="/images/human.webp"
                alt="Aliran sungai jernih di kawasan konservasi hutan Tangkahan, Sumatera Utara, yang menjadi urat nadi kehidupan masyarakat dan ekosistem sekitar."
                className="h-[480px] sm:h-[560px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                <span className="text-[11px] font-semibold text-[#B6F36B] tracking-wider uppercase">
                  Urat Nadi Kehidupan
                </span>
                <p className="mt-1 text-xs text-[#F2F4ED] font-medium leading-relaxed">
                  Sungai di pedalaman hutan Tangkahan mengalir jernih saat hutan di hulunya terlindungi dari penebangan liar dan pembakaran.
                </p>
                <span className="mt-1 block text-[10px] text-[#A1ADA3]">
                  Foto oleh Andreiromario (CC BY-SA 4.0 via Wikimedia Commons)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
