# 🐦 TableBird Setup Guide

## What's Been Created

Your TableBird project is now scaffolded with **production-grade foundation**:

### ✅ Design System (Complete)
- 8 custom color tokens (`tb-ink`, `tb-coral`, `tb-teal`, etc.)
- Google Fonts fully configured (Syne, DM Sans, DM Mono)
- 3 CSS animations ready (float, fade-up, pulse-ring)
- Tailwind CSS properly configured with custom theme

### ✅ Component Library (9 UI Components)
1. **`<Wordmark />`** - TableBird branding (never use plain text)
2. **`<BirdMark />`** - Floating bird SVG with animation support
3. **`<TbCard />`** - Card container (white bg, subtle border)
4. **`<TbButton />`** - 4 variants: primary (coral), secondary, teal, ghost
5. **`<TbKpi />`** - Metric display (label, big value, sub-text)
6. **`<TbBadge />`** - Status badges (positive/negative/neutral)
7. **`<StarRating />`** - 5-star interactive rating (read-only option)
8. **`<GhostBanner />`** - "Sample Data" indicator for mock state
9. **`<ToggleSwitch />`** - Custom toggle switch

All exported from `src/components/ui/index.ts`

### ✅ Database Schema (Supabase Ready)
- 7 tables with proper relationships
- Row Level Security (RLS) policies for data access control
- Indexes for performance
- TypeScript types matching database schema

**SQL files ready:**
- `sql/001_create_initial_schema.sql` - Create tables
- `sql/002_enable_rls_policies.sql` - Enable security

### ✅ Project Infrastructure
- Vite + React 18 + TypeScript (no Create React App bloat)
- React Router v6 scaffolding
- Supabase client configured
- All dependencies installed (208 packages)
- Production-ready build tooling

---

## 🚀 Quick Start (5 minutes)

### 1. Configure Supabase

```bash
# Create your .env.local from template
cp .env.example .env.local
```

Edit `.env.local`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
```

**Get these values from your Supabase project:**
- Dashboard → Settings → API
- Copy "Project URL" → `VITE_SUPABASE_URL`
- Copy "anon public" key → `VITE_SUPABASE_ANON_KEY`

### 2. Set Up Database

In Supabase dashboard → SQL Editor:

1. **Run first migration:**
   - Copy all code from `sql/001_create_initial_schema.sql`
   - Paste into new query
   - Click "Run"

2. **Run second migration:**
   - Copy all code from `sql/002_enable_rls_policies.sql`
   - Paste into new query
   - Click "Run"

### 3. Start Development

```bash
npm run dev
```

Open http://localhost:5173 — you'll see a placeholder page

---

## 📁 Project Structure

```
e:\TableBird\WebApp/
├── src/
│   ├── components/
│   │   └── ui/                  # 9 reusable components
│   │       ├── Wordmark.tsx
│   │       ├── BirdMark.tsx
│   │       ├── TbCard.tsx
│   │       ├── TbButton.tsx
│   │       ├── TbKpi.tsx
│   │       ├── TbBadge.tsx
│   │       ├── StarRating.tsx
│   │       ├── GhostBanner.tsx
│   │       ├── ToggleSwitch.tsx
│   │       └── index.ts
│   ├── lib/
│   │   └── supabase.ts          # Supabase client + helpers
│   ├── types/
│   │   └── database.ts          # DB TypeScript types
│   ├── App.tsx                  # Router entry point
│   ├── main.tsx                 # React entry
│   └── index.css                # Global styles + animations
├── sql/
│   ├── 001_...schema.sql        # Create tables
│   └── 002_...rls_policies.sql  # Security policies
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🎨 Using the Design System

Import components from `src/components/ui`:

```tsx
import { Wordmark, BirdMark, TbButton, TbCard, StarRating } from '@/components/ui';

export const MyComponent = () => (
  <div className="bg-tb-cream p-8">
    <Wordmark variant="dark" size="lg" />
    <BirdMark className="w-12" animate={true} />
    
    <TbCard className="p-6">
      <TbButton variant="primary">
        Click me
      </TbButton>
    </TbCard>
  </div>
);
```

### Color Usage

