import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { WhyChoose } from '@/components/site/why-choose'
import { Industries } from '@/components/site/industries'
import { Process } from '@/components/site/process'
import { Standard } from '@/components/site/standard'
import { Insights } from '@/components/site/insights'
import { CtaSection } from '@/components/site/cta-section'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'
import { WhatsappButton } from '@/components/site/whatsapp-button'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Industries />
        <Process />
        <Standard />
        <Insights />
        <CtaSection />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </>
  )
}
