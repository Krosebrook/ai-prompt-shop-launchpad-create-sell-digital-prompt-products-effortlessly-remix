import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProducts, useCart } from '@/hooks';
import {
  Package,
  Check,
  ShoppingCart,
  Star,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function BundlesPage() {
  const { bundles } = useProducts();
  const { addToCart, isInCart } = useCart();

  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          Save up to 50%
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Prompt Bundles
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get more value with our curated prompt bundles. Each bundle is carefully
          crafted to help you achieve specific goals.
        </p>
      </div>

      {/* Bundles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {bundles.map((bundle, index) => {
          const isUltimate = bundle.id === 'bundle-004';

          return (
            <Card
              key={bundle.id}
              className={cn(
                'relative overflow-hidden transition-all hover:border-primary/50',
                isUltimate && 'lg:col-span-2 border-primary/30 bg-primary/5'
              )}
            >
              {bundle.isFeatured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Best Value
                  </Badge>
                </div>
              )}

              <CardHeader className={cn('pb-4', isUltimate && 'md:pb-6')}>
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      'p-3 rounded-lg',
                      isUltimate ? 'bg-primary/20' : 'bg-muted'
                    )}
                  >
                    <Package
                      className={cn(
                        'h-6 w-6',
                        isUltimate ? 'text-primary' : 'text-muted-foreground'
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className={cn('font-bold', isUltimate ? 'text-2xl' : 'text-xl')}>
                      {bundle.title}
                    </h2>
                    <p className="text-muted-foreground mt-1">{bundle.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className={cn('space-y-4', isUltimate && 'md:space-y-6')}>
                {/* Included Prompts */}
                <div>
                  <p className="text-sm font-medium mb-3">
                    Includes {bundle.prompts.length} prompts:
                  </p>
                  <div className={cn('space-y-2', isUltimate && 'md:grid md:grid-cols-2 md:gap-x-4 md:space-y-0')}>
                    {bundle.prompts.slice(0, isUltimate ? 6 : 4).map((prompt) => (
                      <div key={prompt.id} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm truncate">{prompt.title}</span>
                      </div>
                    ))}
                    {bundle.prompts.length > (isUltimate ? 6 : 4) && (
                      <div className="flex items-center gap-2 text-primary">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          +{bundle.prompts.length - (isUltimate ? 6 : 4)} more prompts
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-3">
                  <span className={cn('font-bold', isUltimate ? 'text-4xl' : 'text-3xl')}>
                    ${bundle.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${bundle.originalPrice.toFixed(2)}
                  </span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                    Save ${bundle.savings.toFixed(2)}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t">
                <div className="flex gap-3 w-full">
                  <Button
                    className={cn('flex-1', isUltimate && 'h-12 text-lg')}
                    size={isUltimate ? 'lg' : 'default'}
                    onClick={() => {
                      bundle.prompts.forEach((prompt) => {
                        if (!isInCart(prompt.id)) {
                          addToCart(prompt);
                        }
                      });
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add Bundle to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size={isUltimate ? 'lg' : 'default'}
                    asChild
                  >
                    <Link to={`/bundles/${bundle.id}`}>
                      Details
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Why Bundles Section */}
      <div className="text-center py-12 border-t">
        <h2 className="text-2xl font-bold mb-4">Why Buy Bundles?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Complete Systems</h3>
            <p className="text-sm text-muted-foreground">
              Each bundle is designed to work together as a complete system for
              your specific use case.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
              <span className="text-lg font-bold text-green-500">%</span>
            </div>
            <h3 className="font-semibold mb-2">Massive Savings</h3>
            <p className="text-sm text-muted-foreground">
              Save up to 50% compared to buying prompts individually. Better
              value, same quality.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-semibold mb-2">Curated Quality</h3>
            <p className="text-sm text-muted-foreground">
              Hand-picked prompts that complement each other and cover all angles
              of a topic.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-purple-500/10">
          <h3 className="text-xl font-bold mb-2">Need Something Specific?</h3>
          <p className="text-muted-foreground mb-4">
            Browse our full library to find exactly what you need.
          </p>
          <Button asChild>
            <Link to="/products">
              View All Prompts
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
