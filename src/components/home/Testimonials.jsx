import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Donor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    rating: 5,
    review:
      "Mysticpace made donating simple and transparent. I could clearly see how my contribution helped the campaign.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Volunteer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    rating: 5,
    review:
      "The platform connects donors and communities beautifully. The experience is smooth and trustworthy.",
  },
  {
    id: 3,
    name: "Arun Prakash",
    role: "Fundraiser",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    rating: 5,
    review:
      "We successfully raised funds for our community project through Mysticpace. Amazing support team.",
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    role: "Beneficiary",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    rating: 5,
    review:
      "I received help during a difficult time. Thank you to every donor who contributed.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            What People Say About Us
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Thousands of donors, volunteers and beneficiaries trust Mysticpace
            Platform.
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
                bg-white
                border
                border-gray-100
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                h-full
              "
              >
                {/* Stars */}

                <div className="flex mb-5">
                  {[...Array(item.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="#f59e0b"
                      className="text-amber-500"
                    />
                  ))}
                </div>

                {/* Review */}

                <p className="text-slate-600 leading-relaxed">
                  "{item.review}"
                </p>

                {/* User */}

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                    "
                  />

                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>

                    <p className="text-sm text-slate-500">{item.role}</p>
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
