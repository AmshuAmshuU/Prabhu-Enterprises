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

/* =====================
    Banner Section
===================== */
const BannerSection = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={bannerBg}
        alt="About Us Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Content */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">About Us</h1>
        <p className="text-lg">
          <span className="cursor-pointer hover:underline">Home</span> /{" "}
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
            <Typography
              variant="body2"
              sx={{ color: "#2563eb", fontWeight: "bold", mb: 1 }}
            >
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

            <Typography
              variant="body2"
              sx={{ mb: 1, color: "#555", fontSize: "0.9rem" }}
            >
              Prabhu Enterprises is a multi-service company offering
              construction, interiors, events, real estate, logistics, digital
              marketing, and home appliances.
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 2, color: "#555", fontSize: "0.9rem" }}
            >
              Our goal is simple — to provide seamless, affordable, and premium
              services that transform ideas into lasting results across India.
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
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                  }}
                >
                  <CountUp end={500} duration={3} />+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "0.8rem" }}
                >
                  Satisfied Customers
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                  }}
                >
                  <CountUp end={10} duration={3} />+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "0.8rem" }}
                >
                  Years Experience
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                  }}
                >
                  <CountUp end={40} duration={3} />+
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "0.8rem" }}
                >
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
          className={`${card.bg} w-[1170px] h-[400px] rounded-[16px] opacity-100 shadow-lg p-6 lg:p-12 flex flex-col lg:flex-row ${
            card.reverse ? "lg:flex-row-reverse" : ""
          } items-center lg:items-stretch gap-10 lg:gap-16 mx-auto`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 flex">
            <div className="relative w-[500px] h-[300px] rounded-[16px] overflow-hidden shadow-md">
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
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left lg:text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              {card.title}
            </h2>
            <p className="text-gray-800 whitespace-pre-line leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
              {card.text}
            </p>
          </div>
        </div>
      ))}
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
    </>
  );
}
