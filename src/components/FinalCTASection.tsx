import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Card className="p-8 md:p-20 glass-card rounded-[3rem] border-primary/20 shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
            <Rocket className="h-48 w-48 text-primary -rotate-12" />
          </div>

          <div className="text-center space-y-10 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Ready to Turn AI Prompts into <span className="text-primary italic">Real Offers?</span>
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Stop guessing. Start building. Use a complete, customizable system that's already done 90% of the heavy lifting for you.
              </p>
              
              <p className="text-lg md:text-xl font-medium">
                Use them personally. Sell them as products. Scale your business. 
                <span className="block text-primary mt-2">The choice is yours. The system is ready.</span>
              </p>
            </div>
            
            <div className="pt-8 space-y-6">
              <Button size="lg" className="text-xl px-12 py-10 h-auto rounded-2xl shadow-glow hover:scale-[1.05] transition-all duration-300">
                Get the AI Prompt Shop Launch Kit
              </Button>
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  One-Time Payment • Instant Access
                </p>
                <p className="text-muted-foreground italic">
                  "Your prompt shop can be live faster than you think."
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
