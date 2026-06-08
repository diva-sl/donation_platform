import React from "react";
import Marquee from "react-fast-marquee";

const partners = [
  {
    name: "UNICEF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/UNICEF_Logo.png",
  },
  {
    name: "WHO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/330px-WHO_logo.svg.png",
  },
  {
    name: "Red Cross",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Indian_Red_Cross_Society_Logo.png",
  },
  {
    name: "Save The Children",
    logo: "https://www.savethechildren.net/themes/custom/sci_theme/images/sci-logo.svg",
  },
  {
    name: "Care India",
    logo: "https://careifoundation.org/images/logo.jpg",
  },
  {
    name: "GiveIndia",
    logo: "https://cfstatic.give.do/4a8e5f5d-659d-4558-8ae9-378ec1e92b1b.webp",
  },
];

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Trusted Partners
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Supported By Trusted Organizations
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Working together with NGOs, communities, volunteers, and corporate
            partners to maximize impact.
          </p>
        </div>

        {/* Partner Logos */}

        <div className="bg-gray-50 rounded-3xl py-10 px-4">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="
                  mx-10
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    h-16
                    object-contain
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-300
                  "
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Trust Stats */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-orange-50 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-600">100+</h3>

            <p className="mt-3 text-slate-700">Partner Organizations</p>
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-600">500+</h3>

            <p className="mt-3 text-slate-700">Active Campaigns</p>
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-orange-600">50K+</h3>

            <p className="mt-3 text-slate-700">Lives Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
