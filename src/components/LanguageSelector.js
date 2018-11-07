import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { changeLang } from "../redux/actions";
import { colors } from "../styles/globals";

const H2 = styled.div`
  z-index: 3002;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: ${colors.black};
  padding: 0.5rem;
  font-size: 1.2rem;
  padding-top: 0.8rem;
  transition: 0.7s all;
  position: fixed;
  top: 66vh;
  right: 4rem;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
    border: none;
  }
  &:both {
    border-top: none;
  }
`;

// () => props.changeLang()
const LanguageSelector = props => (
  <H2 onClick={() => props.changeLang()}>
    {props.language === "en" ? "español" : "english"}
  </H2>
);

const mapStateToProps = state => {
  return {
    language: state.data.language
  };
};

export default connect(
  mapStateToProps,
  { changeLang }
)(LanguageSelector);
