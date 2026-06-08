import React from "react";
import { useParams } from "react-router-dom";
import { causes } from "../../data/causes";

const CauseDetails = () => {
  const { slug } = useParams();

  const cause = causes.find((item) => item.slug === slug);

  if (!cause) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold">Cause Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}

      <section className="relative h-[450px]">
        <img
          src={cause.image}
          alt={cause.title}
          className="
          w-full
          h-full
          object-cover
        "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="text-6xl">{cause.icon}</div>

            <h1 className="text-5xl font-bold mt-4">{cause.title}</h1>

            <p className="mt-4 max-w-2xl text-lg">{cause.description}</p>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-4xl font-bold text-orange-500">
              ₹{cause.raised.toLocaleString()}
            </h3>

            <p className="mt-2 text-gray-500">Funds Raised</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-4xl font-bold text-green-500">
              {cause.donors}
            </h3>

            <p className="mt-2 text-gray-500">Supporters</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-4xl font-bold text-blue-500">
              {cause.campaigns}
            </h3>

            <p className="mt-2 text-gray-500">Campaigns</p>
          </div>
        </div>
      </section>

      {/* Benefits */}

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">How Your Donation Helps</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {cause.benefits.map((benefit, index) => (
              <div
                key={index}
                className="
                  bg-orange-50
                  rounded-2xl
                  p-5
                  font-medium
                "
              >
                ✓ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CauseDetails;
