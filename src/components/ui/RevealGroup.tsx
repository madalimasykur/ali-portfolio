'use client'

import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react'

type RevealGroupProps = ComponentPropsWithoutRef<'div'>

export default function RevealGroup({ children, ...props }: RevealGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!container || motion.matches || !('IntersectionObserver' in window)) return

    const targets = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver((entries) => {
      const entering = entries.filter((entry) => entry.isIntersecting)
      entering.forEach((entry, index) => {
        const target = entry.target as HTMLElement
        if (target.dataset.revealState !== 'pending') return
        if (!target.style.getPropertyValue('--reveal-delay')) {
          target.style.setProperty('--reveal-delay', `${Math.min(index * 70, 210)}ms`)
        }
        target.dataset.revealState = 'visible'
        observer.unobserve(target)
      })
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })

    for (const target of targets) {
      if (target.dataset.revealState === 'visible' || target.dataset.revealState === 'complete') continue
      target.dataset.revealState = 'pending'
      observer.observe(target)
    }

    const finishReveal = (event: AnimationEvent) => {
      if (event.animationName !== 'scrollRevealIn' || !(event.target instanceof HTMLElement)) return
      event.target.dataset.revealState = 'complete'
    }
    const showFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const target = event.target.closest<HTMLElement>('[data-reveal]')
      if (!target) return
      target.dataset.revealState = 'complete'
      observer.unobserve(target)
    }
    const showAll = () => {
      if (!motion.matches) return
      observer.disconnect()
      for (const target of targets) {
        target.dataset.revealState = 'complete'
      }
    }
    container.addEventListener('animationend', finishReveal)
    container.addEventListener('focusin', showFocused)
    motion.addEventListener('change', showAll)

    return () => {
      observer.disconnect()
      container.removeEventListener('animationend', finishReveal)
      container.removeEventListener('focusin', showFocused)
      motion.removeEventListener('change', showAll)
      // Keep content readable during remounts or when enhancement is unavailable.
      for (const target of targets) {
        if (target.dataset.revealState === 'pending') delete target.dataset.revealState
      }
    }
  }, [children])

  return <div ref={containerRef} {...props}>{children}</div>
}
