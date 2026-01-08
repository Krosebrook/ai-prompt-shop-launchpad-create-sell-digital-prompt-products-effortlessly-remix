import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function WhyNowSection() {
  const benefits = [
    "No physical inventory",
    "Tiny startup costs",
    "Digital products you can sell again and again",
  ];

  const points = [
    "People are already paying for powerful prompts.",
    "Creators are packaging them as products, memberships, and custom GPTs.",
    "Whole businesses are being built around selling systems powered by prompts.",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why AI Prompt Shops Are <span className="text-primary">Taking Off Right Now</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur">
          <div className="space-y-6 text-lg">
            <p className="text-xl font-semibold">
              AI isn't a fad anymore—it's infrastructure.
            </p>
            
            <p className="text-muted-foreground">
              Businesses, creators, and everyday users are leaning on tools like ChatGPT, but most people don't know how to tell AI exactly what to do.
            </p>
            
            <p className="font-semibold">That's where prompts come in.</p>
            
            <ul className="space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <p className="font-semibold mb-4">
                A prompt shop lets you step into this new economy with:
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-muted-foreground pt-4">
              With this system, you don't have to guess what to sell—you plug into a proven structure and make it your own.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
