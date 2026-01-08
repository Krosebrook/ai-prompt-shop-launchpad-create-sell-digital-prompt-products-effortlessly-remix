import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function PricingSection() {
  const benefits = [
    "Launch a digital product without starting from zero",
    "Use prompts for your own content, clients, and systems",
    "Turn them into your own bundles, kits, or memberships",
    "Keep 100% of the revenue from your own sales",
    "Grow at your pace—no subscriptions, no inventory",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The AI Prompt Shop Launch Kit
            </h2>
            <div className="inline-block">
              <p className="text-5xl font-bold text-primary mb-2">$99</p>
              <p className="text-muted-foreground">One-Time Payment</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button size="lg" className="w-full text-lg px-8 py-6 h-auto">
              Get Immediate Access
            </Button>
            <p className="text-sm text-muted-foreground">
              Use the prompts for your own business or turn them into products for your audience—your choice.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
