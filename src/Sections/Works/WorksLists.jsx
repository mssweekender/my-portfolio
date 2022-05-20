import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";

const WorksLists = ({ works }) => {
  return (
    <CardSection>
      {works.map((work) => (
        <WorkItem work={work} key={work.id} />
      ))}
    </CardSection>
  );
};

export default WorksLists;

const CardSection = styled.div`
  margin: 0 auto 200px auto;
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  @media screen and (max-width: 1200px) {
    width: 100%;
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
