"use client";

import Image from "next/image";
import CountUp from "react-countup";

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

const stats = [
  { id: 1, value: 500, suffix: "+", label: "Satisfied Customers" },
  { id: 2, value: 10, suffix: "+", label: "Years Experience" },
  { id: 3, value: 20, suffix: "+", label: "Branch Office" },
  { id: 4, value: 40, suffix: "+", label: "Projects Completed" },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 sm:px-8 md:px-12 py-12 sm:py-16">
      {/* CONTENT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
        {/* LEFT CONTENT */}
        <div>
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

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Blue background shadow */}
          <div className="absolute -top-6 right-4 w-[80%] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[240px] md:h-[280px] bg-blue-200 rounded-xl z-0"></div>
          {/* Main Image */}
          <div className="relative z-10 w-[85%] sm:w-[400px] md:w-[500px]">
            <Image
              src={officeImg}
              alt="Why Choose Us"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#1c1c1c] w-full py-6 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center divide-x divide-gray-700">
          {stats.map((stat) => (
            <div key={stat.id} className="text-white px-4 sm:px-6 py-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                <CountUp end={stat.value} duration={3} />
                {stat.suffix}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
