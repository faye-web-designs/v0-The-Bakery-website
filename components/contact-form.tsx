'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Hidden field for spam detection
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message)
        setFormData({ name: '', email: '', phone: '', message: '', honeypot: '', consent: false })
        setErrors({})
      } else {
        toast.error(data.error)
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field - hidden from users, bots will fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name *</FieldLabel>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            maxLength={100}
          />
          {errors.name && (
            <FieldError id="name-error" className="text-destructive">
              {errors.name}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email *</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            maxLength={254}
          />
          {errors.email && (
            <FieldError id="email-error" className="text-destructive">
              {errors.email}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone (optional)</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(515) 555-0123"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            maxLength={20}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message *</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
            maxLength={2000}
          />
          {errors.message && (
            <FieldError id="message-error" className="text-destructive">
              {errors.message}
            </FieldError>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            {formData.message.length}/2000 characters
          </p>
        </Field>
        
        {/* GDPR Consent */}
        <Field>
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, consent: checked === true })
              }
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              aria-invalid={!!errors.consent}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="consent"
                className="text-sm font-medium leading-relaxed cursor-pointer"
              >
                I agree to the{' '}
                <Link href="/privacy" className="text-primary underline hover:text-primary/80">
                  privacy policy
                </Link>{' '}
                and consent to The Bakery storing my information to respond to my inquiry. *
              </label>
              {errors.consent && (
                <FieldError id="consent-error" className="text-destructive">
                  {errors.consent}
                </FieldError>
              )}
            </div>
          </div>
        </Field>
      </FieldGroup>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        * Required fields. We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
