import ExperienceCard from '@/components/cards/ExperienceCard'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { experienceItems } from '@/data/experience'

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" />
      <div className="space-y-6">
        {experienceItems.map((experience) => (
          <ExperienceCard key={experience.slug} experience={experience} />
        ))}
      </div>
    </Section>
  )
}
