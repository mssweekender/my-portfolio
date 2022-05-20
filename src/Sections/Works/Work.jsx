import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import WorksLists from "./WorksLists";
import { Card } from "../../Components/Cards/Card";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Work = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    let work = Card.find((work) => work.id === parseInt(id));
    if (work) {
      setWork(work);
    }
  }, []);

  return (
    <WorkPage>
      <LinkR to="/">
        <span>
          <IoIosArrowDropleftCircle />
        </span>
        Go Back
      </LinkR>
      {work ? (
        <WorkWrapper>
          <Cover src={require(`../../assets/${work.contentImage}`)} />
          <ContentSize>
            <WorkHeader>
              <h1 className="work_title">
                {work.title}
                <span>様</span>
              </h1>
              <p className="language">{work.language.join(" | ")}</p>
            </WorkHeader>
            <Contents>
              <p className="work-data">{work.disc}</p>
              <p className="work-description">{work.disc_2}</p>
            </Contents>
          </ContentSize>
        </WorkWrapper>
      ) : (
        ""
      )}
    </WorkPage>
  );
};

export default Work;

const WorkWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .work_title {
    font-size: 30px;
    width: max-content;
    color: black;
    font-family: var(--japanese);
    font-weight: 400;
    position: relative;
    span {
      color: black;
      font-size: 20px;
      margin-left: 5px;
    }

    &::after {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      content: "";
      height: 3px;
      width: 70%;
      background-color: var(--sub-theme-accent);
    }

    @media screen and (max-width: 600px) {
      font-size: 18px;
      .work_title {
        overflow-wrap: normal;
      }
    }
  }
`;

const WorkHeader = styled.div`
  color: black;
  h1 {
    color: black;
  }
  .language {
    margin-top: 30px;
    color: #494949;
    font-weight: 300;
    font-family: var(--english);
    @media screen and (max-width: 600px) {
      font-size: 10px;
      font-weight: 100;
      margin-top: 20px;
    }
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 600px) {
    height: max-content;
  }
  @media screen and (max-width: 400px) {
    height: max-content;
  }
`;

const WorkPage = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  position: relative;
  padding-bottom: 50px;
`;

const LinkR = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  padding: 3px 10px;
  border-radius: 30px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background-color: rgb(0, 168, 204, 0.5);
  color: #fff;
  font-family: var(--english);
  span {
    position: relative;
    top: 2.5px;
    margin-right: 6px;
    color: #fff;
  }
`;

const ContentSize = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px;
  @media screen and (max-width: 600px) {
    width: 95%;
    padding: 10px;
  }
`;

const Contents = styled.div`
  color: black;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .work-data {
    color: black;
  }
  .work-description {
    color: black;
  }
  @media screen and (max-width: 600px) {
    height: 250px;
    .work-data {
      font-size: 13px;
      width: 95%;
    }
    .work-description {
      width: 95%;

      color: black;
      font-size: 13px;
    }
  }
`;
