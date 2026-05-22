"use client"

import { motion } from 'framer-motion'
import { Countdown } from './countdown'
import { CrescentMoon, IslamicDivider } from './islamic-patterns'

export function HeroSection() {
  const weddingDate = new Date('2026-07-12T11:00:00')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Hero spotlight — works with site-wide wedding theme */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 25% 40%, color-mix(in oklch, var(--gold) 22%, transparent) 0%, transparent 45%)',
            'radial-gradient(circle at 75% 45%, color-mix(in oklch, var(--emerald) 15%, transparent) 0%, transparent 45%)',
            'radial-gradient(circle at 25% 40%, color-mix(in oklch, var(--gold) 22%, transparent) 0%, transparent 45%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Background mosque silhouette */}
      <div className="absolute inset-0 flex items-end justify-center opacity-5 pointer-events-none">
        <MosqueSilhouette />
      </div>

      {/* Floating stars/sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-secondary/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 15}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-6"
        >
          <motion.p 
            className="arabic-text text-3xl md:text-5xl lg:text-6xl text-primary mb-2" 
            style={{ fontFamily: 'var(--font-arabic)' }}
            animate={{ textShadow: ['0 0 10px rgba(201, 168, 76, 0.2)', '0 0 20px rgba(201, 168, 76, 0.4)', '0 0 10px rgba(201, 168, 76, 0.2)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>
          <p className="text-sm md:text-base text-primary/60 font-serif italic">
            "In the name of Allah, The most gracious and most Merciful"
          </p>
        </motion.div>

        {/* Crescent Moon Decoration with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <CrescentMoon className="w-16 h-16 md:w-24 md:h-24 animate-pulse-glow" />
            <motion.div
              className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Invitation text - exact from card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.p 
            className="text-base md:text-lg font-serif text-primary font-medium mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Mr. Abdul Jaleel. A &amp; Mrs. Soujath. K
          </motion.p>
          <motion.p 
            className="text-xs md:text-sm font-serif text-primary/55 mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Anakkode House, Kuzhalmannam, Palakkad
          </motion.p>
          <motion.p 
            className="text-xs md:text-sm font-serif text-primary/50 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            Ph: 7736750501
          </motion.p>
          <motion.p 
            className="text-base md:text-lg font-serif text-primary/80 leading-relaxed mb-6 max-w-2xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Cordially invite your esteemed presence with family on the auspicious occasion of the Marriage Reception of our daughter
          </motion.p>
          
          {/* Bride Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display gold-shimmer mb-3 tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
          >
            Anziya. A
          </motion.h1>

          <motion.p 
            className="text-sm md:text-base font-serif text-primary/55 mb-0.5 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            ( Grand D/o. Late. Alu Rawther &amp; Mrs. Sulekha
          </motion.p>
          <motion.p 
            className="text-sm md:text-base font-serif text-primary/55 mb-5 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            and Late Kabeer &amp; Mrs. Noorjahan )
          </motion.p>

          <motion.p 
            className="text-2xl md:text-3xl text-primary/70 font-serif italic my-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            with
          </motion.p>

          {/* Groom Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display gold-shimmer mb-3 tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          >
            Ramees Mohammed. A
          </motion.h1>

          <motion.p 
            className="text-sm md:text-base font-serif text-primary/55 mb-0.5 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            (S/o. Mr. Aneefa. A &amp; Mrs. Saleena. J
          </motion.p>
          <motion.p 
            className="text-sm md:text-base font-serif text-primary/55 mb-8 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Thekkinkad House, Pallanchathanur, Palakkad.)
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          <IslamicDivider />
        </motion.div>

        {/* Insha Allah */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-xl md:text-2xl font-display text-secondary mt-2 mb-4 tracking-widest"
        >
          INSHA ALLAH
        </motion.p>

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-2xl md:text-4xl font-display text-secondary mb-1">
            Sunday, July 12th, 2026
          </p>
          <p className="text-sm md:text-base font-serif text-primary/60">
            (Hijra 1448, Muharam 26)
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          <p className="text-base font-serif text-primary/60 mb-6">Counting down to our blessed day</p>
          <Countdown targetDate={weddingDate} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-primary/40"
          >
            <p className="text-sm font-serif mb-2">Scroll to explore</p>
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MosqueSilhouette() {
  return (
    <svg viewBox="0 0 800 400" className="w-full max-w-5xl h-auto" fill="var(--emerald)">
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
