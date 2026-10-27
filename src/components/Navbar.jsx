import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'OCTOBER 2026', href: '#october-reality' },
    { label: 'HUMAN COST', href: '#human-cost' },
    { label: 'LIVING WORLD', href: '#living-world' },
    { label: 'THE NUMBERS', href: '#numbers' },
    { label: 'NEWSROOM', href: '#newsroom' },
    { label: 'TAKE ACTION', href: '#action' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07110D]/95 border-b border-white/10 backdrop-blur-md py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-widest text-[#F2F4ED] uppercase transition-colors hover:text-[#B6F36B] shrink-0"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF5A36] shadow-[0_0_8px_#FF5A36] transition-transform duration-300 group-hover:scale-125" />
          <span className="font-extrabold tracking-widest">THE FOREST IS CALLING</span>
          <span className="hidden xl:inline-block rounded bg-[#FF5A36]/15 border border-[#FF5A36]/30 px-2 py-0.5 text-[10px] text-[#FF5A36] font-mono">
            OCTOBER 2026
          </span>
        </a>

        {/* Desktop Nav Links (Visible on all desktop/laptop viewports: >= lg / 1024px) */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6" aria-label="Navigasi Investigasi">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[11px] xl:text-xs font-semibold tracking-wider text-[#A1ADA3] uppercase transition-colors duration-200 hover:text-[#B6F36B] whitespace-nowrap py-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#B6F36B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden sm:block shrink-0">
          <a
            href="#action"
            className="inline-flex items-center gap-2 rounded-full border border-[#B6F36B]/40 bg-[#B6F36B]/10 px-4 py-2 text-[11px] xl:text-xs font-semibold tracking-wider text-[#B6F36B] uppercase backdrop-blur-sm transition-all duration-300 hover:border-[#B6F36B] hover:bg-[#B6F36B] hover:text-[#07110D] hover:shadow-[0_0_20px_rgba(182,243,107,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap"
          >
            <span>STAND FOR THE FOREST</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button (Only on mobile / tablet < lg) */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Tutup navigasi menu' : 'Buka navigasi menu'}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-[#F2F4ED] backdrop-blur-sm transition-colors hover:border-[#B6F36B]/50 focus-visible:ring-2 focus-visible:ring-[#B6F36B]"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer (Only on mobile / tablet < lg) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[62px] border-b border-white/10 bg-[#07110D]/98 px-6 py-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-bold tracking-wider text-[#A1ADA3] uppercase py-2 transition-colors hover:text-[#B6F36B] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-white/30">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 sm:hidden">
                <a
                  href="#action"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#B6F36B] px-5 py-3 text-xs font-bold tracking-wider text-[#07110D] uppercase transition-all hover:bg-[#c9fb88] active:scale-95"
                >
                  <span>STAND FOR THE FOREST</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
