import React, { useState } from "react";
import { Mail, Send, ShieldCheck, Bell } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Newsletter Email:", email);

    // API Call Later

    alert("Subscribed Successfully!");

    setEmail("");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-orange-500
          via-amber-500
          to-orange-600
          p-8
          md:p-14
          shadow-2xl
        "
        >
          {/* Background Decorations */}

          <div
            className="
            absolute
            top-0
            left-0
            w-72
            h-72
            bg-white/10
            rounded-full
            blur-3xl
          "
          />

          <div
            className="
            absolute
            bottom-0
            right-0
            w-72
            h-72
            bg-white/10
            rounded-full
            blur-3xl
          "
          />

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}

              <div>
                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white/20
                  text-white
                  px-4
                  py-2
                  rounded-full
                  mb-6
                "
                >
                  <Bell size={18} />
                  Stay Updated
                </div>

                <h2
                  className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-white
                  leading-tight
                "
                >
                  Join Our Community
                </h2>

                <p
                  className="
                  text-orange-50
                  mt-5
                  text-lg
                  leading-relaxed
                "
                >
                  Get updates about new campaigns, success stories, donation
                  impact, and fundraising opportunities.
                </p>

                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck size={18} />
                    Privacy Protected
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <Mail size={18} />
                    Weekly Updates
                  </div>
                </div>
              </div>

              {/* Right */}

              <div>
                <form
                  onSubmit={handleSubscribe}
                  className="
                    bg-white
                    p-6
                    md:p-8
                    rounded-3xl
                    shadow-xl
                  "
                >
                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-slate-900
                    mb-3
                  "
                  >
                    Subscribe Now
                  </h3>

                  <p className="text-slate-500 mb-6">
                    Receive updates directly in your inbox.
                  </p>

                  <div className="space-y-4">
                    <div className="relative">
                      <Mail
                        className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                        size={20}
                      />

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-2xl
                          py-4
                          pl-12
                          pr-4
                          outline-none
                          focus:border-orange-500
                        "
                      />
                    </div>

                    <button
                      type="submit"
                      className="
                        w-full
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        py-4
                        rounded-2xl
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        transition
                      "
                    >
                      <Send size={18} />
                      Subscribe
                    </button>
                  </div>

                  <p
                    className="
                    text-xs
                    text-gray-500
                    mt-4
                    text-center
                  "
                  >
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
