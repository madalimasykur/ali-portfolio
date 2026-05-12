import { educationItems, trainingItems } from '@/data/profile'

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic background</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-px overflow-hidden rounded-4xl border border-(--color-line) bg-(--color-line)">
          {educationItems.map((item) => (
            <article key={item.institution} className="bg-(--color-panel) p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-accent)">
                {item.institution}
              </p>
              <h3 className="mt-4 text-3xl uppercase tracking-[-0.05em] text-(--color-text)">
                {item.degree}
              </h3>
              <div className="mt-5 grid gap-3 text-sm text-(--color-soft) md:grid-cols-2">
                <p>{item.period}</p>
                <p>{item.location}</p>
                <p>Grade: {item.grade}</p>
                <p>Activities: {item.activities}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-px overflow-hidden rounded-4xl border border-(--color-line) bg-(--color-line)">
          {trainingItems.map((item) => (
            <article key={item.title} className="bg-(--color-panel) p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-accent)">
                Training
              </p>
              <h3 className="mt-4 text-2xl uppercase tracking-[-0.05em] text-(--color-text)">
                {item.title}
              </h3>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-(--color-muted)">
                {item.provider}
              </p>
              <p className="mt-5 text-sm leading-7 text-(--color-soft)">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
