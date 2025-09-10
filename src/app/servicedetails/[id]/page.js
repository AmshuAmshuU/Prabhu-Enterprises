// app/servicedetails/[id]/page.js
"use client";

import Image from "next/image";
import Link from "next/link";
import bgImage from "../../assets/images/servicedeatils/banner.png";
import requestBg from "../../assets/images/servicedeatils/service.png";

// Import all service images
// Import all service images
import constructionImg from "../../assets/images/servicedeatils/servicedel.png";
import logisticsImg from "../../assets/images/servicedeatils/logistics.jpg";
import eventImg from "../../assets/images/servicedeatils/event.jpg";
import interiorImg from "../../assets/images/servicedeatils/interior.jpg";
import digitalImg from "../../assets/images/servicedeatils/digital.jpg";
import realestateImg from "../../assets/images/servicedeatils/realestate.jpg";


// ===== Services Array =====
const services = [
  {
    id: "1",
    title: "Building Construction & Materials",
    breadcrumb: "Building Construction & Materials",
    image: constructionImg,
    description: [
      "At Prabhu Enterprises, we offer end-to-end construction services that cover every stage of a project — from planning and design to execution and completion.",
      "We work with high-quality construction materials sourced from trusted suppliers, ensuring strength, safety, and sustainability in every build.",
      "Our team of engineers, architects, and skilled professionals collaborate closely to bring each client’s vision to life.",
      "Beyond construction, we also supply bulk construction materials, providing clients with reliable access to everything needed for their projects.",
    ],
  },
  {
    id: "2",
    title: "Logistics & Transportation",
    breadcrumb: "Logistics & Transportation",
    image: logisticsImg,
    description: [
      "We provide efficient and reliable logistics & transportation services tailored to your business needs.",
      "Our solutions ensure safe and timely delivery across regions with end-to-end tracking support.",
    ],
  },
  {
    id: "3",
    title: "Event Management",
    breadcrumb: "Event Management",
    image: eventImg,
    description: [
      "From corporate events to personal celebrations, our team manages everything with precision and creativity.",
      "We ensure smooth execution with a blend of strategy, design, and flawless management.",
    ],
  },
  {
    id: "4",
    title: "Interior & Exterior Designing",
    breadcrumb: "Interior & Exterior Designing",
    image: interiorImg,
    description: [
      "Our design team brings your vision to life with innovative interior and exterior designs.",
      "We combine aesthetics, functionality, and sustainability to create unique living and working spaces.",
    ],
  },
  {
    id: "5",
    title: "Digital Marketing",
    breadcrumb: "Digital Marketing",
    image: digitalImg,
    description: [
      "We provide complete digital marketing solutions — SEO, social media, paid ads, and more.",
      "Our data-driven strategies help businesses grow their online presence and attract quality leads.",
    ],
  },
  {
    id: "6",
    title: "Real Estate",
    breadcrumb: "Real Estate",
    image: realestateImg,
    description: [
      "Prabhu Enterprises offers trusted real estate solutions across residential and commercial sectors.",
      "We connect clients with the best properties and provide end-to-end consultancy support.",
    ],
  },
];

export default function ServicePage({ params }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return <div className="p-10 text-center">Service not found</div>;
  }

  return (
    <div className="w-full">
      {/* ===== Hero Section ===== */}
      <div className="relative bg-blue-600 text-black">
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt="Service Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Service Details
          </h1>
          <p className="mt-4 text-sm md:text-base">
            <span className="text-gray-200">Home / Services /</span>{" "}
            <span className="text-blue-300 font-semibold">
              {service.breadcrumb}
            </span>
          </p>
        </div>
      </div>

      {/* ===== Main Content Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-[350px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-[24px]"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 font-poppins text-base leading-relaxed text-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {service.title}
              </h2>
              {service.description.map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <aside className="w-full lg:w-1/3 space-y-6">
          {/* Other Services */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Other Services</h3>
            <ul className="space-y-2 text-blue-600">
              {services
                .filter((s) => s.id !== service.id)
                .map((s) => (
                  <li key={s.id}>
                    <Link href={`/servicedetails/${s.id}`} className="hover:underline">
                      {s.title} →
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Request Box */}
          <div className="relative rounded-xl shadow-md overflow-hidden text-center text-white">
            <Image
              src={requestBg}
              alt="Request Background"
              fill
              className="object-cover"
            />
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

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Services *</label>
                <select className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Services</option>
                  {services.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
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
