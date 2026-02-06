import { Mail, ExternalLink } from "lucide-react"

const externalLinks = [
  { label: "Gumroad", href: "https://gumroad.com" },
  { label: "Upwork", href: "https://upwork.com" },
  { label: "Fiverr", href: "https://fiverr.com" },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-surface py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-md text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Have a question or want to work together? Reach out.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-sm">
          {/* Email */}
          <a
            href="mailto:hello@xeeniq.com"
            className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">hello@xeeniq.com</p>
            </div>
          </a>

          {/* External links */}
          <div className="mt-6 flex items-center justify-center gap-6">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
