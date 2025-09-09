"use client";
import Image from "next/image";
import { useEffect } from "react";
import backgroundImage from "../assets/images/appointment/appointmentBackgroundImage.png";

export default function Appointment() {
  useEffect(() => {
    // Select all required inputs
    const form = document.getElementById("appointmentForm");
    const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");

    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        const errorEl = input.parentNode.querySelector(".error-message");
        if (input.value.trim() === "") {
          errorEl.textContent = "Please fill this box";
          input.classList.add("border-red-500");
        } else {
          errorEl.textContent = "";
          input.classList.remove("border-red-500");
        }
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");
    let isValid = true;

    inputs.forEach((input) => {
      const errorEl = input.parentNode.querySelector(".error-message");
      if (input.value.trim() === "") {
        errorEl.textContent = "Please fill this box";
        input.classList.add("border-red-500");
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    // Collect form data
    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      date: form.date.value,
      time: form.time.value,
      service: form.service.value,
      expert: form.expert.value,
      message: form.message.value,
    };

    console.log("Form submitted:", formData);
    // Later: send formData to backend
  };

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
          <h1 className="text-4xl font-bold text-white mb-2">Appointment</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-white">Appointment</span>
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Book your appointment now
          </h2>
          <p className="text-gray-500 mb-8">
            So our team can reach out to you on time
          </p>

          <form
            id="appointmentForm"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="eg: John Doe"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              />
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Available Date */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Available Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              />
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="eg: john@email.com"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              />
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Select Service */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Service
              </label>
              <select
                name="service"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              >
                <option value="">Select</option>
                <option value="interior">Interior Design</option>
                <option value="construction">Construction</option>
              </select>
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9543210987"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              />
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Select Expert */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Expert
              </label>
              <select
                name="expert"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              >
                <option value="">Select / Auto Assign</option>
                <option value="expert1">Expert 1</option>
                <option value="expert2">Expert 2</option>
              </select>
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Available Time */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Available Time
              </label>
              <input
                type="time"
                name="time"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              />
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Share Your Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                className="w-full border border-gray-300 rounded-xl bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-0"
                required
              ></textarea>
              <p className="error-message text-red-500 text-xs mt-1"></p>
            </div>

            {/* Buttons */}
            <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row justify-center gap-4 mt-6">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Book Now →
              </button>
              <button
                type="reset"
                className="px-8 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
              >
                Reset Form →
              </button>
            </div>
          </form>

          {/* Cancel Appointment */}
          <div className="mt-4 text-center">
            <button
              type="button"
              className="text-red-500 hover:underline text-sm font-medium"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
