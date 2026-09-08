import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
      <Image
        src="/images/nairobi-skyline.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Let&apos;s Talk About Your Financial Needs
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/80">
          Whether you need accounting support, tax advice, audit services or business advisory, our
          team is ready to help.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-gold text-gold-foreground hover:bg-gold/90')}
          >
            Book a Consultation
            <ArrowRight className="size-4" />
          </a>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground',
            )}
          >
            <Phone className="size-4" />
            Talk to an Accountant
          </a>
        </div>
      </div>
    </section>
  )
}
