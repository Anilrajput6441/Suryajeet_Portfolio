"use client";

import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg">
            Please read these terms carefully before using our services
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

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Branding Workz's website
                for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-700 mb-4">
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                3. Disclaimer
              </h2>
              <p className="text-gray-700 mb-4">
                The materials on Branding Workz's website are provided on an 'as
                is' basis. Branding Workz makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                4. Limitations
              </h2>
              <p className="text-gray-700 mb-4">
                In no event shall Branding Workz or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on Branding Workz's
                website, even if Branding Workz or a Branding Workz authorized
                representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-700 mb-4">
                The materials appearing on Branding Workz's website could
                include technical, typographical, or photographic errors.
                Branding Workz does not warrant that any of the materials on its
                website are accurate, complete or current. Branding Workz may
                make changes to the materials contained on its website at any
                time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Links</h2>
              <p className="text-gray-700 mb-4">
                Branding Workz has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Branding Workz of the site. Use of any such
                linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                7. Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                Branding Workz may revise these terms of service for its website
                at any time without notice. By using this website you are
                agreeing to be bound by the then current version of these Terms
                and Conditions of Use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us at:
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

export default TermsPage;
