import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: black;
  font-family: var(--english);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  /* position: sticky; */
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  z-index: 1;
  width: 100px;
  padding: 0 24px;
  max-width: 1100px;
  gap: 2rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  :active {
    transition: all 0.2s ease-in-out;
    border-bottom: 3px solid var(--sub-theme-accent);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkS)`
  /* border-radius: 50px;
  /* background: var(--sub-theme-accent); */
  /* white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none; */

  /* &:hover {
    transition: all 0.5s ease-in-out;
    background: var(--sub-accent);
  }  */

  color: #fff;
  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  :active {
    transition: all 0.2s ease-in-out;
    border-bottom: 3px solid var(--sub-theme-accent);
  }
`;
