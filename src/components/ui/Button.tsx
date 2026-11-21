import type { ComponentPropsWithoutRef } from 'react'
import { buttonStyles, type ButtonVariant } from '@/components/ui/buttonStyles'

type ButtonProps = ComponentPropsWithoutRef<'button'> & { variant?: ButtonVariant }

export default function Button({ variant = 'secondary', className = '', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, className)} {...props} />
}
