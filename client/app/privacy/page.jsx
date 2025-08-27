"use client";

import Link from "next/link";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            How we collect, use, and protect your information
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-orange-50 border-l-4 border-orange-500">
            <p className="text-orange-800 font-medium">
              Last updated: January 2025
            </p>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when
                you create an account, subscribe to our newsletter, or contact
                us for support.
              </p>
              <p className="text-gray-700 mb-4">
                The types of information we may collect include:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Communication preferences and feedback</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>
                  Communicate with you about products, services, and events
                </li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-700 mb-4">
                However, no method of transmission over the internet or
                electronic storage is 100% secure, so we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our website</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                7. Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 mb-4">
                Your continued use of our services after any changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:singhsurya323@gmail.com"
                    className="text-orange-600 hover:text-orange-700 underline"
                  >
                    singhsurya323@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-colors duration-300 rounded-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
