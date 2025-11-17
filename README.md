# NordMaison - Marketing Website

A high-conversion marketing website for Norwegian prefab houses targeting the French market.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: lucide-react

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm, npm, or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
nordmaison-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── maisons/           # Houses listing & detail pages
│   ├── a-propos/          # About page
│   ├── processus/         # Process page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   └── api/contact/       # Contact form API route
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── lib/                   # Utility functions & data
│   ├── houses.ts         # House models data
│   ├── faq.ts            # FAQ data
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Features

- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal SEO
- 🎨 Clean Scandinavian aesthetic
- 📝 Contact form with validation
- 🏠 6 house models with detailed pages
- ❓ Comprehensive FAQ section
- 🔍 Filterable houses catalog

## Customization

### Adding New House Models

Edit `lib/houses.ts` to add new house models:

```typescript
export const houses: House[] = [
  {
    id: "7",
    slug: "new-model",
    name: "New Model",
    // ... other properties
  },
];
```

### Email Integration

The contact form API route is in `app/api/contact/route.ts`. Integrate with your email service:

```typescript
// Example: SendGrid integration
import sgMail from '@sendgrid/mail';

async function handleContactSubmission(data: ContactFormData) {
  await sgMail.send({
    to: 'contact@nordmaison.fr',
    from: 'noreply@nordmaison.fr',
    subject: 'Nouvelle demande de devis',
    text: `Nom: ${data.firstName} ${data.lastName}...`,
  });
}
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nordmaison-site)

Or deploy to any platform supporting Next.js:
- Vercel
- Netlify
- AWS Amplify
- Railway
- Render

## License

Proprietary - All rights reserved
