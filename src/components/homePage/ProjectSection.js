"use client";

import Image from "next/image";

// 👉 Import images (replace with your actual paths in assets/images)
import project1 from "../../assets/Images/homepage/project1.png";
import project2 from "../../assets/Images/homepage/project2.png";
import project3 from "../../assets/Images/homepage/project3.png";
import project4 from "../../assets/Images/homepage/project4.png";
import arrowIcon from "../../assets/icons/arrow.png"; // 👉 replace with your actual arrow icon path

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
        {/* Small heading */}
        <p className="mb-2" style={{ fontSize: "16px", color: "#4169E1" }}>
          Projects
        </p>

        {/* Main heading */}
        <h2
          className="mb-4 leading-snug"
          style={{
            fontSize: "49px",
            color: "#252422",
            fontWeight: "normal",
            lineHeight: "1.2",
            verticalAlign: "middle",
          }}
        >
          Showcasing our best design work <br /> and problem–solving approach.
        </h2>

        {/* Paragraph */}
        <p
          style={{
            fontSize: "18px",
            color: "#4D4D4D",
            lineHeight: "1.5",
            verticalAlign: "middle",
          }}
        >
          Every project tells a story. Here, I share my journey of turning ideas into
          digital experiences — from brainstorming and wireframing to final polished
          designs. Explore my work to see how we blend creativity with usability.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ width: "500px", height: "400px" }}
          >
            {/* Image + Date */}
            <div className="relative">
              <Image
                src={project.img}
                alt={project.client}
                width={500}
                height={300}
                className="rounded-[16px] object-cover w-full h-[300px]"
              />
              <span
                className="absolute"
                style={{
                  top: "12px",
                  left: "12px",
                  width: "100px",
                  height: "25px",
                  backgroundColor: "#4169E1",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                  padding: "0 4px",
                }}
              >
                {project.date}
              </span>
            </div>

            {/* Client + Read More */}
            <div
              className="p-4 flex justify-between items-center"
              style={{ height: "100px" }}
            >
              <h3
                className="text-base"
                style={{ fontSize: "25px", color: "#252422", fontWeight: "normal" }}
              >
                Client: {project.client}
              </h3>
              <a
                href="#"
                className="flex items-center gap-2"
                style={{
                  fontSize: "16px",
                  color: "#4169E1",
                  lineHeight: "1.2",
                  textDecoration: "none",
                }}
              >
                Read More
                <Image src={arrowIcon} alt="arrow icon" width={16} height={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-6 py-2 border rounded transition-all duration-300 hover:bg-[#4169E1] hover:text-white"
          style={{
            borderColor: "#4169E1",
            color: "#4169E1",
            fontSize: "16px",
          }}
        >
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
