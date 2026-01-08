import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function CreatorNote() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur relative">
          <Quote className="h-16 w-16 text-primary/20 absolute top-4 left-4" />
          <div className="relative z-10">
            <blockquote className="text-xl md:text-2xl italic mb-6 pl-8">
              "I built this so smart, busy people could stop wrestling with AI and start getting paid from it.
              <br /><br />
              If you want prompts you can drop straight into your own business—or you're ready to sell your own prompt-based products—this is the shortcut I wish I'd had at the beginning."
            </blockquote>
            <p className="text-right text-lg font-semibold">– [Your Name]</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
