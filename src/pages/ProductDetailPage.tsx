import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProducts, useCart } from '@/hooks';
import {
  ArrowLeft,
  Star,
  Download,
  ShoppingCart,
  Check,
  Copy,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPromptById, getPromptsByCategory } = useProducts();
  const { addToCart, isInCart, openCart } = useCart();
  const [copied, setCopied] = useState(false);

  const prompt = id ? getPromptById(id) : undefined;
  const inCart = prompt ? isInCart(prompt.id) : false;

  if (!prompt) {
    return (
      <div className="container px-4 py-16 text-center">
        <Sparkles className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Prompt Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The prompt you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/products">Browse All Prompts</Link>
        </Button>
      </div>
    );
  }

  // Get related prompts from same category
  const relatedPrompts = getPromptsByCategory(prompt.categoryId)
    .filter((p) => p.id !== prompt.id)
    .slice(0, 3);

  const handleCopyPreview = () => {
    navigator.clipboard.writeText(prompt.previewContent || prompt.content.slice(0, 200));
    setCopied(true);
    toast.success('Preview copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(prompt);
    openCart();
  };

  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{prompt.category.name}</Badge>
              {prompt.isFeatured && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{prompt.title}</h1>

            <p className="text-lg text-muted-foreground mb-6">
              {prompt.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="font-medium">{prompt.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">
                  ({prompt.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="h-5 w-5" />
                <span>{prompt.downloadCount.toLocaleString()} downloads</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Prompt Preview</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyPreview}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Preview
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                    {prompt.previewContent || prompt.content.slice(0, 500) + '...'}
                  </pre>
                  <p className="text-sm text-muted-foreground mt-4">
                    Purchase to unlock the full prompt with all customization options.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">What You'll Get</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complete, ready-to-use prompt template</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Customization variables for your use case</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Usage tips and best practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Lifetime access and updates</span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Best Used With</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">ChatGPT</Badge>
                      <Badge variant="outline">Claude</Badge>
                      <Badge variant="outline">GPT-4</Badge>
                      <Badge variant="outline">Any LLM</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <Star className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      No reviews yet
                    </h3>
                    <p className="text-muted-foreground">
                      Be the first to review this prompt after purchase!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar - Purchase Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              {/* Price */}
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">
                    ${prompt.price.toFixed(2)}
                  </span>
                  {prompt.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${prompt.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {prompt.originalPrice && (
                  <Badge className="mt-2 bg-green-500/20 text-green-500">
                    Save ${(prompt.originalPrice - prompt.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              <Separator />

              {/* Add to Cart Button */}
              <Button
                className="w-full"
                size="lg"
                onClick={handleAddToCart}
                disabled={inCart}
              >
                {inCart ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>

              {inCart && (
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              )}

              <Separator />

              {/* Benefits */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Instant digital download</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Free updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Commercial use license</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Prompts */}
      {relatedPrompts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPrompts.map((relatedPrompt) => (
              <Card key={relatedPrompt.id} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <Link to={`/products/${relatedPrompt.id}`}>
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                      {relatedPrompt.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {relatedPrompt.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">${relatedPrompt.price.toFixed(2)}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addToCart(relatedPrompt)}
                      disabled={isInCart(relatedPrompt.id)}
                    >
                      {isInCart(relatedPrompt.id) ? 'In Cart' : 'Add'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
