import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  HeartHandshake,
  Building2,
  Users,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("donor");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      ...formData,
      accountType,
    });

    navigate("/login");
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-orange-50
      via-white
      to-orange-100
      flex
      items-center
      justify-center
      px-4
      py-10
    "
    >
      <div
        className="
        max-w-6xl
        w-full
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-2xl
        grid
        lg:grid-cols-2
      "
      >
        {/* Left Side */}

        <div
          className="
          hidden
          lg:flex
          flex-col
          justify-center
          bg-gradient-to-br
          from-orange-500
          to-amber-500
          text-white
          p-12
        "
        >
          <HeartHandshake size={60} className="mb-6" />

          <h2 className="text-5xl font-bold">Join Mysticpace</h2>

          <p className="mt-6 text-lg">
            Create your account and start making a positive impact.
          </p>

          <div className="mt-10 space-y-4">
            <div>✓ Donate Securely</div>

            <div>✓ Start Fundraisers</div>

            <div>✓ Track Impact</div>

            <div>✓ Join Community</div>
          </div>
        </div>

        {/* Right Side */}

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold">Create Account</h1>

          <p className="text-gray-500 mt-3">
            Start your journey with Mysticpace.
          </p>

          {/* Account Type */}

          <div className="grid grid-cols-3 gap-3 mt-8">
            <button
              type="button"
              onClick={() => setAccountType("donor")}
              className={`p-3 rounded-xl border ${
                accountType === "donor"
                  ? "bg-orange-500 text-white border-orange-500"
                  : ""
              }`}
            >
              <Users size={18} className="mx-auto mb-2" />
              Donor
            </button>

            <button
              type="button"
              onClick={() => setAccountType("fundraiser")}
              className={`p-3 rounded-xl border ${
                accountType === "fundraiser"
                  ? "bg-orange-500 text-white border-orange-500"
                  : ""
              }`}
            >
              <HeartHandshake size={18} className="mx-auto mb-2" />
              Fundraiser
            </button>

            <button
              type="button"
              onClick={() => setAccountType("ngo")}
              className={`p-3 rounded-xl border ${
                accountType === "ngo"
                  ? "bg-orange-500 text-white border-orange-500"
                  : ""
              }`}
            >
              <Building2 size={18} className="mx-auto mb-2" />
              NGO
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Full Name */}

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
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
              />
            </div>

            {/* Email */}

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
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
              />
            </div>

            {/* Mobile */}

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
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  pr-4
                "
              />
            </div>

            {/* Password */}

            <div className="relative">
              <Lock
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  pr-12
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                "
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}

            <div className="relative">
              <Lock
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
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  rounded-xl
                  py-4
                  pl-12
                  pr-12
                "
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                "
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Terms */}

            <label className="flex gap-3 items-start">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />

              <span className="text-sm text-gray-600">
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>

            {/* Submit */}

            <button
              type="submit"
              className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                py-4
                rounded-xl
                font-semibold
              "
            >
              Create Account
            </button>

            {/* Divider */}

            <div className="relative py-2">
              <div className="border-t"></div>

              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  bg-white
                  px-4
                  text-gray-500
                "
              >
                OR
              </span>
            </div>

            {/* Google */}

            <button
              type="button"
              className="
                w-full
                border
                py-4
                rounded-xl
                font-medium
              "
            >
              Continue with Google
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="
                  text-orange-500
                  font-semibold
                "
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
