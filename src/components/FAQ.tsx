import React, { useState } from "react";
const faq = [
  {
    id: 1,
    question: "What documents are required for incorporation?  ",
    answer: "",
    show: false,
  },
  {
    id: 2,
    question: "How long does the incorporation process take?",
    answer: "",
    show: false,
  },
  {
    id: 3,
    question: "What is the cost of incorporation services?",
    answer: "",
    show: false,
  },
  {
    id: 4,
    question: "Can you help with post-incorporation compliance?",
    answer: "",
    show: false,
  },
];
export const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState(faq);
  const toggleFAQ = (id: number) => {
    const updatedFAQ = faqs.map((faq) => {
      if (faq.id === id) {
        return { ...faq, show: !faq.show };
      }
      return faq;
    });
    setFaqs(updatedFAQ);
  };
  return (
    <div className="px-8 sm:px-16 md:px-28 custom-container py-24  mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 gap-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-[#FCFCFC] border  border-[#F2F2F2] gap-2 p-2 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base !tracking-[-.12px] !leading-7 font-medium">
                {faq.question}
              </h2>
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="text-primary hover:underline"
              >
                {faq.show ? "Hide" : "Show"}
              </button>
            </div>
            {faq.show && (
              <p className="text-sm text-[#4F4F4F] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                vulputate commodo lectus, ac blandit elit tincidunt id. Sed
                rhoncus, tortor sed eleifend tristique, tortor mauris.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
