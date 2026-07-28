'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

const TIMELINE_ITEMS = [
  {
    title: 'Animation & Storyboarding Internship',
    subtitle: 'Built a strong foundation in visual storytelling, composition, and creative thinking.',
  },
  {
    title: 'Started building websites for SMEs',
    subtitle: 'Delivered polished web experiences that helped businesses communicate clearly online.',
  },
  {
    title: 'Developed complete e-commerce solutions',
    subtitle: 'Created customer-focused online stores with product management and smooth user flows.',
  },
  {
    title: 'Transitioned into Unity development',
    subtitle: 'Moved into interactive systems and immersive product development with a product-first mindset.',
  },
  {
    title: 'Built AR & VR applications',
    subtitle: 'Designed and shipped interactive experiences using Unity, Vuforia, and XR Interaction Toolkit.',
  },
  {
    title: 'Currently exploring AI + XR technologies',
    subtitle: 'Continuing to grow at the intersection of immersive tech, intelligent systems, and digital products.',
  },
]

function TimelineCard({ title, subtitle, index }: { title: string; subtitle?: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-transparent px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-7 sm:py-6"
    >
      <p className="text-base font-medium leading-snug text-foreground sm:text-[1.05rem]">{title}</p>
      {subtitle ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </motion.div>
  )
}

function TimelineNode({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.04 + 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 flex items-center justify-center"
    >
      <span className="absolute size-4 rounded-full bg-[#E23150]/20 blur-sm" />
      <span className="relative size-2.5 rounded-full bg-[#E23150]" />
    </motion.div>
  )
}

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="mt-24 md:mt-32">
      <div className="relative">
        <div
          aria-hidden
          className="absolute bottom-0 left-[0.3125rem] top-0 w-px bg-white/[0.08] md:left-1/2 md:-translate-x-1/2"
        />

        <motion.div
          aria-hidden
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-[0.3125rem] top-0 w-px origin-top bg-gradient-to-b from-[#E23150]/80 via-[#8F2D56]/60 to-transparent md:left-1/2 md:-translate-x-1/2"
        />

        <div className="flex flex-col">
          {TIMELINE_ITEMS.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={item.title}
                className="relative grid grid-cols-[auto_1fr] gap-x-8 py-9 md:grid-cols-[1fr_auto_1fr] md:gap-x-12 md:py-10"
              >
                <div className="hidden items-center justify-end md:flex">
                  {isLeft ? (
                    <div className="w-full max-w-sm">
                      <TimelineCard title={item.title} subtitle={item.subtitle} index={index} />
                    </div>
                  ) : null}
                </div>

                <div className="flex items-center justify-start md:justify-center">
                  <TimelineNode index={index} />
                </div>

                <div className="flex items-center">
                  <div className={cn('w-full', !isLeft ? 'md:max-w-sm' : 'md:hidden')}>
                    <TimelineCard title={item.title} subtitle={item.subtitle} index={index} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
