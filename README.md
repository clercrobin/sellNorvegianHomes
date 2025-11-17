# 🏠 NordMaison - Marketing Website

A beautiful, high-conversion marketing website for Norwegian prefab houses targeting the French market.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

**Live at**: http://localhost:3000 (after running `npm run dev`)

---

## 📚 Complete Documentation

- **[📖 Marketing Strategy Guide](./MARKETING_GUIDE.md)** - Complete guide to finding and converting French clients
- **[🚀 AI Prompts Cheat Sheet](./AI_PROMPTS_CHEATSHEET.md)** - Ready-to-use prompts for content creation
- **[🎨 Image Generation Guide](./scripts/image-prompts.md)** - Detailed prompts for AI image generation
- **[🔧 Image Setup Script](./scripts/setup-images.sh)** - Verify and manage your images

---

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

## ✨ Features

### 🎨 Design & UX
- 📱 **Fully responsive** - Perfect on mobile, tablet, and desktop
- 💫 **Beautiful animations** - Fade-in, slide, scale effects with stagger
- 🎯 **Hover effects** - Cards lift, images zoom, smooth transitions
- 🌈 **Nordic gradients** - Subtle background orbs and color schemes
- 🖼️ **Optimized images** - Next.js Image with AVIF/WebP support

### 🚀 Performance
- ⚡ **Server-side rendering** - Optimal SEO and fast initial load
- 📦 **Automatic optimization** - Images compressed and lazy-loaded
- 🎯 **Edge-ready** - Deploy to Vercel/Netlify/AWS with zero config
- 📊 **90+ Lighthouse score** ready

### 🏠 Content
- 🏡 **6 house models** - Detailed pages with specs and pricing (80-150m²)
- 📝 **Contact form** - Full validation and API integration ready
- ❓ **12 FAQ items** - Categorized and filterable
- 🌍 **French language** - Professional, persuasive copy throughout
- 🎓 **Educational content** - Process timeline, about page, benefits

### 🛠️ Developer Experience
- 📸 **Image management** - Utilities and verification scripts
- 🤖 **AI-ready** - Complete prompt library for content generation
- 📈 **Analytics ready** - Easy Google Analytics integration
- 🔧 **Type-safe** - 100% TypeScript coverage
- 🎨 **Customizable** - Easy to add models, modify content

## 🎨 Adding Real Images

### Quick Start with AI Images

1. **Read the prompts**: Open [`scripts/image-prompts.md`](./scripts/image-prompts.md)
2. **Generate images**: Use DALL-E, Midjourney, or Stable Diffusion
3. **Save to folders**:
   ```
   public/hero-bg.jpg           (1920x1080)
   public/houses/fjord-90.jpg   (800x600)
   public/houses/lofoten-120.jpg
   public/houses/nordkapp-150.jpg
   public/houses/aurore-80.jpg
   public/houses/bergen-110.jpg
   public/houses/tromso-135.jpg
   ```
4. **Verify setup**:
   ```bash
   bash scripts/setup-images.sh
   ```

The site will automatically use real images when available, falling back to beautiful gradient placeholders.

---

## 🚀 Marketing & Content

### Get Clients
See **[MARKETING_GUIDE.md](./MARKETING_GUIDE.md)** for:
- 🎯 **3 Customer personas** with detailed demographics
- 📱 **20+ Facebook groups** to find French clients
- 🌐 **Forums and communities** strategy
- 📧 **Email sequences** for lead nurture
- 💰 **Google Ads campaigns** with budget recommendations
- 🤝 **Partnership opportunities** (architects, banks, etc.)
- 📊 **Metrics to track** and KPIs

### Create Content Fast
See **[AI_PROMPTS_CHEATSHEET.md](./AI_PROMPTS_CHEATSHEET.md)** for ready-to-use prompts:
- ✍️ Blog articles (5-minute setup)
- 📱 Social media posts (all platforms)
- 🎨 Image generation templates
- 📧 Email campaigns
- 🎬 Video scripts
- 💬 Ad copy (Facebook & Google)

---

## 🛠️ Customization

### Adding New House Models

Edit `lib/houses.ts`:

```typescript
export const houses: House[] = [
  {
    id: "7",
    slug: "new-model",
    name: "New Model",
    subtitle: "Short description",
    surface: 100,
    bedrooms: 3,
    bathrooms: 2,
    price: 200000,
    type: "étage",
    // ... see existing models for full structure
  },
];
```

### Email Integration

The contact form API is in `app/api/contact/route.ts`. Integrate your email service:

```typescript
// Example: Resend (recommended for Next.js)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function handleContactSubmission(data: ContactFormData) {
  await resend.emails.send({
    from: 'contact@nordmaison.fr',
    to: 'sales@nordmaison.fr',
    subject: `Nouvelle demande: ${data.firstName} ${data.lastName}`,
    html: `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.phone}</p>
      <p><strong>Région:</strong> ${data.region}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Modèle:</strong> ${data.projectType}</p>
      <p><strong>Message:</strong><br>${data.message}</p>
    `,
  });
}
```

### Analytics Integration

Add to `app/layout.tsx`:

```typescript
import Script from 'next/script';

// Add in <head> or before </body>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Click "Deploy"
   - Done! ✨

### Environment Variables

Add these to your hosting platform:

```bash
# Optional: Email service
RESEND_API_KEY=re_xxxxx

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Other Platforms

Works on any Next.js host:
- **Netlify** - Auto-detects Next.js
- **Cloudflare Pages** - Edge deployment
- **AWS Amplify** - Full AWS integration
- **Railway** - Simple deployment
- **Render** - Auto-deploy from Git

---

## 📊 What You Get

### Complete Website
✅ 7 pages (Home, Models, Detail, About, Process, FAQ, Contact)
✅ 6 house models with full details
✅ Contact form with validation
✅ Responsive design (mobile-first)
✅ Beautiful animations and effects
✅ Image optimization
✅ SEO-ready structure

### Marketing Materials
✅ Complete marketing strategy guide
✅ 100+ AI content prompts
✅ Customer persona research
✅ Social media strategy
✅ Email sequences
✅ Ad campaign structures

### Developer Tools
✅ TypeScript throughout
✅ Image management utilities
✅ Reusable components
✅ Clean architecture
✅ Easy customization

---

## 🎯 Quick Wins

**Week 1**: Deploy the site, set up analytics
**Week 2**: Generate real images with AI
**Week 3**: Start content marketing (see MARKETING_GUIDE.md)
**Week 4**: Launch Google Ads, join Facebook groups

**Target**: 50+ qualified leads in first month

---

## 🤝 Support & Resources

- **Guides**: See [`MARKETING_GUIDE.md`](./MARKETING_GUIDE.md) and [`AI_PROMPTS_CHEATSHEET.md`](./AI_PROMPTS_CHEATSHEET.md)
- **Images**: See [`scripts/image-prompts.md`](./scripts/image-prompts.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **TailwindCSS**: [tailwindcss.com](https://tailwindcss.com)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)

---

## 📄 License

Proprietary - All rights reserved

---

**Built with ❤️ for selling beautiful Norwegian homes in France** 🏠🇳🇴→🇫🇷
