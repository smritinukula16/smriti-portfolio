'use client'

import { motion } from 'framer-motion'
import { Cpu, Sparkles, Layers3, MonitorPlay } from 'lucide-react'
import { JourneyTimeline } from '@/components/journey-timeline'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const focusAreas = [
  {
    title: 'XR product development',
    description: 'Designing and building interactive AR and VR experiences in Unity for training, education, and immersive storytelling.',
    icon: MonitorPlay,
  },
  {
    title: 'Unity systems & interaction',
    description: 'Working with C#, AR Foundation, Vuforia, and XR Interaction Toolkit to create responsive, intuitive experiences.',
    icon: Cpu,
  },
  {
    title: 'Full-stack product delivery',
    description: 'Shipping modern frontends and backend integrations with React, Next.js, Node.js, and Supabase for real-world products.',
    icon: Layers3,
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl"
        >
          <motion.p custom={0} variants={fadeUp} className="font-mono text-sm text-primary">
            01 / About
          </motion.p>

          <motion.h2
            custom={0.08}
            variants={fadeUp}
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
          >
            I build immersive digital experiences that feel polished, useful, and memorable.
          </motion.h2>

          <motion.p
            custom={0.16}
            variants={fadeUp}
            className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I&apos;m Smriti Nukula, an XR developer and full-stack engineer focused on creating interactive products that bridge creativity, technology, and real user impact.
          </motion.p>

          <motion.div
            custom={0.24}
            variants={fadeUp}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            {focusAreas.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <div className="inline-flex rounded-xl bg-[#E23150]/10 p-2 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            custom={0.32}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E23150]/30 bg-[#E23150]/10 px-3 py-1.5 text-sm text-[#ffb0bd]">
              <Sparkles className="size-4" />
              Currently exploring AI, XR, and spatial computing
            </span>
          </motion.div>
        </motion.div>

        <JourneyTimeline />
      </div>
    </section>
  )
}
