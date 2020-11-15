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

function AboutSection() {
  return (
    <About>
      <StyledDescription>
        <div className="about__title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </div>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="professional photographer with a camera" />
      </StyledImage>
    </About>
  );
}

const About = styled(StyledSection)``;

export default AboutSection;
