import type { HTMLAttributes } from 'react'

type CardLabelProps = HTMLAttributes<HTMLElement> & {
  as?: 'p' | 'h3'
  tone?: 'accent' | 'default'
}

export default function CardLabel({ as: Tag = 'p', tone = 'accent', className = '', ...props }: CardLabelProps) {
  return (
    <Tag
      className={`font-mono label-text uppercase tracking-[0.16em] md:tracking-[0.22em] lg:tracking-[0.3em] ${tone === 'accent' ? 'text-(--color-accent)' : 'text-(--color-text)'} ${className}`}
      {...props}
    />
  )
}
