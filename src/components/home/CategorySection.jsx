import React from "react";
import {
  GraduationCap,
  HeartPulse,
  Soup,
  Users,
  Ambulance,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Education Support",
    campaigns: 124,
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Medical Support",
    campaigns: 89,
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Food Donation",
    campaigns: 67,
    icon: Soup,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Old Age Care",
    campaigns: 42,
    icon: Users,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Emergency Relief",
    campaigns: 31,
    icon: Ambulance,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Community Welfare",
    campaigns: 78,
    icon: HeartHandshake,
    color: "from-rose-500 to-orange-500",
  },
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Explore Causes
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Donate To Meaningful Causes
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Choose a cause you care about and help create lasting impact.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  border
                  border-gray-100
                "
              >
                <div
                  className={`
                    w-16 h-16 rounded-2xl
                    bg-gradient-to-r ${item.color}
                    flex items-center justify-center
                    mb-6
                  `}
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-500 mb-6">
                  {item.campaigns}+ Active Campaigns
                </p>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-orange-600
                    font-semibold
                    group-hover:gap-4
                    transition-all
                  "
                >
                  Explore Cause
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
