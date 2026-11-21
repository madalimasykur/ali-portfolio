import Card from '@/components/ui/Card'
import CardHeader from '@/components/ui/CardHeader'
import type { EducationItem } from '@/data/profile'

type EducationCardProps = {
  education: EducationItem
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <Card variant="flat">
      <CardHeader label="Campus" title={education.institution} subtitle={education.degree} />
      <div className="mt-5 grid gap-3 body-copy text-(--color-soft) md:grid-cols-2">
        <p>{education.period}</p>
        <p>{education.location}</p>
        <p>Grade: {education.grade}</p>
        <p>Activities: {education.activities}</p>
      </div>
    </Card>
  )
}
