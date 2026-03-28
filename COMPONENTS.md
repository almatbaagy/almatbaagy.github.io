# TableBird Component Reference

Quick reference for all 9 UI components in the design system.

## Import
```tsx
import {
  Wordmark,
  BirdMark,
  TbCard,
  TbButton,
  TbKpi,
  TbBadge,
  StarRating,
  GhostBanner,
  ToggleSwitch
} from '@/components/ui';
```

---

## 1. Wordmark

TableBird text branding. **Never render "TableBird" as plain text** — always use this component.

```tsx
<Wordmark />                           // Default: light variant, md size
<Wordmark variant="dark" size="lg" />  // Dark on dark bg, larger
<Wordmark variant="light" size="sm" /> // Light on light bg, smaller
```

**Props:**
- `variant`: `'dark' | 'light'` (default: `'light'`)
- `size`: `'sm' | 'md' | 'lg' | 'xl' | '2xl'` (default: `'md'`)

**Output:** `Table` (in main color) + `Bird` (in coral)

---

## 2. BirdMark

The animated bird SVG. **Never use `<img>` for the bird** — always use this component.

```tsx
<BirdMark />                  // Default: w-10, no animation
<BirdMark className="w-16" /> // Custom size, no animation
<BirdMark animate={true} />   // Floats up and down
```

**Props:**
- `className`: Tailwind size class like `'w-12'` or `'w-20 h-20'` (default: `'w-10'`)
- `animate`: boolean (default: `false`) — Applies `.tb-float` CSS animation

**Tips:**
- Responsive: Use `md:w-20` for larger screens
- Always specify `w-X` to maintain aspect ratio (h-auto is automatic)

---

## 3. TbCard

Clean white card with subtle border.

```tsx
<TbCard>
  <div className="p-6">Card content here</div>
</TbCard>

<TbCard className="p-8 rounded-3xl shadow-lg">
  Custom styling
</TbCard>
```

**Props:**
- `children`: React content inside card
- `className`: Additional Tailwind classes (merges with defaults)

**Styling:**
- `bg-white` (white background)
- `border border-tb-mist/30` (subtle gray border)
- `rounded-2xl` (large corner radius)
- `shadow-sm` (minimal shadow)

---

## 4. TbButton

Interactive button with multiple variants.

```tsx
<TbButton>Default action</TbButton>
<TbButton variant="primary">Primary (Coral)</TbButton>
<TbButton variant="secondary">Secondary (Ghost)</TbButton>
<TbButton variant="teal">Teal (Deep Teal)</TbButton>
<TbButton variant="ghost">Ghost (Minimal)</TbButton>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'teal' | 'ghost'` (default: `'primary'`)
- `className`: Additional Tailwind classes
- `disabled`: boolean

**All props from HTML `<button>`:**
```tsx
<TbButton 
  onClick={handleClick}
  disabled={isLoading}
  type="submit"
  className="w-full"
>
  Submit
</TbButton>
```

**Variants:**
- **primary** (default): Coral bg, deep teal on hover, white text
- **secondary**: Light gray bg, darker hover, border
- **teal**: Deep teal bg, ink on hover, white text
- **ghost**: Invisible, text on hover

---

## 5. TbKpi

Large metric display (Key Performance Indicator).

```tsx
<TbKpi 
  label="Total Reviews"
  value="482"
  sub="all time"
  color="tb-deep-teal"
/>

<TbKpi 
  label="Average Rating"
  value="4.3 ★"
  color="tb-coral"
/>
```

**Props:**
- `label`: Small uppercase label (DM Mono) — `string`
- `value`: Large headline value (Syne) — `string`
- `sub`: Optional subtitle (gray text) — `string | undefined`
- `color`: Tailwind color class for value — `string` (default: `'tb-deep-teal'`)

**Colors that work:**
- `'tb-deep-teal'` (cool, primary)
- `'tb-coral'` (warm, secondary)
- `'tb-teal'` (accent)
- `'tb-peach'` (positive change)
- `'tb-rose'` (negative)

---

## 6. TbBadge

Status indicator badge.

```tsx
<TbBadge type="positive" />   // Green, says "Positive"
<TbBadge type="negative" />   // Red, says "Needs Attention"
<TbBadge type="neutral" />    // Gray, says "Neutral"
```

**Props:**
- `type`: `'positive' | 'negative' | 'neutral'` — **required**

**Fixed text based on type:**
- `positive` → "Positive" (teal text on light teal bg)
- `negative` → "Needs Attention" (red text on light red bg)
- `neutral` → "Neutral" (gray text on light gray bg)

---

## 7. StarRating

Interactive 5-star rating input.

```tsx
// Interactive (user can click)
const [rating, setRating] = useState(0);
<StarRating value={rating} onChange={setRating} size="md" />

// Read-only display
<StarRating value={4} readonly size="sm" />

// Large stars
<StarRating value={3} onChange={setRating} size="lg" />
```

**Props:**
- `value`: Current rating `0-5` — `number`
- `onChange`: Callback when starred — `(rating: number) => void | undefined`
- `readonly`: Disable clicking — `boolean` (default: `false`)
- `size`: Star size — `'sm' | 'md' | 'lg'` (default: `'md'`)

**Styles:**
- Filled stars: coral color (`text-tb-coral`)
- Empty stars: mist color (`text-tb-mist`)
- Hover effect: 10% scale increase + coral color
- Smooth transitions

---

## 8. GhostBanner

"Sample Data" indicator for empty/mock state.

```tsx
<GhostBanner />
```

