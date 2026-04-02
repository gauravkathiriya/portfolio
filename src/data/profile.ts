/** CV-derived profile content — update `social.linkedin` if your public URL differs. */

export const profile = {
  name: "Gaurav Kathiriya",
  role: "Full Stack Developer",
  tagline: "React.js · Next.js · NestJS · React Native",
  location: "Gujarat, India",
  email: "gauravkathiriya45@gmail.com",
  phone: "+91 9924875063",
  summary:
    "Results-driven Full Stack Developer with hands-on experience building scalable web and mobile applications using React.js, Next.js, NestJS, and React Native. Proven ability to design and consume RESTful and GraphQL APIs, manage relational and NoSQL databases (PostgreSQL, MySQL, MongoDB), and deliver high-performance, accessible user interfaces. Published two open-source npm packages. Strong collaborator with a consistent record of end-to-end feature ownership, code quality, and on-time delivery.",
  social: {
    github: "https://github.com/gauravkathiriya",
    linkedin: "https://www.linkedin.com/in/gauravkathiriya45",
    whatsapp: "https://wa.me/919924875063",
  },
  githubUsername: "gauravkathiriya",
} as const;

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript & JavaScript", level: 92 },
      { name: "React Native", level: 85 },
      { name: "HTML5 / CSS / Responsive UI", level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "NestJS & Node.js", level: 90 },
      { name: "REST & GraphQL APIs", level: 92 },
      { name: "Express.js", level: 82 },
      { name: "Django (basics)", level: 55 },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "TypeORM / Prisma", level: 88 },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git / GitHub / GitLab", level: 92 },
      { name: "Vercel & CI/CD", level: 85 },
    ],
  },
] as const;

/** Tech labels for optional 3D orbit */
export const skillOrbitLabels = [
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Prisma",
] as const;

export const experiences = [
  {
    id: "unibrains",
    title: "Full Stack Developer",
    company: "Team Unibrains",
    period: "Jun 2024 – Present",
    highlights: [
      "Build and maintain full-stack web applications using React.js (frontend) and NestJS (backend).",
      "Design and implement scalable REST and GraphQL APIs consumed across multiple client applications.",
      "Manage relational database schemas and migrations using TypeORM and Prisma ORM with PostgreSQL.",
      "Develop reusable UI components and integrate third-party APIs to accelerate feature delivery.",
      "Collaborate in agile sprints, conduct code reviews, and maintain CI/CD pipelines via GitLab.",
    ],
    stack: ["React.js", "NestJS", "GraphQL", "REST", "PostgreSQL", "TypeORM", "Prisma", "GitLab CI"],
  },
  {
    id: "prodigy",
    title: "Web Development Intern",
    company: "Prodigy Infotech",
    period: "Jan 2024",
    highlights: [
      "Developed React.js projects including a VPN marketing website, stopwatch/timer utility, and a live weather application.",
      "Gained practical experience with component-based architecture, hooks, and API integration.",
    ],
    stack: ["React.js", "JavaScript", "OpenWeather API", "Responsive design"],
  },
  {
    id: "betweb",
    title: "Django Development Intern",
    company: "Bet Web",
    period: "Dec 2023",
    highlights: [
      "Learned Python Django MVC framework and built basic back-end views and models.",
      "Understood ORM-based database interactions and RESTful request handling in Django.",
    ],
    stack: ["Python", "Django", "REST", "ORM"],
  },
] as const;

export const projects = [
  {
    slug: "moneyutility",
    title: "MoneyUtility",
    subtitle: "Smart financial tools platform",
    description:
      "Suite of 15+ free financial calculators and business tools (EMI, SIP, GST, Income Tax, Salary, FD, PPF, RD, HRA, Home Loan, Retirement). Invoice Builder with GST-ready PDF export; live currency & commodity feeds; admin panel with RBAC and analytics.",
    stack: ["React.js", "NestJS", "Prisma ORM", "REST API", "MongoDB"],
    liveUrl: "https://moneyutility.in",
    secondaryUrl: {
      label: "Admin panel",
      href: "https://moneyutility-admin-panel.vercel.app",
    },
    githubUrl: null as string | null,
    featured: true,
  },
  {
    slug: "stitch",
    title: "Stitch",
    subtitle: "Premium apparel e-commerce",
    description:
      "Full-stack clothing e-commerce with category browsing, product listing, newsletter, auth, order tracking, secure payments, responsive UI, and real-time inventory-ready product filtering.",
    stack: ["React.js", "NestJS", "TypeORM", "REST API", "MongoDB", "Next.js"],
    liveUrl: "https://stitch-cloth.vercel.app",
    secondaryUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    slug: "weather",
    title: "Weather App",
    subtitle: "Live forecasts",
    description:
      "Real-time weather with location-based search, 5-day forecast, and responsive layout powered by OpenWeather API.",
    stack: ["React.js", "OpenWeather API"],
    liveUrl: "https://track-weather-application.vercel.app",
    secondaryUrl: null,
    githubUrl: "https://github.com/gauravkathiriya/weather-app",
    featured: true,
  },
  {
    slug: "expense",
    title: "Expense Tracker",
    subtitle: "Personal finance dashboard",
    description:
      "Personal expense tracker with authentication, categorized transactions, and a user dashboard.",
    stack: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://expence-tracker-eta-nine.vercel.app/login",
    secondaryUrl: null,
    githubUrl: "https://github.com/gauravkathiriya/expence-tracker",
    featured: true,
  },
];

export const openSourcePackages = [
  {
    name: "string-master-utils",
    description:
      "Utility library for common string manipulation operations, published for the JavaScript community.",
    npmUrl: "https://www.npmjs.com/package/string-master-utils",
    packageName: "string-master-utils",
  },
  {
    name: "ai-prompt-wrapper",
    description:
      "Wrapper library to simplify prompt construction when integrating with AI / LLM APIs.",
    npmUrl: "https://www.npmjs.com/package/ai-prompt-wrapper",
    packageName: "ai-prompt-wrapper",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology – Information Technology",
    school: "Silver Oak University, Ahmedabad",
    period: "2021 – 2025",
    detail: "CGPA: 8.96 / 10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "J.B. & Karp Vidya Sankul",
    period: "2019 – 2021",
    detail: "74.73%",
  },
];

export const certifications = [
  "Crash Course on Python – Google",
  "Web Development – Johns Hopkins University",
  "Junoon Volunteer – 2022",
];

export const navAnchors = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
  { id: "contact", label: "Contact" },
] as const;
