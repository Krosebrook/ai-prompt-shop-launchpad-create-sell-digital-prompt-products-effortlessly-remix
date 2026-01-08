import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart, useAuth } from '@/hooks';
import {
  ArrowLeft,
  CreditCard,
  Shield,
  Lock,
  CheckCircle2,
  Loader2,
  Tag,
  X,
  Sparkles,
} from 'lucide-react';
import toast from 'react-hot-toast';

const checkoutSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  name: z.string().min(2, 'Name is required'),
  paymentMethod: z.enum(['card', 'paypal']),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart, applyCoupon, removeCoupon } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: user?.email || '',
      name: user?.name || '',
      paymentMethod: 'card',
    },
  });

  const paymentMethod = watch('paymentMethod');

  // Redirect if cart is empty
  if (cart.items.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <Sparkles className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">
          Add some prompts to your cart before checking out.
        </p>
        <Button asChild>
          <Link to="/products">Browse Prompts</Link>
        </Button>
      </div>
    );
  }

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) return;
    setIsApplyingCoupon(true);
    await applyCoupon(couponInput);
    setIsApplyingCoupon(false);
    setCouponInput('');
  };

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In production, this would integrate with Stripe
    // const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY);
    // const session = await createCheckoutSession(cart, data);
    // stripe.redirectToCheckout({ sessionId: session.id });

    toast.success('Order placed successfully!');
    clearCart();
    navigate('/dashboard/orders', {
      state: { orderComplete: true, orderDetails: { ...data, cart } },
    });

    setIsProcessing(false);
  };

  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
        className="mb-6 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register('email')}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Your purchase receipt will be sent to this email
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name')}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {!isAuthenticated && (
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>{' '}
                    for faster checkout.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) =>
                    setValue('paymentMethod', value as 'card' | 'paypal')
                  }
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer">
                    <RadioGroupItem value="card" id="card" />
                    <Label
                      htmlFor="card"
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <CreditCard className="h-5 w-5" />
                      Credit / Debit Card
                    </Label>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-muted rounded text-[8px] flex items-center justify-center font-bold">
                        VISA
                      </div>
                      <div className="w-8 h-5 bg-muted rounded text-[8px] flex items-center justify-center font-bold">
                        MC
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label
                      htmlFor="paypal"
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <div className="w-5 h-5 bg-blue-500 rounded text-[6px] text-white flex items-center justify-center font-bold">
                        PP
                      </div>
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="mt-4 p-4 border rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground text-center">
                      You'll be redirected to our secure payment provider to complete your purchase.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
              <Shield className="h-5 w-5 text-primary shrink-0" />
              <div className="text-sm">
                <p className="font-medium">Secure Checkout</p>
                <p className="text-muted-foreground">
                  Your payment information is encrypted and secure.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-5 w-5" />
                  Pay ${cart.total.toFixed(2)}
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-1 lg:order-2">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Cart Items */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center shrink-0">
                      <Sparkles className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-1">
                        {item.prompt.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.prompt.category.name}
                      </p>
                    </div>
                    <p className="font-medium text-sm">
                      ${item.prompt.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Coupon */}
              {cart.couponCode ? (
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{cart.couponCode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary">
                      -${cart.discount.toFixed(2)}
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Coupon code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyCoupon}
                    disabled={isApplyingCoupon || !couponInput.trim()}
                  >
                    Apply
                  </Button>
                </div>
              )}

              <Separator />

              {/* Totals */}
              <div className="space-y-2">
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

              {/* What You Get */}
              <div className="pt-4 space-y-2">
                <p className="text-sm font-medium">What you'll get:</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Instant download access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Lifetime updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Commercial use license</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
