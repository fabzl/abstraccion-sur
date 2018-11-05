import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

import translations from "../translations";
import logo from "../img/logo_header_abs.svg";
import logoSur from "../img/logo_header_sur.svg";
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
import Grid from "./GridArt";

let lastScrollY = 0;
let ticking = false;

const MenuHolder = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const LogoParts = styled.div`
  display: block;
  position: relative;
  width: 18vmax;
  height: 0;
  text-align: center;
  opacity: 0;
  z-index: 3001;
  transform: translate3d(0, -100%, 0);
  transition: all 0.5;
  img {
    top: 0;
    position: absolute;
    transform: translateX(-50%);
  }
  &.active {
    opacity: 1;
    height: 20vmax;
    transform: translate3d(0, 0, 0);
  }
`;
const LogoContainer = styled.div`
  margin-right: auto;
  position: fixed;
  top: 5vh;
  left: 4rem;
  transition: all 1s;
  /* &.passive {
    transform: translate3d(-30vw, 0, 0);
    opacity: 0;
  } */
`;

const LogoContainerSur = styled.div`
  position: fixed;
  top: 4vh;
  right: 0;
  transition: all 1s;
  border-bottom: 4px solid ${colors.black};
  padding: 0 2rem 1rem 0;
  /* &.passive {
    transform: translate3d(-30vw, 0, 0);
    opacity: 0;
  } */
`;

const LogoSur = styled.img``;

const Logo = styled.img``;

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
  z-index: 99998;
  flex-direction: column;
  display: flex;
  width: 100vw;
`;

const LinkTo = styled(NavLink)`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-indent: 0;
  color: ${colors.black};
  text-decoration: none;
  font-size: 1.2em;
  letter-spacing: 130%;
  align-items: center;
  line-height: 1em;
  text-transform: uppercase;
  transition: 1s all;
  background: transparent;
  font-weight: 750;
  padding: 1rem 2.5rem;
  text-align: center;
  font-family: "Helvetica";
  &.logo-abs {
    padding: 0;
    width: 4rem;
    display: block;
    & img {
      width: 100%;
    }
  }
    &.logo-sur {
      /* height: 2rem;
      display: block; */
      padding: 0;
      & img {
        height: 4rem;
      }
    }
  }

  &.menu {
    border-right: 2px solid ${colors.black};
    box-sizing: border-box;
  }
  &:last-child {
    border-right: none;
  }

  &.active,
  &:hover {
    color: ${colors.black};
  }
`;

const Burger = () => (
  <svg width="3rem" height="3rem" fill={colors.black}>
    <rect y="0.7rem" width="3rem" height="2" />
    <rect y="1.5rem" width="3rem" height="2" />
    <rect y="2.3rem" width="3rem" height="2" />
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
  position: absolute;
  top: 60vh;
  left: 0;
  padding: 2rem 0rem 2rem 4rem;
  border-bottom: 4px solid ${colors.black};

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
  transition: all 0.4s;
  display: flex;
  height: 0;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  overflow: hidden;

  &.active {
    height: 50vh;
    position: fixed;
    z-index: 3000;
    background: rgba(255, 255, 255, 0.85);
  }
`;

class Header extends React.Component {
  state = {
    openMenu: false,
    scrollOn: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
        // console.log("tick");
      });
      // console.log("ticktrue", lastScrollY);
      ticking = true;
      this.setState({ scrollOn: true });
    }
  };

  // myVar = setInterval(myTimer, 1000);

  // function myTimer() {
  //     var d = new Date();
  //     var t = d.toLocaleTimeString();
  //     document.getElementById("demo").innerHTML = t;
  // }

  // function myStopFunction() {
  //     clearInterval(myVar);
  // }

  openMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
    this.setState({ scrollOn: false });
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
        <nav ref={this.nav} />
        <LogoContainer
          className={
            this.state.openMenu || this.state.scrollOn ? "passive" : ""
          }
        >
          <LinkTo className="logo-abs" to="/">
            <Logo src={logo} />
          </LinkTo>
        </LogoContainer>

        <LogoContainerSur
          className={
            this.state.openMenu || this.state.scrollOn ? "passive" : ""
          }
        >
          <LinkTo className="logo-sur" to="/">
            <LogoSur src={logoSur} />
          </LinkTo>
        </LogoContainerSur>

        <NavContainer className={this.state.openMenu && "active"}>
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
          <MenuHolder>
            <LinkTo className="menu" onClick={this.checkMobileNav} to="/">
              {translations.header.home[language]}
            </LinkTo>

            <LinkTo
              className="menu"
              onClick={this.checkMobileNav}
              to="/artists"
            >
              {translations.header.artists[language]}
            </LinkTo>

            <LinkTo
              className="menu"
              onClick={this.checkMobileNav}
              to="/artwork"
            >
              {translations.header.timeline[language]}
            </LinkTo>

            <LinkTo className="menu" onClick={this.checkMobileNav} to="/team">
              {translations.header.contact[language]}
            </LinkTo>
          </MenuHolder>
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
