import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { OctoberReality } from './components/OctoberReality'
import { HumanCost } from './components/HumanCost'
import { LivingWorldAtRisk } from './components/LivingWorldAtRisk'
import { NumbersBehindCrisis } from './components/NumbersBehindCrisis'
import { Newsroom } from './components/Newsroom'
import { WhatHappensNext } from './components/WhatHappensNext'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#07110D] text-[#F2F4ED] selection:bg-[#B6F36B] selection:text-[#07110D] overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Cinematic Hero: October 2026 Theme */}
        <Hero />

        {/* SECTION 01 — THE REALITY OF OCTOBER */}
        <OctoberReality />

        {/* SECTION 02 — THE HUMAN COST */}
        <HumanCost />

        {/* SECTION 03 — THE LIVING WORLD AT RISK */}
        <LivingWorldAtRisk />

        {/* SECTION 04 — THE STORY BEHIND THE NUMBERS */}
        <NumbersBehindCrisis />

        {/* SECTION 05 — THE NEWSROOM */}
        <Newsroom />

        {/* SECTION 06 — WHAT HAPPENS NEXT? */}
        <WhatHappensNext />

        {/* SECTION 07 — FINAL CAMPAIGN CTA */}
        <FinalCTA />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  )
}
