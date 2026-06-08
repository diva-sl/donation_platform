import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  HeartPulse,
  Soup,
  Users,
  Ambulance,
  HeartHandshake,
  Landmark,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Temple Renovation",
    slug: "temple-renovation",
    campaigns: 28,
    donors: "1.2K+",
    raised: "₹18.5L",
    featured: true,
    icon: Landmark,
    color: "from-amber-500 to-orange-500",
  },

  {
    title: "Education Support",
    slug: "education",
    campaigns: 124,
    donors: "2.4K+",
    raised: "₹12.5L",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Medical Support",
    slug: "medical",
    campaigns: 89,
    donors: "1.8K+",
    raised: "₹24.5L",
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
  },

  {
    title: "Food Donation",
    slug: "food",
    campaigns: 67,
    donors: "950+",
    raised: "₹9.5L",
    icon: Soup,
    color: "from-orange-500 to-amber-500",
  },

  {
    title: "Old Age Care",
    slug: "old-age",
    campaigns: 42,
    donors: "700+",
    raised: "₹7.2L",
    icon: Users,
    color: "from-purple-500 to-violet-500",
  },

  {
    title: "Emergency Relief",
    slug: "emergency",
    campaigns: 31,
    donors: "1.5K+",
    raised: "₹32L",
    icon: Ambulance,
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "Community Welfare",
    slug: "community",
    campaigns: 78,
    donors: "1.1K+",
    raised: "₹18.5L",
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
    relative
    bg-white
    rounded-3xl
    p-8
    shadow-sm
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-300
    border
    border-gray-100
    overflow-hidden
  "
              >
                {item.featured && (
                  <span
                    className="
        absolute
        top-4
        right-4
        bg-orange-100
        text-orange-600
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
      "
                  >
                    Featured
                  </span>
                )}

                <div
                  className={`
      w-16
      h-16
      rounded-2xl
      bg-gradient-to-r
      ${item.color}
      flex
      items-center
      justify-center
      mb-6
    `}
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-2">
                  {item.campaigns} Active Campaigns
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-xs text-gray-400">Raised</p>

                    <h4 className="font-bold text-green-600">{item.raised}</h4>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Donors</p>

                    <h4 className="font-bold text-orange-600">{item.donors}</h4>
                  </div>
                </div>

                <Link
                  to={`/causes/${item.slug}`}
                  className="
      mt-6
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          to="/campaigns"
          className="
    inline-flex
    items-center
    gap-2
    bg-orange-500
    hover:bg-orange-600
    text-white
    px-8
    py-4
    rounded-xl
    font-semibold
    transition
  "
        >
          Explore All Campaigns
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;
