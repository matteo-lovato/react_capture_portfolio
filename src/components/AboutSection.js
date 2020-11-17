import React from "react";
import home1 from "../img/home1.png";
// import styledcomponents
import styled from "styled-components";
import {
  StyledSection,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>true.</motion.h2>
          </StyledHide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </motion.div>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="professional photographer with a camera" />
      </StyledImage>
    </About>
  );
}

const About = styled(StyledSection)``;

export default AboutSection;
