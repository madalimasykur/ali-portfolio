import type { HTMLAttributes } from 'react'
import Reveal from '@/components/ui/Reveal'

const variants = {
  panel: 'panel-block',
  flat: 'bg-(--color-panel) p-4 md:p-5 lg:p-8',
  outlined: 'overflow-hidden rounded-4xl border border-(--color-line) bg-(--color-panel)',
  gradient: 'overflow-hidden rounded-4xl border border-(--color-line) bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]',
}

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div'
  variant?: keyof typeof variants
  animated?: boolean
}

export default function Card({ as = 'article', variant = 'panel', animated = true, className = '', ...props }: CardProps) {
  return (
    <Reveal
      as={as}
      disabled={!animated}
      className={`${variants[variant]} ${animated ? 'card-hover' : ''} ${className}`}
      {...props}
    />
  )
}
