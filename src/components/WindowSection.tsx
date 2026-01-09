import { Card } from "@/components/ui/card";
import { CheckCircle2, Waves, Rocket, BrandSelection } from "lucide-react";

export function WindowSection() {
  const realizations = [
    { text: "You can sell prompts as products", icon: Rocket },
    { text: "Turn prompts into offers & memberships", icon: Waves },
    { text: "No developer skills required", icon: Sparkles },
  ];

  const shortcuts = [
    "Tested prompt systems, not a blank page",
    "Customize for your own niche & audience",
    "Package under your own brand & price",
  ];

  return (
    <section className="py-24 px-4 relative bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            You're Early to a <span className="text-primary italic">Massive Wave</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Most people still think AI is "too complicated." That's your advantage in the prompt economy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in">
            <h3 className="text-3xl font-bold leading-tight">
              The prompt economy is wide open, and most of the world hasn't realized the potential yet.
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {realizations.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-10 glass-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors" />
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Your Ready-Made Shortcut</h4>
                <p className="text-muted-foreground">Skip the months of trial and error with a proven foundation.</p>
              </div>

              <ul className="space-y-4">
                {shortcuts.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">
                  Use it for your own business—or as the foundation for a standalone prompt shop.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Sparkles } from "lucide-react";
