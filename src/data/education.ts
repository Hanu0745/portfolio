import type { Achievement, Certification, EducationEntry } from "@/types/content";

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    institution: "Aditya Engineering College",
    period: "2019 – 2023",
  },
];

export const certifications: Certification[] = [
  {
    name: "MongoDB Certified Developer, Associate",
    issuer: "MongoDB, Inc.",
    year: "2025",
    href: "https://www.credly.com/badges/a42c180e-765b-4c13-a2a5-fb72c527e2a2/linked_in_profile",
  },
];

export const achievements: Achievement[] = [
  { text: "Mentored 700+ students in full-stack development (MERN stack, React Native); 85%+ completed capstone projects and secured developer roles." },
  { text: "Led development of 6 production-grade applications, all delivered on time with zero critical post-launch defects." },
  { text: "Achieved 40% application performance improvements across projects through backend optimization, caching and database design." },
];
