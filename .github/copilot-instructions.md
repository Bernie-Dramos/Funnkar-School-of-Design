# Funnkar School of Design - AI Agent Instructions

## Project Overview
Marketing website for Funnkar School of Design built with **Next.js 16 (App Router)**, React 19, TypeScript, and Tailwind CSS v4. Single-page application with component-based sections.

## Tech Stack Architecture

### Core Stack
- **Next.js 16** with App Router (`app/` directory)
- **React 19** (latest features enabled)
- **TypeScript** (strict mode enabled but `ignoreBuildErrors: true` in config)
- **Tailwind CSS v4** with CSS variables for theming
- **pnpm** for package management

### UI Component System
- **shadcn/ui** (New York style) - 40+ pre-built components in `components/ui/`
- **Radix UI** primitives for accessible components
- **Lucide React** for icons
- **class-variance-authority** for variant management
- Utility function: `cn()` in `lib/utils.ts` merges classes with tailwind-merge

## Key Architectural Patterns

### 1. Component Organization
```
app/                    # Next.js App Router
  page.tsx              # Main landing page (imports all sections)
  layout.tsx            # Root layout, metadata, fonts
  globals.css           # Tailwind config + custom CSS variables
components/
  navigation.tsx        # Sticky header with mobile menu
  hero.tsx              # Hero section
  features.tsx          # Features grid
  courses.tsx           # Course cards
  team.tsx              # Team member profiles
  contact.tsx           # Contact form
  footer.tsx            # Footer links
  ui/                   # shadcn/ui components (DO NOT edit directly)
```

**Pattern**: Each section is a standalone client component (`"use client"`) imported into `page.tsx`. No routing beyond the single page.

### 2. Styling System

#### CSS Variables (OKLCH Color Space)
Theme colors defined in `app/globals.css` using OKLCH for perceptual uniformity:
```css
--background: oklch(0.20 0.04 250);  /* Dark navy blue */
--accent: oklch(0.65 0.19 35);       /* Orange accent */
--primary: oklch(0.35 0.12 264);     /* Primary blue */
```

**Why OKLCH**: Better color consistency across light/dark themes. Don't use hex/rgb without converting.

#### Tailwind CSS v4 Specifics
- Uses `@import "tailwindcss"` instead of `@tailwind` directives
- Custom variant for dark mode: `@custom-variant dark (&:is(.dark *))`
- Design tokens accessible as `bg-background`, `text-accent`, etc.

#### Responsive Design Pattern
All components use mobile-first breakpoints:
```tsx
// Example from hero.tsx
className="text-4xl sm:text-6xl md:text-7xl"  // Mobile → Tablet → Desktop
className="px-4 sm:px-6"                       // Horizontal padding scales
```

### 3. Component Conventions

#### Client Components
All section components use `"use client"` directive because they need:
- Interactive state (mobile menu toggle)
- Browser APIs
- Client-side animations

#### TypeScript Patterns
- Props typed with `React.ComponentProps<'element'>`
- Strict mode enabled but ignored for builds (`ignoreBuildErrors: true`)
- Path aliases: `@/components`, `@/lib`, `@/hooks`

#### shadcn/ui Component Usage
When adding UI components:
```bash
# Use this command pattern (not shown in package.json scripts)
npx shadcn@latest add [component-name]
```

**DO NOT manually edit** files in `components/ui/` - they're managed by shadcn CLI.

### 4. Image Handling
```tsx
import Image from "next/image"

<Image 
  src="/LOGO.png"          // Files in public/ are served from root
  width={32} height={32}   // Always specify dimensions
  alt="..."                // Required for accessibility
/>
```

**Config**: `images: { unoptimized: true }` in `next.config.mjs` - images not optimized during build (likely for static export).

### 5. Data Patterns

#### Static Content Arrays
Course data hardcoded in components (see `components/courses.tsx`):
```tsx
const courses = [
  {
    id: 1,
    title: "Graphics Design",
    tools: ["Id", "Ai", "Lr", "Ps"],
    accentColor: "from-accent/30 to-accent/10",
    // ...
  }
]
```

**Pattern**: No CMS or API. Content updates require code changes.

## Development Workflows

### Common Commands
```bash
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Adding New Sections
1. Create component in `components/[name].tsx`
2. Add `"use client"` directive if interactive
3. Import and add to `app/page.tsx` render tree
4. Follow mobile-first responsive pattern
5. Use design system colors (no hardcoded hex)

### Typography & Fonts
- **Geist** (sans) and **Geist Mono** loaded via `next/font/google`
- Custom font: **Tonus Contrast** (bold) from `/public/fonts/` for branding
- Applied via `style={{ fontFamily: 'Tonus Contrast, sans-serif' }}`

### Navigation & Scroll
Uses hash-based anchor navigation:
```tsx
<Link href="#courses">Courses</Link>  // Scrolls to <section id="courses">
```

## Critical Constraints

### Build Configuration
- **TypeScript errors ignored during build** - code may have type issues that won't fail CI
- **Images unoptimized** - likely deploying as static site
- No database, API routes, or dynamic data fetching

### Design System Rules
1. **Always use design tokens**: `bg-primary` not `bg-blue-500`
2. **OKLCH color space**: When adding colors, use OKLCH format
3. **Mobile-first**: Write mobile styles first, add `sm:`, `md:`, `lg:` breakpoints
4. **Spacing scale**: Use Tailwind spacing (px-4, py-6, etc.)

### Component Library
- Don't reinvent UI components - check `components/ui/` first
- Use `cn()` utility for merging classes
- Radix UI provides accessibility - don't override ARIA attributes

## Integration Points

### External Dependencies
- **@vercel/analytics**: Analytics tracking (configured in layout)
- **next-themes**: Dark/light mode support (provider in `components/theme-provider.tsx`)
- **embla-carousel-react**: Carousel functionality
- **react-hook-form** + **zod**: Form validation (if forms added)

### No Backend
This is a static frontend. No:
- API routes
- Database connections
- Authentication
- Server-side rendering (SSR/SSG only)

## Common Gotchas

1. **CSS Variable Conflicts**: If styles don't apply, check if component overrides `--background` or other tokens
2. **Client Component Errors**: If you see hydration errors, ensure `"use client"` is present
3. **Image Paths**: Public assets accessed without `/public` prefix: `/LOGO.png` not `/public/LOGO.png`
4. **TypeScript Strict Mode**: Code may have type errors but builds succeed due to `ignoreBuildErrors: true`

## When Adding Features

### New UI Component
```bash
npx shadcn@latest add dialog  # Example: add dialog component
```
Then import and use: `import { Dialog } from "@/components/ui/dialog"`

### New Section Component
```tsx
"use client"

export default function NewSection() {
  return (
    <section id="new-section" className="py-16 sm:py-24 px-4 sm:px-6">
      {/* Mobile-first, use design tokens */}
    </section>
  )
}
```

### Styling New Colors
Add to `app/globals.css` `:root` block using OKLCH:
```css
--new-color: oklch(lightness chroma hue);
```
Then use: `bg-[--new-color]` or add to Tailwind theme.

## File Naming & Structure
- **Components**: PascalCase for React components (`Hero.tsx`)
- **Utilities**: camelCase for functions (`utils.ts`)
- **Styles**: kebab-case for CSS files (`globals.css`)
- **Config**: kebab-case for config files (`next.config.mjs`)

---

**Quick Reference**: Check `components.json` for shadcn/ui configuration, `package.json` for available scripts, and `app/globals.css` for color palette values.