**Output:**
Shows a banner at top of page saying:
- "Sample Data — Connect your QR code to see real insights"
- Subtitle explaining these are mock values
- Includes bird icon

**Use cases:**
- Dashboard has 0 responses (show mock data with this banner)
- Analytics before any data collected
- Demo mode

**Props:** None

---

## 9. ToggleSwitch

Custom on/off toggle input.

```tsx
const [enabled, setEnabled] = useState(false);

<ToggleSwitch 
  checked={enabled}
  onChange={setEnabled}
/>

// Disabled state
<ToggleSwitch 
  checked={false}
  onChange={() => {}}
  disabled={true}
/>
```

**Props:**
- `checked`: Current state — `boolean`
- `onChange`: Callback — `(checked: boolean) => void`
- `disabled`: Prevent interaction — `boolean` (default: `false`)

**Styles:**
- ON (checked): coral background, white dot on right
- OFF (unchecked): gray background, white dot on left
- Smooth animation between states
- Disabled: 50% opacity

---

## Design System Color Tokens

All colors available as Tailwind classes:

| Token | Hex | Use |
|-------|-----|-----|
| `tb-ink` | `#1C2B30` | Dark text, dark backgrounds |
| `tb-deep-teal` | `#2C5F6E` | Primary actions, positive |
| `tb-teal` | `#3D7A8A` | Links, secondary |
| `tb-rose` | `#D95E6A` | Errors, negatives |
| `tb-coral` | `#E07055` | CTA, "Bird" text, accents |
| `tb-peach` | `#E89880` | Warm accents, success |
| `tb-mist` | `#B8C9D0` | Borders, disabled, empty stars |
| `tb-cream` | `#FAF7F5` | Page backgrounds, light surfaces |

```tsx
// Text
<p className="text-tb-coral">Emphasized text</p>
<p className="text-tb-ink/50">Muted text</p>

// Backgrounds
<div className="bg-tb-cream">Page background</div>
<div className="bg-tb-ink text-white">Dark section</div>

// Borders
<div className="border border-tb-mist/30">Card border</div>
```

---

## Typography Classes

```tsx
// Syne - Headings & logo only
<h1 className="font-syne text-5xl">Main Title</h1>

// DM Sans - Body text & UI labels
<p className="font-sans text-base">Body paragraph</p>
<button className="font-sans text-sm font-medium">Button</button>

// DM Mono - Numbers, codes, timestamps
<code className="font-mono text-xs">const x = 123;</code>
<span className="font-mono text-xs">3.5 ★</span>
<time className="font-mono text-[10px]">2025-03-12</time>
```

---

## Common Patterns

### Example 1: KPI Row
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <TbKpi label="Reviews" value="1.2k" color="tb-deep-teal" />
  <TbKpi label="Avg Rating" value="4.3 ★" color="tb-coral" />
  <TbKpi label="Response Rate" value="89%" color="tb-teal" />
  <TbKpi label="This Week" value="+24" color="tb-peach" />
</div>
```

### Example 2: Rating Card
```tsx
<TbCard className="p-6">
  <StarRating value={rating} onChange={setRating} size="md" />
  <p className="mt-4 text-tb-ink/60">How was your experience?</p>
  <button className="mt-4">Submit</button>
</TbCard>
```

### Example 3: Feature List with Badges
```tsx
<div className="space-y-3">
  <div className="flex justify-between items-center">
    <p>Metric: Food Quality</p>
    <ToggleSwitch checked={true} onChange={() => {}} />
  </div>
  <div className="flex justify-between items-center">
    <p>Metric: Cleanliness</p>
    <ToggleSwitch checked={false} onChange={() => {}} />
  </div>
</div>
```

### Example 4: Status Display
```tsx
<div className="space-y-2">
  <p>Rating: 4.6 ★ <TbBadge type="positive" /></p>
  <p>Response Rate: 45% <TbBadge type="negative" /></p>
  <p>Status: Active <TbBadge type="neutral" /></p>
</div>
```

---

## Tips & Tricks

### Responsive Sizing
```tsx
// Button grows on larger screens
<TbButton className="w-full md:w-auto">Submit</TbButton>

// Bird gets bigger on desktop
<BirdMark className="w-12 md:w-20 lg:w-32" />
```

### Opacity Modifiers
```tsx
// Use /30 syntax for opacity
<div className="bg-tb-mist/30 border border-tb-mist/15">
  Subtle background with subtle border
</div>

<p className="text-tb-ink/50">Muted text (50% opacity)</p>
```

### Dark Mode Backgrounds
```tsx
// Dark section with white text
<section className="bg-tb-ink py-16 px-6">
  <Wordmark variant="dark" size="lg" />
  <p className="text-white/75">Light text on dark</p>
</section>
```

### Spacing Shorthand
```tsx
// Padding all sides
<div className="p-6">Content</div>

// Padding X (left+right) and Y (top+bottom)
<div className="px-8 py-4">Content</div>

// Margin bottom
<h1 className="mb-4">Title</h1>
```

---

## Constraints & Rules

🚫 **DON'T:**
- Use hardcoded hex colors (e.g., `#E07055`)
- Render "TableBird" text without `<Wordmark />`
- Import bird with `<img src>` (use `<BirdMark />`)
- Use Bootstrap or Material UI components
- Mix Tailwind with inline styles

✅ **DO:**
- Use only `tb-*` color tokens
- Center everything with `<Wordmark />`
- Use `<BirdMark />` for any bird imagery
- Combine Tailwind classes for custom styling
- Keep components focused and single-purpose

---

That's it! These 9 components + color tokens + typography = entire design system.

Build fast, stay consistent. 🚀
