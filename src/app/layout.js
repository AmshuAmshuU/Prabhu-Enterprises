import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import Navbar from "@/components/Utils/Navbar";
import Footer from "@/components/Utils/Footer";
import { Poppins } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"], // choose subsets (latin is enough for most)
  weight: ["400", "500", "600", "700"], // pick weights you need
  variable: "--font-poppins", // optional, useful for Tailwind or custom CSS
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // default blue
    },
  },
});

export const metadata = {
  title: "My App",
  description: "Next.js with MUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <Navbar />
          <section style={{ minHeight: "90vh" }}>{children}</section>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
