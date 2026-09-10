"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, MessageSquare, Facebook } from "lucide-react"
import {
  ADDRESS_LINES,
  EMAIL,
  EMAIL_MAILTO,
  FACEBOOK_URL,
  MAP_EMBED_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/lib/site"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div>
      <section className="relative overflow-hidden cta-band text-primary-foreground">
        <div className="section-container relative py-14 sm:py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="animate-rise text-xs font-semibold uppercase tracking-widest text-sun sm:text-sm">
              Get in touch
            </p>
            <h1 className="animate-rise mt-2 font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl md:text-5xl">
              Contact / Visit {SITE_NAME}
            </h1>
            <p className="animate-rise-delay mt-3 text-base text-primary-foreground/85 sm:mt-4 sm:text-lg">
              Arrange a visit, ask about nursery plants and greenhouse gardening, or get in touch — Bandarawela
            </p>
          </div>
        </div>
      </section>

      <div className="section-mint">
        <div className="section-container section-pad">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <aside className="space-y-8 lg:col-span-2 lg:space-y-10">
              <div>
                <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">Visit</h2>
                <ul className="mt-5 space-y-5 text-sm sm:mt-6">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">Address</p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {ADDRESS_LINES.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href={PHONE_TEL}
                        className="mt-1 block min-h-11 py-2 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href={EMAIL_MAILTO}
                        className="mt-1 block break-all text-muted-foreground transition-colors hover:text-primary"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="mt-1 text-muted-foreground">Mon – Fri: 8:00 AM – 6:00 PM</p>
                      <p className="text-muted-foreground">Sat: 8:00 AM – 4:00 PM</p>
                      <p className="text-muted-foreground">Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">Quick support</h2>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  <Button asChild className="h-11 bg-[#25D366] text-white hover:bg-[#20BD5A]">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="h-11 border-primary/40 text-primary hover:bg-primary/5" asChild>
                    <a href={PHONE_TEL}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call now
                    </a>
                  </Button>
                  <Button variant="outline" className="h-11 border-primary/40 text-primary hover:bg-primary/5" asChild>
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 border-sun/50 bg-sun/10 text-accent-foreground hover:bg-sun/20"
                    asChild
                  >
                    <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                      TikTok
                    </a>
                  </Button>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Tell us how we can help — we aim to reply within a day.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5 rounded-lg border-2 border-primary/15 bg-card p-4 shadow-sm sm:mt-8 sm:p-6 md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      className="h-11"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      className="h-11"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      className="h-11"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger id="inquiryType" className="h-11">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visit">Visit</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    className="h-11"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    required
                    className="min-h-[8rem]"
                  />
                </div>

                <Button type="submit" size="lg" className="h-12 w-full bg-primary shadow-sm shadow-primary/25 sm:w-auto">
                  Send message
                </Button>
              </form>
            </div>
          </div>

          <section className="mt-12 sm:mt-16">
            <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">Find us</h2>
            <div className="mt-4 h-56 overflow-hidden rounded-lg border-2 border-primary/20 sm:mt-6 sm:h-72 md:h-96">
              <iframe
                title="Haritha Saviya Agro Park on Google Maps — Bandarawela"
                className="h-full w-full border-0"
                src={MAP_EMBED_URL}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
