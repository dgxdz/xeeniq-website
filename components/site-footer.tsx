import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const footerNav = [
  { label: "Overview", href: "#overview" },
  { label: "Waitlist", href: "#waitlist" },
  { label: "Contact", href: "#contact" },
]

const externalLinks = [
  { label: "Gumroad", href: "https://gumroad.com" },
  { label: "Upwork", href: "https://upwork.com" },
  { label: "Fiverr", href: "https://fiverr.com" },
]

export function SiteFooter() {
  return (
    <footer
      className="bg-footer-bg text-footer-foreground"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/xeeniq-logo.jpg"
              alt="Xeeniq logo"
              width={28}
              height={28}
              className="h-7 w-7 brightness-0 invert"
            />
            <div>
              <p className="text-base font-semibold text-white">Xeeniq</p>
              <p className="text-sm text-footer-foreground/70">
                Premium digital products for modern teams.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <nav aria-label="Footer navigation" className="flex items-center gap-6">
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-footer-foreground/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg rounded-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Separator orientation="vertical" className="hidden h-5 bg-footer-foreground/20 md:block" />
            <div className="flex items-center gap-6">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-footer-foreground/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-footer-foreground/10" />

        <p className="text-center text-xs text-footer-foreground/50">
          &copy; 2026 Xeeniq. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
