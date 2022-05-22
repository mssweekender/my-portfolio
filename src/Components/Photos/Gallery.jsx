import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./GalleryData";
import { IoMdClose } from "react-icons/io";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
  };

  return (
    <GalleryBlock>
      <Modal className={modal ? "modal open" : "modal"}>
        <IoMdClose onClick={() => setModal()} className="svg" />
        <img src={tempImg} alt="" />
      </Modal>
      <GallerySection>
        {Data.map((item, index) => (
          <Photo
            key={index}
            src={item.img}
            alt=""
            className="image"
            onClick={() => getImg(item.img)}
          />
        ))}
      </GallerySection>
    </GalleryBlock>
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
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: rotate(2deg);
    box-shadow: 2px 2px 30px var(--sub-theme-accent);
  }
  @media screen and (max-width: 680px) {
    margin-top: 5px;
  }
`;

const Modal = styled.div`
  .svg {
    font-size: 20px;
    color: white;
    /* background-color: rgba(255, 255, 255, 0.7); */
    position: absolute;
    top: 5%;
    right: 2%;
    z-index: 1000;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover {
      color: var(--sub-theme-accent);
      transform: rotate(180deg);
    }
  }
`;

const GalleryBlock = styled.div`
  .modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
    backdrop-filter: blur(6px);

    img {
      width: auto;
      max-width: 100%;
      height: auto;
      display: block;
      line-height: 0;
      box-sizing: border-box;
      padding: 20px 0 20px;
    }
  }

  .modal.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;
