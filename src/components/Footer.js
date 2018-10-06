import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import logo from "../img/logo_footer.svg";
import translations from "../translations";
import { colors } from "../styles/globals";

import { Link, NavLink } from "react-router-dom";
//import LanguageSelector from "./LanguageSelector";

// import { Link, NavLink } from "react-router-dom";

const Nav = styled.nav`
  align-items: center;
  justify-content: flex-end;
  z-index: 900;
  flex-direction: row;
  display: flex;
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;

const Logo = styled.img`
  height: 100%;
  max-width: 15vmax;
`;

const Wrap = styled.footer`
  z-index: 500;
  padding: 0.4rem;
  display: block;
  position: fixed;
  width: 100vw;
  height: 8vh;
  bottom: 0;
  background-color: ${colors.black};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const General = styled.div`
  flex: 3;
  text-align: left;
  color: ${colors.white};
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 10px;
  }
`;

const LinkTo = styled(NavLink)`
  cursor: pointer;
  font-weight: 500;
  color: ${colors.white};
  text-decoration: none;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 10px;
  margin-top: 10px;
  white-space: nowrap;
  transition: 0.3s all;
  text-transform: uppercase;
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
      <LogoContainer>
        <LinkTo to="/">
          <Logo src={logo} />
        </LinkTo>
      </LogoContainer>

      <General>
        <Nav>
          <LinkTo to="/">{translations.header.home[props.language]}</LinkTo>

          <LinkTo to="/artwork">
            {translations.header.timeline[props.language]}
          </LinkTo>

          <LinkTo to="/artists">
            {translations.header.artists[props.language]}
          </LinkTo>

          <LinkTo to="/team">
            {translations.header.contact[props.language]}
          </LinkTo>
        </Nav>
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
