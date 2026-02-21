# Launch Path

Build US credit from zero. Free roadmap generator for immigrants and international students.

## Features

- **Free Credit Roadmap Generator** - Personalized 90-day plans based on visa status, income, and current accounts
- **Educational Content Hub** - Source-cited articles about credit building
- **Anti-Fintech Design** - Data-dense, spreadsheet aesthetic, no purple gradients or stock photos

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- shadcn/ui components
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Design Philosophy

"A knowledgeable friend's Google Doc, not a polished sales pitch"

- Typography: Inter + JetBrains Mono
- Colors: Muted grays + forest green (#2D5016)
- Style: Tables everywhere, NO rounded corners
- Every recommendation cites sources

## Pages

- `/` - Landing page with hero, how it works, example roadmap, pricing
- `/roadmap` - 5-question quiz to generate personalized roadmap
- `/results` - Generated 90-day credit roadmap with sources
- `/learn` - Educational content hub
- `/learn/[slug]` - Individual articles

## License

MIT
