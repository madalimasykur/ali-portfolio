import IconFrame from '@/components/ui/IconFrame'
import SkillIcon from '@/components/ui/SkillIcon'
import type { Skill } from '@/data/skills'

type SkillBadgeProps = {
  skill: Skill
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 md:gap-3 rounded-[1.2rem] border border-(--color-line-strong) bg-[rgba(255,255,255,0.02)] px-3 py-2 md:px-4 md:py-3 transition hover:bg-[rgba(255,255,255,0.04)]">
      <IconFrame size="small"><SkillIcon skill={skill} /></IconFrame>
      <p className="body-copy text-(--color-soft)">{skill.name}</p>
    </div>
  )
}
