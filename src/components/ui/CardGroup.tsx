import type { HTMLAttributes } from 'react'

type CardGroupProps = HTMLAttributes<HTMLDivElement> & { radius?: 'medium' | 'large' }

export default function CardGroup({ radius = 'large', className = '', ...props }: CardGroupProps) {
  return (
    <div
      className={`overflow-hidden border border-(--color-line) bg-(--color-line) ${radius === 'medium' ? 'rounded-3xl' : 'rounded-4xl'} ${className}`}
      {...props}
    />
  )
}
