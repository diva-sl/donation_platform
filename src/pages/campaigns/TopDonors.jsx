import React from "react";

const TopDonors = ({ donors }) => {
  const sortedDonors = [...donors]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">
      <h2 className="text-2xl font-bold mb-6">🏆 Top Supporters</h2>

      <div className="space-y-4">
        {sortedDonors.map((donor, index) => (
          <div
            key={donor.id}
            className="
            flex justify-between
            items-center
            border-b
            pb-4
          "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                w-10 h-10 rounded-full
                bg-orange-500
                text-white
                flex items-center
                justify-center
                font-semibold
                "
              >
                {donor.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-medium">
                  #{index + 1} {donor.name}
                </h4>

                <p className="text-xs text-gray-500">{donor.date}</p>
              </div>
            </div>

            <div className="font-bold text-green-600">
              ₹{donor.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDonors;
