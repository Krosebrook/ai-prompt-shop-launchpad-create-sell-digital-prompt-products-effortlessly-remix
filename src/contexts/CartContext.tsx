import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { Cart, CartItem, CartState, Prompt, Coupon } from '@/types';
import toast from 'react-hot-toast';

// Cart Context Types
interface CartContextType extends CartState {
  addToCart: (prompt: Prompt) => void;
  removeFromCart: (promptId: string) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => Promise<boolean>;
  removeCoupon: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getItemCount: () => number;
  isInCart: (promptId: string) => boolean;
}

// Cart Actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: Prompt }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_COUPON'; payload: { code: string; discount: number } }
  | { type: 'REMOVE_COUPON' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: Cart };

// Initial cart state
const initialCart: Cart = {
  items: [],
  subtotal: 0,
  discount: 0,
  total: 0,
};

const initialState: CartState = {
  cart: initialCart,
  isLoading: false,
  isOpen: false,
};

// Storage key
const CART_STORAGE_KEY = 'promptshop_cart';

// Mock coupons database
const coupons: Map<string, Coupon> = new Map([
  [
    'SAVE20',
    {
      id: 'coupon-1',
      code: 'SAVE20',
      type: 'percentage',
      value: 20,
      minPurchase: 20,
      maxUses: 100,
      usedCount: 45,
      isActive: true,
    },
  ],
  [
    'WELCOME10',
    {
      id: 'coupon-2',
      code: 'WELCOME10',
      type: 'percentage',
      value: 10,
      isActive: true,
      usedCount: 0,
    },
  ],
  [
    'FLAT15',
    {
      id: 'coupon-3',
      code: 'FLAT15',
      type: 'fixed',
      value: 15,
      minPurchase: 50,
      isActive: true,
      usedCount: 0,
    },
  ],
]);

// Calculate cart totals
function calculateTotals(items: CartItem[], discountPercent: number = 0, fixedDiscount: number = 0): { subtotal: number; discount: number; total: number } {
  const subtotal = items.reduce((sum, item) => sum + item.prompt.price * item.quantity, 0);
  const percentDiscount = subtotal * (discountPercent / 100);
  const totalDiscount = percentDiscount + fixedDiscount;
  const total = Math.max(0, subtotal - totalDiscount);

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    discount: Math.round(totalDiscount * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}

// Cart Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.cart.items.findIndex(
        (item) => item.prompt.id === action.payload.id
      );

      let newItems: CartItem[];

      if (existingItemIndex > -1) {
        // Item already in cart - don't add duplicate for digital products
        return state;
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `cart-item-${Date.now()}`,
          prompt: action.payload,
          quantity: 1,
          addedAt: new Date(),
        };
        newItems = [...state.cart.items, newItem];
      }

      const { subtotal, discount, total } = calculateTotals(newItems);

      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems,
          subtotal,
          discount: state.cart.couponCode ? discount : 0,
          total: state.cart.couponCode ? total : subtotal,
        },
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.cart.items.filter((item) => item.prompt.id !== action.payload);
      const { subtotal, discount, total } = calculateTotals(newItems);

      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems,
          subtotal,
          discount: state.cart.couponCode ? discount : 0,
          total: state.cart.couponCode ? total : subtotal,
        },
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: initialCart,
      };

    case 'APPLY_COUPON': {
      const { subtotal } = calculateTotals(state.cart.items);
      const couponData = coupons.get(action.payload.code.toUpperCase());

      let discountAmount = 0;
      if (couponData) {
        if (couponData.type === 'percentage') {
          discountAmount = subtotal * (couponData.value / 100);
        } else {
          discountAmount = couponData.value;
        }
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          couponCode: action.payload.code,
          discount: Math.round(discountAmount * 100) / 100,
          total: Math.round((subtotal - discountAmount) * 100) / 100,
        },
      };
    }

    case 'REMOVE_COUPON':
      return {
        ...state,
        cart: {
          ...state.cart,
          couponCode: undefined,
          discount: 0,
          total: state.cart.subtotal,
        },
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };

    case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        const cart = JSON.parse(storedCart) as Cart;
        dispatch({ type: 'LOAD_CART', payload: cart });
      }
    } catch {
      // Invalid stored cart, ignore
    }
  }, []);

  // Persist cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  }, [state.cart]);

  // Add item to cart
  const addToCart = useCallback((prompt: Prompt) => {
    const isAlreadyInCart = state.cart.items.some((item) => item.prompt.id === prompt.id);

    if (isAlreadyInCart) {
      toast.error('This prompt is already in your cart');
      return;
    }

    dispatch({ type: 'ADD_ITEM', payload: prompt });
    toast.success(`${prompt.title} added to cart`);
  }, [state.cart.items]);

  // Remove item from cart
  const removeFromCart = useCallback((promptId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: promptId });
    toast.success('Item removed from cart');
  }, []);

  // Clear cart
  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  // Apply coupon
  const applyCoupon = useCallback(async (code: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const coupon = coupons.get(code.toUpperCase());

    if (!coupon) {
      toast.error('Invalid coupon code');
      return false;
    }

    if (!coupon.isActive) {
      toast.error('This coupon is no longer active');
      return false;
    }

    if (coupon.minPurchase && state.cart.subtotal < coupon.minPurchase) {
      toast.error(`Minimum purchase of $${coupon.minPurchase} required for this coupon`);
      return false;
    }

    if (coupon.expiresAt && new Date(coupon.expiresAt) < new Date()) {
      toast.error('This coupon has expired');
      return false;
    }

    dispatch({
      type: 'APPLY_COUPON',
      payload: { code: coupon.code, discount: coupon.value },
    });

    toast.success(`Coupon applied! You saved ${coupon.type === 'percentage' ? `${coupon.value}%` : `$${coupon.value}`}`);
    return true;
  }, [state.cart.subtotal]);

  // Remove coupon
  const removeCoupon = useCallback(() => {
    dispatch({ type: 'REMOVE_COUPON' });
    toast.success('Coupon removed');
  }, []);

  // Toggle cart drawer
  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' });
  }, []);

  // Open cart drawer
  const openCart = useCallback(() => {
    dispatch({ type: 'OPEN_CART' });
  }, []);

  // Close cart drawer
  const closeCart = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' });
  }, []);

  // Get item count
  const getItemCount = useCallback(() => {
    return state.cart.items.reduce((count, item) => count + item.quantity, 0);
  }, [state.cart.items]);

  // Check if item is in cart
  const isInCart = useCallback(
    (promptId: string) => {
      return state.cart.items.some((item) => item.prompt.id === promptId);
    },
    [state.cart.items]
  );

  const value: CartContextType = {
    ...state,
    addToCart,
    removeFromCart,
    clearCart,
    applyCoupon,
    removeCoupon,
    toggleCart,
    openCart,
    closeCart,
    getItemCount,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook to use cart context
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
