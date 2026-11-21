import ButtonLink from '@/components/ui/ButtonLink'
import Card from '@/components/ui/Card'
import CardHeader from '@/components/ui/CardHeader'
import type { ProjectItem } from '@/data/projects'

type ProjectCardProps = {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex w-full flex-col">
      <CardHeader label={`${project.index} / ${project.type}`} title={project.title} />
      <p className="mb-6 mt-4 body-copy text-(--color-soft)">{project.summary}</p>
      <ButtonLink
        href={project.repositoryUrl}
        external
        aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
        className="mt-auto self-start"
      >
        View on GitHub
      </ButtonLink>
    </Card>
  )
}
