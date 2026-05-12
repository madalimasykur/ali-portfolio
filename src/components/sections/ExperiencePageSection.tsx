'use client'

import Image from 'next/image'
import Link from 'next/link'
import { experienceItems, type ExperienceItem } from '@/data/experience'
import { useState } from 'react'

function CompanyMark({ item }: { item: ExperienceItem }) {
  const [hasError, setHasError] = useState(false)

  if (!item.companyLogo || hasError) {
    return null
  }

  return (
    <Image
      src={item.companyLogo}
      alt={`${item.company} logo`}
      width={48}
      height={48}
      className="h-12 w-12 rounded-2xl border border-(--color-line) bg-white object-contain p-2"
      unoptimized
      onError={() => setHasError(true)}
    />
  )
}

export default function ExperiencePageSection() {
  return (
    <section className="section-shell pt-32 md:pt-36">
      <div className="section-header">
        <p className="section-kicker">Experiences</p>
        <h1 className="section-title">Selected experiences and roles</h1>
      </div>

      <div className="mb-8">
        <Link href="/" className="button-secondary">
          Back Home
        </Link>
      </div>

      <div className="space-y-6">
        {experienceItems.map((item) => (
          <article
            key={item.slug}
            className="overflow-hidden rounded-4xl border border-(--color-line) bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]"
          >
            <div className="grid gap-8 p-6 md:grid-cols-[0.7fr_1.3fr] md:p-8">
              <div className="space-y-5">
                <CompanyMark item={item} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-accent)">
                    {item.company}
                  </p>
                  <h2 className="mt-3 text-3xl uppercase tracking-[-0.05em] text-(--color-text)">
                    {item.role}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-(--color-soft)">{item.companyLabel}</p>
                </div>
                <div className="space-y-2 text-sm text-(--color-muted)">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                  <p>{item.employmentType}</p>
                </div>
              </div>

              <div className="space-y-5">
                {item.headline ? (
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-(--color-accent)">
                    {item.headline}
                  </p>
                ) : null}
                <p className="text-base leading-8 text-(--color-soft)">{item.summary}</p>
                <div className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <p key={highlight} className="rounded-[1.25rem] border border-(--color-line) bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm leading-7 text-(--color-soft)">
                      {highlight}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-(--color-line-strong) px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-muted)"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
