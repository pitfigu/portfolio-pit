export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  NESTJS = "nestjs",
  PYTHON = "python",
  FLASK = "flask",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  AWS = "aws",
  LINUX = "linux",
  VERCEL = "vercel",
  VBA = "vba",
  SQL = "sql",
  SUPABASE = "supabase",
  REDIS = "redis",
  RUST = "rust",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "The language that runs the web — and my automation scripts 🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript but with guardrails — type-safe and production-ready 🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The backbone of every web page I build 🏗️",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Making things look good — from Tailwind to custom animations 🎨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "My go-to for building interactive UIs and SPAs ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React framework — SSR, API routes, the whole package 📦",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS that makes styling fast and consistent 🌪️",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Server-side JavaScript powering APIs and backend services 🔧",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.NESTJS]: {
    id: 9,
    name: "nestjs",
    label: "NestJS",
    shortDescription: "Enterprise-grade Node.js framework — structured and scalable 🏰",
    color: "#e0234e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 10,
    name: "python",
    label: "Python",
    shortDescription: "From automation scripts to ML pipelines — Python does it all 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 11,
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight Python web framework for APIs and tools 🧪",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 12,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Rock-solid relational database for serious data 🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 13,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible NoSQL for when schemas need to breathe 🍃",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "Version control — because every line of code deserves a history 📜",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 15,
    name: "github",
    label: "GitHub",
    shortDescription: "Where my code lives, gets reviewed, and ships 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerize everything — consistent deploys everywhere 🐳",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.AWS]: {
    id: 17,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure — Lambda, S3, EC2, and beyond ☁️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 18,
    name: "linux",
    label: "Linux",
    shortDescription: "Command line is home — servers, scripts, and deployments 🐧",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 19,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deploy and ship — fast, reliable, zero-config hosting 🚀",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.VBA]: {
    id: 20,
    name: "vba",
    label: "VBA / Excel",
    shortDescription: "Enterprise automation — macros, add-ins, and data tools 📊",
    color: "#217346",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  [SkillNames.SQL]: {
    id: 21,
    name: "sql",
    label: "SQL",
    shortDescription: "Querying, migrating, and managing data at scale 🗄️",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.SUPABASE]: {
    id: 22,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Open-source Firebase alternative — auth, DB, and realtime 🔥",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  [SkillNames.REDIS]: {
    id: 23,
    name: "redis",
    label: "Redis",
    shortDescription: "In-memory data store for caching and job queues ⚡",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.RUST]: {
    id: 24,
    name: "rust",
    label: "Rust",
    shortDescription: "Systems programming — fast, safe, and zero-cost abstractions 🦀",
    color: "#dea584",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2024",
    endDate: "Present",
    title: "Process Automation Engineer & Full Stack Developer",
    company: "Amazon",
    description: [
      "Building internal tools with global impact — from enterprise web apps to desktop automation and AI-powered solutions.",
      "Created a VAT validation tool used by global teams — 2M+ VAT IDs validated to date with 99.5% uptime.",
      "Built My S3 Drive in Rust — a standalone app mounting S3 buckets as native Windows drives, replacing third-party tools org-wide.",
      "Developed AVA Excel AI — an AI-powered Excel add-in with 1,888 uses in 30 days across global compliance teams.",
      "Extensive AWS systems management including S3, Lambda, IAM, and internal deployment platforms.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.VBA,
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.AWS,
      SkillNames.SQL,
      SkillNames.DOCKER,
      SkillNames.NODEJS,
    ],
  },
  {
    id: 2,
    startDate: "2022",
    endDate: "Present",
    title: "Freelance Full Stack Developer",
    company: "Self-employed",
    description: [
      "Designing and shipping full-stack web applications for clients across industries — from fintech to education and events.",
      "Built production ticket booking platforms, chess education tools, and autonomous trading engines.",
      "End-to-end ownership: architecture, development, deployment, and maintenance.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.NODEJS,
      SkillNames.NESTJS,
      SkillNames.PYTHON,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.TAILWIND,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
