import type { ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    title: "Full Stack Developer",
    organization: "Aditya University",
    start: "Mar 2023",
    end: "Present",
    summary:
      "Own features end to end, from system design through CI/CD, on production platforms serving 10,000+ users.",
    bullets: [
      "Engineered full-stack applications on Node.js, React.js and MongoDB serving 10,000+ users with 99.9% uptime across production environments",
      "Reduced system response latency by 40% by moving to event-driven backends with Redis and BullMQ for asynchronous job processing",
      "Delivered real-time features on Socket.IO for live interview sessions, push notifications and multi-user workflows, supporting 500+ simultaneous connections",
      "Improved API response times by 35% with Redis caching layers, cutting database query load",
      "Secured multi-role platforms (Admin, Staff, Student) with JWT authentication and role-based access control",
      "Refactored MongoDB schemas and introduced compound indexing, cutting average query execution time by 25%",
      "Containerized applications with Docker and configured CI/CD pipelines for zero-downtime deployments across 3+ production services",
      "Shipped 15+ major releases on schedule with product and design teams, and mentored 5 junior developers through code reviews and pairing, reducing PR review cycles by 30%",
    ],
    technologies: ["Node.js", "React.js", "React Native", "MongoDB", "Redis", "BullMQ", "Socket.IO", "Docker", "CI/CD"],
  },
];
