import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { GameProjects } from '@/components/game-projects'
import { WebProjects } from '@/components/web-projects'
import { Skills } from '@/components/skills'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <GameProjects />
      <WebProjects />
      <Skills />
      <Footer />
    </main>
  )
}
