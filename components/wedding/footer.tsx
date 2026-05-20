"use client"

import { motion } from 'framer-motion'
import { CrescentMoon } from './islamic-patterns'

export function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="islamic-pattern w-full h-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="arabic-text text-2xl md:text-3xl opacity-80" style={{ fontFamily: 'var(--font-arabic)' }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
        </motion.div>

        {/* Couple monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-secondary bg-secondary/10">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-display text-secondary">A</span>
              <span className="text-xl md:text-2xl font-display text-secondary/70 mx-1">&</span>
              <span className="text-3xl md:text-4xl font-display text-secondary">F</span>
            </div>
          </div>
        </motion.div>

        {/* Names */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-display mb-4"
        >
          Ahmad & Fatimah
        </motion.h3>

        {/* Date and venue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="font-serif text-lg opacity-80">August 15, 2026 • Grand Mosque Hall</p>
        </motion.div>

        {/* Divider with crescent */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary/50" />
          <CrescentMoon className="w-6 h-6 text-secondary" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary/50" />
        </div>

        {/* Dua */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p className="arabic-text text-xl opacity-70 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            بارك الله لكما وبارك عليكما وجمع بينكما في خير
          </p>
          <p className="font-serif text-sm opacity-60 italic">
            May Allah bless you both and bestow His blessings upon you and bring you together in goodness
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm opacity-50"
        >
          Made with love for our special day
        </motion.p>
      </div>
    </footer>
  )
}
