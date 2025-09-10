import Image from "next/image";
import Link from "next/link";

import BuildingConstructionIcon from "../../app/assets/icons/socialMedia/Services/BuildingConstructionIcon.png";
import LogisticsIcon from "../../app/assets/icons/socialMedia/Services/LogisticsIcon.png";
import InteriorExteriorDesigningIcon from "../../app/assets/icons/socialMedia/Services/InteriorExteriorDesigning.png";
import DigitalMarketingIcon from "../../app/assets/icons/socialMedia/Services/digitalMarketingIcon.png";
import EventManagementIcon from "../../app/assets/icons/socialMedia/Services/eventManagementIcon.png";
import RealEstateIcon from "../../app/assets/icons/socialMedia/Services/realEstateIcon.png";

const services = [
  {
    id: 1,
    icon: <Image src={BuildingConstructionIcon} alt="Building Construction Icon" width={32} height={32} />,
    title: "Building Construction & Materials",
    desc: "Reliable construction solutions with quality materials and expert execution.",
  },
  {
    id: 2,
    icon: <Image src={LogisticsIcon} alt="Logistics Icon" width={32} height={32} />,
    title: "Logistics & Transportation",
    desc: "Efficient delivery and supply chain support across all locations.",
  },
  {
    id: 3,
    icon: <Image src={InteriorExteriorDesigningIcon} alt="Interior Exterior Designing Icon" width={32} height={32} />,
    title: "Interior & Exterior Designing",
    desc: "Stylish, functional spaces designed to match your vision and lifestyle.",
  },
  {
    id: 4,
    icon: <Image src={DigitalMarketingIcon} alt="Digital Marketing Icon" width={32} height={32} />,
    title: "Digital Marketing",
    desc: "Smart strategies to grow your brand and reach the right audience.",
  },
  {
    id: 5,
    icon: <Image src={EventManagementIcon} alt="Event Management Icon" width={32} height={32} />,
    title: "Event Management",
    desc: "Seamless planning and execution for memorable events of any scale.",
  },
  {
    id: 6,
    icon: <Image src={RealEstateIcon} alt="Real Estate Icon" width={32} height={32} />,
    title: "Real estate",
    desc: "Trusted guidance for buying, selling, or investing in properties.",
  },
];

export default function ExploreServices() {
  return (
    <section className="px-6 py-12 md:px-20 lg:px-32">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Explore Services</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide end-to-end solutions in construction, interiors, events,
          real estate, logistics, digital marketing, and home appliances.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-start gap-4 bg-transparent">
            <div className="p-2 rounded-md bg-white border border-gray-100 shadow-sm">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>

            <Link
              href={`/servicedetails/${service.id}`}
              className="text-blue-600 font-medium hover:underline flex items-center gap-1"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
