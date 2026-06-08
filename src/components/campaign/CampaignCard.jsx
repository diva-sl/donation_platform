import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Share2,
  Users,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const CampaignCard = ({ campaign }) => {
  const progress = Math.min(
    (campaign?.raisedAmount / campaign?.goalAmount) * 100,
    100,
  );

  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      border
      border-gray-100
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      group
      flex
      flex-col
      h-full
    "
    >
      {/* Campaign Image */}
      <div className="relative overflow-hidden">
        <img
          src={campaign?.image}
          alt={campaign?.title}
          loading="lazy"
          className="
            h-52
            lg:h-56
            w-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />

        {/* Category */}
        <span
          className="
          absolute
          top-3
          left-3
          bg-white
          text-orange-600
          text-xs
          px-3
          py-1
          rounded-full
          font-medium
          shadow
        "
        >
          {campaign?.category}
        </span>

        {/* Wishlist */}
        <button
          className="
          absolute
          top-3
          right-3
          bg-white
          w-9
          h-9
          rounded-full
          flex
          items-center
          justify-center
          shadow
          hover:bg-red-50
          transition
        "
        >
          <Heart size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="
          text-lg
          font-bold
          text-slate-900
          line-clamp-2
          min-h-[52px]
        "
        >
          {campaign?.title}
        </h3>

        {/* Description */}
        <p
          className="
          text-sm
          text-slate-600
          mt-2
          leading-5
          line-clamp-2
          min-h-[40px]
        "
        >
          {campaign?.shortDescription}
        </p>

        {/* Organizer */}
        <div className="flex items-center gap-1 mt-3">
          <ShieldCheck size={14} className="text-green-600" />

          <p className="text-xs text-gray-500 truncate">
            By {campaign?.organizer}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
          <MapPin size={13} />
          <span>{campaign?.location || "India"}</span>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="font-medium text-gray-600">
              {Math.round(progress)}% Funded
            </span>

            <span className="font-semibold text-green-600">
              ₹{campaign?.raisedAmount?.toLocaleString()}
            </span>
          </div>

          <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="flex justify-between mt-3">
            <div>
              <p className="text-[11px] text-gray-400">Goal</p>

              <p className="font-semibold text-sm text-slate-800">
                ₹{campaign?.goalAmount?.toLocaleString()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[11px] text-gray-400">Raised</p>

              <p className="font-semibold text-sm text-green-600">
                ₹{campaign?.raisedAmount?.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="
          flex
          justify-between
          items-center
          mt-4
          pt-3
          border-t
          text-xs
          text-gray-500
        "
        >
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{campaign?.donors} Donors</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock3 size={14} />
            <span>{campaign?.daysLeft} Days Left</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-4">
          <Link
            to={`/campaign/${campaign?.slug}`}
            className="
            flex-1
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-2.5
            rounded-xl
            text-sm
            font-semibold
            text-center
            transition
          "
          >
            Donate Now
          </Link>

          <button
            className="
            w-10
            h-10
            border
            border-gray-200
            rounded-xl
            flex
            items-center
            justify-center
            hover:bg-gray-50
            transition
          "
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
