import AdditionalActivitiesCard from '@/components/cards/AdditionalActivitiesCard'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

export default function AdditionalActivitiesSection() {
  return (
    <Section id="activities" aria-labelledby="activities-heading">
      <SectionHeader title="Additional Activities" titleId="activities-heading" />
      <AdditionalActivitiesCard />
    </Section>
  )
}
