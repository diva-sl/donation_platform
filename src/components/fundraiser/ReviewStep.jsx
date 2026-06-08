import React from "react";
import { ArrowLeft, CheckCircle, HeartHandshake } from "lucide-react";

const ReviewStep = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <HeartHandshake size={32} className="text-orange-500" />

          <h2 className="text-3xl font-bold text-slate-900">
            Review Your Campaign
          </h2>
        </div>

        <p className="text-slate-500 mt-2">
          Please verify all details before submitting your fundraiser.
        </p>
      </div>

      {/* Campaign Card */}

      <div className="space-y-6">
        {/* Campaign Information */}

        <div className="bg-white border rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-5">Campaign Details</h3>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="text-sm text-gray-500">Campaign Title</p>

              <p className="font-semibold">{formData.title}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Category</p>

              <p className="font-semibold">{formData.category}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Goal Amount</p>

              <p className="font-semibold text-green-600">
                ₹{Number(formData.goalAmount || 0).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Campaign Location</p>

              <p className="font-semibold">{formData.location}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm text-gray-500 mb-2">Campaign Story</p>

            <div className="bg-gray-50 rounded-2xl p-4 text-sm text-slate-700 leading-7">
              {formData.story}
            </div>
          </div>
        </div>

        {/* Beneficiary */}

        <div className="bg-white border rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-5">Beneficiary Details</h3>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="text-sm text-gray-500">Beneficiary Name</p>

              <p className="font-semibold">{formData.beneficiaryName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Relationship</p>

              <p className="font-semibold">{formData.relation}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Age</p>

              <p className="font-semibold">{formData.age}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Gender</p>

              <p className="font-semibold">{formData.gender}</p>
            </div>
          </div>
        </div>

        {/* Organizer */}

        <div className="bg-white border rounded-3xl p-6">
          <h3 className="text-xl font-bold mb-5">Organizer Information</h3>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="text-sm text-gray-500">Organizer</p>

              <p className="font-semibold">{formData.organizerName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>

              <p className="font-semibold">{formData.organizerEmail}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Mobile</p>

              <p className="font-semibold">{formData.organizerPhone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">City</p>

              <p className="font-semibold">{formData.organizerCity}</p>
            </div>
          </div>
        </div>

        {/* Cover Image */}

        {formData.coverPreview && (
          <div className="bg-white border rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-5">Campaign Cover</h3>

            <img
              src={formData.coverPreview}
              alt="Campaign Cover"
              className="
                w-full
                md:w-[500px]
                h-72
                object-cover
                rounded-2xl
              "
            />
          </div>
        )}

        {/* Verification */}

        <div className="bg-green-50 border border-green-200 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-green-600" size={26} />

            <h3 className="text-xl font-bold text-green-700">
              Verification Summary
            </h3>
          </div>

          <div className="space-y-3 text-sm">
            <p>✓ Terms & Conditions Accepted</p>

            <p>✓ Campaign Guidelines Accepted</p>

            <p>✓ Identity Verification Submitted</p>

            <p>✓ Bank Details Added</p>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={prevStep}
          className="
            border
            border-gray-300
            px-6
            py-3
            rounded-xl
            flex
            items-center
            gap-2
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="
            bg-green-600
            hover:bg-green-700
            text-white
            px-8
            py-3
            rounded-xl
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <CheckCircle size={18} />
          Submit Campaign
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;
