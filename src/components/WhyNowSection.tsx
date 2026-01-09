import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Zap, Sparkles } from "lucide-react";

export function WhyNowSection() {
  const benefits = [
    { title: "No Inventory", desc: "No physical products to manage or ship.", icon: Sparkles },
    { title: "Low Overhead", desc: "Start with tiny costs and scale fast.", icon: Zap },
    { title: "Scaleable", desc: "Sell the same digital product infinitely.", icon: TrendingUp },
  ];

  const points = [
    "People are already paying for powerful prompts.",
    "Creators are packaging them as products, memberships, and custom GPTs.",
    "Whole businesses are being built around selling systems powered by prompts.",
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why AI Prompt Shops Are <span className="text-primary italic">Taking Off Right Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI isn't a fad anymore—it's infrastructure. Most people don't know how to tell AI exactly what to do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="p-8 md:p-10 glass-card flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-2xl font-semibold leading-tight">
                  Businesses are leaning on tools like ChatGPT, but they're struggling.
                </p>
                <p className="text-muted-foreground text-lg">
                  That's where your prompts come in. You bridge the gap between "cool tool" and "actual results."
                </p>
              </div>
              
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 glass-card group hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="bg-primary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
