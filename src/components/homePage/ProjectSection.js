"use client";

import Image from "next/image";

// 👉 Import images (replace with your actual paths in assets/images)
import project1 from "../../assets/Images/homepage/project1.png";
import project2 from "../../assets/Images/homepage/project2.png";
import project3 from "../../assets/Images/homepage/project3.png";
import project4 from "../../assets/Images/homepage/project4.png";
// Array of projects
const projects = [
  {
    id: 1,
    img: project1,
    date: "April 01, 2024",
    client: "XYZ Tech Solutions",
  },
  {
    id: 2,
    img: project2,
    date: "April 01, 2024",
    client: "XYZ Tech Solutions",
  },
  {
    id: 3,
    img: project3,
    date: "April 01, 2024",
    client: "XYZ Tech Solutions",
  },
  {
    id: 4,
    img: project4,
    date: "April 01, 2024",
    client: "XYZ Tech Solutions",
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-6 sm:px-12 py-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-blue-600 mb-2 font-medium">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Showcasing our best design work <br /> and problem–solving approach.
        </h2>
        <p className="text-gray-600 text-base">
          Every project tells a story. Here, I share my journey of turning ideas into
          digital experiences — from brainstorming and wireframing to final polished
          designs. Explore my work to see how we blend creativity with usability.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl  overflow-hidden"
          >
            {/* Image + Date */}
            <div className="relative">
              <Image
                src={project.img}
                alt={project.client}
                width={500}
                height={300}
                className="rounded-xl object-cover w-full h-[300px]"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-md">
                {project.date}
              </span>
            </div>

            {/* Client + Link */}
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-base font-semibold">Client: {project.client}</h3>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
