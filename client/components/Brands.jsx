"use client";
import React from "react";

const Brands = () => {
  const brands = [
    {
      name: "Cloud",
      href: "https://prashantchaurasiya.com/cdn/shop/files/Artboard_1_2.png?height=92&v=1752425289",
    },
    { name: "Proline", icon: "STOSI" },
    { name: "Tanahsarees", href: "https://tanahsarees.com/logo_new.png" },
    {
      name: "TrioStack",
      href: "https://www.triostack.in/_next/image?url=%2Flogo.png&w=384&q=75",
    },
  ];

  return (
    <div className="md:min-h-screen bg-gray-100 py-12 md:py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 md:mb-16">
          {/* Left Side - Heading */}
          <div className="w-full mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-gray-800 uppercase tracking-wider leading-tight">
              <span className="block">THE LEADING BRANDS</span>
              <span className="block text-orange-500">We've Worked With</span>
            </h2>
          </div>

          {/* Right Side - Button */}
          <div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg cursor-pointer hover:bg-gray-800 transition-colors">
              Let's Work <span className="text-orange-500">→</span>
            </button>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-8 lg:px-20">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="rounded-md p-3 md:p-4 border border-gray-300 aspect-square flex items-center justify-center bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-center">
                {/* Brand Icon */}
                <div className="mb-2 md:mb-3">
                  {brand.icon ? (
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800">
                      {brand.icon}
                    </div>
                  ) : (
                    <img
                      src={brand.href}
                      alt={brand.name}
                      className="max-w-full max-h-16 md:max-h-20 object-contain"
                    />
                  )}
                </div>
                {/* Brand Name */}
                <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 mt-2">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
