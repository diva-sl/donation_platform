import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  PlusCircle,
  FolderHeart,
} from "lucide-react";

const SuccessStep = ({ campaignId = "MYS-2026-001" }) => {
  return (
    <div className="text-center py-6">
      {/* Success Icon */}

      <div
        className="
          w-28
          h-28
          rounded-full
          bg-green-100
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >
        <CheckCircle2 size={70} className="text-green-600" />
      </div>

      {/* Heading */}

      <h2 className="text-4xl font-bold text-slate-900">
        Campaign Submitted Successfully 🎉
      </h2>

      <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
        Thank you for choosing Mysticpace. Your fundraiser has been submitted
        successfully and is currently under review by our verification team.
      </p>

      {/* Campaign ID */}

      <div
        className="
          mt-8
          bg-orange-50
          border
          border-orange-200
          rounded-3xl
          p-6
          max-w-lg
          mx-auto
        "
      >
        <p className="text-sm text-slate-500">Campaign Reference ID</p>

        <h3 className="text-2xl font-bold text-orange-600 mt-2">
          {campaignId}
        </h3>
      </div>

      {/* Status Cards */}

      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <div className="bg-white border rounded-3xl p-6">
          <Clock3 className="text-orange-500 mx-auto mb-4" size={36} />

          <h4 className="font-bold">Verification Review</h4>

          <p className="text-sm text-slate-500 mt-2">
            Our team reviews campaign details and documents.
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <CheckCircle2 className="text-green-500 mx-auto mb-4" size={36} />

          <h4 className="font-bold">Approval Process</h4>

          <p className="text-sm text-slate-500 mt-2">
            Most campaigns are approved within 24-48 hours.
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <FolderHeart className="text-blue-500 mx-auto mb-4" size={36} />

          <h4 className="font-bold">Fundraising Starts</h4>

          <p className="text-sm text-slate-500 mt-2">
            Once approved, your campaign becomes visible to donors.
          </p>
        </div>
      </div>

      {/* Timeline */}

      <div
        className="
          mt-10
          bg-slate-50
          rounded-3xl
          p-6
          max-w-3xl
          mx-auto
          text-left
        "
      >
        <h3 className="font-bold text-xl mb-5">What Happens Next?</h3>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
              1
            </div>

            <div>
              <h4 className="font-semibold">Document Verification</h4>

              <p className="text-sm text-slate-500">
                Uploaded documents are reviewed for authenticity.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
              2
            </div>

            <div>
              <h4 className="font-semibold">Campaign Approval</h4>

              <p className="text-sm text-slate-500">
                The campaign is approved by the Mysticpace team.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
              3
            </div>

            <div>
              <h4 className="font-semibold">Start Receiving Donations</h4>

              <p className="text-sm text-slate-500">
                Your fundraiser becomes publicly visible and starts receiving
                support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Link
          to="/dashboard"
          className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <LayoutDashboard size={18} />
          Go To Dashboard
        </Link>

        <Link
          to="/my-campaigns"
          className="
            border
            border-gray-300
            px-6
            py-3
            rounded-xl
            font-semibold
          "
        >
          View My Campaigns
        </Link>

        <Link
          to="/start-fundraiser"
          className="
            border
            border-orange-500
            text-orange-600
            px-6
            py-3
            rounded-xl
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <PlusCircle size={18} />
          Create Another
        </Link>
      </div>

      {/* Support */}

      <p className="mt-8 text-sm text-slate-500">
        Need help? Contact our support team at{" "}
        <span className="font-medium text-orange-600">
          support@mysticpace.com
        </span>
      </p>
    </div>
  );
};

export default SuccessStep;
