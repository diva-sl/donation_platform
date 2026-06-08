import React, { useMemo, useState } from "react";
import CampaignCard from "../../components/campaign/CampaignCard";
import { Search, Filter } from "lucide-react";
import { campaigns } from "../../data/campaigns";

const categories = [
  "All",
  "Education",
  "Medical",
  "Food",
  "Women",
  "Children",
  "Emergency",
];

const CampaignList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

  const filteredCampaigns = useMemo(() => {
    let filtered = [...campaigns];

    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (search) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()),
      );
    }

    switch (sortBy) {
      case "raised":
        filtered.sort((a, b) => b.raisedAmount - a.raisedAmount);
        break;

      case "goal":
        filtered.sort((a, b) => b.goalAmount - a.goalAmount);
        break;

      default:
        break;
    }

    return filtered;
  }, [search, category, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="text-center mb-12">
          <span
            className="
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
          "
          >
            Explore Campaigns
          </span>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
            text-slate-900
          "
          >
            Support A Cause
          </h1>

          <p className="text-gray-600 mt-4">
            Discover campaigns making a real impact.
          </p>
        </div>

        {/* Filters */}

        <div
          className="
          bg-white
          rounded-3xl
          shadow-sm
          p-6
          mb-10
        "
        >
          <div
            className="
            grid
            md:grid-cols-3
            gap-4
          "
          >
            {/* Search */}

            <div className="relative">
              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search campaigns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  py-3
                  pl-11
                  pr-4
                "
              />
            </div>

            {/* Category */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
              "
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Sort */}

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
              "
            >
              <option value="latest">Latest Campaigns</option>

              <option value="raised">Highest Raised</option>

              <option value="goal">Highest Goal</option>
            </select>
          </div>
        </div>

        {/* Results */}

        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">
            {filteredCampaigns.length} Campaigns Found
          </h3>

          <div className="flex items-center gap-2 text-gray-500">
            <Filter size={16} />
            Active Filters
          </div>
        </div>

        {/* Grid */}

        {filteredCampaigns.length > 0 ? (
          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
          >
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div
            className="
            bg-white
            rounded-3xl
            text-center
            py-20
            shadow-sm
          "
          >
            <h3
              className="
              text-2xl
              font-bold
              text-slate-800
            "
            >
              No Campaign Found
            </h3>

            <p className="mt-3 text-gray-500">Try changing your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignList;
