// import React, { useState } from "react";
// import {
//   HeartHandshake,
//   Upload,
//   ArrowRight,
//   ArrowLeft,
//   CheckCircle,
// } from "lucide-react";

// const categories = [
//   "Medical",
//   "Education",
//   "Food Support",
//   "Children",
//   "Women Empowerment",
//   "Emergency Relief",
//   "Community Welfare",
//   "Animal Welfare",
//   "Other",
// ];

// const StartFundraiser = () => {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     goalAmount: "",
//     story: "",
//     beneficiaryName: "",
//     relation: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const nextStep = () => {
//     setStep((prev) => prev + 1);
//   };

//   const prevStep = () => {
//     setStep((prev) => prev - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     alert("Fundraiser Submitted Successfully!");
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero */}

//       <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
//         <div className="max-w-5xl mx-auto px-4 text-center text-white">
//           <HeartHandshake size={60} className="mx-auto mb-5" />

//           <h1 className="text-5xl font-bold">Start A Fundraiser</h1>

//           <p className="mt-5 text-lg">
//             Raise funds for medical, education, community and social causes.
//           </p>
//         </div>
//       </section>

//       {/* Step Indicator */}

//       <section className="max-w-5xl mx-auto px-4 py-10">
//         <div className="flex justify-between items-center mb-12">
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="flex flex-col items-center flex-1">
//               <div
//                 className={`
//                   w-12 h-12 rounded-full flex items-center justify-center font-bold
//                   ${step >= item ? "bg-orange-500 text-white" : "bg-gray-300"}
//                 `}
//               >
//                 {step > item ? <CheckCircle size={22} /> : item}
//               </div>

//               <p className="mt-2 text-sm">
//                 {item === 1 && "Campaign Details"}

//                 {item === 2 && "Beneficiary"}

//                 {item === 3 && "Review"}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Form */}

//         <form
//           onSubmit={handleSubmit}
//           className="
//             bg-white
//             rounded-3xl
//             shadow-lg
//             p-8
//           "
//         >
//           {/* STEP 1 */}

//           {step === 1 && (
//             <>
//               <h2 className="text-3xl font-bold mb-8">Campaign Details</h2>

//               <div className="space-y-5">
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Campaign Title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="
//                     w-full
//                     border
//                     rounded-xl
//                     px-4
//                     py-4
//                   "
//                 />

//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="
//                     w-full
//                     border
//                     rounded-xl
//                     px-4
//                     py-4
//                   "
//                 >
//                   <option>Select Category</option>

//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>

//                 <input
//                   type="number"
//                   name="goalAmount"
//                   placeholder="Goal Amount"
//                   value={formData.goalAmount}
//                   onChange={handleChange}
//                   className="
//                     w-full
//                     border
//                     rounded-xl
//                     px-4
//                     py-4
//                   "
//                 />

//                 <textarea
//                   rows="6"
//                   name="story"
//                   placeholder="Tell your story..."
//                   value={formData.story}
//                   onChange={handleChange}
//                   className="
//                     w-full
//                     border
//                     rounded-xl
//                     px-4
//                     py-4
//                   "
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="
//                   mt-8
//                   bg-orange-500
//                   text-white
//                   px-8
//                   py-4
//                   rounded-xl
//                   flex
//                   items-center
//                   gap-2
//                 "
//               >
//                 Next
//                 <ArrowRight size={18} />
//               </button>
//             </>
//           )}

//           {/* STEP 2 */}

//           {step === 2 && (
//             <>
//               <h2 className="text-3xl font-bold mb-8">Beneficiary Details</h2>

//               <div className="space-y-5">
//                 <input
//                   type="text"
//                   name="beneficiaryName"
//                   placeholder="Beneficiary Name"
//                   value={formData.beneficiaryName}
//                   onChange={handleChange}
//                   className="
//                     w-full
//                     border
//                     rounded-xl
//                     px-4
//                     py-4
//                   "
//                 />

//                 <input
//                   type="text"
//                   name="relation"
//                   placeholder="Relationship"
//                   value={formData.relation}
//                   onChange={handleChange}
//                   className="
//                     w-full
//                     border
//                     rounded-xl
//                     px-4
//                     py-4
//                   "
//                 />

//                 <label
//                   className="
//                     border-2
//                     border-dashed
//                     rounded-2xl
//                     p-10
//                     flex
//                     flex-col
//                     items-center
//                     justify-center
//                     cursor-pointer
//                   "
//                 >
//                   <Upload size={40} />

//                   <p className="mt-4">Upload Campaign Image</p>

//                   <input type="file" hidden />
//                 </label>
//               </div>

