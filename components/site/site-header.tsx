'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { navLinks, siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="tracking-wide text-navy-foreground/70">
            Chartered accounting, audit & advisory — trusted across Kenya
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="size-3.5" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Mail className="size-3.5" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          'border-b border-transparent bg-background/95 backdrop-blur transition-shadow',
          scrolled && 'border-border shadow-sm',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-baseline gap-2" aria-label="CPA Kimende home">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">CPA Kimende</span>
            <span className="hidden h-4 w-px bg-gold sm:block" aria-hidden />
            <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:block">
              Certified Public Accountants
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={cn(buttonVariants(), 'bg-primary text-primary-foreground hover:bg-primary/90')}
            >
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), 'mt-3 bg-primary text-primary-foreground hover:bg-primary/90')}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
