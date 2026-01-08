import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useProducts, useCart, useDebounce } from '@/hooks';
import {
  Search,
  Star,
  Download,
  ShoppingCart,
  Check,
  Filter,
  X,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProductsPage() {
  const { categories, filters, setFilters, paginatedPrompts, resetFilters, setCurrentPage } = useProducts();
  const { addToCart, isInCart } = useCart();
  const [searchInput, setSearchInput] = useState(filters.search || '');

  // Debounce search input
  const debouncedSearch = useDebounce(searchInput, 300);

  // Update filters when debounced search changes
  if (debouncedSearch !== filters.search) {
    setFilters({ ...filters, search: debouncedSearch });
  }

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      setFilters({ ...filters, category: undefined });
    } else {
      setFilters({ ...filters, category: categoryId });
    }
  };

  const handleSortChange = (sortBy: string) => {
    setFilters({
      ...filters,
      sortBy: sortBy as typeof filters.sortBy,
    });
  };

  const hasActiveFilters = filters.category || filters.search || filters.minPrice || filters.maxPrice;

  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AI Prompt Library
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Browse our collection of professionally crafted AI prompts. Each prompt is
          designed to help you create better content, faster.
        </p>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search prompts..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <Select
          value={filters.category || 'all'}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name} ({category.promptCount})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select
          value={filters.sortBy || 'popular'}
          onValueChange={handleSortChange}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        {/* Reset Filters */}
        {hasActiveFilters && (
          <Button variant="ghost" onClick={resetFilters}>
            Clear Filters
          </Button>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {paginatedPrompts.data.length} of {paginatedPrompts.total} prompts
        </p>
      </div>

      {/* Products Grid */}
      {paginatedPrompts.data.length === 0 ? (
        <div className="text-center py-16">
          <Sparkles className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-xl font-medium mb-2">No prompts found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search or filters
          </p>
          <Button onClick={resetFilters}>Clear Filters</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPrompts.data.map((prompt) => {
            const inCart = isInCart(prompt.id);

            return (
              <Card
                key={prompt.id}
                className="group flex flex-col overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="mb-2">
                        {prompt.category.name}
                      </Badge>
                      <Link
                        to={`/products/${prompt.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        <h3 className="font-semibold text-lg line-clamp-2">
                          {prompt.title}
                        </h3>
                      </Link>
                    </div>
                    {prompt.isFeatured && (
                      <Badge className="shrink-0 bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {prompt.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span>{prompt.rating.toFixed(1)}</span>
                      <span>({prompt.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{prompt.downloadCount}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {prompt.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {prompt.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{prompt.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        ${prompt.price.toFixed(2)}
                      </span>
                      {prompt.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${prompt.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <Button
                      size="sm"
                      variant={inCart ? 'secondary' : 'default'}
                      className={cn(
                        'transition-all',
                        inCart && 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                      )}
                      onClick={() => !inCart && addToCart(prompt)}
                      disabled={inCart}
                    >
                      {inCart ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          In Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </>
                      )}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {paginatedPrompts.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: paginatedPrompts.totalPages }, (_, i) => i + 1).map(
            (page) => (
              <Button
                key={page}
                variant={page === paginatedPrompts.page ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
}
