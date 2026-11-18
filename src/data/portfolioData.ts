import type { NavItem, Project, SkillCategoryGroup, TimelineEntry, Certificate, SocialLink } from '../types'

export const personalInfo = {
  name: 'Ansh Sharma',
  role: 'AI & Machine Learning Engineer',
  tagline: 'B.Tech AIML Student at DPGITM | Python, Data Science & Cybersecurity',
  headline: 'Engineering Intelligent Systems. Delivering Data-Driven Solutions.',
  bio: "I'm Ansh Sharma, a B.Tech student specializing in Artificial Intelligence & Machine Learning (AIML) at DPG Institute of Technology and Management, Gurugram. Passionate about applying Python, data science, and modern engineering to build innovative, reliable, data-driven solutions.",
  status: 'Available for opportunities',
  location: 'Gurugram, Haryana, India',
  phone: '+91 8368309766',
  email: 'anshh1953@gmail.com',
  github: 'https://github.com/ansh-sharma',
  linkedin: 'https://linkedin.com/in/ansh-sharma-47066b35a',
  resumeUrl: '/Ansh_Sharma_Resume.pdf',
  resumeTextUrl: '/Ansh_Sharma_Software_Engineer_Resume.txt',
  techHighlights: ['PYTHON', 'AI & ML', 'DATA SCIENCE', 'CYBERSECURITY'],
  experienceSummary: 'Experienced in Python for Data Science (AISECT Learn 4-credit intern) and IBM SkillsBuild Cybersecurity.',
  dateOfBirth: '28 January 2007',
  languages: ['English', 'Hindi'],
  strengths: ['Quick Learner & Adaptable', 'Team Collaboration & Communication', 'Analytical & Problem-Solving Mindset']
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Foundational languages used for algorithms, data structures, backend logic, and numerical computing.',
    iconName: 'Code2',
    skills: ['Python', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    id: 'data-science',
    name: 'Data Science & Machine Learning',
    description: 'Data manipulation, exploratory analysis, feature extraction, and statistical modeling.',
    iconName: 'Cpu',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analysis', 'Data Cleaning', 'Data Visualization', 'Logical Thinking'],
  },
  {
    id: 'bi-tools',
    name: 'BI, Analytics & Developer Tools',
    description: 'Industry-standard analytics suites, spreadsheets, and developer tooling.',
    iconName: 'Terminal',
    skills: ['Power BI', 'Microsoft Excel', 'Git & GitHub', 'VS Code', 'Jupyter Notebook'],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Systems',
    description: 'Security fundamentals, vulnerability identification, and enterprise defense trained via IBM SkillsBuild.',
    iconName: 'Server',
    skills: ['Cybersecurity Fundamentals', 'Network Security', 'Threat Analysis', 'Linux / Bash', 'System Defense'],
  },
  {
    id: 'web-development',
    name: 'Web & Interface Technologies',
    description: 'Frontend fundamentals for interactive dashboards and data visualizers.',
    iconName: 'Layout',
    skills: ['React (Core Knowledge)', 'HTML5', 'Modern CSS', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 'databases',
    name: 'Database & Storage',
    description: 'Structured query design, schema modeling, and relational data management.',
    iconName: 'Database',
    skills: ['SQL', 'Relational Schema', 'Query Optimization', 'Data Pipelines'],
  },
]

export const projects: Project[] = [
  {
    id: 'capstone-data-analysis',
    title: 'Capstone Project – Data Analysis using Pandas & Matplotlib',
    tagline: 'End-to-end data processing, exploratory analysis, and trend pattern visualization on structured datasets.',
    description: 'An applied data science project conducting analysis on structured real-world datasets using Pandas for data cleansing and Matplotlib for pattern discovery and trend visualization.',
    fullDescription: 'Developed during the AISECT Learn Python for Data Science internship. Ingests raw tabular data, cleans anomalies, handles missing indicators, and outputs actionable visual distributions and correlation heatmaps to strengthen data-driven decision making.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Data Cleaning', 'Data Visualization'],
    featured: true,
    status: 'Completed',
    githubUrl: 'https://github.com/ansh-sharma/data-analysis-capstone',
    liveUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    architectureHighlights: [
      'Comprehensive data cleaning and missing value handling across multi-feature datasets',
      'Matplotlib statistical distributions, box plots, and trend correlation matrices',
      'Actionable analytical summaries guiding data-driven decision making',
      'Structured modular Jupyter and Python codebase with 100% reproducible notebooks'
    ],
    metrics: [
      { label: 'Data Points Analyzed', value: '50,000+' },
      { label: 'Cleaning Efficiency', value: '100%' },
      { label: 'Visual Visualizations', value: '15+ Charts' }
    ]
  },
  {
    id: 'verifyweb',
    title: 'VerifyWeb – Intelligent Misinformation Detection Platform',
    tagline: 'Automated claim verification and credibility scoring platform using Python NLP and web interfaces.',
    description: 'A full-stack project combining NLP techniques and cross-referenced search verification to analyze claims, check source reliability, and produce explainable credibility metrics.',
    fullDescription: 'Synthesizes information across verified registries and stance analysis models. Features async FastAPI backend routes and React interfaces with citation transparency.',
    technologies: ['Python', 'Pandas', 'React', 'FastAPI', 'SQL', 'Tailwind CSS'],
    featured: false,
    status: 'Active Development',
    githubUrl: 'https://github.com/ansh-sharma/verifyweb',
    liveUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Accuracy Score', value: '94.2%' },
      { label: 'Inference Latency', value: '<180ms' }
    ]
  },
  {
    id: 'cybersecurity-analyzer',
    title: 'IBM SkillsBuild Threat & Vulnerability Audit Suite',
    tagline: 'Practical security assessment scripts and defensive posture analysis developed during IBM SkillsBuild BootCamp.',
    description: 'A suite of Python and network security audit scripts designed to analyze system vulnerability vectors, monitor auth logs, and verify basic encryption protocols.',
    fullDescription: 'Created as part of the 2-Week IBM SkillsBuild Cybersecurity BootCamp in association with BharatCares, focusing on threat taxonomy, password hashing integrity, and firewall rule auditing.',
    technologies: ['Python', 'Cybersecurity', 'Linux / Bash', 'Network Security', 'Threat Analysis'],
    featured: false,
    status: 'Completed',
    githubUrl: 'https://github.com/ansh-sharma/cybersecurity-audit-suite',
    liveUrl: '#',
    previewImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'BootCamp Duration', value: '2 Weeks' },
      { label: 'Security Lab Score', value: '100%' }
    ]
  }
]

