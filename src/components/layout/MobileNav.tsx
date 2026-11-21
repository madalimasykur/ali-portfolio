'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import Button from '@/components/ui/Button'

type MobileNavProps = {
  items: { label: string; href: string }[]
}

export default function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      containerRef.current?.querySelector('button')?.focus()
    }
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <div ref={containerRef} className="lg:hidden">
      <Button
        variant="icon"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <IconX size={26} aria-hidden="true" /> : <IconMenu2 size={26} aria-hidden="true" />}
      </Button>
      {open ? (
        <nav
          id={menuId}
          aria-label="Navigation menu"
          className="absolute inset-x-0 top-full grid max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-(--color-line-strong) bg-(--color-panel) px-6 py-3 shadow-xl lg:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="body-copy block rounded-lg px-3 py-3 text-(--color-text) transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-(--color-accent)"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
