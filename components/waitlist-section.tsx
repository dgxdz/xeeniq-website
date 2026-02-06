"use client"
import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2 } from "lucide-react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setLoading(true)

    try {
      // Netlify'a POST gönder
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'waitlist',
          'email': email
        }).toString()
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitted(true)
      setEmail('')
      toast({
        title: "You're on the list.",
        description: "We'll notify you when we launch.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-20 py-20 md:py-28"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-md text-center">
          <h2
            id="waitlist-heading"
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Get early access
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Be the first to know when we launch. No spam. Unsubscribe anytime.
          </p>

          {/* Hidden form - Netlify build için */}
          <form name="waitlist" data-netlify="true" hidden>
            <input name="email" type="email" />
          </form>

          {submitted ? (
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <p className="text-base font-medium text-foreground">
                {"You're on the list!"}
              </p>
              <p className="text-sm text-muted-foreground">
                {"We'll reach out when we're ready."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <Input
                id="waitlist-email"
                type="email"
                name="email"
                placeholder="hello@xeeniq.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 flex-1 border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/40"
                aria-describedby="waitlist-privacy"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-11 bg-primary px-6 text-primary-foreground shadow-sm transition-transform hover:bg-primary/90 hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Joining..." : "Notify me"}
              </Button>
            </form>
          )}
          <p
            id="waitlist-privacy"
            className="mt-4 text-xs text-muted-foreground"
          >
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}