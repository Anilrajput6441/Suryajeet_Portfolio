"use client";
import React, { useState } from "react";

const Myspecialization = () => {
  const [openItem, setOpenItem] = useState(); // First item open by default

  const services = [
    {
      id: 0,
      title: "Custom Website Development",
      isOpen: openItem === 0,
      subServices: [
        "Custom Design",
        "Performance Optimization",
        "SEO-Friendly Structure",
      ],
      description:
        "Every business is unique, so a ready-made template doesn't always work. A custom website means the design and features are built specifically around your business needs. Gives a professional look, fast performance, SEO-friendly structure, and builds trust with customers.",
      image:
        "https://www.internetcreation.net/wp-content/uploads/2015/04/banner-web-development.png",
    },
    {
      id: 1,
      title: "Shopify Website Development",
      isOpen: openItem === 1,
      subServices: [
        "Custom-Coded Stores",
        "High Conversion Optimization",
        "Secure Payment Integration",
        "Effortless Scalability",
      ],
      description:
        "Shopify is the simplest and most scalable platform for eCommerce. We create custom-coded Shopify stores that are optimized for high conversions. Easy store management, secure payments, smooth order handling, and effortless scalability.",
      image:
        "https://www.nicepng.com/png/detail/267-2675863_shopify-card-shopify-web-designer-banner.png",
    },
    {
      id: 2,
      title: "Meta Ads (Facebook & Instagram Ads)",
      isOpen: openItem === 2,
      subServices: [
        "Audience Targeting",
        "Lead Generation",
        "Brand Awareness",
        "ROI Optimization",
      ],
      description:
        "With Meta Ads, we target the exact audience interested in your product or service. Drives quality leads, builds brand awareness, boosts sales, and delivers measurable ROI.",
      image:
        "https://itmunch.com/wp-content/uploads/2024/03/meta-banner-cta.webp",
    },
    {
      id: 3,
      title: "Google Ads (Search, Display, YouTube)",
      isOpen: openItem === 3,
      subServices: [
        "Search Campaigns",
        "Display Advertising",
        "YouTube Video Ads",
        "Performance Tracking",
      ],
      description:
        "Google Ads place your business directly in front of people actively searching for your products or services. High-intent audience, quick results, and performance tracking with clear ROI.",
      image:
        "https://www.nellaiseo.com/wp-content/uploads/2024/05/google-ads-services-in-chennai.jpg",
    },
    {
      id: 4,
      title: "Educational LMS (Learning Management System)",
      isOpen: openItem === 4,
      subServices: [
        "Course Management",
        "Student Progress Tracking",
        "Online Exams",
        "Professional Education Platform",
      ],
      description:
        "For schools, coaching centers, or online trainers, we build an LMS where students can log in, access courses, track progress, and even take online exams. A professional system to sell and deliver online education seamlessly.",
      image:
        "https://www.shutterstock.com/image-vector/lms-learning-management-system-web-260nw-1886681293.jpg",
    },
    {
      id: 5,
      title: "Content Strategy & Marketing",
      isOpen: openItem === 5,
      subServices: [
        "Blog Strategy",
        "Social Media Content",
        "SEO Content Creation",
        "Brand Authority Building",
      ],
      description:
        "A website and ads aren't enough; content builds long-term trust. We create strategies for blogs, social media, and SEO content tailored to your brand. Establishes brand authority, drives organic traffic, and engages your audience effectively.",
      image:
        "https://cdn.vectorstock.com/i/1000v/32/92/content-marketing-banner-with-icons-website-vector-39813292.jpg",
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
