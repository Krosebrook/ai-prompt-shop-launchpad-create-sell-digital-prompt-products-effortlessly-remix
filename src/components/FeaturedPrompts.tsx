import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProducts, useCart } from '@/hooks';
import { Star, ShoppingCart, Check, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FeaturedPrompts() {
  const { featuredPrompts } = useProducts();
  const { addToCart, isInCart, openCart } = useCart();

  // Show only 4 featured prompts on home page
  const displayedPrompts = featuredPrompts.slice(0, 4);

  const handleAddToCart = (prompt: typeof displayedPrompts[0]) => {
    if (!isInCart(prompt.id)) {
      addToCart(prompt);
    }
    openCart();
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Top Picks
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Prompts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular AI prompts, trusted by thousands of creators,
            coaches, and entrepreneurs.
          </p>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {displayedPrompts.map((prompt) => {
            const inCart = isInCart(prompt.id);

            return (
              <Card
                key={prompt.id}
                className="group flex flex-col overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="flex-1 p-5">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {prompt.category.name}
                  </Badge>

                  <Link to={`/products/${prompt.id}`}>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {prompt.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {prompt.description}
                  </p>

                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{prompt.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground">
                      ({prompt.reviewCount})
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">
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
                      onClick={() => handleAddToCart(prompt)}
                    >
                      {inCart ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <ShoppingCart className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/products">
              View All Prompts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
