# Funnkar School of Design

> Transform your creative journey with expert guidance in design, animation, and visual effects

A modern, responsive marketing website showcasing design courses and programs offered by Funnkar School of Design. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 with a clean white and blue theme.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## 🎨 Features

- **Modern Design System** - OKLCH color space with blue and white theme
- **Fully Responsive** - Mobile-first design optimized for all devices (320px - 2560px)
- **Minimal Dependencies** - Only 14 essential packages (73% reduction from initial setup)
- **Video Background** - Cyberpunk-themed hero section with autoplay video
- **Google Forms Integration** - Application and contact forms with backend submission
- **Fast Performance** - Next.js 16 with Turbopack, optimized production build
- **Accessible** - Built with Radix UI primitives for WCAG compliance
- **Single Page Application** - Smooth anchor navigation between sections

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Bernie-Dramos/Funnkar-School-of-Design.git
cd Funnkar-School-of-Design

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production (static export)
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Deployment

The site is configured for **static export** and deployed on **Netlify**:
- Build command: `pnpm build`
- Publish directory: `out`
- No serverless functions required
- Live site: [funnkarschoolofdesign.com](https://funnkarschoolofdesign.com)

## 📦 Tech Stack

### Core Technologies
- **[Next.js 16.0.7](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library (using Dialog, Select, Button, Input, Label only)
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[class-variance-authority](https://cva.style/)** - Component variant management

### Data & Utilities
- **[date-fns](https://date-fns.org/)** - Date formatting in application form
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring
- **Google Forms** - Backend for application and contact form submissions

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Tailwind config + CSS variables (OKLCH)
│   ├── layout.tsx            # Root layout, metadata, fonts (Poppins, Inter)
│   └── page.tsx              # Main landing page
├── components/
│   ├── navigation.tsx        # Responsive sticky header (logo optimized with priority)
│   ├── hero.tsx              # Hero section with cyberpunk video background
│   ├── features.tsx          # "Why Choose Us" features grid
│   ├── courses.tsx           # 8 course cards with flipcard animation + single Apply Now button
│   ├── contact.tsx           # Contact form with Google Forms integration
│   ├── footer.tsx            # 3-column footer (dark navy #0A1F2E)
│   └── ui/                   # shadcn/ui components (40+ files, 5 actively used)
├── lib/
│   └── utils.ts              # Utility functions (cn helper for class merging)
├── hooks/
│   ├── use-mobile.ts         # Mobile breakpoint detection hook
│   └── use-toast.ts          # Toast notification hook
├── public/                   # Static assets
│   ├── fsd-logo.png          # Site logo (optimized, 346KB)
│   ├── cyberpunk-hero.mp4    # Hero background video
│   ├── course images/        # 8 course background images (jpg/png)
│   ├── instagram.svg         # Instagram icon (15x15)
│   ├── linkedin.svg          # LinkedIn icon (15x15)
│   └── whatsapp.svg          # WhatsApp icon (15x15)
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration (static export)
├── netlify.toml              # Netlify deployment configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Design System

### Color Palette (OKLCH)
The project uses OKLCH color space with a clean white and blue theme:

```css
--background: oklch(0.20 0.04 250);  /* Dark navy blue */
--primary: oklch(0.50 0.15 264);     /* Blue accent */
--accent: oklch(0.50 0.15 264);      /* Blue (matching primary) */
```

### Typography
- **Headings (h1-h6):** Poppins (regular, 400 weight)
- **Paragraphs:** Inter (body text)
- **Default Font:** Geist (sans-serif)
- **Monospace Font:** Geist Mono
- **Brand Font:** Tonus Contrast (bold) - custom font for logo/branding

### Responsive Breakpoints
```
sm:  640px   (Tablet)
md:  768px   (Desktop)
lg:  1024px  (Large Desktop)
xl:  1280px  (Extra Large)
2xl: 1536px  (Ultra Wide)
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack

# Production
pnpm build        # Create production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 📝 Key Components

### Navigation
Compact sticky header (h-9 to h-15 responsive) with:
- Logo + brand name (left, with -ml-15 offset)
- Centered navigation links (Home, Why Choose Us, Courses)
- White Contact Us button (right-aligned, black text)
- Mobile hamburger menu with dropdown

### Hero Section
Full-height hero with:
- Autoplay cyberpunk video background (50% opacity)
- "Unlock Your Design Potential" heading with Poppins font
- Dual CTA buttons (Explore Courses, Get Brochure)

### Features ("Why Choose Us")
Sticky section (901px height) with 4-column grid:
- Free Consultation
- Career Support
- Free Trial Access
- Job Placement

### Courses
8 course cards in responsive grid (w-[24rem] each) with:
- Individual Apply Now buttons (white bg, black text)
- Tools displayed at bottom left
- Pre-selected course in application modal
- Gradient accent colors for each card
**All Courses:**
1. **Sketching and 2D Art** (Beginner) - Photoshop, Illustrator, Procreate
2. **3D Modelling** (Intermediate) - Maya, 3ds Max
3. **Interior Design** (Intermediate) - SketchUp, AutoCAD, 3ds Max
4. **Game Design** (Intermediate) - Unity, Unreal, Blender
5. **3D Animation** (Advanced) - Maya, Blender, MotionBuilder
6. **VFX Animation Diploma** (Professional) - After Effects, Nuke, Houdini, Premiere Pro
7. **Fine Arts** (All Levels) - Photoshop, Procreate, Traditional Media
8. **Graphics Design** (All Levels) - InDesign, Illustrator, Lightroom, Photoshop

### Application Form
Google Forms-integrated modal with:
- First Name, Last Name, Email, Phone Number
- Date of Birth (3 separate Select dropdowns: Day, Month, Year)
- Course Selection (pre-populated when clicking Apply Now on a specific course)
- Entry IDs: 1588074809 (firstName), 1808825635 (lastName), 1031876416 (email), 1638210572 (phoneNumber), 1732680046 (courseSelection)

### Contact Section
Dramatic heading with:
- "GET IN TOUCH" badge (linear gradient from-[#071727] to-[#19538D])
- "Discover & Define Your Future" heading (text-4xl to text-7xl)
- Contact cards for Email, Phone, Location
- Google Forms integration (Entry IDs: 70361504, 1967203626, 754594676, 1917029081)

### Footer
3-column dark layout (bg-[#0A1F2E]) with:
- Left: Logo + brand + description
- Middle: Quick Links (centered with md:mx-auto)
- Right: Follow Us social icons (positioned with md:ml-60)

## 📊 Performance & Optimization

### Bundle Size
- **14 dependencies** (down from 51 - 73% reduction)
- **node_modules:** ~80MB (down from ~250MB)
- **Production build:** Optimized with Next.js 16 + Turbopack

### Responsiveness
All components fully tested and optimized for:
- **Mobile:** 320px - 640px
- **Tablet:** 640px - 1024px  
- **Desktop:** 1024px - 2560px+

Key responsive features:
- Navbar scales from h-9 to h-15
- Text sizes: text-[10px] to text-7xl across breakpoints
- Course cards: stacked mobile → 24rem fixed width desktop
- Footer: single column mobile → 3-column desktop

### SEO & Meta
- Optimized meta tags and Open Graph data
- Favicon: `/fsd-logo.png`
- Descriptive page title and description

## 🎯 Development Guidelines

### Adding New Components

1. **Create component file** in `components/[name].tsx`
2. **Add client directive** if interactive: `"use client"`
3. **Import to page** in `app/page.tsx`
4. **Follow patterns:**
   - Mobile-first responsive design
   - Use design tokens (no hardcoded colors)
   - Implement with `cn()` utility for class merging

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

**Important:** Don't manually edit files in `components/ui/` - they're managed by shadcn CLI.

### Styling Conventions

- **Design Tokens:** Always use `bg-background`, `text-accent`, etc.
- **OKLCH Colors:** When adding colors, use OKLCH format in `app/globals.css`
- **Mobile-First:** Write mobile styles first, then add breakpoint variants
- **Spacing:** Use Tailwind spacing scale (px-4, py-6, gap-8, etc.)

## 🚢 Deployment

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Static Export

The project is configured for static export with:
- `images: { unoptimized: true }` - Images not optimized during build
- `typescript: { ignoreBuildErrors: true }` - Build succeeds despite type errors

## 📄 License

This project is proprietary and confidential. All rights reserved by Funnkar School of Design.

## 🤝 Contributing

This is a private project. If you're part of the team and want to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Funnkar School of Design**

- Email: funnkar.schoolofdesign@gmail.com
- Phone: +91 9325167605 | +91 9209165351
- WhatsApp: [+91 9325167605](https://wa.me/9325167605)
- Location: Nashik, MH
- GitHub: [@Bernie-Dramos](https://github.com/Bernie-Dramos)

---

Built with ❤️ by the Funnkar School of Design team