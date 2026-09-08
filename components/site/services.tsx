import { Calculator, Receipt, ClipboardCheck, LineChart, Users, Building2, ArrowUpRight, Check } from 'lucide-react'
import { services } from '@/lib/site'

const icons = {
  accounting: Calculator,
  tax: Receipt,
  audit: ClipboardCheck,
  advisory: LineChart,
  payroll: Users,
  support: Building2,
} as const

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our Services</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Comprehensive financial services under one roof
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Whatever stage your business is at, our team delivers the accounting, tax, audit and
            advisory support you need to stay compliant and move forward with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.id as keyof typeof icons]
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>

                <ul className="mt-5 grid grid-cols-1 gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="size-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-gold"
                >
                  Talk to an accountant
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
