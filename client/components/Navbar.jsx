"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "Services", "About", "Testimonials", "Contact"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Map navigation links to section IDs
    const sectionMap = {
      Home: "banner",
      Services: "services",
      About: "about",
      Testimonials: "testimonials",
      Contact: "contact",
    };

    const sectionId = sectionMap[link];
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className=" px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-full shadow-lg px-6 py-4 flex items-center justify-between">
          {/* Logo/Image Placeholder */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Branding Workz"
              width={80}
              height={80}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className={`font-medium transition-colors duration-200 ${
                  activeLink === link
                    ? "text-orange-500"
                    : "text-black hover:text-gray-600"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Contact Me Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("Contact")}
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className={`text-left font-medium transition-colors duration-200 ${
                    activeLink === link
                      ? "text-orange-500"
                      : "text-black hover:text-gray-600"
                  }`}
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick("Contact")}
                className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 w-full mt-4"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
