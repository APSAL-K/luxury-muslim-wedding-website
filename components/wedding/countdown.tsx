"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', arabicLabel: 'أيام' },
    { value: timeLeft.hours, label: 'Hours', arabicLabel: 'ساعات' },
    { value: timeLeft.minutes, label: 'Minutes', arabicLabel: 'دقائق' },
    { value: timeLeft.seconds, label: 'Seconds', arabicLabel: 'ثواني' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg bg-primary/10 border-2 border-secondary flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl md:text-5xl font-display text-primary font-semibold">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-secondary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-secondary" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-secondary" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-secondary" />
          </div>
          <span className="mt-2 text-sm md:text-base font-serif text-primary/80">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
