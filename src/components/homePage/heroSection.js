"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import HeroImage from "../../app/assets/images/homePage/hero.png";

const Hero = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{
              maxWidth: { xs: "100%", md: "45%" },
            }}
          >
            <Box
              sx={{ width: "100%", textAlign: "center" }}
            >
              <Image src={HeroImage} alt="Hero" priority />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 1 }}
            sx={{
              maxWidth: { xs: "100%", md: "45%" },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "#252422",
                mb: 1,
                backgroundColor: "#78A5DD",
                px: 2,
                py: 1,
                borderTopRightRadius: "15px",
                width: "fit-content",
              }}
            >
              Strategize & Succeed
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Transforming Spaces, Delivering Excellence.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#4D4D4D", mb: 3, maxWidth: 500 }}
            >
              From construction to interiors, logistics to events, we deliver
              trusted solutions that redefine spaces with quality, style, and
              excellence.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#F4C54F", color: "#252422" }}
              >
                BOOK APPOINTMENT
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "#252422", border: "0.5px solid #F4C54F" }}
              >
                REQUEST QUOTE
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Watch Showreel
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
