import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiStreamlit,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  flask: { title: "Flask", bg: "black", fg: "white", icon: <SiFlask /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  nestjs: { title: "NestJS", bg: "black", fg: "white", icon: <SiNestjs /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  redis: { title: "Redis", bg: "black", fg: "white", icon: <SiRedis /> },
  streamlit: { title: "Streamlit", bg: "black", fg: "white", icon: <SiStreamlit /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  vba: { title: "VBA / Excel", bg: "black", fg: "white", icon: <span className="font-bold text-sm">VBA</span> },
  aws: { title: "AWS", bg: "black", fg: "white", icon: <span className="font-bold text-sm">AWS</span> },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "vat-checker",
    category: "Enterprise Tool",
    title: "VAT Checker",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.vba],
      backend: [PROJECT_SKILLS.aws],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise VAT Validation System — Built at Amazon
          </TypographyP>
          <TypographyP className="font-mono">
            A production-grade desktop application for batch-validating VAT numbers across
            multiple European tax authorities. Processes hundreds of VAT numbers efficiently
            with multi-API support, caching, and enterprise security features.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Multi-API Support</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li><strong>German BZSt</strong> — Official German tax authority API</li>
            <li><strong>EU VIES</strong> — European VAT Information Exchange System</li>
            <li><strong>Poland MF</strong> — Polish Ministry of Finance</li>
            <li><strong>UK HMRC</strong> — UK tax authority (post-Brexit)</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Bulk validation processing hundreds of VAT numbers per batch</li>
            <li>Excel import/export with multi-sheet support</li>
            <li>Qualified and simple validation modes</li>
            <li>Intelligent caching system for 10x faster repeated validations</li>
            <li>XSS prevention, file validation, and malicious file detection</li>
            <li>Also deployed as AWS Lambda + web interface via Harmony platform</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "excel-ai",
    category: "AI Tool",
    title: "Excel AI Add-in",
    src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.vba, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.aws],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Excel Add-in — Built at Amazon
          </TypographyP>
          <TypographyP className="font-mono">
            An intelligent Excel add-in that integrates OpenAI directly into spreadsheets.
            Features a sidebar chat interface, smart data analysis, and automated formatting —
            turning Excel into an AI-powered data workstation.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Embedded AI chat sidebar within Excel</li>
            <li>Intelligent data analysis and pattern recognition</li>
            <li>Automated formatting with AI-suggested layouts</li>
            <li>Custom VBA event handlers for seamless integration</li>
            <li>Progress tracking UI for long-running operations</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "pythonhub",
    category: "Internal Platform",
    title: "PythonHub (ITX Apps Hub)",
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Internal App Distribution Platform — Built at Amazon
          </TypographyP>
          <TypographyP className="font-mono">
            A network drive-based application distribution system for internal Python tools.
            Serves 80+ team members with a modern launcher UI, automatic updates, and
            zero-configuration deployment. Dark/light theme, card-based interface.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Auto-discovery of apps from network drive with metadata.json</li>
            <li>One-click install and automatic update detection via timestamps</li>
            <li>Modern tkinter UI with dark/light theme toggle</li>
            <li>PyInstaller-compiled standalone executable</li>
            <li>Zero cloud dependencies — runs entirely on local + network storage</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "tradefish",
    category: "Trading Engine",
    title: "TradeFish",
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.redis, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "",
    github: "https://github.com/pitfigu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Autonomous multi-horizon trading engine powered by swarm intelligence
          </TypographyP>
          <TypographyP className="font-mono">
            TradeFish is an autonomous trading engine that uses AI and swarm intelligence
            to execute multi-horizon trading strategies. Built with Python, it integrates
            with Alpaca for market data and order execution, uses Redis for job queues,
            and PostgreSQL for persistent storage.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>ML-powered predictions using PyTorch, Stable Baselines3, and scikit-learn</li>
            <li>Real-time market data via WebSockets and Alpaca API</li>
            <li>Streamlit dashboard for monitoring and visualization</li>
            <li>Fully containerized with Docker for reproducible deployments</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "oceanbeat-tickets",
    category: "Ticket Booking Platform",
    title: "OceanBeat Ticket System",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.nestjs, PROJECT_SKILLS.ts, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "",
    github: "https://github.com/pitfigu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A full-featured event ticket booking platform built for OceanBeat boat parties.
            Handles the complete lifecycle from browsing events to purchasing tickets with
            QR codes, payment processing via Mollie, and CRM integration with HubSpot.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Secure payment processing via Mollie payment gateway</li>
            <li>QR code ticket generation with PDF download</li>
            <li>HubSpot CRM integration for customer management</li>
            <li>JWT authentication with role-based access control</li>
            <li>NestJS backend with TypeORM, PostgreSQL, Swagger docs</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "rsu-tax-tool",
    category: "Finance Tool",
    title: "RSU Tax Tool",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.flask, PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    live: "",
    github: "https://github.com/pitfigu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A Flask web application for calculating Spanish IRPF double-taxation deductions
            on Amazon RSU income. Handles ECB foreign exchange rates, PDF parsing of tax
            documents, and generates Word exports for tax filing. Deployed on Railway.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Art. 80 LIRPF double-taxation deduction calculator</li>
            <li>ECB FX rate integration for currency conversion</li>
            <li>PDF parsing and Word document export</li>
            <li>CI/CD via GitHub Actions with automated testing</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "pandachesslab",
    category: "Education Platform",
    title: "PandaChessLab",
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres],
    },
    live: "",
    github: "https://github.com/pitfigu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A chess education platform connecting trainers with students. Features appointment
            scheduling, module-based learning paths, progress tracking, and integrated chess
            platform connections. Built with Next.js and Supabase with full GDPR compliance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Trainer-student matching with appointment proposals</li>
            <li>Module-based learning system with progress tracking</li>
            <li>Chess platform integration (Lichess, Chess.com)</li>
            <li>GDPR/DSGVO compliant data handling</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "speakingshirt",
    category: "Art Installation",
    title: "SpeakingShirt",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "",
    github: "https://github.com/pitfigu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A poetic, terminal-inspired chat website for an art installation. Visitors interact
            with an AI persona via QR code. Terminal aesthetic with glitch effects, connected
            to OpenAI with a custom system prompt. Built with Next.js 16 and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Mobile-first, accessible, minimal UI</li>
            <li>Terminal/monospaced aesthetic with glitch and scanline effects</li>
            <li>Custom chat interface connected to OpenAI API</li>
            <li>Built with Next.js 16 and Tailwind CSS</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
