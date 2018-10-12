import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

import translations from "../translations";
import logo from "../img/logo_header.svg";
import { colors } from "../styles/globals";

import A01 from "../img/01_a.svg";
import B02 from "../img/02_b.svg";
import S03 from "../img/03_s.svg";
import T04 from "../img/04_t.svg";
import R05 from "../img/05_r.svg";
import A06 from "../img/06_a.svg";
import C07 from "../img/07_c.svg";
import C08 from "../img/08_c.svg";
import I09 from "../img/09_i.svg";
import O10 from "../img/10_o.svg";
import N11 from "../img/11_n.svg";
import S12 from "../img/12_s.svg";
import U13 from "../img/13_u.svg";
import R14 from "../img/14_r.svg";
import Linea from "../img/linea.svg";
import Triangulo from "../img/triangulo.svg";

const LogoParts = styled.div`
  /* top: 50px; */
  width: 20vmax;
  margin: 0 auto;
  opacity: 0;
  z-index: 3001;

  img {
    top: 0;
    position: absolute;
  }
  &.active {
    opacity: 1;
    transform: translate(50%, 50%, 0);
  }
`;
const LogoContainer = styled.div`
  margin-right: auto;
  margin-top: 1vh;
  position: absolute;
  top: 0.5rem;
  left: 3rem;
  transition: all 1s;
  &.passive {
    transform: translate3d(-30vw, 0, 0);
    opacity: 0;
  }
`;

const Logo = styled.img`
  /* max-width: 15vmax; */
  height: 8rem;
`;

const Circle = styled.div`
  border-radius: 50%;
  color: ${colors.violet};
  position: fixed;
  width: 10vw;
  height: 10vw;
`;

const Nav = styled.nav`
  position: fixed;
  align-items: center;
  z-index: 900;
  flex-direction: row;
  display: flex;
`;

const LinkTo = styled(NavLink)`
  text-indent: 0;
  color: ${colors.white};
  text-decoration: none;
  display: inline-block;
  font-size: 2em;
  margin: 0 2rem;
  align-items: center;
  line-height: 1em;
  text-transform: uppercase;
  transition: 1s all;
  background: transparent;
  font-weight: 750;
  /* &:first-child {
    display: none;
  } */

  @media (max-width: 740px) {
    font-size: 2.4em;
    margin: auto;
    margin-top: 7vh;
    &:first-child {
      display: flex;
    }
  }
  &.active,
  &:hover {
    color: ${colors.white};
  }
`;

const Burger = () => (
  <svg width="3rem" height="3rem" fill={colors.black}>
    <rect y="7" width="30" height="2" />
    <rect y="15" width="30" height="2" />
    <rect y="23" width="30" height="2" />
  </svg>
);

const ToTop = styled.a`
  color: ${colors.white};
  font-size: 1.4rem;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  text-decoration: none;

  > span {
    display: block;
  }

  transition: 1s all;
  &:hover {
    color: ${colors.violet};
  }
`;

const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const BackToTop = styled.div`
  flex: 1;
  text-align: right;
  display: none;

  @media (max-width: 740px) {
    display: none;
    &.active {
      display: flex;
      bottom: 1rem;
      right: 1rem;
      position: fixed;
    }
  }
`;

const BurgerLink = styled.a`
  z-index: 50000;
  fill: ${colors.white};
  margin: 2rem 2rem;
  position: absolute;
  top: 0;

  rect {
    transition: 0.5s all;
  }
  &.open {
    svg {
      fill: ${colors.black};
    }
    rect:nth-child(1) {
      transform: translate(1rem, 0) rotate(45deg);
    }
    rect:nth-child(2) {
      opacity: 0;
    }
    rect:nth-child(3) {
      transform: translate(-1.3rem, 1rem) rotate(-45deg);
    }
  }
`;

const NavContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
  z-index: 900;
  flex-direction: row;
  /* display: none; */
  top: 0;
  left: 0;
  transition: all 0.4s;
  width: 0;
  display: flex;
  height: 50vh;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  overflow: hidden;

  &.active {
    position: fixed;
    width: 100vw;
    z-index: 3000;
    background: rgba(255, 255, 255, 0.85);
  }
`;

class Header extends React.Component {
  state = {
    openMenu: false
  };

  componentDidMount() {}

  openMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  closeMenu = () => {
    this.setState({ openMenu: false });
    console.log("close Menu");
  };

  checkMobileNav = props => {
    if (this.state.openMenu && "active") {
      this.closeMenu();
    }
  };

  render() {
    const { language } = this.props;
    return (
      <Nav>
        <LogoContainer className={this.state.openMenu ? "passive" : ""}>
          <LinkTo to="/">
            <Logo src={logo} />
          </LinkTo>
        </LogoContainer>

        <LogoParts className={this.state.openMenu ? "active" : ""}>
          <img src={Triangulo} alt="triangulo" />
          <img src={Linea} alt="linea" />
          <img src={A01} alt="a" />
          <img src={B02} alt="b" />
          <img src={S03} alt="s" />
          <img src={T04} alt="t" />
          <img src={R05} alt="r" />
          <img src={A06} alt="a" />
          <img src={C07} alt="c" />
          <img src={C08} alt="c" />
          <img src={I09} alt="i" />
          <img src={O10} alt="o" />
          <img src={N11} alt="n" />
          <img src={S12} alt="s" />
          <img src={U13} alt="u" />
          <img src={R14} alt="r" />
        </LogoParts>
        <NavContainer className={this.state.openMenu && "active"}>
          <LinkTo onClick={this.checkMobileNav} to="/">
            {translations.header.home[language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/artists">
            {translations.header.artists[language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/artwork">
            {translations.header.timeline[language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/team">
            {translations.header.contact[language]}
          </LinkTo>
        </NavContainer>
        <BurgerLink
          onClick={this.openMenu}
          className={this.state.openMenu && "open"}
        >
          <Burger />
        </BurgerLink>
        <LanguageSelector />
      </Nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Header);
