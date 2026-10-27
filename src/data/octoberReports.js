/**
 * Verified reporting and official monitoring data for
 * Indonesia's Forest and Land Fires — October 2026.
 *
 * Strict editorial separation between:
 * - Publication date vs. Event date
 * - Daily satellite thermal hotspots vs. confirmed fires
 * - Prior-month burned area figures (Sept) vs. October figures
 */

export const OCTOBER_REPORTS = [
  {
    id: 'bangka-belitung',
    publication: 'Reuters',
    publicationDate: '12 Oktober 2026',
    eventPeriod: 'Awal–Pertengahan Oktober 2026',
    title: "Wildfires spread into residential areas in Indonesia's Bangka Belitung, destroying homes",
    url: 'https://www.reuters.com/business/environment/wildfires-spread-into-residential-areas-indonesias-bangka-belitung-destroying-2026-10-12/',
    theme: 'KORBAN & PEMUKIMAN',
    editorialAngle: 'THE HUMAN COST OF FIRE',
    badgeColor: 'border-[#FF5A36] text-[#FF5A36] bg-[#FF5A36]/10',
    summary:
      'Kebakaran lahan gambut dan semak belukar yang dipicu angin kencang merembet ke kawasan permukiman di Bangka Selatan. Sedikitnya 300 rumah warga dilaporkan rusak atau musnah, dan sekitar 500 warga terpaksa mengungsi ke tempat penampungan sementara.',
    keyMetrics: [
      { label: 'Rumah Terdampak / Rusak', value: '≥ 300 unit' },
      { label: 'Warga Mengungsi', value: '± 500 jiwa' },
      { label: 'Wilayah Terdampak', value: 'Bangka Selatan, Kep. Bangka Belitung' },
    ],
    sourceAttribution: 'Laporan Reuters mengutip BPBD Bangka Belitung & aparat penanggulangan bencana daerah.',
    disclaimer: 'Data mencerminkan dampak spesifik di wilayah Bangka Belitung, bukan angka kumulatif nasional.',
  },
  {
    id: 'national-parks',
    publication: 'The Jakarta Post',
    publicationDate: '13 Oktober 2026',
    eventPeriod: 'Oktober 2026',
    title: 'Wildfires in national parks threaten biodiversity as firefighting gaps persist',
    url: 'https://www.thejakartapost.com/indonesia/2026/10/13/wildfires-in-national-parksthreaten-biodiversityas-firefighting-gaps-persist',
    theme: 'HABITAT & KONSERVASI',
    editorialAngle: 'A FOREST IS MORE THAN TREES',
    badgeColor: 'border-[#B6F36B] text-[#B6F36B] bg-[#B6F36B]/10',
    summary:
      'Titik api aktif terdeteksi mendekati zona inti dan koridor satwa di sejumlah taman nasional di Kalimantan dan Sumatra, termasuk habitat gambut Sebangau dan Tanjung Puting. Keterbatasan sumber air dan peralatan pemadaman di pedalaman menekan kerja tim Manggala Agni dan jagawana di garis depan.',
    keyMetrics: [
      { label: 'Kawasan Terancam', value: 'Taman Nasional di Kalimantan & Sumatra' },
      { label: 'Satwa Kunci Rentan', value: 'Orangutan, Bekantan, Flora Gambut' },
      { label: 'Status Laporan', value: 'Ancaman Kerusakan Habitat (Bukan Angka Kematian Satwa Terkonfirmasi)' },
    ],
    sourceAttribution: 'The Jakarta Post mengutip pengelola balai taman nasional dan koalisi konservasi lingkungan.',
    disclaimer: 'Laporan mencatat keterancaman habitat alami; tidak ada data resmi kematian satwa yang dapat diverifikasi.',
  },
  {
    id: 'jakarta-smoke',
    publication: 'The Jakarta Post',
    publicationDate: '16 Oktober 2026',
    eventPeriod: '15–16 Oktober 2026',
    title: 'Smoke from Kalimantan fires reaches Jakarta skies',
    url: 'https://www.thejakartapost.com/indonesia/2026/10/16/smoke-from-kalimantan-fires-reaches-jakarta-skies',
    theme: 'SEBARAN ATMOSFERIK',
    editorialAngle: 'THE IMPACT DOES NOT STOP WHERE THE FIRE ENDS',
    badgeColor: 'border-amber-400 text-amber-300 bg-amber-400/10',
    summary:
      'Citra satelit mendeteksi lapisan asap pekat dari kebakaran lahan gambut di Kalimantan Tengah dan Barat terbawa angin monsun melintasi Laut Jawa hingga menaungi atmosfer bagian atas Banten, DKI Jakarta, dan Jawa Barat.',
    keyMetrics: [
      { label: 'Jangkauan Sebaran', value: 'Kalimantan → Laut Jawa → Jakarta & Banten' },
      { label: 'Metode Pengamatan', value: 'Sensor Citra Satelit Aerosol Optik' },
      { label: 'Catatan Ilmiah', value: 'Asap di lapisan udara atas; tidak secara langsung membuktikan kenaikan polutan permukaan tanah semata.' },
    ],
    sourceAttribution: 'The Jakarta Post mengutip data pantauan satelit meteorologi dan dinas lingkungan hidup.',
    disclaimer: 'Deteksi satelit membuktikan daya jangkau asap lintas pulau, namun kualitas udara permukaan dipengaruhi banyak faktor lokal.',
  },
  {
    id: 'burned-area-sept',
    publication: 'Reuters',
    publicationDate: '20 Oktober 2026',
    eventPeriod: 'Januari – September 2026 (Lonjakan Tajam September)',
    title: "Indonesia's burned land doubles in September as fires rage, data shows",
    url: 'https://www.reuters.com/business/environment/indonesias-burned-land-doubles-september-fires-rage-data-shows-2026-10-20/',
    theme: 'STATISTIK INDEPENDEN',
    editorialAngle: 'THE NUMBERS BEHIND THE CRISIS',
    badgeColor: 'border-orange-400 text-orange-300 bg-orange-400/10',
    summary:
      'Data satelit pemantauan independen Nusantara Atlas menunjukkan luas area terbakar bulanan pada September melonjak lebih dari dua kali lipat dibanding Agustus akibat kemarau berkepanjangan sebelum memasuki fase kritis Oktober.',
    keyMetrics: [
      { label: 'Periode Analisis', value: 'September 2026 (Publikasi 20 Oktober 2026)' },
      { label: 'Dinamika Bulanan', value: 'Luas area terbakar September melonjak > 2x lipat dibanding Agustus' },
      { label: 'Basis Data', value: 'Analisis Citra Satelit Optik & Radar Nusantara Atlas' },
    ],
    sourceAttribution: 'Reuters mengutip rilis data riset deforestasi dan karhutla Nusantara Atlas.',
    disclaimer: 'PENTING: Ini adalah rekapitulasi data September yang dirilis pada Oktober, BUKAN total luas terbakar bulan Oktober.',
  },
  {
    id: 'maros-pangkep',
    publication: 'Reuters',
    publicationDate: '23 Oktober 2026',
    eventPeriod: '30 September – 18 Oktober 2026',
    title: "World's oldest cave paintings in Indonesia under threat from wildfires",
    url: 'https://www.reuters.com/world/asia-pacific/worlds-oldest-cave-paintings-indonesia-under-threat-wildfires-2026-10-23/',
    theme: 'WARISAN BUDAYA DUNIA',
    editorialAngle: 'WHAT WE CANNOT AFFORD TO LOSE',
    badgeColor: 'border-[#B6F36B] text-[#B6F36B] bg-[#B6F36B]/10',
    summary:
      'Kebakaran hutan dan lahan di perbukitan karst kawasan Taman Nasional Bantimurung-Bulusaraung (Maros-Pangkep, Sulawesi Selatan) membakar lebih dari 270 hektare bentang alam di sekitarnya. Arkeolog mengingatkan radiasi panas ekstrem dan partikel jelaga mengancam kelestarian lukisan dinding gua tertua di dunia yang berusia lebih dari 50.000 tahun.',
    keyMetrics: [
      { label: 'Luas Area Terbakar Sekitar', value: '> 270 Hektare (30 Sep – 18 Okt)' },
      { label: 'Usia Cagar Prasejarah', value: '± 51.200 tahun (Lukisan Naratif Tertua)' },
      { label: 'Lokasi Terdampak', value: 'Kawasan Karst Maros-Pangkep, Sulsel' },
    ],
    sourceAttribution: 'Reuters mengutip Pusat Riset Arkeologi Prasejarah BRIN, Balai Pelestarian Kebudayaan, dan pengelola TN Bantimurung-Bulusaraung.',
    disclaimer: 'Angka 270 ha adalah luas area taman nasional sekitar yang terbakar antara 30 Sep – 18 Okt 2026.',
  },
  {
    id: 'disaster-status',
    publication: 'The Jakarta Post',
    publicationDate: '26 Oktober 2026',
    eventPeriod: 'Akhir Oktober 2026',
    title: "Govt's defiance over wildfire disaster status faces scrutiny",
    url: 'https://www.thejakartapost.com/indonesia/2026/10/26/govts-defiance-over-wildfire-disaster-status-faces-scrutiny',
    theme: 'TATA KELOLA & KEBIJAKAN',
    editorialAngle: 'ACCOUNTABILITY AND RESPONSE',
    badgeColor: 'border-[#FF5A36] text-[#FF5A36] bg-[#FF5A36]/10',
    summary:
      'Perdebatan publik mengemuka antara desakan kelompok masyarakat sipil untuk menetapkan status tanggap darurat bencana nasional guna membuka percepatan dana penanggulangan, berhadapan dengan sikap pemerintah yang menilai satgas gabungan daerah (TNI, Polri, Manggala Agni, dan pemda) masih mampu mengendalikan kebakaran di tingkat provinsi.',
    keyMetrics: [
      { label: 'Isu Pokok', value: 'Perdebatan Status Darurat Nasional vs. Provinsi' },
      { label: 'Argumen Pemerintah', value: 'Operasi lapangan terpadu masih bekerja di tingkat daerah' },
      { label: 'Tuntutan Koalisi Sipil', value: 'Percepatan alokasi anggaran penanganan asap & kesehatan' },
    ],
    sourceAttribution: 'The Jakarta Post merangkum dinamika rapat dengar pendapat, pernyataan menteri terkait, dan rilis koalisi masyarakat sipil.',
    disclaimer: 'Mencerminkan debat kebijakan publik secara objektif; bukan kesimpulan hukum atau vonis sepihak.',
  },
]

