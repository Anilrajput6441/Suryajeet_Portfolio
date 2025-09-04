"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative w-full h-[70vh] -mt-1  overflow-hidden"
    >
      {/* Mobile Banner - Hidden on desktop */}
      <Image
        src="/Mobile-banner.png"
        alt="Mobile banner"
        fill
        className="object-contain md:hidden"
      />
      {/* Desktop Banner - Hidden on mobile */}
      <Image
        src="/Busniess-Web-Banner-15.jpg"
        alt="Desktop banner"
        fill
        className="object-cover hidden md:block"
      />
    </section>
  );
};

export default Banner;
