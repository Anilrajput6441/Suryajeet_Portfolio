import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section - White Background */}
      <div className="bg-white py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-black uppercase tracking-wider">
              LET'S CONNECT THERE!
            </h2>
          </div>

          {/* Social Media Links - Two Columns */}
          <div className=" gap-8 max-w-2xl mx-auto">
            {/* Right Column */}
            <div className=" flex gap-40 items-center justify-center">
              <Link
                href="https://www.instagram.com/brandingworkz?igsh=cHhnYWIyZmN4b2d3"
                target="_blank"
                className="flex items-center cursor-pointer gap-2 hover:text-orange-500 justify-between py-3 border-b border-gray-200"
              >
                <span className=" font-bold text-lg">INSTAGRAM</span>
                <span className="">→</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/surya-jeet-singh-a04272203/"
                target="_blank"
                className="flex items-center cursor-pointer gap-2 hover:text-orange-500 justify-between py-3 border-b border-gray-200"
              >
                <span className=" font-bold text-lg">LINKEDIN</span>
                <span className="">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Black Background */}
      <div className="bg-black py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Email Contact */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg mb-2">Email me at</p>
            <a
              href="mailto:singhsurya323@gmail.com"
              className="text-white text-2xl lg:text-3xl font-bold underline hover:text-orange-500 transition-colors"
            >
              singhsurya323@gmail.com
            </a>
          </div>

          {/* Main Navigation */}
          <div className="text-center mb-12">
            <nav className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="#"
                className="text-orange-500 font-bold text-lg hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white font-medium text-lg hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-white font-medium text-lg hover:text-gray-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white font-medium text-lg hover:text-gray-300 transition-colors"
              >
                Works
              </a>
              <a
                href="#"
                className="text-white font-medium text-lg hover:text-gray-300 transition-colors"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Footer Links and Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              Copyright © 2025 Branding Workz all rights reserved
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
