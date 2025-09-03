"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";
import aboutImage from "../../assets/Images/aboutimg.jpg";

const AboutSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Flex Layout */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" }, // responsive layout
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* LEFT: Image with Shadow */}
          <Box
            sx={{
              position: "relative",
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              {/* Background Shadow Block */}
              <Box
                sx={{
                  position: "absolute",
                  top: 20, // shifts downward
                  left: -20, // shifts left
                  width: { xs: "85%", sm: "80%", md: "420px" },
                  height: { xs: "90%", sm: "85%", md: "520px" },
                  bgcolor: "#A3C7F5",
                  borderRadius: "16px",
                  zIndex: 0,
                }}
              />

              {/* Main Image */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  zIndex: 1,
                  width: { xs: "85%", sm: "80%", md: "420px" },
                  height: { xs: "auto", md: "520px" },
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
          </Box>

          {/* RIGHT: Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body2"
              sx={{ color: "#2563eb", fontWeight: "bold", mb: 2 }}
            >
              About Us
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 3,
                lineHeight: 1.4,
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              Transforming visions into reality with{" "}
              <Box component="span" sx={{ color: "#2563eb" }}>
                quality, trust, and innovation.
              </Box>
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, color: "#555" }}>
              Prabhu Enterprises is a multi-service company offering
              construction, interiors, events, real estate, logistics, digital
              marketing, and home appliances.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
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
                  fontWeight: "bold",
                  borderRadius: "8px",
                  px: 3,
                  py: 1,
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
                gap: { xs: 4, md: 6 },
              }}
            >
              <Box textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  <CountUp end={500} duration={3} />+
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Satisfied Customers
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  <CountUp end={10} duration={3} />+
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Years Experience
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  <CountUp end={40} duration={3} />+
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
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

export default AboutSection;
