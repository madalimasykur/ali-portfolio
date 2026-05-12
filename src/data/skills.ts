export type Skill = {
  name: string
  logo?: string
  fallback: string
}

export type SkillGroup = {
  title: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      {
        name: 'Go',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        fallback: 'Go',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        fallback: 'Py',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        fallback: 'JS',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        fallback: 'TS',
      },
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        fallback: 'JV',
      },
      {
        name: 'C/C++',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        fallback: 'C++',
      },
    ],
  },
  {
    title: 'Web',
    items: [
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/nextdotjs.svg',
        fallback: 'Nx',
      },
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        fallback: 'Re',
      },
      {
        name: 'Express.js',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/express.svg',
        fallback: 'EX',
      },
    ],
  },
  {
    title: 'Cloud',
    items: [
      {
        name: 'Google Cloud Platform',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        fallback: 'GCP',
      },
      {
        name: 'Amazon Web Services',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        fallback: 'AWS',
      },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      {
        name: 'Flask',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/flask.svg',
        fallback: 'Fl',
      },
      {
        name: 'FastAPI',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/fastapi.svg',
        fallback: 'FA',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/nextdotjs.svg',
        fallback: 'Nx',
      },
      {
        name: 'Chi',
        fallback: 'Chi',
      },
    ],
  },
  {
    title: 'Databases',
    items: [
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        fallback: 'MG',
      },
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        fallback: 'PG',
      },
      {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        fallback: 'MY',
      },
      {
        name: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        fallback: 'RD',
      },
      {
        name: 'ChromaDB',
        fallback: 'CHR',
      },
    ],
  },
  {
    title: 'Integration',
    items: [
      {
        name: 'IBM App Connect Enterprise',
        fallback: 'ACE',
      },
      {
        name: 'IBM API Connect',
        fallback: 'API',
      },
      {
        name: 'Kafka',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/apachekafka.svg',
        fallback: 'KF',
      },
    ],
  },
  {
    title: 'Observability',
    items: [
      {
        name: 'Prometheus',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/prometheus.svg',
        fallback: 'PM',
      },
      {
        name: 'Grafana',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
        fallback: 'GF',
      },
      {
        name: 'OpenTelemetry',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/opentelemetry.svg',
        fallback: 'OT',
      },
      {
        name: 'Elasticsearch',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
        fallback: 'ES',
      },
      {
        name: 'Datadog',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg',
        fallback: 'DD',
      },
      {
        name: 'Vector',
        fallback: 'VC',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        fallback: 'Git',
      },
      {
        name: 'Postman',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
        fallback: 'PM',
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        fallback: 'DK',
      },
      {
        name: 'Kubernetes',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
        fallback: 'Kube'
      },
      {
        name: 'Linux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        fallback: 'SH',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        fallback: 'ND',
      },
      {
        name: 'OpenAI API',
        fallback: 'AI',
      },
    ],
  },
]
