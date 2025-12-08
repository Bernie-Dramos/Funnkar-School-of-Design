# Funnkar School of Design - AI Agent Instructions

## Project Overview
Marketing website for Funnkar School of Design built with **Next.js 16.0.7 (App Router)**, React 19, TypeScript, and Tailwind CSS v4. Single-page application with component-based sections, video background hero, and Google Forms integration.

## Tech Stack Architecture

### Core Stack
- **Next.js 16.0.7** with App Router (`app/` directory) - Security patched
- **React 19.2.0** (latest features enabled)
- **TypeScript 5.x** (strict mode enabled but `ignoreBuildErrors: true` in config)
- **Tailwind CSS v4.1.9** with CSS variables for theming
- **pnpm** for package management

### UI Component System
- **shadcn/ui** (New York style) - 40+ pre-built components in `components/ui/` (5 actively used)
- **Radix UI** primitives for accessible components (Dialog, Label, Select, Slot)
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
  navigation.tsx        # Compact sticky header (h-9 to h-15), centered nav, white Contact Us button
  hero.tsx              # Hero with cyberpunk video background (opacity-50)
  features.tsx          # "Why Choose Us" features grid (901px height)
  courses.tsx           # 8 course cards with individual Apply Now buttons + Google Forms
  contact.tsx           # Contact form with dramatic heading + Google Forms integration
  footer.tsx            # 3-column dark footer (bg-[#0A1F2E])
  ui/                   # shadcn/ui components (DO NOT edit directly)
hooks/
  use-mobile.ts         # Mobile breakpoint detection
  use-toast.ts          # Toast notification hook
```

**Pattern**: Each section is a standalone client component (`"use client"`) imported into `page.tsx`. No routing beyond the single page.

### 2. Styling System

#### CSS Variables (OKLCH Color Space)
Theme colors defined in `app/globals.css` using OKLCH with a clean white and blue theme:
```css
--background: oklch(0.20 0.04 250);  /* Dark navy blue */
--primary: oklch(0.50 0.15 264);     /* Blue accent */
--accent: oklch(0.50 0.15 264);      /* Blue (matches primary) */
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

### 4. Image & Video Handling
```tsx
import Image from "next/image"

<Image 
  src="/fsd-logo.png"      // Files in public/ are served from root
  width={32} height={24}   // Logo dimensions: 32x24
  alt="..."                // Required for accessibility
/>
```

**Config**: `images: { unoptimized: true }` in `next.config.mjs` - images not optimized during build (likely for static export).

