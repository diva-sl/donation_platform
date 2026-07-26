import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const BenefitCard = forwardRef(({ benefit, index, isActive = false }, ref) => {
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      id={`benefit-${benefit.id}`}
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      animate={{
        scale: isActive ? 1.03 : 1,
      }}
      className={`
          group
          relative
          overflow-hidden
          rounded-[32px]
          transition-all
          duration-500

          ${
            isActive
              ? `
    border-orange-400
    bg-white
    shadow-[0_25px_80px_rgba(249,115,22,0.25)]
    
  `
              : `
                border
                border-orange-100
                shadow-md
              `
          }

          bg-white
        `}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="
      absolute
      top-32
      left-20
      w-40
      h-40
      rounded-full
      bg-orange-200/20
      blur-3xl
    "
        />

        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="
      absolute
      bottom-20
      right-20
      w-52
      h-52
      rounded-full
      bg-orange-300/20
      blur-3xl
    "
        />
      </div>

      {/* Active Glow */}

      {isActive && (
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
              absolute
              inset-0
              bg-orange-50
            "
        />
      )}

      {/* Hover Glow */}

      <div
        className="
            absolute
            top-0
            right-0
            w-72
            h-72
            bg-orange-100
            rounded-full
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
          "
      />

      {/* Card Content */}

      <div className="relative z-10 p-8 lg:p-10">
        {/* Top Section */}

        <div className="flex items-start justify-between">
          {/* Icon */}

          <motion.div
            animate={{
              y: isActive ? [0, -8, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
                w-20
                h-20
                rounded-3xl
                bg-orange-100
                flex
                items-center
                justify-center
              "
          >
            <Icon
              size={40}
              className="
                  text-orange-500
                "
            />
          </motion.div>

          {/* Number */}

          <div
            className="
                text-7xl
                font-black
                text-orange-50
                select-none
              "
          >
            0{index + 1}
          </div>
        </div>

        {/* Active Badge */}

        {isActive && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="
                mt-6
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-orange-500
                text-white
                text-sm
                font-medium
              "
          >
            <Sparkles size={16} />
            Currently Active
          </motion.div>
        )}

        {/* Heading */}

        <div className="mt-8">
          <div
            className="
                flex
                items-center
                gap-3
              "
          >
            <Sparkles
              size={18}
              className="
                  text-orange-500
                "
            />

            <span
              className="
                  text-orange-500
                  uppercase
                  tracking-wider
                  font-semibold
                  text-sm
                "
            >
              Key Benefit
            </span>
          </div>

          <h2
            className="
                mt-3
                text-3xl
                lg:text-4xl
                font-bold
                text-slate-900
              "
          >
            {benefit.title}
          </h2>

          <p
            className="
                mt-5
                text-lg
                leading-8
                text-slate-600
              "
          >
            {benefit.description}
          </p>
        </div>

        {/* Impact Box */}

        <div
          className="
              mt-8
              bg-gradient-to-r
              from-orange-50
              to-orange-100
              rounded-2xl
              p-5
            "
        >
          <div
            className="
                flex
                items-center
                gap-3
              "
          >
            <TrendingUp
              size={20}
              className="
                  text-orange-500
                "
            />

            <span
              className="
                  font-semibold
                  text-slate-800
                "
            >
              Donation Impact
            </span>
          </div>

          <p
            className="
                mt-3
                text-slate-600
              "
          >
            Every contribution directly supports this initiative and helps
            create measurable change within the community.
          </p>
        </div>

        {/* Benefit Points */}

        <div className="mt-8 space-y-4">
          {benefit.points?.map((point, pointIndex) => (
            <motion.div
              key={pointIndex}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: pointIndex * 0.1,
              }}
              className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    bg-orange-50
                  "
            >
              <CheckCircle2
                size={22}
                className="
                      text-green-500
                      shrink-0
                    "
              />

              <span
                className="
                      text-slate-700
                      font-medium
                    "
              >
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Actions */}

        <div
          className="
              mt-8
              flex
              items-center
              justify-between
              flex-wrap
              gap-4
            "
        >
          <div
            className="
                flex
                items-center
                gap-2
                text-orange-500
              "
          >
            <HeartHandshake size={18} />

            <span>Verified Impact</span>
          </div>

          <motion.button
            whileHover={{
              x: 6,
            }}
            className="
                flex
                items-center
                gap-2
                font-semibold
                text-orange-500
              "
          >
            Learn More
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
});

export default BenefitCard;
