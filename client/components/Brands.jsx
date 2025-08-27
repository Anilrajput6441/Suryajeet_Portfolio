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
    <div className="min-h-screen bg-gray-100 py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          {/* Left Side - Heading */}
          <div className="w-full mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-800 uppercase tracking-wider leading-tight">
              <span className="block">THE LEADING BRANDS</span>
              <span className="block text-orange-500">I'VE WORKED WITH</span>
            </h2>
          </div>

          {/* Right Side - Button */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg cursor-pointer">
              Let's Work <span className="text-orange-500">→</span>
            </button>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8  px-20">
          {brands.map((brand, index) => (
            <div
              key={index}
              className=" rounded-md p-2   border border-gray-300 aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                {/* Brand Icon */}
                <div className="text-4xl lg:text-5xl mb-3 ">
                  {brand.icon ? (
                    <div className="text-4xl lg:text-5xl mb-3 text-center font-bold ">
                      {brand.icon}
                    </div>
                  ) : (
                    <img src={brand.href} alt={brand.name} />
                  )}
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
