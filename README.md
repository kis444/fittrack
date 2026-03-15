# FitTrack — Personal Fitness & Nutrition OS

A full-stack SaaS-quality fitness, nutrition, and productivity tracker built with Next.js 14 (App Router), TypeScript, TailwindCSS, MongoDB, and NextAuth.

---

## Tech Stack

| Layer        | Technology                          |
|-------------|--------------------------------------|
| Frontend     | Next.js 14 (App Router), React, TypeScript |
| Styling      | TailwindCSS                          |
| Auth         | NextAuth.js (credentials provider)   |
| Database     | MongoDB Atlas + Mongoose             |
| Charts       | Recharts                             |
| Deployment   | Vercel                               |

---

## Features

- **Dashboard** — today's summary (weight, calories eaten/burned, net, protein), meal breakdown, activity checklist, monthly weight chart, goal progress bar
- **Planner** — drag-free weekly planner (Mon–Sun), add/complete/delete activities per day
- **Activities** — personal activity library with calories/10 min, seeded defaults
- **Nutrition** — searchable personal food database (per 100g macros)
- **Recipes** — recipe builder with ingredients, instructions, and macro totals
- **Progress** — weight log, long-term weight chart, calorie trend chart
- **Analytics** — weekly/monthly averages, task completion rate, weight change
- **Settings** — profile, password change, weight goal, calorie & protein targets

---

## 1. Install Dependencies

```bash
git clone <your-repo>
cd fittrack
npm install
```

---

## 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/fittrack?retryWrites=true&w=majority
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
```

### MongoDB Atlas Setup

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free M0 cluster
3. Create a database user (Database Access)
4. Whitelist your IP (Network Access → Add IP Address → Allow from anywhere: `0.0.0.0/0`)
5. Get your connection string (Connect → Drivers → copy the URI)
6. Replace `<username>`, `<password>`, and append `/fittrack` before `?`

---

## 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Register a new account, then explore all sections.

---

## 4. Deploy to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B: GitHub Integration

1. Push your project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. In **Environment Variables**, add:
   - `MONGODB_URI`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` → set to your Vercel deployment URL (e.g. `https://fittrack.vercel.app`)
4. Click **Deploy**

---

## Project Structure

```
fittrack/
├── app/
│   ├── layout.tsx              # Root layout (fonts, providers)
│   ├── globals.css             # Global styles + Tailwind
│   ├── page.tsx                # Root redirect
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── forgot-password/page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx          # Auth guard
│   │   └── page.tsx            # Dashboard page
│   ├── planner/page.tsx
│   ├── activities/page.tsx
│   ├── nutrition/page.tsx
│   ├── recipes/page.tsx
│   ├── progress/page.tsx
│   ├── analytics/page.tsx
│   ├── settings/page.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── register/route.ts
│       ├── activities/route.ts + [id]/route.ts
│       ├── tasks/route.ts + [id]/route.ts
│       ├── foods/route.ts + [id]/route.ts
│       ├── recipes/route.ts + [id]/route.ts
│       ├── weight/route.ts + [id]/route.ts
│       ├── nutrition/route.ts + [id]/route.ts
│       ├── dashboard/route.ts
│       ├── analytics/route.ts
│       └── settings/route.ts
├── components/
│   ├── Providers.tsx
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── PageHeader.tsx
│   ├── ui/
│   │   ├── StatCard.tsx
│   │   ├── Modal.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── Badge.tsx
│   │   ├── EmptyState.tsx
│   │   └── LoadingSpinner.tsx
│   └── charts/
│       ├── WeightChart.tsx
│       └── CaloriesChart.tsx
├── lib/
│   ├── mongodb.ts              # DB connection singleton
│   ├── auth.ts                 # NextAuth config
│   └── utils.ts                # Helpers (cn, dates, math)
├── models/
│   ├── User.ts
│   ├── Activity.ts
│   ├── Task.ts
│   ├── Food.ts
│   ├── Recipe.ts
│   ├── WeightEntry.ts
│   └── NutritionLog.ts
├── types/index.ts              # Shared TypeScript interfaces
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Notes

- All data is **user-scoped** — each user only sees their own records.
- Passwords are **hashed with bcryptjs** (12 rounds).
- MongoDB connection uses a **singleton pattern** safe for serverless/Vercel edge.
- The app uses **Next.js App Router** exclusively — no Pages Router for pages.
- Charts use **Recharts** with custom tooltips and gradient fills.
- The design system uses **Outfit** (body) + **Playfair Display** (headings) from Google Fonts.

---

## Color Palette

| Token       | Hex       |
|------------|-----------|
| Primary     | `#4E5282` |
| Secondary   | `#363969` |
| Neutral     | `#8C92AC` |
| Blush bg    | `#FFDBE3` |
| Accent      | `#FFBFCB` |
| Accent dark | `#FCA6BC` |
