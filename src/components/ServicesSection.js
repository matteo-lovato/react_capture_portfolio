import React from "react";
// import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className="servicesSection">
      <div className="services__description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="services__cards">
          <div className="services__card">
            <div className="card__icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="services__card">
            <div className="card__icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="services__card">
            <div className="card__icon">
              <img src={diaphragm} alt="camera lens icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="services__card">
            <div className="card__icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="services__image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
}

export default ServicesSection;
