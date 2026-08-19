// =====================================================================
// CONTENIDO CENTRAL DEL PORTAFOLIO — Erick Pérez Gutiérrez
// Toda la información proviene de los CVs 2026 (carpeta CV_2026) y del
// portafolio real. No se inventa nada: solo contenido verificable.
// =====================================================================

export const profile = {
  name: 'Erick Pérez Gutiérrez',
  shortName: 'Erick Pérez',
  headline: 'QA & Automation Analyst | Backend (FastAPI) & DevOps (in transition)',
  subtitle: 'QA & Automation Analyst | Backend (FastAPI) & DevOps (in transition)',
  location: 'San José, Costa Rica',
  phone: '+506 6064-6370',
  email: 'ericksuper80@hotmail.com',
  portfolio: 'portfolioerickdev.netlify.app',
  portfolioUrl: 'https://portfolioerickdev.netlify.app',
  githubUrl: 'https://github.com/ericksuper8000-source',
  githubName: 'github.com/ericksuper8000-source',
  gitlabUrl: 'https://gitlab.com/ericksuper80',
  gitlabName: 'gitlab.com/ericksuper80',
  linkedinUrl: 'https://www.linkedin.com/in/erick-perez88',
  linkedinName: 'linkedin.com/in/erick-perez88',
  birth: 'Feb 8, 1989',
  totalExperience: '10+ years',
  quote:
    '"In both QA and DevOps there is no room for error. It\'s about precision, scalability, and leaving a lasting mark of quality."',
  languages: 'Spanish (Native) · English (Advanced / Full professional)',
  bio:
    'QA & Automation Analyst with over 5 years validating high-volume enterprise systems for Fortune 500 brands ' +
    '(Disney, Wells Fargo, The New York Times, Starbucks) with a proven zero-critical-error record. Currently ' +
    'pivoting into Backend Engineering with FastAPI and DevOps practices (CI/CD, Docker, AWS). ' +
    'Beyond the terminal, realism tattoo artist and literature enthusiast who values precision in both code and art.',
};

