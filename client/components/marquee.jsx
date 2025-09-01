import Marquee from "react-fast-marquee";
import React from "react";

const marquee = () => {
  return (
    <div className="bg-black py-4">
      <Marquee speed={40} gradient={false}>
        <div className="flex items-center space-x-8 px-8">
          <span className="text-white font-bold text-lg">Website Design</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Dashboard</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Wireframe</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">User Research</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Prototype</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">Mobile App</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
          <span className="text-white font-bold text-lg">UI/UX Design</span>
          <div className="w-4 h-4 bg-orange-500 rounded-sm transform rotate-45"></div>
        </div>
      </Marquee>
    </div>
  );
};


export default marquee;
