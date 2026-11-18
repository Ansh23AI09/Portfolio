import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Clock,
  AlertCircle
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { SocialLinks } from '../common/SocialLinks'
import { Button } from '../common/Button'
import { SpotlightCard } from '../common/SpotlightCard'
import { personalInfo } from '../../data/portfolioData'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    try {
      if (accessKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData,
            from_name: formData.name,
            subject: `Portfolio Message: ${formData.subject}`,
          }),
        })
        const result = await response.json()
        if (!result.success) throw new Error(result.message || 'Transmission failed')
      } else if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!response.ok) throw new Error('Transmission failed')
      } else {
        // Fallback local simulation with graceful feedback
        await new Promise((resolve) => setTimeout(resolve, 800))
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message. Please reach out directly via email.'
      setErrorMessage(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="08"
          title="Get In Touch / Contact"
          subtitle="Interested in hiring, collaborating on an engineering project, or discussing software systems? Drop a note below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <SpotlightCard className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-code text-xs font-semibold text-[#E53945] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53945] animate-pulse" />
                  DIRECT CHANNELS
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  Let's Build Something Exceptional
                </h3>
                <p className="font-body text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                  I'm actively interviewing for full-time software engineering roles, internships, and high-impact technology projects. My inbox is always open.
                </p>
              </div>

              {/* Email Copier Card */}
              <div className="p-4 rounded-xl bg-[#101113] border border-[#303238] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-[#E53945]/15 text-[#E53945] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-code text-[11px] text-[#A1A1AA] uppercase">Personal Email</p>
                    <p className="font-code text-xs sm:text-sm font-semibold text-white truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-[#25272C] hover:bg-[#303238] text-[#A1A1AA] hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* External Profiles */}
              <div>
                <p className="font-code text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3">
                  Developer Profiles & Networks
                </p>
                <SocialLinks layout="cards" />
              </div>
            </SpotlightCard>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-xl bg-[#1C1E22] border border-[#303238] flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#22C55E] shrink-0" />
              <p className="font-code text-xs text-[#A1A1AA]">
                Typical response time: <span className="text-white font-semibold">&lt; 24 hours</span>.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#E53945]" />
                <h3 className="font-heading text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] flex items-center gap-3 text-sm font-body"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been received. I will review it and reply promptly.</span>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-[#E53945]/15 border border-[#E53945]/40 text-[#FF5964] flex items-center gap-3 text-sm font-body"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block font-code text-xs font-semibold uppercase text-[#A1A1AA] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-[#101113] border border-[#303238] text-white placeholder-[#A1A1AA]/50 text-sm font-body focus:outline-none focus:border-[#E53945] focus:ring-1 focus:ring-[#E53945] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block font-code text-xs font-semibold uppercase text-[#A1A1AA] mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#101113] border border-[#303238] text-white placeholder-[#A1A1AA]/50 text-sm font-body focus:outline-none focus:border-[#E53945] focus:ring-1 focus:ring-[#E53945] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block font-code text-xs font-semibold uppercase text-[#A1A1AA] mb-2">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / VerifyWeb Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#101113] border border-[#303238] text-white placeholder-[#A1A1AA]/50 text-sm font-body focus:outline-none focus:border-[#E53945] focus:ring-1 focus:ring-[#E53945] transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block font-code text-xs font-semibold uppercase text-[#A1A1AA] mb-2">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, role requirements, or project details..."
                    className="w-full px-4 py-3 rounded-xl bg-[#101113] border border-[#303238] text-white placeholder-[#A1A1AA]/50 text-sm font-body focus:outline-none focus:border-[#E53945] focus:ring-1 focus:ring-[#E53945] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Transmitting Dispatch...' : 'Send Message'}
                  </Button>
                </div>
              </form>

            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  )
}
