import React from "react";
import { Link } from "react-router-dom";
import { Heart, Share2, Users, Clock3, MapPin } from "lucide-react";

const CampaignCard = ({ campaign }) => {
  const progress = (campaign?.raisedAmount / campaign?.goalAmount) * 100;

  return (
    <div
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
      group
    "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={campaign?.image}
          alt={campaign?.title}
          loading="lazy"
          className="
            h-60
            w-full
            object-cover
            group-hover:scale-105
            transition-all
            duration-500
          "
        />

        <span
          className="
            absolute
            top-4
            left-4
            bg-white
            text-orange-600
            text-sm
            px-3
            py-1
            rounded-full
            font-medium
          "
        >
          {campaign?.category}
        </span>

        <button
          className="
            absolute
            top-4
            right-4
            bg-white
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            shadow-md
          "
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
            text-xl
            font-bold
            text-slate-900
            line-clamp-2
          "
        >
          {campaign?.title}
        </h3>

        <p
          className="
            text-slate-500
            mt-3
            line-clamp-3
          "
        >
          {campaign?.description}
        </p>

        {/* Location */}

        <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
          <MapPin size={14} />
          {campaign?.location}
        </div>

        {/* Progress */}

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Raised</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="flex justify-between mt-3">
            <div>
              <p className="text-xs text-slate-500">Raised</p>

              <h4 className="font-bold text-green-600">
                ₹{campaign?.raisedAmount?.toLocaleString()}
              </h4>
            </div>

            <div>
              <p className="text-xs text-slate-500">Goal</p>

              <h4 className="font-bold text-slate-900">
                ₹{campaign?.goalAmount?.toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div
          className="
            flex
            justify-between
            mt-6
            text-sm
            text-slate-500
          "
        >
          <div className="flex items-center gap-2">
            <Users size={16} />
            {campaign?.donors} Donors
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            {campaign?.daysLeft} Days
          </div>
        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">
          <Link
            to={`/campaign/${campaign?.slug}`}
            className="
              flex-1
              text-center
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            Donate Now
          </Link>

          <button
            className="
              w-12
              h-12
              border
              rounded-xl
              flex
              items-center
              justify-center
            "
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
