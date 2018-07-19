import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { changeLang } from "../redux/actions";
import { colors } from "../styles/globals";

const H2 = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: ${colors.black};
  /* border: 1px solid ${colors.black}; */
  padding: 5px;
  min-width: 32px;
  padding-top: 8px;
  margin-right: 50px;
  transition: 0.7s all;
  
  position: fixed;
  top: 20px;
  right: 20px;
  
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
