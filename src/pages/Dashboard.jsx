import React from "react";
import {
  IndianRupee,
  Heart,
  Trophy,
  Users,
  PlusCircle,
  Eye,
  Download,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Raised",
      value: "₹3,45,000",
      icon: IndianRupee,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Donations",
      value: "156",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Active Campaigns",
      value: "8",
      icon: Trophy,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Supporters",
      value: "1,240",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const recentDonations = [
    {
      name: "Rajesh Kumar",
      amount: "₹5,000",
      campaign: "Education Support",
    },
    {
      name: "Priya Sharma",
      amount: "₹2,500",
      campaign: "Medical Help",
    },
    {
      name: "Anonymous",
      amount: "₹10,000",
      campaign: "Food Support",
    },
  ];

  const campaigns = [
    {
      title: "Help Rural Students",
      raised: 85000,
      goal: 100000,
    },
    {
      title: "Medical Emergency Support",
      raised: 45000,
      goal: 75000,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>

            <p className="text-gray-500 mt-2">
              Welcome back! Here's your impact summary.
            </p>
          </div>

          <button
            className="
            mt-4 md:mt-0
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-xl
            flex
            items-center
            gap-2
          "
          >
            <PlusCircle size={18} />
            New Campaign
          </button>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
              "
              >
                <div
                  className={`
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    ${item.color}
                  `}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-gray-500 mt-4">{item.title}</h3>

                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </div>
            );
          })}
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campaign Performance */}

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Campaign Performance</h2>

              <TrendingUp className="text-green-500" />
            </div>

            <div className="space-y-8">
              {campaigns.map((campaign, index) => {
                const percentage = (campaign.raised / campaign.goal) * 100;

                return (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">{campaign.title}</h4>

                      <span className="font-bold">
                        {Math.round(percentage)}%
                      </span>
                    </div>

                    <div className="h-4 bg-gray-200 rounded-full">
                      <div
                        className="
                        h-full
                        bg-orange-500
                        rounded-full
                      "
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>₹{campaign.raised.toLocaleString()}</span>

                      <span>₹{campaign.goal.toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>

            <div className="space-y-4">
              <button
                className="
                w-full
                border
                rounded-xl
                p-4
                flex
                items-center
                gap-3
                hover:bg-gray-50
              "
              >
                <PlusCircle size={20} />
                Create Campaign
              </button>

              <button
                className="
                w-full
                border
                rounded-xl
                p-4
                flex
                items-center
                gap-3
                hover:bg-gray-50
              "
              >
                <Download size={20} />
                Download Reports
              </button>

              <button
                className="
                w-full
                border
                rounded-xl
                p-4
                flex
                items-center
                gap-3
                hover:bg-gray-50
              "
              >
                <Eye size={20} />
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* Recent Donations */}

        <div className="bg-white rounded-3xl p-8 shadow-sm mt-8">
          <h2 className="text-2xl font-bold mb-6">Recent Donations</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Donor</th>

                  <th className="text-left py-4">Campaign</th>

                  <th className="text-left py-4">Amount</th>
                </tr>
              </thead>

              <tbody>
                {recentDonations.map((donation, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4">{donation.name}</td>

                    <td className="py-4">{donation.campaign}</td>

                    <td className="py-4 font-bold text-green-600">
                      {donation.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
