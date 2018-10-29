import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import translations from "../translations";
import { colors } from "../styles/globals";

import { Link, NavLink } from "react-router-dom";
//import LanguageSelector from "./LanguageSelector";

import logo from "../img/abs_footer.svg";
// import homeIcon from "../img/home_icon.svg";
// import squareIcon from "../img/square_icon.svg";
// import circleIcon from "../img/circle_icon.svg";
// import triangleIcon from "../img/triangle_icon.svg";
// import { Link, NavLink } from "react-router-dom";

import LogoUdp from "../img/udp-logo.png";
import LogoCCLPM from "../img/cclpm-logo.png";
import LogoFondart from "../img/fondart-logo.png";

const Linea = styled.div`
  width: 1px;
  border-right: 1px solid ${colors.violet};
  transform: translateY(5vh);
  height: 30rem;
  position: absolute;
`;

const LinkA = styled.a`
  font-weight: 500;
  color: ${colors.red};
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
  transition: 1s all;
  cursor: pointer;

  font-family: "Helvetica", "HelveticaNeue", "Verdana";
  position: relative;
  text-align: center;

  color: ${colors.white};
  @media (min-width: 740px) {
    text-align: right;
  }
  &:hover {
  }
`;

const Nav = styled.nav`
  align-items: center;
  justify-content: center;
  z-index: 900;
  flex-direction: row;
  display: flex;
  height: 8vh;
  position: relative;
  @media (min-width: 740px) {
    margin-right: 0rem;
    justify-content: flex-end;
  }
  &.navLogos {
  }
`;

const LogoContainer = styled.div`
  margin-right: auto;
  margin-top: 1vh;
`;

const Logo = styled.img`
  /* height: 6vh; */
  /* max-width: 15vmax; */
`;

const Wrap = styled.footer`
  z-index: 500;
  padding: 0.4rem;
  padding-bottom: 2rem;
  display: block;
  position: relative;
  width: 100vw;
  overflow: hidden;
  background-color: ${colors.deepblack};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 740px) {
    flex-direction: row;
  }
`;

const General = styled.div`
  text-align: left;
  color: ${colors.white};
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 1rem;
  }
`;

const GeneralLogos = styled.div`
  flex-direction: column;
  display: flex;
  margin-right: 0;
  margin-left: auto;

  @media (min-width: 740px) {
    margin-right: 3rem;
  }
`;

const LinkTo = styled(NavLink)`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  font-weight: 500;
  color: ${colors.white};
  text-decoration: none;
  padding-left: 2rem;
  padding-right: 1rem;
  align-self: center;
  flex-direction: row;
  font-size: 1.5rem;
  white-space: nowrap;
  transition: 0.3s all;
  display: flex;
  text-transform: uppercase;
  font-family: "Helvetica", "HelveticaNeue", "Verdana";
  letter-spacing: 130%;

  &:hover {
    color: ${colors.gray};
  }
  &span {
    font-size: 0.5rem;
    display: inline-flex;
    &img {
      height: 5vh;
    }
  }
`;

const LogoImg = styled.img`
  height: 5rem;
  @media (min-width: 740px) {
    height: 6rem;
  }
`;

const LinkLogo = styled.a`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  font-weight: 500;
  color: ${colors.white};
  text-decoration: none;
  padding-left: 2rem;
  padding-right: 1rem;
  align-self: center;
  flex-direction: row;
  white-space: nowrap;
  transition: 0.3s all;
  display: flex;

  &span {
    &img {
    }
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
      <Linea />
      <GeneralLogos>
        <General>
          <Nav>
            <LinkTo to="/">
              {/* <span>
              <img src={homeIcon} className="menuIcon" />
            </span> */}
              {translations.header.home[props.language]}
            </LinkTo>

            <LinkTo to="/artwork">
              {/* <span>
              <img src={squareIcon} className="menuIcon" />
            </span> */}
              {translations.header.timeline[props.language]}
            </LinkTo>

            <LinkTo to="/artists">
              {/* <span>
              <img src={triangleIcon} className="menuIcon" />
            </span> */}
              {translations.header.artists[props.language]}
            </LinkTo>

            <LinkTo to="/team">
              {/* <span>
              <img src={circleIcon} className="menuIcon" />
            </span> */}
              {translations.header.contact[props.language]}
            </LinkTo>
          </Nav>
        </General>

        <Nav className="navLogos">
          <LinkLogo target="_blank" href="https://www.ccplm.cl/sitio/">
            <span>
              <LogoImg src={LogoCCLPM} className="menuIcon" />
            </span>
          </LinkLogo>
          <LinkLogo target="_blank" href="https://www.cultura.gob.cl/">
            <span>
              <LogoImg src={LogoFondart} className="menuIcon" />
            </span>
          </LinkLogo>
          <LinkLogo target="_blank" href="https://www.udp.cl/">
            <span>
              <LogoImg src={LogoUdp} className="menuIcon" />
            </span>
          </LinkLogo>
        </Nav>
        <LinkA
          className="footerNav"
          href={
            "mailto:info@abstraccionsur.com?subject=Contacto%20desde%20Abstraccion%20Sur"
          }
        >
          info@abstraccionsur.com | &copy; {new Date().getFullYear()}
        </LinkA>
      </GeneralLogos>
    </Content>
  </Wrap>
);

const mapStateToProps = state => {
  return {
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Footer);
