import { Cpu, Workflow, ShieldCheck, ClipboardCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Cpu,
    title: "Micro-SaaS Tools",
    description: "Focused, single-purpose tools that solve real problems without the bloat.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    description: "Pre-built workflows to streamline repetitive tasks and save hours every week.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Kits (EU AI Act)",
    description: "Ready-to-deploy compliance frameworks aligned with EU AI Act regulations.",
  },
  {
    icon: ClipboardCheck,
    title: "Homologation Checklists",
    description: "Structured checklists for product homologation and certification processes.",
  },
]

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="scroll-mt-20 bg-surface py-20 md:py-28"
      aria-labelledby="overview-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2
            id="overview-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            What we{"'"}re building
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
            A curated suite of digital products designed for precision and quality.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <Badge
                variant="outline"
                className="mt-4 text-xs text-muted-foreground"
              >
                Planned
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
