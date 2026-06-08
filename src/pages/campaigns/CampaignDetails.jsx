import React from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Users,
  Clock3,
  Share2,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import DonationForm from "../../components/campaign/DonationForm";
import CampaignCard from "../../components/campaign/CampaignCard";
import { campaigns } from "../../data/campaigns";

const CampaignDetails = () => {
  const { slug } = useParams();

  const campaign = campaigns.find((item) => item.slug === slug);

  if (!campaign) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold">Campaign Not Found</h2>
      </div>
    );
  }

  const progress = (campaign.raisedAmount / campaign.goalAmount) * 100;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}

      <section className="relative">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="
            w-full
            h-[500px]
            object-cover
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-black/50
        "
        />

        <div
          className="
          absolute
          inset-0
          flex
          items-center
        "
        >
          <div className="max-w-7xl mx-auto px-4 text-white">
            <span
              className="
              bg-orange-500
              px-4
              py-2
              rounded-full
            "
            >
              {campaign.category}
            </span>

            <h1
              className="
              text-4xl
              md:text-6xl
              font-bold
              mt-6
              max-w-4xl
            "
            >
              {campaign.title}
            </h1>

            <div
              className="
              flex
              flex-wrap
              gap-6
              mt-6
            "
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {campaign.location}
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                {campaign.donors} Donors
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                {campaign.daysLeft} Days Left
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="
          grid
          lg:grid-cols-3
          gap-10
        "
        >
          {/* Left */}

          <div className="lg:col-span-2">
            {/* Progress */}

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
            "
            >
              <h3 className="text-2xl font-bold">Campaign Progress</h3>

              <div className="mt-6">
                <div className="flex justify-between mb-3">
                  <span>Raised</span>

                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-4 bg-gray-200 rounded-full">
                  <div
                    className="
                    h-full
                    bg-orange-500
                    rounded-full
                  "
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <div
                  className="
                  flex
                  justify-between
                  mt-4
                "
                >
                  <div>
                    <p className="text-sm text-gray-500">Raised</p>

                    <h4 className="text-2xl font-bold text-green-600">
                      ₹{campaign.raisedAmount.toLocaleString()}
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Goal</p>

                    <h4 className="text-2xl font-bold">
                      ₹{campaign.goalAmount.toLocaleString()}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              mt-8
            "
            >
              <h2 className="text-3xl font-bold">Story</h2>

              <div className="mt-6 space-y-5 text-gray-700 leading-8">
                <p>
                  This campaign aims to provide critical support for individuals
                  and communities in need.
                </p>

                <p>
                  Every contribution directly helps improve lives through
                  education, healthcare, food support and emergency assistance.
                </p>

                <p>
                  Your support makes a measurable difference and helps us
                  achieve our mission.
                </p>
              </div>
            </div>

            {/* Updates */}

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              mt-8
            "
            >
              <h2 className="text-3xl font-bold">Campaign Updates</h2>

              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-orange-500 pl-5">
                  <h4 className="font-bold">First Milestone Achieved</h4>

                  <p className="text-gray-600 mt-2">
                    Thanks to all donors. We have reached 50% of our target.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-5">
                  <h4 className="font-bold">Community Outreach Started</h4>

                  <p className="text-gray-600 mt-2">
                    Initial beneficiaries have begun receiving support.
                  </p>
                </div>
              </div>
            </div>

            {/* Share */}

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              mt-8
            "
            >
              <h2 className="text-2xl font-bold">Share Campaign</h2>

              <div className="flex gap-4 mt-6">
                <button className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Facebook size={18} />
                </button>

                <button className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center">
                  <Twitter size={18} />
                </button>

                <button className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center">
                  <Linkedin size={18} />
                </button>

                <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}

          <div>
            <div className="sticky top-24">
              <DonationForm
                campaignId={campaign.id}
                campaignTitle={campaign.title}
              />
            </div>
          </div>
        </div>

        {/* Similar Campaigns */}

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Similar Campaigns</h2>

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
          >
            {campaigns
              .filter((item) => item.id !== campaign.id)
              .slice(0, 3)
              .map((item) => (
                <CampaignCard key={item.id} campaign={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
