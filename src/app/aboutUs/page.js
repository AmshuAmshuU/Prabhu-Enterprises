"use client";

import BannerSection from "../../components/aboutUs/BannerSection"
import AboutSection from "../../components/aboutUs/About"
import VisionMissionValue from "../../components/aboutUs/Vision";
import CTASection from "../../components/aboutUs/ctaSection";
import TeamSection from "../../components/aboutUs/teamSection";
import MilestonesSection from "../../components/aboutUs/MilestonesSection";

export default function About() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <VisionMissionValue />
      <CTASection />
      <TeamSection />
      <MilestonesSection />
    </>
  );
}
