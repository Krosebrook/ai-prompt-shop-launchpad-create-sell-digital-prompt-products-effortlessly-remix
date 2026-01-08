# GitHub Copilot Instructions

> Quick reference for AI-assisted development in this repository

## 🎯 Project Overview

**Purpose**: Landing page for AI Prompt Shop Launchpad - helps coaches, creators, and service providers launch their own AI prompt shops.

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS + Radix UI

**Type**: Static landing page (no backend/API)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build
npm run build

# Lint (types, JS, CSS, CSS variables, CSS classes)
npm run lint

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/           # Main section components
│   ├── HeroSection.tsx
│   ├── PricingSection.tsx
│   └── ui/              # Reusable UI components (Radix wrappers)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (cn(), etc.)
├── assets/              # Images, fonts, etc.
└── App.tsx              # Main app component
```

---

## 🎨 Key Patterns

### Component Structure
```tsx
import { Button } from "@/components/ui/button";

export function MySection() {
  return (
    <section className="min-h-screen px-4 py-20">
      {/* Content */}
    </section>
  );
}
```

### Styling
- **Tailwind utilities**: Use existing utility classes
- **Dark mode**: Enabled by default (`dark` class on root)
- **Responsive**: Mobile-first approach
- **Theme colors**: Use `text-primary`, `text-muted-foreground`, `bg-background`, etc.

### UI Components
- **Source**: Radix UI primitives in `src/components/ui/`
- **Import**: `import { Button } from "@/components/ui/button"`
- **Styling**: Pre-styled with Tailwind, customizable via className
- **Icons**: Use `lucide-react` (e.g., `import { ArrowRight } from "lucide-react"`)

### TypeScript
- **Types**: All components are typed
- **Props**: Define interfaces for component props
- **Strict mode**: TypeScript strict checking enabled

### Forms & Validation
- **react-hook-form**: For form management
- **Zod**: For schema validation
- **@hookform/resolvers**: Integrates Zod with react-hook-form

---

## ⚠️ Important Constraints

1. **No Backend**: This is a static site - no API routes, no server functions
2. **No Tests Yet**: Testing infrastructure not set up (use Vitest if adding tests)
3. **Blink SDK**: Project uses `@blinkdotnew/sdk` - check compatibility when adding features
4. **Dark Mode**: UI is dark-themed by default
5. **TypeScript**: All new code must be TypeScript

---

## ✅ Before Committing

- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes (types, JS, CSS)
- [ ] Manually tested in browser
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Dark mode looks good
- [ ] No console errors or warnings
- [ ] Follows existing component patterns

---

## 🔍 When Adding Features

1. **Check existing patterns**: Look at similar components first
2. **Reuse UI components**: Use `src/components/ui/*` components
3. **Match styling**: Follow Tailwind patterns in existing code
4. **Keep it simple**: This is a landing page, avoid over-engineering
5. **TypeScript types**: Always add proper types
6. **Responsive**: Test on mobile/tablet/desktop

---

## 📚 Reference Files

- **Full Feature Guide**: `.github/FEATURE_TO_PR_TEMPLATE.md`
- **Tailwind Config**: `tailwind.config.cjs`
- **TS Config**: `tsconfig.json`, `tsconfig.app.json`
- **Vite Config**: `vite.config.ts`
- **UI Components**: `src/components/ui/*`

---

## 🎯 Common Tasks

### Add a New Section
1. Create `src/components/MySectionSection.tsx`
2. Follow pattern from existing sections (e.g., `HeroSection.tsx`)
3. Import and add to `App.tsx`
4. Use Tailwind for styling
5. Ensure responsive design

### Add a New UI Component
1. Check if similar component exists in `src/components/ui/`
2. If Radix UI provides it, create wrapper following existing pattern
3. Export from the component file
4. Document props with TypeScript interface

### Update Styling
1. Use Tailwind utilities (avoid custom CSS when possible)
2. Use theme colors: `text-primary`, `bg-background`, etc.
3. Test in dark mode
4. Ensure responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Add Animation
1. Use `framer-motion` for complex animations
2. Use `tailwindcss-animate` classes for simple transitions
3. Keep animations subtle and purposeful

---

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| **TypeScript errors** | Run `npm run lint:types` to see all type errors |
| **Import path errors** | Use `@/` alias for src imports (configured in tsconfig) |
| **Styling not applying** | Check Tailwind class names, rebuild if needed |
| **Dark mode issues** | Ensure using theme colors, not hardcoded colors |
| **Build fails** | Check for TypeScript errors and import issues |

---

## 💡 Best Practices

1. **Components**: Small, focused, single-responsibility
2. **Props**: Use TypeScript interfaces, provide defaults
3. **Styling**: Tailwind utilities > custom CSS
4. **Performance**: Avoid unnecessary re-renders
5. **Accessibility**: Use semantic HTML, ARIA labels for Radix components
6. **Code Quality**: Follow ESLint rules, fix warnings

---

**Last Updated**: 2026-01-08  
**For detailed feature development guide**: See `.github/FEATURE_TO_PR_TEMPLATE.md`
