import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Fresh graduates (2022, 2023, and 2024) from any of the 6 streams.",
    },
    {
      question: "Is the event free?",
      answer: "Yes, registration is free for participants.",
    },
    {
      question: "What do I need?",
      answer: "A device with internet access and an updated resume.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mb-28  mt-24">
      <h2 className="text-3xl font-bold text-center mb-6">
        FAQs{" "}
        <span className="text-yellow-600">(Frequently Asked Questions)</span>
      </h2>
      <h2 className="text-2xl font-bold text-center mb-6">
        Have Questions? We’ve Got You Covered.
      </h2>
      <div className="space-y-4 place-items-center">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg bg-yellow-500/95 shadow-sm mx-9 w-[70%] md:w-[50%]"
          >
            <button
              className={`flex justify-between w-full px-4 py-3 text-left text-lg font-medium ${openIndex === index ? "text-yellow-700" : "text-gray-700"} focus:outline-none`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-600 border-t border-gray-300 ">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
