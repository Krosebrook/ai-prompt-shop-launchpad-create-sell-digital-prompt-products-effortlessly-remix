import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/blink-core-storage/projects/ai-prompt-shop-launc-e58stmu7/images/generated-image-1767955878695-0.webp" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10 animate-in">
// ... existing code ...
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-gradient">
          Launch Your AI Prompt Shop in{" "}
          <span className="text-primary italic">Days, Not Months</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
          Turn proven AI prompts into digital products, offers, and systems—without writing everything from scratch or becoming a "tech person."
        </p>
        
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
          Perfect for coaches, creators, and service providers who want a simple, low-overhead way to start earning with AI.
        </p>
        
        <div className="flex flex-col items-center gap-6 pt-8">
          <Button size="lg" className="text-xl px-12 py-8 h-auto rounded-full shadow-glow hover:scale-105 transition-all duration-300">
            Get Instant Access
          </Button>
          <div className="space-y-1">
            <p className="text-sm font-medium">
              Lifetime access. No subscriptions.
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Start selling as soon as this week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
