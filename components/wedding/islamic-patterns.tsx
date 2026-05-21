"use client"

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

// Pre-defined positions to avoid hydration mismatch
const PETAL_POSITIONS = [
  { top: 15, xMid: 12, xEnd: -30, duration: 12 },
  { top: 35, xMid: -18, xEnd: 45, duration: 14 },
  { top: 55, xMid: 25, xEnd: -20, duration: 11 },
  { top: 25, xMid: -30, xEnd: 35, duration: 13 },
  { top: 70, xMid: 20, xEnd: -15, duration: 15 },
  { top: 45, xMid: -25, xEnd: 40, duration: 12 },
  { top: 80, xMid: 15, xEnd: -35, duration: 14 },
  { top: 10, xMid: -20, xEnd: 25, duration: 13 },
]

export function IslamicPatterns() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Floating Lanterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Left side lanterns */}
        <motion.div
          className="absolute left-[5%] top-[20%] w-8 h-12 opacity-20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <LanternSVG />
        </motion.div>
        <motion.div
          className="absolute left-[10%] top-[60%] w-6 h-10 opacity-15"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <LanternSVG />
        </motion.div>
        
        {/* Right side lanterns */}
        <motion.div
          className="absolute right-[8%] top-[30%] w-10 h-14 opacity-20"
          animate={{
            y: [0, -35, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <LanternSVG />
        </motion.div>
        <motion.div
          className="absolute right-[15%] top-[70%] w-7 h-11 opacity-15"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <LanternSVG />
        </motion.div>
      </div>

      {/* Floating Rose Petals */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {PETAL_POSITIONS.map((petal, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${petal.top}%`,
            }}
            animate={{
              y: [0, 100, 200],
              x: [0, petal.xMid, petal.xEnd],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <PetalSVG />
          </motion.div>
        ))}
      </div>
    </>
  )
}

function LanternSVG() {
  return (
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M20 0L25 5H15L20 0Z" fill="var(--gold)" />
      <rect x="15" y="5" width="10" height="5" fill="var(--gold)" />
      <path d="M10 10H30L35 55H5L10 10Z" fill="var(--gold)" fillOpacity="0.3" stroke="var(--gold)" strokeWidth="1" />
      <path d="M15 15H25V50H15V15Z" fill="var(--gold)" fillOpacity="0.5" />
      <ellipse cx="20" cy="55" rx="15" ry="3" fill="var(--gold)" />
    </svg>
  )
}

function PetalSVG() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M10 0C15 5 20 10 10 20C0 10 5 5 10 0Z" fill="var(--rose-gold)" fillOpacity="0.6" />
    </svg>
  )
}

export function IslamicDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-12 px-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent max-w-32" />
      <svg
        viewBox="0 0 60 60"
        className="w-12 h-12 text-secondary"
        fill="currentColor"
      >
        <path d="M30 0L35 15L50 15L38 24L42 40L30 30L18 40L22 24L10 15L25 15Z" />
        <circle cx="30" cy="30" r="8" fill="var(--emerald)" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent max-w-32" />
    </div>
  )
}

export function GeometricBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top left corner */}
      <svg className="absolute top-0 left-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M0 0H80V10H10V80H0V0Z" fill="currentColor" />
        <path d="M20 20H60V25H25V60H20V20Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {/* Top right corner */}
      <svg className="absolute top-0 right-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M80 0H0V10H70V80H80V0Z" fill="currentColor" />
        <path d="M60 20H20V25H55V60H60V20Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {/* Bottom left corner */}
      <svg className="absolute bottom-0 left-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M0 80H80V70H10V0H0V80Z" fill="currentColor" />
        <path d="M20 60H60V55H25V20H20V60Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
      
      {/* Bottom right corner */}
      <svg className="absolute bottom-0 right-0 w-20 h-20 text-secondary opacity-50" viewBox="0 0 80 80">
        <path d="M80 80H0V70H70V0H80V80Z" fill="currentColor" />
        <path d="M60 60H20V55H55V20H60V60Z" fill="currentColor" fillOpacity="0.5" />
      </svg>
    </div>
  )
}

export function MughalArch({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-16 text-secondary" viewBox="0 0 200 50" fill="none">
        <path 
          d="M0 50 Q50 0 100 0 Q150 0 200 50" 
          stroke="currentColor" 
          strokeWidth="3" 
          fill="none"
        />
        <path 
          d="M20 50 Q60 10 100 10 Q140 10 180 50" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.5"
        />
      </svg>
      {children}
    </div>
  )
}

export function CrescentMoon({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`text-secondary ${className}`} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
