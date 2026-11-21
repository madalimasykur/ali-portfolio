import Card from '@/components/ui/Card'
import SkillBadge from '@/components/ui/SkillBadge'
import type { SkillGroup } from '@/data/skills'

type SkillGroupCardProps = {
  group: SkillGroup
}

export default function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <Card variant="flat" className="border-b border-(--color-line-strong) md:border-r">
      <h3 className="font-mono label-text uppercase tracking-[0.16em] md:tracking-[0.22em] lg:tracking-[0.3em] text-(--color-accent)">
        {group.title}
      </h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {group.items.map((skill) => <SkillBadge key={skill.name} skill={skill} />)}
      </div>
    </Card>
  )
}