```tsx
// Only use tb-* tokens
<div className="bg-tb-cream text-tb-ink border border-tb-mist">
  <p className="text-tb-coral">Important</p>
</div>

// ❌ NEVER write:
// <div className="bg-#FAF7F5 text-#1C2B30">
```

### Typography

```tsx
// Syne (headings only)
<h1 className="font-syne text-4xl">Main Title</h1>

// DM Sans (body, labels, UI)
<p className="font-sans text-sm">Body text</p>

// DM Mono (numbers, timestamps, codes)
<span className="font-mono text-xs">3.5 ★</span>
```

---

## 🎯 Next 10 Steps

1. **Configure Supabase** (5 min) → Get your URL + key
2. **Set up database** (2 min) → Run SQL migrations
3. **Test dev server** (1 min) → `npm run dev`
4. **Build LandingPage.tsx** (~2 hrs) ✅
   - Navbar + Hero
   - How It Works section
   - Features grid
   - Pricing cards
   - Waitlist form
5. **Build SurveyPage.tsx** (~1 hr) ✅
   - RTL support
   - Language toggle
   - 5-star ratings (5 metrics: food, service, cleanliness, value, atmosphere)
   - Comments field
   - Submit to Supabase with response tracking
   - Success screen after submission
6. **Build Auth pages** (~1.5 hrs)
   - LoginPage + RegisterPage
7. **Build DashboardLayout** (~0.5 hrs)
   - Sidebar + main area
8. **Build DashboardPage.tsx** (~1.5 hrs)
   - KPI cards with mock data
   - 30-day chart
9. **Build AnalyticsPage** (~1 hr)
   - Date filters
   - Advanced charts
10. **Build Admin pages** (~1 hr)
    - Platform overview
    - Business table

---

## 🔑 Key Rules (Read Carefully!)

### 🚫 Never Do This:
```tsx
// ❌ Don't render "TableBird" as text
<span>TableBird</span>

// ❌ Don't use hardcoded colors
<div className="bg-#E07055">

// ❌ Don't import bird as <img>
<img src="/bird.svg" />

// ❌ Don't use other component libraries
import Button from '@material-ui/core/Button'
```

### ✅ Always Do This:
```tsx
// ✅ Use Wordmark component
<Wordmark variant="dark" size="lg" />

// ✅ Use tb-* tokens
<div className="bg-tb-coral hover:bg-tb-deep-teal">

// ✅ Use BirdMark component
<BirdMark className="w-12" animate={true} />

// ✅ Use TbButton
<TbButton variant="primary">Click</TbButton>
```

---

## 📚 File Locations Reference

| What | Where |
|------|-------|
| Add new component | `src/components/ui/ComponentName.tsx` |
| Add new page | `src/pages/PageName.tsx` |
| Database types | `src/types/database.ts` |
| Supabase client | `src/lib/supabase.ts` |
| Global styles | `src/index.css` |
| Tailwind colors | `tailwind.config.ts` |
| Routes | `src/App.tsx` |

---

## 🐛 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 5174
```

### Changes not showing?
- Hard refresh browser: `Ctrl+Shift+R`
- Clear node_modules: `rm -rf node_modules && npm install`

### Styles not applying?
- Check classname spelling (Tailwind is strict)
- Make sure you're using `tb-*` tokens (not custom colors)
- Rebuild: `npm run build`

### Supabase connection failing?
- Verify `.env.local` credentials are correct
- Check Supabase project is active
- Ensure RLS policies are enabled

---

## 📞 Ready to Code?

You now have:
- ✅ Complete design system implemented
- ✅ 9 production-ready UI components
- ✅ Supabase schema ready to migrate
- ✅ TypeScript types already defined
- ✅ Project structure organized

**Start with the landing page next.** The narrative flow is:
1. Public landing (convince them)
2. Public survey form (collect feedback)
3. Owner dashboard (show insights)
4. Admin panel (manage platform)

---

## Commands Reference

```bash
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Create production build
npm run preview      # Preview production build locally
npm run lint         # Check code quality
npm install          # Already done, but here if needed
```

---

Happy building! 🚀

Your TableBird foundation is rock-solid. The design system ensures consistency, the components ensure speed, and the database schema ensures scalability.

**Questions?** Check the README.md, look at component exports in `src/components/ui/index.ts`, or review the TypeScript types in `src/types/database.ts`.
