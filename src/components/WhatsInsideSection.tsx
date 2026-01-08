import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Library, FileText, GraduationCap, Scale, Users } from "lucide-react";

export function WhatsInsideSection() {
  const features = [
    {
      icon: Library,
      title: "125+ Sellable Prompt Systems",
      description: "Use them in your own business, customize them, or turn them into your own prompt packs.",
    },
    {
      icon: FileText,
      title: "Product & Sales Page Templates",
      description: "Pre-structured layouts for product pages, sales pages, and offer descriptions—ready to adapt in tools like Blink.",
    },
    {
      icon: GraduationCap,
      title: "AI Training & Tutorials",
      description: "Short, focused walkthroughs on editing prompts, packaging offers, and stacking AI tools together.",
    },
    {
      icon: Scale,
      title: "Licensing & Usage Guide",
      description: "Clear guidelines on how to rebrand, remix, and resell ethically under your own business.",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Access to a private community where others are building prompt-based offers and shops.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You Get Inside Your <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to launch, market, and deliver your own AI prompt shop.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors">
                <div className="mb-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
            See Everything Included
          </Button>
        </div>
      </div>
    </section>
  );
}
