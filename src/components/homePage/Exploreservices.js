"use client";

import Image from "next/image";

// Import icons
import ConstructionIcon from "../../assets/icons/icon.png";
import LogisticsIcon from "../../assets/icons/icon1.png";
import InteriorIcon from "../../assets/icons/icon.png";
import EventIcon from "../../assets/icons/icon3.png";
import MarketingIcon from "../../assets/icons/icon4.png";
import RealEstateIcon from "../../assets/icons/icon5.png";

// Import custom arrow icon
import ArrowIcon from "../../assets/icons/arrow.png";

const services = [
  {
    icon: ConstructionIcon,
    title: "Building Construction & Materials",
    description:
      "Reliable construction solutions with quality materials and expert execution.",
  },
  {
    icon: LogisticsIcon,
    title: "Logistics & Transportation",
    description:
      "Efficient delivery and supply chain support across all locations.",
  },
  {
    icon: InteriorIcon,
    title: "Interior & Exterior Designing",
    description:
      "Stylish, functional spaces designed to match your vision and lifestyle.",
  },
  {
    icon: EventIcon,
    title: "Event Management",
    description:
      "Seamless planning and execution for memorable events of any scale.",
  },
  {
    icon: MarketingIcon,
    title: "Digital Marketing",
    description:
      "Smart strategies to grow your brand and reach the right audience.",
  },
  {
    icon: RealEstateIcon,
    title: "Real estate",
    description:
      "Trusted guidance for buying, selling, or investing in properties.",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left side text block */}
        <div className="md:col-span-1 md:mt-[-30px] md:ml-6 text-center md:text-left">
          <p className="text-[#4169E1] mb-2 text-sm md:text-base">Services</p>

          {/* Heading */}
          <h2 className="font-bold mb-4 leading-snug text-[49px]">
            Explore <br className="hidden md:block" /> Services
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-[16px]">
            We provide end-to-end solutions in construction, interiors, events,
            real estate, logistics, digital marketing, and home appliances.
          </p>

          {/* Button */}
          <button
            className="w-[100px] h-[40px] rounded-[5px] border text-[#4169E1] border-[#4169E1] font-medium transition
                       hover:bg-[#4169E1] hover:text-white"
          >
            VIEW ALL
          </button>
        </div>

        {/* Services grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-8 md:mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left space-y-3 w-full"
            >
              {/* Icon */}
              <Image
                src={service.icon}
                alt={service.title}
                width={70}
                height={70}
                className="mb-4"
              />

              {/* Title */}
              <h3 className="font-semibold leading-snug text-[25px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[16px] leading-relaxed">
                {service.description}
              </p>

              {/* Learn more link with custom arrow icon */}
              <a
                href="#"
                className="text-[#4169E1] text-[16px] font-medium hover:underline mt-2 flex items-center"
              >
                Learn More
                <Image
                  src={ArrowIcon}
                  alt="arrow"
                  width={16}
                  height={18}
                  className="ml-2"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
