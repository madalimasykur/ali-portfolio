import type { CSSProperties, HTMLAttributes } from 'react'

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'article' | 'header' | 'footer'
  delay?: number
  disabled?: boolean
}

export default function Reveal({ as: Tag = 'div', delay, disabled = false, style, ...props }: RevealProps) {
  const revealStyle: CSSProperties & { '--reveal-delay'?: string } = { ...style }
  if (delay !== undefined) {
    revealStyle['--reveal-delay'] = `${Math.max(0, Math.min(delay, 240))}ms`
  }

  return <Tag data-reveal={disabled ? undefined : ''} style={revealStyle} {...props} />
}
