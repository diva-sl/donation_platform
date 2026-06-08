import React from "react";

const CampaignGuidelines = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h1 className="text-4xl font-bold mb-6">Campaign Guidelines</h1>

        <ul className="space-y-4 text-gray-700">
          <li>✔ Provide accurate campaign information.</li>
          <li>✔ Upload genuine supporting documents.</li>
          <li>✔ Explain how funds will be utilized.</li>
          <li>✔ Provide campaign updates regularly.</li>
          <li>✔ Avoid misleading information.</li>
          <li>❌ No illegal or prohibited activities.</li>
          <li>❌ No fraudulent fundraising campaigns.</li>
        </ul>
      </div>
    </div>
  );
};

export default CampaignGuidelines;
