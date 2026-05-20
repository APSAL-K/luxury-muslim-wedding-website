"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Phone, Users, MessageSquare, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { GeometricBorder } from './islamic-patterns'

export function RSVPSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-primary/5 islamic-pattern" id="rsvp">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="arabic-text text-2xl text-secondary mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            دعوت نامہ
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">RSVP</h2>
          <p className="text-lg font-serif text-primary/70">
            Kindly let us know if you will be joining us for our blessed celebration
          </p>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-card border-2 border-secondary/30 rounded-lg p-6 md:p-10 overflow-hidden">
            <GeometricBorder className="opacity-20" />

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 relative z-10"
              >
                <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-display text-primary mb-4">Thank You!</h3>
                <p className="font-serif text-primary/80 mb-6">
                  Your response has been recorded. We look forward to celebrating with you!
                </p>
                <p className="arabic-text text-xl text-secondary" style={{ fontFamily: 'var(--font-arabic)' }}>
                  جزاك الله خيرا
                </p>
                <p className="text-sm font-serif text-primary/70 mt-2 italic">
                  JazakAllah Khair for celebrating with us
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-serif flex items-center gap-2">
                    <User className="w-4 h-4 text-secondary" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-secondary/30 focus:border-secondary bg-background/50"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary font-serif flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="border-secondary/30 focus:border-secondary bg-background/50"
                  />
                </div>

                {/* Number of guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-primary font-serif flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    Number of Guests
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="border-secondary/30 focus:border-secondary bg-background/50"
                  />
                </div>

                {/* Attendance */}
                <div className="space-y-3">
                  <Label className="text-primary font-serif">Will you be attending?</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, attendance: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" className="border-secondary text-secondary" />
                      <Label htmlFor="yes" className="text-primary/80 font-serif cursor-pointer">
                        Joyfully Accept
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" className="border-secondary text-secondary" />
                      <Label htmlFor="no" className="text-primary/80 font-serif cursor-pointer">
                        Regretfully Decline
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-serif flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-secondary" />
                    Message for the Couple (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your blessings and wishes..."
                    rows={4}
                    className="border-secondary/30 focus:border-secondary bg-background/50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-serif text-lg py-6 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send RSVP
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </div>

                {/* Closing dua */}
                <div className="text-center pt-4">
                  <p className="arabic-text text-lg text-secondary" style={{ fontFamily: 'var(--font-arabic)' }}>
                    جزاك الله خيرا
                  </p>
                  <p className="text-sm font-serif text-primary/70 italic">
                    JazakAllah Khair for celebrating with us
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
