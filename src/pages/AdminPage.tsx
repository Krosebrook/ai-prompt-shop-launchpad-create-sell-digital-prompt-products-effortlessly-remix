import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth, useProducts } from '@/hooks';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock admin stats
const adminStats = {
  totalRevenue: 12495.0,
  totalOrders: 156,
  totalUsers: 89,
  totalPrompts: 125,
  revenueChange: 12.5,
  ordersChange: 8.2,
};

// Mock recent orders for admin
const adminOrders = [
  {
    id: 'ORD-156',
    customer: 'john@example.com',
    amount: 49.99,
    status: 'completed',
    date: '2024-12-15',
  },
  {
    id: 'ORD-155',
    customer: 'sarah@example.com',
    amount: 99.0,
    status: 'completed',
    date: '2024-12-15',
  },
  {
    id: 'ORD-154',
    customer: 'mike@example.com',
    amount: 29.99,
    status: 'processing',
    date: '2024-12-14',
  },
  {
    id: 'ORD-153',
    customer: 'anna@example.com',
    amount: 79.99,
    status: 'completed',
    date: '2024-12-14',
  },
  {
    id: 'ORD-152',
    customer: 'david@example.com',
    amount: 14.99,
    status: 'completed',
    date: '2024-12-13',
  },
];

function AdminOverview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">
                  ${adminStats.totalRevenue.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
              <TrendingUp className="h-4 w-4" />
              <span>+{adminStats.revenueChange}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{adminStats.totalOrders}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10">
                <ShoppingBag className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
              <TrendingUp className="h-4 w-4" />
              <span>+{adminStats.ordersChange}% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{adminStats.totalUsers}</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Prompts</p>
                <p className="text-2xl font-bold">{adminStats.totalPrompts}</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10">
                <Package className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>${order.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={cn(
                        order.status === 'completed'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      )}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminPrompts() {
  const { prompts, categories } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrompts = prompts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Prompt
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Prompt</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-muted-foreground text-center py-8">
                Prompt creation form would go here. This is a demo interface.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrompts.map((prompt) => (
                <TableRow key={prompt.id}>
                  <TableCell className="font-medium max-w-[200px] truncate">
                    {prompt.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{prompt.category.name}</Badge>
                  </TableCell>
                  <TableCell>${prompt.price.toFixed(2)}</TableCell>
                  <TableCell>{prompt.downloadCount}</TableCell>
                  <TableCell>{prompt.rating.toFixed(1)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminOrders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search orders..." className="pl-10" />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>3 items</TableCell>
                  <TableCell>${order.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={cn(
                        order.status === 'completed'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      )}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function AdminUsers() {
  const mockUsers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', orders: 5, spent: 249.95, joinDate: '2024-10-15' },
    { id: '2', name: 'Sarah Smith', email: 'sarah@example.com', orders: 3, spent: 149.97, joinDate: '2024-11-02' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', orders: 8, spent: 399.92, joinDate: '2024-09-20' },
    { id: '4', name: 'Anna Williams', email: 'anna@example.com', orders: 2, spent: 59.98, joinDate: '2024-12-01' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-10" />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell>${user.spent.toFixed(2)}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function AdminPage() {
  const location = useLocation();
  const { isAuthenticated, user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  // Redirect if not authenticated or not admin
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="container px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your prompts, orders, and users.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview" className="gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="prompts" className="gap-2">
            <Package className="h-4 w-4" />
            Prompts
          </TabsTrigger>
          <TabsTrigger value="orders" className="gap-2">
            <ShoppingBag className="h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <AdminOverview />
        </TabsContent>

        <TabsContent value="prompts">
          <AdminPrompts />
        </TabsContent>

        <TabsContent value="orders">
          <AdminOrders />
        </TabsContent>

        <TabsContent value="users">
          <AdminUsers />
        </TabsContent>
      </Tabs>
    </div>
  );
}
