"use client"

import { useEffect, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion'
import { CrescentMoon, IslamicDivider } from './islamic-patterns'

interface OpeningModalProps {
  onOpen: () => void
}

const floatingBlooms = [
  { id: 'b1', left: '5%', top: '6%', size: 80, delay: 0, duration: 10, hideOnMobile: false },
  { id: 'b2', left: '80%', top: '8%', size: 84, delay: 1.2, duration: 11, hideOnMobile: true },
  { id: 'b3', left: '12%', top: '72%', size: 64, delay: 0.4, duration: 9, hideOnMobile: false },
  { id: 'b4', left: '84%', top: '70%', size: 66, delay: 1.8, duration: 12, hideOnMobile: true },
  { id: 'b5', left: '38%', top: '4%', size: 52, delay: 2.1, duration: 8, hideOnMobile: false },
  { id: 'b6', left: '44%', top: '82%', size: 56, delay: 0.9, duration: 9.5, hideOnMobile: false },
]

const driftingFlowers = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${4 + index * 7}%`,
  delay: index * 0.4,
  duration: 9 + (index % 4),
  size: 18 + (index % 3) * 8,
}))

const burstFlowers = Array.from({ length: 12 }, (_, index) => {
  const angle = (index / 12) * Math.PI * 2
  return {
    id: `burst-${index}`,
    x: Math.cos(angle) * (140 + (index % 3) * 45),
    y: Math.sin(angle) * (120 + (index % 2) * 40),
    size: 32 + (index % 3) * 12,
    delay: index * 0.05,
  }
})

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
}

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, scale: 0.95, transition: { duration: 0.35 } },
}

const doorTransition = { duration: 1.15, ease: [0.77, 0, 0.18, 1] as const }

export function OpeningModal({ onOpen }: OpeningModalProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 180)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenInvitation = () => {
    if (isAnimating) {
      return
    }

    setIsAnimating(true)
    setTimeout(() => {
      setIsVisible(false)
      onOpen()
    }, 1400)
  }

  const handleDoorKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpenInvitation()
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="opening-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-hidden bg-background"
        >
          {/* Full-page floral background */}
          <div className="absolute inset-0">
            <Image
              src="/images/opening-modal-floral-bg.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-cream/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-primary/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(250,246,238,0.15)_55%,rgba(13,76,58,0.08)_100%)]" />

          {/* Ambient floating blooms */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <AnimatePresence initial={false}>
              {!isAnimating &&
                floatingBlooms.map((bloom, index) => (
                  <motion.div
                    key={bloom.id}
                    className={`absolute ${bloom.hideOnMobile ? 'hidden sm:block' : ''}`}
                    style={{ left: bloom.left, top: bloom.top }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: [0.4, 0.65, 0.4],
                      scale: prefersReducedMotion ? 1 : [1, 1.12, 1],
                      y: prefersReducedMotion ? 0 : [0, -22, 0],
                      x: prefersReducedMotion ? 0 : [0, index % 2 === 0 ? 14 : -14, 0],
                      rotate: prefersReducedMotion ? 0 : [0, index % 2 === 0 ? 10 : -10, 0],
                    }}
                    exit={{ opacity: 0, scale: 0.3 }}
                    transition={{
                      opacity: { duration: 0.6, delay: index * 0.07 },
                      scale: { duration: bloom.duration, delay: bloom.delay, repeat: Infinity, ease: 'easeInOut' },
                      y: { duration: bloom.duration, delay: bloom.delay, repeat: Infinity, ease: 'easeInOut' },
                      x: { duration: bloom.duration, delay: bloom.delay, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: bloom.duration, delay: bloom.delay, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  >
                    <FlowerBloom size={bloom.size} opacity={0.5} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Drifting petals */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <AnimatePresence initial={false}>
              {!isAnimating &&
                driftingFlowers.map((flower, index) => (
                  <motion.div
                    key={flower.id}
                    className="absolute -top-16"
                    style={{ left: flower.left }}
                    initial={{ y: -80, rotate: 0, opacity: 0, scale: 0.4 }}
                    animate={
                      prefersReducedMotion
                        ? { opacity: 0.4, y: 0, scale: 1 }
                        : {
                            y: '115vh',
                            x: [0, flower.id % 2 === 0 ? 36 : -36, 0],
                            rotate: [0, 200, 360],
                            opacity: [0, 0.6, 0.6, 0],
                            scale: [0.8, 1, 1, 0.8],
                          }
                    }
                    exit={{ opacity: 0, scale: 0.2, y: -50 }}
                    transition={{
                      opacity: { duration: 0.5, delay: index * 0.06 },
                      scale: { duration: 0.5, delay: index * 0.06 },
                      y: { duration: flower.duration, delay: flower.delay, repeat: Infinity, ease: 'linear' },
                      x: { duration: flower.duration, delay: flower.delay, repeat: Infinity, ease: 'linear' },
                      rotate: { duration: flower.duration, delay: flower.delay, repeat: Infinity, ease: 'linear' },
                    }}
                  >
                    <FlowerBloom size={flower.size} opacity={0.55} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Door-open burst */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              {isAnimating &&
                !prefersReducedMotion &&
                burstFlowers.map((flower) => (
                  <motion.div
                    key={flower.id}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.25, 0.75],
                      x: flower.x,
                      y: flower.y,
                      rotate: [0, 180],
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 1,
                      delay: flower.delay,
                      ease: 'easeOut',
                    }}
                  >
                    <FlowerBloom size={flower.size} opacity={0.7} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Center seam */}
          <motion.div
            className="absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            animate={{ opacity: isAnimating ? 0 : prefersReducedMotion ? 0.65 : [0.5, 1, 0.5] }}
            transition={isAnimating ? { duration: 0.4 } : { duration: 2, repeat: Infinity }}
          />

          {/* Glass doors — floral bg visible through */}
          <motion.div
            className="absolute inset-0 z-10"
            style={{ perspective: '1800px' }}
          >
            <motion.div
              role="button"
              tabIndex={0}
              aria-label="Open left door"
              onClick={handleOpenInvitation}
              onKeyDown={handleDoorKeyDown}
              whileTap={isAnimating ? undefined : { scale: 0.99 }}
              className="absolute inset-y-0 left-0 w-1/2 cursor-pointer border-r border-white/25 bg-white/20 shadow-[inset_-12px_0_48px_rgba(13,76,58,0.08)] backdrop-blur-[2px]"
              style={{ transformOrigin: 'left center' }}
              animate={
                isAnimating
                  ? { x: '-102%', rotateY: -78, opacity: 0.7 }
                  : { x: 0, rotateY: 0, opacity: 1 }
              }
              transition={doorTransition}
            >
              <div className="pointer-events-none absolute inset-0 islamic-pattern opacity-20" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_45%)]" />
              <AnimatePresence>
                {!isAnimating && (
                  <>
                    <motion.div
                      key="left-bloom-top"
                      className="pointer-events-none absolute left-5 top-5 sm:left-8 sm:top-8"
                      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.4, rotate: 30 }}
                      transition={{ duration: 0.55 }}
                    >
                      <FlowerBloom size={90} opacity={0.35} />
                    </motion.div>
                    <motion.div
                      key="left-bloom-bottom"
                      className="pointer-events-none absolute bottom-10 right-4 sm:bottom-14 sm:right-8"
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.3 }}
                      transition={{ duration: 0.55, delay: 0.06 }}
                    >
                      <FlowerBloom size={76} opacity={0.3} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              role="button"
              tabIndex={0}
              aria-label="Open right door"
              onClick={handleOpenInvitation}
              onKeyDown={handleDoorKeyDown}
              whileTap={isAnimating ? undefined : { scale: 0.99 }}
              className="absolute inset-y-0 right-0 w-1/2 cursor-pointer border-l border-white/25 bg-white/20 shadow-[inset_12px_0_48px_rgba(13,76,58,0.08)] backdrop-blur-[2px]"
              style={{ transformOrigin: 'right center' }}
              animate={
                isAnimating
                  ? { x: '102%', rotateY: 78, opacity: 0.7 }
                  : { x: 0, rotateY: 0, opacity: 1 }
              }
              transition={doorTransition}
            >
              <div className="pointer-events-none absolute inset-0 islamic-pattern opacity-20" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_45%)]" />
              <AnimatePresence>
                {!isAnimating && (
                  <>
                    <motion.div
                      key="right-bloom-top"
                      className="pointer-events-none absolute right-5 top-5 sm:right-8 sm:top-8"
                      initial={{ opacity: 0, scale: 0.4, rotate: 20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.4, rotate: -30 }}
                      transition={{ duration: 0.55 }}
                    >
                      <FlowerBloom size={90} opacity={0.35} />
                    </motion.div>
                    <motion.div
                      key="right-bloom-bottom"
                      className="pointer-events-none absolute bottom-10 left-4 sm:bottom-14 sm:left-8"
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.3 }}
                      transition={{ duration: 0.55, delay: 0.06 }}
                    >
                      <FlowerBloom size={76} opacity={0.3} />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Center glow on door open */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-[5]"
            animate={
              isAnimating
                ? { opacity: [0.15, 0.9, 1], scale: [0.9, 1.08, 1.12] }
                : { opacity: 0.12, scale: 1 }
            }
            transition={{ duration: 1.15, ease: 'easeOut' }}
            style={{
              background:
                'radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 18%, transparent 50%)',
            }}
          />

          {/* Full-page invitation content — no card box, no scroll */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                key="invitation-content"
                initial={{ opacity: 0 }}
                animate={isAnimating ? { opacity: 0 } : { opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-30 flex h-[100dvh] w-full flex-col overflow-hidden px-[clamp(0.75rem,4vw,1.5rem)] pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
              >
                {/* Auto-fit content area */}
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate={isAnimating ? 'exit' : 'visible'}
                  className="flex min-h-0 flex-1 flex-col items-center justify-center text-center"
                  style={{
                    gap: 'clamp(0.35rem, 1.8vh, 1.25rem)',
                  }}
                >
                  <motion.div variants={contentItemVariants} className="invitation-text-shadow">
                    <p
                      className="text-[clamp(1rem,4.5vw,1.5rem)] leading-snug text-primary"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                    </p>
                    <p className="mt-[clamp(0.2rem,0.8vh,0.5rem)] text-[clamp(0.55rem,2.2vw,0.75rem)] uppercase tracking-[0.28em] text-primary/70">
                    In the name of Allah, the Most Gracious, the Most Merciful
                    </p>
                  </motion.div>

                  <motion.div variants={contentItemVariants} className="flex justify-center">
                    <div className="invitation-text-shadow relative flex h-[clamp(2.75rem,10vw,4rem)] w-[clamp(2.75rem,10vw,4rem)] items-center justify-center rounded-full border border-white/50 bg-white/50 shadow-[0_8px_32px_rgba(13,76,58,0.15)]">
                      <CrescentMoon className="h-[clamp(1.25rem,5vw,1.75rem)] w-[clamp(1.25rem,5vw,1.75rem)]" />
                      {!prefersReducedMotion && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/15 blur-xl"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
                          transition={{ duration: 2.2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={contentItemVariants}
                    className="invitation-text-shadow space-y-[clamp(0.15rem,0.6vh,0.35rem)]"
                  >
                    <p className="font-serif text-[clamp(0.7rem,2.8vw,0.95rem)] text-primary/85">
                      Mr. Abdul Jaleel. A & Mrs. Soujath. K
                    </p>
                    <p className="text-[clamp(0.55rem,2.2vw,0.75rem)] uppercase tracking-[0.24em] text-primary/65">
                      request the honor of your presence
                    </p>
                  </motion.div>

                  <motion.div variants={contentItemVariants} className="invitation-text-shadow">
                    <p className="font-serif text-[clamp(0.65rem,2.5vw,0.9rem)] italic text-primary/80">
                    to the Marriage Reception of their daughter
                    </p>
                    <h1 className="mt-[clamp(0.2rem,0.8vh,0.5rem)] font-display text-[clamp(1.5rem,7vw,2.75rem)] leading-tight tracking-[0.1em] text-primary">
                      Anziya
                    </h1>
                    <p className="mt-[clamp(0.15rem,0.6vh,0.35rem)] font-serif text-[clamp(0.75rem,3vw,1.1rem)] italic text-primary/60">
                      with
                    </p>
                    <h1 className="mt-[clamp(0.2rem,0.8vh,0.5rem)] font-display text-[clamp(1.5rem,7vw,2.75rem)] leading-tight tracking-[0.1em] text-primary">
                      Ramees Mohammed
                    </h1>
                  </motion.div>

                  <motion.div
                    variants={contentItemVariants}
                    className="invitation-text-shadow w-[min(85%,16rem)]"
                  >
                    <IslamicDivider />
                  </motion.div>

                  <motion.div variants={contentItemVariants} className="invitation-text-shadow">
                    <p className="font-display text-[clamp(0.9rem,3.8vw,1.35rem)] text-primary">
                      Sunday, July 12th, 2026
                    </p>
                    <p className="mt-[clamp(0.1rem,0.4vh,0.25rem)] font-serif text-[clamp(0.65rem,2.5vw,0.875rem)] text-primary/70">
                      Hijra 1448, Muharam 26
                    </p>
                  </motion.div>
                </motion.div>

                {/* Fixed bottom tap button — always clean & visible */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isAnimating
                      ? { opacity: 0, y: 16 }
                      : { opacity: 1, y: 0 }
                  }
                  transition={{ delay: 0.5, duration: 0.55 }}
                  className="relative z-40 shrink-0 pt-[clamp(0.5rem,2vh,1rem)]"
                >
                  <div className="mx-auto w-full max-w-[min(100%,20rem)]">
                    <motion.button
                      onClick={handleOpenInvitation}
                      disabled={isAnimating}
                      whileHover={isAnimating ? undefined : { scale: 1.03 }}
                      whileTap={isAnimating ? undefined : { scale: 0.98 }}
                      animate={
                        prefersReducedMotion || isAnimating
                          ? undefined
                          : {
                              boxShadow: [
                                '0 12px 40px rgba(13,76,58,0.28)',
                                '0 16px 48px rgba(13,76,58,0.38)',
                                '0 12px 40px rgba(13,76,58,0.28)',
                              ],
                            }
                      }
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border-2 border-white/30 bg-primary px-6 py-[clamp(0.7rem,2.5vh,0.95rem)] font-serif text-[clamp(0.8rem,3.2vw,1rem)] font-medium tracking-wide text-primary-foreground shadow-[0_12px_40px_rgba(13,76,58,0.3)] disabled:cursor-default disabled:opacity-70"
                    >
                      {!prefersReducedMotion && (
                        <motion.span
                          className="absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.28)_50%,transparent_100%)]"
                          animate={{ x: ['-130%', '130%'] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                        />
                      )}
                      <span className="relative z-10">Tap To Open The Doors</span>
                      {!prefersReducedMotion && (
                        <motion.span
                          className="relative z-10 text-lg leading-none"
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      )}
                    </motion.button>

                    <motion.p
                      animate={
                        prefersReducedMotion || isAnimating
                          ? { opacity: 0.6 }
                          : { opacity: [0.45, 0.85, 0.45] }
                      }
                      transition={
                        prefersReducedMotion || isAnimating
                          ? undefined
                          : { duration: 2, repeat: Infinity }
                      }
                      className="invitation-text-shadow mt-[clamp(0.35rem,1.2vh,0.65rem)] text-center text-[clamp(0.55rem,2vw,0.7rem)] uppercase tracking-[0.22em] text-primary/55"
                    >
                      floral doors will open on tap
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function FlowerBloom({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className="drop-shadow-[0_10px_20px_rgba(13,76,58,0.18)]"
      aria-hidden="true"
    >
      <g fill="none" fillRule="evenodd" opacity={opacity}>
        <path d="M60 12 C76 14 87 30 84 45 C78 43 70 43 60 47 C50 43 42 43 36 45 C33 30 44 14 60 12" fill="var(--gold-light)" />
        <path d="M108 60 C106 76 90 87 75 84 C77 78 77 70 73 60 C77 50 77 42 75 36 C90 33 106 44 108 60" fill="var(--emerald-light)" />
        <path d="M60 108 C44 106 33 90 36 75 C42 77 50 77 60 73 C70 77 78 77 84 75 C87 90 76 106 60 108" fill="var(--gold)" />
        <path d="M12 60 C14 44 30 33 45 36 C43 42 43 50 47 60 C43 70 43 78 45 84 C30 87 14 76 12 60" fill="var(--emerald)" />
        <path d="M30 26 C42 20 56 24 60 36 C50 38 42 42 36 50 C28 46 23 37 30 26" fill="var(--gold-light)" />
        <path d="M90 26 C97 37 92 46 84 50 C78 42 70 38 60 36 C64 24 78 20 90 26" fill="var(--gold-light)" />
        <path d="M30 94 C23 83 28 74 36 70 C42 78 50 82 60 84 C56 96 42 100 30 94" fill="var(--gold-light)" />
        <path d="M90 94 C78 100 64 96 60 84 C70 82 78 78 84 70 C92 74 97 83 90 94" fill="var(--gold-light)" />
        <circle cx="60" cy="60" r="15" fill="var(--cream)" />
        <circle cx="60" cy="60" r="8" fill="var(--primary)" opacity="0.65" />
      </g>
    </svg>
  )
}
