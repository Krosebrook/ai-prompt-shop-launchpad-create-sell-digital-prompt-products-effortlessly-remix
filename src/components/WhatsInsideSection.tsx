import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Library, FileText, GraduationCap, Scale, Users, CheckCircle2 } from "lucide-react";

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
      description: "Pre-structured layouts for product pages, sales pages, and offer descriptions—ready to adapt.",
    },
    {
      icon: GraduationCap,
      title: "AI Training & Tutorials",
      description: "Short, focused walkthroughs on editing prompts, packaging offers, and stacking AI tools.",
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
    <section className="py-24 px-4 bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-primary blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What You Get Inside Your <span className="text-primary italic">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to launch, market, and deliver your own AI prompt shop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <Card key={index} className="p-6 glass-card hover:bg-white/10 transition-colors">
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full aspect-[9/16] max-w-[300px] rounded-[3rem] border-[8px] border-secondary overflow-hidden shadow-2xl glass-card group">
              <img 
                src="https://storage.googleapis.com/blink-core-storage/projects/ai-prompt-shop-launc-e58stmu7/images/generated-image-1767955881112-0.webp" 
                alt="Dashboard Preview" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              <div className="p-6 h-full flex flex-col justify-end relative z-10">
                <div className="bg-primary/90 text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-center shadow-xl mb-4">
                  Live Dashboard
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {features.slice(3).map((feature, index) => (
              <Card key={index} className="p-6 glass-card hover:bg-white/10 transition-colors">
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-xl h-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
            <div className="pt-6">
              <Button size="lg" variant="outline" className="w-full text-lg px-8 py-8 h-auto rounded-2xl border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all">
                See Everything Included
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
