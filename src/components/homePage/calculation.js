"use client";
import bgImg from "../../assets/Images/homepage/aboutcta.png"; // Replace with your actual image

export default function EstimateSection() {
  return (
    <section className="relative flex justify-center items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background image container */}
      <div
        className="absolute inset-0 mx-auto rounded-xl bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Request a Customized <br />
            <span className="text-yellow-400">Solution for Your Business!</span>
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-200">
            Every business is unique. Request a tailored solution crafted
            specifically for your organization’s challenges and goals.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
            CONTACT US
          </button>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-2">Estimate Calculation</h3>
            <hr className="border-t-2 border-blue-500 mb-4" />

            <h4 className="text-xl font-bold mb-6">Calculation Options</h4>

            {/* Form fields */}
            <div className="space-y-5 text-sm">
              <div>
                <label className="block mb-1 font-medium">Select Service *</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option>Digital Marketing</option>
                  <option>Web Development</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Dynamic per service *</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm">
                  <option>SEO</option>
                  <option>Social Media</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Estimate Calculation *</label>
                <input
                  type="text"
                  placeholder="5,000"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Select Currency *</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currency" className="accent-blue-500" />
                    <span>India - Rupee</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currency" className="accent-blue-500" />
                    <span>Euro - EUR</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currency" className="accent-blue-500" />
                    <span>USD</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="px-6 py-2 bg-gray-200 rounded font-medium text-sm">
                Clear
              </button>
              <button className="px-6 py-2 bg-yellow-400 rounded font-medium text-sm hover:bg-yellow-500">
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

      {/* Extra responsiveness */}
      <style jsx>{`
        @media (min-width: 1024px) {
          section > div.absolute {
            width: 100%;
            height: 700px;
          }
        }
        @media (max-width: 1023px) {
          section > div.absolute {
            height: 500px;
            border-radius: 1rem;
          }
        }
        @media (max-width: 768px) {
          section > div.absolute {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
