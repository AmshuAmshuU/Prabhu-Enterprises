"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";

// Images
import bannerBg from "../assets/images/aboutUs/aboutbanner.png";
import aboutImage from "../assets/images/aboutUs/about.png";
import visionImg from "../assets/images/aboutUs/ourvision.png";
import missionImg from "../assets/images/aboutUs/ourmission.png";
import valueImg from "../assets/images/aboutUs/ourvalue.png";
import bgImg from "../assets/images/aboutUs/aboutcta.png";
import emp1 from "../assets/images/aboutUs/profile.png";
import emp2 from "../assets/images/aboutUs/profile.png";
import emp3 from "../assets/images/aboutUs/profile.png";
import emp4 from "../assets/images/aboutUs/profile.png";
import emp5 from "../assets/images/aboutUs/profile.png";
import facebook from "../assets/icons/aboutUs/facebook.png";
import twitter from "../assets/icons/aboutUs/instagram.png";
import instagram from "../assets/icons/aboutUs/linkedin.png";
import linkedin from "../assets/icons/aboutUs/twitter.png";
import milestone1 from "../assets/images/aboutUs/mile1.png";
import milestone2 from "../assets/images/aboutUs/mile2.png";
import milestone3 from "../assets/images/aboutUs/mile3.png";
import milestone4 from "../assets/images/aboutUs/mile4.png";

// ------------------- Banner Section -------------------
const BannerSection = () => (
  <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[55vh] flex items-center justify-center">
    <Image src={bannerBg} alt="About Us Banner" fill priority className="object-cover" />
    <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-0 max-w-[1200px] mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">About Us</h1>
      <p className="text-base sm:text-lg">
        <span className="cursor-pointer hover:underline text-black font-bold">Home</span> /{" "}
        <span className="text-yellow-400 font-semibold">About Us</span>
      </p>
    </div>
  </section>
);

// ------------------- About Section -------------------
const AboutSection = () => (
  <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "#fff" }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              width: { xs: "80%", sm: "300px", md: "350px" },
              height: { xs: "auto", sm: "350px", md: "380px" },
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
          <Box sx={{ mb: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#facc15",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "8px",
                px: 3,
                py: 1.5,
                fontSize: "0.9rem",
                "&:hover": { bgcolor: "#eab308" },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

// ------------------- Vision/Mission/Value Section -------------------
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
    <section className="py-16 flex flex-col items-center space-y-14">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bg} w-full max-w-[1000px] rounded-[16px] shadow-lg overflow-hidden flex flex-col lg:flex-row ${
            card.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="relative w-full h-[200px] lg:w-[400px] lg:h-[220px] flex-shrink-0 mx-auto lg:mx-0 lg:mr-8 lg:ml-8">
            <Image src={card.img} alt={card.title} fill className="object-contain lg:object-cover rounded-[16px]" />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 py-6 lg:px-6">
            <div className="w-full lg:w-[400px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                {card.title}
              </h2>
              <p className="text-gray-800 whitespace-pre-line leading-relaxed text-sm sm:text-base max-w-[90%] mx-auto lg:mx-0">
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// ------------------- CTA Section -------------------
const CTASection = () => (
  <section className="relative overflow-hidden mx-auto my-12 w-full px-4 sm:px-6 lg:px-8 max-w-[1173px] rounded-[16px]">
    <div className="relative w-full rounded-[16px] overflow-hidden">
      <Image src={bgImg} alt="CTA Background" fill className="object-cover rounded-[16px]" priority />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 text-white py-12 sm:py-16 md:py-20">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-extrabold mb-3 sm:mb-4 max-w-2xl">
          Request a Customized Solution for Your Business!
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl">
          Every business is unique. Request a tailored solution crafted specifically for your organization’s challenges and goals.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base">
          CONTACT US
        </button>
      </div>
    </div>
  </section>
);

// ------------------- Team Section -------------------
const TeamSection = () => {
  const employees = [emp1, emp2, emp3, emp4, emp5];
  const socials = [facebook, twitter, instagram, linkedin];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-items-center">
          <div className="w-full text-center lg:text-left">
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

          {employees.slice(0, 2).map((emp, i) => (
            <div key={i} className="text-center w-full max-w-[300px]">
              <div className="relative w-full pb-[100%]">
                <Image src={emp} alt={`Employee ${i + 1}`} fill className="object-cover rounded-lg" />
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-semibold">Employee {i + 1}</h3>
                  <p className="text-blue-600 text-sm">Designation</p>
                </div>
                <div className="flex gap-3">
                  {socials.map((icon, j) => (
                    <Image key={j} src={icon} alt="social" width={20} height={20} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 justify-items-center">
          {employees.slice(2).map((emp, i) => (
            <div key={i} className="text-center w-full max-w-[300px]">
              <div className="relative w-full pb-[100%]">
                <Image src={emp} alt={`Employee ${i + 3}`} fill className="object-cover rounded-lg" />
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-semibold">Employee {i + 3}</h3>
                  <p className="text-blue-600 text-sm">Designation</p>
                </div>
                <div className="flex gap-3">
                  {socials.map((icon, j) => (
                    <Image key={j} src={icon} alt="social" width={20} height={20} />
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

// ------------------- Milestones Section -------------------
const milestones = [
  { id: 1, image: milestone1, title: "10+ years of proven industry experience" },
  { id: 2, image: milestone2, title: "500+ projects delivered successfully" },
  { id: 3, image: milestone3, title: "PAN India presence with local support" },
  { id: 4, image: milestone4, title: "Recognized ISO-certified company" },
];

const MilestonesSection = () => (
  <section className="px-6 sm:px-12 py-16 bg-white">
    <div className="text-center mb-12">
      <p className="text-blue-600 font-medium">Achievements</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
        Milestones We’re Proud Of
      </h2>
      <p className="text-gray-600 mt-2">
        Delivering consistent excellence across India for over a decade.
      </p>
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-5xl mx-auto">
      {milestones.map((m) => (
        <div key={m.id} className="text-center w-full">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={m.image}
              alt={m.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <p className="mt-3 font-semibold text-black">{m.title}</p>
        </div>
      ))}
    </div>
  </section>
);


// ------------------- About Page -------------------
export default function AboutPage() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <VisionMissionValue />
      <CTASection />
      <TeamSection />
      <MilestonesSection />
    </>
  );
}
