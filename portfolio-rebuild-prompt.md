# PORTFOLIO REBUILD — COMPLETE IMPLEMENTATION PROMPT

> Paste this entire document into Claude Code / Cursor / any AI coding agent as the starting instruction. It is self-contained: stack, design system, full content, component list, and deployment steps.

---

## 0. Project Goal

Rebuild the personal AI/ML engineering portfolio at `abdelrahman-mahmoud-ai.vercel.app` **from scratch** as a clean, modern, production-ready codebase — same content and information architecture, upgraded implementation, deployable to GitHub + Vercel or Netlify with zero manual config beyond env vars.

Build a single-page (anchor-scroll) portfolio site for an AI/ML & Computer Vision engineer, targeting recruiters and clients evaluating him for AI engineering roles / freelance CV & ML work.

---

## 1. Tech Stack (use exactly this unless told otherwise)

- **Framework:** Next.js 14+ (App Router), TypeScript, strict mode on
- **Styling:** Tailwind CSS (with `tailwind.config.ts` custom theme tokens — no inline magic hex values scattered in components)
- **Animation:** Framer Motion for scroll-reveal and hover micro-interactions
- **Icons:** `lucide-react`
- **Forms:** Contact form posts via a serverless API route (`/app/api/contact/route.ts`) using Resend or Nodemailer (env-var driven — stub with a clear TODO + `.env.example` if no email provider key is supplied)
- **Fonts:** next/font with a modern sans (e.g. Inter or Space Grotesk for headings)
- **Deployment target:** Vercel-first (zero-config), but must also build cleanly with `next export`/static adapter fallback for Netlify or GitHub Pages if requested
- **Package manager:** npm
- **Linting:** ESLint + Prettier configured out of the box
- No CMS — content lives in a typed `content/` data layer (see §5) so it's editable without touching JSX.

Deliverable must be **complete, immediately runnable files, no placeholders, no "TODO: implement this component"** — production-quality, typed, with clean component boundaries.

---

## 2. Design System

