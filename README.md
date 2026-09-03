# Abdelrahman Mahmoud — AI & ML Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live-abdelrahman--mahmoud--ai.vercel.app-22d3ee?style=flat-square&logo=vercel)](https://abdelrahman-mahmoud-ai.vercel.app)

> A modern, production-ready personal portfolio for an AI/ML & Computer Vision engineer. Single-page anchor-scroll layout, dark aesthetic, animated interactions.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS (custom design tokens) |
| Animation | Framer Motion |
| Icons | lucide-react |
| Fonts | Inter + Space Grotesk (next/font) |
| Contact form | Resend API |
| Deployment | Vercel (zero-config) |

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/Abdulrahman-Mahmoud-12/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# → Edit .env.local and add your RESEND_API_KEY

# 4. Run dev server
npm run dev
# → Open http://localhost:3000
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) (free tier available) |
| `CONTACT_TO_EMAIL` | Email address that receives contact form submissions |

> **Without `RESEND_API_KEY`**: the contact form stubs the email send (logs to console) so development works without credentials.

---

## Replacing Image Placeholders

Drop your real images into `public/images/`:

| Filename | Used in |
|---|---|
| `profile.jpg` | Hero section portrait |
| `project-uav-tracking.jpg` | UAV Tracking project card |
| `project-dynamic-pricing.png` | Dynamic Pricing project card |
| `project-id-verification.png` | ID Verification project card |
| `project-retail-detection.png` | Retail Detection project card |
| `project-retailiq.png` | RetailIQ project card |
| `mri-project.png` | MRI Detection project card |
| `project-endox.png` | ENDO-X project card |
| `car-showroom.png` | Car Showroom project card |
| `cert-nasa.png` | NASA cert card |
| `cert-freelancing.png` | Freelancing cert card |

Also add `public/Abdelrahman-Mahmoud_CV.pdf` for the CV download button.

---

## Deployment (Vercel — recommended)

1. Push repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) — Next.js auto-detected, no build settings needed
3. Add env vars in Project Settings → Environment Variables
4. Deploy 🚀

---

## License

MIT © Abdelrahman Mahmoud
