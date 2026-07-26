import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Heart,
  Users,
  Target,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const CauseHero = ({ cause }) => {
  const Icon = cause.icon;

  return (
    <section className="relative min-h-[1200px] md:min-h-[1100px] lg:min-h-[900px] overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={cause.heroImage}
        alt={cause.title}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />
      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/90
          via-black/70
          to-black/50
        "
      />
      {/* Animated SVG Path */}
      <svg
        className="
          absolute
          inset-0
          w-full
          h-full
          opacity-10
        "
      >
        <path
          d="
            M100 150
            C300 250
            450 150
            650 300
            S950 500
            1200 350
          "
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeDasharray="12 12"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="120;0"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      {/* Floating Glow */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-24
          right-24
          w-40
          h-40
          rounded-full
          bg-orange-500/20
          blur-3xl
        "
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-40
          left-20
          w-56
          h-56
          rounded-full
          bg-white/10
          blur-3xl
        "
      />
      {/* Content */}
      <div
        className="
    relative
    z-10
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    pt-24
    md:pt-28
    lg:pt-32
    flex
    items-start
    lg:items-center
    min-h-[650px]
    lg:min-h-[700px]
  "
      >
        <div className="w-full max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              inline-flex
              items-center
              gap-2
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              text-white
              px-5
              py-3
              rounded-full
              mb-8
            "
          >
            <ShieldCheck size={18} className="text-green-400" />
            Verified Cause
            <Sparkles size={16} className="text-orange-400" />
          </motion.div>
          {/* Icon */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              relative
            w-24
h-24
md:w-28
md:h-28
              rounded-[32px]
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
              mb-8
            "
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                rounded-[32px]
                border-2
                border-dashed
                border-orange-400/40
              "
            />
            <Icon size={40} className="text-orange-400 md:w-14 md:h-14" />{" "}
          </motion.div>
          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-bold
  text-white
  leading-tight
"
          >
            {cause.title}
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
  mt-6
  text-base
  sm:text-lg
  md:text-xl
  text-gray-200
  max-w-3xl
  leading-7
  md:leading-8
"
          >
            {cause.description}
          </motion.p>
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-8">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck size={18} className="text-green-400" />
              Verified Campaigns
            </div>
            <div className="flex items-center gap-2 text-white">
              <HeartHandshake size={18} className="text-orange-400" />
              Trusted Donations
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users size={18} className="text-blue-400" />
              Community Impact
            </div>
          </div>
          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="
  flex
  flex-col
  sm:flex-row
  gap-4
  mt-10
"
          >
            <Link
              to="/campaigns"
              className="
              w-full
  sm:w-auto
  px-8
  py-4
  rounded-2xl
  border
  border-white/30
  backdrop-blur-lg
  text-white
  hover:bg-white/10
  transition
  text-center
"
            >
              Donate Now
            </Link>

            <Link
              to="/start-fundraiser"
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                rounded-2xl
                border
                border-white/30
                backdrop-blur-lg
                text-white
                hover:bg-white/10
                transition
              "
            >
              Start Fundraiser
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Stats Section */}
      <div
        className="
   
        relative
        z-20
    px-4
    mt-12
    lg:absolute
    lg:bottom-16
    lg:left-0
    lg:right-0
  "
      >
        <div
          className="
            max-w-5xl
            mx-auto
            grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-4
md:gap-5
          "
        >
          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
              rounded-3xl
p-5 md:p-6
              text-white
              shadow-2xl
            "
          >
            <div className="flex items-center gap-3">
              <Heart className="text-orange-400" />

              <span>Funds Raised</span>
            </div>

            <h3 className="text-3xl font-bold mt-4">
              ₹{cause.raised.toLocaleString()}
            </h3>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
              rounded-3xl
              p-6
              text-white
              shadow-2xl
            "
          >
            <div className="flex items-center gap-3">
              <Users className="text-green-400" />

              <span>Supporters</span>
            </div>

            <h3 className="text-3xl font-bold mt-4">{cause.donors}</h3>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
              bg-white/10
              backdrop-blur-2xl
              border
              border-white/10
              rounded-3xl
              p-6
              text-white
              shadow-2xl
            "
          >
            <div className="flex items-center gap-3">
              <Target className="text-blue-400" />

              <span>Campaigns</span>
            </div>

            <h3 className="text-3xl font-bold mt-4">{cause.campaigns}</h3>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          text-white
          z-30
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-[4px]
            mb-2
            opacity-70
          "
        >
          Explore Impact
        </span>

        <ChevronDown size={34} />
      </motion.div> */}
    </section>
  );
};

export default CauseHero;
