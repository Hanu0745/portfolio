import { Braces, Brain, Database, Layers, MonitorSmartphone, Server, Workflow } from "lucide-react";
import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    icon: MonitorSmartphone,
    skills: ["React.js", "Next.js", "React Native", "Expo", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "Java 17", "Spring Boot 3", "REST API design", "WebSockets (Socket.IO)", "FastAPI", "JWT authentication", "Role-based access control"],
  },
  {
    title: "Data & Caching",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL (Neon)", "MySQL", "Redis", "BullMQ", "Schema design & indexing", "Query optimization"],
  },
  {
    title: "AI Engineering",
    icon: Brain,
    skills: ["OpenAI API", "Claude API", "Whisper", "Local LLMs (Kimi)", "Prompt engineering", "AI-based evaluation systems", "Model comparison & fallback routing"],
  },
  {
    title: "Architecture",
    icon: Workflow,
    skills: ["Distributed systems", "Event-driven architecture", "Asynchronous processing", "Caching strategies", "Performance optimization"],
  },
  {
    title: "DevOps & Delivery",
    icon: Layers,
    skills: ["Docker", "CI/CD pipelines", "Google Cloud Run", "Cloudflare R2", "Nginx", "Linux", "AWS", "Azure", "Git & GitHub", "Postman", "Google Play deployment"],
  },
  {
    title: "Languages",
    icon: Braces,
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C++"],
  },
];
