// Re-export all custom hooks for easy importing
export { useAuth } from '@/contexts/AuthContext';
export { useCart } from '@/contexts/CartContext';
export { useProducts } from '@/contexts/ProductContext';
export { useLocalStorage, useSessionStorage } from './useLocalStorage';
export { useDebounce, useDebouncedCallback, useThrottle } from './useDebounce';
export { useScrollLock, useScrollLockControl } from './useScrollLock';
export { useClickOutside, useClickOutsideMultiple } from './useClickOutside';

// Re-export existing hooks
export { useIsMobile } from './use-mobile';
export { useToast } from './use-toast';
