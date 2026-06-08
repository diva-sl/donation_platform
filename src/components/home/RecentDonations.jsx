import React from "react";
import Marquee from "react-fast-marquee";
import { Heart, CircleCheckBig } from "lucide-react";

const donations = [
  {
    donor: "Rajesh Kumar",
    amount: 5000,
    campaign: "Education Support",
    time: "2 mins ago",
  },
  {
    donor: "Anonymous",
    amount: 10000,
    campaign: "Medical Support",
    time: "5 mins ago",
  },
  {
    donor: "Priya Sharma",
    amount: 2500,
    campaign: "Food Donation",
    time: "8 mins ago",
  },
  {
    donor: "Arun Kumar",
    amount: 7500,
    campaign: "Old Age Care",
    time: "10 mins ago",
  },
  {
    donor: "Anonymous",
    amount: 15000,
    campaign: "Emergency Relief",
    time: "12 mins ago",
  },
];

const RecentDonations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            Live Donation Feed
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Recent Donations
          </h2>

          <p className="text-slate-600 mt-4">
            Real people creating real impact every day.
          </p>
        </div>

        <Marquee speed={40} pauseOnHover={true} gradient={false}>
          {donations.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                shadow-lg
                rounded-2xl
                border
                border-gray-100
                p-5
                mx-4
                min-w-[320px]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Heart className="text-orange-500" size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">{item.donor}</h4>

                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-600">Donated</p>

                <h3 className="text-2xl font-bold text-green-600">
                  ₹{item.amount.toLocaleString()}
                </h3>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <CircleCheckBig className="text-green-500" size={16} />

                <span className="text-sm text-gray-600">{item.campaign}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default RecentDonations;
