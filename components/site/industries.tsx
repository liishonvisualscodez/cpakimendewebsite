import { industries } from '@/lib/site'

export function Industries() {
  return (
    <section id="industries" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Industries & Clients</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Trusted by organisations of every size
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From ambitious startups to established institutions, we bring the same rigour, discretion
            and practical insight to every engagement.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group bg-card p-7 transition-colors hover:bg-primary"
            >
              <h3 className="font-serif text-lg font-bold text-primary group-hover:text-primary-foreground">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
