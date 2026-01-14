import { Card } from "@/components/ui/card";
import { Download, Users, FileText, Upload, TrendingUp, ChevronRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Download,
      title: "Step 1 – Get Your Library",
      description: "Log in and unlock 125+ prompts you can use, customize, and turn into your own products.",
    },
    {
      icon: Users,
      title: "Step 2 – Choose Your Niche",
      description: "Decide who you're serving—coaches, course creators, content creators, local businesses, or your current audience.",
    },
    {
      icon: FileText,
      title: "Step 3 – Plug Into Proven Templates",
      description: "Use the included product and sales page templates to turn prompts into clear offers (packs, kits, memberships, or services).",
    },
    {
      icon: Upload,
      title: "Step 4 – Publish Your First Offer",
      description: "Upload your product into your preferred platform (Blink, Gumroad, Shopify, ThriveCart, etc.) and start sharing the link.",
    },
    {
      icon: TrendingUp,
      title: "Step 5 – Rinse, Refine, and Scale",
      description: "Add new prompt packs, raise prices, bundle your shop with services, or turn it into a subscription.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How Your New Prompt Shop <span className="text-primary italic">Comes Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple 5-step process to go from zero to a live, profit-ready prompt shop.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-6 group">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <ChevronRight className="h-6 w-6 text-primary/30 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
