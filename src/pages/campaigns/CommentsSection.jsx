import React from "react";

const CommentsSection = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">
      <h2 className="text-2xl font-bold mb-6">Wishes & Comments</h2>

      <div className="space-y-4">
        <div className="border rounded-2xl p-4">
          <h4 className="font-medium">Priya</h4>

          <p className="text-gray-600 mt-2">
            Wishing everyone success and happiness.
          </p>
        </div>

        <div className="border rounded-2xl p-4">
          <h4 className="font-medium">Arun</h4>

          <p className="text-gray-600 mt-2">Glad to be part of this journey.</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
