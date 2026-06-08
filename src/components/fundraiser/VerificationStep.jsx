import React from "react";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

const VerificationStep = ({ formData, updateField, nextStep, prevStep }) => {
  const handleChange = (e) => {
    updateField(e.target.name, e.target.value);
  };

  const handleNext = () => {
    if (
      !formData.organizerName ||
      !formData.organizerEmail ||
      !formData.organizerPhone
    ) {
      alert("Please fill organizer details");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Please accept Terms & Conditions");
      return;
    }

    nextStep();
  };

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <ShieldCheck size={30} className="text-orange-500" />

          <h2 className="text-3xl font-bold text-slate-900">
            Verification Details
          </h2>
        </div>

        <p className="text-slate-500 mt-3">
          These details are used to verify campaign ownership and process
          fundraiser payouts.
        </p>
      </div>

      <div className="space-y-8">
        {/* Organizer Details */}

        <div className="bg-gray-50 rounded-3xl p-6">
          <h3 className="font-bold text-lg mb-5">Organizer Information</h3>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="organizerName"
              placeholder="Organizer Full Name"
              value={formData.organizerName || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
                w-full
              "
            />

            <input
              type="email"
              name="organizerEmail"
              placeholder="Email Address"
              value={formData.organizerEmail || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
                w-full
              "
            />

            <input
              type="tel"
              name="organizerPhone"
              placeholder="Mobile Number"
              value={formData.organizerPhone || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
                w-full
              "
            />

            <input
              type="text"
              name="organizerCity"
              placeholder="City"
              value={formData.organizerCity || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
                w-full
              "
            />
          </div>
        </div>

        {/* Identity Details */}

        <div className="bg-gray-50 rounded-3xl p-6">
          <h3 className="font-bold text-lg mb-5">Identity Verification</h3>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="panNumber"
              placeholder="PAN Number"
              value={formData.panNumber || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
              "
            />

            <input
              type="text"
              name="aadhaarNumber"
              placeholder="Aadhaar Number"
              value={formData.aadhaarNumber || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
              "
            />
          </div>
        </div>

        {/* Bank Details */}

        <div className="bg-gray-50 rounded-3xl p-6">
          <h3 className="font-bold text-lg mb-5">Bank Account Details</h3>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="accountHolderName"
              placeholder="Account Holder Name"
              value={formData.accountHolderName || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
              "
            />

            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={formData.bankName || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
              "
            />

            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
              "
            />

            <input
              type="text"
              name="ifscCode"
              placeholder="IFSC Code"
              value={formData.ifscCode || ""}
              onChange={handleChange}
              className="
                border
                rounded-xl
                px-4
                py-3
              "
            />
          </div>
        </div>

        {/* Agreements */}

        <div className="bg-orange-50 rounded-3xl p-6">
          <h3 className="font-bold mb-4">Campaign Agreements</h3>

          <div className="space-y-4">
            <label className="flex gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acceptTerms || false}
                onChange={(e) => updateField("acceptTerms", e.target.checked)}
              />

              <span className="text-sm">
                I agree to the Terms & Conditions, Privacy Policy and
                Fundraising Guidelines.
              </span>
            </label>

            <label className="flex gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acceptFraudPolicy || false}
                onChange={(e) =>
                  updateField("acceptFraudPolicy", e.target.checked)
                }
              />

              <span className="text-sm">
                I confirm all campaign information is genuine and not
                misleading.
              </span>
            </label>

            <label className="flex gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acceptVerification || false}
                onChange={(e) =>
                  updateField("acceptVerification", e.target.checked)
                }
              />

              <span className="text-sm">
                I understand Mysticpace may request additional verification
                documents before approval.
              </span>
            </label>
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

export default VerificationStep;
