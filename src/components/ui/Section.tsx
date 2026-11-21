import type { ComponentPropsWithoutRef } from 'react'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  variant?: 'default' | 'hero'
}

export default function Section({ variant = 'default', className = '', ...props }: SectionProps) {
  const styles = variant === 'hero'
    ? 'hero-section'
    : 'section-shell'

  return <section className={`${styles} ${className}`} {...props} />
}
