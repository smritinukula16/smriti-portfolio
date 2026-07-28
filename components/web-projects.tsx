import { ArrowUpRight, Globe, Layers3, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'Patel Yarn House',
    result: 'Client project',
    description:
      'Complete e-commerce platform with admin dashboard, Razorpay integration and product management for a growing textile business.',
    tech: ['React', 'Node.js', 'Supabase', 'Razorpay'],
    demo: 'https://patelyarnhouse.com',
    icon: Globe,
    accent: 'from-[#E23150]/20 to-[#F59E0B]/10',
  },
  {
    title: 'Jain Metals',
    result: 'Client project',
    description:
      'Responsive e-commerce website for a brass handicrafts business with clear product browsing and conversion-focused interactions.',
    tech: ['React', 'Node.js', 'Supabase'],
    demo: 'https://jainmetals.co.in',
    icon: Layers3,
    accent: 'from-[#38BDF8]/20 to-[#4F46E5]/10',
  },
  {
    title: 'Victory Aluminium',
    result: 'Client project',
    description:
      'Modern responsive landing page designed to present the brand clearly and encourage customer enquiries.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'http://victoryaluminium.co.in',
    icon: Sparkles,
    accent: 'from-[#7C4DFF]/20 to-[#EC4899]/10',
  },
]

export function WebProjects() {
  return (
    <section id="web-development" className="scroll-mt-24 border-t border-border px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-primary">03 / Web Development</p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Web Development
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <Reveal as="article" key={project.title} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E23150]/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className={`relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-5`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_60%)]" />
                    <div className="relative flex items-center justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-black/20 text-white">
                        <Icon className="size-5" />
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white/85">
                        {project.result}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                    <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/80">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.08]"
                      >
                        <ArrowUpRight className="size-4" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
