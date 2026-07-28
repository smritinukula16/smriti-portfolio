import { Boxes, Code2, Cpu, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const groups = [
  {
    title: 'XR Development',
    description: 'Immersive experiences built for Unity, interaction systems, and spatial product concepts.',
    icon: Cpu,
    skills: ['Unity', 'C#', 'Vuforia', 'XR Interaction Toolkit', 'AR', 'VR'],
  },
  {
    title: 'Frontend',
    description: 'Modern interfaces, polished product experiences, and responsive web applications.',
    icon: Code2,
    skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    description: 'Reliable full-stack foundations for data-driven products and business solutions.',
    icon: Boxes,
    skills: ['Node.js', 'Supabase', 'REST APIs'],
  },
  {
    title: 'Tools',
    description: 'Design, development, and collaboration tools used across the product workflow.',
    icon: Sparkles,
    skills: ['Git', 'GitHub', 'Cursor', 'VS Code', 'Blender', 'Figma'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-primary">04 / Skills</p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group, i) => {
            const Icon = group.icon
            return (
              <Reveal key={group.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#E23150]/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{group.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-foreground/80">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
