import React from "react";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Users,
  AlertTriangle,
  Scale,
} from "lucide-react";

const Terms = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}

      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <FileText size={60} className="mx-auto mb-6" />

          <h1 className="text-5xl font-bold">Terms & Conditions</h1>

          <p className="mt-5 text-lg">
            Please read these terms carefully before using Mysticpace Platform.
          </p>
        </div>
      </section>

      {/* Content */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {/* Acceptance */}

            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>

              <p className="text-gray-600 leading-8">
                By accessing or using Mysticpace, you agree to comply with and
                be bound by these Terms & Conditions, Privacy Policy, and all
                applicable laws and regulations.
              </p>
            </div>

            {/* User Accounts */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">User Accounts</h2>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>
                  • Users must provide accurate information during registration.
                </li>

                <li>
                  • Users are responsible for maintaining account security.
                </li>

                <li>• Users must not share account credentials with others.</li>

                <li>
                  • Mysticpace may suspend accounts involved in suspicious
                  activity.
                </li>
              </ul>
            </div>

            {/* Donations */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Donations Policy</h2>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>• Donations are voluntary.</li>

                <li>
                  • Donors should review campaign details before contributing.
                </li>

                <li>
                  • Mysticpace acts as a technology platform connecting donors
                  and campaign organizers.
                </li>

                <li>• Donation receipts will be generated where applicable.</li>
              </ul>
            </div>

            {/* Refund Policy */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>

              <p className="text-gray-600 leading-8">
                Donations are generally non-refundable. Refund requests may be
                considered in cases of duplicate transactions, technical errors,
                or unauthorized payments, subject to review.
              </p>
            </div>

            {/* Fundraiser Rules */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Fundraiser Guidelines</h2>

              <ul className="space-y-3 text-gray-600">
                <li>
                  • Campaign organizers must provide truthful and accurate
                  information.
                </li>

                <li>
                  • Fake, misleading, or fraudulent campaigns are strictly
                  prohibited.
                </li>

                <li>
                  • Supporting documents may be requested for verification.
                </li>

                <li>
                  • Mysticpace reserves the right to suspend or remove campaigns
                  violating platform policies.
                </li>
              </ul>
            </div>

            {/* Prohibited Activities */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Prohibited Activities</h2>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>• Fraudulent fundraising.</li>

                <li>• Money laundering.</li>

                <li>• Illegal activities.</li>

                <li>• Hate speech or harmful content.</li>

                <li>• Misuse of platform services.</li>
              </ul>
            </div>

            {/* Disclaimer */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Platform Disclaimer</h2>
              </div>

              <p className="text-gray-600 leading-8">
                Mysticpace does not guarantee fundraising success. Campaign
                outcomes depend on multiple factors, including public engagement
                and campaign quality.
              </p>
            </div>

            {/* Limitation */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>

              <p className="text-gray-600 leading-8">
                Mysticpace shall not be liable for indirect, incidental,
                consequential, or special damages arising from use of the
                platform, fundraising outcomes, or donation transactions.
              </p>
            </div>

            {/* Intellectual Property */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>

              <p className="text-gray-600 leading-8">
                All platform content, branding, designs, logos, software, and
                materials are owned by Mysticpace and protected under applicable
                intellectual property laws.
              </p>
            </div>

            {/* Governing Law */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>

              <p className="text-gray-600 leading-8">
                These Terms shall be governed by and interpreted under the laws
                of India. Any disputes shall be subject to the jurisdiction of
                competent courts in India.
              </p>
            </div>

            {/* Footer */}

            <div className="bg-orange-50 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold">
                Questions About These Terms?
              </h3>

              <p className="mt-3 text-gray-600">Contact our support team at</p>

              <p className="mt-2 font-semibold text-orange-600">
                support@Mysticpace.org
              </p>
            </div>

            <div className="text-center text-gray-500">
              Last Updated: June 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
