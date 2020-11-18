import React from "react";
import styled from "styled-components";
import { StyledSection } from "../styles";
import Toggle from "./Toggle";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle>
        <div className="faq__question">
          <h4>How Do I Start?</h4>
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="faq__question">
          <h4>Daily Schedule</h4>
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="faq__question">
          <h4>Different Payment Methods</h4>
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="faq__question">
          <h4>What Product Do You Offer</h4>
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
    </Faq>
  );
}

const Faq = styled(StyledSection)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .faq__question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .faq__answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
