import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Heart,
  CreditCard,
  Edit,
  Download,
  Trophy,
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "Divakaran",
    email: "divakaran@gmail.com",
    phone: "+91 8088754355",
    location: "Tamil Nadu, India",
    kyc: "Verified",
    totalDonated: 25000,
    totalCampaigns: 3,
  };

  const donations = [
    {
      id: 1,
      campaign: "Education Support",
      amount: 5000,
      date: "15 Jun 2026",
    },
    {
      id: 2,
      campaign: "Medical Support",
      amount: 10000,
      date: "10 Jun 2026",
    },
  ];

  const campaigns = [
    {
      id: 1,
      title: "Help Rural Students",
      raised: 85000,
      goal: 100000,
    },
    {
      id: 2,
      title: "Food Support Drive",
      raised: 45000,
      goal: 75000,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Profile Header */}

        <div
          className="
          bg-white
          rounded-3xl
          shadow-sm
          p-8
          mb-8
        "
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div
              className="
              w-32
              h-32
              rounded-full
              bg-orange-500
              text-white
              text-4xl
              font-bold
              flex
              items-center
              justify-center
            "
            >
              D
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold">{user.name}</h1>

              <div className="grid md:grid-cols-2 gap-3 mt-5">
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  {user.email}
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  {user.phone}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {user.location}
                </div>

                <div className="flex items-center gap-2 text-green-600">
                  <ShieldCheck size={18} />
                  {user.kyc}
                </div>
              </div>
            </div>

            <button
              className="
              bg-orange-500
              text-white
              px-6
              py-3
              rounded-xl
              flex
              items-center
              gap-2
            "
            >
              <Edit size={18} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl">
            <Heart className="text-red-500 mb-3" size={32} />

            <h3 className="text-3xl font-bold">
              ₹{user.totalDonated.toLocaleString()}
            </h3>

            <p>Total Donations</p>
          </div>

          <div className="bg-white p-6 rounded-3xl">
            <Trophy className="text-orange-500 mb-3" size={32} />

            <h3 className="text-3xl font-bold">{user.totalCampaigns}</h3>

            <p>Fundraisers</p>
          </div>

          <div className="bg-white p-6 rounded-3xl">
            <CreditCard className="text-green-500 mb-3" size={32} />

            <h3 className="text-3xl font-bold">Verified</h3>

            <p>Account Status</p>
          </div>
        </div>

        {/* Tabs */}

        <div className="bg-white rounded-3xl shadow-sm">
          <div className="flex flex-wrap border-b">
            {["overview", "donations", "campaigns", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6
                  py-4
                  capitalize
                  font-medium
                  ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : ""
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Donations */}

            {activeTab === "donations" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Donation History</h2>

                <div className="space-y-4">
                  {donations.map((item) => (
                    <div
                      key={item.id}
                      className="
                      border
                      rounded-2xl
                      p-5
                      flex
                      flex-col
                      md:flex-row
                      justify-between
                    "
                    >
                      <div>
                        <h4 className="font-bold">{item.campaign}</h4>

                        <p className="text-gray-500">{item.date}</p>
                      </div>

                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <span className="font-bold text-green-600">
                          ₹{item.amount}
                        </span>

                        <button>
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Campaigns */}

            {activeTab === "campaigns" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Fundraisers</h2>

                <div className="space-y-5">
                  {campaigns.map((item) => (
                    <div
                      key={item.id}
                      className="
                      border
                      rounded-2xl
                      p-6
                    "
                    >
                      <h3 className="font-bold text-lg">{item.title}</h3>

                      <div className="mt-4">
                        <div className="flex justify-between mb-2">
                          <span>₹{item.raised}</span>

                          <span>₹{item.goal}</span>
                        </div>

                        <div className="h-3 bg-gray-200 rounded-full">
                          <div
                            className="
                            h-full
                            bg-orange-500
                            rounded-full
                          "
                            style={{
                              width: `${(item.raised / item.goal) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}

            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Account Overview</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-2xl p-6">
                    <h3 className="font-bold">Recent Donation</h3>

                    <p className="mt-3">Education Support</p>

                    <p className="text-green-600 font-bold">₹5,000</p>
                  </div>

                  <div className="border rounded-2xl p-6">
                    <h3 className="font-bold">Active Fundraiser</h3>

                    <p className="mt-3">Help Rural Students</p>

                    <p className="text-orange-600 font-bold">₹85,000 Raised</p>
                  </div>
                </div>
              </div>
            )}

            {/* Settings */}

            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

                <div className="space-y-4">
                  <button className="w-full text-left border p-4 rounded-xl">
                    Change Password
                  </button>

                  <button className="w-full text-left border p-4 rounded-xl">
                    Notification Preferences
                  </button>

                  <button className="w-full text-left border p-4 rounded-xl text-red-500">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
