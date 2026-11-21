import Image from 'next/image'
import type { Skill } from '@/data/skills'

type SkillIconProps = {
  skill: Skill
}

export default function SkillIcon({ skill }: SkillIconProps) {
  return (
    <Image
      src={skill.logo}
      alt=""
      width={28}
      height={28}
      className={`h-5 w-5 object-contain md:h-6 md:w-6 lg:h-7 lg:w-7 ${skill.invertLogo ? 'invert' : ''}`}
      unoptimized
    />
  )
}
