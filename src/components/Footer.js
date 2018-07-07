import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import logo from "../img/logo_footer.svg";
import translations from "../translations";
import { colors } from "../styles/globals";
import Social from "./Social";

import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

// import { Link, NavLink } from "react-router-dom";

const NavContainer = styled.div`
  /* align-items: center;
  justify-content: flex-end;
  z-index: 900;
  flex-direction: row;
  display: flex;

  @media (max-width: 740px) {
    display: none;
    &.active {
      display: flex;
      top: 0;
      position: fixed;
      width: 100vw;
      height: 100%;
      z-index: 3000;
      background: rgba(0, 1, 40, 0.85);
      flex-direction: column;
      text-align: center;
      justify-content: space-around;
    }
  } */
`;

const Logo = styled.img`
  width: 68%;
  @media (min-width: 500px) {
    min-width: 150px;
    width: 50%;
  }
  margin: 0 auto;
  display: flex;
  max-width: 300px;
`;

const Wrap = styled.footer`
  z-index: 50;
  padding: 3.5rem 4rem 2rem;
  min-height: 150px;
  display: block;
  padding-bottom: 20px;
  position: fixed;
  width: 100vw;
  bottom: 0;
  background-color: ${colors.black};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const General = styled.div`
  flex: 3;
  text-align: center;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 10px;
  }
`;

const Links = styled.div`
  margin-top: 10px;
  @media (max-width: 740px) {
    flex-direction: column;
    text-align: left;
  }
`;

// const H6 = styled.h6`
//   @media (max-width: 740px) {
//     font-size: 12px;
//   }
// `;

// const Link = styled(NavLink)``;

const LinkTo = styled.a`
  font-weight: 500;
  color: ${colors.white};
  text-decoration: none;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  white-space: nowrap;
  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }
`;

const ToTop = styled.a`
  color: ${colors.white};
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;

  > span {
    display: block;
  }

  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }
`;

export const smoothScroll = () => {
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const Footer = props => (
  <Wrap>
    <Content>
      {/* <Social /> */}
      <General>
        <NavContainer>
          <LinkTo onClick={this.checkMobileNav} to="/">
            {translations.header.home[props.language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/reel">
            {translations.header.timeline[props.language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/work">
            {translations.header.artists[props.language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/about">
            {translations.header.contact[props.language]}
          </LinkTo>

          <LanguageSelector />
        </NavContainer>
      </General>
    </Content>
  </Wrap>
);

const mapStateToProps = state => {
  return {
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Footer);
