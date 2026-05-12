import Image from 'next/image'
import { skillGroups, type Skill } from '@/data/skills'

function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.logo) {
    return null
  }

  return (
    <Image
      src={skill.logo}
      alt={`${skill.name} logo`}
      width={28}
      height={28}
      className="h-7 w-7 object-contain"
      unoptimized
    />
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tech stack and tools</h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-4xl border border-(--color-line) bg-(--color-line) md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="bg-(--color-panel) p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-accent)">
              {group.title}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-3 rounded-[1.2rem] border border-(--color-line-strong) bg-[rgba(255,255,255,0.02)] px-4 py-3 transition hover:bg-[rgba(255,255,255,0.04)]"
                >
                  {item.logo ? (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-(--color-line) bg-[rgba(255,255,255,0.03)]">
                      <SkillIcon skill={item} />
                    </div>
                  ) : null}
                  <p className="text-sm leading-5 text-(--color-soft)">{item.name}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
