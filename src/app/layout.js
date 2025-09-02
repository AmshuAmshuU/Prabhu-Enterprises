import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utils/Navbar";
import Footer from "@/components/Utils/Footer";
import ThemeRegistry from "./ThemeRegistry";

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
          <section style={{ minHeight: "90vh" }}>{children}</section>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
