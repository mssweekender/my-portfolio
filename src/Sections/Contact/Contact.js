import React from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramLine, RiTwitterLine } from "react-icons/ri";

const Contact = () => {
  return (
    <ContactSection id="Contact">
      <SectionTitle>Contact Me</SectionTitle>

      <Container>
        <div className="contact_container">
          <div className="contact-right">
            <div className="contact_options">
              <article className="contact_option">
                <MdOutlineEmail className="contact_option-icon" />
                <h4>Email</h4>

                <a href="mailto:masashi.kawano.99@gmail.com">Send message</a>
              </article>
              <article className="contact_option">
                <RiInstagramLine className="contact_option-icon" />
                <h4>instagram</h4>
                <h5>@mssweekender</h5>
                <a href="https://www.instagram.com/mssweekender/">
                  Send message
                </a>
              </article>
              <article className="contact_option">
                <RiTwitterLine className="contact_option-icon" />
                <h4>Twitter</h4>
                <h5>@Masashi990527</h5>
                <a href="https://twitter.com/Masashi990527">Send message</a>
              </article>
            </div>
          </div>
          <div className="contact-left">
            <form
              method="post"
              action="mailto:masashi.kawano.99@gmail.com"
              enctype="multipart/form-data"
            >
              <input
                type="text"
                name="name"
                placeholder="フルネーム"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="メールアドレス"
                required
              />
              <textarea
                name="message"
                rows="10"
                placeholder="メッセージ内容"
                required
              ></textarea>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </Container>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgb(0, 0, 0); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  position: relative;

  font-family: var(--english);
  padding-bottom: 10rem;

  @media screen and (max-width: 400px) {
    padding-bottom: 4rem;
  }

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

const SectionTitle = styled.h1`
  font-family: var(--english);
  padding-top: 8rem;
  z-index: 9;
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 9;

  /* background-color: white; */
  gap: 5%;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 2rem;
  }

  .contact_container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-content: center;
    gap: 3rem;
    width: 90%;

    @media screen and (max-width: 680px) {
      flex-direction: column;
      gap: 2rem;
      align-items: center;

      .contact-right {
        width: 100%;
      }
      .contact-left {
        width: 100%;
      }
    }

    .contact-right {
      height: 100%;
      @media screen and (max-width: 680px) {
      }
    }

    .contact-left {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media screen and (max-width: 860px) {
      }
      /* background-color: white; */
    }
  }

  .contact_options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    width: 180px;
    @media screen and (max-width: 680px) {
      width: 80%;
      margin: 0 auto;
    }
    /* background: black; */
  }

  .contact_option {
    width: 100%;
    background: transparent;
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: 0.5s all ease-in-out;
    border: 2px solid var(--sub-accent);
    cursor: pointer;

    h5 {
      font-weight: 200;
      font-size: 10px;
    }

    &:hover {
      background: var(--sub-theme-color);
    }
  }

  .contact_option-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .contact_option a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
    color: var(--sub-theme-accent);
  }

  form {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 1.2rem;

    @media screen and (max-width: 750px) {
      width: 400px;
      align-self: center;
    }
    @media screen and (max-width: 430px) {
      width: 300px;
      align-self: center;
    }

    input,
    textarea {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid var(--sub-accent);
      resize: none;
    }

    button {
      border-radius: 20px;
      background: var(--sub-theme-accent);
      width: max-content;
      white-space: nowrap;
      padding: 1.5rem 3rem;
      color: white;
      font-size: 16px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;

      @media screen and (max-width: 680px) {
        align-self: center;
      }

      &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--sub-accent);
      }
    }
  }
`;
