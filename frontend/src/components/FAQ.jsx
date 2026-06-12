import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Does it support Google Login?",
    answer: "Yes, Google OAuth authentication is included."
  },
  {
    question: "Is JWT authentication implemented?",
    answer: "Yes, secure JWT access tokens are used."
  },
  {
    question: "Can users reset passwords?",
    answer: "Yes, OTP-based password recovery is available."
  },
  {
    question: "Does it verify email addresses?",
    answer: "Yes, email OTP verification is included."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-28 bg-[#0B1020]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-[#101826] border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-white font-medium">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`text-slate-400 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}