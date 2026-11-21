import SkillGroupCard from '@/components/cards/SkillGroupCard'
import CardGroup from '@/components/ui/CardGroup'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { skillGroups } from '@/data/skills'

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader title="Skills" />
      <CardGroup className="grid md:grid-cols-2">
        {skillGroups.map((group) => <SkillGroupCard key={group.title} group={group} />)}
      </CardGroup>
    </Section>
  )
}
