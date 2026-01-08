import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      answer: "That's completely fine. Many buyers use this purely as their private prompt library for content, workflows, and offers.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
