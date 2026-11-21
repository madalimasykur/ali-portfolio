import type { ComponentPropsWithoutRef } from 'react'

type BulletListProps = Omit<ComponentPropsWithoutRef<'ul'>, 'children'> & { items: string[] }

export default function BulletList({ items, className = '', ...props }: BulletListProps) {
  return (
    <ul className={`list-disc space-y-3 pl-5 body-copy text-(--color-soft) marker:text-(--color-accent) ${className}`} {...props}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
