import React from "react";
import styled from "styled-components";

const Skills = ({ img, name, progress }) => {
  return (
    <SKILL>
      <SkillContent>
        <ICON>
          <div className="react-icon" id={name}>
            {img}
          </div>
        </ICON>
        <FlexSection>
          <NAME>
            <div className="name">{name}</div>
            <div className="progress">
              <span>{progress}%</span>
            </div>
          </NAME>
          <PROGRESS>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </PROGRESS>
        </FlexSection>
      </SkillContent>
    </SKILL>
  );
};

export default Skills;

const SKILL = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;

  transition: 0.5s ease-in-out;
  z-index: 99;

  &:hover {
    .progress-bar {
      transform: translateX(0);
    }
  }

  /* @media screen and (max-width: 850px) {
    height: 10vh;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    padding: 0.6rem 1.2rem;
    height: 98px;
  }

  @media screen and (max-width: 400px) {
    height: 90px;
    width: 100%;
    padding: 1rem 1.2rem;
  } */
`;

const SkillContent = styled.div`
  width: 100%;
  border: 2px solid var(--sub-theme-accent);
  padding: 2% 5%;
  border-radius: 20px;
  max-width: 400px;
  max-height: 200px;
  /* margin-left: 5%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  transition: 0.5s all ease-in-out;

  gap: 0.5rem;
  margin: 0 auto;
  .progress {
    padding: 0.5rem 1rem;
    margin: 0 auto;

    span {
      display: block;
    }
    /* background-color: black; */
  }

  @media screen and (max-width: 780px) {
    width: 70%;
  }

  @media screen and (max-width: 400px) {
    width: 95%;
    gap: 1rem;
  }

  &:hover {
    background-color: var(--sub-theme-color);
    transform: rotate(-2deg);
    filter: drop-shadow(0 0 0.75rem var(--sub-accent));
  }
`;

const ICON = styled.div`
  /* padding: 1rem; */
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: black; */
  /* background: orange; */

  .react-icon {
    text-align: center;
    margin-top: 1rem;
    font-size: 3rem;
    color: white;
  }

  @media screen and (max-width: 500px) {
    height: 100%;

    .react-icon {
      font-size: 2.5rem;
    }
  }
`;

const FlexSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 95%;

  /* background-color: blue; */
  /* min-width: 200px; */
`;

const NAME = styled.div`
  font-size: 18px;
  margin-left: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: var(--english);

  @media screen and (max-width: 850px) {
    font-size: 20px;
    min-width: 200px;
  }

  @media screen and (max-width: 400px) {
    font-size: 100%;
  }
`;

const PROGRESS = styled.div`
  height: 18px;
  background-color: var(--sub-theme-color);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  .progress-bar {
    position: absolute;
    transform: translateX(-101%);
    transition: 1s ease-in-out;
    display: block;
    height: 100%;
    background-color: var(--sub-theme-accent);
    border-radius: 20px;
  }
  &:hover {
    .progress-bar {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1200px) {
    min-width: 200px;
    height: 10px;
    position: relative;
    .progress-bar {
      position: absolute;
    }
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    height: 10px;
    position: relative;
    .progress-bar {
      position: absolute;
    }
  }
`;
