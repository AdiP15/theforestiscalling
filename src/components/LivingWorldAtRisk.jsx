import { TreePine, Feather, Landmark, ExternalLink } from 'lucide-react'
import { Reveal, RevealImage } from './ui/Reveal'

export function LivingWorldAtRisk() {
  return (
    <section id="living-world" className="relative py-28 sm:py-36 bg-[#07110D] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Tag */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/30 bg-[#14291C] px-3.5 py-1 text-xs font-bold tracking-widest text-[#B6F36B] uppercase">
            <TreePine className="h-3.5 w-3.5 text-[#B6F36B]" />
            <span>SECTION 03 — THE LIVING WORLD AT RISK</span>
          </div>

          <div className="mt-5 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F4ED] leading-[1.08]">
              EVERY FOREST HOLDS A WORLD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6F36B] via-[#E2F79A] to-[#F2F4ED]">
                WE CANNOT REPLACE.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#A1ADA3] leading-relaxed">
              Hutan tropis Indonesia adalah rumah bagi satwa endemik tak ternilai sekaligus penjaga jejak peradaban tertua umat manusia. Pada Oktober 2026, kebakaran tidak hanya mengancam pepohonan, tetapi juga menekan ekosistem cagar alam dan warisan budaya purba yang tak tergantikan.
            </p>
          </div>
        </Reveal>

        {/* Feature Grid: 2 In-depth Stories */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: National Parks & Wildlife Habitats */}
          <RevealImage delay={0.15} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101A14] overflow-hidden group shadow-xl">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src="/images/biodiversity.webp"
                alt="Orangutan Kalimantan (Pongo pygmaeus) di kanopi rimbun habitat alaminya di Taman Nasional Tanjung Puting."
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A14] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold text-[#B6F36B] uppercase backdrop-blur-md flex items-center gap-1.5">
                <Feather className="h-3.5 w-3.5" />
                <span>The Jakarta Post · 13 Okt 2026</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#B6F36B] tracking-wider uppercase">
                  A FOREST IS MORE THAN TREES
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#F2F4ED] leading-snug">
                  Api Mengepung Taman Nasional: Habitat Satwa Endemik Terdesak
                </h3>
                <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                  Laporan The Jakarta Post (13 Oktober 2026) mengungkapkan titik-titik kebakaran hutan mulai mendekati zona penyangga dan koridor jelajah satwa di sejumlah taman nasional di Kalimantan dan Sumatra, termasuk Tanjung Puting dan Sebangau. Kondisi gambut kering dan keterbatasan air pedalaman memberi beban berat bagi jagawana dan tim pemadam.
                </p>

                {/* Important Factuality Note */}
                <div className="mt-4 rounded-xl border border-white/10 bg-[#07110D] p-4 text-xs text-[#A1ADA3]">
                  <strong className="text-[#B6F36B] block mb-1">Integritas Data Satwa:</strong>
                  Laporan resmi mengonfirmasi ancaman degradasi habitat, penyempitan ruang jelajah, dan paparan asap pekat pada primata. Laporan ini <em>tidak mencatat angka kematian satwa</em> dan kampanye ini tidak mengarang estimasi korban satwa tanpa verifikasi forensik balai konservasi.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <a
                  href="https://www.thejakartapost.com/indonesia/2026/10/13/wildfires-in-national-parksthreaten-biodiversityas-firefighting-gaps-persist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#B6F36B] hover:underline"
                >
                  <span>Baca di The Jakarta Post</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-[11px] text-[#A1ADA3]">Foto: Thomas Fuhrmann (CC BY-SA 4.0)</span>
              </div>
            </div>
          </RevealImage>

          {/* Card 2: Maros-Pangkep Prehistoric Cave Art Threat */}
          <RevealImage delay={0.25} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#101A14] overflow-hidden group shadow-xl">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src="/images/maros_art.webp"
                alt="Panel lukisan dinding cadas prasejarah di Leang Tedongnge kawasan karst Maros-Pangkep Sulawesi Selatan yang berusia lebih dari 51.000 tahun."
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A14] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold text-[#FF5A36] uppercase backdrop-blur-md flex items-center gap-1.5">
                <Landmark className="h-3.5 w-3.5" />
                <span>Reuters · 23 Okt 2026</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#FF5A36] tracking-wider uppercase">
                  WHAT WE CANNOT AFFORD TO LOSE
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#F2F4ED] leading-snug">
                  Maros-Pangkep: Lukisan Cadas Tertua di Dunia Terancam Asap & Radiasi Api
                </h3>
                <p className="mt-3 text-sm text-[#A1ADA3] leading-relaxed">
                  Laporan Reuters (23 Oktober 2026) mendokumentasikan kebakaran lahan di perbukitan karst sekitar Taman Nasional Bantimurung-Bulusaraung, Sulawesi Selatan. Lebih dari <strong>270 hektare</strong> area penyangga dilaporkan terbakar antara 30 September hingga 18 Oktober. Arkeolog memperingatkan panas ekstrem dan jelaga asam mengancam lukisan naratif tertua di dunia (~51.200 tahun).
                </p>

                {/* Karst Area Detail */}
                <div className="mt-4 rounded-xl border border-white/10 bg-[#07110D] p-4 text-xs text-[#A1ADA3]">
                  <div className="flex items-center gap-2 text-[#F2F4ED] font-semibold mb-1">
                    <span>Cagar Budaya Prasejarah Dunia:</span>
                  </div>
                  Batuan kapur karst rentan terhadap pengelupasan akibat fluktuasi suhu tajam dari api semak di sekitarnya. Kerusakan pigmen oker merah pada dinding gua bersifat permanen dan tidak dapat diperbaiki.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <a
                  href="https://www.reuters.com/world/asia-pacific/worlds-oldest-cave-paintings-indonesia-under-threat-wildfires-2026-10-23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#B6F36B] hover:underline"
                >
                  <span>Baca di Reuters (23 Okt 2026)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-[11px] text-[#A1ADA3]">Foto: AA Oktaviana (CC BY-SA 4.0)</span>
              </div>
            </div>
          </RevealImage>
        </div>

        {/* Karst Landscape Context Banner */}
        <Reveal delay={0.2} className="mt-8 rounded-2xl border border-white/10 bg-[#101A14] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="h-28 w-full sm:w-48 shrink-0 overflow-hidden rounded-xl border border-white/10">
            <img
              src="/images/maros_karst.webp"
              alt="Bentang alam pegunungan karst di Taman Nasional Bantimurung Bulusaraung, Maros-Pangkep."
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#F2F4ED] uppercase tracking-wider">
              Bentang Karst Bantimurung-Bulusaraung
            </h4>
            <p className="mt-1 text-xs text-[#A1ADA3] leading-relaxed">
              Ekosistem karst Maros-Pangkep memiliki kelembapan mikro yang unik dan menjadi habitat kupu-kupu langka serta gua-gua arkeologi kelas dunia. Menjaga tutupan vegetasi karst dari kebakaran adalah keharusan mutlak untuk menjaga stabilitas batuan dan warisan peradaban purba.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
