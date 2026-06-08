import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const stories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    name: "Arjun Kumar",
    title: "Education Support",
    description:
      "Thanks to generous donors, Arjun completed his education and secured admission to engineering college.",
    raised: "₹4,50,000",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593113598332-cd59a93f7d26",
    name: "Lakshmi Devi",
    title: "Medical Assistance",
    description:
      "Emergency medical support helped Lakshmi receive life-saving treatment and recover successfully.",
    raised: "₹7,20,000",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    name: "Community Food Drive",
    title: "Food Donation",
    description:
      "More than 5,000 meals were served to families in need through community contributions.",
    raised: "₹2,80,000",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-[#fffaf5]">
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
          spaceBetween={30}
          autoplay={{
            delay: 4000,
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
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="
                    h-64
                    w-full
                    object-cover
                  "
                />

                <div className="p-6">
                  <span
                    className="
                      bg-orange-100
                      text-orange-600
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {story.title}
                  </span>

                  <h3 className="text-2xl font-bold mt-4">{story.name}</h3>

                  <p className="text-slate-600 mt-4">{story.description}</p>

                  <div
                    className="
                      mt-6
                      flex
                      justify-between
                      items-center
                    "
                  >
                    <div>
                      <p className="text-sm text-slate-500">Funds Raised</p>

                      <h4 className="font-bold text-orange-600">
                        {story.raised}
                      </h4>
                    </div>

                    <button
                      className="
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        px-5
                        py-2
                        rounded-xl
                        font-medium
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
