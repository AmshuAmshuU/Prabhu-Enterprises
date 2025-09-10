"use client";

import Image from "next/image";
import backgroundImage from "../assets/images/projects/BackGroundImage.png";
import Vila from "../assets/images/projectdetails/Vila.png";
import RequestCustomizedSolution from "../assets/images/projectdetails/RequestCustomizedSolution.png";

export default function ProjectDetails() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[200px] sm:h-[250px] lg:h-[300px] flex items-center justify-center">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Project Details
          </h1>
          <p className="text-xs sm:text-sm text-gray-200">
            Home / <span className="text-white">Project Details</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section (Images + Description) */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="w-full mb-4">
            <Image
              src={Vila}
              alt="Residential Construction"
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

          {/* Small Gallery */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Image
              src={Vila}
              alt="Gallery 1"
              width={150}
              height={100}
              className="rounded-lg object-cover w-[45%] sm:w-[150px] h-auto"
            />
            <Image
              src={Vila}
              alt="Gallery 2"
              width={150}
              height={100}
              className="rounded-lg object-cover w-[45%] sm:w-[150px] h-auto"
            />
            <div className="relative rounded-lg flex items-center justify-center bg-gray-800 text-white font-semibold text-lg w-[45%] sm:w-[150px] h-[100px]">
              +4
            </div>
          </div>

          {/* Description */}
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Residential Construction
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Our real estate services are designed to make buying, selling,
              renting, or investing in property simple and transparent. We guide
              clients through every step, ensuring they make informed and
              confident decisions.
            </p>
            <p>
              From residential properties to commercial and industrial spaces,
              we provide access to opportunities that match diverse budgets and
              needs.
            </p>
            <p>
              With a focus on trust and integrity, we connect clients with
              reliable deals and verified properties. Transparency and customer
              satisfaction are always our top priorities.
            </p>
            <p>
              Whether you’re searching for your dream home or planning to expand
              your business, Prabhu Enterprises ensures a smooth and
              professional real estate experience.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Other Projects */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-base sm:text-lg mb-4">
              Other Projects
            </h3>
            <ul className="space-y-3 text-blue-600 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:underline">
                  Commercial Buildings →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Industrial Projects →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Renovation & Remodeling →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Interior Design & Fit-outs →
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Marketing major projects →
                </a>
              </li>
            </ul>
          </div>

          {/* Request Customized Solution */}
          <div className="relative rounded-xl overflow-hidden shadow">
            <Image
              src={RequestCustomizedSolution}
              alt="Request Customized Solution"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-black/40">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Request a Customized Solution for Your Business!
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm mb-4">
                Every business is unique. Request a tailored solution crafted
                specifically for your organization’s challenges and goals.
              </p>
              <button className="bg-yellow-400 text-black px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-yellow-500">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Services *</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Services</option>
                <option>Residential Construction</option>
                <option>Commercial Buildings</option>
                <option>Industrial Projects</option>
                <option>Interior Design & Fit-outs</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700"
            >
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