// ---------------------------------------------------------------------
// EXPERIENCIA
// ---------------------------------------------------------------------
export const experiences = [
  {
    slug: 'catalina',
    type: 'experience',
    company: 'Catalina Marketing',
    period: 'Nov 2023 – Dec 2025',
    duration: '2 years 1 month',
    role: 'Senior Campaign Specialist & QA Validation',
    location: 'Costa Rica',
    urlPath: 'experience › catalina-marketing',
    summary:
      'Senior Campaign Specialist with a proven record of zero critical delivery errors managing high-volume ' +
      'in-store and digital coupon campaigns for Fortune 500 brands.',
    description:
      'Managed end-to-end execution of high-volume in-store and digital coupon campaigns on enterprise ' +
      'CMS/CRM platforms (Salesforce, WordPress, Catalina Media Platform). Maintained a proven record of zero ' +
      'critical delivery errors while handling intense campaign workflows, and was promoted ahead of schedule for ' +
      'exceptional risk assessment and operational precision. Mentored peers facing quality challenges and ' +
      'participated in a volunteer operations group handling platform-wide administrative requests.',
    bullets: [
      'Automated data validation and verification routines for high-volume digital campaign systems, maintaining a record of zero critical delivery errors.',
      'Managed complex programmatic configurations in enterprise platforms (Salesforce, WordPress), applying data mapping and normalization techniques to guarantee data integrity.',
      'Promoted ahead of schedule for exceptional risk assessment and operational precision.',
      'Mentored peers in data verification techniques and workflow optimization.',
    ],
    tags: ['Salesforce', 'WordPress', 'Catalina Media Platform', 'Data Validation', 'Campaign Operations', 'QA'],
    related: [
      { label: 'Cheetah Digital — Senior CQE', to: '/experiencia/cheetah-digital' },
      { label: 'QA & Test Automation', to: '/conocimientos/qa-automation' },
      { label: 'Campaign Specialist CV', to: '/curriculum' },
    ],
  },
  {
    slug: 'cheetah-digital',
    type: 'experience',
    company: 'Cheetah Digital',
    period: 'Sep 2021 – Oct 2023',
    duration: '2 years 1 month',
    role: 'Email Marketing Senior CQE (Quality Engineering)',
    location: 'Costa Rica',
    urlPath: 'experience › cheetah-digital',
    summary:
      'Senior Quality Engineering role that designed a QA framework reducing campaign review time by 25%, ' +
      'with 100% accuracy across monthly deployment schedules.',
    description:
      'Led multi-regional QA testing and validation for large-scale email campaigns using manual and automated ' +
      'methodologies. Designed and implemented a complete QA framework that reduced campaign review time by 25%. ' +
      'Coordinated monthly deployment validation (datasets, filters, segmentation logic and platform configurations) ' +
      'with 100% accuracy, and ensured data governance and security compliance for sensitive client databases.',
    bullets: [
      'Designed and implemented a complete QA framework that reduced campaign review time by 25%.',
      'Led multi-regional QA testing and validation for large-scale email campaigns using manual and automated methodologies.',
      'Coordinated monthly deployment schedules managing large datasets, list segmentation logic and platform configurations with 100% accuracy.',
      'Liaised as primary technical contact with stakeholders across the US, Brazil, Europe and Asia.',
      'Ensured strict compliance with data governance and security standards while handling sensitive client data.',
    ],
    tags: ['QA Framework', 'Test Design', 'pytest', 'Data Validation', 'Email Marketing', 'Automation'],
    related: [
      { label: 'Catalina Marketing — QA Validation', to: '/experiencia/catalina' },
      { label: 'QA & Test Automation', to: '/conocimientos/qa-automation' },
      { label: 'CI/CD Quality Gates', to: '/conocimientos/cicd-containers' },
    ],
  },
  {
    slug: 'experian',
    type: 'experience',
    company: 'Experian',
    period: 'Oct 2019 – Aug 2020',
    duration: '10 months',
    role: 'Email Marketing Specialist / QA Support',
    location: 'Costa Rica',
    urlPath: 'experience › experian',
    summary:
      'Supported QA and validation processes for Fortune 500 accounts, combining campaign testing, data mapping ' +
      'and API integration checks in high-velocity delivery environments.',
    description:
      'Supported QA and validation processes for enterprise accounts (Disney, Starbucks, The New York Times, ' +
      'Wells Fargo): campaign testing, data mapping and API integration checks. Maintained rigorous quality ' +
      'standards through structured QA processes in high-velocity delivery environments.',
    bullets: [
      'Supported data mapping, API integrations and secure database import/export pipelines for Fortune 500 accounts (Disney, Starbucks, The New York Times).',
      'Performed structured validation checks on multi-sourced consumer data to ensure record fidelity.',
      'Maintained rigorous quality standards through structured QA processes in high-velocity delivery environments.',
    ],
    tags: ['Data Mapping', 'API Integrations', 'QA', 'Data Validation', 'Fortune 500'],
    related: [
      { label: 'Catalina Marketing — QA Validation', to: '/experiencia/catalina' },
      { label: 'Cheetah Digital — Senior CQE', to: '/experiencia/cheetah-digital' },
      { label: 'Relational Databases & Data Integrity', to: '/conocimientos/databases' },
    ],
  },
  {
    slug: 'western-union',
    type: 'experience',
    company: 'Western Union',
    period: 'Mar 2016 – Feb 2019',
    duration: '2 years 11 months',
    role: 'Fraud Detection Analyst – Digital Transactions & Risk Operations',
    location: 'Costa Rica',
    urlPath: 'experience › western-union',
    summary:
      'Built a data-driven mindset centered on pattern recognition, risk analysis and informed decision-making ' +
      'across global digital transactions.',
    description:
      'Specialized in digital fraud detection and risk analysis, supporting the identification and prevention of ' +
      'fraudulent activity across global online transactions. Analyzed customer profiles and transactional data to ' +
      'detect suspicious patterns, contributing to the protection of users and the integrity of financial systems.',
    bullets: [
      'Analyzed customer profiles and transactional data to detect suspicious patterns across global online transactions.',
      'Supported risk operations protecting the integrity of financial systems for millions of users.',
      'Developed a data-driven mindset centered on pattern recognition, risk analysis and informed decision-making.',
    ],
    tags: ['Risk Analysis', 'Pattern Recognition', 'Data Analysis', 'Fraud Detection'],
    related: [
      { label: 'QA & Test Automation', to: '/conocimientos/qa-automation' },
      { label: 'Relational Databases & Data Integrity', to: '/conocimientos/databases' },
      { label: 'Who I am', to: '/sobre-erick' },
    ],
  },
  {
    slug: 'concentrix',
    type: 'experience',
    company: 'Concentrix',
    period: 'Jun 2015 – Dec 2015',
    duration: '7 months',
    role: 'Technical Support Specialist – Apple Ecosystem (Founding Team)',
    location: 'Costa Rica',
    urlPath: 'experience › concentrix',
    summary:
      'Part of the founding team that launched the technical support line for Apple products in Costa Rica, ' +
      'establishing processes and troubleshooting standards.',
    description:
      'Selected as part of the founding team responsible for launching and scaling the technical support line for ' +
      'Apple products in Costa Rica, supporting U.S. customers across iPhone, Mac, Apple Watch and Apple digital ' +
      'services. Played a key role in establishing support processes, troubleshooting standards and ' +
      'knowledge-sharing practices in a newly formed operational environment.',
    bullets: [
      'Launched and scaled the technical support line for Apple products in Costa Rica supporting U.S. customers.',
      'Established support processes, troubleshooting standards and knowledge-sharing practices in a new operation.',
    ],
    tags: ['Technical Support', 'Troubleshooting', 'Customer Experience', 'Process Setup'],
    related: [
      { label: 'Linux Administration & Cloud Fundamentals', to: '/conocimientos/linux-cloud' },
      { label: 'Who I am', to: '/sobre-erick' },
    ],
  },
  {
    slug: 'aegis',
    type: 'experience',
    company: 'Aegis (now Teleperformance)',
    period: 'Apr 2012 – Jan 2015',
    duration: '2 years 9 months',
    role: 'Technical Support Specialist – Gaming Platforms & Digital Services',
    location: 'Costa Rica',
    urlPath: 'experience › aegis',
    summary:
      'Advanced technical support for U.S.-based gaming platforms and digital retail partners in a high-volume, ' +
      'systems-driven environment.',
    description:
      'Delivered advanced technical support for U.S.-based gaming platforms and digital retail partners, including ' +
      'Game Informer and GameStop, resolving issues related to user accounts, digital content and platform access. ' +
      'Operated within a high-volume, systems-driven environment requiring analytical thinking, precision and ' +
      'efficient issue resolution.',
    bullets: [
      'Resolved issues related to user accounts, digital content and platform access for U.S. gaming and retail partners.',
      'Operated in a high-volume, systems-driven environment requiring analytical thinking and precision.',
    ],
    tags: ['Technical Support', 'Systems Analysis', 'Digital Services', 'High Volume'],
    related: [
      { label: 'Linux Administration & Cloud Fundamentals', to: '/conocimientos/linux-cloud' },
      { label: 'Who I am', to: '/sobre-erick' },
    ],
  },
  {
    slug: 'sykes',
    type: 'experience',
    company: 'Sykes (now Foundever)',
    period: 'Aug 2011 – Feb 2012',
    duration: '6 months',
    role: 'Customer Support Specialist – Banking Services',
    location: 'Costa Rica',
    urlPath: 'experience › sykes',
    summary:
      'First professional experience delivering high-quality customer support for U.S. and Canadian banking clients.',
    description:
      'Delivered high-quality customer support for U.S. and Canadian clients on behalf of Bank of America, managing ' +
      'a wide range of banking inquiries including account management, transactions and mortgage-related concerns. ' +
      'Acted as the primary point of contact, ensuring accurate, compliant and customer-focused solutions in a ' +
      'fast-paced, high-volume environment.',
    bullets: [
      'Handled banking inquiries including account management, transactions and mortgage-related concerns.',
      'Acted as primary point of contact ensuring accurate, compliant and customer-focused solutions.',
    ],
    tags: ['Customer Support', 'Banking', 'Compliance', 'High Volume'],
    related: [
      { label: 'Who I am', to: '/sobre-erick' },
      { label: 'Contact', to: '/contacto' },
    ],
  },
];

