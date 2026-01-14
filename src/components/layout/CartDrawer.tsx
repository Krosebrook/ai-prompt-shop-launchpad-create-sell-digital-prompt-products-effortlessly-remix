import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks';
import { Trash2, ShoppingBag, Tag, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function CartDrawer() {
  const navigate = useNavigate();
  const {
    cart,
    isOpen,
    closeCart,
    removeFromCart,
    clearCart,
    applyCoupon,
    removeCoupon,
  } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    setIsApplyingCoupon(true);
    await applyCoupon(couponCode);
    setIsApplyingCoupon(false);
    setCouponCode('');
  };

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({cart.items.length})
          </SheetTitle>
        </SheetHeader>

        {cart.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">
              Add some prompts to get started
            </p>
            <Button onClick={closeCart} asChild>
              <Link to="/products">Browse Prompts</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-lg bg-muted/50"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {item.prompt.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.prompt.category.name}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-semibold">
                          ${item.prompt.price.toFixed(2)}
                        </span>
                        {item.prompt.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            ${item.prompt.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.prompt.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Coupon Section */}
            <div className="py-4 border-t">
              {cart.couponCode ? (
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{cart.couponCode}</span>
                    <span className="text-sm text-primary">
                      -${cart.discount.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={removeCoupon}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyCoupon}
                    disabled={isApplyingCoupon || !couponCode.trim()}
                  >
                    Apply
                  </Button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="py-4 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>
              {cart.discount > 0 && (
                <div className="flex justify-between text-sm text-primary">
                  <span>Discount</span>
                  <span>-${cart.discount.toFixed(2)}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Footer Actions */}
            <SheetFooter className="flex-col gap-2 sm:flex-col">
              <Button
                className="w-full"
                size="lg"
                onClick={handleCheckout}
              >
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-2 w-full">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={closeCart}
                  asChild
                >
                  <Link to="/products">Continue Shopping</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
