import React from "react";
import styled from "styled-components";
import Skills from "../../Sections/Skills/Skills";
import titleImage from "../../assets/title-image.svg";
import MyImg from "../../assets/MyImage.JPEG";
import Gallery from "../../Components/Photos/Gallery";

const About = () => {
  return (
    <Container id="about">
      <Content>
        <Subtitle>About</Subtitle>
        <SectionTitle>KAWANO MASASHI</SectionTitle>

        <AboutDetails>
          <DetailLeft>
            <ImageTitle>
              <img src={titleImage} alt="Title" />
            </ImageTitle>
            <MyImage>
              <img src={MyImg} alt="" />
            </MyImage>
          </DetailLeft>
          <DetailRight>
            <div className="detail-title one">
              <span className="circle" />
              <span className="title ">Basic Info</span>
            </div>
            <div className="detail-text">
              <p>
                大阪生まれ大阪育ちの22歳。現在は、Webデザイナーとして活動しています。2022年3月に外国語系の大学を卒業し、10月から知識とスキルを向上するため、カナダでIT留学に挑戦します。
              </p>
              <div className="hobby_section">
                <div className="hobby">
                  <div className="cirlce_content"></div>
                  <p className="text">趣味</p>
                </div>
                <div className="text_section">
                  <p>写真 | バスケ</p>
                </div>
              </div>
            </div>
            <div className="detail-title two">
              <span className="circle" />
              <span className="title ">My Philosophy</span>
            </div>
            <div className="detail-text">
              <p>
                現代社会においてWEBに関わる仕事はなくてはならない存在であり、
                WEB業界は今後もますます拡大していくでしょう。
                <br />
                <br />
                僕はWEB業界が、企業や個人と信頼し協力し合えるような社会を目指しております。
                目の前のことを楽しみながら取り組み、考え、実行し、改善しつつ日々成長していくことが私の一生涯の目標です。
              </p>
            </div>
            <div className="detail-title three">
              <span className="circle" />
              <span className="title">Future Goal</span>
            </div>
            <div className="detail-text">
              <p>
                今後の目標は、デザインだけではなく、Webアプリの開発なども視野に入れていきたいと思っています。
                <br />
                <br />
                また、将来的な目標は、『写真 × Webデザイン ×
                開発』の3本の軸でクライアント様を全面的にサポートできるようになります。
              </p>
            </div>
          </DetailRight>
        </AboutDetails>
      </Content>
      <Gallery />
      <Skills />
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #041524;
    /* background-color: #061d30; */
    transform: skewY(7deg);
    z-index: 1;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  z-index: 9;
  position: relative;

  @media screen and (max-width: 850px) {
    position: static;
    margin-bottom: 5rem;

    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const SectionTitle = styled.h1`
  font-family: var(--english);
  padding-top: 10rem;
  font-weight: 600;
  font-size: 2rem;
  display: inline-block;
  position: relative;
  text-align: center;
  z-index: 9;
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

const AboutDetails = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;
  position: relative;
  padding-left: 2rem;
  z-index: 20;

  /* background-color: black; */
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding-left: 0rem;
  }
  @media screen and (max-width: 850px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 3.6rem;
    gap: 0;
  }

  @media screen and (max-width: 400px) {
    margin-top: 5rem;
  }
`;

const Subtitle = styled.h1`
  font-size: 12rem;
  font-family: var(--english);
  /* color: #323267; */
  color: var(--sub-theme-color);
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

const MyImage = styled.div`
  width: 300px;
  height: 300px;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 5rem var(--sub-theme-accent);

  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 290px;
    height: 290px;

    border-radius: 50%;
  }

  @media screen and (max-width: 860px) {
    width: 290px;
    height: 290px;

    border-radius: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    position: relative;
    z-index: 1;
    background-color: black;
  }
`;

const ImageTitle = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 850px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
    height: auto;
    position: absolute;
    left: 30%;
    transform: translateY(7rem);
    z-index: 3;

    img {
      width: 100%;
      height: auto;
      /* filter: drop-shadow(black); */
    }
  }
`;

const DetailLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`;

const DetailRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 2rem;
  background-color: var(--sub-theme-color);
  border-radius: 20px; */

  @media screen and (max-width: 1025px) {
  }
  @media screen and (max-width: 850px) {
    /* justify-content: flex-start; */
    margin: 5rem;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 400px) {
    margin: 5rem 0rem 0rem 0rem;
    width: 99%;
    /* margin-left: 0rem; */
  }

  .detail-title {
    /* background-color: #3e3e79; */
    background-color: var(--sub-accent);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 32px;
    width: max-content;

    .circle {
      display: inline-block;
      width: 30px;
      height: 30px;
      /* background-color: #9130ce; */
      background-color: var(--sub-theme-accent);
      border-radius: 50%;
      margin-left: 0.2rem;

      @media screen and (max-width: 600px) {
        width: 20px;
        height: 20px;
        margin-left: 0rem;
      }
    }

    .title {
      margin-top: 0.1rem;
      margin-left: 0.8rem;
      margin-right: 0.6rem;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 1px;
      display: inline-block;
      padding: 0.5rem 0;
      font-family: var(--english);
      line-height: 1.5;

      @media screen and (max-width: 1025px) {
        font-size: 19px;
        padding: 0.2rem 0;
      }
      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
  }

  .detail-text {
    padding: 2rem;
    margin-left: 2rem;
    width: 100%;

    &:not(:last-child) {
      /* border-left: 2px solid #3e3e79; */
      border-left: 2px solid var(--sub-accent);
    }

    li {
      list-style: inside;
    }

    p {
      line-height: 25px;
    }

    h3 {
      font-weight: 200;
    }

    .hobby {
      padding-top: 1.5rem;
    }

    .hobby_section {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      background-color: #1d4066; //
      width: max-content;
      border-radius: 20px;
      .hobby {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        width: max-content;
        background-color: #2e67a3;
        border-radius: 20px;
        padding: 5px 15px 5px 10px;
        .cirlce_content {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #1d4066;
        }
        .text {
        }
      }
      .text_section {
        padding-right: 20px;
        p {
        }
      }
    }

    @media screen and (max-width: 1280px) {
      font-size: 16px;
      /* padding: 0.2rem 0; */
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 14px;
      margin-left: 1.5rem;
      padding: 1.3rem;
    }
    @media screen and (max-width: 400px) {
      /* font-size: 14px;
      margin-left: 1.5rem;
      padding: 1.3rem; */
    }
  }

  span {
    display: inline-block;
  }
`;
