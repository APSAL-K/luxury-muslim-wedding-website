"use client"

import { motion } from 'framer-motion'
import { CrescentMoon } from './islamic-patterns'

export function Footer() {
  return (
    <footer className="relative py-20 px-4 bg-primary text-primary-foreground overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.p 
            className="arabic-text text-2xl md:text-4xl opacity-80" 
            style={{ fontFamily: 'var(--font-arabic)' }}
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>
        </motion.div>

        {/* Couple monogram with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-secondary bg-secondary/10"
            animate={{ boxShadow: ['0 0 0px rgba(201, 168, 76, 0)', '0 0 30px rgba(201, 168, 76, 0.3)', '0 0 0px rgba(201, 168, 76, 0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-display text-secondary">A</span>
              <span className="text-2xl md:text-3xl font-display text-secondary/70 mx-2">&</span>
              <span className="text-4xl md:text-5xl font-display text-secondary">R</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Names */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-4xl font-display mb-4"
        >
          Anziya & Ramees
        </motion.h3>

        {/* Date and venue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="font-serif text-lg md:text-xl opacity-80">July 12, 2026 | KMR Convention Center, Thenkurussi</p>
        </motion.div>

        {/* Divider with crescent */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-secondary/50" />
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <CrescentMoon className="w-8 h-8 text-secondary" />
          </motion.div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-secondary/50" />
        </motion.div>

        {/* Dua */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <motion.p 
            className="arabic-text text-xl md:text-2xl opacity-70 mb-3" 
            style={{ fontFamily: 'var(--font-arabic)' }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            بارك الله لكما وبارك عليكما وجمع بينكما في خير
          </motion.p>
          <p className="font-serif text-sm md:text-base opacity-60 italic max-w-lg mx-auto leading-relaxed">
            May Allah bless you both and bestow His blessings upon you and bring you together in goodness
          </p>
        </motion.div>

        {/* JazakAllah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <p className="arabic-text text-xl text-secondary" style={{ fontFamily: 'var(--font-arabic)' }}>
            جزاك الله خيرا
          </p>
          <p className="text-sm font-serif opacity-60 italic mt-1">
            JazakAllah Khair for celebrating with us
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs md:text-sm opacity-40"
        >
          Made with love for our special day
        </motion.p>
      </div>
    </footer>
  )
}
