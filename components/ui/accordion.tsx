"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium">{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                openIndex === index && "transform rotate-180"
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 pt-0 text-muted-foreground">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
