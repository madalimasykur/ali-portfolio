import type { ComponentPropsWithoutRef } from 'react'

export default function Badge({ className = '', ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={`rounded-full border border-(--color-line-strong) px-3 py-1.5 font-mono label-text uppercase tracking-[0.12em] md:tracking-[0.18em] text-(--color-muted) ${className}`}
      {...props}
    />
  )
}
