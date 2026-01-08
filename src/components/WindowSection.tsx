import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function WindowSection() {
  const realizations = [
    "You can sell prompts as products",
    "You can turn prompts into full-blown offers, memberships, and services",
    "You don't need to be a developer or a copywriter to step in",
  ];

  const shortcuts = [
    "You start from tested prompt systems, not a blank page",
    "You customize them for your own niche and audience",
    "You package them under your own brand and price point",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You're Early to a <span className="text-primary">Massive Wave</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Most people still think AI is "too complicated." That's your advantage.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur">
          <div className="space-y-6 text-lg">
            <p className="text-xl font-semibold">
              Right now, the prompt economy is wide open.
            </p>
            
            <div>
              <p className="font-semibold mb-4">Most of the world hasn't realized:</p>
              <ul className="space-y-3">
                {realizations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <p className="font-semibold mb-4">With this kit, you get a ready-made shortcut:</p>
              <ul className="space-y-3">
                {shortcuts.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-muted-foreground pt-4">
              Use it for your own business—or as the foundation for a standalone prompt shop.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
