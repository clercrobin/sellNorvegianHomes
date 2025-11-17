import { Accordion } from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion
      items={items.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
    />
  );
}
