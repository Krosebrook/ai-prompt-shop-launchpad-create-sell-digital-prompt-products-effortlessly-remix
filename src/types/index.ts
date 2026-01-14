// Core type definitions for AI Prompt Shop

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Product/Prompt types
export interface PromptCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  promptCount: number;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: PromptCategory;
  categoryId: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  isFeatured: boolean;
  isBundle: boolean;
  bundleItems?: string[];
  downloadCount: number;
  rating: number;
  reviewCount: number;
  previewContent?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PromptBundle {
  id: string;
  title: string;
  description: string;
  prompts: Prompt[];
  price: number;
  originalPrice: number;
  savings: number;
  isFeatured: boolean;
}

// Cart types
export interface CartItem {
  id: string;
  prompt: Prompt;
  quantity: number;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  couponCode?: string;
}

export interface CartState {
  cart: Cart;
  isLoading: boolean;
  isOpen: boolean;
}

// Order types
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentIntentId?: string;
  couponCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  promptId: string;
  prompt: Prompt;
  price: number;
  downloadUrl?: string;
  downloadCount: number;
  maxDownloads: number;
}

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'refunded'
  | 'cancelled';

// Review types
export interface Review {
  id: string;
  userId: string;
  user: User;
  promptId: string;
  rating: number;
  title: string;
  content: string;
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  createdAt: Date;
}

// Newsletter/Lead types
export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  source: string;
  isActive: boolean;
  subscribedAt: Date;
  unsubscribedAt?: Date;
}

// Coupon types
export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minPurchase?: number;
  maxUses?: number;
  usedCount: number;
  expiresAt?: Date;
  isActive: boolean;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Filter types
export interface PromptFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'popular' | 'rating';
  search?: string;
  isFeatured?: boolean;
  isBundle?: boolean;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface CheckoutFormData {
  email: string;
  name: string;
  couponCode?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalOrders: number;
  totalSpent: number;
  promptsOwned: number;
  downloadCount: number;
}

// Admin Stats
export interface AdminStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  totalPrompts: number;
  recentOrders: Order[];
  topPrompts: Prompt[];
  salesByDay: { date: string; amount: number }[];
}
