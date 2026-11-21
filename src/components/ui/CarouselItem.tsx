import type { ReactNode } from 'react'

type CarouselItemProps = {
  label: string
  children: ReactNode
}

export default function CarouselItem({ label, children }: CarouselItemProps) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      className="flex min-w-0 shrink-0 basis-[85%] snap-start md:basis-[calc((100%-1.5rem)/2)]"
    >
      {children}
    </div>
  )
}
