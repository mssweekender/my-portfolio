import React from "react";
import styled from "styled-components";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

// import Skills from "../../Components/Skill";
import SKILL from "../../Components/Skill/Skill";

const Skill = () => {
  return (
    <SkillsSection>
      <SKILL img={<FaHtml5 />} name="HTML 5" progress="80" />
      <SKILL img={<FaCss3Alt />} name="CSS 3" progress="80" />
      <SKILL
        img={<SiJavascript style={{ borderRadius: "10px" }} />}
        name="Javascript"
        progress="50"
      />
      <SKILL img={<FaReact />} name="React.js" progress="50" />
      <SKILL img={<DiIllustrator />} name="Illustrator" progress="60" />
      <SKILL img={<FaFigma />} name="Figma" progress="85" />
    </SkillsSection>
  );
};

export default Skill;

const SkillsSection = styled.div`
  width: 80%;
  padding-top: 3rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  z-index: 999;

  @media screen and (max-width: 1200px) {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    padding-top: 1rem;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 3rem;
  }
`;
