"use client";
import React from "react";

const WorkingProcess = () => {
  const processSteps = [
    {
      number: "1",
      title: "Plan the Project",
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
    },
    {
      number: "2",
      title: "Fix the Marketing",
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
    },
    {
      number: "3",
      title: "Provide Conclusion",
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "$2M+", label: "Revenue Generated" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Orange line + subtitle */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">My Process</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-orange-500">Working</span>{" "}
            <span className="text-gray-800">Process</span>
          </h2>

          <p className="text-gray-800 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            I'm a Digital Marketer based in New York, USA. Providing the best
            digital marketing services to help your brand.
          </p>
        </div>

        {/* Process Steps - Direct on gray background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {processSteps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Large Background Number */}
              <div className="text-8xl lg:text-9xl font-black text-orange-200 opacity-60 select-none mb-4">
                {step.number}
              </div>

              {/* Title and Description - Direct on background */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 ">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-orange-600 cursor-pointer"
          >
            Ready to Start Your Project?
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
