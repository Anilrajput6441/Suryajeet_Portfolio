import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-[85vh]  bg-[#F3F4F6] w-full flex flex-col  space-y-10">
      <div className="text-center  ">
        {/* Top Line - Orange dash + "Hello There!" */}
        <div className="flex items-center justify-center space-x-3">
          <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          <span className="text-gray-700 font-medium text-lg">
            Hello There!
          </span>
        </div>

        {/* Main Headline - "I'm Surya" */}
        <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          We're <span className="text-orange-500">Branding Workz</span>
          <span className="text-gray-900 ml-2 inline-block">
            <div className="flex items-center justify-center w-4 h-4">
              <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full ml-1"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full ml-1"></div>
              <div className="w-1 h-1 bg-gray-900 rounded-full ml-1"></div>
            </div>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          I am a Digital Marketer and Shopify Developer. Your all in one digital
          Expert!
        </p>
      </div>
      {/* below section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-8 w-full">
        {/* left side */}
        <div className="w-full lg:w-1/2 mx-auto p-4 lg:p-8 flex flex-col gap-y-8 lg:gap-y-[20vh] lg:md:pr-60">
          <div className="relative mb-6">
            <div className="text-4xl lg:text-6xl text-orange-500 font-bold absolute -top-4 -left-2">
              "
            </div>
            <p className="text-lg lg:text-xl text-gray-800 font-medium leading-relaxed pl-8 lg:pl-12">
              Oliver's Remarkable Design Transformed Our Website - Highly
              Recommended!
            </p>
          </div>

          {/* Review Statistics */}
          <div className="pl-8 lg:pl-12">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-orange-500 font-bold text-base lg:text-lg">
                150+ Reviews
              </span>
              <span className="text-gray-800 text-base lg:text-lg">
                (4.9 of 5)
              </span>
            </div>
            <p className="text-gray-500 text-xs lg:text-sm">
              Reviews from Valued Clients
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between mt-8 lg:mt-0">
          {/* UI Elements Grid */}
          <div className="flex flex-col gap-4 lg:gap-6 p-4 lg:p-8 items-center lg:items-end">
            {/* Top Row */}
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium text-sm lg:text-base">
                Prototype
              </button>
              <button className="bg-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium text-sm lg:text-base">
                Dashboard
              </button>
            </div>

            {/* Middle Row */}
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="bg-orange-500 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                <span className="text-white text-lg lg:text-xl">+</span>
              </button>
              <button className="bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium text-sm lg:text-base">
                Mobile App Design
              </button>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium text-sm lg:text-base">
                Website Design
              </button>
              <button className="bg-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium text-sm lg:text-base">
                Design System
              </button>
            </div>
          </div>
          {/* Follow Us On Section */}
          <div className="text-center space-y-4 flex flex-col items-center mr-10 lg:items-end mt-8 lg:mt-0">
            <h3 className="text-gray-800 font-medium text-base lg:text-lg">
              Follow Us On
            </h3>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center space-x-4 lg:space-x-6">
              {/* Linkedin */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors cursor-pointer">
                <FaLinkedin className="text-black text-lg lg:text-xl" />
              </div>

              {/* Instagram */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors cursor-pointer">
                <FaInstagram className="text-black text-lg lg:text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 absolute z-5 bottom-10 w-full justify-center px-4">
        {/* Portfolio Button */}
        <button className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium hover:border-orange-500 hover:border flex items-center gap-3 hover:text-orange-500 cursor-pointer transition-colors text-sm lg:text-base">
          <span>Portfolio</span>
          <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* Hire Me Button */}
        <button className="bg-white text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium border hover:border-orange-500 hover:text-orange-500 cursor-pointer border-black hover:bg-gray-50 transition-colors text-sm lg:text-base">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
