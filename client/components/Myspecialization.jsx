"use client";
import React, { useState } from "react";

const Myspecialization = () => {
  const [openItem, setOpenItem] = useState(); // First item open by default

  const services = [
    {
      id: 0,
      title: "E-Commerce Website Development",
      isOpen: openItem === 0,
      subServices: ["Custom Website Development", "Growth Strategy  "],
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 1,
      title: "Google / Web Analytics",
      isOpen: openItem === 1,
      subServices: [
        "Google Analytics Setup",
        "Data Tracking & Reporting",
        "Conversion Optimization",
        "Performance Monitoring",
      ],
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      isOpen: openItem === 2,
      subServices: [
        "Platform Strategy",
        "Content Creation",
        "Community Management",
        "Paid Social Advertising",
      ],
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Shopify Developer",
      isOpen: openItem === 3,
      subServices: [
        "Custom Theme Development",
        "E-commerce Solutions",
        "App Integration",
        "Performance Optimization",
      ],
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      isOpen: openItem === 4,
      subServices: [
        "Technical SEO",
        "On-Page Optimization",
        "Link Building",
        "Local SEO",
      ],
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Performance Marketer",
        isOpen: openItem === 5,
      subServices: [
        "ROI Optimization",
        "Campaign Management",
        "A/B Testing",
        "Conversion Rate Optimization",
      ],
      description:
        "Providing the best digital marketing services to help your brand to grow faster. I always give my best to help my clients.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? -1 : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">
                My Specialization
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-orange-500">Services I</span>{" "}
              <span className="text-gray-800">Provide</span>
              <span className="text-orange-500 ml-3">🍃</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex items-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Transforming brands through data-driven digital strategies. From
              analytics insights to conversion optimization, I craft campaigns
              that deliver measurable results and drive sustainable growth for
              your business.
            </p>
          </div>
        </div>

        {/* Services Accordion */}
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="overflow-hidden">
              {/* Collapsed State - Only show when closed */}
              {!service.isOpen && (
                <div
                  className="bg-gray-200 p-6 rounded-2xl cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out transform animate-in slide-in-from-top-2"
                  style={{
                    animation: "slideUp 0.5s ease-out",
                  }}
                  onClick={() => toggleItem(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-bold text-xl">
                      {String(service.id + 1).padStart(2, "0")}. {service.title}
                    </span>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-700">
                      <span className="text-white text-lg font-bold">+</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Expanded State - Only show when open */}
              {service.isOpen && (
                <div
                  className="bg-black text-white p-8 rounded-2xl transform transition-all duration-500 ease-in-out animate-in slide-in-from-top-2"
                  style={{
                    animation: "slideDown 0.5s ease-out",
                  }}
                >
                  {/* Title Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold">
                      {String(service.id + 1).padStart(2, "0")}. {service.title}
                    </span>
                    <button
                      className="w-10 h-10 bg-orange-500 rounded-full cursor-pointer flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                      onClick={() => toggleItem(service.id)}
                    >
                      <span className="text-white text-xl font-bold">×</span>
                    </button>
                  </div>

                  {/* Sub-Service Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {service.subServices.map((subService, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-gray-600"
                        style={{
                          animation: `fadeInUp 0.6s ease-out ${
                            index * 0.1
                          }s both`,
                        }}
                      >
                        {subService}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className="text-gray-300 text-lg leading-relaxed mb-6"
                    style={{
                      animation: "fadeInUp 0.7s ease-out both",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Illustrative Image */}
                  <div
                    className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 "
                    style={{
                      animation: "fadeInUp 0.8s ease-out both",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Custom CSS Animations */}
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Myspecialization;
