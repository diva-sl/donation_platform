import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, HeartHandshake } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <HeartHandshake size={90} className="mx-auto text-orange-500" />
        </div>

        <h1 className="text-8xl md:text-9xl font-bold text-orange-500">404</h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-6">Page Not Found</h2>

        <p className="text-gray-600 mt-5 text-lg">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/"
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-2
            "
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            to="/campaigns"
            className="
              border
              border-orange-500
              text-orange-500
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-2
            "
          >
            <Search size={18} />
            Explore Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