- **Theme:** Dark mode only (no light/dark toggle needed — matches the original's fixed dark aesthetic)
- **Base background:** `#0a0f1a` (near-black navy)
- **Accent:** a single vivid accent color for CTAs/highlights (electric blue or cyan — e.g. `#3b82f6` / `#22d3ee`) used sparingly: buttons, section number labels, hover states, gradient text on the hero headline
- **Typography:** Large, confident hero headline with a subtle gradient or accent-colored second clause (mirroring "Intelligence isn't coded, **it's learned.**")
- **Layout:** Generous vertical spacing between sections, max-width content container (~1200px), fully responsive (mobile-first), sticky/blurred nav bar on scroll
- **Motion:** Fade+slide-up on scroll into view for section headers and cards; subtle hover-lift on project/service cards; animated stat counters on the hero stats row
- **Cards:** Rounded corners (xl/2xl), soft border (1px, low-opacity white), subtle glassmorphism or elevated surface color slightly lighter than background
- Avoid generic "AI startup" clichés (no purple-pink gradient blobs everywhere, no stock robot imagery) — keep it precise, technical, engineering-credible. Reference the `frontend-design` conventions for distinctive, non-templated visual choices.

---

## 3. Site Architecture (single page, anchor nav)

Sticky nav with sections: **About · Education · Skills · Services · Projects · Experience · Contact**

1. **Navbar** — logo, anchor links, mobile hamburger menu, "View CV" button
2. **Hero** — name, animated role tagline, headline, short bio, 4 animated stat counters, 3 CTAs (View Projects / View CV / Contact Me), profile photo
3. **About** — narrative bio (long-form, first-person)
4. **Education** — degree card with GPA + coursework tags
5. **Skills** — 6 categorized skill groups as tag clouds/pills
6. **Services** — 4 service offering cards (for freelance positioning), each with a bullet list of "Includes"
7. **Projects** — project grid/cards with image, tags, key highlights, and external link (GitHub/Kaggle)
8. **Experience** — timeline/card for current role
9. **Certifications** — list + 2 image-backed certification cards
10. **Contact** — contact info block (email/LinkedIn/GitHub/location) + working contact form
11. **Footer** — name, links, closing line

---

## 4. Full Content (use verbatim — this is the real content, not sample copy)

### Meta
- Title: `Abdelrahman Mahmoud | AI & Machine Learning Engineer`
- Meta description: `AI-focused Computer Science and Engineering student specializing in Machine Learning, Computer Vision, and intelligent system development. Passionate about transforming data into scalable, real-world AI solutions.`
- Theme color: `#0a0f1a`

### Hero
- Eyebrow: `Abdelrahman Mahmoud`
- Headline: `Intelligence isn't coded, it's learned.`
- Subtext: same as meta description above
- Stats (animate count-up to these — original shows counters starting at "0+", pick real values that match his actual project count, e.g. 5 AI Projects / 4+ AI Trainings / 2+ Years in AI Learning / 3+ Implemented Researches — confirm exact numbers with the user before publishing)
- CTAs: `View Projects` (#projects), `View CV` (link to a CV PDF asset), `Contact Me` (#contact)

### About Me
> Since the early rise of Artificial Intelligence into our daily lives, from intelligent machines in factories and autonomous robots to transformative applications like ChatGPT, I have always been driven by one central question:
>
> How does this actually work? How can a machine understand different human languages? How can a robot perceive its environment and make decisions? How can mathematical equations evolve into intelligence capable of solving real-world problems?
>
> What began as curiosity gradually transformed into a deep passion for research and engineering.
>
> As I pursued my studies in Computer Science and Engineering, I realized that Artificial Intelligence is not simply about training models, it is about designing systems that can perceive, reason, learn, and adapt. I became deeply interested in the foundations behind Machine Learning, neural networks, optimization, and decision-making systems.
>
> This passion pushed me beyond academic requirements. I continuously experiment with building real AI systems, from medical image detection models to data-driven analytics platforms, focusing not only on model accuracy but also on system architecture, scalability, and practical deployment considerations.
>
> Today, my goal is clear: to design intelligent AI systems that move beyond experimentation into production-ready, impactful solutions.
>
> For me, Artificial Intelligence is not just a specialization. It is a continuous journey of curiosity, research, and innovation.

### Education
- **Bachelor of Electrical & Electronic Engineering** — Major: Computer Science & Engineering
- Menoufia University · GPA: 3.57
- Relevant Coursework: Artificial Intelligence, Data Structures & Algorithms, Computer Vision, Operating Systems, Software Engineering, Databases

### Skills (6 groups)
- **Programming:** Python (Advanced), C++, SQL
- **Machine Learning & AI:** Supervised & Unsupervised Learning, Deep Learning (CNN, RNN), YOLO Object Detection & Instance Segmentation, Model Evaluation/Optimization/Hyperparameter Tuning, Feature Engineering & Dimensionality Reduction, Transfer Learning & Fine-tuning Pretrained Models
- **Computer Vision:** Image Classification, Object Detection, Segmentation, OpenCV / PIL / scikit-image
- **Data & Analysis:** NumPy, Pandas, Matplotlib, Seaborn, Data Cleaning, EDA & Visualization, Statistical Modeling
- **Tools & Platforms:** Jupyter Notebook, Google Colab, VS Code, Git & GitHub
- **Soft Skills:** Analytical Thinking, Problem Solving, Team Collaboration, Fast Learning, Adaptability, Research & Technical Writing

### Services (4 cards)
1. **AI Model Development** — Build machine learning and deep learning models for prediction, classification, and intelligent decision-making. Includes: Classification models, Regression models, Deep learning pipelines, Model fine-tuning, Evaluation & validation
2. **Computer Vision Solutions** — Develop intelligent systems that can see, analyze, and interpret visual data for automation and insights. Includes: Image classification, Object detection, Image segmentation, Visual inspection, Real-time processing
3. **Data Analysis & Predictive Modeling** — Turn raw data into insights and predictive systems that support smarter, data-driven decisions. Includes: Data cleaning, Exploratory analysis (EDA), Predictive modeling, Classification & regression, Model validation
4. **Custom AI Research Implementation** — Implement and adapt research-based AI models from papers and repositories for technical experimentation. Includes: Paper implementation, Repository customization, Benchmark testing, Training setup, Proof-of-concept builds

### Projects (5 cards)
1. **Single Object Tracking Optimization for UAVs** — Improved pretrained tracking model (TrackingMamba-based) for UAV applications; performance optimization and adaptation for edge-device deployment. Tags: Deep Learning, Computer Vision, Model Optimization. Highlights: TrackingMamba-based architecture, UAV application optimization, inference efficiency improvements, edge-device deployment focus. Link: https://github.com/Abdulrahman-Mahmoud-12/TrackMamba
2. **Dynamic Pricing System – Servixa Project** — ML models for dynamic pricing in a home services marketplace; experimented with multiple ML/DL architectures. Tags: Python, Machine Learning, Deep Learning. Highlights: dynamic pricing models, ML architecture experimentation, pricing optimization, regression diagnostics. Link: https://www.kaggle.com/code/abdulrahmanmahm0ud/servixa-dynamic-pricingv2
3. **Retail Product Detection (SKU110K Dataset)** — CV models for retail shelf product detection; trained/compared YOLOv8s and YOLOv8n. Tags: YOLOv8, Computer Vision, Python. Highlights: retail shelf detection, YOLOv8s vs YOLOv8n comparison, performance optimization, accuracy trade-off analysis. Link: https://www.kaggle.com/code/abdulrahmanmahm0ud/retail-product-detection
4. **MRI Brain Tumor Detection System** — AI-powered CV system detecting brain tumors from MRI images using YOLOv8, deployed with an interactive Streamlit interface. Tags: Python, YOLOv8, OpenCV, Streamlit. Highlights: tumor region detection, tumor type identification, real-time bounding box visualization, interactive graphical interface. Link: https://github.com/Abdulrahman-Mahmoud-12/MRI-Brain-Tumor-Detection
5. **Car Showroom Management & Sales Analysis System** — Python-based data-driven showroom management/analytics system using structured JSON storage and Pandas-based analysis. Tags: Python, Pandas, JSON. Highlights: inventory tracking, customer data management, sales analysis logic, data processing pipeline. Link: https://github.com/Abdulrahman-Mahmoud-12/car-showroom-system

> Each project card needs a representative image (`/public/images/project-*.jpg|png`) — see asset list in §6.

### Experience
- **AI & Data Science Intern** — *Current*, Digital Egypt Pioneers — Microsoft ML Engineer Track, December 2025 – Present
  - Applied full ML workflows using Python
  - Built and evaluated ML and DL models for Computer Vision and NLP tasks
  - Performed preprocessing, visualization, and feature engineering
  - Gained hands-on exposure to Azure AI Services
  - Explored MLOps fundamentals and model lifecycle practices

### Certifications
- Generative AI Training — NVIDIA Deep Learning Institute
- Complete Data Science, ML, DL & NLP Bootcamp — Udemy (Krish Naik)
- Machine Learning Specialization — DeepLearning.AI (Andrew Ng)
- Python Programming — FreeCodeCamp
- NASA SpaceApps Bootcamp Participation — NASA SpaceApps Shebin El-Kom *(image-backed card)*
- Freelancing Training — Creativa Menofia *(image-backed card)*

### Contact
- Email: `abdulrahmanmahmoudrezk@gmail.com` (nav/contact card) — note: footer mailto uses `abdelrahman.mahmoud12.ai@gmail.com`; **confirm with user which is current/preferred before publishing**
- LinkedIn: `linkedin.com/in/abdulrahman-mahmoud-ai`
- GitHub: `github.com/Abdulrahman-Mahmoud-12`
- Location: Menoufia, Egypt
- Closing quote: "Let's build intelligent systems that create real impact."
- Contact form fields: Full Name, Email Address, Subject, Message, Send Message button

### Footer
- Name: Abdelrahman Mahmoud Mohammed
- Links: GitHub, LinkedIn, email (mailto)

---

## 5. Code Structure

```
/app
  layout.tsx          → fonts, metadata, theme
  page.tsx            → composes all sections
  api/contact/route.ts→ POST handler for contact form
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Education.tsx
  Skills.tsx
  Services.tsx
  Projects.tsx
  ProjectCard.tsx
  Experience.tsx
  Certifications.tsx
  Contact.tsx
  Footer.tsx
  ui/ (Button.tsx, SectionHeading.tsx, Tag.tsx, StatCounter.tsx)
/content
  site.ts             → typed exports: hero, about, education, skills, services, projects, experience, certifications, contact
/public/images         → all image assets (see §6)
/public/Abdelrahman-Mahmoud_CV.pdf
tailwind.config.ts
next.config.js
.env.example
README.md
```

- All section components pull from `/content/site.ts` — never hardcode copy in JSX.
- Type every content shape (`Project`, `Service`, `Certification`, etc.) in `content/types.ts`.
- Use semantic HTML (`<section id="projects">`, proper heading hierarchy) for SEO and accessibility.
- Add `next-sitemap` or a manual `sitemap.xml` + `robots.txt`.
- Add Open Graph + Twitter card meta tags using the profile image.
- Lighthouse targets: 90+ on Performance, Accessibility, Best Practices, SEO.

---

## 6. Required Image Assets

Ask the user to supply these (reuse from the current live site if available), sized appropriately and optimized (WebP where possible):

- `logo.png` — nav logo
- `profile.jpg` — hero portrait
- `service-ai-model.png`, `service-cv.png`, `service-data.png`, `service-research.png`
- `project-uav-tracking.jpg`, `project-dynamic-pricing.png`, `project-retail-detection.png`, `mri-project.png`, `car-showroom.png`
- `cert-nasa.png`, `cert-freelancing.png`
- `Abdelrahman-Mahmoud_CV.pdf`

If assets aren't provided, use clean neutral placeholders sized to the correct aspect ratio and flag them clearly as placeholders (this is the one allowed exception to "no placeholders," since these are binary assets, not code).

---

## 7. Deployment

### GitHub
1. `git init`, commit, create a new GitHub repo, `git remote add origin <url>`, push `main`.
2. Add a `.gitignore` (Next.js default: `node_modules`, `.next`, `.env*.local`).
3. Write a real `README.md`: project description, tech stack, local dev instructions (`npm install`, `npm run dev`), screenshot, live link.

### Vercel (recommended — zero config for Next.js)
1. Import the GitHub repo at vercel.com/new.
2. Framework preset auto-detects Next.js — no build settings needed.
3. Add any env vars from `.env.example` (e.g. `RESEND_API_KEY`) in Project Settings → Environment Variables.
4. Deploy; connect a custom domain if desired under Settings → Domains.

### Netlify (alternative)
1. Add `@netlify/plugin-nextjs` to `netlify.toml`:
   ```toml
   [[plugins]]
   package = "@netlify/plugin-nextjs"
   ```
2. Import repo at app.netlify.com, build command `next build`, publish directory handled by the plugin.
3. Add env vars in Site Settings → Environment Variables.

### GitHub Pages (only if a fully static export is required)
- Static export drops the API route (contact form), so the form would need a third-party form backend (e.g. Formspree) instead. Only go this route if Vercel/Netlify are both off the table.

---

## 8. Build Order (tell the agent to do this step by step, not all at once)

1. Scaffold Next.js + TS + Tailwind project, set up fonts/theme tokens.
2. Build `content/site.ts` with all typed content from §4.
3. Build layout + Navbar + Footer.
4. Build Hero with animated stats.
5. Build About, Education, Skills.
6. Build Services and Projects (with ProjectCard).
7. Build Experience and Certifications.
8. Build Contact section + working API route + form validation.
9. Add scroll animations, responsive polish, meta/SEO/sitemap.
10. Run Lighthouse, fix issues.
11. Write README, push to GitHub, deploy to Vercel.

---

## 9. Open Questions to Resolve Before/During Build
- Confirm the real numbers for the 4 hero stat counters.
- Confirm which email address is current (`abdulrahmanmahmoudrezk@gmail.com` vs `abdelrahman.mahmoud12.ai@gmail.com`).
- Confirm whether any newer projects (e.g. UAV/edge-AI work beyond TrackingMamba, ENDO-X, NeuroFusion AI, RetailIQ, Servixa) should be added to the Projects section for this rebuild, since those postdate the live site's current content.
