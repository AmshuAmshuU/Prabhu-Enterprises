import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utils/Navbar";
import Footer from "@/components/Utils/Footer";
import ThemeRegistry from "./ThemeRegistry";
import Image from "next/image";
import ChatIcon from "../app/assets/icons/socialMedia/chat.svg";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "My App",
  description: "Next.js with MUI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <ThemeRegistry fontVariable="var(--font-poppins)">
          <Navbar />
          <section style={{ minHeight: "90vh" }}>
              <Image
                style={{
                  position: "fixed",
                  top: "75%",
                  right: "7%",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                  cursor: "pointer",
                  zIndex: 9999,
                }}
                src={ChatIcon}
                alt="Chat"
                width={24}
                height={24}
              />
            {children}
          </section>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
