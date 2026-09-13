export const profile = {
  name: "Hanumanthu Buddha",
  firstName: "Hanumanthu",
  /** Positioning used in the hero, metadata and structured data. */
  title: "Senior AI Full Stack Developer",
  /** Job title as it appears on the resume. */
  resumeTitle: "Full Stack Software Engineer",
  location: "Kakinada, India",
  email: "bhanumanthu450@gmail.com",
  headline: "I build AI-powered products end to end.",
  subheadline:
    "Full-stack engineer with 3+ years shipping production systems: real-time interview platforms, LLM evaluation pipelines and multi-role SaaS, built on React, React Native, Node.js and MongoDB.",
  availability: "Open to senior full-stack and AI engineering roles",
  photo: {
    src: "/images/hanumanthu-buddha.jpg",
    alt: "Portrait of Hanumanthu Buddha",
    width: 747,
    height: 920,
  },
  resumeUrl: "/hanumanthu-buddha-resume.pdf",
  links: {
    github: "https://github.com/Hanu0745",
    linkedin: "https://www.linkedin.com/in/hanumanthu-buddha-b80a25214",
  },
  /**
   * The software products company behind Vaktora.
   * Remove this object to drop every mention of Kaziva from the site.
   */
  venture: {
    name: "Kaziva",
    href: "https://kaziva.in",
    description: "a software products company I am building; Vaktora is its first product",
  },
  about: [
    "I am a full-stack software engineer who builds AI-integrated, real-time products from the first schema to the deployment pipeline. Over the last three years I have shipped production applications on Node.js, React, React Native and MongoDB, serving 10,000+ users with 99.9% uptime.",
    "My work sits where backend architecture meets applied AI: event-driven services on Redis and BullMQ, live Socket.IO sessions, JWT and role-based access for multi-tenant platforms, and LLM evaluation pipelines that turn a candidate's spoken answer into a score and specific, actionable feedback.",
    "I am most useful on problems that need the whole stack to work together: a product idea that has to become an API, a data model, a mobile app and a reliable release process. Most recently that has been Vaktora, an AI interview-prep app now live on Google Play.",
  ],
  facts: [
    { label: "Experience", value: "3+ years in production" },
    { label: "Scale", value: "10,000+ users · 99.9% uptime" },
    { label: "Delivery", value: "6 production apps led" },
    { label: "Credential", value: "MongoDB Certified Developer" },
  ],
} as const;
