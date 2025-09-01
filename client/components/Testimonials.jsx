"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      company: "TechStart India",
      role: "CEO",
      content:
        "Surya transformed our online presence completely. The custom website he built for us increased our conversions by 300%. His attention to detail and understanding of our business needs was exceptional.",
      rating: 5,
      image:
        "https://assets.telegraphindia.com/telegraph/2025/Jul/1752724400_priya-nair.gif",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      company: "EduLearn Academy",
      role: "Founder",
      content:
        "The LMS system Surya developed for our online courses is outstanding. Students love the interface, and our course completion rates have doubled. Highly recommend his services!",
      rating: 5,
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFiPdWZpK7v1A/profile-displayphoto-scale_200_200/B56ZgsBIVhHkAc-/0/1753085151938?e=2147483647&v=beta&t=qHBaX9iOhKJsoRBjWRwoiGVxy2Cig2du_ZuTnavOtzg",
    },
    {
      id: 3,
      name: "Anita Patel",
      company: "Fashion Forward",
      role: "Marketing Director",
      content:
        "Our Shopify store was struggling until Surya optimized it. Sales increased by 250% in just 3 months. His Google Ads campaigns are bringing us high-quality customers every day.",
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mM7DD8sNH2LSbJvfvXJi-6hwElru6oXSYg&s",
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      company: "HealthPlus Clinic",
      role: "Practice Manager",
      content:
        "Surya's content strategy helped us establish authority in our field. Our organic traffic grew by 400% and we're now the go-to resource for health information in our area.",
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5He5Fk3ERi1GvQv3AARjV43Cyalqku77XLA&s",
    },
    {
      id: 5,
      name: "Meera Gupta",
      company: "GreenTech Solutions",
      role: "CTO",
      content:
        "The Meta Ads campaigns Surya created for us are incredibly effective. We're getting qualified leads at half the cost of our previous campaigns. ROI has never been better!",
      rating: 5,
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQGZCCquXOpMKA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1640776031917?e=2147483647&v=beta&t=lZIQfw9e0kPHdDtVZNKU3rAUBqo80_jJMbJuN5_hT5c",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-orange-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-gray-100  px-4 pb-16 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">
              Client Testimonials
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-orange-500">What Our</span>{" "}
            <span className="text-gray-800">Clients Say</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl   p-8 lg:p-12 mb-8 transform transition-all duration-500 ease-in-out">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-orange-500 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Contact Me Button */}
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
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started Like{" "}
                {testimonials[currentTestimonial].name.split(" ")[0]}
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2  transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">5.0</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