export const timelineData: TimelineEntry[] = [
  {
    id: 'edu-btech-aiml',
    period: '2023 – Present',
    title: 'B.Tech in Artificial Intelligence & Machine Learning (AIML)',
    subtitle: 'Undergraduate Engineering Program',
    organization: 'DPG Institute of Technology and Management',
    location: 'Gurugram, Haryana, India',
    scoreOrGpa: 'SGPA: 7.4 (Last Semester)',
    description: [
      'Specializing in Artificial Intelligence and Machine Learning (AIML) with coursework covering Python, C++, Data Structures, Database Management Systems, and Mathematics.',
      'Active focus on applied machine learning, exploratory data science, and hands-on software development.',
      'Pursuing degree with consistent analytical performance and practical lab execution.'
    ],
    technologies: ['Python', 'C++', 'Java', 'SQL', 'AIML Concepts', 'Data Structures'],
    type: 'education'
  },
  {
    id: 'exp-aisect-intern',
    period: '2025 (45 Days / 120 Hours)',
    title: 'Python for Data Science Intern (4 Credits)',
    subtitle: 'AISECT Learn Internship',
    organization: 'AISECT Learn',
    location: 'Online / Verified (Cert ID: j82HZm6AKB)',
    scoreOrGpa: '4 Academic Credits',
    description: [
      'Completed a rigorous 4-credit, 120-hour internship focused on Python for Data Science.',
      'Mastered data cleaning, manipulation, and feature engineering using Pandas and NumPy.',
      'Constructed exploratory visualizations and pattern graphs with Matplotlib on real-world datasets.',
      'Applied analytical problem-solving skills to derive data-driven insights.'
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Data Analysis'],
    type: 'experience'
  },
  {
    id: 'exp-ibm-cybersecurity',
    period: 'October 2026 (2 Weeks)',
    title: 'IBM SkillsBuild Cybersecurity BootCamp',
    subtitle: 'BharatCares in Association with IBM',
    organization: 'BharatCares & IBM',
    location: 'Gurugram / Online (ID: BHIBMCSB00747)',
    scoreOrGpa: 'Verified Certificate',
    description: [
      'Successfully completed the 2-Week intensive IBM SkillsBuild Cybersecurity BootCamp conducted in association with BharatCares (5th Oct – 19th Oct 2026).',
      'Trained in network security fundamentals, threat modeling, defensive controls, and vulnerability analysis.',
      'Awarded Certificate of Training with Unique ID: BHIBMCSB00747.'
    ],
    technologies: ['Cybersecurity', 'Threat Analysis', 'Network Security', 'Enterprise Defense'],
    type: 'training'
  },
  {
    id: 'edu-class-xii',
    period: 'Completed',
    title: 'Senior School Certificate Examination (Class XII) – CBSE',
    subtitle: 'High School Examination',
    organization: 'Sharda International School',
    location: 'Gurugram, Haryana, India',
    scoreOrGpa: 'Aggregate: 64%',
    description: [
      'Completed CBSE Senior Secondary School Examination with core focus on analytical subjects.',
      'Built early foundations in computer science and logical problem solving.'
    ],
    type: 'education'
  },
  {
    id: 'edu-class-x',
    period: 'Completed',
    title: 'Secondary School Examination (Class X) – CBSE',
    subtitle: 'Secondary School Certification',
    organization: 'Sharda International School',
    location: 'Gurugram, Haryana, India',
    scoreOrGpa: 'Status: Passed',
    description: [
      'Passed CBSE Class X Board Examination with distinction in foundational academics.'
    ],
    type: 'education'
  }
]

export const certificates: Certificate[] = [
  {
    id: 'cert-ibm-cybersecurity',
    title: 'IBM SkillsBuild Cybersecurity BootCamp',
    issuer: 'IBM & BharatCares',
    date: 'October 2026',
    credentialUrl: '/Ansh_Sharma_IBM_Cybersecurity_Certificate.pdf',
    skills: ['Cybersecurity', 'Threat Analysis', 'Network Defense', 'IBM SkillsBuild (ID: BHIBMCSB00747)']
  },
  {
    id: 'cert-aisect-python',
    title: 'Python for Data Science Internship (4 Credits / 120 Hours)',
    issuer: 'AISECT Learn',
    date: '2025',
    credentialUrl: 'https://courses.aisectlearn.com',
    skills: ['Python', 'Pandas', 'Matplotlib', 'Data Science (Cert ID: j82HZm6AKB)']
  }
]

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/ansh-sharma-47066b35a', icon: 'Linkedin', handle: 'ansh-sharma-47066b35a' },
  { platform: 'GitHub', url: 'https://github.com/ansh-sharma', icon: 'Github', handle: '@ansh-sharma' },
  { platform: 'Email', url: 'mailto:anshh1953@gmail.com', icon: 'Mail', handle: 'anshh1953@gmail.com' }
]
