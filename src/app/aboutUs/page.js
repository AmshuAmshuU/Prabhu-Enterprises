"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

// Banner image
import bannerBg from "../assets/images/aboutUs/about.png";

// About Us image
import aboutImage from "../assets/images/aboutUs/about.png";

// Vision/Mission/Value images
import visionImg from "../assets/images/aboutUs/ourvision.png";
import missionImg from "../assets/images/aboutUs/ourmission.png";
import valueImg from "../assets/images/aboutUs/ourvalue.png";

import bgImg from "../assets/images/aboutUs/aboutcta.png";

// 👉 Team images
import emp1 from "../assets/images/aboutUs/profile.png";
import emp2 from "../assets/images/aboutUs/profile.png";
import emp3 from "../assets/images/aboutUs/profile.png";
import emp4 from "../assets/images/aboutUs/profile.png";
import emp5 from "../assets/images/aboutUs/profile.png";

// 👉 Social icons
import facebook from "../assets/icons/aboutUs/facebook.png";
import twitter from "../assets/icons/aboutUs/instagram.png";
import instagram from "../assets/icons/aboutUs/linkedin.png";
import linkedin from "../assets/icons/aboutUs/twitter.png";

import milestone1 from "../assets/images/aboutUs/mile1.png";
import milestone2 from "../assets/images/aboutUs/mile2.png";
import milestone3 from "../assets/images/aboutUs/mile3.png";
import milestone4 from "../assets/images/aboutUs/mile4.png";

/* =====================
    Banner Section
===================== */
const BannerSection = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center px-4 sm:px-6 md:px-0">
      <Image src={bannerBg} alt="About Us Banner" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-blue-900/50" />
      <div className="relative text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-black">About Us</h1>
        <p className="text-base sm:text-lg">
          <span className="cursor-pointer hover:underline text-black font-bold">Home</span> /{" "}
          <span className="text-yellow-400 font-semibold">About Us</span>
        </p>
      </div>
    </section>
  );
};


/* =====================
   About Section
===================== */
const AboutSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* LEFT: Image */}
          <Box
            sx={{
              position: "relative",
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                width: { xs: "250px", sm: "280px", md: "300px" },
                height: { xs: "320px", sm: "360px", md: "380px" },
              }}
            >
              <Image
                src={aboutImage}
                alt="About Us"
                layout="responsive"
                width={500}
                height={500}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* RIGHT: Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="body2" sx={{ color: "#2563eb", fontWeight: "bold", mb: 1 }}>
              About Us
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                lineHeight: 1.3,
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
              }}
            >
              Transforming visions into reality with{" "}
              <Box component="span" sx={{ color: "#2563eb" }}>
                quality, trust, and innovation.
              </Box>
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: "#555", fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
              Prabhu Enterprises is a multi-service company offering construction, interiors, events,
              real estate, logistics, digital marketing, and home appliances.
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, color: "#555", fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
              Our goal is simple — to provide seamless, affordable, and premium services that
              transform ideas into lasting results across India.
            </Typography>

            {/* Button */}
            <Box sx={{ mb: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#facc15",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  px: 2.5,
                  py: 1,
                  fontSize: "0.9rem",
                  "&:hover": { bgcolor: "#eab308" },
                }}
              >
                READ MORE
              </Button>
            </Box>

            {/* Counters */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 3, md: 4 },
              }}
            >
              <Box textAlign="center">
                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" } }}>
                  <CountUp end={500} duration={3} />+
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>
                  Satisfied Customers
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" } }}>
                  <CountUp end={10} duration={3} />+
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>
                  Years Experience
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" } }}>
                  <CountUp end={40} duration={3} />+
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>
                  Projects Completed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};


