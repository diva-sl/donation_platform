import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#1f2937] text-white text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-6">
            <a
              href="tel:+917676931982"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <FaPhoneAlt />
              +91 7676931982
            </a>

            <a
              href="mailto:support@mysticpace.com"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <MdEmail />
              support@mysticpace.com
            </a>
          </div>

          <div>Donate • Preserve Heritage • Serve Humanity</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
