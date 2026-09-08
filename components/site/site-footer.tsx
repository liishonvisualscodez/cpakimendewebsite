import { Phone, Mail, MapPin } from 'lucide-react'
import { navLinks, services, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-serif text-2xl font-bold text-navy-foreground">CPA Kimende</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gold">
              Certified Public Accountants
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              A Kenyan accounting, audit, taxation and business advisory firm helping clients stay
              compliant and make confident financial decisions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/90">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/90">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Phone className="size-4 text-gold" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Mail className="size-4 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{siteConfig.addressLines.join(', ')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/15 pt-6 sm:flex-row">
          <p className="text-xs text-navy-foreground/60">
            © {new Date().getFullYear()} CPA Kimende. All rights reserved.
          </p>
          <p className="text-xs text-navy-foreground/60">
            Accounting · Tax · Audit · Advisory · Payroll · Business Support
          </p>
        </div>
      </div>
    </footer>
  )
}
