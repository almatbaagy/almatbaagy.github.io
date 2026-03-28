# TableBird - F&B SaaS Platform

A complete B2B SaaS product for Egyptian restaurants' real-time customer feedback and analytics.

## Project Setup

### Prerequisites
- Node.js 18+ (Vite requirement)
- npm or yarn
- Supabase account

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Fill in your Supabase credentials:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **Set up Supabase database:**
   - Create a new Supabase project
   - Go to SQL Editor
   - Run both SQL files in order:
     - `sql/001_create_initial_schema.sql`
     - `sql/002_enable_rls_policies.sql`

4. **Start development server:**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/              # Shared UI component library (design system)
│   ├── auth/            # Auth-related components
│   ├── charts/          # Chart components (recharts wrappers)
│   └── landing/         # Landing page sections
├── pages/
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── SurveyPage.tsx
│   ├── ThanksPage.tsx
│   ├── LowRatingPage.tsx
│   ├── dashboard/       # Owner dashboard pages
│   └── admin/           # Admin panel pages
├── layouts/
│   └── DashboardLayout.tsx
├── lib/
│   └── supabase.ts      # Supabase client config
├── types/
│   └── database.ts      # TypeScript types for DB
├── hooks/               # Custom React hooks (auth, data fetching)
├── App.tsx              # Main app router
├── main.tsx
└── index.css            # Global styles + design system animations
```

## Design System

### Colors (Tailwind Tokens)
- `tb-ink`:       `#1C2B30` (Dark backgrounds, text)
- `tb-deep-teal`: `#2C5F6E` (Primary actions, positive)
- `tb-teal`:      `#3D7A8A` (Links, secondary)
- `tb-rose`:      `#D95E6A` (Errors, negative)
- `tb-coral`:     `#E07055` (CTA, "Bird" wordmark)
- `tb-peach`:     `#E89880` (Warm accents)
- `tb-mist`:      `#B8C9D0` (Borders, empty states)
- `tb-cream`:     `#FAF7F5` (Page backgrounds)

### Typography
- **Syne**: Wordmark, section headings
- **DM Sans**: Body text, UI labels
- **DM Mono**: Numbers, timestamps, badges

### Shared Components

Located in `src/components/ui/`:
- `<Wordmark />` - TableBird branding (always use instead of text)
- `<BirdMark />` - Animated bird SVG
- `<TbCard />` - Card container
- `<TbButton />` - Primary button (variants: primary, secondary, teal, ghost)
- `<TbKpi />` - Key metric display
- `<TbBadge />` - Status badge (types: positive, negative, neutral)
- `<StarRating />` - 5-star interactive rating
- `<GhostBanner />` - Sample data indicator (for zero-response state)
- `<ToggleSwitch />` - Toggle input

## Routes

```
Public:
  /                      Landing page
  /login                 Login form
  /register              Registration form
  /s/:slug               Public survey form
  /s/:slug/thanks        Thank you page
  /s/:slug/low           Low rating handler

Owner Dashboard (requires auth + role=owner):
  /dashboard             Main metrics dashboard
  /dashboard/analytics   Analytics deep-dive
  /dashboard/settings    Survey configuration
  /dashboard/qr          QR code management

Admin Panel (requires auth + role=admin):
  /admin                 Platform overview
  /admin/businesses      Business management table
```

## Development Notes

### Design Rules (Non-negotiable)
1. **Design system is the law** - Only use `tb-*` color tokens
2. **Wordmark is always `<Wordmark />`** - Never render "TableBird" as text
3. **Bird is always `<BirdMark />`** - Embedded SVG, not image src
4. **Mobile-first** - Survey form must be pixel-perfect at 375px
5. **No placeholder content** - All copy is real Egyptian Arabic + English
6. **Ghost Mode is mandatory** - Dashboard never shows empty KPI cards
7. **RTL compatible** - When Arabic survey, apply `dir="rtl"` and RTL flex directions
8. **Auth guards are real** - Dashboard routes redirect unauthenticated users to `/login`
9. **Supabase is the only backend** - No REST calls except Stripe/WhatsApp (via Edge Fns)
10. **Landing page converts** - It's a real marketing page, not a template

### Database

All business logic is in Supabase:
- **Auth**: Supabase authentication (email/password)
- **Data**: PostgreSQL with RLS policies
- **File storage**: Supabase storage for logos
- **Webhooks**: Edge Functions for WhatsApp/email alerts

Tables:
- `profiles` - Extended user data (name, role, preferences)
- `businesses` - Restaurant/cafe details
- `surveys` - Feedback configuration
- `responses` - Customer ratings and comments
- `alerts` - WhatsApp/email notifications
- `waitlist` - Landing page signups

## Build & Deploy

### Production build:
```bash
npm run build
```

Output: `dist/` folder (ready for Netlify, Vercel, etc.)

### Linting:
```bash
npm run lint
```

## API Reference

See `src/lib/supabase.ts` for helper functions:
- `getCurrentUser()` - Get current authenticated user
- `getCurrentProfile(userId)` - Get user's profile
- `getBusinessBySlug(slug)` - Get public business data

## Next Steps

1. ✅ Design system setup
2. ✅ UI component library
3. ✅ Project structure & routing
4. ✅ Supabase schema
5. ⏳ **IN PROGRESS:** Landing page implementation
6. ⏳ Public survey form
7. ⏳ Owner dashboard
8. ⏳ Admin panel
9. ⏳ Auth pages (login/register)
10. ⏳ Connect Supabase to frontend

## Contributing

Follow the design system strictly. All new components must:
- Use `tb-*` color tokens
- Follow typography rules
- Support RTL text direction
- Be fully typed with TypeScript
- Include proper accessibility attributes

## License

© 2025 DDCX · TableBird
