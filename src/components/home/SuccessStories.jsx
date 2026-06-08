import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const stories = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200",
    name: "Arjun Kumar",
    title: "Education Support",
    description:
      "Completed higher education through donor support and secured admission to an engineering college.",
    raised: "₹4,50,000",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200",
    name: "Lakshmi Devi",
    title: "Medical Assistance",
    description:
      "Received critical medical treatment and successfully recovered with community support.",
    raised: "₹7,20,000",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200",
    name: "Community Food Drive",
    title: "Food Donation",
    description:
      "More than 5,000 meals were distributed to families facing food insecurity.",
    raised: "₹2,80,000",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Success Stories
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Real Stories, Real Impact
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Every donation changes lives. See how communities and individuals
            benefited from the generosity of our donors.
          </p>
        </div>

        {/* Slider */}

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
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
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div
                className="
    h-full
    bg-white
    rounded-2xl
    overflow-hidden
    border
    border-gray-100
    shadow-sm
    hover:shadow-lg
    transition-all
    duration-300
    group
  "
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="
        h-52
        md:h-56
        w-full
        object-cover
        group-hover:scale-105
        transition-all
        duration-500
      "
                  />
                </div>

                {/* Content */}

                <div className="p-4 flex flex-col">
                  {/* Category */}

                  <span
                    className="
        w-fit
        bg-orange-100
        text-orange-600
        px-2.5
        py-1
        rounded-full
        text-xs
        font-medium
      "
                  >
                    {story.title}
                  </span>

                  {/* Name */}

                  <h3
                    className="
        text-lg
        font-bold
        text-slate-900
        mt-3
        h-12
        line-clamp-2
        leading-6
      "
                  >
                    {story.name}
                  </h3>

                  {/* Description */}

                  <p
                    className="
        text-slate-600
        text-sm
        leading-5
        h-[60px]
        line-clamp-3
        mt-1.5
      "
                  >
                    {story.description}
                  </p>

                  {/* Footer */}

                  <div
                    className="
        mt-3
        pt-3
        border-t
        flex
        items-center
        justify-between
      "
                  >
                    <div>
                      <p className="text-xs text-slate-500">Funds Raised</p>

                      <h4 className="font-bold text-orange-600 text-sm">
                        {story.raised}
                      </h4>
                    </div>

                    <button
                      className="
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-3
          py-1.5
          rounded-lg
          text-sm
          font-medium
          transition
        "
                    >
                      Read Story
                    </button>
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

export default SuccessStories;
