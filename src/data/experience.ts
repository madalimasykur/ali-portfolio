export type ExperienceItem = {
  slug: string
  company: string
  companyLabel: string
  companyLogo?: string
  role: string
  employmentType: string
  period: string
  location: string
  headline?: string
  summary: string
  highlights: string[]
  skills: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    slug: 'cimb-niaga',
    company: 'CIMB Niaga',
    companyLabel: 'CIMB Niaga · Apprenticeship',
    companyLogo: '',
    role: 'Software Engineer',
    employmentType: 'Apprenticeship',
    period: 'Sep 2025 - Present',
    location: 'South Tangerang, Banten, Indonesia · On-site',
    headline: 'Software Engineer - CIPTA IT Developer Program',
    summary:
      'Selected for the CIPTA IT Developer Program and working hands-on with enterprise banking systems, backend services, integration layers, and production observability.',
    highlights: [
      'Built a tax reporting backend using Golang, PostgreSQL, and Redis.',
      'Contributed to ESB integration using IBM App Connect Enterprise and IBM API Connect.',
      'Implemented OpenTelemetry-based observability for service monitoring.',
      'Developed a TCP pooling gateway for SIBS integration in a banking environment.',
    ],
    skills: ['Go', 'Java', 'Redis', 'OpenTelemetry', 'IBM App Connect', 'IBM Db2', 'PostgreSQL'],
  },
  {
    slug: 'bukit-vista-backend-ai-engineer',
    company: 'Bukit Vista Hospitality Services',
    companyLabel: 'Bukit Vista Hospitality Services · Full-time',
    companyLogo: '',
    role: 'Backend & AI Engineer',
    employmentType: 'Full-time',
    period: 'Oct 2024 - Apr 2025',
    location: 'Bali, Indonesia · Remote',
    summary:
      'Owned backend and AI engineering work for partner-facing and guest-facing assistants, combining API development, message orchestration, prompt design, and operational tooling.',
    highlights: [
      'Led backend development for Thea, an AI chatbot connected to OpenAI and WhatsApp via SendPulse using Python and FastAPI.',
      'Co-designed system architecture, prompt boundaries, and internal data structures for scalable AI operations.',
      'Built queue-based request orchestration and a Slack interface for monitoring and human fallback handling.',
      'Maintained GAIA Interface in TypeScript and improved GAIA Guest Agent integrations and reliability.',
    ],
    skills: [
      'Python',
      'FastAPI',
      'TypeScript',
      'Redis',
      'REST API',
      'Prompt Engineering',
      'Docker',
      'Chatbot Development',
    ],
  },
  {
    slug: 'bukit-vista-backend-engineer-part-time',
    company: 'Bukit Vista Hospitality Services',
    companyLabel: 'Bukit Vista Hospitality Services · Part-time',
    companyLogo: '',
    role: 'Backend Engineer',
    employmentType: 'Part-time',
    period: 'Dec 2023 - Jun 2024',
    location: 'Bali, Indonesia · Remote',
    summary:
      'Helped evolve hospitality backend systems from monolithic services into more modular and scalable APIs while supporting AI product delivery across operations.',
    highlights: [
      'Led migration efforts toward microservices-oriented backend architecture.',
      'Designed and developed GAIA v2 with Python Flask, OpenAI integration, and Beds24 connectivity.',
      'Redesigned relational schema in MySQL and supported deployment through AWS infrastructure.',
      'Maintained GAIA Interface, BIGRR API, and Docker-based Linux deployments for operational stability.',
    ],
    skills: ['Flask', 'Python', 'AWS', 'MySQL', 'Redis', 'Node.js', 'Docker', 'API Development'],
  },
  {
    slug: 'bukit-vista-backend-engineer-intern',
    company: 'Bukit Vista Hospitality Services',
    companyLabel: 'Bukit Vista Hospitality Services · Internship',
    companyLogo: '',
    role: 'Backend Engineer Intern',
    employmentType: 'Internship',
    period: 'Sep 2023 - Dec 2023',
    location: 'Bali, Indonesia · Remote',
    summary:
      'Supported backend refactoring, internal tools maintenance, and the early architecture work behind Bukit Vista’s AI agent initiatives.',
    highlights: [
      'Refactored legacy BIGRR API code to improve structure, readability, and maintainability.',
      'Handled bug fixing and maintenance for BIGRR API and the first version of GAIA.',
      'Contributed to early GAIA v2 architecture and prompt engineering discussions.',
      'Collaborated with non-technical teams to explore practical AI use cases for daily operations.',
    ],
    skills: ['Python', 'JavaScript', 'Redis', 'Node.js', 'Prompt Engineering', 'REST API'],
  },
  {
    slug: 'ugm-teaching-assistant',
    company: 'Universitas Gadjah Mada',
    companyLabel: 'Universitas Gadjah Mada · Part-time',
    companyLogo: '',
    role: 'Teaching Assistant',
    employmentType: 'Part-time',
    period: 'Aug 2022 - Dec 2023',
    location: 'Sleman, Yogyakarta, Indonesia · On-site',
    summary:
      'Supported teaching for foundational programming and security-related coursework while mentoring students through labs, assignments, and class sessions.',
    highlights: [
      'Guided students through core C++ programming concepts in theory and practical sessions.',
      'Assessed assignments, quizzes, and programming exercises to support evaluation.',
      'Assisted lecturers in class management and occasionally led sessions independently.',
      'Supported courses including Basic Programming and Cryptography & Information Security.',
    ],
    skills: ['C++', 'Problem Solving', 'Code Review', 'Cryptography', 'Linux'],
  },
  {
    slug: 'ugm-laboratory-assistant',
    company: 'Universitas Gadjah Mada',
    companyLabel: 'Universitas Gadjah Mada · Part-time',
    companyLogo: '',
    role: 'Laboratory Assistant',
    employmentType: 'Part-time',
    period: 'Aug 2022 - Dec 2023',
    location: 'Sleman, Yogyakarta, Indonesia · On-site',
    summary:
      'Provided lab support for foundational programming classes, helping students understand concepts and complete practical work effectively.',
    highlights: [
      'Assisted students during lab sessions and practical programming exercises.',
      'Evaluated assignments and quizzes to support lecturer assessment needs.',
      'Provided in-class support and occasionally substituted for lecturers.',
      'Supported Programming Laboratory I with emphasis on programming fundamentals.',
    ],
    skills: ['C++', 'Competitive Programming', 'Problem Solving', 'Linux', 'Code Review'],
  },
]