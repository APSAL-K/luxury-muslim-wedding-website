"use client"

import { motion } from 'framer-motion'
import { IslamicDivider } from './islamic-patterns'

export function StorySection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-primary/5 to-background overflow-hidden" id="story">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-4"
          >
            Our Story
          </motion.h2>
          <p className="text-lg md:text-xl font-serif text-primary/70">A Journey of Love & Faith</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src="/cute-couple-with-sunset-silhouette-vector.jpg" 
                alt="Couple" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-secondary/50 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/50 rounded-br-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display text-primary mb-6">Written in the Stars</h3>
            <p className="text-lg font-serif text-primary/80 leading-relaxed">
              "We created you in pairs." (Quran 78:8)
            </p>
            <p className="text-base font-serif text-primary/70 leading-relaxed">
              By the grace of the Almighty, our paths crossed and two families became one. Every step of our journey has been guided by faith and enveloped in love. We look forward to building our future upon these beautiful foundations.
            </p>
            <p className="text-base font-serif text-primary/70 leading-relaxed">
              We invite you to share our joy and celebrate this beautiful milestone with us. Your presence and prayers mean the world to us as we begin this new chapter.
            </p>
            
            <div className="pt-6">
              <IslamicDivider />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
