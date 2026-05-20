import { Navigation } from '@/components/wedding/navigation'
import { HeroSection } from '@/components/wedding/hero-section'
import { CoupleSection } from '@/components/wedding/couple-section'
import { EventsSection } from '@/components/wedding/events-section'
import { GallerySection } from '@/components/wedding/gallery-section'
import { RSVPSection } from '@/components/wedding/rsvp-section'
import { Footer } from '@/components/wedding/footer'
import { IslamicPatterns } from '@/components/wedding/islamic-patterns'

export default function WeddingInvitation() {
  return (
    <main className="relative overflow-hidden">
      {/* Floating decorative elements */}
      <IslamicPatterns />
      
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
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* RSVP Section */}
      <RSVPSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
