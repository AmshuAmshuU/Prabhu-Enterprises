"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";
import aboutImage from "../../assets/Images/aboutus.png";

const AboutSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: "#fff" }}> {/* Reduced vertical padding */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 }, // Reduced gap
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
                width: { xs: "250px", sm: "280px", md: "300px" }, // Smaller image
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
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" }, // Reduced heading
              }}
            >
              Transforming visions into reality with{" "}
              <Box component="span" sx={{ color: "#2563eb" }}>
                quality, trust, and innovation.
              </Box>
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: "#555", fontSize: "0.9rem" }}>
              Prabhu Enterprises is a multi-service company offering
              construction, interiors, events, real estate, logistics, digital
              marketing, and home appliances.
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, color: "#555", fontSize: "0.9rem" }}>
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
                gap: { xs: 3, md: 4 }, // Reduced gap
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
                <Typography variant="body2" sx={{ color: "#555", fontSize: "0.8rem" }}>
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
                <Typography variant="body2" sx={{ color: "#555", fontSize: "0.8rem" }}>
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
                <Typography variant="body2" sx={{ color: "#555", fontSize: "0.8rem" }}>
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
