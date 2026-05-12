export type ProjectItem = {
  index: string
  title: string
  type: string
  summary: string
}

export const projectItems: ProjectItem[] = [
  {
    index: '01',
    title: 'Lorem Project Alpha',
    type: 'Brand Site',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    index: '02',
    title: 'Ipsum Interface Beta',
    type: 'Web App',
    summary:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    index: '03',
    title: 'Dolor System Gamma',
    type: 'Creative Code',
    summary:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    index: '04',
    title: 'Sit Amet Delta',
    type: 'Portfolio',
    summary:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

export const projectsStatus = {
  label: 'Under Maintenance',
  title: 'This projects section is currently under maintenance.',
  description:
    'This section is being refreshed and will be updated with selected works soon.',
}
