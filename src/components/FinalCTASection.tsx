import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur border-primary/20">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Turn AI Prompts into <span className="text-primary">Real Offers?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You can keep trying to figure everything out from scratch—or you can start from a complete, customizable system that's already done most of the heavy lifting.
            </p>
            
            <p className="text-lg max-w-2xl mx-auto">
              Use the prompts personally. Turn them into products. Or do both.
              Either way, you'll finally have a way to plug AI into your business in a way that actually makes sense.
            </p>
            
            <div className="pt-6">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Get the AI Prompt Shop Launch Kit
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Instant access. Your prompt shop can be live faster than you think.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
