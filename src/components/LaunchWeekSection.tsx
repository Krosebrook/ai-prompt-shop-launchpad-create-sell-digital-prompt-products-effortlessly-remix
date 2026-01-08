import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Target, Palette, Share2, BarChart3 } from "lucide-react";

export function LaunchWeekSection() {
  const steps = [
    { icon: Download, text: "Download your prompts" },
    { icon: Target, text: "Pick your first offer (pack, kit, or mini membership)" },
    { icon: Palette, text: "Customize your sales page in Blink" },
    { icon: Share2, text: "Share the link with your audience" },
    { icon: BarChart3, text: "Improve and expand based on what sells" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Launch a Prompt-Powered Offer in <span className="text-primary">7 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            You don't need to be techy. You don't need to be a copywriter. You just need a clear plan.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Inside the kit, you're not just getting random prompts. You're getting a system: prompts + templates + examples. That means you can move from "idea" to "live offer" in a matter of days—not months.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-sm font-medium">{step.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Start Building Your Prompt Shop
          </Button>
        </div>
      </div>
    </section>
  );
}
