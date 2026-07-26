import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Rocket, FileText, HandCoins, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Create Campaign",
    description:
      "Launch a fundraiser for medical emergencies, education, animal welfare, disaster relief, or community support.",
  },

  {
    icon: FileText,
    title: "Share Your Story",
    description:
      "Add photos, videos, and updates to inspire donors and build trust around your cause.",
  },

  {
    icon: HandCoins,
    title: "Receive Donations",
    description:
      "Accept secure contributions from supporters worldwide through trusted payment methods.",
  },

  {
    icon: HeartHandshake,
    title: "Change Lives",
    description:
      "Use the funds to create meaningful impact and keep donors informed with transparent updates.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="text-center" data-aos="fade-up">
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
            How Mysticpace Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900">
            Turn Compassion Into
            <span className="block text-orange-500">Real World Impact</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Follow four simple steps to start fundraising, connect with donors,
            and create meaningful change.
          </p>
        </div>

        {/* Animated Connection Path */}

        <div className="hidden lg:flex justify-center mt-14 mb-6">
          <svg
            width="900"
            height="120"
            viewBox="0 0 900 120"
            className="absolute opacity-20"
          >
            <path
              d="M50 60 C200 10, 300 110, 450 60 S700 10, 850 60"
              fill="none"
              stroke="#f97316"
              strokeWidth="4"
              strokeDasharray="12 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="120;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="
                  relative
                  group
                  bg-white
                  border
                  border-orange-100
                  rounded-3xl
                  p-8
                  overflow-hidden
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >
                {/* Glow Effect */}

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-32
                    h-32
                    bg-orange-100
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* Step Number */}

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    text-5xl
                    font-black
                    text-orange-50
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:scale-110
                    transition-all
                    duration-500
                  "
                >
                  <Icon size={30} className="text-orange-500" />
                </div>

                {/* Title */}

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="text-slate-600 mt-4 leading-7">
                  {step.description}
                </p>

                {/* Animated Bottom Line */}

                <div
                  className="
                    mt-6
                    h-1
                    w-0
                    bg-orange-500
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-16" data-aos="zoom-in">
          <button
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              transition
            "
          >
            Start Your Fundraiser
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
