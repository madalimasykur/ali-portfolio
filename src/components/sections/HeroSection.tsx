'use client'

import { useEffect, useMemo, useState } from 'react'
import { heroProfile } from '@/data/profile'

const stats = [
  { label: 'Current Role', value: 'Software Engineer' },
  { label: 'Base', value: 'South Tangerang' },
]

export default function HeroSection() {
  const typingTarget = useMemo(() => 'Software Engineer', [])
  const [typedRole, setTypedRole] = useState('')
  const [typedHighlight, setTypedHighlight] = useState('')

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTypedRole(typingTarget.slice(0, index))
      if (index >= typingTarget.length) {
        window.clearInterval(timer)
      }
    }, 85)

    return () => window.clearInterval(timer)
  }, [typingTarget])

  useEffect(() => {
    const highlightTarget = heroProfile.title
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTypedHighlight(highlightTarget.slice(0, index))
      if (index >= highlightTarget.length) {
        window.clearInterval(timer)
      }
    }, 18)

    return () => window.clearInterval(timer)
  }, [])

  const renderWords = (text: string, delayStart = 0, delayStep = 0.04) => {
    const words = text.split(' ')
    return words.map((word, index) => (
      <span
        key={`${word}-${index}`}
        className="hero-word"
        style={{ animationDelay: `${delayStart + index * delayStep}s` }}
      >
        {word}
        {index < words.length - 1 ? '\u00A0' : ''}
      </span>
    ))
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-(--color-line) px-6 pb-14 pt-24 md:px-10 md:pb-20 md:pt-28"
    >
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8 text-center lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.36em] text-(--color-accent)">
            {renderWords('Software Engineer', 0.05)}
          </p>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-none tracking-[-0.06em] text-(--color-text) md:text-7xl lg:text-[7.5rem]">
              {renderWords(heroProfile.name, 0.12)}
            </h1>
            <p className="text-3xl font-semibold uppercase tracking-[-0.04em] text-(--color-text) md:text-4xl">
              {typedRole}
              <span className="typing-cursor" aria-hidden="true" />
            </p>
            <p className="mx-auto max-w-2xl text-base font-semibold leading-8 text-(--color-accent) md:text-lg lg:mx-0">
              {typedHighlight}
              <span className="typing-cursor" aria-hidden="true" />
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href={heroProfile.cvUrl} target="_blank" rel="noreferrer" className="button-primary">
              {renderWords('View CV', 0.45, 0.05)}
            </a>
            <a href="#experience" className="button-secondary">
              {renderWords('Explore Experience', 0.52, 0.04)}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="panel-block hero-panel-in" style={{ animationDelay: '0.55s' }}>
            <p className="section-kicker">Intro</p>
            <p className="mt-4 text-sm leading-7 text-(--color-soft)">
              {heroProfile.intro}
            </p>
          </div>

          <div
            className="grid gap-px overflow-hidden rounded-[1.75rem] border border-(--color-line) bg-(--color-line) hero-stats-in"
            style={{ animationDelay: '0.68s' }}
          >
            {stats.map((item) => (
              <div key={item.label} className="bg-(--color-panel) px-5 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-muted)">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl uppercase tracking-[-0.04em] text-(--color-text)">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
