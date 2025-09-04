// src/app/services/page.js
import Image from "next/image";
import backgroundImage from "../assets/images/services/backGround.png";
import whychoose from "../assets/images/services/whychoose.png";
import {
  FaTools,
  FaTruck,
  FaPaintRoller,
  FaBullhorn,
  FaCalendarAlt,
  FaHome,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Star } from "lucide-react";

import employee1 from "../assets/images/services/employee1.png";
import employee2 from "../assets/images/services/employee2.png";
import employee3 from "../assets/images/services/employee3.png";
import employee4 from "../assets/images/services/employee4.png";
import employee5 from "../assets/images/services/employee5.png";

export default function Services() {
  const services = [
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Building Construction & Materials",
      desc: "Reliable construction solutions with quality materials and expert execution.",
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Logistics & Transportation",
      desc: "Efficient delivery and supply chain support across all locations.",
    },
    {
      icon: <FaPaintRoller className="w-8 h-8" />,
      title: "Interior & Exterior Designing",
      desc: "Stylish, functional spaces designed to match your vision and lifestyle.",
    },
    {
      icon: <FaBullhorn className="w-8 h-8" />,
      title: "Digital Marketing",
      desc: "Smart strategies to grow your brand and reach the right audience.",
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Event Management",
      desc: "Seamless planning and execution for memorable events of any scale.",
    },
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Real estate",
      desc: "Trusted guidance for buying, selling, or investing in properties.",
    },
  ];

  const points = [
    "Proven Experience",
    "Quality Assurance",
    "End-to-End Solutions",
    "Skilled Team",
    "Transparent Pricing",
    "Nationwide Reach",
    "Modern Innovation",
    "Customer Support",
  ];

  const testimonials = [
    {
      name: "Person 1",
      role: "Designation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      image: "/images/person1.png", // replace with actual image path
    },
    {
      name: "Person 2",
      role: "Designation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      image: "/images/person2.png",
    },
    {
      name: "Person 3",
      role: "Designation",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      image: "/images/person3.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <Image
          src={backgroundImage}
          alt="Services background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Our Services</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-white">Services</span>
          </p>
        </div>
      </section>

      {/* Explore Services Section */}
      <section className="px-6 py-12 md:px-20 lg:px-32">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Explore Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide end-to-end solutions in construction, interiors, events,
            real estate, logistics, digital marketing, and home appliances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 bg-transparent"
            >
              <div className="p-2 rounded-md bg-white border border-gray-100 shadow-sm">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline flex items-center gap-1"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-16 md:px-20 lg:px-32 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-medium mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built on trust,{" "}
              <span className="text-blue-600">driven by excellence.</span>
            </h2>
            <p className="text-gray-600 mb-8">
              At Prabhu Enterprises, we go beyond delivering services — we
              create experiences that inspire confidence. With expertise across
              industries and a customer-first approach, we ensure quality,
              transparency, and innovation in every project.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white">
                    <FaCheckCircle className="w-4 h-4" />
                  </span>
                  <p className="text-gray-800">{point}</p>
                </div>
              ))}
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md transition">
              READ MORE
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-lg mx-auto">
            <div
              className="absolute -right-6 -top-6 w-[95%] h-[95%] rounded-xl bg-gradient-to-r from-blue-500 to-blue-700"
              aria-hidden="true"
            />
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={whychoose}
                alt="Office / interior image for why choose us"
                width={700}
                height={460}
                className="object-cover w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Text Column */}
          <div>
            <p className="text-sm font-medium text-blue-600">Our Team</p>
            <h2 className="text-4xl font-bold mt-2">
              Meet Our <span className="text-blue-600">Smart People.</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Behind every successful project is a passionate and skilled team.
              Led by our founder, T. Jaya Prabhu, our workforce brings together
              expertise across engineering, design, logistics, events,
              marketing, and customer care — working as one to deliver seamless
              experiences.
            </p>
          </div>

          {/* Employee Cards */}
          {[employee1, employee2, employee3, employee4, employee5].map(
            (emp, idx) => (
              <div key={idx} className="text-center">
                <div className="rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src={emp}
                    alt={`Employee ${idx + 1}`}
                    width={380}
                    height={260}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-2 font-semibold">{`Employee ${idx + 1}`}</h3>
                <p className="text-blue-600">Designation</p>
                <div className="flex justify-center gap-4 mt-2 text-gray-500">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-indigo-600 font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            What our customers are saying about us?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-start text-left"
              >
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.feedback}
                </p>
              </div>
            ))}
          </div>

          {/* Slider dots */}
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </section>
    </>
  );
}
