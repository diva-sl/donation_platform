import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I donate?",
    answer:
      "Select a campaign, choose an amount and complete payment securely.",
  },
  {
    question: "Can I donate anonymously?",
    answer: "Yes. Anonymous donations are supported during checkout.",
  },
  {
    question: "Are campaigns verified?",
    answer: "Yes. All campaigns undergo verification before approval.",
  },
  {
    question: "How do I start a fundraiser?",
    answer: "Create an account and submit your campaign for review.",
  },
  {
    question: "Which payment methods are accepted?",
    answer: "UPI, Debit Cards, Credit Cards, Wallets and Net Banking.",
  },
  {
    question: "Will I receive a donation receipt?",
    answer: "Yes, receipts are sent automatically by email.",
  },
  {
    question: "Can NGOs use Mysticpace?",
    answer: "Yes. NGOs, Trusts and Charitable Organizations are welcome.",
  },
  {
    question: "How secure are payments?",
    answer: "Payments are processed through secure Razorpay gateways.",
  },
  {
    question: "Can I edit my fundraiser?",
    answer: "Yes. Campaign owners can update campaign details.",
  },
  {
    question: "Can I share campaigns?",
    answer: "Yes. Every campaign includes sharing options.",
  },
  {
    question: "How long does verification take?",
    answer: "Usually 24 to 72 hours.",
  },
  {
    question: "Can donations be refunded?",
    answer: "Refund requests are reviewed under our refund policy.",
  },
  {
    question: "What causes are supported?",
    answer:
      "Medical, Education, Temple Renovation, Food, Community Welfare and more.",
  },
  {
    question: "How are funds transferred?",
    answer: "Funds are settled after campaign verification.",
  },
  {
    question: "How can I contact support?",
    answer: "Visit the Contact page or email our support team.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
            Frequently Asked Questions
          </span>

          <h1 className="text-4xl font-bold mt-5">How Can We Help?</h1>

          <p className="text-gray-600 mt-3">
            Find answers to the most commonly asked questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  px-5
                  py-4
                "
              >
                <span className="font-semibold text-slate-900">
                  {item.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-5 pb-5 text-gray-600 leading-7">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
