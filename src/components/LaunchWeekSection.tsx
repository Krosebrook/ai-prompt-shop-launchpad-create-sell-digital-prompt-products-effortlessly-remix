import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Target, Palette, Share2, BarChart3, Calendar } from "lucide-react";

export function LaunchWeekSection() {
  const steps = [
    { icon: Download, text: "Download your prompts", day: "Day 1-2" },
    { icon: Target, text: "Pick your first offer", day: "Day 3" },
    { icon: Palette, text: "Customize your page", day: "Day 4-5" },
    { icon: Share2, text: "Share your link", day: "Day 6" },
    { icon: BarChart3, text: "Scale what sells", day: "Day 7" },
  ];

  return (
    <section className="py-24 px-4 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-4">
            <Calendar className="h-4 w-4" />
            Launch in a Week
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Launch a Prompt-Powered Offer in <span className="text-primary italic">7 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You don't need to be techy or a copywriter. Inside the kit, you get a complete system: prompts + templates + examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 glass-card text-center group hover:bg-white/10 transition-all duration-300">
                <p className="text-primary text-xs font-black uppercase tracking-widest mb-6">{step.day}</p>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-base font-bold leading-snug">{step.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-xl px-12 py-8 h-auto rounded-2xl shadow-glow hover:scale-[1.02] transition-all">
            Start Building Your Prompt Shop
          </Button>
        </div>
      </div>
    </section>
  );
}
