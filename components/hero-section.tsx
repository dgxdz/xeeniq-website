import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Very light warm gradient at top */}
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl" />
        {/* Diagonal accent line inspired by logo slash */}
        <div className="absolute right-[15%] top-16 h-48 w-px rotate-[25deg] bg-primary/10" />
        <div className="absolute right-[14%] top-20 h-32 w-px rotate-[25deg] bg-primary/[0.06]" />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        {/* Brand mark */}
        <Image
          src="/xeeniq-logo.jpg"
          alt=""
          width={48}
          height={48}
          className="mb-6 h-12 w-12"
          aria-hidden="true"
        />

        <Badge
          variant="secondary"
          className="mb-6 border border-border bg-surface text-muted-foreground"
        >
          Launching soon
        </Badge>

        <h1
          id="hero-heading"
          className="max-w-2xl text-balance text-center text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Premium digital products for modern teams.
        </h1>

        <p className="mt-5 max-w-lg text-pretty text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          SaaS tools, automation workflows, compliance kits, and ready-to-use
          templates — crafted for quality.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground shadow-sm transition-transform hover:bg-primary/90 hover:scale-[1.02] focus-visible:ring-primary/40"
          >
            <a href="#waitlist">Join the waitlist</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground transition-transform hover:scale-[1.02] bg-transparent"
          >
            <a href="#overview">See what{"'"}s coming</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
