"use client"

import { motion } from 'framer-motion'
import { IslamicDivider } from './islamic-patterns'

export function CoupleSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent px-4 py-24">
      {/* Animated corner decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <GeometricPattern />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <GeometricPattern />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-4"
            whileInView={{ 
              textShadow: ['0 0 0px rgba(201, 168, 76, 0)', '0 0 15px rgba(201, 168, 76, 0.3)', '0 0 0px rgba(201, 168, 76, 0)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            The Blessed Union
          </motion.h2>
          <p className="text-lg md:text-xl font-serif text-primary/70">Two hearts, one soul, united in faith</p>
        </motion.div>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              {/* Photo with decorative frame */}
              <motion.div 
                className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/pride/WhatsApp Image 2026-05-21 at 19.24.00.jpeg" 
                  alt="Anziya - The Bride" 
                  className="w-full h-50 md:h-70 object-cover "
                />
              </motion.div>
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-2 border-2 border-primary/20 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-4 border border-primary/15 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-display text-primary mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Anziya
            </motion.h3>
            <motion.p 
              className="text-base md:text-lg font-serif text-primary/60 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              The Bride
            </motion.p>
            
            <motion.div 
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm md:text-base font-serif text-primary/70">Daughter of</p>
              <p className="text-base md:text-lg font-serif text-primary font-medium">Mr. Abdul Jaleel. A & Mrs. Soujath. K</p>
              <p className="text-xs md:text-sm text-primary/60">Anakkode House, Kuzhalmannam, Palakkad</p>
              <div className="pt-3 border-t border-primary/10 mt-3">
                <p className="text-xs font-serif text-primary/50 italic">Grand D/o</p>
                <p className="text-xs md:text-sm font-serif text-primary/70">Late. Alu Rawther & Mrs. Sulekha</p>
                <p className="text-xs md:text-sm font-serif text-primary/70">and Late Kabeer & Mrs. Noorjahan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center decoration - visible on all screens */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
            <motion.div 
              className="w-px h-24 bg-gradient-to-b from-transparent via-secondary to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="my-4"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <HeartDecoration />
            </motion.div>
            <motion.div 
              className="w-px h-24 bg-gradient-to-b from-transparent via-secondary to-transparent"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              {/* Photo placeholder with decorative frame */}
              <motion.div 
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-secondary shadow-2xl mx-auto bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/groom/WhatsApp Image 2026-05-21 at 19.46.56 (1).jpeg" 
                  alt="Ramees Mohammed - The Groom" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-3 border-2 border-secondary/30 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-5 border border-secondary/20 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-7 border border-dashed border-secondary/10 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl font-display gold-shimmer mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ramees Mohammed
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl font-serif text-secondary mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              The Groom
            </motion.p>
            
            <motion.div 
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm md:text-base font-serif text-primary/70">Son of</p>
              <p className="text-lg md:text-xl font-serif text-primary font-medium">Mr. Aneefa. A & Mrs. Saleena. J</p>
              <p className="text-sm text-primary/60">Thekkinkad House, Pallanchathanur, Palakkad</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile divider */}
        <div className="md:hidden my-8 flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartDecoration />
          </motion.div>
        </div>

        {/* Islamic quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <motion.div 
            className="p-8 md:p-10 rounded-2xl bg-primary/5 border border-secondary/20 relative overflow-hidden"
            whileHover={{ boxShadow: '0 0 30px rgba(201, 168, 76, 0.15)' }}
          >
            {/* Quote marks */}
            <span className="absolute -top-2 left-6 text-7xl text-secondary/20 font-serif">&ldquo;</span>
            <span className="absolute -bottom-6 right-6 text-7xl text-secondary/20 font-serif">&rdquo;</span>
            
            <motion.p 
              className="arabic-text text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-relaxed" 
              style={{ fontFamily: 'var(--font-arabic)' }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </motion.p>
            <p className="text-base md:text-lg font-serif text-primary/80 italic leading-relaxed px-4">
              &ldquo;And among His signs is that He created for you mates from among yourselves, 
              that you may dwell in tranquility with them, and He has put love and mercy between your hearts.&rdquo;
            </p>
            <p className="mt-6 text-sm md:text-base font-serif text-secondary font-medium">— Surah Ar-Rum (30:21)</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeartDecoration() {
  return (
    <svg viewBox="0 0 60 60" className="w-16 h-16 md:w-20 md:h-20">
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--emerald)" />
        </linearGradient>
      </defs>
      {/* Heart shape */}
      <path 
        d="M30 50 L10 30 Q5 20 15 15 Q25 10 30 20 Q35 10 45 15 Q55 20 50 30 Z" 
        fill="url(#heartGradient)"
        opacity="0.8"
      />
      {/* Inner circle with initials */}
      <circle cx="30" cy="28" r="8" fill="var(--cream)" stroke="var(--emerald)" strokeWidth="1.5" />
      <text x="30" y="32" textAnchor="middle" className="fill-emerald text-xs font-display">A&R</text>
    </svg>
  )
}

function GeometricPattern() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
      <path
        d="M50 0 L100 50 L50 100 L0 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
      <path
        d="M50 20 L80 50 L50 80 L20 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  )
}
