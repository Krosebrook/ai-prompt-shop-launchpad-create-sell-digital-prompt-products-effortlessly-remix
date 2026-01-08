import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { CartDrawer } from './CartDrawer';
import { Footer } from '@/components/Footer';

interface LayoutProps {
  showFooter?: boolean;
}

export function Layout({ showFooter = true }: LayoutProps) {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {showFooter && <Footer />}
      <CartDrawer />
    </div>
  );
}

export function MinimalLayout() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-1">
        <Outlet />
      </main>
      <CartDrawer />
    </div>
  );
}
