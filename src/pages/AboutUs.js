import React from "react";
// page components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

function AboutUs() {
  return (
    <div className="about__page">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
}

export default AboutUs;
