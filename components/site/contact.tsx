'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { services, siteConfig } from '@/lib/site'

const inputClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/30'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Contact Us</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Request a consultation
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell us a little about what you need and we&apos;ll get back to you promptly. Everything you
            share is treated in strict confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <ContactItem icon={Phone} label="Phone" href={`tel:${siteConfig.phoneHref}`}>
                {siteConfig.phoneDisplay}
              </ContactItem>
              <ContactItem icon={Mail} label="Email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </ContactItem>
              <ContactItem icon={MapPin} label="Office">
                {siteConfig.addressLines.join(', ')}
              </ContactItem>
              <ContactItem
                icon={MessageCircle}
                label="WhatsApp"
                href={`https://wa.me/${siteConfig.whatsappHref}`}
              >
                Chat with us
              </ContactItem>
            </div>

            <div className="rounded-lg border border-border bg-secondary/50 p-6">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="size-5 text-gold" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.map((row) => (
                  <div key={row.day} className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">{row.day}</dt>
                    <dd className="font-medium text-foreground">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="CPA Kimende office location on Google Maps"
                src="https://www.google.com/maps?q=Kimathi+Street,+Nairobi,+Kenya&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckCircle2 className="size-8" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-primary">Thank you</h3>
                <p className="mt-2 max-w-sm text-pretty text-muted-foreground">
                  Your request has been received. A member of the CPA Kimende team will be in touch
                  shortly to arrange your consultation.
                </p>
                <Button
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" required className={inputClass} placeholder="Your full name" />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+254 7XX XXX XXX" />
                  </Field>
                  <Field label="Company / Organisation" htmlFor="company">
                    <input id="company" name="company" className={inputClass} placeholder="Optional" />
                  </Field>
                </div>

                <Field label="Service Required" htmlFor="service">
                  <select id="service" name="service" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other / Not sure yet</option>
                  </select>
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={inputClass}
                    placeholder="How can we help you?"
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-1 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Request a Consultation
                  <Send className="size-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href?: string
  children: React.ReactNode
}) {
  const body = (
    <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-gold/50">
      <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Icon className="size-5" />
      </span>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{children}</p>
    </div>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    body
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
