


import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "../img/logo_footer.svg";
import translations from "../translations";
import { colors } from "../styles/globals";
// import Social from "./Social";
import { NavLink } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";
import FooterBG from "../img/footer_bg.svg";

// import { BorderHorizontal, Button } from "../pages/Home";

// import { Link, NavLink } from "react-router-dom";

const FooterHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Addresses = styled.div`
  line-height: 1;
  letter-spacing: 0.1rem;
`;

const AdressLine = styled.p`
  white-space: nowrap;
`;
const ButtonWrap = styled.div`
  width: 100%;
  padding: 9rem;

  @media (max-width: 400px) {
    padding: 12rem;
  }
`;

const Button = styled.button`
  color: ${colors.red};
  text-decoration: none;
  border: 2px solid ${colors.red};
  background: ${colors.white};
  padding: 2rem 3rem;
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  z-index: 500;
  letter-spacing: 0.1rem;
  transition: all 0.2s;
  cursor: pointer;
  margin: 0 auto;
  display: block;

  &:hover {
    background: ${colors.red};
    color: ${colors.white};
  }
`;

const NavContainer = styled.div`
  z-index: 900;
  flex-direction: column;
  display: flex;
  z-index: 3000;
  text-align: left;
  justify-content: space-evenly;
`;

const CentralColumn = styled.div`
  width: 100%;
`;
const Nav = styled.nav`
  /* position: fixed; */
  z-index: 900;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
`;

const Copyright = styled.p`
  color: ${colors.red};
  text-decoration: none;
  margin: 0;
  margin-top: 1rem;
  font-size: 1.2rem;
  white-space: nowrap;

  @media (max-width: 400px) {
    display: none;
  }
  @media (min-width: 800px) {
    white-space: nowrap;
  }
`;

// const MidColumn = styled.div`
//   width: 100%;
//   border: 1px solid pink;
// `;

const RightColumn = styled.div`
  flex: 3;
  text-align: right;
  color: ${colors.red};
  display: flex;
  justify-content: space-between;
  align-items: right;
  flex-direction: column;
`;

const LeftColumn = styled.div`
  justify-content: space-between;
  color: ${colors.red};
  /* max-width: 25%; */
  font-size: 1.3rem;
  letter-spacing: 4px;
  line-height: 34px;
  padding-left: 2px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  max-width: 300px;
`;

const P = styled.p`
  color: ${colors.red};
  text-decoration: none;
  margin: 0px;
  margin-top: 10px;
`;

const Logo = styled.img`
  width: 18rem;

  @media (min-width: 740px) {
    min-width: 3rem;
  }
`;

const Wrap = styled.footer`
  z-index: 50;
  padding: 0 8rem 0 8rem;
  min-height: 25rem;
  display: block;
  padding-bottom: 2rem;
  overflow: hidden;
  background-size: 60%;
  background-position: center bottom;
  background-image: url(${FooterBG});
  background-repeat: no-repeat;

  @media (max-width: 740px) {
    padding-bottom: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

const BackToTop = styled.div`
  flex: 1;
  text-align: left;
  position: absolute;
  left: -4.5rem;
  z-index: 6001;
  bottom: -2.5rem;
`;

const LinkA = styled.a`
  font-weight: 500;
  color: ${colors.red};
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  transition: 1s all;
  cursor: pointer;
  &:hover {
    color: ${colors.darkred};
  }
`;

const LinkTo = styled(NavLink)`
  font-weight: 500;
  color: ${colors.red};
  text-decoration: none;
  font-size: 10rem;
  letter-spacing: 0.3rem;
  /* white-space: nowrap; */
  transition: 1s all;
  cursor: pointer;
  &:hover {
    color: ${colors.darkred};
  }

  &.footerNav {
    align-self: flex-start;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 800;

    @media (min-width: 800px) {
      margin-bottom: 3rem;
    }
  }

  &.workForUs {
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    display: none;

    @media (min-width: 600px) {
      margin-bottom: 3rem;
      display: flex;
    }

    &:after {
      position: absolute;
      letter-spacing: 0;
      content: "______________";
      transform: translate(220%, 1rem);
    }
  }
`;

const LinkToB = styled.a`
  font-weight: 500;
  color: ${colors.red};
  text-decoration: none;
  font-size: 10rem;
  letter-spacing: 0.3rem;
  /* white-space: nowrap; */
  transition: 1s all;
  cursor: pointer;
  &:hover {
    color: ${colors.darkred};
  }

  &.footerNav {
    align-self: flex-start;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 800;

    @media (min-width: 800px) {
      margin-bottom: 3rem;
    }
  }

  &.workForUs {
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    display: none;

    @media (min-width: 600px) {
      margin-bottom: 3rem;
      display: flex;
    }

    &:after {
      position: absolute;
      letter-spacing: 0;
      content: "______________";
      transform: translate(150%, 1rem);
    }
  }
`;

const ToTop = styled.a`
  color: ${colors.red};
  font-size: 10px;
  display: inline-block;
  overflow: hidden;
  font-weight: 200;
  text-align: center;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;

  > span {
    display: block;
  }

  transition: 1s all;
  &:hover {
    color: ${colors.darkred};
  }
