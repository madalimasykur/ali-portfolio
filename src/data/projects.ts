import { siteConfig } from '@/config/site'

export type ProjectItem = {
  index: string
  title: string
  type: string
  summary: string
  repositoryUrl: string
}

export const projectItems: ProjectItem[] = [
  {
    index: '01',
    title: 'Deployment and Infrastructure Lab',
    repositoryUrl: siteConfig.repositories.observability,
    type: 'Infrastructure',
    summary: 'Exploring end-to-end deployment of containerized systems, including container registries, SFTP servers, observability tooling, and supporting services. Deploying a travel application as a learning project with Podman and exposing selected services securely through Cloudflare Tunnel.',
  },
  {
    index: '02',
    title: 'Wood Audio Inspection Application',
    repositoryUrl: siteConfig.repositories.woodTest,
    type: 'Desktop Application',
    summary: 'Developing a Python and Qt application for audio-data processing and visualization to support wood inspection workflows, combining desktop UI development, signal/data processing, and practical engineering experimentation.',
  },
  {
    index: '03',
    title: 'Portfolio Website',
    repositoryUrl: siteConfig.repositories.portfolio,
    type: 'Web Application',
    summary: 'Built and deployed a Next.js portfolio on Vercel with a custom domain, demonstrating end-to-end ownership from application code to public delivery.',
  },
]
