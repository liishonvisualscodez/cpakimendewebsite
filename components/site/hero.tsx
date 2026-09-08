import Image from 'next/image'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const trustPoints = ['KRA-compliant filings', 'Confidential & independent', 'Practical financial advice']

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <ShieldCheck className="size-3.5" />
            Accounting · Tax · Audit · Advisory
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Professional Accounting & Business Advisory Services You Can Trust
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
            CPA Kimende helps individuals, businesses and organisations across Kenya keep accurate
            records, stay compliant and make confident financial decisions — combining deep expertise
            in accounting, tax, audit and advisory with a genuinely client-focused approach.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-gold text-gold-foreground hover:bg-gold/90',
              )}
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground',
              )}
            >
              Explore Our Services
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <CheckCircle2 className="size-4 text-gold" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-navy-foreground/15 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero-boardroom.png"
              alt="CPA Kimende professionals reviewing financial reports together in a modern boardroom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-gold/30 bg-navy/90 px-6 py-5 backdrop-blur sm:block">
            <p className="font-serif text-3xl font-bold text-gold">15+</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-navy-foreground/70">
              Years of combined
              <br />
              professional experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