// ---------------------------------------------------------------------
// EDUCACIÓN & CERTIFICACIONES
// ---------------------------------------------------------------------
export const education = [
  {
    slug: 'aws-cloud-practitioner',
    type: 'education',
    provider: 'Self-Study',
    period: 'In progress',
    title: 'AWS Cloud Practitioner — Self-Study',
    urlPath: 'education › aws-cloud-practitioner',
    summary:
      'Studying core AWS services and concepts toward the AWS Certified Cloud Practitioner certification.',
    description:
      'Focused self-study program covering the fundamental AWS services and architecture concepts required to ' +
      'design and operate secure, scalable cloud environments.',
    bullets: [
      'Core services: EC2, S3, IAM, VPC, RDS, ECS/Fargate.',
      'Networking and delivery: Route 53, CloudFront.',
      'Security services: GuardDuty, Inspector, Shield, WAF.',
      'Disaster recovery concepts: RTO/RPO.',
    ],
    tags: ['AWS', 'Cloud', 'EC2', 'S3', 'IAM', 'VPC', 'RDS'],
    related: [
      { label: 'DevOps Engineering Degree', to: '/educacion/devops-engineering' },
      { label: 'Linux Administration & Cloud Fundamentals', to: '/conocimientos/linux-cloud' },
      { label: 'Linux DevOps Labs', to: '/mis-proyectos/linux-devops-labs' },
    ],
  },
  {
    slug: 'devops-engineering',
    type: 'education',
    provider: 'EducacionIT',
    period: 'Expected 2027',
    title: 'DevOps Engineering Degree — EducacionIT',
    urlPath: 'education › devops-engineering',
    summary:
      'Comprehensive technical program focusing on infrastructure automation, cloud architecture and modern ' +
      'deployment lifecycles.',
    description:
      'Structured degree program covering cloud architecture, CI/CD patterns and the software engineering ' +
      'lifecycle, with hands-on expertise in pipeline orchestration, containerization (Docker) and cloud ' +
      'infrastructure management.',
    bullets: [
      'Cloud architecture and infrastructure automation.',
      'CI/CD pipeline orchestration and modern deployment lifecycles.',
      'Containerization with Docker and container orchestration concepts.',
      'Software engineering lifecycle and release management.',
    ],
    tags: ['DevOps', 'CI/CD', 'Cloud', 'Docker', 'Automation'],
    related: [
      { label: 'AWS Cloud Practitioner', to: '/educacion/aws-cloud-practitioner' },
      { label: 'CI/CD Pipeline Labs', to: '/mis-proyectos/cicd-pipeline-labs' },
      { label: 'CI/CD & Docker Containerization', to: '/conocimientos/cicd-containers' },
    ],
  },
  {
    slug: 'spec-driven-development',
    type: 'education',
    provider: 'Big School',
    period: 'Issued 2026',
    title: 'Advanced AI-Assisted Engineering & Spec-Driven Development (SDD) — Big School',
    urlPath: 'education › spec-driven-development',
    summary:
      'Certification focused on modern software engineering methodologies leveraging AI tooling and ' +
      'Spec-Driven Development.',
    description:
      'Intensive certification focused on modern software engineering methodologies leveraging state-of-the-art ' +
      'AI tooling. Mastered Spec-Driven Development (SDD) to architect technical blueprints, optimize token budget ' +
      'allocation and minimize technical debt, with hands-on experience orchestrating advanced AI workflows.',
    bullets: [
      'Spec-Driven Development (SDD): technical blueprint design and token-efficient architecture.',
      'Advanced AI tooling and context-aware autonomous agents.',
      'Persistent memory layers and deep documentation ingestion.',
    ],
    tags: ['SDD', 'AI Engineering', 'Architecture', 'Documentation'],
    related: [
      { label: 'Backend Architecture with FastAPI', to: '/educacion/fastapi' },
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
      { label: 'Python & Backend Development', to: '/conocimientos/python-backend' },
    ],
  },
  {
    slug: 'advanced-python',
    type: 'education',
    provider: 'Independent Study',
    period: '80+ hours',
    title: 'Advanced Python & Desktop Applications — Independent Study',
    urlPath: 'education › advanced-python',
    summary:
      '80+ hours of combined theory and practice focused on OOP, data validation and GUI development (Tkinter).',
    description:
      'Structured independent study (80+ hours) covering Object-Oriented Programming (OOP), data validation and ' +
      'GUI development with Tkinter, applied directly to building local software solutions with clean, structured ' +
      'architecture.',
    bullets: [
      'Object-Oriented Programming (OOP) and data validation.',
      'GUI development with Tkinter.',
      'Applied to building local software solutions with clean architecture.',
    ],
    tags: ['Python', 'OOP', 'Tkinter', 'Data Validation'],
    related: [
      { label: 'Backend Architecture with FastAPI', to: '/educacion/fastapi' },
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
      { label: 'Python & Backend Development', to: '/conocimientos/python-backend' },
    ],
  },
  {
    slug: 'sql-design',
    type: 'education',
    provider: 'Intensive Course',
    period: '20 hours',
    title: 'Relational Databases & SQL Design — Intensive Course',
    urlPath: 'education › sql-design',
    summary:
      '20-hour intensive course on normalization, complex query optimization and transactional data integrity.',
    description:
      'Intensive 20-hour course focused on database normalization, complex query optimization and ensuring ' +
      'transactional data integrity across relational models.',
    bullets: [
      'Database normalization and relational modeling.',
      'Complex query optimization.',
      'Transactional data integrity across relational models.',
    ],
    tags: ['SQL', 'PostgreSQL', 'Normalization', 'Data Integrity'],
    related: [
      { label: 'Relational Databases & Data Integrity', to: '/conocimientos/databases' },
      { label: 'Database Analysis & Design — Platzi', to: '/educacion/database-analysis-platzi' },
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
    ],
  },
  {
    slug: 'fastapi',
    type: 'education',
    provider: 'Specialized Training',
    period: '4 hours',
    title: 'Backend Architecture with FastAPI — Specialized Training',
    urlPath: 'education › fastapi',
    summary:
      'Specialized 4-hour training on RESTful API routing, async logic and Pydantic validation with FastAPI.',
    description:
      'Specialized training (4 hours) covering high-performance RESTful API development with FastAPI: RESTful API ' +
      'routing, async logic, Pydantic validation and Spec-Driven Development for seamless backend workflows.',
    bullets: [
      'RESTful API routing and async logic with FastAPI.',
      'Pydantic validation for robust request/response layers.',
      'Spec-Driven Development applied to backend workflows.',
    ],
    tags: ['FastAPI', 'Python', 'REST API', 'Pydantic', 'Async'],
    related: [
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
      { label: 'Advanced Python & Desktop Applications', to: '/educacion/advanced-python' },
      { label: 'Python & Backend Development', to: '/conocimientos/python-backend' },
    ],
  },
  {
    slug: 'web-development-platzi',
    type: 'education',
    provider: 'Platzi',
    period: 'Issued 2021',
    title: 'Web Development Program — Platzi',
    urlPath: 'education › web-development-platzi',
    summary:
      'Intensive track covering modern web standards, semantic HTML5, responsive CSS and foundational JavaScript.',
    description:
      'Intensive track covering modern web standards, semantic HTML5, responsive CSS architectures and ' +
      'foundational JavaScript logic for building dynamic user interfaces.',
    bullets: [
      'Semantic HTML5 and responsive CSS architectures.',
      'Foundational JavaScript logic for dynamic user interfaces.',
      'Modern web standards and best practices.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    related: [
      { label: 'Technical Degree in Web Page Design', to: '/educacion/web-design-fidelitas' },
      { label: 'Who I am', to: '/sobre-erick' },
      { label: 'Curriculum', to: '/curriculum' },
    ],
  },
  {
    slug: 'database-analysis-platzi',
    type: 'education',
    provider: 'Platzi',
    period: 'Issued 2020',
    title: 'Relational Database Analysis & Design — Platzi',
    urlPath: 'education › database-analysis-platzi',
    summary:
      'Specialized coursework on conceptual modeling, entity-relationship diagrams and efficient SQL statements.',
    description:
      'Specialized coursework focused on conceptual modeling, entity-relationship diagrams (ERD), relational ' +
      'algebra and writing efficient SQL statements for data retrieval.',
    bullets: [
      'Conceptual modeling and entity-relationship diagrams (ERD).',
      'Relational algebra and efficient SQL statements for data retrieval.',
    ],
    tags: ['SQL', 'ERD', 'Data Modeling', 'Relational Databases'],
    related: [
      { label: 'Relational Databases & SQL Design', to: '/educacion/sql-design' },
      { label: 'Relational Databases & Data Integrity', to: '/conocimientos/databases' },
      { label: 'Sales Data Analyzer', to: '/mis-proyectos/sales-data-analyzer' },
    ],
  },
  {
    slug: 'web-design-fidelitas',
    type: 'education',
    provider: 'Universidad Fidélitas',
    period: 'Issued 2014',
    title: 'Technical Degree in Web Page Design — Universidad Fidélitas',
    urlPath: 'education › web-design-fidelitas',
    summary:
      'Professional technical program centered on web layout, visual interface design and cross-browser deployment.',
    description:
      'Professional technical program centered on web layout techniques, visual interface design principles and ' +
      'optimizing digital assets for cross-browser web deployments.',
    bullets: [
      'Web layout techniques and visual interface design principles.',
      'Optimizing digital assets for cross-browser web deployments.',
    ],
    tags: ['Web Design', 'UI', 'Layout', 'HTML', 'CSS'],
    related: [
      { label: 'Web Development Program — Platzi', to: '/educacion/web-development-platzi' },
      { label: 'Who I am', to: '/sobre-erick' },
      { label: 'Curriculum', to: '/curriculum' },
    ],
  },
  {
    slug: 'computer-systems',
    type: 'education',
    provider: 'Universidad Latina de Costa Rica',
    period: 'Attended 2013',
    title: 'Computer Systems Engineering — Universidad Latina de Costa Rica',
    urlPath: 'education › computer-systems-engineering',
    summary:
      'Foundational coursework in computer science, algorithmic logic, programming fundamentals and discrete mathematics.',
    description:
      'Foundational coursework in computer science, algorithmic logic, programming fundamentals and discrete ' +
      'mathematics. Undergraduate program, incomplete.',
    bullets: [
      'Computer science foundations and algorithmic logic.',
      'Programming fundamentals and discrete mathematics.',
    ],
    tags: ['Computer Science', 'Algorithms', 'Programming'],
    related: [
      { label: 'DevOps Engineering Degree', to: '/educacion/devops-engineering' },
      { label: 'Who I am', to: '/sobre-erick' },
    ],
  },
];

