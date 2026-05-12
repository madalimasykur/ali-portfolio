export type EducationItem = {
  institution: string
  degree: string
  period: string
  grade?: string
  location?: string
  activities?: string
}

export type TrainingItem = {
  provider: string
  title: string
  summary: string
}

export const heroProfile = {
  name: 'Ahmad Ali Masykur',
  title:
    'Software Engineer at CIMB Niaga | Backend, Distributed Systems, Cloud, Cybersecurity, and AI',
  intro:
    'I build backend systems, integration services, and AI-powered products with a strong focus on reliability, observability, and practical product impact.',
  cvUrl:
    'https://drive.google.com/file/d/1xjxG7wsTlH2usb6iFFIieYZVlyPUggge/view?usp=sharing',
}

export const educationItems: EducationItem[] = [
  {
    institution: 'Universitas Gadjah Mada',
    degree: "Bachelor's degree, Computer Science",
    period: 'Aug 2020 - Aug 2025',
    grade: '3.77',
    activities: 'OMAHTI, Gadjah Mada Robotic Team',
    location: 'Yogyakarta, Indonesia',
  },
]

export const trainingItems: TrainingItem[] = [
  {
    provider: 'Bangkit Academy by Google, Tokopedia, Gojek & Traveloka',
    title: 'Cloud Computing Learning Path',
    summary:
      'Covered Google Cloud Platform fundamentals, backend development, and production-oriented cloud engineering practices.',
  },
]
