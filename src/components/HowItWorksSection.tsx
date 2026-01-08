import { Card } from "@/components/ui/card";
import { Download, Users, FileText, Upload, TrendingUp } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Get Your Library",
      description: "Log in and unlock 125+ prompts you can use, customize, and turn into your own products.",
    },
    {
      icon: Users,
      title: "Choose Your Niche",
      description: "Decide who you're serving—coaches, course creators, content creators, local businesses, or your current audience.",
    },
    {
      icon: FileText,
      title: "Plug Into Proven Templates",
      description: "Use the included product and sales page templates to turn prompts into clear offers (packs, kits, memberships, or services).",
    },
    {
      icon: Upload,
      title: "Publish Your First Offer",
      description: "Upload your product into your preferred platform (Blink, Gumroad, Shopify, ThriveCart, etc.) and start sharing the link.",
    },
    {
      icon: TrendingUp,
      title: "Rinse, Refine, and Scale",
      description: "Add new prompt packs, raise prices, bundle your shop with services, or turn it into a subscription.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Your New Prompt Shop <span className="text-primary">Comes Together</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="mb-4 mt-4">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
