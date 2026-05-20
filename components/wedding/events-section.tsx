"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GeometricBorder } from './islamic-patterns'

interface EventCardProps {
  title: string
  arabicTitle: string
  date: string
  time: string
  venue: string
  address: string
  mapLink: string
  delay?: number
}

function EventCard({ title, arabicTitle, date, time, venue, address, mapLink, delay = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="relative bg-card border-2 border-secondary/30 rounded-lg p-6 md:p-8 hover:border-secondary transition-colors duration-300 overflow-hidden">
        <GeometricBorder className="opacity-30 group-hover:opacity-50 transition-opacity" />
        
        {/* Card content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="arabic-text text-xl text-secondary mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
              {arabicTitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-display text-primary">{title}</h3>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-primary/60">Date</p>
                <p className="font-serif">{date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-primary/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-primary/60">Time</p>
                <p className="font-serif">{time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-primary/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-primary/60">Venue</p>
                <p className="font-serif font-semibold">{venue}</p>
                <p className="text-sm text-primary/60">{address}</p>
              </div>
            </div>
          </div>

          {/* Map button */}
          <div className="mt-6 text-center">
            <Button
              asChild
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground group/btn"
            >
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                <span>View on Map</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function EventsSection() {
  const events = [
    {
      title: 'Mehndi Ceremony',
      arabicTitle: 'مہندی',
      date: 'Thursday, August 13th, 2026',
      time: '6:00 PM onwards',
      venue: 'Rose Garden Banquet',
      address: '456 Garden Avenue, City Center',
      mapLink: 'https://maps.google.com/?q=Rose+Garden+Banquet',
    },
    {
      title: 'Nikah Ceremony',
      arabicTitle: 'نکاح',
      date: 'Saturday, August 15th, 2026',
      time: '4:00 PM',
      venue: 'Grand Mosque Hall',
      address: '123 Masjid Street, Downtown',
      mapLink: 'https://maps.google.com/?q=Grand+Mosque+Hall',
    },
    {
      title: 'Walima Reception',
      arabicTitle: 'ولیمہ',
      date: 'Sunday, August 16th, 2026',
      time: '7:00 PM onwards',
      venue: 'Crystal Palace Ballroom',
      address: '789 Royal Boulevard, Uptown',
      mapLink: 'https://maps.google.com/?q=Crystal+Palace+Ballroom',
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-primary/5" id="events">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="arabic-text text-2xl text-secondary mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            تفصیلات تقریب
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Wedding Events</h2>
          <p className="text-lg font-serif text-primary/70 max-w-xl mx-auto">
            Join us in celebrating these blessed occasions as two families become one
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <EventCard key={event.title} {...event} delay={index * 0.2} />
          ))}
        </div>

        {/* Dress code note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-base font-serif text-primary/70">
            <span className="text-secondary font-semibold">Dress Code:</span> Traditional/Formal Attire
          </p>
        </motion.div>
      </div>
    </section>
  )
}
