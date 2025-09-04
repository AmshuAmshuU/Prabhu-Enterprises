"use client";

import Image from "next/image";

// 👉 Import image
import officeImg from "../../assets/Images/whyus.png";

const features = [
  "Proven Experience",
  "Quality Assurance",
  "End-to-End Solutions",
  "Skilled Team",
  "Transparent Pricing",
  "Nationwide Reach",
  "Modern Innovation",
  "Customer Support",
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 sm:px-10 md:px-12 py-12 sm:py-16 max-w-7xl mx-auto">
      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
        {/* IMAGE (on top in mobile, right in desktop) */}
        <div className="order-1 md:order-2 flex justify-center">
          <div
            className="
              relative 
              w-[85%]        /* 🔽 smaller on very small screens */
              sm:w-[320px]   /* 🔽 slightly bigger for small devices */
              md:w-[500px]   /* normal size for desktop */
            "
          >
            <Image
              src={officeImg}
              alt="Why Choose Us"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* CONTENT (below image in mobile, left in desktop) */}
        <div className="order-2 md:order-1">
          <p className="text-blue-600 mb-2 font-medium">Why Choose Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Built on trust,
            <span className="text-blue-600"> driven by excellence.</span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            At Prabhu Enterprises, we go beyond delivering services — we create
            experiences that inspire confidence. With expertise across
            industries and a customer–first approach, we ensure quality,
            transparency, and innovation in every project.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 text-sm sm:text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
