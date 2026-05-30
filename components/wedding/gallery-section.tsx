"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { IslamicDivider } from './islamic-patterns'

// Define the structure of our gallery item
interface GalleryItem {
  id: number
  src: string
  category: 'couple' | 'bride' | 'groom'
  alt: string
  caption: string
  className?: string
}

// List of all the groom, bride and couple images in the public folder
const GALLERY_ITEMS: GalleryItem[] = [
  // Couple Photos
  {
    id: 1,
    src: '/couple/WhatsApp Image 2026-05-21 at 18.41.51.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Walking Hand in Hand',
    caption: 'Together, we begin a lifetime of beautiful walks.'
  },
  {
    id: 2,
    src: '/couple/WhatsApp Image 2026-05-21 at 18.42.04.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Smiling Together',
    caption: 'Capturing our shared smiles and warm laughter.'
  },
  {
    id: 3,
    src: '/couple/WhatsApp Image 2026-05-21 at 18.42.17.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 4,
    src: '/couple/couple-2.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 5,
    src: '/couple/couple-3.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 6,
    src: '/couple/couple-4.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 7,
    src: '/couple/couple-5.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 8,
    src: '/couple/couple-6.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 9,
    src: '/couple/couple-7.jpeg',
    className:"w-full h-full object-top",
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 10,
    src: '/couple/couple-8.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },
  {
    id: 11,
    src: '/couple/couple-9.jpeg',
    category: 'couple',
    alt: 'Anziya and Ramees - Grand Celebration',
    caption: 'Surrounded by love, ready for our blessed journey.'
  },

  // Bride Photos (Anziya)
  {
    id: 12,
    src: '/pride/WhatsApp Image 2026-05-21 at 18.42.00.jpeg',
    category: 'bride',
    alt: 'Anziya - The Beautiful Bride',
    caption: 'A sight of grace and stunning bridal elegance.'
  },
  {
    id: 13,
    src: '/pride/WhatsApp Image 2026-05-21 at 18.42.07.jpeg',
    category: 'bride',
    alt: 'Anziya - Bridal Portraits',
    caption: 'Embodying serene beauty and Islamic tradition.'
  },
  {
    id: 14,
    src: '/pride/WhatsApp Image 2026-05-21 at 18.42.11.jpeg',
    category: 'bride',
    alt: 'Anziya - Delicate Details',
    caption: 'Every design, a celebration of this blessed day.'
  },
  {
    id: 15,
    src: '/pride/WhatsApp Image 2026-05-21 at 19.24.00.jpeg',
    category: 'bride',
    alt: 'Anziya - Joyful Bride',
    caption: 'Smiling into a future filled with mercy and love.'
  },
  {
    id: 16,
    src: '/pride/WhatsApp Image 2026-05-21 at 19.43.10.jpeg',
    category: 'bride',
    alt: 'Anziya - Radiance',
    caption: 'A radiant smile reflecting the blessing of Nikah.'
  },
  {
    id: 17,
    src: '/pride/WhatsApp Image 2026-05-21 at 19.24.07.jpeg',
    category: 'bride',
    alt: 'Anziya - Intricate Dress Details',
    caption: 'Adorned in exquisite, luxury traditional bridal wear.'
  },
  {
    id: 18,
    src: '/pride/IMG-20250525-WA0106.jpg',
    category: 'bride',
    alt: 'Anziya - Posing Gracefully',
    caption: 'Moments of quiet grace before the celebration.'
  },
  {
    id: 19,
    src: '/pride/WhatsApp Image 2026-05-21 at 19.43.09.jpeg',
    category: 'bride',
    alt: 'Anziya - Posing Gracefully',
    caption: 'Moments of quiet grace before the celebration.'
  },
  

  // Groom Photos (Ramees)
  {
    id: 20,
    src: '/groom/WhatsApp Image 2026-05-21 at 19.46.56 (1).jpeg',
    category: 'groom',
    alt: 'Ramees Mohammed - The Groom Portrait',
    caption: 'Standing strong, ready for a lifetime of devotion.'
  },
  {
    id: 21,
    src: '/groom/WhatsApp Image 2026-05-21 at 19.24.06 (2).jpeg',
    category: 'groom',
    alt: 'Ramees Mohammed - Sherwani Details',
    caption: 'Dressed in a luxury custom-tailored designer sherwani.'
  },
  {
    id: 22,
    src: '/groom/WhatsApp Image 2026-05-21 at 19.24.06.jpeg',
    category: 'groom',
    alt: 'Ramees Mohammed - The Blessed Groom',
    caption: 'A moment of reflection on this sacred union.'
  },
  {
    id: 23,
    src: '/groom/WhatsApp Image 2026-05-21 at 19.24.06 (1).jpeg',
    category: 'groom',
    alt: 'Ramees Mohammed - Posing Confidently',
    caption: 'Joy and gratitude on the most special day.'
  },
  {
    id: 24,
    src: '/groom/WhatsApp Image 2026-05-21 at 19.46.59.jpeg',
    category: 'groom',
    alt: 'Ramees Mohammed - Celebratory Moments',
    caption: 'Elegance, charm, and celebration in Pallanchathanur.'
  },
  {    
    id: 25,
    src: '/groom/ramees-eid.jpg',
    category: 'groom',
    alt: 'Ramees Mohammed - Eid-Ul-Adha Celebration',
    caption: 'A joyful moment of celebration and gratitude during Eid.'
  }
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'couple' | 'bride' | 'groom'>('all')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Filter gallery items based on active tab
  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  )

  const handleOpenLightbox = (src: string) => {
    const index = GALLERY_ITEMS.findIndex(item => item.src === src)
    if (index !== -1) {
      setSelectedImageIndex(index)
    }
  }

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null)
  }

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
    }
  }

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length)
    }
  }

  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-transparent via-emerald/[0.05] to-transparent px-4 py-24">
      {/* Intricate decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[500px] h-[500px] text-secondary">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <ImageIcon className="w-6 h-6 text-secondary" />
            <span className="font-serif text-sm uppercase tracking-[0.2em] text-secondary font-medium">Love in Frames</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-4">
            Our Precious Moments
          </h2>
          <p className="text-base md:text-lg font-serif text-primary/70 max-w-xl mx-auto">
            A beautiful collection of memories capturing our joy, love, and the divine grace of our new beginning.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {([
            { id: 'all', label: 'All Moments' },
            { id: 'couple', label: 'Couple' },
            { id: 'bride', label: 'The Bride (Anziya)' },
            { id: 'groom', label: 'The Groom (Ramees)' }
          ] as const).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`relative px-6 py-2.5 rounded-full font-serif text-sm transition-all duration-300 pointer-events-auto cursor-pointer ${
                activeCategory === tab.id
                  ? 'text-primary-foreground font-medium'
                  : 'text-primary/70 hover:text-primary hover:bg-primary/5 bg-transparent'
              }`}
            >
              {activeCategory === tab.id && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-secondary/20 shadow-lg group cursor-pointer"
                onClick={() => handleOpenLightbox(item.src)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.className || "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"}
                  loading="lazy"
                />

                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {/* Subtle golden corner decorations in hover frame */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-secondary/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  <span className="text-secondary font-serif text-xs uppercase tracking-widest mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category === 'couple' ? 'Blessed Couple' : item.category === 'bride' ? 'Elegant Bride' : 'Blessed Groom'}
                  </span>
                  <h3 className="text-primary-foreground font-display text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.alt}
                  </h3>
                  <p className="text-primary-foreground/70 font-serif text-xs italic mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Divider */}
        <IslamicDivider />
      </div>

      {/* Luxury Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={handleCloseLightbox}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer z-50 shadow-lg border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Control */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer z-50 shadow-lg border border-white/10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image Slider Stage */}
            <div className="relative max-w-4xl max-h-[75vh] w-[90vw] h-full flex items-center justify-center select-none">
              <motion.img
                key={selectedImageIndex}
                src={GALLERY_ITEMS[selectedImageIndex].src}
                alt={GALLERY_ITEMS[selectedImageIndex].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain rounded-lg border border-secondary/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              />
            </div>

            {/* Right Control */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer z-50 shadow-lg border border-white/10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Caption & Navigation Indicators */}
            <div 
              className="absolute bottom-6 left-0 right-0 text-center px-6 max-w-2xl mx-auto z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-secondary font-display text-xl mb-1">
                {GALLERY_ITEMS[selectedImageIndex].alt}
              </h3>
              <p className="text-white/70 font-serif text-sm italic mb-4">
                {GALLERY_ITEMS[selectedImageIndex].caption}
              </p>
              
              {/* Dots Indicators */}
              <div className="flex justify-center gap-1.5">
                {GALLERY_ITEMS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === selectedImageIndex 
                        ? 'bg-secondary w-6 shadow-md' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
