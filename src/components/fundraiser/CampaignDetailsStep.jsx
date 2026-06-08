import React from "react";
import { ArrowRight, MapPin, Target } from "lucide-react";

const categories = [
  "Temple Renovation",
  "Medical",
  "Education",
  "Food Support",
  "Children",
  "Women Empowerment",
  "Old Age Care",
  "Emergency Relief",
  "Community Welfare",
  "Animal Welfare",
];

const CampaignDetailsStep = ({ formData, updateField, nextStep }) => {
  const handleNext = () => {
    if (
      !formData.title ||
      !formData.category ||
      !formData.goalAmount ||
      !formData.location ||
      !formData.shortDescription ||
      !formData.story
    ) {
      alert("Please fill all required fields");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Campaign Information
        </h2>

        <p className="text-slate-500 mt-2">
          Tell donors about your fundraising campaign.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Campaign Title */}

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">
            Campaign Title *
          </label>

          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Example: Help Build Temple Renovation Project"
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
          />
        </div>

        {/* Category */}

        <div>
          <label className="block text-sm font-semibold mb-2">Category *</label>

          <select
            value={formData.category}
            onChange={(e) => updateField("category", e.target.value)}
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
          >
            <option value="">Select Campaign Category</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Goal Amount */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Goal Amount *
          </label>

          <div className="relative">
            <Target
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
              type="number"
              value={formData.goalAmount}
              onChange={(e) => updateField("goalAmount", e.target.value)}
              placeholder="500000"
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                pl-12
                pr-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-500
              "
            />
          </div>
        </div>

        {/* Location */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Campaign Location *
          </label>

          <div className="relative">
            <MapPin
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
              value={formData.location}
              onChange={(e) => updateField("location", e.target.value)}
              placeholder="Chennai, Tamil Nadu"
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                pl-12
                pr-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-500
              "
            />
          </div>
        </div>

        {/* Deadline */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Fundraising Deadline
          </label>

          <input
            type="date"
            value={formData.deadline}
            onChange={(e) => updateField("deadline", e.target.value)}
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
          />
        </div>

        {/* Short Description */}

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">
            Short Description *
          </label>

          <textarea
            rows={3}
            maxLength={150}
            value={formData.shortDescription}
            onChange={(e) => updateField("shortDescription", e.target.value)}
            placeholder="Brief summary donors will see in campaign cards..."
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              px-4
              py-3
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
          />

          <p className="text-xs text-gray-500 mt-2">
            {formData.shortDescription.length}/150 characters
          </p>
        </div>

        {/* Story */}

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">
            Campaign Story *
          </label>

          <textarea
            rows={8}
            value={formData.story}
            onChange={(e) => updateField("story", e.target.value)}
            placeholder="Explain why you're raising funds, how donations will be used, and why people should support your cause..."
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
          />
        </div>
      </div>

      {/* Goal Preview */}

      <div
        className="
          mt-8
          bg-orange-50
          border
          border-orange-100
          rounded-2xl
          p-5
        "
      >
        <p className="text-sm text-slate-500">Fundraising Goal</p>

        <h3 className="text-3xl font-bold text-orange-600 mt-1">
          ₹{Number(formData.goalAmount || 0).toLocaleString()}
        </h3>
      </div>

      {/* Buttons */}

      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={handleNext}
          className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-8
            py-3
            rounded-xl
            font-semibold
            flex
            items-center
            gap-2
            transition-all
          "
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CampaignDetailsStep;
