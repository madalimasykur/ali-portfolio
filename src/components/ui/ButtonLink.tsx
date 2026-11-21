import type { ComponentPropsWithoutRef } from 'react'
import { buttonStyles, type ButtonVariant } from '@/components/ui/buttonStyles'

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ButtonVariant
  external?: boolean
}

export default function ButtonLink({ variant = 'secondary', external = false, className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={buttonStyles(variant, className)}
      {...props}
    />
  )
}
