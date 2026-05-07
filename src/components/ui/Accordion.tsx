"use client";

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items, className }: { items: { question: string, answer: string }[], className?: string }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-200">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between p-5 text-left font-heading text-lg font-bold text-foreground"
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-secondary transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="p-5 pt-0 text-slate-600 leading-relaxed font-sans">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
