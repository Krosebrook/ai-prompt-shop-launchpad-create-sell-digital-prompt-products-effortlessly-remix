import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import { ProductProvider } from '@/contexts/ProductContext';
import { Layout, MinimalLayout } from '@/components/layout/Layout';
import {
  HomePage,
  ProductsPage,
  ProductDetailPage,
  BundlesPage,
  LoginPage,
  SignupPage,
  CheckoutPage,
  DashboardPage,
  AdminPage,
} from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <Routes>
              {/* Main layout with navbar and footer */}
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/bundles" element={<BundlesPage />} />
                <Route path="/bundles/:id" element={<BundlesPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Route>

              {/* Dashboard layout (no footer) */}
              <Route element={<Layout showFooter={false} />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/*" element={<DashboardPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/*" element={<AdminPage />} />
              </Route>

              {/* Minimal layout for auth pages */}
              <Route element={<MinimalLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<LoginPage />} />
              </Route>

              {/* 404 - redirect to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
