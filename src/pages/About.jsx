import React from "react";
import {
  HeartHandshake,
  Target,
  Eye,
  Users,
  ShieldCheck,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            About Mysticpace
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Empowering Change Through Giving
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-orange-50">
            Mysticpace connects donors, fundraisers, volunteers, and communities
            to create meaningful social impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-orange-50 p-8 rounded-3xl">
              <Target className="text-orange-500 mb-4" size={40} />

              <h2 className="text-3xl font-bold">Our Mission</h2>

              <p className="mt-4 text-gray-600 leading-8">
                To create a transparent and trusted platform where every
                contribution reaches people who need it most and creates
                measurable impact.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl">
              <Eye className="text-blue-500 mb-4" size={40} />

              <h2 className="text-3xl font-bold">Our Vision</h2>

              <p className="mt-4 text-gray-600 leading-8">
                To become the most trusted digital ecosystem for donations,
                fundraising, volunteering and community empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Our Impact</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-5xl font-bold text-orange-500">50K+</h3>
              <p className="mt-3">Lives Impacted</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-5xl font-bold text-orange-500">₹25Cr+</h3>
              <p className="mt-3">Funds Raised</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-5xl font-bold text-orange-500">1000+</h3>
              <p className="mt-3">Campaigns</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <h3 className="text-5xl font-bold text-orange-500">15K+</h3>
              <p className="mt-3">Donors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose Mysticpace</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border">
              <ShieldCheck className="text-green-500 mb-4" size={40} />

              <h3 className="font-bold text-xl">Secure Donations</h3>

              <p className="mt-4 text-gray-600">
                Industry-standard payment security and transparent transactions.
              </p>
            </div>

            <div className="p-8 rounded-3xl border">
              <Users className="text-blue-500 mb-4" size={40} />

              <h3 className="font-bold text-xl">Trusted Community</h3>

              <p className="mt-4 text-gray-600">
                Thousands of donors, volunteers, and organizations trust us.
              </p>
            </div>

            <div className="p-8 rounded-3xl border">
              <Globe className="text-orange-500 mb-4" size={40} />

              <h3 className="font-bold text-xl">Global Reach</h3>

              <p className="mt-4 text-gray-600">
                Supporting causes across multiple communities and regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Our Journey</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-bold text-orange-500">2025</h3>
              <p className="mt-2">Mysticpace Platform Founded.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-bold text-orange-500">2026</h3>
              <p className="mt-2">1,000+ campaigns successfully funded.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-bold text-orange-500">Future</h3>
              <p className="mt-2">
                Expanding support to more communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-10 text-center text-white">
            <HeartHandshake size={60} className="mx-auto mb-6" />

            <h2 className="text-4xl font-bold">Join Our Mission</h2>

            <p className="mt-5 text-lg">
              Every donation brings hope and creates meaningful change.
            </p>

            <button
              className="
                mt-8
                bg-white
                text-orange-600
                px-8
                py-4
                rounded-xl
                font-bold
                inline-flex
                items-center
                gap-2
              "
            >
              Start Donating
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
