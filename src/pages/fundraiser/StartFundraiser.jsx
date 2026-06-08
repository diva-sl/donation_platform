import React, { useState } from "react";
import {
  HeartHandshake,
  Upload,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const categories = [
  "Medical",
  "Education",
  "Food Support",
  "Children",
  "Women Empowerment",
  "Emergency Relief",
  "Community Welfare",
  "Animal Welfare",
  "Other",
];

const StartFundraiser = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    goalAmount: "",
    story: "",
    beneficiaryName: "",
    relation: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Fundraiser Submitted Successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}

      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <HeartHandshake size={60} className="mx-auto mb-5" />

          <h1 className="text-5xl font-bold">Start A Fundraiser</h1>

          <p className="mt-5 text-lg">
            Raise funds for medical, education, community and social causes.
          </p>
        </div>
      </section>

      {/* Step Indicator */}

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center flex-1">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold
                  ${step >= item ? "bg-orange-500 text-white" : "bg-gray-300"}
                `}
              >
                {step > item ? <CheckCircle size={22} /> : item}
              </div>

              <p className="mt-2 text-sm">
                {item === 1 && "Campaign Details"}

                {item === 2 && "Beneficiary"}

                {item === 3 && "Review"}
              </p>
            </div>
          ))}
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
          "
        >
          {/* STEP 1 */}

          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold mb-8">Campaign Details</h2>

              <div className="space-y-5">
                <input
                  type="text"
                  name="title"
                  placeholder="Campaign Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                  "
                >
                  <option>Select Category</option>

                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  name="goalAmount"
                  placeholder="Goal Amount"
                  value={formData.goalAmount}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <textarea
                  rows="6"
                  name="story"
                  placeholder="Tell your story..."
                  value={formData.story}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                  "
                />
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="
                  mt-8
                  bg-orange-500
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  flex
                  items-center
                  gap-2
                "
              >
                Next
                <ArrowRight size={18} />
              </button>
            </>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold mb-8">Beneficiary Details</h2>

              <div className="space-y-5">
                <input
                  type="text"
                  name="beneficiaryName"
                  placeholder="Beneficiary Name"
                  value={formData.beneficiaryName}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <input
                  type="text"
                  name="relation"
                  placeholder="Relationship"
                  value={formData.relation}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <label
                  className="
                    border-2
                    border-dashed
                    rounded-2xl
                    p-10
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                  "
                >
                  <Upload size={40} />

                  <p className="mt-4">Upload Campaign Image</p>

                  <input type="file" hidden />
                </label>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="
                    border
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
                  onClick={nextStep}
                  className="
                    bg-orange-500
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    flex
                    items-center
                    gap-2
                  "
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold mb-8">Review Campaign</h2>

              <div className="space-y-4">
                <div>
                  <strong>Title:</strong> {formData.title}
                </div>

                <div>
                  <strong>Category:</strong> {formData.category}
                </div>

                <div>
                  <strong>Goal:</strong> ₹{formData.goalAmount}
                </div>

                <div>
                  <strong>Beneficiary:</strong> {formData.beneficiaryName}
                </div>

                <div>
                  <strong>Relation:</strong> {formData.relation}
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button
                  type="button"
                  onClick={prevStep}
                  className="
                    border
                    px-6
                    py-3
                    rounded-xl
                  "
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="
                    bg-green-600
                    text-white
                    px-8
                    py-3
                    rounded-xl
                  "
                >
                  Submit Campaign
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default StartFundraiser;