/* =====================
   Vision/Mission/Value Section
===================== */
const VisionMissionValue = () => {
  const cards = [
    {
      title: "Our Vision",
      text: "To become one of the top multi-service enterprises in India, recognized for premium service quality, customer trust, and innovative solutions.",
      img: visionImg,
      bg: "bg-indigo-100",
      reverse: false,
    },
    {
      title: "Our Mission",
      text: "To provide affordable, high-quality, and end-to-end solutions that improve lives, empower businesses, and create lasting value for our clients.",
      img: missionImg,
      bg: "bg-gray-100",
      reverse: true,
    },
    {
      title: "Our Value",
      text: "Integrity in every project\nInnovation that drives results\nTransparency with clients and partners\nExcellence as a standard, not an option",
      img: valueImg,
      bg: "bg-indigo-100",
      reverse: false,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 space-y-14">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bg} w-full max-w-[1170px] h-auto rounded-[16px] shadow-lg p-6 lg:p-12 flex flex-col lg:flex-row ${
            card.reverse ? "lg:flex-row-reverse" : ""
          } items-center lg:items-stretch gap-8 lg:gap-16 mx-auto`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] h-[300px] rounded-[16px] overflow-hidden shadow-md">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover rounded-[16px]"
                sizes="(max-width: 500px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6">
              {card.title}
            </h2>
            <p className="text-gray-800 whitespace-pre-line leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

/* =====================
   CTA Section
===================== */
const CTASection = () => {
  return (
    <section className="relative overflow-hidden mx-auto my-12 w-full px-4 sm:px-6 lg:px-8 max-w-[1173px] rounded-[16px]">
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[393px] rounded-[16px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImg}
          alt="CTA Background"
          fill
          className="object-cover rounded-[16px]"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-[16px]" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 text-white max-w-[900px] mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-extrabold mb-3 sm:mb-4">
            Request a Customized Solution for Your Business!
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Every business is unique. Request a tailored solution crafted specifically for your organization’s challenges and goals.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};


/* =====================
   Team Section
===================== */
const TeamSection = () => {
  const employees = [
    { id: 1, name: "Employee 1", designation: "Designation", img: emp1 },
    { id: 2, name: "Employee 2", designation: "Designation", img: emp2 },
    { id: 3, name: "Employee 3", designation: "Designation", img: emp3 },
    { id: 4, name: "Employee 4", designation: "Designation", img: emp4 },
    { id: 5, name: "Employee 5", designation: "Designation", img: emp5 },
  ];

  const socials = [facebook, twitter, instagram, linkedin];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto"> {/* Constrains width for ultra-wide screens */}

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-items-center">
          {/* Left Content */}
          <div className="w-full">
            <p className="text-sm text-gray-500">Our Team</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Meet Our <span className="text-blue-600">Smart People.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Behind every successful project is a passionate and skilled team. Led by our founder, T.
              Jaya Prabhu, our workforce brings together expertise across engineering, design,
              logistics, events, marketing, and customer care — working as one to deliver seamless
              experiences.
            </p>
          </div>

          {/* Employee 1 & 2 */}
          {employees.slice(0, 2).map((emp) => (
            <div key={emp.id} className="text-center w-full max-w-full sm:max-w-[300px]">
              <div className="relative w-full pb-[100%]">
                <Image
                  src={emp.img}
                  alt={emp.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-semibold">{emp.name}</h3>
                  <p className="text-blue-600 text-sm">{emp.designation}</p>
                </div>
                <div className="flex gap-3">
                  {socials.map((icon, i) => (
                    <Image key={i} src={icon} alt="social" width={20} height={20} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 justify-items-center">
          {employees.slice(2).map((emp) => (
            <div key={emp.id} className="text-center w-full max-w-full sm:max-w-[300px]">
              <div className="relative w-full pb-[100%]">
                <Image
                  src={emp.img}
                  alt={emp.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-semibold">{emp.name}</h3>
                  <p className="text-blue-600 text-sm">{emp.designation}</p>
                </div>
                <div className="flex gap-3">
                  {socials.map((icon, i) => (
                    <Image key={i} src={icon} alt="social" width={20} height={20} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



const milestones = [
  {
    id: 1,
    image: milestone1,
    title: "10+ years of proven industry experience",
  },
  {
    id: 2,
    image: milestone2,
    title: "500+ projects delivered successfully",
  },
  {
    id: 3,
    image: milestone3,
    title: "PAN India presence with local support",
  },
  {
    id: 4,
    image: milestone4,
    title: "Recognized ISO-certified company",
  },
];

const MilestonesSection = () => {
  return (
    <section className="px-6 sm:px-12 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium">Achievements</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
          Milestones We’re Proud Of
        </h2>
        <p className="text-gray-600 mt-2">
          Delivering consistent excellence across India for over a decade.
        </p>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {milestones.map((m) => (
          <div key={m.id} className="text-center w-full max-w-[500px]">
            <div className="relative h-70 w-full aspect-[5/2]">
              <Image
                src={m.image}
                alt={m.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="mt-4 font-semibold text-black text-center">
              {m.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



/* =====================
   About Page
===================== */
export default function AboutPage() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <VisionMissionValue />
      <CTASection />
      <TeamSection />
      <MilestonesSection /> {/* ✅ just add here */}
    </>
  );
}


