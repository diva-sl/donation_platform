import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { causes } from "../../data/causes";

import CauseHero from "./CauseHero";
// import MovingSparkle from "./MovingSparkle";
import BenefitTimeline from "./BenefitTimeline";

import { HeartHandshake, ArrowRight } from "lucide-react";

const CauseDetails = () => {
  const { slug } = useParams();
  console.log("Slug:", slug, typeof slug);
  const cause = causes.find((item) => item.slug === slug);

  console.log("Cause:", cause);
  if (!cause) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-gray-50
        "
      >
        <div className="text-center">
          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            Cause Not Found
          </h2>

          <Link
            to="/causes"
            className="
              mt-6
              inline-block
              px-6
              py-3
              rounded-xl
              bg-orange-500
              text-white
            "
          >
            Back To Causes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        bg-gradient-to-b
        from-white
        via-orange-50/30
        to-white
      "
    >
      {/* Hero */}

      <CauseHero cause={cause} />

      {/* Scroll Sparkle */}

      {/* <MovingSparkle /> */}

      {/* Timeline Benefits */}

      <BenefitTimeline benefits={cause.benefits} cause={cause} />

      {/* Related Causes */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          py-24
        "
      >
        <div className="text-center">
          <span
            className="
              px-4
              py-2
              rounded-full
              bg-orange-100
              text-orange-600
              font-medium
            "
          >
            Explore More Causes
          </span>

          <h2
            className="
              mt-6
              text-4xl
              lg:text-5xl
              font-bold
              text-slate-900
            "
          >
            Other Causes You May Support
          </h2>
        </div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-16
          "
        >
          {causes
            .filter((item) => item.slug !== cause.slug)
            .slice(0, 3)
            .map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.slug}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    bg-white
                    rounded-[32px]
                    overflow-hidden
                    shadow-lg
                  "
                >
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    className="
                      h-60
                      w-full
                      object-cover
                    "
                  />

                  <div className="p-6">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-orange-100
                        flex
                        items-center
                        justify-center
                        mb-4
                      "
                    >
                      <Icon
                        size={28}
                        className="
                          text-orange-500
                        "
                      />
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-slate-600
                        line-clamp-3
                      "
                    >
                      {item.description}
                    </p>

                    <Link
                      to={`/causes/${item.slug}`}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-orange-500
                        font-semibold
                      "
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* CTA */}

      <section
        className="
          py-24
          px-4
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            max-w-6xl
            mx-auto
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            rounded-[40px]
            p-10
            lg:p-16
            text-center
            text-white
            relative
            overflow-hidden
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-96
              h-96
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative">
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-white
                text-orange-500
                flex
                items-center
                justify-center
                mx-auto
                mb-8
              "
            >
              <HeartHandshake size={42} />
            </div>

            <h2
              className="
                text-4xl
                lg:text-5xl
                font-bold
              "
            >
              Be Part Of The Change
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-lg
              "
            >
              Every contribution matters. Help us create lasting impact through
              verified fundraising campaigns.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                mt-10
              "
            >
              <Link
                to="/campaigns"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-white
                  text-orange-500
                  font-semibold
                "
              >
                Donate Now
              </Link>

              <Link
                to="/start-fundraiser"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-white
                  text-white
                "
              >
                Start Fundraiser
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CauseDetails;
