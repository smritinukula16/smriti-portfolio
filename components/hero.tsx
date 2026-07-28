'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileText, FolderOpen, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${((i * 37 + 13) % 97) + 1}%`,
  top: `${((i * 53 + 7) % 94) + 3}%`,
  size: 1 + (i % 3) * 0.4,
  duration: 10 + (i % 6) * 1.5,
  delay: (i % 8) * 0.4,
  opacity: 0.12 + (i % 4) * 0.06,
}))

const highlights = [
  {
    title: '🎮 XR & Game Developer',
    description:
      'Building immersive AR, VR and interactive experiences using Unity, C#, Vuforia and XR Interaction Toolkit.',
  },
  {
    title: '💻 Full Stack Developer',
    description:
      'Developing scalable web applications using React, Angular, Node.js, Supabase and Razorpay integrations.',
  },
  {
    title: '✨ Creative Thinker',
    description:
      'Combining technology, design and storytelling to build engaging digital experiences.',
  },
]

const roles = ['XR Developer', 'Game Developer', 'Full Stack Developer', 'Creative Thinker', 'Content Strategist']

function useTypewriter(words: string[], typingMs = 70, deletingMs = 45, pauseMs = 1400) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting && text === currentWord) {
      const pause = window.setTimeout(() => setIsDeleting(true), pauseMs)
      return () => window.clearTimeout(pause)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = window.setTimeout(() => {
      setText((prev) =>
        isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1),
      )
    }, isDeleting ? deletingMs : typingMs)

    return () => window.clearTimeout(timeout)
  }, [deletingMs, isDeleting, pauseMs, text, typingMs, wordIndex, words])

  return text
}

function HeroParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [particle.opacity, particle.opacity * 1.6, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function Hero() {
  const typedText = useTypewriter(roles)

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(226,49,80,0.16),_transparent_40%),linear-gradient(135deg,_#0b0a0d_0%,_#140a0f_100%)] px-6 pb-24 pt-32 md:pb-28 md:pt-40 lg:min-h-[100svh]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[min(560px,74vw)] w-[min(760px,96vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F2D56]/[0.18] blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#8F2D56]/12 blur-[90px]"
      />

      <HeroParticles />

      <div className="relative mx-auto flex min-h-[min(78vh,860px)] max-w-6xl items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-4xl flex-col items-start gap-6 md:gap-7"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.25em] text-white/45"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            custom={0.08}
            variants={fadeUp}
            className="text-[clamp(4.5rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-white"
          >
            <span className="bg-gradient-to-br from-[#f7d5dd] via-[#ff8ea7] to-[#e23150] bg-clip-text text-transparent">
              Smriti
            </span>
          </motion.h1>

          <motion.div
            custom={0.16}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2 font-sans text-lg font-medium text-white/70 sm:text-xl"
          >
            <span className="text-white/70">I am a</span>
            <span aria-live="polite" className="min-w-[12rem] text-white">
              {typedText}
              <motion.span
                aria-hidden
                className="ml-0.5 inline-block h-6 w-[2px] bg-[#E23150] align-middle sm:h-7 sm:w-[3px]"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.49, 0.5, 1], ease: 'linear' }}
              />
            </span>
          </motion.div>

          <motion.div
            custom={0.24}
            variants={fadeUp}
            className="mt-2 grid gap-3 md:grid-cols-3"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={0.32}
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            <a
              href="#xr-projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#E23150] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#c92a45] hover:shadow-[0_0_24px_rgba(143,45,86,0.35)] sm:px-6 sm:py-3"
            >
              <FolderOpen className="size-4" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#E23150]/30 bg-[#E23150]/10 px-5 py-2.5 text-sm font-medium text-[#ffb0bd] backdrop-blur-sm transition-colors hover:border-[#E23150]/50 hover:bg-[#E23150]/15 sm:px-6 sm:py-3"
            >
              <FileText className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-[#8F2D56]/40 hover:bg-white/[0.08] hover:text-white sm:px-6 sm:py-3"
            >
              <Sparkles className="size-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/smritinukula16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-[#8F2D56]/40 hover:bg-white/[0.08] hover:text-white"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/smritinukula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:border-[#8F2D56]/40 hover:bg-white/[0.08] hover:text-white"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </motion.div>

          <motion.div
            custom={0.48}
            variants={fadeUp}
            className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/35"
          >
            <Sparkles className="size-3.5" />
            Scroll to explore
            <ArrowDown className="size-3.5 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
