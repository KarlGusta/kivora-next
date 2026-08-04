"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="border-t border-kivora-ink/15">
      {items.map((item, index) => (
        <div key={item.question} className="border-b border-kivora-ink/15">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-6 py-7 text-left text-lg font-semibold text-kivora-ink"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <Plus
              className={`h-5 w-5 shrink-0 text-kivora-purple transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-2xl pb-7 leading-7 text-kivora-ink/70">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
