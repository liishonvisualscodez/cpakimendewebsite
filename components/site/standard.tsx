import { Quote } from 'lucide-react'

const pillars = [
  {
    statement:
      'Every engagement begins with listening. We make sure we understand your business before we recommend anything.',
    label: 'Our promise on advice',
  },
  {
    statement:
      'You will always know where your finances stand — clear reporting, on time, explained in plain language.',
    label: 'Our promise on clarity',
  },
  {
    statement:
      'What you share with us stays with us. Confidentiality is built into how we work, not added on.',
    label: 'Our promise on trust',
  },
]

export function Standard() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">The CPA Kimende Standard</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What clients can expect from us
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We hold ourselves to clear commitments on every engagement — the standards that define
            working with our firm.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <figure
              key={pillar.label}
              className="flex flex-col rounded-lg border border-border bg-secondary/50 p-8"
            >
              <Quote className="size-8 text-gold" aria-hidden />
              <blockquote className="mt-5 flex-1 text-pretty font-serif text-lg leading-relaxed text-primary">
                {pillar.statement}
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {pillar.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
