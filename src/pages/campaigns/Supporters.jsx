import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Search,
  Users,
  Trophy,
  Heart,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { campaigns } from "../../data/campaigns";
import { donors } from "../../data/donors";

const ITEMS_PER_PAGE = 10;

const Supporters = () => {
  const { slug } = useParams();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const campaign = campaigns.find((item) => item.slug === slug);

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Campaign Not Found</h2>
      </div>
    );
  }

  const campaignDonors = useMemo(() => {
    let filtered = donors.filter((donor) => donor.campaignId === campaign.id);

    if (search) {
      filtered = filtered.filter((donor) =>
        donor.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    switch (filter) {
      case "top":
        filtered.sort((a, b) => b.amount - a.amount);
        break;

      case "anonymous":
        filtered = filtered.filter((donor) => donor.anonymous);
        break;

      default:
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt || Date.now()) -
            new Date(a.createdAt || Date.now()),
        );
        break;
    }

    return filtered;
  }, [campaign.id, filter, search]);

  const totalPages = Math.ceil(campaignDonors.length / ITEMS_PER_PAGE);

  const paginatedDonors = campaignDonors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const totalRaised = campaignDonors.reduce(
    (acc, donor) => acc + donor.amount,
    0,
  );

  const averageDonation =
    campaignDonors.length > 0
      ? Math.round(totalRaised / campaignDonors.length)
      : 0;

  const highestDonation =
    campaignDonors.length > 0
      ? Math.max(...campaignDonors.map((d) => d.amount))
      : 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}

      <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            Supporters
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-5">
            Campaign Supporters
          </h1>

          <p className="mt-3 text-orange-50 max-w-2xl">
            Every supporter helps bring this campaign closer to its goal.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Stats */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <Users size={24} className="text-orange-500" />

            <h3 className="text-2xl font-bold mt-3">{campaignDonors.length}</h3>

            <p className="text-gray-500 text-sm">Total Supporters</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <Heart size={24} className="text-green-500" />

            <h3 className="text-2xl font-bold mt-3">
              ₹{totalRaised.toLocaleString()}
            </h3>

            <p className="text-gray-500 text-sm">Total Donations</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <Trophy size={24} className="text-yellow-500" />

            <h3 className="text-2xl font-bold mt-3">
              ₹{highestDonation.toLocaleString()}
            </h3>

            <p className="text-gray-500 text-sm">Highest Donation</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <Calendar size={24} className="text-blue-500" />

            <h3 className="text-2xl font-bold mt-3">
              ₹{averageDonation.toLocaleString()}
            </h3>

            <p className="text-gray-500 text-sm">Average Donation</p>
          </div>
        </div>

        {/* Search & Filters */}

        <div className="bg-white rounded-2xl shadow-sm p-5 mb-8">
          <div className="grid lg:grid-cols-2 gap-4">
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
                placeholder="Search supporter..."
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

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("latest")}
                className={`px-4 py-2 rounded-xl font-medium ${
                  filter === "latest"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Latest
              </button>

              <button
                onClick={() => setFilter("top")}
                className={`px-4 py-2 rounded-xl font-medium ${
                  filter === "top" ? "bg-orange-500 text-white" : "bg-gray-100"
                }`}
              >
                Top Donors
              </button>

              <button
                onClick={() => setFilter("anonymous")}
                className={`px-4 py-2 rounded-xl font-medium ${
                  filter === "anonymous"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Anonymous
              </button>
            </div>
          </div>
        </div>

        {/* Supporters List */}

        <div className="space-y-4">
          {paginatedDonors.length > 0 ? (
            paginatedDonors.map((donor) => (
              <div
                key={donor.id}
                className="
                bg-white
                rounded-2xl
                shadow-sm
                p-5
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
              "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-orange-500
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                  >
                    {donor.anonymous
                      ? "A"
                      : donor.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {donor.anonymous ? "Anonymous Supporter" : donor.name}
                    </h3>

                    <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                      <MapPin size={13} />
                      {donor.city || "India"}
                    </div>

                    {donor.message && (
                      <p className="text-sm text-gray-600 mt-2">
                        "{donor.message}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <h3 className="font-bold text-green-600 text-lg">
                    ₹{donor.amount.toLocaleString()}
                  </h3>

                  <p className="text-sm text-gray-500">{donor.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl p-16 text-center">
              <h3 className="text-2xl font-bold">No Supporters Found</h3>

              <p className="text-gray-500 mt-2">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="
              px-4
              py-2
              border
              rounded-xl
              disabled:opacity-50
            "
            >
              <ChevronLeft size={18} />
            </button>

            <span className="font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="
              px-4
              py-2
              border
              rounded-xl
              disabled:opacity-50
            "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supporters;
