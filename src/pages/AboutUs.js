import React from "react";
// page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

function AboutUs() {
  return (
    <div className="about__page">
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export default AboutUs;
