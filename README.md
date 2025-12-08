# Funnkar School of Design

> Transform your creative journey with expert guidance in design, animation, and visual effects

A modern, responsive marketing website showcasing design courses and programs offered by Funnkar School of Design. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 with a clean white and blue theme.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## 🎨 Features

- **Modern Design System** - OKLCH color space with blue and white theme
- **Responsive Layout** - Mobile-first approach with breakpoint-optimized components
- **Component Library** - 40+ pre-built shadcn/ui components (New York style)
- **Interactive Application Form** - Modal form with date picker and course selection
- **Fast Performance** - Turbopack bundler with optimized build times
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
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📦 Tech Stack

### Core Technologies
- **[Next.js 16.0.7](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[class-variance-authority](https://cva.style/)** - Component variant management

### Forms & Validation
- **[react-hook-form](https://react-hook-form.com/)** - Performant form handling
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[date-fns](https://date-fns.org/)** - Date formatting and manipulation

### Additional Libraries
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel functionality
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Tailwind config + CSS variables (OKLCH)
│   ├── layout.tsx            # Root layout, metadata, fonts (Poppins, Inter)
│   └── page.tsx              # Main landing page
├── components/
│   ├── navigation.tsx        # Sticky header with mobile menu
│   ├── hero.tsx              # Hero section with blue theme
│   ├── features.tsx          # Features grid (901px height)
│   ├── courses.tsx           # Course cards with application form
│   ├── contact.tsx           # Contact form
│   ├── footer.tsx            # Footer with social links (Instagram, LinkedIn, WhatsApp)
│   └── ui/                   # shadcn/ui components (40+ files)
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── hooks/                    # Custom React hooks
├── public/                   # Static assets
│   ├── fsd-logo.png          # Site logo (40x30)
│   ├── instagram.png         # Instagram icon
│   ├── linkedin.png          # LinkedIn icon
│   └── whatsapp icon.png     # WhatsApp icon
├── .vscode/
│   └── settings.json         # VS Code settings (CSS lint ignore)
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
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
Sticky header with responsive mobile menu, smooth scroll navigation using hash anchors.

### Hero Section
Full-height hero with gradient background, animated elements, and CTA buttons.

### Courses
Grid of course cards with descriptions, durations, and tools:
1. **Sketching and 2D Art** (Beginner) - Photoshop, Illustrator, Procreate
2. **3D Modelling** (Intermediate) - Maya, 3ds Max
3. **Interior Design** (Intermediate) - SketchUp, AutoCAD, 3ds Max
4. **Game Design** (Intermediate) - Unity, Unreal, Blender
5. **3D Animation** (Advanced) - Maya, Blender, MotionBuilder
6. **VFX Animation Diploma** (Professional) - After Effects, Nuke, Houdini, Premiere Pro
7. **Fine Arts** (All Levels) - Photoshop, Procreate, Traditional Media
8. **Graphics Design** (All Levels) - InDesign, Illustrator, Lightroom, Photoshop

### Application Form
Interactive dialog modal with form fields:
- First Name & Last Name
- Email & Phone Number
- Date of Birth (3 separate dropdowns: DD, MM, YYYY)
- Course Selection dropdown

### Contact Form
Form with validation for user inquiries (name, email, subject, message).

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