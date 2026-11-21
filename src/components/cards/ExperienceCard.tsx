import Badge from '@/components/ui/Badge'
import BulletList from '@/components/ui/BulletList'
import Card from '@/components/ui/Card'
import CardHeader from '@/components/ui/CardHeader'
import ExpandableContent from '@/components/ui/ExpandableContent'
import type { ExperienceItem } from '@/data/experience'

type ExperienceCardProps = {
  experience: ExperienceItem
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const preview = experience.summary ||
    experience.groups.find((group) => group.title === 'Key Contributions')?.highlights[0] ||
    experience.groups[0]?.highlights[0] ||
    experience.role

  return (
    <Card variant="outlined">
      <div className="grid gap-6 p-4 md:grid-cols-[0.7fr_1.3fr] md:p-5 lg:gap-8 lg:p-8">
        <div className="min-w-0 space-y-4">
          <CardHeader title={experience.company} subtitle={experience.role} />
          <p className="body-copy text-(--color-muted)">{experience.period}</p>
          <p className="body-copy text-(--color-muted)">{experience.location}</p>
        </div>
        <div className="min-w-0">
          <ExpandableContent preview={preview} label={`${experience.role} at ${experience.company}`}>
            {experience.summary ? (
              <p className="body-copy text-(--color-soft)">{experience.summary}</p>
            ) : null}
            {experience.groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="detail-title font-medium text-(--color-text)">{group.title}</h4>
                <BulletList items={group.highlights} />
              </div>
            ))}
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
            </div>
          </ExpandableContent>
        </div>
      </div>
    </Card>
  )
}
