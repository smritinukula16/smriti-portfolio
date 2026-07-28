import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border px-6 py-20 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:gap-10">
        <Reveal>
          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-sm text-primary">05 / Contact</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Smriti N</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              XR Developer • Game Developer • Full Stack Developer
            </p>
          </div>
        </Reveal>

        <Reveal>
          <a
            href="mailto:smritinukula16@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-[#E23150]/35 hover:text-foreground"
          >
            <Mail className="size-4 text-primary" />
            smritinukula16@gmail.com
          </a>
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/smritinukula16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E23150]/35 hover:bg-white/[0.08] hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/smritinukula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E23150]/35 hover:bg-white/[0.08] hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <p className="border-t border-border pt-6 text-sm text-muted-foreground">
            © 2026 Smriti N. All rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
