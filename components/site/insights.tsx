import { ArrowUpRight } from 'lucide-react'
import { insights } from '@/lib/site'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Insights() {
  return (
    <section id="insights" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Insights & Resources</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Guidance to help you stay informed and compliant
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Practical articles on tax, accounting, SME finance and compliance from the CPA Kimende team.
            </p>
          </div>
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: 'outline' }), 'shrink-0 bg-transparent')}
          >
            View all insights
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex w-fit rounded-full bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                {post.category}
              </span>
              <h3 className="mt-4 flex-1 text-pretty font-serif text-lg font-bold leading-snug text-primary">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
                  Read
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
