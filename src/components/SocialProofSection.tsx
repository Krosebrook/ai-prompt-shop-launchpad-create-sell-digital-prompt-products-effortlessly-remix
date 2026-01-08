import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function SocialProofSection() {
  const useCases = [
    "Plan content",
    "Launch digital products",
    "Streamline client work",
    "Create new revenue streams",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur text-center">
          <p className="text-xl md:text-2xl font-semibold mb-6">
            Creators, coaches, service providers, and small business owners are already using AI prompts to:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center gap-3 justify-start">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg">{useCase}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground">
            You're not late—you're right on time to do it your way.
          </p>
        </Card>
      </div>
    </section>
  );
}
