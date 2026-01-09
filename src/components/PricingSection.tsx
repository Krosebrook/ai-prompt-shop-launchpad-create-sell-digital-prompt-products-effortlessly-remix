import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

export function PricingSection() {
  const benefits = [
    "Launch a digital product without starting from zero",
    "Use prompts for your own content, clients, and systems",
    "Turn them into your own bundles, kits, or memberships",
    "Keep 100% of the revenue from your own sales",
    "Grow at your pace—no subscriptions, no inventory",
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The AI Prompt Shop <span className="text-primary italic">Launch Kit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get everything you need to start earning with AI prompts today.
          </p>
        </div>

        <Card className="relative overflow-hidden glass-card rounded-[2rem] border-primary/20 shadow-2xl group">
          <div className="absolute top-0 right-0 p-8">
            <Sparkles className="h-12 w-12 text-primary opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8 bg-white/[0.02]">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">What's Included:</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full group-hover/item:scale-110 transition-transform shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg text-foreground/90 leading-tight group-hover/item:text-foreground transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-8 bg-primary/[0.03] border-l border-white/5">
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Special Launch Offer</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-7xl font-black tracking-tighter text-gradient">$99</span>
                  <span className="text-muted-foreground font-medium">USD</span>
                </div>
                <p className="text-muted-foreground font-medium">One-Time Payment • Lifetime Access</p>
              </div>

              <div className="w-full space-y-4">
                <Button size="lg" className="w-full text-xl px-8 py-8 h-auto rounded-2xl shadow-glow hover:scale-[1.05] active:scale-95 transition-all duration-300">
                  Get Immediate Access
                </Button>
                <p className="text-sm text-muted-foreground px-4 leading-relaxed">
                  Use the prompts for your own business or turn them into products for your audience—your choice.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 grayscale opacity-50">
                <div className="h-6 w-12 bg-white/10 rounded" />
                <div className="h-6 w-12 bg-white/10 rounded" />
                <div className="h-6 w-12 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
