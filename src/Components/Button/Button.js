import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Btn = styled(LinkS)`
  border-radius: 20px;
  white-space: nowrap;
  padding: 1.5rem 3rem;
  color: white;
  font-size: 15px;
  font-family: var(--english);
  outline: none;
  border: 2px solid var(--sub-theme-accent);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.6s ease-in-out;
    background: var(--sub-theme-accent);
  }

  @media screen and (max-width: 760px) {
    font-size: 13px;
    width: 60%;
    text-align: center;
    padding: 0.5rem 1rem;
  }
`;
