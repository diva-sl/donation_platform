import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ShieldCheck,
  Heart,
  BadgeCheck,
  CreditCard,
  Gift,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const DonationForm = ({ campaignId, campaignTitle }) => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [monthlyDonation, setMonthlyDonation] = useState(false);
  const [anonymous, setAnonymous] = useState(false);

  const {
    register,
    handleSubmit,
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
      shadow-lg
      border
      border-gray-100
      overflow-hidden
    "
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-5 text-white">
        <h2 className="text-xl md:text-2xl font-bold">Make a Donation</h2>

        <p className="mt-1 text-sm text-orange-50">
          Every contribution creates meaningful impact.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-5 md:p-6">
        {/* Campaign Summary */}
        <div
          className="
          bg-orange-50
          border
          border-orange-100
          rounded-2xl
          p-4
          mb-6
        "
        >
          <div className="flex items-center gap-3">
            <Gift size={20} className="text-orange-500" />

            <div>
              <p className="text-xs text-gray-500">Supporting Campaign</p>

              <h3 className="font-semibold text-sm">{campaignTitle}</h3>
            </div>
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="font-semibold text-slate-800">Select Amount</label>

          <div className="grid grid-cols-3 gap-2 mt-4">
            {donationAmounts.map((amount) => (
              <button
                type="button"
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`
                  py-2.5
                  rounded-xl
                  border
                  text-sm
                  font-semibold
                  transition-all

                  ${
                    selectedAmount === amount
                      ? `
                        bg-orange-500
                        text-white
                        border-orange-500
                        shadow-md
                        scale-[1.02]
                      `
                      : `
                        bg-white
                        border-gray-200
                        hover:border-orange-300
                      `
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
              placeholder="Enter custom amount"
              className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              text-lg
              font-medium
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
            <div className="relative">
              <User
                size={16}
                className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

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
                pl-10
                pr-4
                py-3
              "
              />

              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required</p>
              )}
            </div>

            <div className="relative">
              <Mail
                size={16}
                className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

              <input
                {...register("email", {
                  required: true,
                })}
                placeholder="Email Address"
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                pl-10
                pr-4
                py-3
              "
              />
            </div>

            <div className="relative">
              <Phone
                size={16}
                className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

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
                pl-10
                pr-4
                py-3
              "
              />
            </div>

            <div className="relative">
              <MapPin
                size={16}
                className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

              <input
                {...register("city")}
                placeholder="City"
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                pl-10
                pr-4
                py-3
              "
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative mt-4">
            <MessageSquare
              size={16}
              className="
              absolute
              left-3
              top-4
              text-gray-400
            "
            />

            <textarea
              {...register("message")}
              rows={3}
              placeholder="Leave a message (optional)"
              className="
              w-full
              border
              border-gray-300
              rounded-xl
              pl-10
              pr-4
              py-3
              resize-none
            "
            />
          </div>
        </div>

        {/* Donation Options */}
        <div className="mt-6 space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
              className="
              w-4
              h-4
              accent-orange-500
            "
            />

            <span className="text-sm">Donate anonymously</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={monthlyDonation}
              onChange={() => setMonthlyDonation(!monthlyDonation)}
              className="
              w-4
              h-4
              accent-orange-500
            "
            />

            <span className="text-sm">Monthly recurring donation</span>
          </label>
        </div>

        {/* Summary */}
        <div
          className="
          mt-6
          bg-gradient-to-r
          from-orange-50
          to-amber-50
          rounded-2xl
          p-5
        "
        >
          <div className="flex justify-between">
            <span>Donation Amount</span>

            <strong>₹{selectedAmount.toLocaleString()}</strong>
          </div>

          {monthlyDonation && (
            <div className="flex justify-between mt-2">
              <span>Recurring</span>

              <strong>Monthly</strong>
            </div>
          )}

          <div className="mt-3 text-xs text-gray-500">
            100% of your contribution supports this campaign.
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="text-center">
            <ShieldCheck className="mx-auto text-green-500" size={24} />

            <p className="text-[11px] mt-2">SSL Secure</p>
          </div>

          <div className="text-center">
            <BadgeCheck className="mx-auto text-blue-500" size={24} />

            <p className="text-[11px] mt-2">Verified</p>
          </div>

          <div className="text-center">
            <Heart className="mx-auto text-orange-500" size={24} />

            <p className="text-[11px] mt-2">Safe Payment</p>
          </div>
        </div>

        {/* Donate Button */}
        <button
          type="submit"
          className="
          mt-6
          w-full
          bg-orange-500
          hover:bg-orange-600
          text-white
          py-3.5
          rounded-2xl
          font-semibold
          text-base
          flex
          items-center
          justify-center
          gap-2
          transition
        "
        >
          <CreditCard size={18} />
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
