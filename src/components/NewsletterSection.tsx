import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, CheckCircle2, Loader2, Sparkles, Gift } from 'lucide-react';
import toast from 'react-hot-toast';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log('Newsletter signup:', data.email);

    setIsSubmitting(false);
    setIsSubscribed(true);
    reset();
    toast.success('Welcome! Check your inbox for your free prompt.');
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-purple-500/5 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Gift className="h-4 w-4" />
                Free Prompt Included
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get AI Tips & Free Prompts
              </h2>

              <p className="text-muted-foreground mb-6">
                Join 5,000+ creators getting weekly AI tips, prompt techniques,
                and exclusive freebies. Unsubscribe anytime.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Weekly AI tips and strategies</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Free prompt templates</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Early access to new releases</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {isSubscribed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">You're in!</h3>
                  <p className="text-muted-foreground">
                    Check your inbox for a welcome email with your free prompt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...register('email')}
                      className={`pl-10 h-12 ${
                        errors.email ? 'border-destructive' : ''
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Get Free Prompt
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By subscribing, you agree to receive marketing emails. No spam,
                    unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

// Inline Newsletter Form (for footer or sidebar)
export function NewsletterInline() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
    toast.success('Subscribed successfully!');
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center gap-2 text-green-500">
        <CheckCircle2 className="h-4 w-4" />
        <span className="text-sm">Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'border-destructive' : ''}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            'Subscribe'
          )}
        </Button>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </form>
  );
}
