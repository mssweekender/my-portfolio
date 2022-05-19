import React, { useState } from "react";
import styled from "styled-components";
// import { FiInstagram } from "react-icons/fi";
import { Btn } from "../../Components/Button/Button";
import background from "../../assets/hero-bg.jpg";

// import LineImage from "../../assets/line-box.svg";
// style={{ backgroundImage: `url(${background})` }}

const Hero = () => {
  return (
    <Container id="home" style={{ backgroundImage: `url(${background})` }}>
      <Content>
        <ContentLeft>
          <Title>
            Big Business <br />
            Always Starts from <br />
            Small Business
          </Title>
          {/* <SocialMedia>
            <div className="sns">
              <div className="sns-item">
                <FiInstagram className="instagram" size={40} />
              </div>
              <div className="sns-item">
                <FiInstagram size={40} />
              </div>
              <div className="sns-item">
                <FiInstagram size={40} />
              </div>
              <div className="sns-item">
                <FiInstagram size={40} />
              </div>
            </div>
          </SocialMedia> */}
          <ButtonSection>
            <Btn to="Works" smooth={true} duration={600}>
              Works
            </Btn>
            <Btn to="Contact" smooth={true} duration={600}>
              Contact
            </Btn>
          </ButtonSection>
        </ContentLeft>
      </Content>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  padding-bottom: 10rem;
  z-index: 0;

  background-color: var(--sub-theme-color);

  @media screen and (min-width: 1920px) {
    height: 1080px;
  }
  @media screen and (max-width: 1280px) {
    height: 720px;
  }

  @media screen and (max-width: 780px) {
    &::before {
      background-color: rgba(0, 0, 0, 0.4);

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: " ";
    }
  }
`;

const Content = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;

  position: relative;
  z-index: 999;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
  }
`;

const ContentLeft = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 80%;

  @media screen and (max-width: 760px) {
    width: 90%;
    text-align: center;
  }
`;

const Title = styled.h1`
  padding-top: 5rem;
  font-size: 3.5rem;
  line-height: 6rem;
  /* background-color: black; */
  font-family: var(--english);
  font-weight: 600;

  @media screen and (max-width: 1025px) {
    font-size: 3rem;
    line-height: 6rem;
  }
  @media screen and (max-width: 780px) {
    font-size: 3rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 780px) {
    /* flex-direction: column;
    align-items: left; */
    /* display: none; */
    /* flex-direction: column; */
    gap: 0.5rem;
  }
`;
