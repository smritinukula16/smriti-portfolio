import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const credentials = [
  {
    title: 'Unity Certified Associate: Game Developer',
    issuer: 'Unity',
    category: 'Game Development',
    description:
      'Professional certification validating foundational skills in Unity game development.',
    featured: true,
    verifyUrl: '',
  },
]

const credlyProfileUrl = 'https://www.credly.com/users/smriti-n'

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Learning, verified
          </p>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Certifications<span className="text-primary">.</span>
                <br />
                <span className="text-muted-foreground">Proof of progress.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                A growing collection of credentials, badges, and milestones from my journey across game development,
                immersive technology, and software.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary"><Award className="size-6" /></div>
                <div>
                  <p className="text-sm text-muted-foreground">Featured credential</p>
                  <p className="font-medium">Unity Certified Associate</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                Game Developer · Unity
              </p>
              <a href={credlyProfileUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                View Credly profile <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-3 border-b border-border pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The collection</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Credentials & badges</h2>
            </div>
            <p className="text-sm text-muted-foreground">More milestones will be added over time.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {credentials.map((credential) => (
              <article key={credential.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50 md:p-8">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-colors group-hover:bg-primary/10" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <BadgeCheck className="size-7" />
                  </div>
                  <span className="rounded-full border border-primary/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    Featured
                  </span>
                </div>
                <p className="relative mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{credential.category}</p>
                <h3 className="relative mt-2 text-xl font-semibold leading-snug">{credential.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">Issued by {credential.issuer}</p>
                <p className="relative mt-4 text-sm leading-6 text-muted-foreground">{credential.description}</p>
                <a href={credlyProfileUrl} target="_blank" rel="noreferrer" className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  View public Credly profile <ExternalLink className="size-4" />
                </a>
              </article>
            ))}

            <article className="flex min-h-64 flex-col justify-between rounded-2xl border border-dashed border-border p-6 md:p-8">
              <div>
                <div className="mb-6 inline-flex rounded-xl bg-secondary p-3 text-muted-foreground"><Award className="size-6" /></div>
                <h3 className="text-xl font-semibold">More credentials coming soon.</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Browse the public Credly profile for badges currently shared there. Additional course certificates can be added when their details and verification links are available.
                </p>
                <a href={credlyProfileUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Browse Credly badges <ExternalLink className="size-4" />
                </a>
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-wider text-muted-foreground">Always learning · Always building</p>
            </article>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-secondary/30 p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <h2 className="text-lg font-semibold">Want to see what I build with these skills?</h2>
              <p className="mt-2 text-sm text-muted-foreground">Explore my projects and experiments in immersive tech and web development.</p>
            </div>
            <Link href="/#xr-projects" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:translate-x-1">
              Explore projects <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/#top" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Back to homepage <ArrowDownRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
