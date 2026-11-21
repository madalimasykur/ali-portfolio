'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileNav from '@/components/layout/MobileNav'

const navItems = [
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Activities', href: '/#activities' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-(--color-line-strong) bg-[rgba(10,10,10,0.88)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/#home" className="space-y-0.5">
          <p className="nav-brand uppercase tracking-[0.12em] text-(--color-text)">
            Ahmad Ali Masykur
          </p>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono nav-link uppercase tracking-[0.12em] text-(--color-muted) transition hover:text-(--color-text)"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav items={navItems} />
      </div>
    </header>
  )
}
