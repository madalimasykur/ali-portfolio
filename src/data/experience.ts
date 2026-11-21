export type ExperienceItem = {
  slug: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  groups: { title: string; highlights: string[] }[]
  skills: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    slug: 'cimb-niaga',
    company: 'Bank CIMB Niaga',
    role: 'Software Engineer - CIPTA IT Developer Program',
    period: 'Sep 2025 - Present',
    location: 'Jakarta, Indonesia',
    summary: 'Selected for the CIPTA IT Developer Program and trusted with enterprise banking work spanning backend development, system design, integration architecture, deployment, observability, and production troubleshooting.',
    groups: [
      {
        title: 'SIJ - Sistem Integrasi Jalin / Tax Integration System',
        highlights: [
          'Owned the development of SIJ, an asynchronous, event-driven integration system connecting CIMB Niaga\'s internal banking systems with external government services for cross-border credit card tax reporting.',
          'Partnered with ITBP and business stakeholders from project initiative and feature discussions through requirement clarification, technical decisions, and iterative feature development.',
          'Designed the system architecture, business flows, API contracts, system boundaries, database structures, and integration patterns for a production banking service.',
          'Built the processing flow from Kafka source events produced by core banking systems through PostgreSQL and Redis to Jalin APIs and internal CIMB Niaga ESB APIs, including validation and reliable processing.',
          'Integrated report-file generation and delivery workflows, including report creation, SFTP transfer to CIMB Niaga MFT, and processing of files received from external SFTP systems.',
          'Supported deployment on Podman, GKE, and RHEL Linux; implemented Kubernetes resources such as Deployments, Namespaces, Services, PersistentVolumeClaims, and CronJobs.',
          'Integrated development and production observability with Grafana, OpenTelemetry, and OpenSearch to improve monitoring, tracing, and investigation visibility.',
        ],
      },
      {
        title: 'Matrix - Bank-wide Monitoring and Observability Platform',
        highlights: [
          'Helped evaluate and build an observability platform using OpenTelemetry, Grafana, Prometheus, Tempo, OpenSearch, Splunk, Datadog, Vector Agent, and OpenTelemetry Collector.',
          'Researched the feasibility and implementation of observability tools for improving visibility across IBM ACE and IBM MQ systems; integrated bank ESB telemetry with OpenSearch.',
        ],
      },
      {
        title: 'Audit Logger - ESB Audit Service',
        highlights: [
          'Investigated a Java-based audit logger that frequently became stuck or stopped, evaluated rewrite and modernization options, and designed a new Golang audit-logging application integrated with IBM MQ and IBM DB2.',
        ],
      },
      {
        title: 'ESB Modernization',
        highlights: [
          'Supported the design of a modernization path from VM-based IBM ACE to container-based and cloud-oriented IBM webMethods on OpenShift.',
        ],
      },
    ],
    skills: [
      'Golang',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'IBM MQ',
      'IBM DB2',
      'IBM ACE',
      'IBM API Connect',
      'SFTP',
      'GKE',
      'OpenTelemetry',
      'Grafana',
      'OpenSearch',
    ],
  },
  {
    slug: 'bukit-vista',
    company: 'Bukit Vista Hospitality Services',
    role: 'Backend Engineer / Backend and AI Engineer',
    period: 'Sep 2023 - Apr 2025',
    location: 'Bali, Indonesia / Remote',
    summary: '',
    groups: [
      {
        title: 'Role Timeline',
        highlights: [
          'Backend Engineer - Intern (Sep 2023 - Dec 2023)',
          'Backend Engineer - Part-time (Dec 2023 - Jun 2024)',
          'Backend and AI Engineer (Oct 2024 - Apr 2025)',
        ],
      },
      {
        title: 'Key Contributions',
        highlights: [
          'Developed Thea, an AI chatbot agent integrated with WhatsApp via SendPulse using Python, FastAPI, and the OpenAI API to automate partnership communication, complaints, and requests.',
          'Designed scalable backend services and messaging workflows using Python, TypeScript, Redis, and Slack integration, enabling real-time operational monitoring and logging.',
          'Maintained and enhanced GAIA, a Guest AI Agent integrated with Airbnb via Beds24 API, balancing feature delivery, bug fixing, and performance optimization.',
          'Migrated legacy monolithic APIs into microservice-oriented backend services using Flask and MySQL for GAIA Agent v2, gaining hands-on experience in service boundaries and migration trade-offs.',
          'Managed AWS-based cloud deployment and Dockerized backend services on Ubuntu-based environments, connecting development work with operational ownership.',
          'Improved BIGRR API, a JavaScript-based internal dashboard for hospitality operations, and refactored legacy code using clearer design patterns.',
        ],
      },
    ],
    skills: [
      'Python',
      'FastAPI',
      'TypeScript',
      'Redis',
      'OpenAI API',
      'Flask',
      'MySQL',
      'AWS',
      'Docker',
    ],
  },
  {
    slug: 'ugm-teaching-laboratory-assistant',
    company: 'Universitas Gadjah Mada',
    role: 'Teaching Assistant and Laboratory Assistant (Part-time)',
    period: 'Aug 2022 - Dec 2023',
    location: 'Yogyakarta, Indonesia',
    summary: '',
    groups: [
      {
        title: 'Key Contributions',
        highlights: [
          'Guided students in programming, cryptography, and information security courses using C++ through theory, practical sessions, assignments, quizzes, and project consultations.',
          'Assisted lecturers with classroom management, occasionally led classes, evaluated programming assignments and lab work, and provided technical mentorship.',
        ],
      },
    ],
    skills: [
      'C++',
      'Cryptography',
      'Information Security',
      'Technical Mentorship',
    ],
  },
  {
    slug: 'gadjah-mada-robotic-team',
    company: 'Gadjah Mada Robotic Team',
    role: 'Software Programmer (Contract)',
    period: 'Feb 2021 - Aug 2022',
    location: 'Yogyakarta, Indonesia',
    summary: '',
    groups: [
      {
        title: 'Key Contributions',
        highlights: [
          'Built core modules for robot mechanics and dynamics to enable smooth movement and precise control.',
          'Developed computer vision systems with OpenCV to detect the ball, teammates, opponents, and field boundaries.',
          'Implemented inter-robot communication using gRPC and built interfaces for communication with the base station.',
          'Created real-time path planning algorithms, robot strategy modules, and ROS-based integration for coordinated operation.',
          'Built a Qt monitoring dashboard to visualize robot status and performance; used ROS, Qt, Boost, OpenCV, C++, Python, and gRPC.',
        ],
      },
    ],
    skills: [
      'C++',
      'Python',
      'ROS',
      'Qt',
      'Boost',
      'OpenCV',
      'gRPC',
    ],
  },
]