//               <div className="flex gap-4 mt-8">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="
//                     border
//                     px-6
//                     py-3
//                     rounded-xl
//                     flex
//                     items-center
//                     gap-2
//                   "
//                 >
//                   <ArrowLeft size={18} />
//                   Back
//                 </button>

//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="
//                     bg-orange-500
//                     text-white
//                     px-6
//                     py-3
//                     rounded-xl
//                     flex
//                     items-center
//                     gap-2
//                   "
//                 >
//                   Next
//                   <ArrowRight size={18} />
//                 </button>
//               </div>
//             </>
//           )}

//           {/* STEP 3 */}

//           {step === 3 && (
//             <>
//               <h2 className="text-3xl font-bold mb-8">Review Campaign</h2>

//               <div className="space-y-4">
//                 <div>
//                   <strong>Title:</strong> {formData.title}
//                 </div>

//                 <div>
//                   <strong>Category:</strong> {formData.category}
//                 </div>

//                 <div>
//                   <strong>Goal:</strong> ₹{formData.goalAmount}
//                 </div>

//                 <div>
//                   <strong>Beneficiary:</strong> {formData.beneficiaryName}
//                 </div>

//                 <div>
//                   <strong>Relation:</strong> {formData.relation}
//                 </div>
//               </div>

//               <div className="flex gap-4 mt-10">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="
//                     border
//                     px-6
//                     py-3
//                     rounded-xl
//                   "
//                 >
//                   Back
//                 </button>

//                 <button
//                   type="submit"
//                   className="
//                     bg-green-600
//                     text-white
//                     px-8
//                     py-3
//                     rounded-xl
//                   "
//                 >
//                   Submit Campaign
//                 </button>
//               </div>
//             </>
//           )}
//         </form>
//       </section>
//     </div>
//   );
// };

// export default StartFundraiser;
import React, { useState } from "react";

import CampaignDetailsStep from "../../components/fundraiser/CampaignDetailsStep";
import BeneficiaryStep from "../../components/fundraiser/BeneficiaryStep";
import MediaStep from "../../components/fundraiser/MediaStep";
import VerificationStep from "../../components/fundraiser/VerificationStep";
import ReviewStep from "../../components/fundraiser/ReviewStep";

import { HeartHandshake, CheckCircle } from "lucide-react";

const steps = ["Campaign", "Beneficiary", "Media", "Verification", "Review"];

const StartFundraiser = () => {
  const [step, setStep] = useState(1);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Campaign

    title: "",
    category: "",
    goalAmount: "",
    deadline: "",
    location: "",
    shortDescription: "",
    story: "",

    // Beneficiary

    beneficiaryName: "",
    beneficiaryAge: "",
    beneficiaryGender: "",
    relation: "",
    mobile: "",
    email: "",

    // Organizer

    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",

    // Verification

    panNumber: "",
    aadhaarNumber: "",

    // Media

    coverImage: null,
    coverPreview: "",

    documents: [],

    // Terms

    agreeTerms: false,
    agreeGuidelines: false,
  });

  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    console.log(formData);

    // API Call Here

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-xl">
          <CheckCircle size={80} className="mx-auto text-green-500" />

          <h2 className="text-4xl font-bold mt-5">Campaign Submitted</h2>

          <p className="text-gray-600 mt-4">
            Thank you for creating a fundraiser.
          </p>

          <p className="text-gray-600">
            Our verification team will review your campaign within 24-72 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <HeartHandshake size={60} className="mx-auto mb-4" />

          <h1 className="text-4xl md:text-5xl font-bold">Start a Fundraiser</h1>

          <p className="mt-4 text-orange-50">
            Raise funds for medical emergencies, education, temple renovation,
            community welfare and more.
          </p>
        </div>
      </section>

      {/* STEPPER */}

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
          <div className="flex justify-between mb-8">
            {steps.map((label, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`
                    w-10 h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    ${
                      step >= index + 1
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                    }
                  `}
                >
                  {step > index + 1 ? <CheckCircle size={18} /> : index + 1}
                </div>

                <p className="text-xs md:text-sm mt-2 text-center">{label}</p>
              </div>
            ))}
          </div>

          {/* STEP COMPONENTS */}

          {step === 1 && (
            <CampaignDetailsStep
              formData={formData}
              updateField={updateField}
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <BeneficiaryStep
              formData={formData}
              updateField={updateField}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <MediaStep
              formData={formData}
              updateField={updateField}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 4 && (
            <VerificationStep
              formData={formData}
              updateField={updateField}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 5 && (
            <ReviewStep
              formData={formData}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default StartFundraiser;