`;

// export const handleScrollToElement = event => {
//   console.log(this);
//   // const tesNode = ReactDOM.findDOMNode(this.refs.test);
//   // if (some_logic) {
//   // Footer.scrollIntoView();
//   // }
// };

// scrollToDomRef = () => {
//   const domNode = ReactDOM.findDOMNode(this.domRef.current);
//   domNode.scrollIntoView();
// };

export const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 1.2);
  }
};

function isSelectedPageFooter(dataFooterIn) {
  // console.log(dataFooterIn.slug, "datahome");
  // if (dataFooterIn.slug === "footer") {
  //   console.log("isSelectedPageFooter: ", dataFooterIn.slug === "footer");
  // }
  return dataFooterIn.slug === "footer";
}

const Footer = props => (
  <div>
    <Wrap>
      <ButtonWrap>
        {/* <LinkTo className="footerNav" to="/schedule_a_meeting">
          <Button>{props.dataFooter[0].acf.cta_schedule_a_meeting}</Button>
        </LinkTo> */}
        <LinkA
          className="footerNav"
          href={
            "mailto:" +
            props.dataFooter[0].acf.mail_direcction_3 +
            "?subject=Contacto%20desde%20Eniax"
          }
        >
          <Button>{props.dataFooter[0].acf.cta_schedule_a_meeting}</Button>
        </LinkA>
      </ButtonWrap>
      <FooterHeaderWrap>
        <Router>
          <Route to="/">
            <Logo src={logo} />
          </Route>
        </Router>
        {/* <LinkTo className="footerNav workForUs" to="/work_with_us">
          {props.dataFooter[0].acf.work_with_us}
        </LinkTo> */}

        <LinkToB
          className="footerNav workForUs"
          href={
            "mailto:" +
            props.dataFooter[0].acf.mail_direcction_3 +
            "?subject=Contacto%20desde%20Eniax"
          }
        >
          {props.dataFooter[0].acf.work_with_us}
        </LinkToB>
      </FooterHeaderWrap>
      <Content>
        <LeftColumn>
          <Nav>
            <NavContainer>
              <LinkTo className="footerNav" to="/">
                {translations.header.home[props.language]}
              </LinkTo>
              <LinkTo className="footerNav" to="/about">
                {translations.header.about[props.language]}
              </LinkTo>

              {/* <LinkTo className="footerNav" to="/schedule_a_meeting">
                {translations.header.contact[props.language]}
              </LinkTo> */}
              <LinkToB
                className="footerNav"
                href={
                  "mailto:" +
                  props.dataFooter[0].acf.mail_direcction_3 +
                  "?subject=Contacto%20desde%20Eniax"
                }
              >
                {translations.header.contact[props.language]}
              </LinkToB>
            </NavContainer>
          </Nav>
          {/* <Text>{props.dataFooter[0].acf.final_description_text}</Text> */}
          <Copyright>©{new Date().getFullYear()} ENIAX TECHNOLOGIES</Copyright>
        </LeftColumn>
        <CentralColumn />

        <RightColumn>
          <P>{props.dataFooter[0].acf.name_contact_1}</P>
          <LinkA
            to=""
            href={
              "mailto:" +
              props.dataFooter[0].acf.mail_direcction_1 +
              "?subject=Contacto%20desde%20Eniax"
            }
          >
            {props.dataFooter[0].acf.mail_direcction_1}
          </LinkA>
          <P>{props.dataFooter[0].acf.name_contact_2}</P>
          <LinkA
            href={
              "mailto:" +
              props.dataFooter[0].acf.mail_direcction_2 +
              "?subject=Contacto%20desde%20" +
              props.dataFooter[0].acf.mail_direcction_2
            }
          >
            {props.dataFooter[0].acf.mail_direcction_2}
          </LinkA>
          <P>{props.dataFooter[0].acf.name_contact_3}</P>
          <LinkA
            href={
              "mailto:" +
              props.dataFooter[0].acf.mail_direcction_3 +
              "?subject=Contacto%20desde%20" +
              props.dataFooter[0].acf.mail_direcction_3
            }
          >
            {props.dataFooter[0].acf.mail_direcction_3}
          </LinkA>
          <BackToTop>
            <ToTop onClick={() => smoothScroll()}>
              <span>
                <i className="fas fa-angle-up fa-4x" />
              </span>
            </ToTop>
          </BackToTop>

          <Addresses>
            <AdressLine>{props.dataFooter[0].acf.addressline1}</AdressLine>
            <AdressLine>{props.dataFooter[0].acf.addressline2}</AdressLine>
            <AdressLine>{props.dataFooter[0].acf.addressline3}</AdressLine>
            <AdressLine>{props.dataFooter[0].acf.addressline4}</AdressLine>
          </Addresses>
        </RightColumn>
      </Content>
    </Wrap>
  </div>
);

const mapStateToProps = state => {
  return {
    language: state.data.language,
    dataFooter: state.data.pages.filter(isSelectedPageFooter)
  };
};

export default connect(mapStateToProps)(Footer);
