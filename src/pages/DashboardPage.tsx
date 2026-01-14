import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks';
import {
  LayoutDashboard,
  ShoppingBag,
  Download,
  Settings,
  CreditCard,
  Sparkles,
  ArrowRight,
  Package,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Dashboard stats (mock data)
const stats = {
  totalOrders: 5,
  totalSpent: 149.95,
  promptsOwned: 12,
  downloadCount: 47,
};

// Recent orders (mock data)
const recentOrders = [
  {
    id: 'ORD-001',
    date: '2024-12-15',
    total: 29.99,
    items: 3,
    status: 'completed',
  },
  {
    id: 'ORD-002',
    date: '2024-12-10',
    total: 49.99,
    items: 5,
    status: 'completed',
  },
  {
    id: 'ORD-003',
    date: '2024-12-05',
    total: 19.99,
    items: 2,
    status: 'completed',
  },
];

// Purchased prompts (mock data)
const purchasedPrompts = [
  {
    id: 'prompt-001',
    title: 'Ultimate Blog Post Generator',
    category: 'Content Creation',
    purchaseDate: '2024-12-15',
  },
  {
    id: 'prompt-002',
    title: 'Social Media Content Calendar',
    category: 'Content Creation',
    purchaseDate: '2024-12-15',
  },
  {
    id: 'prompt-004',
    title: 'Business Model Canvas Generator',
    category: 'Business Strategy',
    purchaseDate: '2024-12-10',
  },
];

function DashboardHome() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground">
          Here's an overview of your prompt library and purchases.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{stats.totalOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-500/10">
                <CreditCard className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">${stats.totalSpent.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Package className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prompts Owned</p>
                <p className="text-2xl font-bold">{stats.promptsOwned}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Download className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Downloads</p>
                <p className="text-2xl font-bold">{stats.downloadCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/products">
              <Sparkles className="h-4 w-4 mr-2" />
              Browse Prompts
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard/library">
              <Download className="h-4 w-4 mr-2" />
              My Library
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard/orders">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order History
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Orders</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/orders">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {recentOrders.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ShoppingBag className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No orders yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium text-sm">{order.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {order.items} items • {order.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                      <p className="text-xs text-green-500 capitalize">
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* My Prompts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">My Prompts</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/library">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {purchasedPrompts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Sparkles className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No prompts purchased yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {purchasedPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium text-sm">{prompt.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {prompt.category}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DashboardOrders() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Order History</h1>
        <p className="text-muted-foreground">View and manage your past orders.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.items} items • {order.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-500">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DashboardLibrary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Library</h1>
        <p className="text-muted-foreground">
          Access and download your purchased prompts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {purchasedPrompts.map((prompt) => (
          <Card key={prompt.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {prompt.purchaseDate}
                </span>
              </div>
              <h3 className="font-medium mb-1">{prompt.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {prompt.category}
              </p>
              <Button className="w-full" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function DashboardSettings() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <p className="mt-1 text-muted-foreground">{user?.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="mt-1 text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <Button variant="outline">Edit Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline">Change Password</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function DashboardPage() {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Overview', exact: true },
    { href: '/dashboard/orders', icon: ShoppingBag, label: 'Orders' },
    { href: '/dashboard/library', icon: Download, label: 'My Library' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  // Determine which component to render based on path
  const renderContent = () => {
    switch (location.pathname) {
      case '/dashboard/orders':
        return <DashboardOrders />;
      case '/dashboard/library':
        return <DashboardLibrary />;
      case '/dashboard/settings':
        return <DashboardSettings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="container px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <nav className="space-y-1 sticky top-24">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive(item.href, item.exact)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
