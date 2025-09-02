"use client";

import Image from "next/image";
import { Button, TextField } from "@mui/material";
import logo from "@/app/assets/images/navbar/Logo.png";
import facebook from "../../app/assets/icons/socialMedia/facebook.svg";
import linkedIn from "../../app/assets/icons/socialMedia/linkedin.svg";
import twitter from "../../app/assets/icons/socialMedia/twitter.svg";
import whatsApp from "../../app/assets/icons/socialMedia/whatsapp.svg";
import youTube from "../../app/assets/icons/socialMedia/youtube.svg";

export default function Footer() {
  return (
    <footer className="bg-[#E9F1FF] text-[#252422] px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Image src={logo} alt="Prabhu Enterprises" className="h-12 w-auto" />
          <p className="mt-4 text-sm">
            Transforming spaces with quality, trust, and innovation.
          </p>
          <p className="mt-4 text-[#4D4D4D]">Follow Us On:</p>
          <div className="flex gap-4 mt-2 text-gray-700">
            {socialMediaIcons.map((icons, index) => (
              <Image
                key={index}
                src={icons}
                alt="facebook"
                className="cursor-pointer"
                height={20}
                width={20}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {companyList.map((company, index) => (
              <li key={index}>
                <a href={company.path} className="hover:text-blue-600">
                  {company.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {servicesList.map((services, index) => (
              <li key={index}>
                <a href={services.path} className="hover:text-blue-600">
                  {services.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Subscribe Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Explore our news and blog content today and take the first step
            towards unlocking your full business potential.
          </p>
          <TextField
            placeholder="Email..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "transparent",
              borderRadius: "6px",
              border: "0.5px solid #4169E1",
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#4169E1",
              mt: 2,
              borderRadius: "3px",
              textTransform: "none",
            }}
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>
          Copyright © 2024{" "}
          <a href="/" className="text-blue-600 hover:underline">
            Prabhu Enterprise
          </a>
          . All Rights Reserved.
        </p>
        <a href="/privacy" className="mt-2 md:mt-0 hover:underline">
          Privacy & Cookie Policy
        </a>
      </div>
    </footer>
  );
}

const socialMediaIcons = [facebook, youTube, twitter, linkedIn, whatsApp];
const companyList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/contactUs",
  },
  {
    name: "Privacy Policy",
    path: "/",
  },
];
const servicesList = [
  {
    name: "Building Construction",
    path: "/",
  },
  {
    name: "Logistics & Transportation",
    path: "/",
  },
  {
    name: "Interior & Exterior Designing",
    path: "/",
  },
  {
    name: "Data Management",
    path: "/",
  },
  {
    name: "Event Management",
    path: "/",
  },
  {
    name: "Real Estate",
    path: "/",
  },
];
