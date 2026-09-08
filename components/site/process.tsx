import { process } from '@/lib/site'

export function Process() {
  return (
    <section className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our Process</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            A clear, professional path from first call to lasting partnership
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <li key={item.step} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl font-bold text-gold">{item.step}</span>
                {index < process.length - 1 && (
                  <span className="hidden h-px flex-1 bg-navy-foreground/20 lg:block" aria-hidden />
                )}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
