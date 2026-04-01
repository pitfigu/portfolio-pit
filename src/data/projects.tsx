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
  SiRust,
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
  rust: { title: "Rust", bg: "black", fg: "white", icon: <SiRust /> },
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
    category: "Enterprise Tool @ Amazon",
    title: "VAT ID Checker",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.aws],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise VAT Validation — 270K+ validations, 199 users in 24h
          </TypographyP>
          <TypographyP className="font-mono">
            Proactively identified a critical organizational pain point — teams manually validating
            European VAT numbers through tax authority websites. Built an internal web tool that
            transformed multi-step manual processes into a drag-and-drop interface: validate 1000+
            VAT numbers with three clicks.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>199 unique users adopted organically within 24 hours of launch</li>
            <li>270,433 validation requests processed (1,360 avg per user)</li>
            <li>21% cache hit rate — 56,153 instant results via smart 30-day caching</li>
            <li>99.5% uptime with zero technical issues</li>
            <li>Eliminated thousands of hours of manual work organization-wide</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Integrated VIES API and BZSt API with automated company data enrichment</li>
            <li>Smart caching layer eliminating redundant API calls</li>
            <li>Desktop app (Python/PyInstaller) + AWS Lambda web deployment</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "my-s3-drive",
    category: "Infrastructure Tool @ Amazon",
    title: "My S3 Drive",
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.rust],
      backend: [PROJECT_SKILLS.aws],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            S3 as a native Windows drive — built from scratch in Rust
          </TypographyP>
          <TypographyP className="font-mono">
            Teams across the organization used different third-party solutions (ExpanDrive, WinSCP)
            to access AWS S3 buckets — creating compliance risks, licensing costs, and inconsistent
            workflows. Self-taught Rust and built a complete standalone application enabling direct
            S3 access through Windows Explorer.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">What it does</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Mounts S3 buckets as native Windows drives (R:, S:, etc.)</li>
            <li>Users access cloud storage exactly like local hard drives with any Windows application</li>
            <li>Supports multiple AWS profiles, buckets, and S3-compatible services</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Eliminated licensing costs for third-party tools</li>
            <li>Resolved compliance issues and standardized S3 access org-wide</li>
            <li>Zero training required — works seamlessly with existing workflows</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "excel-ai",
    category: "AI Tool @ Amazon",
    title: "AVA Excel AI",
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
            AI-powered Excel analysis — 1,888 uses in 30 days globally
          </TypographyP>
          <TypographyP className="font-mono">
            Transformed a basic Word AI feature into a sophisticated Excel analysis tool. Users
            query spreadsheet data in plain English — &quot;What is the total Amount for each
            Country?&quot; — and receive instant, professionally formatted results. No formulas
            or pivot tables needed.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>1,888 uses in 30 days across global compliance teams</li>
            <li>Transformed hours of manual analysis into seconds</li>
            <li>Made advanced data analysis accessible to non-technical users</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technical</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Smart data sampling for large datasets with automatic format detection</li>
            <li>Embedded directly within Excel — no context switching</li>
            <li>Custom VBA event handlers with HTML/JS sidebar interface</li>
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Autonomous trading engine with ML and swarm intelligence
          </TypographyP>
          <TypographyP className="font-mono">
            A multi-horizon trading engine that combines machine learning with swarm intelligence
            for autonomous strategy execution. Integrates with Alpaca for market data and order
            execution, uses Redis for job queues, and PostgreSQL for persistent storage.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Technical</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>ML predictions via PyTorch, Stable Baselines3, and scikit-learn</li>
            <li>Real-time market data via WebSockets</li>
            <li>Streamlit dashboard for monitoring and visualization</li>
            <li>Fully containerized with Docker</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "oceanbeat-tickets",
    category: "Ticket Booking Platform",
    title: "OceanBeat Tickets",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.nestjs, PROJECT_SKILLS.ts, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-stack event ticket platform with payments and CRM
          </TypographyP>
          <TypographyP className="font-mono">
            End-to-end ticket booking system for OceanBeat boat parties. Handles event browsing,
            ticket purchasing with QR codes, Mollie payment processing, and HubSpot CRM integration.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Technical</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>NestJS backend with TypeORM and PostgreSQL</li>
            <li>Mollie payment gateway with webhook handling</li>
            <li>QR code ticket generation with PDF export</li>
            <li>JWT auth with role-based access control</li>
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Spanish IRPF double-taxation calculator for RSU income
          </TypographyP>
          <TypographyP className="font-mono">
            Flask web app calculating Art. 80 LIRPF double-taxation deductions on Amazon RSU income.
            Integrates ECB foreign exchange rates, parses tax PDFs, and generates Word document
            exports for tax filing.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Technical</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>ECB FX rate integration for currency conversion</li>
            <li>PDF parsing and Word document export</li>
            <li>CI/CD via GitHub Actions</li>
            <li>Deployed on Railway</li>
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Chess education platform with trainer-student matching
          </TypographyP>
          <TypographyP className="font-mono">
            Connects chess trainers with students through appointment scheduling, module-based
            learning paths, and progress tracking. Built with Next.js and Supabase with full
            GDPR/DSGVO compliance.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Technical</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Next.js with Supabase auth and real-time subscriptions</li>
            <li>Chess platform integration (Lichess, Chess.com)</li>
            <li>Module-based learning system with progress tracking</li>
            <li>GDPR-compliant data handling</li>
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
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Terminal-inspired AI chat for an art installation
          </TypographyP>
          <TypographyP className="font-mono">
            A poetic chat website where visitors interact with an AI persona via QR code.
            Terminal aesthetic with glitch and scanline effects, connected to OpenAI with
            a custom system prompt. Built with Next.js and Tailwind CSS.
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
