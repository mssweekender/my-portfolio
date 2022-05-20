import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import WorksLists from "../Sections/Works/WorksLists";
import { Link } from "react-router-dom";

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    let work = WorksLists.find((work) => work.id === parseInt(id));
    if (work) {
      setWork(work);
    }
  }, []);
  return (
    <WorkDetialSection>
      <Link to="/">
        <span>&#8592</span> Go Back
      </Link>
      {work ? (
        <WorkWrapper>
          <WorkHeader>
            <p className="work-data">{work.title}</p>
            <h1>{work.title}</h1>
          </WorkHeader>
          <Cover src={work.contentImage} />
          <Disc>{work.disc}</Disc>
        </WorkWrapper>
      ) : (
        ""
      )}
    </WorkDetialSection>
  );
};

export default WorkDetail;

const WorkDetialSection = styled.div`
  color: black;
`;

const WorkWrapper = styled.div``;

const WorkHeader = styled.div`
  .work-data {
  }
  h3 {
  }
`;

const Cover = styled.img``;

const Disc = styled.p``;
