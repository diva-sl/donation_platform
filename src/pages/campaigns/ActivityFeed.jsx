import React from "react";

const ActivityFeed = () => {
  return (
    <div
      className="
      bg-green-50
      border border-green-100
      rounded-2xl
      p-5
    "
    >
      <h3 className="font-bold text-green-700">Recent Activity</h3>

      <p className="mt-3 text-sm text-green-700">🎉 Rajesh donated ₹2,500</p>

      <p className="text-xs text-green-600">5 minutes ago</p>
    </div>
  );
};

export default ActivityFeed;
