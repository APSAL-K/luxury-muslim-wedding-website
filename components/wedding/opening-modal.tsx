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
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Delay showing content for dramatic entrance
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenInvitation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsVisible(false)
      onOpen()
    }, 1000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Animated gradient background */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(ellipse at center, rgba(13, 76, 58, 0.3) 0%, rgba(250, 246, 238, 1) 70%)',
                'radial-gradient(ellipse at center, rgba(201, 168, 76, 0.2) 0%, rgba(250, 246, 238, 1) 70%)',
                'radial-gradient(ellipse at center, rgba(13, 76, 58, 0.3) 0%, rgba(250, 246, 238, 1) 70%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Islamic pattern overlay */}
          <div className="absolute inset-0 islamic-pattern opacity-30" />
          
          {/* Animated envelope/door effect */}
          <motion.div
            animate={isAnimating ? { 
              scaleY: 0,
              originY: 0
            } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-emerald/10 to-transparent"
          />

          {/* Floating lanterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: "110vh",
                  x: `${10 + i * 15}vw`,
                  opacity: 0
                }}
                animate={{ 
                  y: "-20vh",
                  opacity: [0, 0.7, 0.7, 0]
                }}
                transition={{
                  duration: 10 + i * 2,
                  delay: i * 1.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute"
              >
                <Lantern />
              </motion.div>
            ))}
          </div>

          {/* Sparkle particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-secondary rounded-full"
                style={{
                  left: `${5 + i * 6}%`,
                  top: `${10 + (i % 5) * 20}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main content card */}
          {showContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-[92vw] max-w-lg mx-4"
            >
              {/* Decorative frame */}
              <div className="relative bg-background/98 backdrop-blur-md border-2 border-secondary/40 rounded-2xl overflow-hidden shadow-2xl">
                {/* Animated top border */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Ornate corner decorations */}
                <div className="absolute top-3 left-3 w-16 h-16">
                  <CornerOrnament />
                </div>
                <div className="absolute top-3 right-3 w-16 h-16 transform scale-x-[-1]">
                  <CornerOrnament />
                </div>
                <div className="absolute bottom-3 left-3 w-16 h-16 transform scale-y-[-1]">
                  <CornerOrnament />
                </div>
                <div className="absolute bottom-3 right-3 w-16 h-16 transform scale-[-1]">
                  <CornerOrnament />
                </div>
                
                <div className="px-6 py-10 md:px-10 md:py-14 text-center">
                  {/* Bismillah with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <p 
                      className="text-2xl md:text-4xl text-primary mb-2 leading-relaxed"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                    </p>
                    <p className="text-xs md:text-sm text-primary/60 font-serif italic mb-6">
                      In the name of Allah, the Most Gracious, the Most Merciful
                    </p>
                  </motion.div>

                  {/* Animated Crescent with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 1, type: "spring" }}
                    className="flex justify-center mb-6"
                  >
                    <div className="relative">
                      <CrescentMoon className="w-16 h-16 md:w-20 md:h-20" />
                      <motion.div
                        className="absolute inset-0 bg-secondary/30 rounded-full blur-xl"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Invitation text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <p className="text-sm md:text-base font-serif text-primary/70 mb-2">
                      Mr. Abdul Jaleel. A & Mrs. Soujath. K
                    </p>
                    <p className="text-xs md:text-sm font-serif text-primary/50 mb-4">
                      Cordially invite your esteemed presence
                    </p>
                    <p className="text-sm md:text-base font-serif text-primary/70 mb-1">
                      to the Marriage Reception of their daughter
                    </p>
                  </motion.div>

                  {/* Bride Name with shimmer */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                  >
                    <h1 className="text-4xl md:text-6xl font-display gold-shimmer mb-3 tracking-wide">
                      Anziya. A
                    </h1>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-xl md:text-2xl text-secondary/80 font-serif italic my-3"
                  >
                    with
                  </motion.p>

                  {/* Groom Name with shimmer */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                  >
                    <h1 className="text-4xl md:text-6xl font-display gold-shimmer mb-4 tracking-wide">
                      Ramees Mohammed. A
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <IslamicDivider />
                  </motion.div>

                  {/* Date preview with Islamic date */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-4 mb-8"
                  >
                    <p className="text-lg md:text-xl font-display text-secondary">
                      Sunday, July 12th, 2026
                    </p>
                    <p className="text-sm text-primary/60 font-serif mt-1">
                      Hijra 1448, Muharam 26
                    </p>
                  </motion.div>

                  {/* Open invitation button with pulse */}
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    onClick={handleOpenInvitation}
                    disabled={isAnimating}
                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-gradient-to-r from-emerald to-emerald-dark text-ivory font-serif text-base md:text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-emerald/40 disabled:opacity-70 transform hover:scale-105"
                  >
                    {/* Animated background glow */}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-secondary/10 to-secondary/30"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Envelope icon with animation */}
                    <motion.svg 
                      className="w-6 h-6 relative z-10"
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
                    
                    <span className="relative z-10 font-semibold">Open Invitation</span>
                    
                    {/* Arrow with bounce */}
                    <motion.svg 
                      className="w-5 h-5 relative z-10"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </motion.button>

                  {/* Tap hint with pulse */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="text-xs text-primary/50 mt-5 font-serif"
                  >
                    Tap to open your invitation
                  </motion.p>
                </div>

                {/* Animated bottom border */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          )}

          {/* Rose petals falling */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <motion.div
                key={`petal-${i}`}
                initial={{ 
                  y: -30,
                  x: `${8 * i}vw`,
                  rotate: 0,
                  opacity: 0
                }}
                animate={{ 
                  y: "110vh",
                  rotate: 360,
                  opacity: [0, 0.8, 0.8, 0]
                }}
                transition={{
                  duration: 7 + (i % 4),
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute"
              >
                <RosePetal index={i} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CornerOrnament() {
  return (
    <svg viewBox="0 0 60 60" className="w-full h-full text-secondary/40">
      <path
        d="M0 0 L0 30 Q0 0 30 0 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 5 L5 20 Q5 5 20 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="3" cy="3" r="2" fill="currentColor" />
    </svg>
  )
}

function Lantern() {
  return (
    <svg width="35" height="55" viewBox="0 0 35 55" className="drop-shadow-lg">
      <defs>
        <radialGradient id="lanternGlowModal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.3" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="M17.5 0 Q17.5 5 14 5 L21 5 Q17.5 5 17.5 0" fill="var(--gold)" />
      <rect x="10" y="5" width="15" height="4" rx="1" fill="var(--gold)" />
      <path d="M10 9 Q6 27 10 45 L25 45 Q29 27 25 9 Z" fill="url(#lanternGlowModal)" stroke="var(--gold)" strokeWidth="1" filter="url(#glow)" />
      <rect x="12" y="45" width="11" height="3" rx="1" fill="var(--gold)" />
      <path d="M14 48 L17.5 55 L21 48 Z" fill="var(--gold)" />
      <ellipse cx="17.5" cy="27" rx="6" ry="12" fill="var(--gold)" opacity="0.6" />
    </svg>
  )
}

function RosePetal({ index }: { index: number }) {
  const colors = ['#C9A84C', '#D4AF37', '#B8860B', '#DAA520']
  const color = colors[index % colors.length]
  
  return (
    <svg width="14" height="16" viewBox="0 0 14 16">
      <path 
        d="M7 0 Q14 5 12 11 Q9 16 7 16 Q5 16 2 11 Q0 5 7 0" 
        fill={color}
        opacity="0.7"
      />
    </svg>
  )
}
