'use client'

import Image from 'next/image'
import Link from 'next/link'
import { experienceItems, type ExperienceItem } from '@/data/experience'
import { useState } from 'react'

const featuredItems = experienceItems.slice(0, 3)

function CompanyMark({ item }: { item: ExperienceItem }) {
  const [hasError, setHasError] = useState(false)

  if (!item.companyLogo || hasError) {
    return null
  }

  return (
    <Image
      src={item.companyLogo}
      alt={`${item.company} logo`}
      width={44}
      height={44}
      className="h-11 w-11 rounded-2xl border border-(--color-line) bg-white object-contain p-2"
      unoptimized
      onError={() => setHasError(true)}
    />
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Summary experience history</h2>
      </div>

      <div className="space-y-px overflow-hidden rounded-4xl border border-(--color-line) bg-(--color-line)">
        {featuredItems.map((item) => (
          <article
            key={item.slug}
            className="grid gap-6 bg-(--color-panel) p-6 md:grid-cols-[0.55fr_1.45fr] md:p-8"
          >
            <div className="space-y-4">
              <CompanyMark item={item} />
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-muted)">
                {item.period}
              </p>
              <p className="text-sm leading-7 text-(--color-muted)">{item.location}</p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-2xl uppercase tracking-[-0.04em] text-(--color-text)">
                  {item.role}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-(--color-accent)">
                  {item.company}
                </p>
              </div>
              <p className="max-w-3xl text-sm leading-7 text-(--color-soft)">
                {item.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {item.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-(--color-line-strong) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-muted)"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/experiences" className="button-secondary">
          More Experience
        </Link>
      </div>
    </section>
  )
}
