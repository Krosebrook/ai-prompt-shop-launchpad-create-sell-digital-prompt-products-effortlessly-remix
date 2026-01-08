import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Launch Your AI Prompt Shop in{" "}
          <span className="text-primary">Days, Not Months</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Turn proven AI prompts into digital products, offers, and systems—without writing everything from scratch or becoming a "tech person."
        </p>
        
        <p className="text-lg text-muted-foreground">
          Perfect for coaches, creators, and service providers who want a simple, low-overhead way to start earning with AI.
        </p>
        
        <div className="flex flex-col items-center gap-4 pt-8">
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Get Instant Access
          </Button>
          <p className="text-sm text-muted-foreground">
            Lifetime access. No subscriptions. Start selling as soon as this week.
          </p>
        </div>
      </div>
    </section>
  );
}
