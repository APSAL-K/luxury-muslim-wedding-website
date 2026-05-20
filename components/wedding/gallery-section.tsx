"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { MughalArch } from './islamic-patterns'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
    alt: 'Rose bouquet',
    caption: 'The Beauty of Love',
  },
  {
    src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&h=400&fit=crop',
    alt: 'Islamic lanterns',
    caption: 'Guiding Light',
  },
  {
    src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=600&fit=crop',
    alt: 'Mosque architecture',
    caption: 'Sacred Spaces',
  },
  {
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
    alt: 'Celebration lights',
    caption: 'Celebration of Joy',
  },
  {
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=800&fit=crop',
    alt: 'Wedding rings',
    caption: 'Eternal Bond',
  },
  {
    src: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=600&h=400&fit=crop',
    alt: 'Henna design',
    caption: 'Mehndi Artistry',
  },
  {
    src: 'https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?w=600&h=600&fit=crop',
    alt: 'Wedding decor',
    caption: 'Golden Moments',
  },
  {
    src: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&h=400&fit=crop',
    alt: 'Couple silhouette',
    caption: 'Together Forever',
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-primary/5 to-background" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Section header with Mughal arch */}
        <MughalArch className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="arabic-text text-2xl text-secondary mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
              تصویری جھلکیاں
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Our Gallery</h2>
            <p className="text-lg font-serif text-primary/70 max-w-xl mx-auto">
              A glimpse into our journey and the beauty of our celebration
            </p>
          </motion.div>
        </MughalArch>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-secondary/20 hover:border-secondary transition-colors duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground font-serif italic text-sm">{image.caption}</p>
                </div>
                {/* Polaroid-style frame effect */}
                <div className="absolute inset-0 border-8 border-card opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-primary-foreground hover:text-secondary transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg border-4 border-secondary"
                />
                <p className="text-center text-primary-foreground font-serif italic mt-4 text-lg">
                  {selectedImage.caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
