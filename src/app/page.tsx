import ContactSection from '@/components/sections/ContactSection'
import EducationSection from '@/components/sections/EducationSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'

export default function HomePage() {
  return (
    <main className="min-h-screen text-(--color-text)">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
