export type ProjectStatus =
  | "LIVE"
  | "PROTOTYPE"
  | "DEMO"
  | "ARCHIVED"
  | "COMING SOON";

export type Project = {
  id: string;
  slug: string;
  number: string;
  name: string;
  year: string;
  category: string;
  status: ProjectStatus;
  description: string;
  achievement?: string;
  liveUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
  image?: string;
  flagship?: boolean;
  stack?: {
    frontend?: string[];
    backend?: string[];
    ai?: string[];
    deployment?: string[];
    blockchain?: string[];
    other?: string[];
    aiUsage?: string;
  };
  // Standardized case-study breakdown for each /work/[slug] page.
  caseStudy?: {
    problem?: string; // 01 — Problem: context & motivation
    productSolution?: string; // 02 — Product & Solution: what was built
    statusLearnings?: string; // 03 — Status & Learnings: key takeaways
  };
};

// NOTE: This is the single source of truth for every project shown on the
// site — the home page list, the Patches showcase, and each /work/[slug]
// case study all read from here. Fill in real copy, links, and screenshots
// as they become available; nothing below is fabricated, so several fields
// are intentionally left blank rather than guessed.
export const projects: Project[] = [
  {
    id: "patches",
    slug: "patches",
    number: "01",
    name: "Patches",
    year: "2026",
    category: "AI / BROWSER / STARTUP",
    status: "LIVE",
    description:
      "An AI layer that restructures the internet around user behavior.",
    flagship: true,
    liveUrl: "https://patches-landing.vercel.app",
    githubUrl: undefined,
    image: "/projects/patches/cover.png",
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Node.js", "Firebase (Firestore/Auth)"],
      ai: ["Gemini API"], // add actual AI stack when supplied
      deployment: ["Electron, Vercel"], // add hosting/CI when supplied
    },
    caseStudy: {
      // add problem, productSolution, architectureEngineering, statusLearnings when written up
    },
  },
  {
    id: "aspira",
    slug: "aspira",
    number: "02",
    name: "Aspira",
    year: "2024", // add year when known
    category: "STARTUP / EDUCATION / AI",
    status: "LIVE",
    description: "AI-Powered 4-Year Roadmaps for High School Students - 300+ users",
    liveUrl: "https://aspira-roadmaps.vercel.app/",
    instagramUrl: "https://instagram.com/aspiraroadmaps",
    image: "/projects/aspira/cover.png",
    stack: {
      frontend: ["HTML", "CSS", "JavaScript (GitHub Pages)"],
      backend: ["FastAPI (Oracle Cloud)"],
      ai: ["Mistral-7B via OpenRouter"],
      other: ["Firebase Authentication + Firestore", "jsPDF"],
      aiUsage:
        "Model: Mistral-7B (open-source Meta model) via OpenRouter\nInput: Student interests, goals, and career preferences\nOutput: AI-generated personalized roadmap with optional fallback rule-based logic\nPlanned update: When a user marks a milestone as 'unsuccessful,' the AI re-generates an adjusted path.",
    },
    caseStudy: {
      problem:
        "Students are overwhelmed by choices in school: which classes to take, what extracurriculars matter, and how to prepare for competitive college applications. Existing tools are generic, static, and non-personalized.",
      productSolution:
        "Aspira uses AI to generate a custom academic and extracurricular roadmap based on quiz inputs about student interests, goals, and strengths. Each roadmap includes:\n- Class recommendations\n- Club and competition suggestions\n- Milestones across 4 years\n- A downloadable PDF report",
      statusLearnings:
        "Aspira is a successful startup that has helped thousands of students make informed decisions about their education. It has been featured in the news and has a growing community of users.",
    },
  },
  {
    id: "umoja",
    slug: "umoja",
    number: "03",
    name: "Umoja",
    year: "2025",
    category: "HACKATHON / WEB3",
    status: "ARCHIVED",
    achievement: "HACKATHON WINNER",
    description: "A decentralized financial identity and credit scoring platform designed to expand access to capital for unbanked and underbanked communities.",
    liveUrl: "https://project-umoja.vercel.app/",
    image: "/projects/umoja/cover.png",
    stack: {
      frontend: ["Next.js 15", "React", "shadcn/ui"],
      backend: ["Wolfram API"],
      ai: ["Solana", "Metaplex Umi SDK"],
      other: ["Wolfram Technologies", "Self-Sovereign Identity (SSI)"],
      aiUsage:
        "Computational model: Empirical Financial Inclusion Score (EFIS)\nHuman Capital: Kalman Filter estimates underlying earning potential from noisy income data\nSocial Capital: Network analysis measures community trust\nReputation Capital: Repaid loans generate on-chain reputation tokens\nBehavioral Capital: Behavioral economics measures financial prudence",
    },
    caseStudy: {
      problem:
        "Traditional financial systems exclude billions of unbanked and underbanked people. Without a bank account or formal credit history, individuals with volatile incomes can be considered high-risk despite demonstrating financial responsibility, making it difficult to safely manage money, build credit, or access loans.",
      productSolution:
        "Umoja creates a self-sovereign digital identity and alternative credit scoring system for financially underserved users. Users can:\n- Create a permanent digital identity on Solana using a selfie\n- Receive an Empirical Financial Inclusion Score (EFIS)\n- Build an immutable on-chain financial reputation\n- Access pathways toward micro-loans and capital\n- Manage their identity and financial information through a browser-based dashboard",
      statusLearnings:
        "Built as a first in-person hackathon project, Umoja taught the team how to develop a full-stack decentralized application from the ground up. Key challenges included designing a smooth blockchain UX, translating the EFIS mathematical model into functional code through the Wolfram API, and implementing accessible selfie liveness detection. The project reinforced the value of approaching complex problems from first principles and using computational tools to rapidly turn research-heavy ideas into working products.",
    },
  },
  {
    id: "roux",
    slug: "roux",
    number: "04",
    name: "Roux",
    year: "2026",
    category: "HACKATHON / WEB APP",
    status: "ARCHIVED",
    achievement: "HACKATHON WINNER",
    description: "A social cooking app that turns everyday recipes into a game by combining guided cooking, social sharing, streaks, and Solana-based rewards.",
    image: "/projects/roux/cover.png",
    stack: {
      frontend: ["React", "TypeScript", "Vite"], 
      backend: ["Node.js", "Firebase"], 
      blockchain: ["Solana"], 
      ai: ["Gemini API", "OpenRouter"], 
      other: ["ElevenLabs", "Firebase Authentication"], 
      aiUsage: "AI services: Gemini API and OpenRouter\nVoice: ElevenLabs provides natural voice-guided recipe instructions\nPlanned update: AI-powered meal discovery based on user preferences and nutritional goals",
    },
    caseStudy: {
      problem:
        "Cooking can feel like a chore, especially for teens who often find it easier to order delivery. Existing recipe platforms focus primarily on instructions rather than making cooking a social, rewarding, and repeatable habit.",

      productSolution:
        "Roux turns cooking into a social game where users complete daily recipes, share meals with friends, and earn Solana-based rewards. The platform includes:\n- Daily recipes and cooking streaks\n- Voice-guided instructions for hands-free cooking\n- Social sharing of completed meals\n- Solana-based rewards for cooking and community participation\n- Creator royalties when other users cook their recipes\n- Firebase authentication and photo storage",

      statusLearnings:
        "Roux was built around the idea of using game mechanics to make cooking a more engaging daily habit. A key technical challenge was preventing users from falsely claiming rewards, addressed through a progression system that requires users to complete community recipes before earning the ability to publish recipes and receive royalties. The project combined social product design, blockchain rewards, voice interfaces, and real-time user-generated content into a single experience.",
    },
  },
  {
    id: "vicino",
    slug: "vicino",
    number: "05",
    name: "Vicino",
    year: "2026",
    category: "FBLA / SOFTWARE",
    achievement: "FBLA STATE WINNER",
    status: "ARCHIVED",
    description: "",
    liveUrl: "https://fbla-vicino.vercel.app/",
    image: "/projects/vicino/cover.png",
    stack: {},
    caseStudy: {},
  },
];

export const flagshipProject = projects.find((p) => p.flagship)!;
export const otherProjects = projects.filter((p) => !p.flagship);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
