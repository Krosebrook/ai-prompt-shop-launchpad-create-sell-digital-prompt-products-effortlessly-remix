import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function PricingSection() {
  const benefits = [
    "Launch a digital product without starting from zero",
    "Use prompts for your own content, clients, and systems",
    "Turn them into your own bundles, kits, or memberships",
    "Keep 100% of the revenue from your own sales",
    "Grow at your pace—no subscriptions, no inventory",
  ];

  const included = [
    "125+ Pre-Written AI Prompt Systems",
    "Product & Sales Page Templates",
    "AI Training Tutorials",
    "Licensing & Usage Guides",
    "Private Community Access",
    "Lifetime Updates",
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-purple-500/5 border-primary/20">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Complete Launch Kit
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The AI Prompt Shop Launch Kit
            </h2>
            <div className="inline-block">
              <div className="flex items-baseline justify-center gap-2">
                <p className="text-5xl font-bold text-primary">$99</p>
                <p className="text-lg text-muted-foreground line-through">$199</p>
              </div>
              <p className="text-muted-foreground mt-1">One-Time Payment • Save 50%</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-4">What You Get:</h3>
              <div className="space-y-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">You Can:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Button size="lg" className="w-full md:w-auto text-lg px-12 py-6 h-auto" asChild>
              <Link to="/bundles">
                Get the Complete Kit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              30-day money-back guarantee. No questions asked.
            </p>
          </div>

          {/* Or buy individual */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Or browse individual prompts starting at $7.99
            </p>
            <Button variant="outline" asChild>
              <Link to="/products">
                Browse Individual Prompts
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
