import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ShieldCheck, Heart, BadgeCheck, CreditCard } from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const DonationForm = ({ campaignId, campaignTitle }) => {
  const [selectedAmount, setSelectedAmount] = useState(1000);

  const [monthlyDonation, setMonthlyDonation] = useState(false);

  const [anonymous, setAnonymous] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      amount: selectedAmount,
      anonymous,
      monthlyDonation,
      campaignId,
    };

    console.log(payload);

    // Razorpay Integration Here
  };

  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-xl
      border
      border-gray-100
      overflow-hidden
    "
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
        <h2 className="text-2xl font-bold">Make a Donation</h2>

        <p className="mt-2 text-orange-50">
          Your contribution creates real impact.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        {/* Amount Selection */}

        <div>
          <label className="font-semibold text-slate-800">Select Amount</label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {donationAmounts.map((amount) => (
              <button
                type="button"
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`
                  py-3
                  rounded-xl
                  border
                  font-semibold
                  transition-all

                  ${
                    selectedAmount === amount
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white border-gray-200"
                  }
                `}
              >
                ₹{amount.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Custom Amount */}

          <div className="mt-4">
            <input
              type="number"
              placeholder="Custom Amount"
              className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-orange-500
              "
              onChange={(e) => setSelectedAmount(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Donor Information */}

        <div className="mt-8">
          <h3 className="font-semibold text-lg">Donor Information</h3>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Full Name"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                "
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name required</p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: true,
                })}
                placeholder="Email"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                "
              />
            </div>

            <div>
              <input
                {...register("mobile", {
                  required: true,
                })}
                placeholder="Mobile Number"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                "
              />
            </div>

            <div>
              <input
                {...register("city")}
                placeholder="City"
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                "
              />
            </div>
          </div>
        </div>

        {/* Options */}

        <div className="mt-6 space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
            />
            Donate Anonymously
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={monthlyDonation}
              onChange={() => setMonthlyDonation(!monthlyDonation)}
            />
            Monthly Recurring Donation
          </label>
        </div>

        {/* Summary */}

        <div
          className="
          mt-8
          bg-orange-50
          rounded-2xl
          p-5
        "
        >
          <div className="flex justify-between">
            <span>Donation Amount</span>

            <strong>₹{selectedAmount.toLocaleString()}</strong>
          </div>

          {monthlyDonation && (
            <div className="mt-3 flex justify-between">
              <span>Recurring</span>

              <strong>Monthly</strong>
            </div>
          )}
        </div>

        {/* Trust Badges */}

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <ShieldCheck className="mx-auto text-green-500" size={28} />

            <p className="text-xs mt-2">Secure</p>
          </div>

          <div className="text-center">
            <BadgeCheck className="mx-auto text-blue-500" size={28} />

            <p className="text-xs mt-2">Verified</p>
          </div>

          <div className="text-center">
            <Heart className="mx-auto text-orange-500" size={28} />

            <p className="text-xs mt-2">Trusted</p>
          </div>
        </div>

        {/* Donate Button */}

        <button
          type="submit"
          className="
            mt-8
            w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-4
            rounded-2xl
            font-bold
            text-lg
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <CreditCard size={20} />
          Donate ₹{selectedAmount.toLocaleString()}
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;
