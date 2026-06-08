import React from "react";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";

const ShareCampaign = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Share Campaign</h3>

      <div className="flex gap-3">
        <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          <Facebook size={16} />
        </button>

        <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center">
          <Twitter size={16} />
        </button>

        <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
          <Linkedin size={16} />
        </button>

        <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default ShareCampaign;
