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
  title: 'Software Engineer',
  company: 'Bank CIMB Niaga Tbk.',
  intro:
    'I build backend systems, integration services, and AI-powered products with a strong focus on reliability, observability, and practical product impact.',
  location: 'Jakarta, Indonesia',
}

export const educationItems: EducationItem[] = [
  {
    institution: 'Universitas Gadjah Mada',
    degree: "Bachelor's degree, Computer Science",
    period: '2020 - 2025',
    grade: '3.77/4.00',
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

export const activityItems = [
  'Participated in Cybersecurity OmahTI UGM activities and CTF competitions.',
  'Active in the UGM Alumni Community in South Tangerang.',
  'Active in the National FMIPA Alumni community.',
  'Active in the Computer Science Alumni community and helped manage the alumni system for alumni data collection.',
]

export const languageItems = [
  {
    name: 'Indonesian',
    proficiency: 'Native',
  },
  {
    name: 'English',
    proficiency: 'Intermediate',
  },
]
