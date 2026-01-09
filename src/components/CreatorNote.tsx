import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CreatorNote() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-16 glass-card relative overflow-hidden border-primary/10">
          <Quote className="h-32 w-32 text-primary/5 absolute -top-4 -left-4 rotate-12" />
          
          <div className="relative z-10 space-y-10">
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-foreground/90">
              "I built this so smart, busy people could stop wrestling with AI and start getting paid from it. 
              If you want prompts you can drop straight into your own business—or you're ready to sell your own products—this is the shortcut I wish I'd had at the beginning."
            </blockquote>
            
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/20 text-primary font-bold text-xl">AS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-bold">Arlan Schultz</p>
                <p className="text-muted-foreground">Founder, AI Prompt Shop Launchpad</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
