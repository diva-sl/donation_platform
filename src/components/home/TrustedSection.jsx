import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Lock,
  FileCheck,
  CircleDollarSign,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Protected payment gateway with industry-grade security.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Campaigns",
    description: "All fundraisers are reviewed before going live.",
  },
  {
    icon: FileCheck,
    title: "Transparency",
    description: "Track donations and campaign updates in real-time.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Your personal information remains safe and encrypted.",
  },
  {
    icon: CircleDollarSign,
    title: "Tax Benefits",
    description: "Eligible donations can receive tax exemption benefits.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Community",
    description: "Thousands of donors and volunteers supporting causes.",
  },
];

const TrustedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Why Choose Mysticpace
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted Platform For Giving
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Every donation creates impact. We ensure transparency, security, and
            accountability throughout the fundraising journey.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
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
                    group-hover:bg-orange-500
                    transition-all
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-orange-600
                      group-hover:text-white
                    "
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div
          className="
            mt-16
            bg-gradient-to-r
            from-orange-500
            to-amber-500
            rounded-3xl
            p-8
            lg:p-12
          "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2">Fundraisers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">₹2.5Cr+</h3>
              <p className="mt-2">Raised</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">12K+</h3>
              <p className="mt-2">Donors</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="mt-2">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
