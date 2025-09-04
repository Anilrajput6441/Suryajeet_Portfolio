import Marquee from "react-fast-marquee";
import React from "react";

const marquee = () => {
  return (
    <div className="bg-black py-4">
      <Marquee speed={40} gradient={false}>
        <div className="flex items-center space-x-8 px-8">
          <span className="text-white font-bold text-lg">
            Website Development
          </span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Product Strategy</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">
            Shopify Development
          </span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">
            Digital Marketing
          </span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Educational LMS</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">
            Content Strategy & Marketing
          </span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Google Ads</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Meta Ads</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Facebook Ads</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Instagram Ads</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default marquee;