export const DAILY_HOTSPOT_OBSERVATIONS = [
  {
    date: '21 Oktober 2026',
    time: '21:00 WIB',
    hotspotsCount: 808,
    confidence: 'Tingkat Kepercayaan Tinggi (High Confidence)',
    change: 'Naik dari hari sebelumnya',
    source: 'Kementerian Kehutanan RI — SiPongi+',
    sourceUrl: 'https://www.kehutanan.go.id/pers/hotspot-naik-operasi-dan-penegakan-hukum-diperkuat',
    notes: 'Pemerintah memperkuat patroli udara (water bombing) dan penegakan hukum terhadap pelaku pembakaran.',
  },
  {
    date: '23 Oktober 2026',
    time: '21:00 WIB',
    hotspotsCount: 1336,
    confidence: 'Tingkat Kepercayaan Tinggi (High Confidence)',
    change: 'Puncak mingguan pengamatan satelit',
    source: 'Kementerian Kehutanan RI — SiPongi+',
    sourceUrl: 'https://www.kehutanan.go.id/pers/hotspot-turun-1-019-titik-operasi-karhutla-dan-perlindungan-satwa-tetap-diperkuat-2',
    notes: 'Kondisi cuaca terik dan angin kencang meningkatkan anomali termal permukaan.',
  },
  {
    date: '24 Oktober 2026',
    time: '21:00 WIB',
    hotspotsCount: 317,
    confidence: 'Tingkat Kepercayaan Tinggi (High Confidence)',
    change: 'Turun 1.019 titik dibanding 23 Oktober',
    source: 'Kementerian Kehutanan RI — SiPongi+',
    sourceUrl: 'https://www.kehutanan.go.id/pers/hotspot-turun-1-019-titik-operasi-karhutla-dan-perlindungan-satwa-tetap-diperkuat-2',
    notes: 'Operasi modifikasi cuaca (TMC) dan hujan lokal menurunkan anomali panas secara tajam.',
  },
]
