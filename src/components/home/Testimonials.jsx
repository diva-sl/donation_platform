import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Donor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    rating: 5,
    review:
      "Mysticpace made donating simple and transparent. I could clearly see the impact of my contribution.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Volunteer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    rating: 5,
    review:
      "The platform connects donors and communities beautifully. A smooth and trustworthy experience.",
  },
  {
    id: 3,
    name: "Arun Prakash",
    role: "Fundraiser",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    rating: 5,
    review:
      "We successfully funded our community project through Mysticpace. Excellent support throughout.",
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    role: "Beneficiary",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    rating: 5,
    review:
      "I received help during a difficult time. Thank you to all donors who supported me.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span
            className="
            bg-orange-100
            text-orange-600
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
          "
          >
            Testimonials
          </span>

          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            mt-4
            text-slate-900
          "
          >
            What People Say About Us
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Thousands of donors, volunteers and beneficiaries trust Mysticpace
            to support meaningful causes and create real impact.
          </p>
        </motion.div>

        {/* Slider */}

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
  h-full
  bg-white
  border
  border-gray-100
  rounded-2xl
  p-4
  shadow-sm
  hover:shadow-lg
  transition-all
"
              >
                {/* Rating */}

                <div className="flex mb-2">
                  {[...Array(item.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="#f59e0b"
                      className="text-amber-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p
                  className="
  text-slate-600
  text-sm
  leading-5
  min-h-[64px]
  line-clamp-3
"
                >
                  "{item.review}"
                </p>

                {/* User */}
                <div
                  className="
  flex
  items-center
  gap-3
  mt-2
  pt-2
  border-t
"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="
                    w-12
                    h-12
                    rounded-full
                    object-cover
                  "
                  />

                  <div>
                    <h4
                      className="
                      font-semibold
                      text-slate-900
                      text-sm
                    "
                    >
                      {item.name}
                    </h4>

                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
