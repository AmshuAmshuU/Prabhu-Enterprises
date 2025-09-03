"use client";

import { useState } from "react";
import Image from "next/image";
import bgImage from "../../assets/Images/formback.png"; // 👉 replace with your img

export default function EstimateCalculator() {
  const [service, setService] = useState("");
  const [dynamic, setDynamic] = useState("");
  const [estimate, setEstimate] = useState("");
  const [currency, setCurrency] = useState("INR");

  const services = ["Digital Marketing", "Web Development", "SEO"];
  const dynamicOptions = ["SEO", "SMM", "PPC"];
  const currencies = [
    { value: "INR", label: "India - Rupee" },
    { value: "EUR", label: "Euro - EUR" },
    { value: "USD", label: "United States Dollar - USD" },
  ];

  const handleCalculate = () => {
    if (service && dynamic) {
      setEstimate("5,000");
    } else {
      setEstimate("Please select all fields");
    }
  };

  const handleClear = () => {
    setService("");
    setDynamic("");
    setEstimate("");
    setCurrency("INR");
  };

  return (
    <section className="flex justify-center items-center px-4 py-14">
      <div className="relative w-full max-w-6xl min-h-[600px] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70 rounded-2xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between p-6 sm:p-8 md:p-10 gap-8 md:gap-10">
          {/* LEFT SIDE - Hidden on mobile */}
          <div className="hidden md:block text-white max-w-md text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Request a Customized Solution for Your Business!
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              Every business is unique. Request a tailored solution crafted
              specifically for your organization&apos;s challenges and goals.
            </p>
            <button className="mt-6 bg-yellow-400 text-black font-medium px-6 py-2 rounded hover:bg-yellow-500 transition">
              CONTACT US
            </button>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            className="bg-white shadow-lg rounded-2xl 
                       p-4 sm:p-5 md:p-5 
                       w-full max-w-[260px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[320px] 
                       mx-auto"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              Estimate Calculation
            </h3>
            <div className="h-[2px] w-full bg-blue-600 mb-4 sm:mb-6"></div>

            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Calculation Options
            </h4>

            {/* Service */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Select Service *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">-- Select Service --</option>
                {services.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Dynamic per service *
              </label>
              <select
                value={dynamic}
                onChange={(e) => setDynamic(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">-- Select Option --</option>
                {dynamicOptions.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Estimate */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Estimate Calculation *
              </label>
              <input
                type="text"
                value={estimate}
                readOnly
                placeholder="0"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Currency */}
            <div className="flex flex-col gap-2 mb-6 text-sm">
              {currencies.map((c) => (
                <label key={c.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={c.value}
                    checked={currency === c.value}
                    onChange={(e) => setCurrency(e.target.value)}
                  />
                  {c.label}
                </label>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleClear}
                className="w-1/2 bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition"
              >
                Clear
              </button>
              <button
                onClick={handleCalculate}
                className="w-1/2 bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition"
              >
                Calculate
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Stuck on the form?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Let&apos;s call you!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
