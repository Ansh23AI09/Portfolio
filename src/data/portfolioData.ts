import type { NavItem, Project, SkillCategoryGroup, TimelineEntry, Certificate, SocialLink } from '../types'

export const personalInfo = {
  name: 'Ansh Sharma',
  role: 'Software Engineer',
  tagline: 'Computer Science Engineering Student & Full-Stack / AI Developer',
  headline: 'Engineering Digital Experiences. Building Real Solutions.',
  bio: "I'm Ansh Sharma, a Computer Science engineering student interested in building reliable software, intelligent applications and practical technology solutions.",
  status: 'Available for opportunities',
  location: 'India',
  email: 'ansh.sharma.swe@gmail.com',
  github: 'https://github.com/ansh-sharma',
  linkedin: 'https://linkedin.com/in/ansh-sharma',
  resumeUrl: '#resume',
  techHighlights: ['PYTHON', 'REACT', 'SOFTWARE DEVELOPMENT'],
  experienceSummary: 'Focused on scalable architectures, AI-integrated software, and intuitive user experiences.',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages used for systems, scripting, algorithmic problem-solving, and web services.',
    iconName: 'Code2',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C', 'SQL'],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Creating high-performance, accessible, responsive interfaces and reactive client architectures.',
    iconName: 'Layout',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5 / Modern CSS', 'Framer Motion', 'Vite', 'Redux / Zustand'],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Building robust microservices, RESTful APIs, authentication pipelines, and distributed logic.',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT / OAuth', 'Microservices'],
  },
  {
    id: 'database',
    name: 'Database Technologies',
    description: 'Relational schema design, fast document stores, and caching layers for data integrity.',
    iconName: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Prisma ORM', 'Mongoose'],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Applied machine learning, NLP, Retrieval-Augmented Generation (RAG), and neural embeddings.',
    iconName: 'Cpu',
    skills: ['PyTorch', 'Scikit-Learn', 'LangChain', 'Hugging Face', 'Vector DBs (Chroma/FAISS)', 'Prompt Engineering'],
  },
  {
    id: 'devtools',
    name: 'Developer Tools & DevOps',
    description: 'Tooling, containerization, and developer environments enabling continuous delivery.',
    iconName: 'Terminal',
    skills: ['Git & GitHub', 'Docker', 'Linux / Bash', 'Postman', 'CI/CD GitHub Actions', 'Webpack / Vite'],
  },
]

export const projects: Project[] = [
  {
    id: 'verifyweb',
    title: 'VerifyWeb – Intelligent Misinformation Detection Platform',
    tagline: 'Automated content verification and real-time credibility scoring engine for digital journalism and web sources.',
    description: 'VerifyWeb is a full-stack platform combining NLP pipelines and cross-referenced search verification to analyze digital claims, evaluate bias, and generate auditable source verification confidence scores.',
    fullDescription: 'VerifyWeb addresses the rising problem of web falsehoods by synthesizing evidence across verified institutional databases, news archives, and algorithmic stance analysis. It performs claim extraction, cross-references with trusted registries, and highlights hallucinated or manipulated assertions.',
    technologies: ['Python', 'FastAPI', 'React', 'Tailwind CSS', 'PyTorch', 'Hugging Face', 'PostgreSQL', 'Docker'],
    featured: true,
    status: 'Production',
    githubUrl: 'https://github.com/ansh-sharma/verifyweb',
    liveUrl: 'https://verifyweb.demo.dev',
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Multi-stage semantic claim extraction pipeline processing 100+ words per second',
      'Asynchronous web evidence crawler powered by FastAPI & Celery background workers',
      'Interactive radar charts and explainable citation confidence breakdown',
      'Fully containerized Docker architecture with sub-200ms API inference latency'
    ],
    metrics: [
      { label: 'Accuracy Score', value: '94.2%' },
      { label: 'Inference Latency', value: '<180ms' },
      { label: 'Source Registries', value: '50k+' }
    ]
  },
  {
    id: 'neuralflow-rag',
    title: 'NeuralFlow RAG Engine',
    tagline: 'High-performance document retrieval & conversational intelligence engine with semantic hybrid search.',
    description: 'An enterprise knowledge-base agent system leveraging dense neural embeddings, hybrid sparse-dense retrieval, and re-ranking for contextual document questioning.',
    fullDescription: 'Built with LangChain, FAISS, and FastAPI. Ingests PDFs, code repositories, and markdown docs with chunk optimization and provenance tracking.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'FAISS', 'FastAPI', 'React'],
    featured: false,
    status: 'Active Development',
    githubUrl: 'https://github.com/ansh-sharma/neuralflow-rag',
    liveUrl: 'https://neuralflow.demo.dev',
    previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Context Recall', value: '96%' },
      { label: 'Chunk Query Speed', value: '45ms' }
    ]
  },
  {
    id: 'devpulse-telemetry',
    title: 'DevPulse Real-Time Observability Hub',
    tagline: 'Live microservice latency telemetry and error tracking dashboard for engineering teams.',
    description: 'An open-source telemetry dashboard visualizing system health, HTTP status codes, p99 latencies, and distributed tracing spans with customizable alerting rules.',
    fullDescription: 'Integrates with WebSockets to stream metrics at 60 FPS without DOM lag, featuring custom Canvas charts and alerting webhooks.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io', 'Tailwind CSS', 'PostgreSQL'],
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/ansh-sharma/devpulse',
    liveUrl: 'https://devpulse.demo.dev',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Telemetry Stream', value: '10k events/s' },
      { label: 'Client CPU Load', value: '<2%' }
    ]
  },
  {
    id: 'algocraft-visualizer',
    title: 'AlgoCraft Interactive Visualizer',
    tagline: 'Educational graph theory, pathfinding, and sorting algorithm simulation suite.',
    description: 'An interactive canvas-driven simulation tool that lets developers visualize step-by-step memory allocation, graph traversals (Dijkstra, A*), and dynamic programming trees.',
    fullDescription: 'Designed to help computer science students build deep intuition for asymptotic complexity and state machines.',
    technologies: ['TypeScript', 'React', 'Canvas API', 'Tailwind CSS'],
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/ansh-sharma/algocraft',
    liveUrl: 'https://algocraft.demo.dev',
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Simulated Algos', value: '25+' },
      { label: 'Frame Rate', value: '60 FPS' }
    ]
  }
]

