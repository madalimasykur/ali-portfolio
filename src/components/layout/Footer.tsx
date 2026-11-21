import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { heroProfile } from '@/data/profile'

export default function Footer() {
  return (
    <Reveal as="footer" className="border-t border-(--color-line-strong)">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row md:px-10 md:text-left">
        <p className="card-subtitle text-(--color-muted)">
          &copy; {new Date().getFullYear()} {heroProfile.name}. All rights reserved.
        </p>
        <Link
          href="/#home"
          className="card-subtitle inline-flex min-h-11 items-center gap-2 rounded-sm text-(--color-accent) underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
        >
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </Reveal>
  )
}
