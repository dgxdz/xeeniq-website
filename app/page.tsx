import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <OverviewSection />
        <WaitlistSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
