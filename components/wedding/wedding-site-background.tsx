"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SPARKLE_POSITIONS = [
  { left: 8, top: 12 }, { left: 22, top: 28 }, { left: 45, top: 8 }, { left: 68, top: 18 },
  { left: 88, top: 32 }, { left: 15, top: 55 }, { left: 38, top: 72 }, { left: 62, top: 48 },
  { left: 82, top: 65 }, { left: 52, top: 85 }, { left: 28, top: 42 }, { left: 75, top: 78 },
  { left: 5, top: 88 }, { left: 92, top: 52 }, { left: 48, top: 35 }, { left: 33, top: 15 },
]

const PETAL_POSITIONS = [
  { left: 12, top: 20, xMid: 14, xEnd: -28, duration: 13 },
  { left: 28, top: 45, xMid: -16, xEnd: 38, duration: 15 },
  { left: 55, top: 30, xMid: 22, xEnd: -18, duration: 12 },
  { left: 72, top: 60, xMid: -24, xEnd: 32, duration: 14 },
  { left: 85, top: 25, xMid: 18, xEnd: -22, duration: 16 },
  { left: 18, top: 70, xMid: -20, xEnd: 26, duration: 13 },
]

export function WeddingSiteBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="wedding-theme-base pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
  }

  return (
    <div className="wedding-theme-base pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Layer 1: Animated aurora mesh */}
      <div className="wedding-aurora-layer absolute inset-0" />

      {/* Layer 2: Slow-drifting geometric lattice */}
      <div className="wedding-lattice-layer absolute inset-0 opacity-[0.14]" />

      {/* Layer 3: Radial vignette + center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_oklch,var(--gold)_18%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,color-mix(in_oklch,var(--primary)_6%,transparent)_100%)]" />

      {/* Layer 4: Gold light sweep */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, color-mix(in oklch, var(--gold-light) 35%, transparent) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Layer 5: Floating sparkles */}
      <div className="absolute inset-0">
        {SPARKLE_POSITIONS.map((s, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-secondary"
            style={{ left: `${s.left}%`, top: `${s.top}%` }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.35 }
                : { opacity: [0.15, 0.85, 0.15], scale: [0.6, 1.4, 0.6] }
            }
            transition={{
              duration: 2.5 + (i % 3) * 0.5,
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Layer 6: Lanterns */}
      <LanternFloat left="6%" top="18%" size="w-9 h-14" duration={7} delay={0} reduced={!!prefersReducedMotion} />
      <LanternFloat left="11%" top="58%" size="w-7 h-11" duration={9} delay={1.2} reduced={!!prefersReducedMotion} />
      <LanternFloat left="auto" right="7%" top="24%" size="w-10 h-14" duration={8} delay={0.6} reduced={!!prefersReducedMotion} />
      <LanternFloat left="auto" right="12%" top="68%" size="w-8 h-12" duration={10} delay={2} reduced={!!prefersReducedMotion} />

      {/* Layer 7: Rose petals */}
      {!prefersReducedMotion &&
        PETAL_POSITIONS.map((petal, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute h-3 w-3 opacity-40"
            style={{ left: `${petal.left}%`, top: `${petal.top}%` }}
            animate={{
              y: [0, 120, 240],
              x: [0, petal.xMid, petal.xEnd],
              rotate: [0, 200, 400],
              opacity: [0.25, 0.55, 0],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
          >
            <PetalSVG />
          </motion.div>
        ))}

      {/* Layer 8: Corner filigree */}
      <CornerFiligree position="top-left" />
      <CornerFiligree position="top-right" />
      <CornerFiligree position="bottom-left" />
      <CornerFiligree position="bottom-right" />
    </div>
  )
}

function LanternFloat({
  left,
  right,
  top,
  size,
  duration,
  delay,
  reduced,
}: {
  left?: string
  right?: string
  top: string
  size: string
  duration: number
  delay: number
  reduced: boolean
}) {
  return (
    <motion.div
      className={`absolute opacity-[0.22] ${size}`}
      style={{ left, right, top }}
      animate={reduced ? undefined : { y: [0, -28, 0], rotate: [0, 6, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <LanternSVG />
    </motion.div>
  )
}

function CornerFiligree({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  }[position]

  return (
    <svg
      className={`absolute h-24 w-24 text-secondary/25 sm:h-32 sm:w-32 ${positionClass}`}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 0H80V8H12V80H0V0Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      <path
        d="M20 20H60V24H24V60H20V20Z"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
        opacity="0.5"
      />
      <circle cx="40" cy="40" r="6" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

function LanternSVG() {
  return (
    <svg viewBox="0 0 40 60" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L25 5H15L20 0Z" fill="var(--gold)" />
      <rect x="15" y="5" width="10" height="5" fill="var(--gold)" />
      <path
        d="M10 10H30L35 55H5L10 10Z"
        fill="var(--gold)"
        fillOpacity="0.3"
        stroke="var(--gold)"
        strokeWidth="1"
      />
      <path d="M15 15H25V50H15V15Z" fill="var(--gold)" fillOpacity="0.5" />
      <ellipse cx="20" cy="55" rx="15" ry="3" fill="var(--gold)" />
    </svg>
  )
}

function PetalSVG() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C15 5 20 10 10 20C0 10 5 5 10 0Z" fill="var(--rose-gold)" fillOpacity="0.65" />
    </svg>
  )
}

/** @deprecated Use WeddingSiteBackground — kept for existing imports */
export function IslamicPatterns() {
  return <WeddingSiteBackground />
}