// ---------------------------------------------------------------------
// PROYECTOS
// ---------------------------------------------------------------------
export const projects = [
  {
    slug: 'api-learning-lab',
    type: 'project',
    iconDomain: 'fastapi.tiangolo.com',
    name: 'API-Learning-Lab — FastAPI REST API',
    urlPath: 'projects › api-learning-lab',
    repo: 'github.com/ericksuper8000-source/api-learning-lab',
    repoUrl: 'https://github.com/ericksuper8000-source/api-learning-lab',
    summary:
      'REST API built with Python 3.11, FastAPI, Pydantic v2 and Uvicorn, with PostgreSQL CRUD and pytest quality gates.',
    description:
      'Hands-on project for learning and demonstrating production-style backend development. The roadmap covers ' +
      'PostgreSQL CRUD operations, automated quality gates with pytest, and continuous integration via GitHub ' +
      'Actions + GitLab CI using mirrored repositories.',
    bullets: [
      'REST API with Python 3.11, FastAPI, Pydantic v2 and Uvicorn.',
      'PostgreSQL CRUD operations and relational data modeling.',
      'pytest quality gates and CI via GitHub Actions + GitLab CI (mirrored repositories).',
    ],
    tags: ['FastAPI', 'Python', 'Pydantic', 'PostgreSQL', 'pytest', 'CI/CD'],
    related: [
      { label: 'Backend Architecture with FastAPI', to: '/educacion/fastapi' },
      { label: 'Relational Databases & Data Integrity', to: '/conocimientos/databases' },
      { label: 'WhatsApp Finance Assistant', to: '/mis-proyectos/caja-chica-bot' },
    ],
  },
  {
    slug: 'caja-chica-bot',
    type: 'project',
    iconDomain: 'github.com',
    name: 'WhatsApp Finance Assistant (caja-chica-bot)',
    urlPath: 'projects › caja-chica-bot',
    repo: 'github.com/ericksuper8000-source',
    repoUrl: 'https://github.com/ericksuper8000-source',
    summary:
      'AI assistant backend: FastAPI webhooks, Celery/Redis, OpenAI Whisper + GPT-4o-mini, Google Sheets API, ' +
      'Docker Compose and 48 automated pytest tests.',
    description:
      'Backend for an AI assistant that manages a small-business petty cash (caja chica) ledger through WhatsApp. ' +
      'Built with FastAPI webhooks, a Celery/Redis task queue, OpenAI Whisper + GPT-4o-mini for transcription and ' +
      'summaries, Google Sheets API as storage, and Docker Compose for orchestration. Includes 48 automated pytest ' +
      'tests, HMAC signature validation and rate limiting.',
    bullets: [
      'FastAPI webhooks + Celery/Redis task queue for async processing.',
      'OpenAI Whisper + GPT-4o-mini for voice transcription and AI summaries.',
      'Google Sheets API as storage layer and Docker Compose orchestration.',
      '48 automated pytest tests, HMAC signature validation and rate limiting.',
    ],
    tags: ['FastAPI', 'Celery', 'Redis', 'OpenAI', 'Docker Compose', 'pytest'],
    related: [
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
      { label: 'Python & Backend Development', to: '/conocimientos/python-backend' },
      { label: 'QA & Test Automation', to: '/conocimientos/qa-automation' },
    ],
  },
  {
    slug: 'cicd-pipeline-labs',
    type: 'project',
    iconDomain: 'github.com',
    name: 'CI/CD Pipeline Labs — Multi-Registry Delivery Pipeline',
    urlPath: 'projects › cicd-pipeline-labs',
    repo: 'github.com/ericksuper8000-source/proyecto1',
    repoUrl: 'https://github.com/ericksuper8000-source',
    summary:
      'Full delivery pipeline: GitHub Actions + GitLab CI with lint, test and Docker stages publishing to three ' +
      'registries, with Watchtower auto-deploy.',
    description:
      'Flagship DevOps project: a full delivery pipeline designed with GitHub Actions and GitLab CI running lint, ' +
      'test and Docker stages. A single image is built and published to three registries (Docker Hub, GHCR, GitLab ' +
      'Container Registry). Local continuous deployment is implemented with Docker Compose + Watchtower (auto-recreate ' +
      'on new image) including restart policies and image lifecycle management. Applies Git flow (master/develop), ' +
      'conventional commits and mirrored repositories on GitHub and GitLab.',
    bullets: [
      'Lint, test and Docker stages in GitHub Actions + GitLab CI.',
      'One image built and published to three registries (Docker Hub, GHCR, GitLab Container Registry).',
      'Local CD with Docker Compose + Watchtower (auto-recreate), restart policies and image lifecycle management.',
      'Git flow (master/develop), conventional commits and mirrored repositories.',
    ],
    tags: ['GitHub Actions', 'GitLab CI', 'Docker', 'YAML', 'Watchtower', 'CI/CD'],
    related: [
      { label: 'DevOps Engineering Degree', to: '/educacion/devops-engineering' },
      { label: 'CI/CD & Docker Containerization', to: '/conocimientos/cicd-containers' },
      { label: 'Linux DevOps Labs', to: '/mis-proyectos/linux-devops-labs' },
    ],
  },
  {
    slug: 'linux-devops-labs',
    type: 'project',
    iconDomain: 'linux.org',
    name: 'Linux DevOps Labs — Debian System Administration',
    urlPath: 'projects › linux-devops-labs',
    repo: 'VirtualBox lab environment',
    repoUrl: 'https://www.virtualbox.org/',
    summary:
      'Hands-on Debian 13 environment (VirtualBox): SSH, users/permissions, snapshots, with a 45-lab roadmap to ' +
      'real VPS deployment.',
    description:
      'Dedicated virtual lab for learning Linux system administration. Configures and maintains a Debian 13 ' +
      'environment in VirtualBox with SSH server, Guest Additions, shared folders and baseline snapshots. ' +
      'Following a 45-lab curriculum covering users/permissions, systemd services, package management (APT), ' +
      'firewalls (UFW), Nginx, Docker deployment and monitoring, toward a real VPS deployment.',
    bullets: [
      'Debian 13 lab environment in VirtualBox: SSH server, Guest Additions, shared folders, snapshots.',
      '45-lab curriculum: users/permissions, systemd, APT, UFW, Nginx, Docker deployment and monitoring.',
      'Path toward real VPS deployment (Nginx, Let\'s Encrypt, firewalls, monitoring).',
    ],
    tags: ['Linux', 'Debian', 'SSH', 'systemd', 'Nginx', 'VirtualBox'],
    related: [
      { label: 'Linux Administration & Cloud Fundamentals', to: '/conocimientos/linux-cloud' },
      { label: 'AWS Cloud Practitioner', to: '/educacion/aws-cloud-practitioner' },
      { label: 'CI/CD Pipeline Labs', to: '/mis-proyectos/cicd-pipeline-labs' },
    ],
  },
  {
    slug: 'sales-data-analyzer',
    type: 'project',
    iconDomain: 'python.org',
    name: 'Sales Data Analyzer — Pandas & NumPy',
    urlPath: 'projects › sales-data-analyzer',
    repo: 'github.com/ericksuper8000-source/python-data-analyzer',
    repoUrl: 'https://github.com/ericksuper8000-source/python-data-analyzer',
    summary:
      'Data analysis scripts: CSV ingestion, date parsing, group-by aggregations and top-seller reporting with ' +
      'Pandas/NumPy.',
    description:
      'Data analysis project using Python with Pandas and NumPy: ingests CSV sales data, parses dates, performs ' +
      'group-by aggregations and produces top-seller reports. Demonstrates structured data processing applied to ' +
      'real business questions.',
    bullets: [
      'CSV ingestion and date parsing with Pandas.',
      'Group-by aggregations and top-seller reporting.',
      'Structured data processing applied to business questions.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'CSV'],
    related: [
      { label: 'Relational Databases & Data Integrity', to: '/conocimientos/databases' },
      { label: 'Database Analysis & Design — Platzi', to: '/educacion/database-analysis-platzi' },
      { label: 'Python & Backend Development', to: '/conocimientos/python-backend' },
    ],
  },
];

// ---------------------------------------------------------------------
// CONOCIMIENTOS / SKILLS
// ---------------------------------------------------------------------
export const skills = [
  {
    slug: 'qa-automation',
    type: 'skill',
    iconDomain: 'python.org',
    title: 'QA & Test Automation — 5+ Years of Zero-Error Delivery',
    urlPath: 'skills › qa-automation',
    summary:
      'Test case design, functional and regression validation, manual + automated testing and defect prevention ' +
      'for high-volume enterprise systems.',
    description:
      'More than 5 years validating high-volume enterprise systems with a record of zero critical delivery errors. ' +
      'Expert in test case design, functional and regression validation, manual and automated testing, test ' +
      'coverage and defect prevention. Built a QA framework that cut campaign review time by 25% and now automates ' +
      'with Python (pytest) plus CI/CD quality gates.',
    bullets: [
      'Test case design, functional and regression validation, manual + automated testing.',
      'Test coverage, defect prevention and deployment acceptance checks.',
      'QA framework that reduced campaign review time by 25%.',
      'Python (pytest) automation and CI/CD quality gates.',
    ],
    tags: ['QA', 'Test Design', 'pytest', 'Regression', 'Automation', 'Defect Prevention'],
    related: [
      { label: 'Catalina Marketing — QA Validation', to: '/experiencia/catalina' },
      { label: 'Cheetah Digital — Senior CQE', to: '/experiencia/cheetah-digital' },
      { label: 'WhatsApp Finance Assistant', to: '/mis-proyectos/caja-chica-bot' },
    ],
  },
  {
    slug: 'python-backend',
    type: 'skill',
    iconDomain: 'python.org',
    title: 'Python & Backend Development — FastAPI',
    urlPath: 'skills › python-backend',
    summary:
      'OOP, SOLID, type hints, async/await and Pydantic validation. Building REST APIs with FastAPI and automating ' +
      'workflows with Pandas/NumPy.',
    description:
      'Solid foundation in Python development: OOP, SOLID principles, type hints, async/await and data validation ' +
      'with Pydantic. Building REST APIs with FastAPI and Uvicorn, and automating data workflows with Pandas/NumPy. ' +
      'Supported by structured training (80+ hours) and hands-on portfolio projects.',
    bullets: [
      'OOP, SOLID, type hints, async/await and data validation with Pydantic.',
      'REST API development with FastAPI and Uvicorn.',
      'Data workflows with Pandas/NumPy.',
      'Structured training (80+ hours) plus hands-on portfolio projects.',
    ],
    tags: ['Python', 'FastAPI', 'Pydantic', 'Pandas', 'NumPy', 'OOP', 'SOLID'],
    related: [
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
      { label: 'WhatsApp Finance Assistant', to: '/mis-proyectos/caja-chica-bot' },
      { label: 'Advanced Python & Desktop Applications', to: '/educacion/advanced-python' },
    ],
  },
  {
    slug: 'databases',
    type: 'skill',
    iconDomain: 'postgresql.org',
    title: 'Relational Databases & Data Integrity',
    urlPath: 'skills › databases',
    summary:
      'PostgreSQL, relational data modeling, complex SQL queries, normalization and data integrity checks.',
    description:
      'Experience designing and querying relational databases with PostgreSQL: relational data modeling, complex ' +
      'SQL queries, normalization and data integrity checks. An intensive 20-hour SQL design course is applied ' +
      'directly to backend development and QA data validation.',
    bullets: [
      'PostgreSQL, relational data modeling and normalization.',
      'Complex SQL queries and data integrity checks.',
      'Applied to backend development and QA data validation.',
    ],
    tags: ['PostgreSQL', 'SQL', 'Data Modeling', 'Normalization', 'Data Integrity'],
    related: [
      { label: 'Relational Databases & SQL Design', to: '/educacion/sql-design' },
      { label: 'API-Learning-Lab', to: '/mis-proyectos/api-learning-lab' },
      { label: 'Database Analysis & Design — Platzi', to: '/educacion/database-analysis-platzi' },
    ],
  },
  {
    slug: 'cicd-containers',
    type: 'skill',
    iconDomain: 'docker.com',
    title: 'CI/CD Pipelines & Docker Containerization',
    urlPath: 'skills › cicd-containers',
    summary:
      'GitHub Actions and GitLab CI (lint → test → build → publish), YAML, Docker/Docker Compose, multi-registry ' +
      'publication and Watchtower auto-deploy.',
    description:
      'Designing automated workflows to enforce code health and accelerate delivery lifecycles. Building CI/CD ' +
      'pipelines with GitHub Actions and GitLab CI (lint, test, build, publish) in YAML, containerizing ' +
      'applications with Docker and Docker Compose, publishing images to multiple registries (Docker Hub, GHCR, ' +
      'GitLab Container Registry) and automating deployments with Watchtower.',
    bullets: [
      'GitHub Actions and GitLab CI pipeline design (lint → test → build → publish).',
      'Docker and Docker Compose, Dockerfile authoring and multi-registry publication.',
      'Watchtower auto-deploy and image lifecycle management.',
      'YAML workflows, secrets management and quality gates.',
    ],
    tags: ['GitHub Actions', 'GitLab CI', 'Docker', 'Docker Compose', 'YAML', 'Watchtower'],
    related: [
      { label: 'CI/CD Pipeline Labs', to: '/mis-proyectos/cicd-pipeline-labs' },
      { label: 'DevOps Engineering Degree', to: '/educacion/devops-engineering' },
      { label: 'Linux DevOps Labs', to: '/mis-proyectos/linux-devops-labs' },
    ],
  },
  {
    slug: 'linux-cloud',
    type: 'skill',
    iconDomain: 'aws.amazon.com',
    title: 'Linux Administration & Cloud Fundamentals (AWS)',
    urlPath: 'skills › linux-cloud',
    summary:
      'Debian administration via a hands-on VirtualBox lab and AWS fundamentals studied toward Cloud Practitioner.',
    description:
      'Entry-level Linux administration built through a dedicated Debian virtual lab environment (VirtualBox): SSH, ' +
      'user and permission management, package management (APT) and system services (systemd). Strong automation ' +
      'skills in Python and growing Shell/Bash scripting, plus cloud fundamentals (AWS: EC2, S3, IAM, VPC, RDS, ' +
      'ECS/Fargate) studied toward the AWS Cloud Practitioner certification.',
    bullets: [
      'Debian administration: SSH, users/permissions, systemd, APT.',
      'VirtualBox lab environment with snapshots and shared folders.',
      'AWS fundamentals (EC2, S3, IAM, VPC, RDS, ECS/Fargate) toward Cloud Practitioner.',
      'Python automation and growing Shell/Bash scripting.',
    ],
    tags: ['Linux', 'Debian', 'SSH', 'systemd', 'AWS', 'Cloud', 'Bash'],
    related: [
      { label: 'Linux DevOps Labs', to: '/mis-proyectos/linux-devops-labs' },
      { label: 'AWS Cloud Practitioner', to: '/educacion/aws-cloud-practitioner' },
      { label: 'CI/CD & Docker Containerization', to: '/conocimientos/cicd-containers' },
    ],
  },
];

// ---------------------------------------------------------------------
// CURRÍCULUMS (PDFs reales)
// ---------------------------------------------------------------------
export const curriculum = [
  {
    slug: 'python-developer',
    title: 'Junior Python Developer',
    file: '1_Python_Developer_ERICK_PEREZ.pdf',
    path: '/cv/1_Python_Developer_ERICK_PEREZ.pdf',
    urlPath: 'curriculum › python-developer',
    summary:
      'Backend focus with FastAPI, PostgreSQL, pytest and REST API development. Perfect for Junior Python / Backend / API Developer roles.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'pytest'],
  },
  {
    slug: 'devops-junior',
    title: 'Junior DevOps Engineer',
    file: '2_DevOps_Junior_ERICK_PEREZ.pdf',
    path: '/cv/2_DevOps_Junior_ERICK_PEREZ.pdf',
    urlPath: 'curriculum › devops-junior',
    summary:
      'CI/CD pipelines, Docker containerization, multi-registry publication and AWS fundamentals for Junior DevOps / CI-CD / Build & Release roles.',
    tags: ['CI/CD', 'Docker', 'GitHub Actions', 'GitLab CI', 'AWS'],
  },
  {
    slug: 'qa-automation',
    title: 'QA & Automation Analyst',
    file: '3_QA_Automation_Analyst_ERICK_PEREZ.pdf',
    path: '/cv/3_QA_Automation_Analyst_ERICK_PEREZ.pdf',
    urlPath: 'curriculum › qa-automation',
    summary:
      '5+ years of QA, test case design, data validation and pytest automation. The transition bridge into technology roles.',
    tags: ['QA', 'Test Design', 'pytest', 'Data Validation'],
  },
  {
    slug: 'campaign-specialist',
    title: 'Senior Campaign Specialist',
    file: '4_Campaign_Specialist_ERICK_PEREZ.pdf',
    path: '/cv/4_Campaign_Specialist_ERICK_PEREZ.pdf',
    urlPath: 'curriculum › campaign-specialist',
    summary:
      'Email marketing operations, Salesforce, CheetahMail, data mapping and QA with a zero-error record. For fast income generation.',
    tags: ['Email Marketing', 'Salesforce', 'Campaign Operations', 'QA'],
  },
  {
    slug: 'linux-sysadmin',
    title: 'Junior Linux SysAdmin / Cloud Support',
    file: '5_Linux_SysAdmin_Cloud_ERICK_PEREZ.pdf',
    path: '/cv/5_Linux_SysAdmin_Cloud_ERICK_PEREZ.pdf',
    urlPath: 'curriculum › linux-sysadmin',
    summary:
      'Linux (Debian), SSH, systemd, Docker and AWS fundamentals for junior sysadmin, NOC and cloud support roles.',
    tags: ['Linux', 'Debian', 'AWS', 'Docker', 'System Administration'],
  },
];

// ---------------------------------------------------------------------
// BÚSQUEDA
// ---------------------------------------------------------------------
function buildIndex() {
  const items = [];
  items.push({
    type: 'about',
    title: 'Who I am — Erick Pérez',
    url: '/sobre-erick',
    description: profile.bio,
    keywords: `${profile.bio} ${profile.subtitle} ${profile.name} QA DevOps Backend`,
  });
  experiences.forEach((e) => items.push({
    type: 'experience',
    title: `${e.role} — ${e.company}`,
    url: `/experiencia/${e.slug}`,
    description: e.summary,
    keywords: `${e.company} ${e.role} ${e.tags.join(' ')}`,
  }));
  education.forEach((e) => items.push({
    type: 'education',
    title: e.title,
    url: `/educacion/${e.slug}`,
    description: e.summary,
    keywords: `${e.provider} ${e.title} ${e.tags.join(' ')}`,
  }));
  projects.forEach((p) => items.push({
    type: 'project',
    title: p.name,
    url: `/mis-proyectos/${p.slug}`,
    description: p.summary,
    keywords: `${p.name} ${p.repo} ${p.tags.join(' ')}`,
  }));
  skills.forEach((s) => items.push({
    type: 'skill',
    title: s.title,
    url: `/conocimientos/${s.slug}`,
    description: s.summary,
    keywords: `${s.title} ${s.tags.join(' ')}`,
  }));
  curriculum.forEach((c) => items.push({
    type: 'curriculum',
    title: `${c.title} — CV`,
    url: '/curriculum',
    description: c.summary,
    keywords: `${c.title} CV curriculum resume ${c.tags.join(' ')}`,
  }));
  items.push({
    type: 'contact',
    title: 'Contact — Erick Pérez',
    url: '/contacto',
    description: `Phone ${profile.phone} · Email ${profile.email} · ${profile.location}`,
    keywords: `contact phone email ${profile.phone} ${profile.email} linkedin github gitlab`,
  });
  return items;
}

export function search(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return buildIndex().filter((item) => {
    const hay = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}

// ---------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------
export function findExperience(slug) {
  return experiences.find((e) => e.slug === slug);
}
export function findEducation(slug) {
  return education.find((e) => e.slug === slug);
}
export function findProject(slug) {
  return projects.find((p) => p.slug === slug);
}
export function findSkill(slug) {
  return skills.find((s) => s.slug === slug);
}

export const sectionLink = {
  experience: '/experiencia',
  education: '/educacion',
  project: '/mis-proyectos',
  skill: '/conocimientos',
  about: '/sobre-erick',
  curriculum: '/curriculum',
  contact: '/contacto',
};
