"use client";

import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

// Import logos directly
import logo1 from "../../assets/Images/homepage/logo1.png";
import logo2 from "../../assets/Images/homepage/logo2.png";
import logo3 from "../../assets/Images/homepage/logo3.png";
import logo4 from "../../assets/Images/homepage/logo4.png";
import logo5 from "../../assets/Images/homepage/logo5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoSection = () => {
  return (
    <Box sx={{ bgcolor: "#1c1c1c", py: 4 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 10 }} // responsive spacing
          alignItems="center"
          justifyContent="center"
        >
          {logos.map((logo, index) => (
            <Grid
              item
              key={index}
              xs={6}   // 2 logos per row on mobile
              sm={4}   // 3 logos per row on tablets
              md={2}   // 5 logos per row on desktop
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={130}
                height={50}
                style={{
                  filter: "grayscale(100%)",
                  opacity: 0.8,
                  transition: "0.3s",
                  cursor: "pointer",
                  maxWidth: "100%", // keeps image inside grid
                  height: "auto",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.8";
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LogoSection;
