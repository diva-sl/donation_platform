import React from "react";
import { ShieldCheck, Lock, Database, Mail, Eye } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}

      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <ShieldCheck size={60} className="mx-auto mb-6" />

          <h1 className="text-5xl font-bold">Privacy Policy</h1>

          <p className="mt-5 text-lg">
            Your privacy and data security are important to us.
          </p>
        </div>
      </section>

      {/* Content */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-10">
            {/* Intro */}

            <div className="bg-gray-50 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>

              <p className="text-gray-600 leading-8">
                Mysticpace Platform respects your privacy and is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you use our website and services.
              </p>
            </div>

            {/* Information Collection */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>• Name and contact information</li>

                <li>• Email address and mobile number</li>

                <li>• Donation and transaction records</li>

                <li>• Campaign creation details</li>

                <li>• Device and browser data</li>
              </ul>
            </div>

            {/* Usage */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">How We Use Information</h2>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li>• Process donations securely</li>

                <li>• Verify fundraiser details</li>

                <li>• Improve user experience</li>

                <li>• Send campaign updates</li>

                <li>• Prevent fraud and misuse</li>
              </ul>
            </div>

            {/* Security */}

            <div className="border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>

              <p className="text-gray-600 leading-8">
                We implement industry-standard security measures to protect
                personal information, payment details, and account data. All
                sensitive transactions are processed through secure payment
                gateways.
              </p>
            </div>

            {/* Cookies */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Cookies Policy</h2>

              <p className="text-gray-600 leading-8">
                We use cookies to improve website performance, remember user
                preferences, analyze traffic, and provide a better browsing
                experience.
              </p>
            </div>

            {/* Third Party */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>

              <p className="text-gray-600 leading-8">
                We may use trusted third-party services such as payment
                processors, analytics providers, email services, and cloud
                hosting providers to deliver our platform effectively.
              </p>
            </div>

            {/* Rights */}

            <div className="border rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">User Rights</h2>

              <ul className="space-y-3 text-gray-600">
                <li>• Access your personal data</li>

                <li>• Request data correction</li>

                <li>• Request account deletion</li>

                <li>• Opt-out from marketing communications</li>
              </ul>
            </div>

            {/* Contact */}

            <div className="bg-orange-50 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-orange-500" size={28} />

                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>

              <p className="text-gray-600">
                For privacy-related questions, contact us at:
              </p>

              <p className="mt-3 font-semibold text-orange-600">
                support@Mysticpace.org
              </p>
            </div>

            {/* Footer */}

            <div className="text-center text-gray-500 pt-8">
              Last Updated: June 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
