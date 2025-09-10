"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";
import aboutImage from "../../assets/Images/homepage/aboutus.png";

const counters = [
  { end: 500, label: "Satisfied Customers" },
  { end: 10, label: "Years Experience" },
  { end: 40, label: "Projects Completed" },
];

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
                width={450}
                height={550}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* RIGHT: Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body2"
              sx={{ color: "#0096C7", fontSize: "16px", mb: 2 }}
            >
              About Us
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                lineHeight: 1.3,
                fontSize: "45px",
              }}
            >
              Transforming visions into reality with{" "}
              <Box
                component="span"
                sx={{ color: "#4169E1", fontSize: "45px" }}
              >
                quality, trust, and innovation.
              </Box>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "#555",
                fontSize: "16px",
              }}
            >
              Prabhu Enterprises is a multi-service company offering
              construction, interiors, events, real estate, logistics, digital
              marketing, and home appliances.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: "#555",
                fontSize: "16px",
              }}
            >
              Our goal is simple — to provide seamless, affordable, and premium
              services that transform ideas into lasting results across India.
            </Typography>

            {/* Button */}
            <Box sx={{ mb: 4 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#facc15",
                  color: "#000",
                  width: "157px",
                  height: "43px",
                  borderRadius: "5px",
                  px: "32px",
                  py: "12px",
                  fontSize: "16px",
                  gap: "10px",
                  opacity: 1,
                  "&:hover": { bgcolor: "#eab308" },
                }}
              >
                READ MORE
              </Button>
            </Box>

            {/* Counters with Array Mapping */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 3, md: 4 },
              }}
            >
              {counters.map((item, index) => (
                <Box key={index} textAlign="center">
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                    }}
                  >
                    <CountUp end={item.end} duration={3} />+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", fontSize: "17px" }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