**Assets in public/**:
- `/fsd-logo.png` - Site logo (32x24) - used in navigation and footer
- `/cyberpunk-hero.mp4` - Hero background video (autoplay, loop, muted, playsInline)
- `/instagram.svg` - Instagram icon (15x15)
- `/linkedin.svg` - LinkedIn icon (15x15)
- `/whatsapp.svg` - WhatsApp icon (15x15)

**Video Background** (hero.tsx):
```tsx
<video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100">
  <source src="/cyberpunk-hero.mp4" type="video/mp4" />
</video>
```

### 5. Data Patterns

#### Static Content Arrays
Course data hardcoded in components (see `components/courses.tsx`):
```tsx
const courses = [
  {
    id: 1,
    title: "Sketching and 2D Art",
    level: "Beginner",
    tools: ["Ps", "Ai", "Procreate"],
    accentColor: "from-primary/25 to-primary/8",
    // ...
  },
  // 8 courses total: Sketching, 3D Modelling, 3D Animation, Graphics Design, VFX Diploma, Game Design, Fine Arts, Interior Design
]
```

**Pattern**: No CMS or API. Content updates require code changes.

**All Courses**:
1. Sketching and 2D Art (Beginner)
2. 3D Modelling (Intermediate)
3. Interior Design (Intermediate)
4. Game Design (Intermediate)
5. 3D Animation (Advanced)
6. VFX Animation Diploma (Professional)
7. Fine Arts (All Levels)
8. Graphics Design (All Levels)

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
- **Headings (h1-h6):** Poppins (regular, 400 weight) loaded via `next/font/google`
- **Paragraphs:** Inter loaded via `next/font/google`
- **Default:** Geist (sans) and **Geist Mono** loaded via `next/font/google`
- **Brand:** Tonus Contrast (bold) from `/public/fonts/` for logo
- Applied via CSS variables: `var(--font-poppins)`, `var(--font-inter)`
- Global styles in `app/globals.css`:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
p {
  font-family: var(--font-inter), sans-serif;
}
```

### Navigation & Scroll
Uses hash-based anchor navigation:
```tsx
<Link href="#courses">Courses</Link>  // Scrolls to <section id="courses">
```

**Navbar Design (navigation.tsx)**:
- Compact height: h-9 sm:h-12 lg:h-15
- Logo + brand: Left-aligned with -ml-15 offset
- Nav links: Centered with -ml-12 offset, text-[10px] lg:text-xs
- Contact Us button: Right-aligned, white bg with black text, text-[10px] lg:text-xs
- Mobile: Hamburger menu with dropdown

**Footer Design (footer.tsx)**:
- Background: bg-[#0A1F2E] (dark navy)
- Layout: 3-column grid (md:grid-cols-3)
- Left column: Logo (32x24) + brand + description
- Middle column: Quick Links centered with md:mx-auto
- Right column: Follow Us social icons positioned with md:ml-60
- Social icons: 15x15px SVGs with hover:opacity-80

## Critical Constraints

### Build Configuration
- **TypeScript errors ignored during build** - code may have type issues that won't fail CI
- **Images unoptimized** - likely deploying as static site
- No database, API routes, or dynamic data fetching

### Responsive Design Requirements
All components optimized for:
- **Mobile:** 320px - 640px (text-[10px] to text-base)
- **Tablet:** 640px - 1024px (text-sm to text-lg)
- **Desktop:** 1024px+ (text-base to text-7xl)

Key patterns:
- Navbar: h-9 → h-12 → h-15 across breakpoints
- Course cards: Full width mobile → w-[24rem] desktop with gap-6 sm:gap-7 lg:gap-8
- Footer: Single column mobile → 3-column grid desktop
- Text sizing: Progressive scaling (e.g., text-4xl sm:text-5xl md:text-6xl lg:text-7xl)

### Performance Optimization
- **Dependencies:** 14 packages (73% reduction from initial 51)
- **Bundle size:** Optimized with tree-shaking
- **Build time:** Fast with Turbopack bundler
- **node_modules:** ~80MB (down from ~250MB)

### Design System Rules
1. **Always use design tokens**: `bg-primary` not `bg-blue-500`
2. **OKLCH color space**: When adding colors, use OKLCH format
3. **Blue and white theme**: Primary color is blue (oklch 0.50 0.15 264), no orange
4. **Mobile-first**: Write mobile styles first, add `sm:`, `md:`, `lg:` breakpoints
5. **Spacing scale**: Use Tailwind spacing (px-4, py-6, etc.)
6. **Typography**: Poppins for headings, Inter for paragraphs

### Component Library
- Don't reinvent UI components - check `components/ui/` first
- Use `cn()` utility for merging classes
- Radix UI provides accessibility - don't override ARIA attributes

## Integration Points

### External Dependencies (Optimized - 14 packages)
- **@vercel/analytics**: Analytics tracking (configured in layout)
- **@radix-ui/react-dialog**: Modal dialogs for application form
- **@radix-ui/react-select**: Dropdown selects (date picker, course selection)
- **@radix-ui/react-label**: Form labels
- **@radix-ui/react-slot**: Composable component slots
- **date-fns**: Date formatting for application form
- **lucide-react**: Icon library (Menu, X, CheckCircle2, Mail, Phone, MapPin)
- **Google Forms**: Backend for application and contact form submissions (no-cors mode)

### Application Form (courses.tsx)
Interactive dialog modal with shadcn/ui components + Google Forms:
- **Dialog**: Modal popup triggered by individual "Apply Now" buttons on course cards
- **Pre-selection**: Clicking Apply Now on a course pre-selects that course in the form
- **Form Fields**:
  - First Name & Last Name (text inputs)
  - Email (email input) & Phone Number (tel input)
  - Date of Birth: 3 separate Select dropdowns (Day, Month, Year) with scrollable options
  - Course Selection: Disabled input showing pre-selected course
- **State Management**: `useState` for form data, date values, and selectedCourse
- **Google Forms Integration**:
  - Entry IDs: 1588074809 (firstName), 1808825635 (lastName), 1031876416 (email), 1638210572 (phoneNumber), 1732680046 (courseSelection)
  - Submission via fetch with mode: 'no-cors'

### Contact Form (contact.tsx)
Google Forms-integrated contact form:
- **Form Fields**: Name, Email, Subject, Message
- **Google Forms Integration**:
  - Entry IDs: 70361504 (name), 1967203626 (email), 754594676 (subject), 1917029081 (message)
  - Form URL: https://docs.google.com/forms/d/e/1FAIpQLSfLx07W9TrvjnkqKzvp5iPTX7oL_26hYZKFjq67gHOmcYns6Q/formResponse
  - Submission via fetch with mode: 'no-cors'
- **Heading Design**:
  - "GET IN TOUCH" badge with linear gradient (from-[#071727] to-[#19538D])
  - "Discover & Define Your Future" heading (text-4xl to text-7xl)

### Backend Integration
Static frontend with Google Forms backend:
- No API routes in Next.js
- No database connections
- No authentication
- Forms submit to Google Sheets via Google Forms
- Static export ready (SSG only)

## Common Gotchas

1. **CSS Variable Conflicts**: If styles don't apply, check if component overrides `--background` or other tokens
2. **Client Component Errors**: If you see hydration errors, ensure `"use client"` is present
3. **Image Paths**: Public assets accessed without `/public` prefix: `/fsd-logo.png` not `/public/fsd-logo.png`
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
