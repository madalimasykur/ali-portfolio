export type Skill = {
  name: string
  logo: string
  invertLogo?: boolean
  fallback: string
}

export type SkillGroup = {
  title: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Golang',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        fallback: 'Golang',
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        fallback: 'Python',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        fallback: 'JavaScript',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        fallback: 'TypeScript',
      },
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        fallback: 'Java',
      },
      {
        name: 'C',
        logo: '/icons/skills/c.svg',
        fallback: 'C',
      },
      {
        name: 'C++',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        fallback: 'C++',
      },
      {
        name: 'PHP',
        logo: '/icons/skills/php.svg',
        fallback: 'PHP',
      },
    ],
  },
  {
    title: 'Backend Frameworks',
    items: [
      {
        name: 'Express.js (Node.js)',
        invertLogo: true,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/express/express-original.svg',
        fallback: 'Express.js',
      },
      {
        name: 'Chi (Golang)',
        logo: 'https://github.com/go-chi.png?size=64',
        fallback: 'Chi',
      },
      {
        name: 'FastAPI',
        invertLogo: true,
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/fastapi.svg',
        fallback: 'FastAPI',
      },
      {
        name: 'Flask',
        invertLogo: true,
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/flask.svg',
        fallback: 'Flask',
      },
    ],
  },
  {
    title: 'Data and Databases',
    items: [
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        fallback: 'PostgreSQL',
      },
      {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        fallback: 'MySQL',
      },
      {
        name: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        fallback: 'Redis',
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        fallback: 'MongoDB',
      },
    ],
  },
  {
    title: 'Messaging',
    items: [
      {
        name: 'Kafka',
        invertLogo: true,
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/apachekafka.svg',
        fallback: 'Kafka',
      },
      {
        name: 'RabbitMQ',
        logo: '/icons/skills/rabbitmq.svg',
        fallback: 'RabbitMQ',
      },
    ],
  },
  {
    title: 'Deployment',
    items: [
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        fallback: 'Docker',
      },
      {
        name: 'Podman',
        logo: '/icons/skills/podman.svg',
        fallback: 'Podman',
      },
      {
        name: 'Kubernetes',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
        fallback: 'Kubernetes',
      },
      {
        name: 'AWS',
        logo: '/icons/skills/amazonwebservices.svg',
        fallback: 'AWS',
      },
      {
        name: 'GCP',
        logo: '/icons/skills/googlecloud.svg',
        fallback: 'GCP',
      },
    ],
  },
  {
    title: 'Observability dan Monitoring',
    items: [
      {
        name: 'OpenTelemetry',
        invertLogo: true,
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/opentelemetry.svg',
        fallback: 'OpenTelemetry',
      },
      {
        name: 'Grafana',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
        fallback: 'Grafana',
      },
      {
        name: 'Prometheus',
        invertLogo: true,
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/prometheus.svg',
        fallback: 'Prometheus',
      },
      {
        name: 'Datadog',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg',
        fallback: 'Datadog',
      },
    ],
  },
  {
    title: 'Linux',
    items: [
      {
        name: 'Linux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        fallback: 'Linux',
      },
      {
        name: 'Fedora',
        logo: '/icons/skills/fedora.svg',
        fallback: 'Fedora',
      },
      {
        name: 'Ubuntu',
        logo: '/icons/skills/ubuntu.svg',
        fallback: 'Ubuntu',
      },
      {
        name: 'Debian',
        logo: '/icons/skills/debian.svg',
        fallback: 'Debian',
      },
      {
        name: 'RHEL',
        logo: '/icons/skills/redhat.svg',
        fallback: 'RHEL',
      },
    ],
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Bash',
        invertLogo: true,
        logo: '/icons/skills/bash.svg',
        fallback: 'Bash',
      },
      {
        name: 'SSH',
        invertLogo: true,
        logo: '/icons/skills/ssh.svg',
        fallback: 'SSH',
      },
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        fallback: 'Git',
      },
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        fallback: 'React',
      },
      {
        name: 'ROS',
        invertLogo: true,
        logo: '/icons/skills/ros.svg',
        fallback: 'ROS',
      },
      {
        name: 'OpenCV',
        logo: '/icons/skills/opencv.svg',
        fallback: 'OpenCV',
      },
      {
        name: 'gRPC',
        logo: '/icons/skills/grpc.svg',
        fallback: 'gRPC',
      },
      {
        name: 'Qt',
        logo: '/icons/skills/qt.svg',
        fallback: 'Qt',
      },
    ],
  },
]
