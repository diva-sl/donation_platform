import React from "react";
import { Search, HeartHandshake, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose a Cause",
    description:
      "Browse verified campaigns and select a cause that matters to you.",
  },

  {
    icon: HeartHandshake,
    title: "Donate Securely",
    description: "Contribute safely through our secure payment gateway.",
  },

  {
    icon: BadgeCheck,
    title: "Track Impact",
    description:
      "Follow campaign updates and see how your donation creates change.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <span
            className="
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
          "
          >
            How It Works
          </span>

          <h2 className="text-4xl font-bold mt-5 text-slate-900">
            Make An Impact In 3 Simple Steps
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Supporting a cause is simple, secure, and transparent with
            Mysticpace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                bg-gray-50
                rounded-3xl
                p-8
                text-center
                hover:shadow-lg
                transition-all
              "
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-orange-100
                  flex
                  items-center
                  justify-center
                  mx-auto
                "
                >
                  <Icon size={28} className="text-orange-500" />
                </div>

                <div
                  className="
                  mt-5
                  w-8
                  h-8
                  rounded-full
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
                  mx-auto
                  font-bold
                "
                >
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mt-5">{step.title}</h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
