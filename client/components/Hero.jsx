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
    <div className=" pb-20 pt-20  bg-[#F3F4F6] w-full flex flex-col  space-y-10">
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
          We are expert in Digital Marketing,Custom Website Development,Product
          Strategy and Shopify Development. Your all in one digital Expert!
        </p>
      </div>
    </div>
  );
};

export default Hero;
