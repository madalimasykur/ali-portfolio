import type { ReactNode } from 'react'
import IconFrame from '@/components/ui/IconFrame'

type ContactLinkProps = {
  label: string
  value: string
  href: string
  icon: ReactNode
  external?: boolean
}

export default function ContactLink({ label, value, href, icon, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 bg-(--color-panel) px-4 py-3 md:gap-4 md:px-5 md:py-4 transition hover:bg-[rgba(255,255,255,0.04)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-(--color-accent)"
    >
      <IconFrame aria-hidden="true">{icon}</IconFrame>
      <div className="min-w-0 space-y-1">
        <p className="font-mono label-text uppercase tracking-[0.16em] md:tracking-[0.22em] lg:tracking-[0.3em] text-(--color-muted)">{label}</p>
        <p className="break-words body-copy text-(--color-soft)">{value}</p>
      </div>
    </a>
  )
}
