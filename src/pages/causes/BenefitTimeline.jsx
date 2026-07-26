import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { Sparkles, HeartHandshake, Star } from "lucide-react";

import BenefitCard from "./BenefitCard";

const BenefitTimeline = ({ benefits, cause }) => {
  const benefitRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    benefitRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
      absolute
      top-1/2
      left-1/2
      w-[600px]
      h-[600px]
      border
      border-orange-200/20
      rounded-full
      -translate-x-1/2
      -translate-y-1/2
    "
        />
      </div>
      {/* Moving Orb */}
      {/* <motion.div
        animate={{
          top: 350 + activeIndex * 580,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="
          hidden
          xl:flex
          absolute
          left-1/2
          -translate-x-1/2
          z-40
        "
      >
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              absolute
              inset-0
              w-20
              h-20
              rounded-full
              bg-orange-300
              blur-xl
            "
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              w-20
              h-20
              rounded-full
              bg-orange-500
              text-white
              shadow-2xl
              flex
              items-center
              justify-center
            "
          >
            <Sparkles size={34} />
          </motion.div>
        </div>
      </motion.div> */}
      {/* Header */}
      <div className="text-center mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600">
          <Sparkles size={16} />
          How Your Donation Helps
        </div>

        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Transforming
          <span className="block text-orange-500">Donations Into Impact</span>
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
          Every contribution creates meaningful change and helps us support
          families, education, healthcare, food assistance, and emergency relief
          through Mysticpace.
        </p>
      </div>
      {/* <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="flex justify-center mb-20"
      >
        <ArrowDown className="text-orange-500" size={32} />
      </motion.div> */}
      {/* Timeline
      <div
        className="
    hidden
    lg:block
    absolute
    left-1/2
    top-[280px]
    bottom-[280px]
    w-[6px]
    rounded-full
    bg-gradient-to-b
    from-orange-200
    via-orange-500
    to-orange-200
    -translate-x-1/2
    shadow-lg
  "
      /> */}
      {/* Cards */}
      <div className="space-y-16 lg:space-y-24 relative">
        <div
          className="
    hidden
    lg:block
    absolute
    left-1/2
    top-0
    bottom-0
    w-px
    bg-gradient-to-b
    from-transparent
    via-orange-300/30
    to-transparent
    -translate-x-1/2
  "
        />
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            data-index={index}
            ref={(el) => (benefitRefs.current[index] = el)}
            className="
            relative
                grid
                lg:grid-cols-2
                gap-12
                items-center
              "
          >
            {index < benefits.length && (
              <div
                className="
      hidden
      lg:flex
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-30
      pointer-events-none
    "
              >
                <motion.div
                  animate={{
                    scale: activeIndex === index ? [1, 1.15, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
    relative
    w-16
    h-16
    rounded-full
    bg-white
    border-4
    border-orange-500
    shadow-2xl
    flex
    items-center
    justify-center
  "
                >
                  {activeIndex === index && (
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
        absolute
        inset-0
        rounded-full
        bg-orange-400
        blur-xl
      "
                    />
                  )}

                  <benefit.icon
                    size={26}
                    className="
      relative
      z-10
      text-orange-500
    "
                  />

                  <div
                    className="
      absolute
      inset-0
      rounded-full
      border-2
      border-orange-300
      animate-ping
    "
                  />
                </motion.div>
              </div>
            )}
            {index % 2 === 0 ? (
              <>
                <BenefitCard
                  benefit={benefit}
                  index={index}
                  isActive={activeIndex === index}
                />

                <div />
              </>
            ) : (
              <>
                <div />

                <BenefitCard
                  benefit={benefit}
                  index={index}
                  isActive={activeIndex === index}
                />
              </>
            )}
          </div>
        ))}
      </div>
      {/* Final Impact */}
      <motion.div
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        viewport={{
          once: true,
        }}
        className="
    mt-32
    relative
    overflow-hidden
    rounded-[40px]
    bg-gradient-to-br
    from-orange-500
    via-orange-600
    to-orange-700
    text-white
    p-8
    md:p-12
    lg:p-16
    text-center
  "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>

        {/* Center Icon Area */}
        <div className="relative flex justify-center items-center mb-12">
          {/* Ripple 1 */}
          <motion.div
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
        absolute
        w-32
        h-32
        rounded-full
        border-4
        border-white/40
      "
          />

          {/* Ripple 2 */}
          <motion.div
            animate={{
              scale: [1, 2.7],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 0.8,
              repeat: Infinity,
            }}
            className="
        absolute
        w-32
        h-32
        rounded-full
        border-4
        border-white/25
      "
          />

          {/* Ripple 3 */}
          <motion.div
            animate={{
              scale: [1, 3.4],
              opacity: [0.25, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 1.5,
              repeat: Infinity,
            }}
            className="
        absolute
        w-32
        h-32
        rounded-full
        border-2
        border-white/15
      "
          />

          {/* Main Icon */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
        relative
        z-10
        w-32
        h-32
        rounded-full
        bg-white
        text-orange-500
        flex
        items-center
        justify-center
        shadow-[0_20px_60px_rgba(255,255,255,0.35)]
      "
          >
            <HeartHandshake size={52} />
          </motion.div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Together We Make A Difference
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-orange-50 leading-relaxed">
          Together, our community of donors is helping create sustainable change
          through verified campaigns and transparent giving experiences across
          India.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-4xl font-bold">
              ₹{cause.raised.toLocaleString()}
            </h3>
            <p className="mt-2 text-orange-100">Funds Raised</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-4xl font-bold">{cause.donors}</h3>
            <p className="mt-2 text-orange-100">Supporters</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-4xl font-bold">{cause.campaigns}</h3>
            <p className="mt-2 text-orange-100">Campaigns</p>
          </div>
        </div>

        {/* Success Badge */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
            <Star size={20} className="fill-yellow-300 text-yellow-300" />
            <span className="font-medium">Trusted By Thousands Of Donors</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BenefitTimeline;
