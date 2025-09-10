// components/BannerSection.jsx

import React from "react";
import Image from "next/image";
import bannerBg from "../../assets/Images/aboutUs/aboutbanner.png"; // Update this if your image location is different

const BannerSection = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[55vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={bannerBg}
        alt="About Us Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-6 md:px-0 max-w-[1200px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
          About Us
        </h1>
        <p className="text-base sm:text-lg">
          <span className="cursor-pointer hover:underline text-black font-bold">
            Home
          </span>{" "}
          /{" "}
          <span className="text-yellow-400 font-semibold">About Us</span>
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
