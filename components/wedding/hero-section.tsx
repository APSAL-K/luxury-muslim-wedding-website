"use client"

import { motion } from 'framer-motion'
import { Countdown } from './countdown'
import { CrescentMoon, IslamicDivider } from './islamic-patterns'

export function HeroSection() {
  const weddingDate = new Date('2026-08-15T16:00:00')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden islamic-pattern">
      {/* Background mosque silhouette */}
      <div className="absolute inset-0 flex items-end justify-center opacity-5 pointer-events-none">
        <MosqueSilhouette />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="arabic-text text-4xl md:text-6xl text-primary mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-sm md:text-base text-primary/70 font-serif italic">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </motion.div>

        {/* Crescent Moon Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <CrescentMoon className="w-16 h-16 md:w-24 md:h-24 animate-pulse-glow" />
        </motion.div>

        {/* Invitation text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-lg md:text-xl font-serif text-primary/80 mb-4">
            You are cordially invited to celebrate the Nikah of
          </p>
          
          {/* Couple names */}
          <h1 className="text-5xl md:text-8xl font-display gold-shimmer mb-6 tracking-wide">
            Ahmad & Fatimah
          </h1>

          <p className="text-lg md:text-xl font-serif text-primary/80 mb-2">
            Son of Mr. & Mrs. Abdullah Hassan
          </p>
          <p className="text-lg md:text-xl font-serif text-primary/80 mb-8">
            Daughter of Mr. & Mrs. Ibrahim Khan
          </p>
        </motion.div>

        <IslamicDivider />

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-display text-secondary mb-2">
            Saturday, August 15th, 2026
          </p>
          <p className="text-base md:text-lg font-serif text-primary/70">
            19th Muharram 1448 AH
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-lg font-serif text-primary/70 mb-6">Counting down to our blessed day</p>
          <Countdown targetDate={weddingDate} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-primary/50"
          >
            <p className="text-sm font-serif mb-2">Scroll to explore</p>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MosqueSilhouette() {
  return (
    <svg viewBox="0 0 800 400" className="w-full max-w-4xl h-auto" fill="var(--emerald)">
      {/* Central dome */}
      <ellipse cx="400" cy="200" rx="120" ry="100" />
      <rect x="280" y="200" width="240" height="200" />
      
      {/* Left minaret */}
      <rect x="100" y="100" width="40" height="300" />
      <ellipse cx="120" cy="100" rx="25" ry="30" />
      <path d="M120 70L130 90H110L120 70Z" />
      
      {/* Right minaret */}
      <rect x="660" y="100" width="40" height="300" />
      <ellipse cx="680" cy="100" rx="25" ry="30" />
      <path d="M680 70L690 90H670L680 70Z" />
      
      {/* Small domes */}
      <ellipse cx="200" cy="250" rx="60" ry="50" />
      <ellipse cx="600" cy="250" rx="60" ry="50" />
      
      {/* Crescent on top */}
      <path d="M400 80C390 80 385 90 385 100C385 110 395 115 400 115C392 115 390 108 390 100C390 92 395 85 400 80Z" />
    </svg>
  )
}
