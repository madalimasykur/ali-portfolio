import { projectsStatus } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="panel-block rounded-4xl px-6 py-10 md:px-8 md:py-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-(--color-accent)">
          {projectsStatus.label}
        </p>
        <h3 className="mt-4 text-2xl uppercase tracking-[-0.04em] text-(--color-text) md:text-3xl">
          {projectsStatus.title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-(--color-soft)">
          {projectsStatus.description}
        </p>
      </div>
    </section>
  )
}
