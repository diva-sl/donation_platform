import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-slate-900">Refund Policy</h1>

          <p className="mt-4 text-gray-600">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8 mt-10 text-gray-700 leading-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Donation Refunds</h2>

              <p>
                Donations made through Mysticpace are generally considered
                voluntary contributions and are non-refundable once the
                transaction has been successfully processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Duplicate Transactions
              </h2>

              <p>
                If a donor is charged more than once for the same donation due
                to a technical issue, Mysticpace will review the request and
                process an eligible refund after verification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Failed Transactions
              </h2>

              <p>
                If an amount is deducted but the donation is not successfully
                recorded, the payment gateway or bank may automatically reverse
                the transaction according to their policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Refund Request Process
              </h2>

              <p>
                Refund requests must be submitted within 7 days of the
                transaction date along with transaction details and proof of
                payment for review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Support</h2>

              <p>
                For refund-related questions, please contact our support team at
                support@mysticpace.com with your transaction reference number.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Final Decision</h2>

              <p>
                Refund approvals are subject to verification and compliance with
                platform policies. Mysticpace reserves the right to make the
                final decision regarding refund eligibility.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
