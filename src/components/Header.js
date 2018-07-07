import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

import translations from "../translations";
// import logo from "../img/logo_main_white.svg";

import { colors } from "../styles/globals";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  align-items: center;
  z-index: 900;
  flex-direction: row;
  display: flex;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 120, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const LinkTo = styled(NavLink)`
  text-indent: 0;
  color: ${colors.white};
  text-decoration: none;
  display: inline-block;
  font-size: 1.1em;
  margin: 0 20px;
  align-items: center;
  line-height: 1em;
  text-transform: uppercase;
  transition: 1s all;
  background: transparent;
  font-weight: 750;
  &:first-child {
    display: none;
  }

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

const LogoContainer = styled.div`
  margin-right: auto;
`;

const Logo = styled.img`
  width: 80%;

  @media (min-width: 740px) {
    min-width: 30px;
  }
`;

const Burger = () => (
  <svg width="30px" height="30px" fill={colors.white}>
    <rect y="7" width="30" height="2" />
    <rect y="15" width="30" height="2" />
    <rect y="23" width="30" height="2" />
  </svg>
);

const ToTop = styled.a`
  color: ${colors.white};
  font-size: 14px;
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
      bottom: 10px;
      right: 10px;
      position: fixed;
    }
  }
`;

const BurgerLink = styled.a`
  z-index: 50000;
  color: ${colors.white};
  margin: 0 20px;

  @media (min-width: 740px) {
    display: none;
  }

  rect {
    transition: 0.5s all;
  }
  &.open {
    rect:nth-child(1) {
      transform: translate(10px, 0px) rotate(45deg);
    }
    rect:nth-child(2) {
      opacity: 0;
    }
    rect:nth-child(3) {
      transform: translate(-13px, 10px) rotate(-45deg);
    }
  }
`;

const NavContainer = styled.div`
  align-items: center;
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
  }
`;

class Header extends React.Component {
  state = {
    openMenu: false
  };
  componentDidMount() {
    // console.log(
    //   "soy component did mount y me gusta flotar : ",
    //   this.state.openMenu
    // );
  }

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
        <LogoContainer>
          <Link to="/">{/* <Logo src={logo} /> */}</Link>
        </LogoContainer>

        <NavContainer className={this.state.openMenu && "active"}>
          <LinkTo onClick={this.checkMobileNav} to="/">
            {translations.header.home[language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/reel">
            {translations.header.timeline[language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/work">
            {translations.header.artists[language]}
          </LinkTo>

          <LinkTo onClick={this.checkMobileNav} to="/about">
            {translations.header.contact[language]}
          </LinkTo>

          {/* <BackToTop
            onClick={this.checkMobileNav}
            className={this.state.openMenu && "active"}
          >
            <ToTop onClick={() => smoothScroll()}>
              <span>
                <i className="fas fa-angle-up fa-4x" />
              </span>
              {translations.footer.top[this.props.language]}
            </ToTop>
          </BackToTop> */}

          <LanguageSelector />
        </NavContainer>
        <BurgerLink
          onClick={this.openMenu}
          className={this.state.openMenu && "open"}
        >
          <Burger />
        </BurgerLink>
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
