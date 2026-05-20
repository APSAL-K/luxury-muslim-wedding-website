"use client"

import { motion } from 'framer-motion'
import { IslamicDivider } from './islamic-patterns'

export function CoupleSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background arabesque-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">The Blessed Union</h2>
          <p className="text-lg font-serif text-primary/70">Two hearts, one soul, united in faith</p>
        </motion.div>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-right"
          >
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-xl mx-auto md:ml-auto md:mr-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-2 border-2 border-secondary/30 rounded-full pointer-events-none" />
              <div className="absolute -inset-4 border border-secondary/20 rounded-full pointer-events-none" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display text-secondary mb-2">Ahmad Hassan</h3>
            <p className="text-lg font-serif text-primary/80 mb-1">The Groom</p>
            <div className="mt-4 space-y-1">
              <p className="text-base font-serif text-primary/70">Son of</p>
              <p className="text-lg font-serif text-primary">Mr. Abdullah Hassan</p>
              <p className="text-base text-primary/60">&</p>
              <p className="text-lg font-serif text-primary">Mrs. Khadija Hassan</p>
            </div>
          </motion.div>

          {/* Center divider - visible on desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent" />
            <div className="my-4">
              <svg viewBox="0 0 60 60" className="w-16 h-16 text-secondary" fill="currentColor">
                <path d="M30 5L35 20L50 20L38 30L42 45L30 35L18 45L22 30L10 20L25 20Z" />
                <circle cx="30" cy="30" r="6" fill="var(--cream)" stroke="var(--emerald)" strokeWidth="2" />
              </svg>
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-secondary to-transparent" />
          </div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-xl mx-auto md:mr-auto md:ml-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
                  alt="Fatimah"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-2 border-2 border-secondary/30 rounded-full pointer-events-none" />
              <div className="absolute -inset-4 border border-secondary/20 rounded-full pointer-events-none" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display text-secondary mb-2">Fatimah Khan</h3>
            <p className="text-lg font-serif text-primary/80 mb-1">The Bride</p>
            <div className="mt-4 space-y-1">
              <p className="text-base font-serif text-primary/70">Daughter of</p>
              <p className="text-lg font-serif text-primary">Mr. Ibrahim Khan</p>
              <p className="text-base text-primary/60">&</p>
              <p className="text-lg font-serif text-primary">Mrs. Amina Khan</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile divider */}
        <div className="md:hidden my-8">
          <IslamicDivider />
        </div>

        {/* Islamic quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-lg bg-primary/5 border border-secondary/20 relative">
            {/* Quote marks */}
            <span className="absolute -top-4 left-8 text-6xl text-secondary/30 font-serif">&ldquo;</span>
            <span className="absolute -bottom-4 right-8 text-6xl text-secondary/30 font-serif">&rdquo;</span>
            
            <p className="arabic-text text-2xl md:text-3xl text-primary mb-4" style={{ fontFamily: 'var(--font-arabic)' }}>
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="text-base md:text-lg font-serif text-primary/80 italic leading-relaxed">
              &ldquo;And among His signs is that He created for you mates from among yourselves, 
              that you may dwell in tranquility with them, and He has put love and mercy between your hearts.&rdquo;
            </p>
            <p className="mt-4 text-sm font-serif text-secondary">— Surah Ar-Rum (30:21)</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
