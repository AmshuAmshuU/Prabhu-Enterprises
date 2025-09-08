// app/components/ServicePage.js
"use client";

import Image from "next/image";
import bgImage from "../../assets/images/servicedeatils/banner.png";
import constructionImg from "../../assets/images/servicedeatils/servicedel.png";
import requestBg from "../../assets/images/servicedeatils/service.png"; // <-- background image for request box

export default function ServicePage() {
  return (
    <div className="w-full">
      {/* ===== Header Section ===== */}
      <div className="relative bg-blue-600 text-black">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt="Service Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Service Details
          </h1>
          <p className="mt-4 text-sm md:text-base">
            <span className="text-gray-200">Home / Services /</span>{" "}
            <span className="text-blue-300 font-semibold">
              Strategic Planning Services
            </span>
          </p>
        </div>
      </div>

      {/* ===== Main Content Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Left Column ~66% */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative w-[784px] h-[350px]">
                      <Image
                   src={constructionImg}
               alt="Building Construction"
                 fill
                className="object-cover rounded-[24px] opacity-100"
  />
</div>


            {/* Content */}
            <div className="p-6 md:p-8 font-poppins text-base leading-relaxed text-gray-700">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    Building Construction &amp; Materials
  </h2>
  <p className="mb-4">
    At Prabhu Enterprises, we offer end-to-end construction services
    that cover every stage of a project — from planning and design
    to execution and completion. Our approach ensures that each
    project is handled with precision, expertise, and a focus on
    long-term durability.
  </p>
  <p className="mb-4">
    We work with high-quality construction materials sourced from
    trusted suppliers, ensuring strength, safety, and sustainability
    in every build. Whether it’s residential, commercial, or
    industrial construction, our materials and methods are chosen to
    deliver results that meet both modern standards and client
    expectations.
  </p>
  <p className="mb-4">
    Our team of engineers, architects, and skilled professionals
    collaborate closely to bring each client’s vision to life. By
    combining innovation with practical solutions, we create
    structures that are functional, cost-efficient, and
    aesthetically appealing.
  </p>
  <p>
    Beyond construction, we also supply bulk construction materials,
    providing clients with reliable access to everything needed for
    their projects. With timely delivery, transparent pricing, and a
    commitment to excellence, Prabhu Enterprises has become a
    trusted name in building strong foundations for the future.
  </p>
</div>

          </div>
        </div>

        {/* Right Column ~33% */}
        <aside className="w-full lg:w-1/3 space-y-6">
          {/* Other Services */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Other Services</h3>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#" className="hover:underline">
                  Logistics &amp; Transportation →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Interior &amp; Exterior Designing →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Marketing →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Event Management →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Real Estate →
                </a>
              </li>
            </ul>
          </div>

          {/* Request Box with Background Image */}
          <div className="relative rounded-xl shadow-md overflow-hidden text-center text-white">
            {/* Background Image */}
            <Image
              src={requestBg}
              alt="Request Background"
              fill
              className="object-cover"
            />

            {/* Content */}
            <div className="relative z-10 p-6">
              <h3 className="text-lg font-semibold mb-2">
                Request a Customized Solution for Your Business!
              </h3>
              <p className="text-sm mb-4">
                Every business is unique. Request a tailored solution crafted
                specifically for your organization’s challenges and goals.
              </p>
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500">
                Contact Us
              </button>
            </div>
          </div>

          {/* ===== Contact Form ===== */}
          <div className="bg-white shadow-md rounded-xl p-6">
            {/* 🔥 FIX: reduced spacing to match screenshot (space-y-4 instead of 5) */}
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Services */}
              <div>
                {/* 🔥 FIX: changed mb-5 → mb-2 for consistency */}
                <label className="block text-sm font-medium mb-2">
                  Services *
                </label>
                <select className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Services</option>
                  <option>Construction</option>
                  <option>Interior Design</option>
                  <option>Digital Marketing</option>
                  <option>Logistics</option>
                  <option>Event Management</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
              >
                BOOK APPOINTMENT
              </button>
            </form>
          </div>
        </aside>
      </section>
    </div>
  );
}
