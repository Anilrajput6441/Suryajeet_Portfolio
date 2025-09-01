"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section id="banner" className="relative w-full h-screen overflow-hidden">
      <Image
        src="/Busniess-Web-Banner-15.jpg"
        alt="banner"
        fill
        className="object-cover"
      />
    </section>
  );
};

export default Banner;
