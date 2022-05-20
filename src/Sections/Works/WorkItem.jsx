import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WorkItem = ({ work: { id, contentImage, title, language } }) => {
  return (
    <Item>
      <CardItem>
        <WorkImage>
          <img src={require(`../../assets/${contentImage}`)} alt="work" />
        </WorkImage>
        <DetailSection>
          <div className="left">
            <Title>
              {title}
              <span>様</span>
            </Title>
            <p className="language">{language.join(" | ")}</p>
          </div>
          <BtnSection>
            <button>
              <LinkId to={`/works/${id}`}>more detail</LinkId>
            </button>
          </BtnSection>
        </DetailSection>
      </CardItem>
    </Item>
  );
};

export default WorkItem;

const Item = styled.div``;

const WorkImage = styled.div`
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.5s ease-in-out;
    transform: scale(1.1);

    &:hover {
      transform: scale(1.08);
    }
  }
  @media screen and (max-width: 1240px) {
    border-radius: 13px;
  }
  @media screen and (max-width: 850px) {
    border-radius: 10px;
  }
  @media screen and (max-width: 600px) {
    border-radius: 8px;
  }
`;
const Title = styled.h3`
  font-size: 0.8rem;
  span {
    font-size: 0.6rem;
    margin-left: 3px;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.6rem;
  }
`;

const CardItem = styled.article`
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: 0.5s ease-in-out;
  &:hover {
    background: transparent;
    border: 2px solid var(--sub-theme-accent);
  }
  @media screen and (max-width: 1240px) {
    padding: 1rem;
    border-radius: 1.5rem;
  }
  @media screen and (max-width: 850px) {
    padding: 10px;
    border-radius: 1rem;
  }
  @media screen and (max-width: 600px) {
    padding: 6px;
  }
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 8px 4px 8px;

  .left {
  }
  .language {
    padding-top: 5px;
    font-size: 10px;
    color: #646464;
  }

  @media screen and (max-width: 800px) {
    padding: 15px 8px 4px 8px;

    .language {
      font-size: 8px;
    }
  }
`;

const BtnSection = styled.div`
  pointer-events: fill;
  button {
    min-width: 75px;
    background-color: var(--sub-theme-accent);
    color: white;
    padding: 8px 20px;
    border: none;
    appearance: none;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:hover {
      background-color: var(--sub-accent);
    }
  }
  @media screen and (max-width: 1000px) {
    button {
      padding: 5px 10px;
    }
  }
  @media screen and (max-width: 600px) {
    button {
      padding: 8px 20px;
    }
  }
`;

const LinkId = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
  }
`;
