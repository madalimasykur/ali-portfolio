'use client'

import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'

type CarouselProps = {
  title: string
  children: ReactNode
}

export default function Carousel({ title, children }: CarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderId = useId()
  const headingId = useId()
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const updateControls = () => {
      setCanScrollBack(slider.scrollLeft > 1)
      setCanScrollForward(slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1)
    }

    updateControls()
    slider.addEventListener('scroll', updateControls, { passive: true })
    const observer = new ResizeObserver(updateControls)
    observer.observe(slider)
    for (const card of slider.children) observer.observe(card)

    return () => {
      slider.removeEventListener('scroll', updateControls)
      observer.disconnect()
    }
  }, [children])

  const scrollSlides = (direction: number) => {
    const slider = sliderRef.current
    const card = slider?.firstElementChild
    if (!slider || !card) return

    const gap = parseFloat(window.getComputedStyle(slider).columnGap) || 0
    slider.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return (
    <>
      <SectionHeader
        title={title}
        titleId={headingId}
        actions={
          <div className="flex gap-3">
            <Button variant="icon" onClick={() => scrollSlides(-1)} disabled={!canScrollBack} aria-label={`Previous ${title.toLowerCase()}`} aria-controls={sliderId}>
              <IconChevronLeft size={28} stroke={2.5} aria-hidden="true" />
            </Button>
            <Button variant="icon" onClick={() => scrollSlides(1)} disabled={!canScrollForward} aria-label={`Next ${title.toLowerCase()}`} aria-controls={sliderId}>
              <IconChevronRight size={28} stroke={2.5} aria-hidden="true" />
            </Button>
          </div>
        }
      />
      <div
        ref={sliderRef}
        id={sliderId}
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={headingId}
        tabIndex={0}
        className="carousel-track flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain rounded-4xl pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
      >
        {children}
      </div>
    </>
  )
}
