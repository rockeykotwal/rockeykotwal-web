export const products = [
  {
    slug: 'tipjar',
    name: 'TipJar',
    tagline: 'One-tap UPI tips for my AI coding subscription',
    description:
      'A one-page site where supporters can send small tips to help fund my AI coding assistant subscription. Pick an amount, scan a UPI QR code or tap pay — done. A live progress bar tracks the month\'s $20 goal.',
    url: 'https://tipjar.rockeykotwal.in',
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
    slug: 'upcheck',
    name: 'UpCheck',
    tagline: 'Know about outages before your users do',
    description:
      'A real-time status dashboard that monitors developer tools like GitHub, Stripe, Cloudflare and Vercel, plus any custom links you add. Checks every few minutes, keeps full incident history, and generates AI summaries of ongoing outages.',
    url: 'https://upcheck.rockeykotwal.in',
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
]
