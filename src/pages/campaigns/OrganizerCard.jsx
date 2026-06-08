import React from "react";
import { ShieldCheck } from "lucide-react";

const OrganizerCard = ({ organizer }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="text-lg font-bold mb-4">Organizer</h3>

      <div className="flex items-center gap-3">
        <div
          className="
          w-14 h-14 rounded-full
          bg-orange-500 text-white
          flex items-center justify-center
          font-bold text-xl
        "
        >
          {organizer?.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold">{organizer}</h4>

          <div className="flex items-center gap-1 text-green-600 text-sm">
            <ShieldCheck size={14} />
            Verified Organizer
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerCard;
