"use client";
import Image from "next/image";

export default function EstimateSection() {
  return (
    <section className="relative bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Request a Customized <br />
              <span className="text-blue-600">Solution for Your Business!</span>
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Every business is unique. Request a tailored solution crafted
              specifically for your organization’s challenges and goals.
            </p>
            <button className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
              CONTACT US
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 max-w-lg w-full">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-2">Estimate Calculation</h3>
              <hr className="border-t-2 border-blue-500 mb-4" />

              <h4 className="text-xl font-bold mb-4">Calculation Options</h4>

              {/* FORM FIELDS */}
              <div className="space-y-4">
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Digital Marketing</option>
                  <option>Web Development</option>
                </select>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>SEO</option>
                  <option>Social Media</option>
                </select>
                <input
                  type="text"
                  placeholder="5,000"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex items-center justify-between mt-6">
                <button className="px-6 py-2 bg-gray-200 rounded font-medium">
                  Clear
                </button>
                <button className="px-6 py-2 bg-yellow-400 rounded font-medium hover:bg-yellow-500">
                  Calculate
                </button>
              </div>

              <p className="text-xs text-center mt-4 text-gray-600">
                Stuck on the form?{" "}
                <a href="#" className="text-blue-600 font-medium">
                  Let’s call you!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
