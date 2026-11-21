'use client'

import { useEffect, useState } from 'react'
import ButtonLink from '@/components/ui/ButtonLink'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { siteConfig } from '@/config/site'
import { heroProfile } from '@/data/profile'

export default function HeroSection() {
  const [typedRole, setTypedRole] = useState('')

  useEffect(() => {
    const typingTarget = heroProfile.title
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTypedRole(typingTarget.slice(0, index))
      if (index >= typingTarget.length) {
        window.clearInterval(timer)
      }
    }, 85)

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
    <Section id="home" variant="hero">
      <div className="hero-layout">
        <div className="hero-main space-y-6 text-center md:space-y-8 lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <h1 className="max-w-4xl hero-name font-semibold uppercase tracking-[-0.06em] text-(--color-text)">
              {renderWords(heroProfile.name, 0.12)}
            </h1>
            <div className="space-y-2">
              <p className="hero-role min-h-[1.3em] font-semibold uppercase tracking-[-0.04em] text-(--color-text)">
                {typedRole}
                <span className="typing-cursor" aria-hidden="true" />
              </p>
              <p className="mx-auto max-w-2xl hero-company font-semibold text-(--color-accent) lg:mx-0">
                {renderWords(`at ${heroProfile.company}`, 0.3)}
              </p>
            </div>
            <p className="hero-location body-copy text-(--color-muted)">
              {heroProfile.location}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <ButtonLink href={siteConfig.cvUrl} external variant="primary">
              {renderWords('View CV', 0.45, 0.05)}
            </ButtonLink>
          </div>
        </div>

        <div className="hero-intro">
          <Card as="div" animated={false} className="hero-intro-card hero-panel-in" style={{ animationDelay: '0.55s' }}>
            <p className="section-kicker">Intro</p>
            <p className="mt-4 body-copy text-(--color-soft)">{heroProfile.intro}</p>
          </Card>
        </div>
      </div>
    </Section>
  )
}
