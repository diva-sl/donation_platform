import React from "react";
import { useParams } from "react-router-dom";
import { MapPin, Users, Clock3 } from "lucide-react";

import DonationForm from "../../components/campaign/DonationForm";
import CampaignCard from "../../components/campaign/CampaignCard";

import OrganizerCard from "../campaigns/OrganizerCard";
import RecentDonors from "../campaigns/RecentDonors";
import TopDonors from "../campaigns/TopDonors";
import CommentsSection from "../campaigns/CommentsSection";
import ActivityFeed from "../campaigns/ActivityFeed";
import ShareCampaign from "../campaigns/ShareCampaign";

import { campaigns } from "../../data/campaigns";
import { donors } from "../../data/donors";

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
          h-[400px]
          md:h-[500px]
          object-cover
        "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-white">
            <span
              className="
              bg-orange-500
              px-4
              py-2
              rounded-full
              text-sm
            "
            >
              {campaign.category}
            </span>

            <h1
              className="
              text-3xl
              md:text-5xl
              lg:text-6xl
              font-bold
              mt-5
              max-w-4xl
            "
            >
              {campaign.title}
            </h1>

            <div
              className="
              flex
              flex-wrap
              gap-4
              md:gap-6
              mt-5
            "
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {campaign.location || "India"}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">Campaign Progress</h2>

              <div className="mt-5">
                <div className="flex justify-between mb-2">
                  <span>Raised</span>
                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Raised</p>

                    <h3 className="text-xl font-bold text-green-600">
                      ₹{campaign.raisedAmount.toLocaleString()}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">Goal</p>

                    <h3 className="text-xl font-bold">
                      ₹{campaign.goalAmount.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Alert */}
            <div
              className="
              bg-green-50
              border
              border-green-100
              rounded-2xl
              p-4
              mt-6
            "
            >
              <p className="font-medium text-green-700">
                🎉 Recent Donation Activity
              </p>

              <p className="text-sm text-green-600 mt-1">
                Rajesh donated ₹2,500 • 5 mins ago
              </p>
            </div>

            {/* Story */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
              <h2 className="text-2xl font-bold">Story</h2>

              <div className="mt-5 space-y-5 text-gray-700 leading-8">
                <p>{campaign.description}</p>

                <p>
                  Every contribution directly impacts lives and helps
                  communities receive the support they need.
                </p>

                <p>
                  Together we can create meaningful change and reach our
                  fundraising goal.
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
              <h2 className="text-2xl font-bold">Campaign Updates</h2>

              <div className="mt-6 space-y-5">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">First Milestone Achieved</h4>

                  <p className="text-gray-600 mt-2">
                    We reached 50% of our goal.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Community Outreach Started</h4>

                  <p className="text-gray-600 mt-2">
                    Support has started reaching beneficiaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Donors */}
            <RecentDonors donors={donors} campaignSlug={campaign.slug} />

            {/* Top Donors */}
            <TopDonors donors={donors} />

            {/* Comments */}
            <CommentsSection />
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">
              <DonationForm
                campaignId={campaign.id}
                campaignTitle={campaign.title}
              />

              <OrganizerCard organizer={campaign.organizer} />

              <ActivityFeed />

              <ShareCampaign />
            </div>
          </div>
        </div>

        {/* Similar Campaigns */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Campaigns</h2>

          <div
            className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
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
