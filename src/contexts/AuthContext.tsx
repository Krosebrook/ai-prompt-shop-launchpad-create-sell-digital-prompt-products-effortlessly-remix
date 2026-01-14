import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { User, AuthState, LoginFormData, SignupFormData } from '@/types';
import toast from 'react-hot-toast';

// Auth Context Types
interface AuthContextType extends AuthState {
  login: (data: LoginFormData) => Promise<boolean>;
  signup: (data: SignupFormData) => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  updateProfile: (data: Partial<User>) => Promise<boolean>;
  clearError: () => void;
}

// Auth Actions
type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: User }
  | { type: 'AUTH_FAILURE'; payload: string }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'CLEAR_ERROR' }
  | { type: 'UPDATE_USER'; payload: Partial<User> };

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth Reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };
    default:
      return state;
  }
}

// Storage keys
const AUTH_STORAGE_KEY = 'promptshop_auth';
const USER_STORAGE_KEY = 'promptshop_user';

// Mock users database (in production, this would be Supabase/Firebase)
const mockUsers: Map<string, { user: User; password: string }> = new Map();

// Initialize with a demo user
mockUsers.set('demo@example.com', {
  user: {
    id: 'user-demo',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  password: 'demo1234',
});

mockUsers.set('admin@promptshop.com', {
  user: {
    id: 'user-admin',
    email: 'admin@promptshop.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  password: 'admin1234',
});

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
        const storedUser = localStorage.getItem(USER_STORAGE_KEY);

        if (storedAuth === 'true' && storedUser) {
          const user = JSON.parse(storedUser) as User;
          dispatch({ type: 'AUTH_SUCCESS', payload: user });
        } else {
          dispatch({ type: 'AUTH_LOGOUT' });
        }
      } catch {
        dispatch({ type: 'AUTH_LOGOUT' });
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = useCallback(async (data: LoginFormData): Promise<boolean> => {
    dispatch({ type: 'AUTH_START' });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userRecord = mockUsers.get(data.email.toLowerCase());

    if (!userRecord) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'No account found with this email' });
      toast.error('No account found with this email');
      return false;
    }

    if (userRecord.password !== data.password) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'Incorrect password' });
      toast.error('Incorrect password');
      return false;
    }

    // Success
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userRecord.user));

    dispatch({ type: 'AUTH_SUCCESS', payload: userRecord.user });
    toast.success(`Welcome back, ${userRecord.user.name}!`);
    return true;
  }, []);

  // Signup function
  const signup = useCallback(async (data: SignupFormData): Promise<boolean> => {
    dispatch({ type: 'AUTH_START' });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists
    if (mockUsers.has(data.email.toLowerCase())) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'An account with this email already exists' });
      toast.error('An account with this email already exists');
      return false;
    }

    // Validate password match
    if (data.password !== data.confirmPassword) {
      dispatch({ type: 'AUTH_FAILURE', payload: 'Passwords do not match' });
      toast.error('Passwords do not match');
      return false;
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: data.email.toLowerCase(),
      name: data.name,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Store in mock database
    mockUsers.set(data.email.toLowerCase(), {
      user: newUser,
      password: data.password,
    });

    // Store in localStorage
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));

    dispatch({ type: 'AUTH_SUCCESS', payload: newUser });
    toast.success('Account created successfully!');
    return true;
  }, []);

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    dispatch({ type: 'AUTH_LOGOUT' });
    toast.success('Logged out successfully');
  }, []);

  // Reset password function
  const resetPassword = useCallback(async (email: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userRecord = mockUsers.get(email.toLowerCase());

    if (!userRecord) {
      toast.error('No account found with this email');
      return false;
    }

    // In production, send actual reset email
    toast.success('Password reset link sent to your email');
    return true;
  }, []);

  // Update profile function
  const updateProfile = useCallback(
    async (data: Partial<User>): Promise<boolean> => {
      if (!state.user) return false;

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const updatedUser = {
        ...state.user,
        ...data,
        updatedAt: new Date(),
      };

      // Update mock database
      const userRecord = mockUsers.get(state.user.email);
      if (userRecord) {
        mockUsers.set(state.user.email, {
          ...userRecord,
          user: updatedUser,
        });
      }

      // Update localStorage
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));

      dispatch({ type: 'UPDATE_USER', payload: data });
      toast.success('Profile updated successfully');
      return true;
    },
    [state.user]
  );

  // Clear error
  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  const value: AuthContextType = {
    ...state,
    login,
    signup,
    logout,
    resetPassword,
    updateProfile,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Higher-order component for protected routes
export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredRole?: 'user' | 'admin'
) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, user, isLoading } = useAuth();

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      );
    }

    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = '/login';
      return null;
    }

    if (requiredRole && user?.role !== requiredRole) {
      // Redirect to dashboard if role doesn't match
      window.location.href = '/dashboard';
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
