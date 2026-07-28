import { ScanLine } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

const xrProjects = [
  {
    title: 'SEE VR',
    subtitle: 'VR Escape Room',
    description:
      'VR Escape Room built in Unity where players solve puzzles, grab objects and interact with the environment using XR Interaction Toolkit.',
    tech: ['Unity', 'C#', 'XR Interaction Toolkit', 'VR'],
    github: 'https://github.com/smritinukula16/see-vr',
    accent: 'from-[#E23150]/25 to-[#8F2D56]/20',
  },
  {
    title: 'Laptop Information AR',
    subtitle: 'Marker-based AR',
    description:
      'Marker-based AR application developed using Unity and Vuforia that displays laptop specifications and product information.',
    tech: ['Unity', 'Vuforia', 'C#', 'AR'],
    github: 'https://github.com/smritinukula16/laptop-information',
    accent: 'from-[#2F6BFF]/20 to-[#4CC9F0]/15',
  },
  {
    title: 'Food Menu Information AR',
    subtitle: 'Interactive AR menu',
    description:
      'Marker-based AR application that displays interactive food information by scanning menu markers.',
    tech: ['Unity', 'Vuforia', 'C#', 'AR'],
    github: 'https://github.com/smritinukula16/food-menu-information-ar',
    accent: 'from-[#7C4DFF]/20 to-[#F472B6]/15',
  },
]

export function GameProjects() {
  return (
    <section id="xr-projects" className="scroll-mt-24 border-t border-border px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-primary">02 / XR Projects</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              XR Projects
            </h2>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-muted-foreground md:inline-flex">
              <ScanLine className="size-4 text-primary" />
              Unity · AR/VR · Interaction Systems
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {xrProjects.map((project, i) => (
            <Reveal as="article" key={project.title} delay={i * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E23150]/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <div className={`relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-5`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_60%)]" />
                  <div className="relative flex h-36 items-center justify-center rounded-[1.1rem] border border-white/10 bg-black/10">
                    <div className="text-center">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">Image Placeholder</p>
                      <p className="mt-2 text-sm font-semibold text-white">{project.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-foreground/80">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#E23150] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                    >
                      <GithubIcon className="size-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
