import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div className="aboutSection">
      <div className="about__description">
        <div className="about__title">
          <div className="about__title--hide">
            <h2>We work to make</h2>
          </div>
          <div className="about__title--hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="about__title--hide">
            <h2>true.</h2>
          </div>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="about__image">
        <img src={home1} alt="professional photographer with a camera" />
      </div>
    </div>
  );
}

export default AboutSection;
