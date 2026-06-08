import React from "react";
import { Heart, Share2, Users, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const campaigns = [
  {
    id: 1,
    slug: "education-for-rural-children",
    title: "Help Children Continue Their Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    raised: 850000,
    goal: 1200000,
    donors: 324,
    days: 18,
    category: "Education",
  },

  {
    id: 2,
    slug: "medical-support-treatment",
    title: "Support Critical Medical Treatment",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    raised: 540000,
    goal: 800000,
    donors: 215,
    days: 12,
    category: "Medical",
  },

  {
    id: 3,
    slug: "feed-families-in-need",
    title: "Feed Families In Need",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    raised: 420000,
    goal: 700000,
    donors: 180,
    days: 21,
    category: "Food",
  },
];

const FeaturedCampaigns = () => {
  const handleShare = (campaign) => {
    navigator.share?.({
      title: campaign.title,
      text: campaign.title,
      url: `${window.location.origin}/campaign/${campaign.slug}`,
    });
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
              Featured Campaigns
            </span>

            <h2 className="text-4xl font-bold mt-4 text-slate-900">
              Make An Impact Today
            </h2>
          </div>
          <Link
            to="/campaigns"
            className="
  mt-5
  md:mt-0
  border
  border-orange-500
  text-orange-500
  px-6
  py-3
  rounded-xl
  font-semibold
  hover:bg-orange-500
  hover:text-white
  transition
"
          >
            View All Campaigns
          </Link>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const percentage = (campaign.raised / campaign.goal) * 100;

            return (
              <div
                key={campaign.id}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  border
                  border-gray-100
                "
              >
                <div className="relative">
                  <Link to={`/campaign/${campaign.slug}`}>
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="
    h-64
    w-full
    object-cover
    group-hover:scale-105
    transition-all
    duration-500
  "
                    />
                  </Link>
                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      bg-white
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    {campaign.category}
                  </span>
                  <span
                    className="
  absolute
  top-4
  right-4
  bg-orange-500
  text-white
  px-3
  py-1
  rounded-full
  text-xs
  font-semibold
"
                  >
                    Featured
                  </span>
                </div>

                <div className="p-5">
                  <Link to={`/campaign/${campaign.slug}`}>
                    <h3
                      className="
    font-bold
    text-lg
    text-slate-900
    hover:text-orange-500
    transition
    line-clamp-2
    h-14
    leading-7
  "
                    >
                      {campaign.title}
                    </h3>
                  </Link>
                  <div className="mt-6">
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Raised</span>
                      <span>{Math.round(percentage)}%</span>
                    </div>

                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>

                    <div className="flex justify-between mt-3 text-sm">
                      <span>₹{campaign.raised.toLocaleString()}</span>

                      <span>Goal ₹{campaign.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      mt-6
                      text-sm
                      text-gray-500
                    "
                  >
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {campaign.donors}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {campaign.days} Days Left
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Link
                      to={`/campaign/${campaign.slug}`}
                      className="
  flex-1
  bg-orange-500
  text-white
  py-3
  rounded-xl
  font-semibold
  hover:bg-orange-600
  text-center
"
                    >
                      Donate Now
                    </Link>
                    <button
                      onClick={() => handleShare(campaign)}
                      className="
  w-12
  h-12
  rounded-xl
  border
  flex
  items-center
  justify-center
"
                    >
                      <Share2 size={18} />
                    </button>
                    <button
                      className="
  w-12
  h-12
  rounded-xl
  border
  flex
  items-center
  justify-center
  hover:bg-red-50
  hover:border-red-300
"
                    >
                      <Heart size={18} className="hover:text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
