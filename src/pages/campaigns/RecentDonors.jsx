import React from "react";
import { Link } from "react-router-dom";

const RecentDonors = ({ donors, campaignSlug }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recent Supporters</h2>
      </div>

      <div className="space-y-4">
        {donors.slice(0, 5).map((donor) => (
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
                <h4 className="font-medium">{donor.name}</h4>

                <p className="text-sm text-gray-500">{donor.message}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold text-green-600">
                ₹{donor.amount.toLocaleString()}
              </div>

              <div className="text-xs text-gray-500">{donor.date}</div>
            </div>
          </div>
        ))}
        <Link
          to={`/campaign/${campaignSlug}/supporters`}
          className="
  inline-flex
  items-center
  text-orange-500
  font-medium
  mt-5
  hover:text-orange-600
"
        >
          View All Supporters →
        </Link>
      </div>
    </div>
  );
};

export default RecentDonors;
