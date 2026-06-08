import React, { useState } from "react";
import { Mail, Lock, Phone, Eye, EyeOff, HeartHandshake } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loginType, setLoginType] = useState("email");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here

    navigate("/");
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
        max-w-5xl
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

          <h2 className="text-5xl font-bold">Welcome Back</h2>

          <p className="mt-6 text-lg">
            Continue supporting causes, tracking donations, and creating
            meaningful impact.
          </p>

          <div className="mt-10 space-y-4">
            <div>✓ Secure Donations</div>

            <div>✓ Trusted Fundraising</div>

            <div>✓ Transparent Impact</div>
          </div>
        </div>

        {/* Right Side */}

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold">Login</h1>

          <p className="text-gray-500 mt-3">Access your Mysticpace account.</p>

          {/* Login Type */}

          <div className="flex mt-8 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setLoginType("email")}
              className={`flex-1 py-3 rounded-xl ${
                loginType === "email" ? "bg-white shadow-sm" : ""
              }`}
            >
              Email
            </button>

            <button
              onClick={() => setLoginType("otp")}
              className={`flex-1 py-3 rounded-xl ${
                loginType === "otp" ? "bg-white shadow-sm" : ""
              }`}
            >
              OTP Login
            </button>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            {loginType === "email" ? (
              <>
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
              </>
            ) : (
              <>
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
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
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

                <button
                  type="button"
                  className="
                    w-full
                    border
                    border-orange-500
                    text-orange-500
                    py-3
                    rounded-xl
                  "
                >
                  Send OTP
                </button>

                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="
                    w-full
                    border
                    rounded-xl
                    py-4
                    px-4
                  "
                />
              </>
            )}

            <div className="text-right">
              <button type="button" className="text-orange-500">
                Forgot Password?
              </button>
            </div>

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
              Login
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="
                  text-orange-500
                  font-semibold
                "
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
