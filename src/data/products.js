export const products = [
  {
    slug: 'tipjar',
    name: 'TipJar',
    tagline: 'One-tap UPI tips for my AI coding subscription',
    description:
      'A one-page site where supporters can send small tips to help fund my AI coding assistant subscription. Pick an amount, scan a UPI QR code or tap pay — done. A live progress bar tracks the month\'s $20 goal.',
    url: 'https://tipjar.rockeykotwal.in',
    github: 'https://github.com/rockeykotwal/tipjar',
    features: [
      {
        title: 'One-tap UPI payments',
        description:
          'Preset amounts ($1, $3, $5, $10) or custom — generates a QR code for GPay, PhonePe, Paytm or any UPI app, with rupee equivalent shown automatically.',
      },
      {
        title: 'Live progress bar',
        description:
          'Shows how close the monthly $20 goal is in real time so every supporter knows their tip counts.',
      },
      {
        title: 'Auto rupee conversion',
        description:
          'Dollar amounts convert to INR automatically — no mental math, no friction.',
      },
    ],
  },
  {
    slug: 'backend-friend',
    name: 'Backend Friend',
    tagline: 'ESLint for your database queries',
    description:
      'An AI-powered ORM query analyzer that catches N+1 problems, missing indexes, and overfetching in your Prisma, TypeORM, and Sequelize code — and hands you back the fixed ORM code and migration script, ready to paste.',
    url: 'https://backend-friend.rockeykotwal.in',
    github: 'https://github.com/rockeykotwal/backend-friend',
    features: [
      {
        title: 'N+1 detection & auto-fix',
        description:
          'Paste your ORM query and schema — get a severity badge, the exact SQL being generated, and a corrected ORM query with a migration script. No translation step.',
      },
      {
        title: 'Agentic codebase scan',
        description:
          'Point it at your source files. The agent finds every ORM query, analyses them all, and returns a ranked list of issues — critical first.',
      },
      {
        title: 'Voice input + execution plan visual',
        description:
          'Describe your query problem out loud via voice transcription, or generate a before/after execution plan diagram to see exactly what changes.',
      },
    ],
  },
  {
    slug: 'upcheck',
    name: 'UpCheck',
    tagline: 'Know about outages before your users do',
    description:
      'A real-time status dashboard that monitors developer tools like GitHub, Stripe, Cloudflare and Vercel, plus any custom links you add. Checks every few minutes, keeps full incident history, and generates AI summaries of ongoing outages.',
    url: 'https://upcheck.rockeykotwal.in',
    github: 'https://github.com/rockeykotwal/upcheck-web',
    features: [
      {
        title: 'Live monitoring for any link',
        description:
          'Track popular services out of the box or add your own URLs — color-coded status badges, search, and per-service incident timelines.',
      },
      {
        title: 'One-click AI incident summaries',
        description:
          'Reads recent status history and explains what\'s happening in plain English. Switch between Gemini, OpenAI, Claude or a local Ollama model.',
      },
      {
        title: 'Full incident history',
        description:
          'Every status change is logged so you can spot patterns and report to your team with confidence.',
      },
    ],
  },
  {
    slug: 'agentic-ai',
    name: 'Agentic AI',
    tagline: 'Web-based autonomous AI agents',
    description:
      'A web-based platform for building and running autonomous AI agents. Define goals, let agents browse, reason, and act — without babysitting every step.',
    url: null,
    comingSoon: true,
    features: [
      {
        title: 'Goal-driven web agents',
        description:
          'Describe an outcome in plain language — the agent plans and executes multi-step tasks across the web autonomously.',
      },
      {
        title: 'Live agent canvas',
        description:
          'Watch agents think and act in real time on a visual canvas. Inspect every decision, tool call, and result as it happens.',
      },
      {
        title: 'No-code + code',
        description:
          'Build workflows visually or drop into code at any node — designed for engineers who want both flexibility and speed.',
      },
    ],
  },
]
