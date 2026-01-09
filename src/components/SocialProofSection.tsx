import { Card } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

export function SocialProofSection() {
  const useCases = [
    "Plan viral content",
    "Launch digital products",
    "Streamline client work",
    "Create new revenue streams",
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="p-8 md:p-16 glass-card text-center space-y-10 relative overflow-hidden border-primary/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="space-y-4">
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              Creators, coaches, and business owners are already using AI prompts to:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-medium">{useCase}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-6">
            <p className="text-xl text-muted-foreground italic">
              "You're not late—you're right on time to do it your way."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
