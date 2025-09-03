import Image from "next/image";

// Import icons
import ConstructionIcon from "../../assets/icons/icon.png";
import LogisticsIcon from "../../assets/icons/icon1.png";
import InteriorIcon from "../../assets/icons/icon.png";
import EventIcon from "../../assets/icons/icon3.png";
import MarketingIcon from "../../assets/icons/icon4.png";
import RealEstateIcon from "../../assets/icons/icon5.png";

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
          <p className="text-blue-600 mb-2 text-sm md:text-base">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Explore <br className="hidden md:block" /> Services
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
            We provide end-to-end solutions in construction, interiors, events,
            real estate, logistics, digital marketing, and home appliances.
          </p>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            VIEW ALL
          </button>
        </div>

        {/* Services grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-8 md:mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:items-start md:text-left space-y-3 w-full"
            >
              {/* Icon */}
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="mb-4"
              />

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Learn more link */}
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline mt-2"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
