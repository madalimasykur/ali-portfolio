import type { ReactNode } from 'react'
import Reveal from '@/components/ui/Reveal'

type SectionHeaderProps = {
  as?: 'h2' | 'h3'
  title: string
  titleId?: string
  actions?: ReactNode
  className?: string
}

export default function SectionHeader({
  as: Heading = 'h2',
  title,
  titleId,
  actions,
  className = 'mb-5 md:mb-6 lg:mb-8',
}: SectionHeaderProps) {
  return (
    <Reveal as="header" className={`${actions ? 'flex flex-wrap items-end justify-between gap-6' : ''} ${className}`}>
      <Heading id={titleId} className="section-title">{title}</Heading>
      {actions}
    </Reveal>
  )
}
