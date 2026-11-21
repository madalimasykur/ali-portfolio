import ProjectCard from '@/components/cards/ProjectCard'
import Carousel from '@/components/ui/Carousel'
import CarouselItem from '@/components/ui/CarouselItem'
import Section from '@/components/ui/Section'
import { projectItems } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Carousel title="Projects">
        {projectItems.map((project, index) => (
          <CarouselItem key={project.index} label={`${index + 1} of ${projectItems.length}`}>
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  )
}
