import type { Project } from "@/types/content";

const vaktoraShots = [
  ["vaktora-1", "Vaktora practice screen listing interview categories such as HR & Behavioral, Communication and Problem Solving, each with completion and score indicators"],
  ["vaktora-3", "Vaktora live session screen recording a spoken answer to a hard behavioral question, with a waveform and timer"],
  ["vaktora-4", "Vaktora session report showing an overall grade, a score out of 100, written feedback, the recorded answer with transcript and per-category scores"],
  ["vaktora-2", "Vaktora level selection screen with Beginner, Intermediate and Advanced tiers and the number of questions available in each"],
  ["vaktora-5", "Vaktora home screen with a skill breakdown radar chart across communication, confidence, grammar, relevance and body language, plus recent sessions"],
] as const;

export const projects: Project[] = [
  {
    slug: "vaktora",
    title: "Vaktora",
    tagline: "AI-powered interview preparation platform",
    category: "ai-product",
    status: "live",
    statusLabel: "Live on Google Play",
    period: "2026",
    role: "Full Stack Developer",
    organization: {
      name: "Kaziva",
      href: "https://kaziva.in",
      note: "Vaktora is the first product of Kaziva, a software products company I am building.",
    },
    description:
      "Realistic, role-specific mock interviews on Android. Candidates answer out loud, and an AI evaluation pipeline returns a score, strengths and specific fixes after every session. I built the product end to end: the React Native app, the Node.js services, the real-time layer, the evaluation pipeline and the deployment.",
    highlights: [
      "Real-time interview backend on Socket.IO supporting 200+ concurrent sessions with sub-100ms event delivery",
      "Two-path AI evaluation: local open-weight models (Kimi for scoring, Whisper for speech) with automatic fallback to OpenAI",
      "BullMQ and Redis job pipeline that cut evaluation response time by 40%",
      "Four containerized services shipped through CI/CD, deploy time down from 45 to under 10 minutes",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "REST APIs",
      "Socket.IO",
      "MongoDB",
      "Redis",
      "BullMQ",
      "JWT & RBAC",
      "OpenAI API",
      "Kimi (local LLM)",
      "Whisper",
      "Docker",
      "CI/CD",
    ],
    featured: true,
    published: true,
    sourceNote: "Source code is private. Presented as a product case study.",
    links: [
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.vaktora.app&hl=en",
        kind: "store",
      },
      { label: "vaktora.app", href: "https://vaktora.app", kind: "website" },
    ],
    icon: {
      src: "/images/vaktora/vaktora-icon.png",
      alt: "Vaktora app icon",
      width: 512,
      height: 512,
    },
    images: vaktoraShots.map(([file, alt]) => ({
      src: `/images/vaktora/${file}.png`,
      alt,
      width: 912,
      height: 1725,
    })),
    caseStudy: {
      overview:
        "Vaktora turns interview preparation from guesswork into a guided routine. A candidate picks the role they are targeting, faces questions tailored to it (including questions drawn from their own resume), answers out loud, and receives an AI evaluation with a score, strengths and specific fixes. Every session becomes a report they can review, and their skill profile updates over time.",
      problem:
        "Interview practice usually means rehearsing generic question lists with no feedback on how you actually speak and no way to measure improvement. On the other side, interviewers and institutions running live sessions need infrastructure that stays responsive with hundreds of people connected at once and evaluations that do not stall the experience.",
      product: [
        "Role- and job-based mock interviews across categories such as HR & Behavioral, Communication, Resume & Experience and Problem Solving",
        "Resume-based questions generated from the candidate's own experience",
        "Spoken-answer practice with recording, transcript and playback",
        "AI feedback and scored reports: an overall grade, written feedback and per-category scores such as communication, confidence, grammar and relevance",
        "Beginner, Intermediate and Advanced difficulty levels for every category",
        "Live interview sessions with Admin, Interviewer and Candidate roles, real-time feedback streams and proctoring signals",
      ],
      role: [
        "Owned the product across the stack: React Native client, Node.js REST services, MongoDB data model, authentication, real-time layer, AI evaluation pipeline and deployment",
        "Designed the event-driven backend (Socket.IO, Redis, BullMQ) that runs live sessions and asynchronous evaluation",
        "Built and compared two evaluation paths (local models and OpenAI) and the routing between them",
        "Set up Docker packaging and CI/CD for four services, and shipped the Android app to Google Play",
      ],
      architecture: [
        {
          title: "Client",
          nodes: [
            { name: "React Native app", detail: "Android app on Google Play. Records answers, streams session events, renders reports." },
          ],
        },
        {
          title: "API & real-time",
          nodes: [
            { name: "Node.js REST services", detail: "Interview, question, report and user APIs. JWT authentication with Admin, Interviewer and Candidate roles." },
            { name: "Socket.IO gateway", detail: "Live sessions, feedback streams, proctoring signals and push events. 5,000+ events per session." },
          ],
        },
        {
          title: "Async & data",
          nodes: [
            { name: "BullMQ workers", detail: "Evaluation jobs run off the request path so the API and live sessions stay responsive." },
            { name: "Redis", detail: "Session-state cache and queue backend. Caching cut API response times by 35%." },
            { name: "MongoDB", detail: "Sessions, answers, reports and users. Compound indexes and tuned query plans cut retrieval time by 25%." },
          ],
        },
        {
          title: "AI layer",
          nodes: [
            { name: "Whisper", detail: "Speech-to-text for recorded answers." },
            { name: "Kimi (local)", detail: "First-pass answer evaluation on a locally hosted open-weight model." },
            { name: "OpenAI API", detail: "Fallback evaluation path when the local model fails or times out." },
          ],
        },
        {
          title: "Delivery",
          nodes: [
            { name: "Docker + CI/CD", detail: "Four containerized services. Deployments went from 45 minutes to under 10." },
          ],
        },
      ],
      aiWorkflow: [
        { title: "Candidate answers", detail: "The app records a spoken answer to a role-specific question and uploads it with the session context." },
        { title: "Interview engine", detail: "The backend validates the session, stores the answer and enqueues an evaluation job on BullMQ." },
        { title: "Transcription", detail: "Whisper converts the recording to text so the evaluator works from a transcript." },
        { title: "LLM evaluation", detail: "A local Kimi model evaluates the answer first. If it fails or times out, the job is routed to OpenAI." },
        { title: "Scoring", detail: "The evaluation is turned into an overall score, a grade and per-category scores for the report." },
        { title: "Personalized feedback", detail: "Strengths and specific fixes are written back to the report and pushed to the app over Socket.IO." },
      ],
      implementation: [
        "REST API surface for interviews, questions, sessions, reports and user management, secured with JWT and role-based access control",
        "Socket.IO event model for live sessions: session lifecycle, code execution results, proctoring signals and live feedback streams",
        "Evaluation pipeline built on BullMQ workers with Redis as the queue and cache backend",
        "Model routing layer: local Kimi and Whisper as the primary path, OpenAI API as the fallback, with the evaluation contract kept identical across both",
        "MongoDB schemas refactored with compound indexes for session and report queries",
        "Docker images for each service and a CI/CD pipeline that deploys all four with no manual steps",
      ],
      challenges: [
        {
          title: "Evaluation latency was blocking the API",
          problem:
            "Running LLM evaluation inside the request path tied up the API and made live sessions feel slow whenever a model call took longer than expected.",
          solution:
            "Moved evaluation into BullMQ workers backed by Redis. The API acknowledges immediately and results stream back when ready, cutting evaluation pipeline response time by 40%.",
        },
        {
          title: "Real-time scale for live sessions",
          problem:
            "Live sessions produce thousands of events (code execution results, proctoring signals, feedback) and hundreds of sessions can be active at once.",
          solution:
            "Designed an event-driven Socket.IO architecture handling 5,000+ events per session across 200+ concurrent sessions, with sub-100ms event delivery.",
        },
        {
          title: "Depending on one hosted model",
          problem:
            "A single hosted model meant every evaluation was a paid, network-dependent call, and any outage stopped scoring entirely.",
          solution:
            "Introduced a two-path evaluation: locally hosted Kimi for scoring and Whisper for transcription, with automatic fallback to OpenAI when the local path fails. Compared outputs from both paths to keep scoring consistent.",
        },
        {
          title: "Slow reads on session and report data",
          problem:
            "As sessions accumulated, report and session queries slowed down and repeated reads hit the database for data that rarely changed.",
          solution:
            "Cached session state and frequently accessed interview data in Redis (35% faster API responses) and rebuilt MongoDB indexes and query plans (25% faster document retrieval).",
        },
        {
          title: "Manual, error-prone deployments",
          problem: "Deploying four services by hand took around 45 minutes and was easy to get wrong.",
          solution:
            "Containerized every service with Docker and automated the release through CI/CD, bringing deployment time under 10 minutes.",
        },
      ],
      quality: [
        "Compared evaluations from the local Kimi path and the OpenAI path on the same answers to keep scores and feedback consistent regardless of which path served the request",
        "Kept the evaluation contract (score, grade, category scores, feedback) identical across both paths so the app never has to know which model produced a result",
        "Made evaluation asynchronous and retryable through BullMQ so a failed model call degrades to a fallback rather than a lost result",
      ],
      outcome:
        "Vaktora is live on Google Play and serves as the flagship product of Kaziva. The backend sustains 200+ concurrent live sessions with sub-100ms event delivery, the evaluation pipeline responds 40% faster than the original synchronous design, and releases across four services now take under 10 minutes.",
      metrics: [
        { value: "200+", label: "concurrent live sessions" },
        { value: "<100ms", label: "event delivery latency" },
        { value: "40%", label: "faster evaluation pipeline" },
        { value: "35%", label: "faster API responses" },
        { value: "5,000+", label: "real-time events per session" },
        { value: "<10 min", label: "deploys, down from 45 min" },
      ],
    },
  },
  {
    slug: "lsrw-assessment-platform",
    title: "LSRW Communication Assessment Platform",
    tagline: "AI-driven language proficiency assessment for institutions",
    category: "ai-platform",
    status: "delivered",
    statusLabel: "Delivered · adopted by 3+ institutions",
    role: "Full Stack Developer",
    description:
      "A modular platform that evaluates student proficiency across Listening, Speaking, Reading and Writing. AI grades spoken and written responses, subjective tasks fall back to hybrid human review, and educators get real-time reporting across 1,000+ assessments per session.",
    highlights: [
      "20+ interactive testing modules: dictation, comprehension, storytelling, response selection and speaking tasks",
      "Automated AI grading for speech and written responses, cutting manual evaluation time by 60%",
      "Hybrid review path so subjective tasks keep a human in the loop",
      "Test orchestration and analytics pipelines processing 1,000+ assessments per session",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "OpenAI API"],
    featured: false,
    published: true,
    sourceNote: "Delivered to a client. Source code and deployment are private, so no public link is available.",
    links: [],
    images: [],
    caseStudy: {
      overview:
        "Educational institutions needed a consistent way to assess communication skills at scale. The platform delivers LSRW tests as interactive modules, grades responses with AI where that is reliable, and routes subjective work to educators for review, all with live reporting.",
      problem:
        "Manual LSRW evaluation is slow and inconsistent across evaluators, and speaking or storytelling tasks are hard to grade objectively. Institutions running hundreds of students per session cannot wait days for results.",
      product: [
        "20+ testing modules covering dictation, comprehension, storytelling, response selection and speaking tasks",
        "AI grading for both spoken and written responses",
        "Hybrid review support so educators can override or grade subjective tasks",
        "Test orchestration for large sessions with real-time reporting for educators",
      ],
      role: [
        "Built the platform across Next.js frontend, Node.js backend and MongoDB",
        "Designed the modular test engine so new module types could be added without touching existing ones",
        "Integrated OpenAI-based grading for speech and written responses and the hybrid review workflow around it",
        "Built the orchestration and analytics pipelines behind real-time reporting",
      ],
      architecture: [
        { title: "Client", nodes: [{ name: "Next.js app", detail: "Student test-taking interface and educator reporting dashboards." }] },
        {
          title: "Backend",
          nodes: [
            { name: "Node.js services", detail: "Test orchestration, module delivery, grading jobs and analytics." },
            { name: "MongoDB", detail: "Modules, sessions, responses, grades and review state." },
          ],
        },
        {
          title: "AI layer",
          nodes: [
            { name: "OpenAI API", detail: "Grading of spoken and written responses." },
            { name: "Hybrid review", detail: "Subjective tasks routed to educators for confirmation or override." },
          ],
        },
      ],
      aiWorkflow: [
        { title: "Student responds", detail: "A spoken or written response is captured for a module task." },
        { title: "AI grading", detail: "The response is graded through the OpenAI API." },
        { title: "Review routing", detail: "Objective tasks are finalized automatically; subjective tasks enter the hybrid review queue." },
        { title: "Reporting", detail: "Grades feed analytics pipelines and real-time educator reports." },
      ],
      implementation: [
        "Modular test engine with a shared module contract for 20+ task types",
        "Grading pipeline wrapping the OpenAI API with a hybrid review state for subjective tasks",
        "Orchestration and analytics pipelines sized for 1,000+ assessments per session",
      ],
      challenges: [
        {
          title: "Trusting AI on subjective tasks",
          problem: "Storytelling and speaking tasks do not have a single correct answer, so fully automated grading risked unfair results.",
          solution: "Automated the objective tasks and built a hybrid review path for subjective ones, keeping educators in control while still removing 60% of manual evaluation time.",
        },
        {
          title: "Reporting during large sessions",
          problem: "Institutions ran 1,000+ assessments in a single session and needed results while the session was still running.",
          solution: "Built orchestration and analytics pipelines that process assessments as they complete and surface real-time reports to educators.",
        },
      ],
      quality: [
        "Hybrid review keeps a human decision on subjective tasks rather than trusting model output blindly",
        "Module contract lets each task type define how it is graded, so grading logic stays explicit and testable",
      ],
      outcome:
        "Adopted by 3+ educational institutions. Manual evaluation time dropped by 60% and sessions of 1,000+ assessments report in real time.",
      metrics: [
        { value: "3+", label: "institutions adopted" },
        { value: "20+", label: "testing modules" },
        { value: "60%", label: "less manual evaluation" },
        { value: "1,000+", label: "assessments per session" },
      ],
    },
  },
  {
    slug: "village-finance",
    title: "Village Finance",
    tagline: "Multi-tenant lending and collections platform for village finance lines",
    category: "web-platform",
    status: "in-development",
    statusLabel: "In testing · backend live on Google Cloud",
    period: "2026",
    role: "Full Stack Developer",
    description:
      "One codebase serving many lending businesses, each with its own admin login and fully isolated lines, collectors, customers and loans. An Expo mobile app for owners and field collectors, a Spring Boot API on Google Cloud Run with Neon PostgreSQL, and a React console for onboarding tenants.",
    highlights: [
      "Tenant isolation enforced from the signed JWT alone, so no request can name another client's data",
      "Loans, installments, weekly book closing, capital, partners, expenses and chit-fund schedules in one data model of 20+ tenant-scoped tables",
      "One-phone-per-collector device binding with an audit trail and admin-side reset",
      "Presigned Cloudflare R2 photo uploads and a signed-URL cache tuned for village mobile connections",
    ],
    technologies: [
      "React Native (Expo)",
      "TypeScript",
      "Expo Router",
      "React Query",
      "Zustand",
      "Java 17",
      "Spring Boot 3",
      "Spring Security (JWT)",
      "PostgreSQL (Neon)",
      "Hibernate / JPA",
      "Cloudflare R2",
      "Docker",
      "Google Cloud Run",
      "React + Vite",
      "Jest",
    ],
    featured: false,
    published: true,
    sourceNote: "Private product in internal testing ahead of its Play Store release. Source code is private.",
    links: [],
    images: [],
    caseStudy: {
      overview:
        "Village Finance runs the daily and weekly collections of small lending businesses. An owner sets up collection lines, slots and villages, issues loans to customers and closes the books every week. Field collectors work their assigned slots from a phone. A platform console onboards each client business as an isolated tenant. The backend is live on Google Cloud Run; the Android app is at version 1.2.10 in internal testing.",
      problem:
        "Village finance lines involve many customers, collectors and villages, with money moving every day. Owners need books that close cleanly every week and can be corrected when they do not. Collectors need a phone-first tool that stays fast on a weak mobile connection and cannot be shared between phones. And because one platform serves many businesses, a mistake in isolation would expose one client's customers to another.",
      product: [
        "Collection lines with recurring slots and cities, plus a 30-day trash with restore and scheduled purge",
        "Customers with photos, location and guarantor details; loans with installment schedules, payments, voids and carry-forward",
        "Weekly close and reopen with an older-history boundary, per-slot breakdowns and a printable A4 ledger PDF",
        "Capital investments and withdrawals, partner contributions, expenses, chit-fund schedules, quick-loan presets and leave logs",
        "Team management with one-phone-per-collector device binding, device reset and a member home with today's summary and dues",
        "Passwordless setup: accounts receive an emailed one-time code with rate limits, and passwords are only ever set through it",
        "Platform console to onboard, rename, suspend, restore and soft-delete tenants and manage their admin logins",
      ],
      role: [
        "Sole developer across the Expo mobile app, the Spring Boot API, the React console, the data model and the cloud deployment",
        "Designed the multi-tenant security model and the admin, member and platform role boundaries",
        "Built the collections, loan, weekly-close and capital domains and the ledger PDF export",
        "Set up Docker packaging, Cloud Run deployment with Secret Manager, Neon PostgreSQL and Cloudflare R2 storage",
      ],
      architecture: [
        {
          title: "Clients",
          nodes: [
            { name: "Expo mobile app", detail: "React Native with Expo Router, React Query and Zustand. Admin and collector route groups, FlashList and Reanimated collections grid." },
            { name: "Platform console", detail: "React and Vite, no extra dependencies. Passwordless sign-in for platform operators." },
          ],
        },
        {
          title: "API",
          nodes: [
            { name: "Spring Boot 3 REST API", detail: "Java 17. Stateless JWT with BCrypt, admin and member roles per endpoint, separate platform token type." },
            { name: "Domain services", detail: "Lines, slots, customers, loans, installments, weekly close, capital, partners, chitty, leaves, quick loans." },
          ],
        },
        {
          title: "Data & storage",
          nodes: [
            { name: "Neon PostgreSQL", detail: "Serverless Postgres via JPA and Hibernate. Connection pool sized for Neon auto-suspend." },
            { name: "Cloudflare R2", detail: "Private bucket for customer photos. Presigned upload and download URLs; bytes never pass through the API." },
          ],
        },
        {
          title: "Services",
          nodes: [
            { name: "Email (Resend)", detail: "One-time codes and password-changed notices through a pluggable mail sender." },
            { name: "Scheduled jobs", detail: "Trash purge after the 30-day retention window." },
          ],
        },
        {
          title: "Delivery",
          nodes: [
            { name: "Docker + Cloud Run", detail: "Two-stage image, non-root runtime, secrets from Google Secret Manager, revision-based rollback." },
            { name: "EAS builds", detail: "Internal APK previews and production AAB for the Play internal track." },
          ],
        },
      ],
      implementation: [
        "Every tenant-scoped query filters on the tenant id carried in the signed JWT; the request body and parameters can never name a tenant",
        "Device binding service with distinct wire codes for a refused device versus a released one, so the app shows the right recovery panel",
        "Device and OTP audit events written in their own transaction so a refused sign-in still leaves an audit row",
        "Installments for a screen loaded in a single query instead of one per loan; large ledger responses gzip-compressed",
        "Ledger PDF built as A4 landscape HTML with pure, unit-tested pagination and native rendering isolated in a hook",
        "Production safety check that refuses to boot outside development with the committed JWT secret or without a real mail sender",
        "Frontend layered one way, app to features to services to storage, with a single HTTP client translating server errors into typed app errors",
      ],
      challenges: [
        {
          title: "Keeping clients isolated on one database",
          problem: "Many businesses share one schema, so any endpoint that trusted a tenant id from the request could leak another client's customers.",
          solution: "Tenant identity comes only from the signed token and is applied in every tenant-scoped query. Creating a tenant requires a separate platform token type that no regular account can hold.",
        },
        {
          title: "Collectors sharing phones",
          problem: "A collector's login on a second phone breaks accountability for cash collected in the field.",
          solution: "Bound each account to one device with an admin-side reset and a break-glass switch, and recorded every bind, refusal and reset in an audit trail that survives the failed sign-in's rollback.",
        },
        {
          title: "Photos over a village mobile connection",
          problem: "A pull-to-refresh on a slot with hundreds of customers re-downloaded every photo through the API.",
          solution: "Moved photos to a private R2 bucket with presigned URLs and cached signed URLs so unchanged photos stay cached on the device.",
        },
        {
          title: "A serverless database behind a serverless API",
          problem: "Neon suspends idle databases and Cloud Run cold-starts, so naive connection settings produced timeouts on the first request.",
          solution: "Capped the connection pool, set a 30-second connection timeout, and trimmed the container image and SDK clients to cut cold-start time.",
        },
        {
          title: "Weekly books that can be corrected",
          problem: "Closing a week is irreversible on paper, but real collections get corrected after the fact.",
          solution: "Weekly close stores opening balance, given, collected, expenses and capital per slot, and the latest week can be reopened, with an older-history boundary protecting settled books.",
        },
      ],
      quality: [
        "460+ frontend tests that drive screens through real repositories over in-memory storage, so a tap is verified from hook to persisted state",
        "Type checking and the test suite run on every push through Git hooks",
        "Idempotent schema maintenance at startup for changes Hibernate cannot apply, mirrored as a reviewed SQL migration",
        "Reversible destructive actions throughout: trash and restore for lines, reopen for weeks, suspend and restore for tenants",
      ],
      outcome:
        "The API is live on Google Cloud Run with Neon PostgreSQL and Cloudflare R2, and the Android app is in internal testing at version 1.2.10 ahead of its Play Store release.",
      metrics: [
        { value: "3", label: "applications: mobile, API, console" },
        { value: "20+", label: "tenant-scoped tables" },
        { value: "460+", label: "automated frontend tests" },
      ],
    },
  },
];

export const publishedProjects = projects.filter((p) => p.published);
export const featuredProject = publishedProjects.find((p) => p.featured);
export const secondaryProjects = publishedProjects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return publishedProjects.find((p) => p.slug === slug);
}

export const caseStudyProjects = publishedProjects.filter((p) => p.caseStudy);
