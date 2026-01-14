import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { Prompt, PromptCategory, PromptBundle, PromptFilters, PaginatedResponse } from '@/types';
import { prompts, categories, bundles, getPromptById, searchPrompts, getPromptsByCategory } from '@/data/prompts';

// Product Context Types
interface ProductContextType {
  // Data
  prompts: Prompt[];
  categories: PromptCategory[];
  bundles: PromptBundle[];
  featuredPrompts: Prompt[];

  // Filters
  filters: PromptFilters;
  setFilters: (filters: PromptFilters) => void;
  resetFilters: () => void;

  // Filtered/searched results
  filteredPrompts: Prompt[];

  // Pagination
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  paginatedPrompts: PaginatedResponse<Prompt>;

  // Actions
  getPromptById: (id: string) => Prompt | undefined;
  getPromptsByCategory: (categoryId: string) => Prompt[];
  searchPrompts: (query: string) => Prompt[];
  getBundleById: (id: string) => PromptBundle | undefined;
  getCategoryBySlug: (slug: string) => PromptCategory | undefined;

  // Loading state
  isLoading: boolean;
}

// Initial filters
const initialFilters: PromptFilters = {
  sortBy: 'popular',
};

// Create context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Product Provider Component
export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFiltersState] = useState<PromptFilters>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [isLoading] = useState(false);

  // Featured prompts
  const featuredPrompts = useMemo(() => {
    return prompts.filter((p) => p.isFeatured);
  }, []);

  // Apply filters to prompts
  const filteredPrompts = useMemo(() => {
    let result = [...prompts];

    // Category filter
    if (filters.category) {
      result = result.filter((p) => p.categoryId === filters.category);
    }

    // Price filters
    if (filters.minPrice !== undefined) {
      result = result.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= filters.maxPrice!);
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      result = result.filter((p) =>
        filters.tags!.some((tag) => p.tags.includes(tag))
      );
    }

    // Search filter
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Featured filter
    if (filters.isFeatured !== undefined) {
      result = result.filter((p) => p.isFeatured === filters.isFeatured);
    }

    // Bundle filter
    if (filters.isBundle !== undefined) {
      result = result.filter((p) => p.isBundle === filters.isBundle);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'popular':
        result.sort((a, b) => b.downloadCount - a.downloadCount);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  // Paginated prompts
  const paginatedPrompts = useMemo((): PaginatedResponse<Prompt> => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredPrompts.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      total: filteredPrompts.length,
      page: currentPage,
      pageSize,
      totalPages: Math.ceil(filteredPrompts.length / pageSize),
    };
  }, [filteredPrompts, currentPage, pageSize]);

  // Set filters and reset to page 1
  const setFilters = useCallback((newFilters: PromptFilters) => {
    setFiltersState(newFilters);
    setCurrentPage(1);
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFiltersState(initialFilters);
    setCurrentPage(1);
  }, []);

  // Get prompt by ID
  const getPromptByIdFn = useCallback((id: string) => {
    return getPromptById(id);
  }, []);

  // Get prompts by category
  const getPromptsByCategoryFn = useCallback((categoryId: string) => {
    return getPromptsByCategory(categoryId);
  }, []);

  // Search prompts
  const searchPromptsFn = useCallback((query: string) => {
    return searchPrompts(query);
  }, []);

  // Get bundle by ID
  const getBundleByIdFn = useCallback((id: string) => {
    return bundles.find((b) => b.id === id);
  }, []);

  // Get category by slug
  const getCategoryBySlugFn = useCallback((slug: string) => {
    return categories.find((c) => c.slug === slug);
  }, []);

  const value: ProductContextType = {
    prompts,
    categories,
    bundles,
    featuredPrompts,
    filters,
    setFilters,
    resetFilters,
    filteredPrompts,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    paginatedPrompts,
    getPromptById: getPromptByIdFn,
    getPromptsByCategory: getPromptsByCategoryFn,
    searchPrompts: searchPromptsFn,
    getBundleById: getBundleByIdFn,
    getCategoryBySlug: getCategoryBySlugFn,
    isLoading,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

// Custom hook to use product context
export function useProducts(): ProductContextType {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
