"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/wedding/navigation'
import { HeroSection } from '@/components/wedding/hero-section'
import { CoupleSection } from '@/components/wedding/couple-section'
import { EventsSection } from '@/components/wedding/events-section'
import { StorySection } from '@/components/wedding/story-section'
import { RSVPSection } from '@/components/wedding/rsvp-section'
import { Footer } from '@/components/wedding/footer'
import { WeddingSiteBackground } from '@/components/wedding/wedding-site-background'
import { OpeningModal } from '@/components/wedding/opening-modal'
import { GallerySection } from '@/components/wedding/gallery-section'

export default function WeddingInvitation() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true)
  }

  return (
    <>
      {/* Opening Modal - shows first */}
      {!isInvitationOpen && <OpeningModal onOpen={handleOpenInvitation} />}

      {/* Main Wedding Website - revealed after modal */}
      <AnimatePresence>
        {isInvitationOpen && (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <WeddingSiteBackground />

            <div className="relative z-10">
            {/* Navigation */}
            <Navigation />
            
            {/* Hero Section */}
            <HeroSection />
            
            {/* Couple Section */}
            <section id="couple">
              <CoupleSection />
            </section>
            
            {/* Events Section */}
            <EventsSection />

            {/* Story Section */}
            <StorySection />
            
            {/* Gallery Section */}
            <GallerySection />
            
            {/* RSVP Section */}
            <RSVPSection />
            
            {/* Footer */}
            <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
