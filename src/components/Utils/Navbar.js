"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../app/assets/images/navbar/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  return (
    <header
      className={`flex gap-10 items-center ${styles.navbar_container} px-5 py-4 boxShadow_000000 background_color_F2F2F2`}
    >
      <Image src={logo} alt="logo" className="h-10 w-auto" />
      <nav className="hidden lg:flex gap-8 items-center">
        {navbarPages.map((pages, index) => (
          <a key={index} href={pages.path} className="hover:text-blue-600">
            {pages.name}
          </a>
        ))}
        <Button
          href="/contactUs"
          sx={{ backgroundColor: "#F4C54F", color: "#252422", px: 3 }}
        >
          CONTACT US
        </Button>
        <Button sx={{ backgroundColor: "#4169E1", color: "#FFFFFF", px: 3 }}>
          GET STARTED
        </Button>
      </nav>

      <div className="lg:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="w-64 flex flex-col p-4 gap-4">
          <div className="flex justify-between items-center">
            <Image src={logo} alt="logo" className="h-8 w-auto" />
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            {navbarPages.map((pages, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={pages.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={pages.name} />
              </ListItem>
            ))}
          </List>

          <Button
            href="/contactUs"
            fullWidth
            sx={{ backgroundColor: "#F4C54F", color: "#252422", my: 1 }}
          >
            CONTACT US
          </Button>
          <Button
            fullWidth
            sx={{ backgroundColor: "#4169E1", color: "#FFFFFF", my: 1 }}
          >
            GET STARTED
          </Button>
        </div>
      </Drawer>
    </header>
  );
};

export default Navbar;

const navbarPages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "AboutUs",
    path: "/",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Projects",
    path: "/",
  },
  {
    name: "E-commerce",
    path: "/",
  },
  {
    name: "Appointment",
    path: "/",
  },
];
