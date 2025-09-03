import Hero from "@/components/homePage/heroSection";
import LogoSection from "@/components/homePage/LogosSection";
import AboutSection from "@/components/homePage/AboutSection";
import Exploreservices from "../components/homePage/Exploreservices";
import ProjectsSection from "../components/homePage/ProjectSection";
import WhyChooseUs from "../components/homePage/whychooseus";
import Testimonials from "@/components/homePage/testimonails";
import Calculation from "../components/homePage/calculation";
import Image from "next/image";
import { ImportExportOutlined } from "@mui/icons-material";
import { Explora } from "next/font/google";

export default function Home() {
  return (
    <>
      <Hero />
      < LogoSection />
      <AboutSection />
      <Exploreservices />
       <Calculation />
      <ProjectsSection />
      <WhyChooseUs />
      <Testimonials />
     
    </>
  );
}
