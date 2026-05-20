"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CrescentMoon, IslamicDivider } from './islamic-patterns'

interface OpeningModalProps {
  onOpen: () => void
}

export function OpeningModal({ onOpen }: OpeningModalProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOpenInvitation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsVisible(false)
      onOpen()
    }, 800)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Background with pattern */}
          <div className="absolute inset-0 bg-background islamic-pattern" />
          
          {/* Animated envelope/door effect */}
          <motion.div
            animate={isAnimating ? { 
              scaleY: 0,
              originY: 0
            } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-emerald/10 to-transparent"
          />

          {/* Floating lanterns decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: "100vh",
                  x: `${15 + i * 15}vw`,
                  opacity: 0
                }}
                animate={{ 
                  y: "-20vh",
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{
                  duration: 8 + i * 2,
                  delay: i * 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute"
              >
                <Lantern />
              </motion.div>
            ))}
          </div>

          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[90vw] max-w-lg mx-4"
          >
            {/* Decorative frame */}
            <div className="relative bg-background/95 backdrop-blur-sm border-2 border-secondary/30 rounded-lg overflow-hidden shadow-2xl">
              {/* Top decorative arch */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-secondary to-transparent" />
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-secondary/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-secondary/40 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-secondary/40 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary/40 rounded-br-lg" />
              
              <div className="px-6 py-10 md:px-10 md:py-14 text-center">
                {/* Bismillah */}
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl text-primary mb-2"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs md:text-sm text-primary/60 font-serif italic mb-6"
                >
                  In the name of Allah, the Most Gracious, the Most Merciful
                </motion.p>

                {/* Crescent decoration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="flex justify-center mb-6"
                >
                  <CrescentMoon className="w-14 h-14 md:w-16 md:h-16 animate-pulse-glow" />
                </motion.div>

                {/* Invitation text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-sm md:text-base font-serif text-primary/70 mb-3">
                    You are cordially invited to
                  </p>
                  <p className="text-lg md:text-xl font-serif text-primary/80 mb-4">
                    The Wedding Celebration of
                  </p>
                </motion.div>

                {/* Couple names */}
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display gold-shimmer mb-6 tracking-wide leading-tight"
                >
                  Ahmad
                  <span className="block text-2xl md:text-3xl text-secondary/70 my-2">&</span>
                  Fatimah
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <IslamicDivider />
                </motion.div>

                {/* Date preview */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-base md:text-lg font-display text-secondary mt-4 mb-8"
                >
                  Saturday, August 15th, 2026
                </motion.p>

                {/* Open invitation button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  onClick={handleOpenInvitation}
                  disabled={isAnimating}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-emerald to-emerald-dark text-ivory font-serif text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald/30 disabled:opacity-70"
                >
                  {/* Button glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Envelope icon */}
                  <motion.svg 
                    className="w-5 h-5 md:w-6 md:h-6 relative z-10"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ 
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                  
                  <span className="relative z-10">Open Invitation</span>
                  
                  {/* Arrow icon */}
                  <motion.svg 
                    className="w-4 h-4 md:w-5 md:h-5 relative z-10"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.button>

                {/* Tap hint for mobile */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="text-xs text-primary/40 mt-4 font-serif"
                >
                  Tap to open your invitation
                </motion.p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            </div>
          </motion.div>

          {/* Rose petals falling */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`petal-${i}`}
                initial={{ 
                  y: -20,
                  x: `${Math.random() * 100}vw`,
                  rotate: 0,
                  opacity: 0
                }}
                animate={{ 
                  y: "110vh",
                  rotate: 360,
                  opacity: [0, 0.7, 0.7, 0]
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute"
              >
                <RosePetal />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Lantern() {
  return (
    <svg width="30" height="50" viewBox="0 0 30 50" className="drop-shadow-lg">
      {/* Lantern body */}
      <defs>
        <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      {/* Top hook */}
      <path d="M15 0 Q15 5 12 5 L18 5 Q15 5 15 0" fill="var(--gold)" />
      {/* Top cap */}
      <rect x="8" y="5" width="14" height="4" rx="1" fill="var(--gold)" />
      {/* Main body */}
      <path d="M8 9 Q5 25 8 41 L22 41 Q25 25 22 9 Z" fill="url(#lanternGlow)" stroke="var(--gold)" strokeWidth="1" />
      {/* Bottom cap */}
      <rect x="10" y="41" width="10" height="3" rx="1" fill="var(--gold)" />
      {/* Bottom point */}
      <path d="M12 44 L15 50 L18 44 Z" fill="var(--gold)" />
      {/* Inner glow */}
      <ellipse cx="15" cy="25" rx="5" ry="10" fill="var(--gold)" opacity="0.5" />
    </svg>
  )
}

function RosePetal() {
  const colors = ['#C9A84C', '#D4AF37', '#B8860B']
  const color = colors[Math.floor(Math.random() * colors.length)]
  
  return (
    <svg width="12" height="14" viewBox="0 0 12 14">
      <path 
        d="M6 0 Q12 4 10 10 Q8 14 6 14 Q4 14 2 10 Q0 4 6 0" 
        fill={color}
        opacity="0.6"
      />
    </svg>
  )
}
