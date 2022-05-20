import React from "react";
import styled from "styled-components";
import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_wrapper">
        <div className="footer_items">
          <div className="footer_item">
            <a href="https://www.instagram.com/mssweekender/">
              <FiInstagram />
            </a>
          </div>
          <div className="footer_item">
            <a href="https://twitter.com/Masashi990527">
              <FiTwitter />
            </a>
          </div>
          <div className="footer_item">
            <a href="https://github.com/mssweekender">
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
      <h5 className="copy">
        <span>©︎</span>kawano masashi | 2022
      </h5>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);

  .footer_wrapper {
    padding: 10rem 0;
    width: 80%;
    margin: 0 auto;

    .footer_items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .footer_item {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 1rem 1rem;
        font-size: 18px;
        /* background-color: var(--sub-theme-about); */
        background-color: var(--sub-theme-accent);
        align-items: center;

        a {
          display: block;
          text-align: center;
          align-content: center;
          /* background-color: black; */
        }
      }
    }
  }

  .copy {
    text-align: center;
    font-weight: 200;
    padding: 1rem 0;
    color: gray;
    span {
      margin-right: 0.3rem;
    }
  }
`;
