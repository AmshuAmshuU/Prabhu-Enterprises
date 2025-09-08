"use client";

import Image from "next/image";
import backgroundImage from "../assets/images/projects/BackGroundImage.png";
import ResidentialConstruction from "../assets/images/projects/ResidentialConstruction.jpg";
import CommercialBuildings from "../assets/images/projects/Commercial Buildings.jpg";
import IndustrialProjects from "../assets/images/projects/IndustrialProjects.jpg";
import RenovationRemodeling from "../assets/images/projects/RenovationRemodeling.jpg";
import InteriorDesign from "../assets/images/projects/Interior Design.jpg";
import MarketingMajorProjects from "../assets/images/projects/MarketingMajorProjects.jpg";
import SolutionBusiness from "../assets/images/projects/Solution for ur business.png";

// Import testimonial icons
import PersonIcon from "../assets/icons/socialMedia/Person.svg";
import StarIcon from "../assets/icons/socialMedia/Star.svg";
import BlankStarIcon from "../assets/icons/socialMedia/blankStar.svg";

export default function Projects() {
  const projectData = [
    { title: "Residential Construction", img: ResidentialConstruction, date: "April 01, 2024", link: "#" },
    { title: "Commercial Buildings", img: CommercialBuildings, date: "April 01, 2024", link: "#" },
    { title: "Industrial Projects", img: IndustrialProjects, date: "April 01, 2024", link: "#" },
    { title: "Renovation & Remodeling", img: RenovationRemodeling, date: "April 01, 2024", link: "#" },
    { title: "Interior Design & Fit-outs", img: InteriorDesign, date: "April 01, 2024", link: "#" },
    { title: "Marketing major projects", img: MarketingMajorProjects, date: "April 01, 2024", link: "#" },
  ];

  const testimonials = [
    {
      name: "Person 1",
      designation: "Designation",
      rating: 4,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Person 2",
      designation: "Designation",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Person 3",
      designation: "Designation",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const stats = [
    { value: "500+", label: "Satisfied Customers" },
    { value: "10+", label: "Years Experience" },
    { value: "20+", label: "Branch Offices" },
    { value: "40+", label: "Projects Completed" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <Image src={backgroundImage} alt="Background" fill className="object-cover brightness-40" priority />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
          <p className="text-sm text-gray-200">
            Home / <span className="text-white">Projects</span>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium uppercase tracking-wide">projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing our best design work <br /> and problem-solving approach.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every project tells a story. Here, I share my journey of turning ideas into digital experiences — from
            brainstorming and wireframing to final polished designs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {projectData.map((project, index) => (
            <div key={index} className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-[588px] h-[361px] mx-auto">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded">
                  {project.date}
                </span>
              </div>
              <div className="flex items-center justify-between mt-3 max-w-[588px] mx-auto">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <a href={project.link} className="text-sm text-blue-600 font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            VIEW ALL
          </button>
        </div>
      </section>

      {/* Stats Section (CSS-only counters) */}
      <section className="w-full bg-black text-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold animate-pulse">{stat.value}</p>
              <p className="text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-blue-500 font-medium mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What our customers are saying about us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-white">
              <div className="flex items-center gap-4 mb-4">
                <Image src={PersonIcon} alt="Person" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-blue-500">{item.designation}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src={i < item.rating ? StarIcon : BlankStarIcon}
                        alt="star"
                        width={18}
                        height={18}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{item.feedback}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>
      </section>

      {/* Request a Solution Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative rounded-xl overflow-hidden">
          <Image src={SolutionBusiness} alt="Solution Background" fill className="object-cover" />
          <div className="relative z-10 text-center text-white px-6 py-20 bg-black/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Request a Customized Solution for Your Business!
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base">
              Every business is unique. Request a tailored solution crafted specifically for your organization’s
              challenges and goals.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
