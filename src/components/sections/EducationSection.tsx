import EducationCard from '@/components/cards/EducationCard'
import LanguagesCard from '@/components/cards/LanguagesCard'
import TrainingCard from '@/components/cards/TrainingCard'
import CardGroup from '@/components/ui/CardGroup'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { educationItems, trainingItems } from '@/data/profile'

export default function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader title="Education" />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <CardGroup className="grid gap-px">
          {educationItems.map((education) => <EducationCard key={education.institution} education={education} />)}
        </CardGroup>
        <CardGroup className="grid gap-px">
          {trainingItems.map((training) => <TrainingCard key={training.title} training={training} />)}
        </CardGroup>
      </div>
      <div className="mt-6">
        <LanguagesCard />
      </div>
    </Section>
  )
}
