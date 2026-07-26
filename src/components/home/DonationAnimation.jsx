import { motion } from "framer-motion";
import {
  HeartHandshake,
  IndianRupee,
  Users,
  Target,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function DonationAnimation() {
  return (
    <div className="relative h-[550px] flex items-center justify-center">
      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />

      {/* Animated SVG Circle */}

      <motion.svg
        className="absolute"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
          strokeDasharray="12 12"
          opacity="0.25"
        />
      </motion.svg>

      {/* Center Circle */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          relative
          z-20
          w-56
          h-56
          rounded-full
          bg-gradient-to-br
          from-orange-500
          to-orange-600
          flex
          items-center
          justify-center
          shadow-2xl
        "
      >
        <HeartHandshake size={90} className="text-white" />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0
            rounded-full
            border-4
            border-orange-300
          "
        />
      </motion.div>

      {/* Funds Raised */}

      <motion.div
        animate={{
          y: [-12, 12, -12],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          bg-white
          px-5
          py-4
          rounded-2xl
          shadow-xl
          z-30
        "
      >
        <div className="flex items-center gap-3">
          <IndianRupee size={28} className="text-green-500" />

          <div>
            <h4 className="font-bold text-lg">₹2.5 Cr+</h4>

            <p className="text-xs text-gray-500">Funds Raised</p>
          </div>
        </div>
      </motion.div>

      {/* Donors */}

      <motion.div
        animate={{
          y: [10, -10, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-1/2
          bg-white
          px-5
          py-4
          rounded-2xl
          shadow-xl
          z-30
        "
      >
        <div className="flex items-center gap-3">
          <Users size={28} className="text-blue-500" />

          <div>
            <h4 className="font-bold">12K+</h4>

            <p className="text-xs text-gray-500">Active Donors</p>
          </div>
        </div>
      </motion.div>

      {/* Campaigns */}

      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          bg-white
          px-5
          py-4
          rounded-2xl
          shadow-xl
          z-30
        "
      >
        <div className="flex items-center gap-3">
          <Target size={28} className="text-orange-500" />

          <div>
            <h4 className="font-bold">500+</h4>

            <p className="text-xs text-gray-500">Campaigns</p>
          </div>
        </div>
      </motion.div>

      {/* Verified */}

      <motion.div
        animate={{
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-1/2
          bg-white
          px-5
          py-4
          rounded-2xl
          shadow-xl
          z-30
        "
      >
        <div className="flex items-center gap-3">
          <ShieldCheck size={28} className="text-emerald-500" />

          <div>
            <h4 className="font-bold">Verified</h4>

            <p className="text-xs text-gray-500">Campaigns</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Sparkles */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-16
          right-20
          text-orange-400
        "
      >
        <Sparkles size={30} />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-16
          left-20
          text-orange-300
        "
      >
        <Sparkles size={24} />
      </motion.div>
    </div>
  );
}
