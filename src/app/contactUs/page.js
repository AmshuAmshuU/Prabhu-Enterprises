import Image from "next/image";
import backgroundImage from "../assets/images/contactUs/BackGroundImage.png";

export default function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-white">Contact Us</span>
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Contact Info */}
            <div className="bg-gray-50 flex flex-col relative">
              <div className="space-y-16">
                {/* Phone Number */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center min-w-[50px] min-h-[50px]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Phone Number</h3>
                    <p className="text-gray-700">+91 8946092951</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center min-w-[50px] min-h-[50px]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">E-mail</h3>
                    <p className="text-gray-700">prabhuenterprises555@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center min-w-[50px] min-h-[50px]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Address</h3>
                    <p className="text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col">
              <div className="flex-1">
                <form className="space-y-6">
                  {/* First Row - First Name, Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Dummy Text" 
                        className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Dummy Text" 
                        className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Second Row - Phone Number, Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="Dummy Text" 
                        className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">E-mail</label>
                      <input 
                        type="email" 
                        placeholder="Dummy Text" 
                        className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Third Row - City */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">City</label>
                    <input 
                      type="text" 
                      placeholder="Dummy Text" 
                      className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  {/* Fourth Row - State */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">State</label>
                    <input 
                      type="text" 
                      placeholder="Dummy Text" 
                      className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>

                  {/* Buttons Row */}
                  <div className="flex items-center space-x-4">
                    <button 
                      type="submit" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
                    >
                      CONTACT US
                    </button>
                    <button 
                      type="reset" 
                      className="text-gray-600 hover:text-gray-800 text-sm underline transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>

              {/* Bottom section - reCAPTCHA and Submit */}
              <div className="space-y-6 mt-6">
                {/* reCAPTCHA */}
                <div className="bg-gray-100 border border-gray-300 rounded p-4 inline-block">
                  <div className="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      className="w-6 h-6 border-2 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">I'm not a robot</span>
                    <div className="ml-auto">
                      <div className="text-xs text-blue-600 font-bold">reCAPTCHA</div>
                      <div className="text-xs text-gray-500">Privacy - Terms</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button - Below reCAPTCHA */}
                <div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-sm font-medium transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}