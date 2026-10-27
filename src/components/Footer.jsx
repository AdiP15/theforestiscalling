import { useState } from 'react'
import { ArrowUp, Camera, ExternalLink, X, ShieldAlert } from 'lucide-react'
import creditsData from '../data/credits.json'

export function Footer() {
  const [showCredits, setShowCredits] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const officialLinks = [
    { name: 'SiPongi+ Sistem Pemantauan Karhutla (Kemenhut)', url: 'https://sipongi.gakkum.kehutanan.go.id/' },
    { name: 'Kementerian Kehutanan Republik Indonesia', url: 'https://kehutanan.go.id/' },
    { name: 'BMKG — Peringatan Dini Kebakaran Hutan & Lahan', url: 'https://www.bmkg.go.id/' },
    { name: 'BNPB — Badan Nasional Penanggulangan Bencana', url: 'https://bnpb.go.id/' },
  ]

  const navLinks = [
    { label: 'October Reality', href: '#october-reality' },
    { label: 'The Human Cost', href: '#human-cost' },
    { label: 'Living World at Risk', href: '#living-world' },
    { label: 'The Story Behind Numbers', href: '#numbers' },
    { label: 'The Newsroom', href: '#newsroom' },
    { label: 'What Happens Next', href: '#action' },
  ]

  return (
    <footer className="relative bg-[#07110D] border-t border-white/10 pt-20 pb-12 text-sm text-[#A1ADA3]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Closing statement */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-base font-extrabold tracking-widest text-[#F2F4ED] uppercase">
                <span className="h-3 w-3 rounded-full bg-[#FF5A36] shadow-[0_0_8px_#FF5A36]" />
                <span>THE FOREST IS CALLING</span>
              </div>
              <p className="mt-4 text-xs font-semibold tracking-wider text-[#FF5A36] uppercase font-mono">
                OCTOBER 2026 — WHEN THE FOREST BURNS, WE ALL FEEL THE CONSEQUENCES.
              </p>
              <p className="mt-4 text-xs text-[#A1ADA3] max-w-md leading-relaxed">
                Inisiatif kampanye dan pelaporan visual independen berbasis data terverifikasi untuk mendokumentasikan krisis kebakaran hutan dan lahan di Indonesia selama periode 1–26 Oktober 2026.
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowCredits(true)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#B6F36B] hover:underline cursor-pointer"
              >
                <Camera className="h-3.5 w-3.5" />
                <span>Atribusi &amp; Lisensi Fotografi (Wikimedia Commons)</span>
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-[#F2F4ED] uppercase">Navigasi Investigasi</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-xs hover:text-[#B6F36B] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-[#F2F4ED] uppercase">Kanal Resmi Pemantauan</h4>
            <ul className="mt-4 space-y-2.5">
              {officialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs hover:text-[#B6F36B] transition-colors"
                  >
                    <span>{item.name}</span>
                    <ExternalLink className="h-3 w-3 text-[#B6F36B]/60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1ADA3]">
          <div>
            © {new Date().getFullYear()} THE FOREST IS CALLING — Investigasi Editorial &amp; Kesadaran Lingkungan Hidup.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F2F4ED] hover:text-[#B6F36B] transition-colors cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Photo Attribution Modal */}
      {showCredits && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="credits-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/20 bg-[#07110D] p-6 sm:p-8 text-left shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 id="credits-title" className="text-base font-bold text-[#F2F4ED] uppercase tracking-wider flex items-center gap-2">
                <Camera className="h-4 w-4 text-[#B6F36B]" />
                Atribusi Fotografi Resmi
              </h3>
              <button
                type="button"
                onClick={() => setShowCredits(false)}
                aria-label="Tutup modal"
                className="rounded-lg p-1 text-[#A1ADA3] hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 text-xs text-[#A1ADA3] leading-relaxed">
              Seluruh citra fotografi dalam kampanye ini adalah karya dokumentasi nyata dari fotografer terverifikasi di Indonesia, dilisensikan melalui Wikimedia Commons di bawah lisensi Creative Commons (CC BY-SA 4.0 / CC BY):
            </p>

            <div className="mt-6 space-y-4">
              {Object.entries(creditsData).map(([key, val]) => (
                <div key={key} className="rounded-lg border border-white/10 bg-[#101A14] p-3 text-xs">
                  <div className="font-semibold text-[#F2F4ED]">{val.title}</div>
                  <div className="mt-1 text-[#A1ADA3] flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>Fotografer: <strong className="text-[#F2F4ED]">{val.author || 'Wikimedia Contributor'}</strong></span>
                    <span>Lisensi: <strong className="text-[#B6F36B]">{val.license}</strong></span>
                  </div>
                  <div className="mt-2">
                    <a
                      href={val.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#B6F36B] hover:underline"
                    >
                      <span>Lihat Berkas Sumber di Wikimedia Commons</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                type="button"
                onClick={() => setShowCredits(false)}
                className="rounded-full bg-[#B6F36B] px-5 py-2 text-xs font-bold text-[#07110D] uppercase hover:bg-[#c9fb88] cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
