import React from "react";
import { ArrowLeft, ArrowRight, User, Phone, Mail, MapPin } from "lucide-react";

const BeneficiaryStep = ({ formData, updateField, nextStep, prevStep }) => {
  const handleNext = () => {
    if (
      !formData.beneficiaryName ||
      !formData.beneficiaryAge ||
      !formData.beneficiaryGender ||
      !formData.mobile
    ) {
      alert("Please fill all required beneficiary details");
      return;
    }

    nextStep();
  };

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Beneficiary Details
        </h2>

        <p className="text-slate-500 mt-2">
          Tell donors who will receive support from this fundraiser.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Beneficiary Name */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Beneficiary Name *
          </label>

          <div className="relative">
            <User
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
              value={formData.beneficiaryName}
              onChange={(e) => updateField("beneficiaryName", e.target.value)}
              placeholder="Enter Beneficiary Name"
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

        {/* Age */}

        <div>
          <label className="block text-sm font-semibold mb-2">Age *</label>

          <input
            type="number"
            value={formData.beneficiaryAge}
            onChange={(e) => updateField("beneficiaryAge", e.target.value)}
            placeholder="Age"
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

        {/* Gender */}

        <div>
          <label className="block text-sm font-semibold mb-2">Gender *</label>

          <select
            value={formData.beneficiaryGender}
            onChange={(e) => updateField("beneficiaryGender", e.target.value)}
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
            <option value="">Select Gender</option>

            <option value="Male">Male</option>

            <option value="Female">Female</option>

            <option value="Other">Other</option>
          </select>
        </div>

        {/* Relationship */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Relationship
          </label>

          <input
            type="text"
            value={formData.relation}
            onChange={(e) => updateField("relation", e.target.value)}
            placeholder="Self / Father / Mother / Friend"
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

        {/* Mobile */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Mobile Number *
          </label>

          <div className="relative">
            <Phone
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
              type="tel"
              value={formData.mobile}
              onChange={(e) => updateField("mobile", e.target.value)}
              placeholder="+91 9876543210"
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

        {/* Email */}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail
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
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="example@gmail.com"
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

        {/* Address */}

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Address</label>

          <div className="relative">
            <MapPin
              size={18}
              className="
                absolute
                left-4
                top-4
                text-gray-400
              "
            />

            <textarea
              rows={4}
              value={formData.address || ""}
              onChange={(e) => updateField("address", e.target.value)}
              placeholder="Enter full address"
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

        {/* Medical Condition */}

        {formData.category === "Medical" && (
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">
              Medical Condition
            </label>

            <textarea
              rows={4}
              value={formData.medicalCondition || ""}
              onChange={(e) => updateField("medicalCondition", e.target.value)}
              placeholder="Describe medical condition and treatment details..."
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
        )}
      </div>

      {/* Beneficiary Preview */}

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
        <h4 className="font-semibold text-slate-900 mb-2">
          Beneficiary Summary
        </h4>

        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <p>
            <strong>Name:</strong> {formData.beneficiaryName || "-"}
          </p>

          <p>
            <strong>Age:</strong> {formData.beneficiaryAge || "-"}
          </p>

          <p>
            <strong>Gender:</strong> {formData.beneficiaryGender || "-"}
          </p>

          <p>
            <strong>Relation:</strong> {formData.relation || "-"}
          </p>
        </div>
      </div>

      {/* Navigation */}

      <div className="flex justify-between mt-8">
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
            hover:bg-gray-100
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

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
            flex
            items-center
            gap-2
            font-semibold
          "
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BeneficiaryStep;
