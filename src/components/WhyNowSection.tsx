import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Zap, Sparkles } from "lucide-react";

export function WhyNowSection() {
  const points = [
    "People are already paying for powerful prompts.",
    "Creators are packaging them as products, memberships, and custom GPTs.",
    "Whole businesses are being built around selling systems powered by prompts.",
  ];

  const benefits = [
    { title: "No Physical Inventory", desc: "Digital products you can sell again and again.", icon: Sparkles },
    { title: "Tiny Startup Costs", desc: "No overhead, no subscriptions, no expensive tech.", icon: Zap },
    { title: "Proven Structure", desc: "Don't guess what to sell—just plug in and go.", icon: TrendingUp },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Why AI Prompt Shops Are Taking Off Right Now</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI isn't a fad anymore—<span className="text-primary italic">it's infrastructure.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Businesses, creators, and everyday users are leaning on tools like ChatGPT, but most people don't know how to tell AI exactly what to do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card className="p-8 md:p-10 glass-card flex flex-col justify-center border-primary/10">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-2xl font-semibold leading-tight">
                  That's where prompts come in.
                </p>
              </div>
              
              <ul className="space-y-6">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-lg">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-muted-foreground pt-4 italic">
                A prompt shop lets you step into this new economy with:
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 glass-card group hover:bg-primary/5 transition-colors border-primary/5">
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

        <div className="mt-16 text-center">
          <p className="text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            With this system, you don't have to guess what to sell—you <span className="text-primary">plug into a proven structure</span> and make it your own.
          </p>
        </div>
      </div>
    </section>
  );
}

