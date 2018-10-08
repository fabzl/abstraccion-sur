import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

import translations from "../translations";
import { colors } from "../styles/globals";

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
      fill: ${colors.white};
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
  height: 92vh;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  overflow: hidden;

  &.active {
    position: fixed;
    width: 40vw;
    z-index: 3000;
    background: rgba(0, 1, 40, 0.85);
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
