import React from "react";
import styled from "styled-components";
import { StyledSection } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Daily Schedule">
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Different Payment Methods">
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="What Product Do You Offer">
          <div className="faq__answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              aperiam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
