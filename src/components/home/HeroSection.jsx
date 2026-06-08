import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandHoldingHeart, FaSearch, FaUsers } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <FaHeart />
              Trusted Donation Platform
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Together We Can
              <span className="block text-orange-600">Transform Lives</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Support verified fundraising campaigns for education, healthcare,
              food donation, old age care, emergency relief, and community
              welfare.
            </p>

            {/* Search Box */}
            <div className="mt-8 bg-white shadow-lg rounded-2xl p-2 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center flex-1 px-4">
                <FaSearch className="text-gray-400 mr-3" />

                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="w-full outline-none py-3"
                />
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold">
                Search
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-xl font-semibold shadow-lg">
                Donate Now
              </button>

              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-7 py-4 rounded-xl font-semibold transition">
                Start Fundraiser
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                ✅ Secure Payments
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                ✅ Verified Campaigns
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                ✅ Trusted Donors
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt="Donation"
                className="w-full h-[450px] object-cover rounded-2xl"
              />

              {/* Floating Card 1 */}
              <div className="absolute top-10 -left-5 bg-white shadow-xl rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <FaHandHoldingHeart className="text-orange-500" size={28} />

                  <div>
                    <h4 className="font-bold">₹2.5 Cr+</h4>
                    <p className="text-sm text-gray-500">Funds Raised</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-10 -right-5 bg-white shadow-xl rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-green-500" size={28} />

                  <div>
                    <h4 className="font-bold">12,000+</h4>
                    <p className="text-sm text-gray-500">Active Donors</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              value: "500+",
              label: "Campaigns",
            },
            {
              value: "₹2.5 Cr+",
              label: "Raised",
            },
            {
              value: "12K+",
              label: "Donors",
            },
            {
              value: "50K+",
              label: "Lives Impacted",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-orange-600">
                {item.value}
              </h3>

              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
