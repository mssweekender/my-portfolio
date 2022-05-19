import React from "react";
import styled from "styled-components";
import { Data } from "./GalleryData";

const Gallery = () => {
  return (
    <>
      <GallerySection>
        {Data.map((item, index) => (
          <Photo key={index} src={item.img} alt="" className="image" />
        ))}
      </GallerySection>
    </>
  );
};

export default Gallery;

const GallerySection = styled.div`
  padding: 0 10px 10px 10px;
  margin: 30px auto;
  border-radius: 10px;
  color: white;
  width: 70%;

  background-color: #0c2a44;
  position: relative;

  z-index: 10;
  column-count: 4;
  column-width: 33%;

  @media screen and (max-width: 680px) {
    padding: 0 5px 5px 5px;
    column-count: 4;
    width: 90%;
    column-gap: 5px;
  }
`;

const Photo = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 10px;
  @media screen and (max-width: 680px) {
    margin-top: 5px;
  }
`;
