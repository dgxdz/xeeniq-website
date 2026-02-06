"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Waitlist", href: "#waitlist" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Xeeniq home">
          <Image
            src="/xeeniq-logo.jpg"
            alt="Xeeniq logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Xeeniq
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">
                <span className="flex items-center gap-2">
                  <Image
                    src="/xeeniq-logo.jpg"
                    alt="Xeeniq logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  Xeeniq
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#waitlist" onClick={() => setOpen(false)}>
                  Join the waitlist
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
