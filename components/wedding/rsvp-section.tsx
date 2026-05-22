"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send, User, Phone, Users, MessageSquare, CheckCircle2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const EMAILJS_CONFIG = {
  serviceId: "service_frfgnnn",
  templateId: 'template_lpzervh',
  publicKey: 'UkLAP69O0YAYD_uEK',
}

export function RSVPSection() {
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const contactEmail = 'apsal.k20044@gmail.com'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: 'yes',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setSubmissionState('sending')

    if (Object.values(EMAILJS_CONFIG).some((value) => value.startsWith('YOUR_EMAILJS_'))) {
      setSubmissionState('error')
      setErrorMessage('Add your EmailJS service ID, template ID, and public key in this component before going live.')
      return
    }

    const attendanceLabel = formData.attendance === 'yes' ? 'Interested in a website' : 'Need more details'
    const templateParams = {
      to_email: contactEmail,
      subject: `Website enquiry from ${formData.name}`,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      project_size: formData.guests,
      requirement_type: attendanceLabel,
      message: formData.message || 'No additional message',
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        { publicKey: EMAILJS_CONFIG.publicKey }
      )
      setSubmissionState('success')
    } catch {
      setSubmissionState('error')
      setErrorMessage('Email could not be sent right now. Check your EmailJS template fields and credentials.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="relative bg-gradient-to-b from-transparent to-primary/[0.05] px-4 py-24" id="rsvp">
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
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Get Your Website</h2>
          <p className="text-lg font-serif text-primary/70">
            If you want a website like this, fill in your details and send them to our email
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 inline-block text-sm md:text-base font-serif text-secondary hover:text-primary transition-colors"
          >
            {contactEmail}
          </a>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-card border border-secondary/25 rounded-xl p-6 md:p-10 overflow-hidden shadow-lg">

            {submissionState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 relative z-10"
              >
                <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-display text-primary mb-4">Enquiry Sent</h3>
                <p className="font-serif text-primary/80 mb-6">
                  Your enquiry has been sent to Apsal through EmailJS.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-block mb-6 text-sm md:text-base font-serif text-secondary hover:text-primary transition-colors"
                >
                  {contactEmail}
                </a>
                <p className="arabic-text text-xl text-secondary" style={{ fontFamily: 'var(--font-arabic)' }}>
                  جزاك الله خيرا
                </p>
                <p className="text-sm font-serif text-primary/70 mt-2 italic">
                  JazakAllah Khair for reaching out
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

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary font-serif flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
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

                {/* Requirement size */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-primary font-serif flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    Project Size / Pages
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="50"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="border-secondary/30 focus:border-secondary bg-background/50"
                  />
                </div>

                {submissionState === 'error' && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-serif text-destructive">
                    {errorMessage}
                  </div>
                )}

                {/* Requirement status */}
                <div className="space-y-3">
                  <Label className="text-primary font-serif">What do you need?</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, attendance: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" className="border-secondary text-secondary" />
                      <Label htmlFor="yes" className="text-primary/80 font-serif cursor-pointer">
                        Need a website
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" className="border-secondary text-secondary" />
                      <Label htmlFor="no" className="text-primary/80 font-serif cursor-pointer">
                        Need more details
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-serif flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-secondary" />
                    Project Details (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what kind of website you want..."
                    rows={4}
                    className="border-secondary/30 focus:border-secondary bg-background/50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={submissionState === 'sending'}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-serif text-lg py-6 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      {submissionState === 'sending' ? 'Sending Enquiry...' : 'Send Details by EmailJS'}
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
                    Fill all the details and the enquiry will be delivered to {contactEmail}
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
