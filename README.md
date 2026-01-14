# AI Prompt Shop - E-Commerce Platform

A full-featured e-commerce platform for selling AI prompts and digital products. Built with React, TypeScript, and modern web technologies.

## Features

### Core E-Commerce
- **Product Catalog** - Browse, search, and filter 125+ AI prompts
- **Shopping Cart** - Persistent cart with coupon support
- **Checkout** - Stripe-ready checkout flow
- **User Dashboard** - Order history and download management

### Authentication
- User registration and login
- Password reset functionality
- Role-based access (user/admin)
- Persistent sessions with localStorage

### Admin Panel
- Revenue and order analytics
- Prompt management (CRUD)
- User management
- Order tracking

### UI/UX
- Dark mode by default
- Fully responsive design
- Toast notifications
- Loading states and animations

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Radix UI
- **Routing**: React Router DOM v7
- **State**: React Context API
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Navbar, Footer, CartDrawer)
│   ├── ui/               # UI primitives (Button, Card, Input, etc.)
│   ├── FeaturedPrompts.tsx
│   ├── NewsletterSection.tsx
│   └── [landing-page-sections].tsx
├── contexts/
│   ├── AuthContext.tsx   # Authentication state
│   ├── CartContext.tsx   # Shopping cart state
│   └── ProductContext.tsx # Product catalog state
├── data/
│   └── prompts.ts        # Prompt database (mock)
├── hooks/
│   ├── index.ts          # Hook exports
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   ├── useScrollLock.ts
│   └── useClickOutside.ts
├── pages/
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── BundlesPage.tsx
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   ├── CheckoutPage.tsx
│   ├── DashboardPage.tsx
│   └── AdminPage.tsx
├── types/
│   └── index.ts          # TypeScript interfaces
├── lib/
│   └── utils.ts          # Utility functions
├── App.tsx               # Router configuration
└── main.tsx              # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Demo Credentials

**User Account:**
- Email: demo@example.com
- Password: demo1234

**Admin Account:**
- Email: admin@promptshop.com
- Password: admin1234

## Routes

| Path | Description |
|------|-------------|
| `/` | Home page with landing sections |
| `/products` | Product catalog with search/filter |
| `/products/:id` | Individual product detail page |
| `/bundles` | Bundle offerings |
| `/login` | User login |
| `/signup` | User registration |
| `/checkout` | Checkout flow |
| `/dashboard` | User dashboard |
| `/dashboard/orders` | Order history |
| `/dashboard/library` | Downloaded prompts |
| `/dashboard/settings` | Account settings |
| `/admin` | Admin panel (admin only) |

## Custom Hooks

### `useAuth()`
Provides authentication state and methods:
- `user`, `isAuthenticated`, `isLoading`
- `login()`, `signup()`, `logout()`, `resetPassword()`

### `useCart()`
Manages shopping cart:
- `cart`, `isOpen`
- `addToCart()`, `removeFromCart()`, `clearCart()`
- `applyCoupon()`, `removeCoupon()`
- `toggleCart()`, `openCart()`, `closeCart()`

### `useProducts()`
Product catalog management:
- `prompts`, `categories`, `bundles`
- `filters`, `setFilters()`, `resetFilters()`
- `getPromptById()`, `searchPrompts()`

### `useDebounce(value, delay)`
Debounces a value for search inputs.

### `useLocalStorage(key, initialValue)`
Syncs state with localStorage.

## Available Coupon Codes

- `SAVE20` - 20% off (min. $20 purchase)
- `WELCOME10` - 10% off
- `FLAT15` - $15 off (min. $50 purchase)

## Integration Points

### Payment (Stripe)
The checkout page is ready for Stripe integration. Add your Stripe public key and create a checkout session endpoint.

```typescript
// In CheckoutPage.tsx
import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const session = await createCheckoutSession(cart);
stripe.redirectToCheckout({ sessionId: session.id });
```

### Email Service
Newsletter signup is ready for integration with:
- Mailchimp
- ConvertKit
- SendGrid
- EmailOctopus

### Database
Currently uses mock data in `src/data/prompts.ts`. Ready to connect to:
- Supabase
- Firebase
- PostgreSQL
- MongoDB

## Environment Variables

Create a `.env` file:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_API_URL=https://api.yoursite.com
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # Run all linters
npm run lint:types   # TypeScript check
npm run lint:js      # ESLint
npm run lint:css     # Stylelint
```

## Edge Cases Handled

1. **Empty Cart** - Graceful display with CTA to browse products
2. **Invalid Routes** - Redirects to home page
3. **Unauthenticated Access** - Protected routes redirect to login
4. **Admin Access** - Role-based access control
5. **Invalid Coupons** - Error messages with specific reasons
6. **Session Persistence** - Cart and auth survive page reloads
7. **Responsive Design** - Works on mobile, tablet, desktop
8. **Form Validation** - Real-time validation with Zod schemas

## Architecture Decisions

1. **Context API over Redux** - Simpler for this app size, less boilerplate
2. **LocalStorage for Auth** - Demo purposes; production should use HttpOnly cookies
3. **Mock Data** - Easy to replace with API calls
4. **Component Colocation** - Related components grouped in folders
5. **Custom Hooks** - Reusable logic extracted for maintainability

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

MIT License - feel free to use for personal or commercial projects.

---

Built with React + TypeScript + Tailwind CSS
