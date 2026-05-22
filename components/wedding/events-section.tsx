"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar, ExternalLink, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EventsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent to-primary/[0.04] px-4 py-24" id="events">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%230D4C3A' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="arabic-text text-2xl md:text-3xl text-secondary mb-3" 
            style={{ fontFamily: 'var(--font-arabic)' }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            تفصیلات تقریب
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-4">Event Details</h2>
          <p className="text-lg md:text-xl font-serif text-primary/70 max-w-xl mx-auto">
            Join us in celebrating this blessed occasion
          </p>
        </motion.div>

        {/* Main Event Card - Marriage Reception */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group"
        >
          <div className="relative bg-card border border-secondary/25 rounded-2xl p-8 md:p-12 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl">
            {/* Card content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <motion.p 
                  className="arabic-text text-2xl md:text-3xl text-secondary mb-2" 
                  style={{ fontFamily: 'var(--font-arabic)' }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  نکاح
                </motion.p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display gold-shimmer">Marriage Reception</h3>
              </div>

              {/* Event details grid */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
                {/* Date */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30"
                    animate={{ boxShadow: ['0 0 0px rgba(201, 168, 76, 0)', '0 0 20px rgba(201, 168, 76, 0.3)', '0 0 0px rgba(201, 168, 76, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Calendar className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
                  </motion.div>
                  <p className="text-sm text-primary/60 font-serif mb-1">On Sunday</p>
                  <p className="text-3xl md:text-4xl font-display text-primary">12th</p>
                  <p className="text-xl md:text-2xl font-display text-secondary">July 2026</p>
                  <p className="text-sm text-primary/60 font-serif mt-2 italic">(Hijra 1448, Muharam 26)</p>
                </motion.div>

                {/* Venue */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30"
                    animate={{ boxShadow: ['0 0 0px rgba(201, 168, 76, 0)', '0 0 20px rgba(201, 168, 76, 0.3)', '0 0 0px rgba(201, 168, 76, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  >
                    <MapPin className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
                  </motion.div>
                  <p className="text-sm text-primary/60 font-serif mb-1">Venue</p>
                  <p className="text-2xl md:text-3xl font-display text-primary">KMR</p>
                  <p className="text-xl md:text-2xl font-display text-secondary">Convention Center</p>
                  <p className="text-base text-primary/70 font-serif mt-2">Thenkurussi</p>
                </motion.div>

                {/* Time */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30"
                    animate={{ boxShadow: ['0 0 0px rgba(201, 168, 76, 0)', '0 0 20px rgba(201, 168, 76, 0.3)', '0 0 0px rgba(201, 168, 76, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                  >
                    <Clock className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
                  </motion.div>
                  <p className="text-sm text-primary/60 font-serif mb-1">Between</p>
                  <p className="text-2xl md:text-3xl font-display text-primary">11:00 AM</p>
                  <p className="text-lg text-primary/60">to</p>
                  <p className="text-2xl md:text-3xl font-display text-secondary">2:00 PM</p>
                </motion.div>
              </div>

              {/* Map button */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-serif text-lg px-10 py-6 group/btn relative overflow-hidden rounded-full"
                >
                  <a 
                    href="https://maps.google.com/?q=KMR+Convention+Center+Thenkurussi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Navigation className="w-5 h-5" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sharing happiness note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.div
            className="inline-block p-6 rounded-xl bg-primary/5 border border-secondary/20"
            animate={{ boxShadow: ['0 0 0px rgba(201, 168, 76, 0)', '0 0 15px rgba(201, 168, 76, 0.1)', '0 0 0px rgba(201, 168, 76, 0)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-lg md:text-xl font-display text-secondary mb-2">Sharing the happiness:</p>
            <p className="text-xl md:text-2xl font-serif text-primary">Family & Friends</p>
          </motion.div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-base font-serif text-primary/70">
            For inquiries, contact: <span className="text-secondary font-medium">7736750501</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
