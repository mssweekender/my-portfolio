import React from "react";
import styled from "styled-components";

import { Card } from "../../Components/Cards/Card";

const Works = () => {
  return (
    <Container id="Works">
      <Content>
        <SubTitle>Works</SubTitle>
        <SectionTitle>制作事例</SectionTitle>

        <WorkSection>
          <CardSection>
            {Card.map(({ id, contentImage, title }) => {
              return (
                <CardElement key={id}>
                  <CardItem>
                    <WorkImage>
                      <img
                        src={require(`../../assets/${contentImage}`)}
                        alt="work-image"
                      />
                    </WorkImage>
                    <Title>{title}</Title>
                  </CardItem>
                </CardElement>
              );
            })}
          </CardSection>
        </WorkSection>
      </Content>
    </Container>
  );
};

export default Works;

const Container = styled.div`
  /* padding-top: 10rem; */
  width: 100%;
  height: auto;
  z-index: 0;
  /* background: var(--sub-theme-color); */
  background: rgb(0, 0, 0);
  padding-bottom: 10rem;
  z-index: 0;
  /* background-color: black; */
  /* background-color: #1b1b4a; */
  @media screen and (max-width: 850px) {
    margin-top: 0rem;
    padding-bottom: 3rem;
  }
`;
const Content = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  /* background-color: gray; */
  color: white;

  @media screen and (max-width: 1025px) {
    width: 90%;
    align-items: none;
  }
  @media screen and (max-width: 850px) {
    width: 92%;
  }
`;

const SectionTitle = styled.h1`
  font-family: var(--japanese);
  padding-top: 10rem;
  font-weight: 600;
  font-size: 2rem;
  display: inline-block;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    width: 200px;
    height: 4px;
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    /* border-bottom: 4px solid var(--accent-color); */
    border-bottom: 4px solid var(--sub-theme-accent);
    transform: translate(-50%, 0.5rem);
    @media screen and (max-width: 600px) {
      width: 120px;
      height: 3px;
    }
    @media screen and (max-width: 400px) {
      width: 100px;
      height: 3px;
    }
  }
  @media screen and (max-width: 850px) {
    padding-top: 10rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 3rem;
    font-size: 26px;
  }
  @media screen and (max-width: 400px) {
    padding-top: 3rem;
    font-size: 20px;
    margin-top: 20px;
  }
`;

// #323267

const SubTitle = styled.h1`
  font-size: 12rem;
  /* color: #323267; */
  color: var(--sub-theme-color);
  font-family: var(--english);
  transform: rotate(-90deg);
  position: absolute;
  left: -24rem;
  top: 30rem;
  object-position: fixed;
  z-index: 1;
  /* background-color: white; */
  @media screen and (max-width: 1280px) {
    font-size: 10rem;
    left: -21rem;
  }
  @media screen and (max-width: 1025px) {
    font-size: 8rem;
    left: -27rem;
  }
  @media screen and (max-width: 850px) {
    transform: rotate(0deg);
    padding-top: 5rem;
    font-size: 4rem;
    /* color: white; */
    position: none;
  }
  @media screen and (max-width: 400px) {
    font-size: 4rem;
    padding-top: 3rem;
  }
`;

const WorkSection = styled.div`
  margin-top: 8rem;
  width: 95%;
  z-index: 999;
  /* background: white; */
  @media screen and (max-width: 1025px) {
    /* margin-top: 10rem; */
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 600px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 400px) {
  }
`;

const CardSection = styled.div`
  /* padding-top: 10rem; */

  margin: 0 auto;
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  @media screen and (max-width: 1200px) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    padding-top: 1rem;
    padding-bottom: 3rem;
    width: 98%;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    height: 100%;
  }
`;

const CardElement = styled.div``;

const WorkImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  img {
    width: 100%;
    transition: 0.5s ease-in-out;
    transform: scale(1.1);

    &:hover {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 1240px) {
    border-radius: 1.5rem;
  }
  @media screen and (max-width: 850px) {
    border-radius: 1rem;
  }
  @media screen and (max-width: 600px) {
    /* border-radius: 2rem; */
  }
`;
const Title = styled.h3`
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  margin-left: 0.8rem;
`;

const CardItem = styled.article`
  /* background: #3e3e79; */
  background: var(--sub-theme-about);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: 0.5s ease-in-out;
  &:hover {
    background: transparent;
    /* border: 2px solid #3e3e79; */
    border: 2px solid var(--sub-theme-accent);
  }
  @media screen and (max-width: 1240px) {
    padding: 1rem;
    border-radius: 1.5rem;
  }
  @media screen and (max-width: 850px) {
    padding: 0.8rem;
    border-radius: 1rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem;
    /* border-radius: 2rem; */
  }
`;
