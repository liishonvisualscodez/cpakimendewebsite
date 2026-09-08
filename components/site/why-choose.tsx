import { Briefcase, UserCheck, ShieldCheck, Clock, Lightbulb, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Briefcase,
    title: 'Professional Expertise',
    description: 'Qualified professionals with real depth across accounting, tax, audit and advisory.',
  },
  {
    icon: UserCheck,
    title: 'Client-Focused Service',
    description: 'We listen first, then tailor solutions to your specific goals and circumstances.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidentiality',
    description: 'Your data and financial affairs are protected with the utmost discretion.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Dependable, on-time delivery you can build your business decisions around.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Advice',
    description: 'Clear, actionable guidance — no jargon, just direction you can use.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    description: 'We invest in lasting partnerships that grow alongside your business.',
  },
]

export function WhyChoose() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Why Choose Us</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              The reasons clients trust CPA Kimende
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We are more than a service provider. We are a professional partner committed to your
              financial health, your compliance and your long-term success.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-l-2 border-border pl-5">
                <reason.icon className="size-6 text-gold" />
                <h3 className="mt-3 font-semibold text-primary">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
