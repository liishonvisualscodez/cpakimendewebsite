import Image from 'next/image'
import { Lock, Award, HeartHandshake } from 'lucide-react'

const commitments = [
  {
    icon: Lock,
    title: 'Strict Confidentiality',
    description: 'Your financial information is handled with complete discretion and care.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'Work delivered in line with recognised accounting and audit standards.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Focused',
    description: 'Advice shaped around your goals, not one-size-fits-all templates.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/founder-portrait.png"
              alt="Founder and lead accountant at CPA Kimende"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-8 -bottom-px h-px bg-gold" aria-hidden />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">About CPA Kimende</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            A professional financial partner, not just an accountant
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              CPA Kimende is a Kenyan accounting, audit, taxation and business advisory firm built on a
              simple belief: sound financial management is the foundation of every successful business.
              We combine technical expertise with genuine understanding of the local business
              environment to help our clients thrive.
            </p>
            <p>
              From SMEs and startups to established corporates, NGOs and individuals, we provide the
              clarity, compliance and confidence our clients need to grow. Our approach is
              relationship-driven — we take time to understand your situation and stay with you for the
              long term.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title}>
                <dt className="flex items-center gap-2 font-semibold text-primary">
                  <item.icon className="size-5 text-gold" />
                  {item.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
