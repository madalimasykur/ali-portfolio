import type { ComponentPropsWithoutRef } from 'react'

type IconFrameProps = ComponentPropsWithoutRef<'div'> & { size?: 'small' | 'default' }

export default function IconFrame({ size = 'default', className = '', ...props }: IconFrameProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-(--color-line) bg-[rgba(255,255,255,0.03)] ${size === 'small' ? 'h-8 w-8 lg:h-9 lg:w-9' : 'h-10 w-10'} ${className}`}
      {...props}
    />
  )
}
