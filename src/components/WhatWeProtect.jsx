import { Compass, Feather, Wind, Globe2, Sprout } from 'lucide-react'

export function WhatWeProtect() {
  const cards = [
    {
      id: 'biodiversity',
      theme: 'BIODIVERSITY',
      headline: 'EVERY SPECIES DESERVES A HOME.',
      description:
        'Forests provide essential habitats for countless species, including wildlife native to Indonesia seperti Orangutan, Harimau Sumatra, Badak Jawa, dan ribuan flora endemik yang tak tergantikan.',
      image: '/images/biodiversity.webp',
      alt: 'Orangutan Kalimantan (Pongo pygmaeus) bergelantungan di dahan rimbun Taman Nasional Tanjung Puting.',
      tag: 'Satwa Kunci',
      icon: Feather,
      colSpan: 'lg:col-span-7',
      aspect: 'aspect-[16/11]',
    },
    {
      id: 'air',
      theme: 'CLEAN AIR',
      headline: 'EVERY BREATH MATTERS.',
      description:
        'Healthy forests are part of the natural systems that sustain life and help regulate environmental conditions. Hutan memurnikan atmosfer dan menyaring partikulat udara.',
      image: '/images/air.webp',
      alt: 'Cahaya matahari pagi menembus kabut lembab di atas sungai hutan hujan tropis Mentawai.',
      tag: 'Kualitas Hidup',
      icon: Wind,
      colSpan: 'lg:col-span-5',
      aspect: 'aspect-[4/3] lg:aspect-auto',
    },
    {
      id: 'climate',
      theme: 'CLIMATE',
      headline: 'PROTECT THE SYSTEM THAT SUSTAINS US.',
      description:
        'Forests store carbon and influence the movement of water and energy through natural ecosystems. Lanskap gambut Rimba Raya menjadi benteng pengendali iklim bumi.',
      image: '/images/climate.webp',
      alt: 'Pemandangan udara bentang hutan konservasi gambut Rimba Raya di Kalimantan Tengah.',
      tag: 'Pengendali Iklim',
      icon: Globe2,
      colSpan: 'lg:col-span-5',
      aspect: 'aspect-[4/3] lg:aspect-auto',
    },
    {
      id: 'future',
      theme: 'FUTURE GENERATIONS',
      headline: 'LEAVE MORE THAN ASHES.',
      description:
        'The forests we protect today help preserve a living planet for generations to come. Bibit yang kita tanam dan rawat hari ini adalah warisan terpenting bagi anak cucu kita.',
      image: '/images/future.webp',
      alt: 'Warga menanam kembali bibit pohon pelindung di area restorasi dan konservasi pesisir.',
      tag: 'Restorasi Nyata',
      icon: Sprout,
      colSpan: 'lg:col-span-7',
      aspect: 'aspect-[16/11]',
    },
  ]

  return (
    <section id="protect" className="relative py-28 sm:py-36 bg-[#07110D] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
            <Compass className="h-4 w-4" />
            <span>MORE THAN TREES</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.1]">
            A FOREST IS A WORLD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6F36B] to-[#F2F4ED]">
              OF ITS OWN.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
            Hutan bukan sekadar hamparan kayu untuk ditebang. Di dalamnya terjalin jaring-jaring kehidupan yang rumit dan menopang kelangsungan peradaban kita.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.id}
                className={`${card.colSpan} group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#101A14] min-h-[380px] sm:min-h-[440px] shadow-2xl transition-all duration-500 hover:border-[#B6F36B]/40`}
              >
                {/* Image layer */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle multi-layer gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/65 to-[#07110D]/20 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold tracking-widest text-[#B6F36B] uppercase backdrop-blur-md">
                      <Icon className="h-3 w-3" />
                      {card.theme}
                    </span>
                    <span className="text-xs text-[#A1ADA3] font-mono tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F2F4ED] leading-snug group-hover:text-[#B6F36B] transition-colors">
                    {card.headline}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#A1ADA3] leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
