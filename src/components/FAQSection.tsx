import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need advanced AI experience?",
      answer: "No. The prompts are written in plain language, with clear instructions so beginners can use them.",
    },
    {
      question: "Can I rebrand and resell the prompts?",
      answer: "Yes—this kit is designed for you to customize the prompts, rename them, and sell them as part of your own products and systems, as long as you follow the included licensing guidelines.",
    },
    {
      question: "What if I only want to use the prompts in my own business?",
      answer: "That’s completely fine. Many buyers use this purely as their private prompt library for content, workflows, and offers.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything You <span className="text-primary italic">Need to Know</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 rounded-2xl border-white/10 overflow-hidden">
              <AccordionTrigger className="text-lg md:text-xl font-bold text-left py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base md:text-lg pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
