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
import { fade, photoAnimation, titleAnimation } from "../animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <About>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="professional photographer with a camera"
        />
      </StyledImage>
      <Wave />
    </About>
  );
}

const About = styled(StyledSection)``;

export default AboutSection;