export const timelineData: TimelineEntry[] = [
  {
    id: 'edu-btech',
    period: '2022 – Present',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    subtitle: 'Undergraduate Program',
    organization: 'Apex Institute of Technology / University',
    location: 'India',
    scoreOrGpa: 'CGPA: 8.85 / 10.0',
    description: [
      'Comprehensive coursework covering Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Machine Learning.',
      'Active competitive programmer and technical project lead for undergraduate engineering hackathons.',
      'Elected Core Tech Lead for the campus student developer society, mentoring 120+ juniors in web systems.'
    ],
    technologies: ['C++', 'Python', 'DBMS', 'OS Concepts', 'Distributed Systems'],
    type: 'education'
  },
  {
    id: 'exp-intern',
    period: 'Summer 2024',
    title: 'Software Engineering Intern',
    subtitle: 'Backend & Cloud Infrastructure',
    organization: 'TechVanguard Solutions',
    location: 'Remote / Hybrid',
    description: [
      'Engineered asynchronous REST microservices using Python FastAPI and Redis caching, cutting average endpoint latency by 32%.',
      'Developed automated test suites (pytest) achieving 89% branch coverage across mission-critical authentication modules.',
      'Collaborated directly with senior architects to deploy Dockerized service containers to AWS EC2 staging environments.'
    ],
    technologies: ['Python', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL', 'Git'],
    type: 'experience'
  },
  {
    id: 'edu-school',
    period: '2020 – 2022',
    title: 'Higher Secondary Certificate (Class XII)',
    subtitle: 'Physics, Chemistry & Mathematics (PCM) with Computer Science',
    organization: 'Senior Secondary Model School',
    location: 'India',
    scoreOrGpa: 'Score: 94.4%',
    description: [
      'Graduated with distinction in Computer Science and Mathematics.',
      'Built first software projects in Python, SQL, and desktop automation scripts.'
    ],
    type: 'education'
  }
]

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (Coursera)',
    date: '2024',
    credentialUrl: 'https://coursera.org',
    skills: ['React', 'JavaScript (ES6+)', 'Web UX', 'Version Control']
  },
  {
    id: 'cert-2',
    title: 'Deep Learning & Neural Networks Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    credentialUrl: 'https://coursera.org',
    skills: ['PyTorch', 'Vectorization', 'CNNs', 'Sequence Models']
  },
  {
    id: 'cert-3',
    title: 'PostgreSQL Database Design & Query Optimization',
    issuer: 'University of Michigan',
    date: '2023',
    credentialUrl: 'https://coursera.org',
    skills: ['Relational Schema', 'Indexing', 'ACID Transactions']
  },
  {
    id: 'cert-4',
    title: 'Problem Solving (Advanced) & Algorithms',
    issuer: 'HackerRank',
    date: '2023',
    credentialUrl: 'https://hackerrank.com',
    skills: ['Dynamic Programming', 'Graph Theory', 'Data Structures']
  }
]

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/ansh-sharma', icon: 'Github', handle: '@ansh-sharma' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/ansh-sharma', icon: 'Linkedin', handle: 'ansh-sharma' },
  { platform: 'Twitter / X', url: 'https://x.com/ansh_sharma_dev', icon: 'Twitter', handle: '@ansh_sharma_dev' },
  { platform: 'Email', url: 'mailto:ansh.sharma.swe@gmail.com', icon: 'Mail', handle: 'ansh.sharma.swe@gmail.com' }
]
