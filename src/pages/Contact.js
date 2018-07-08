import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import laurel from "../img/laurels_black.svg";
import translations from "../translations";
import logo from "../img/logo_loader.svg";

import { colors } from "../styles/globals";

const Wrap = styled.div`
  height: 50vh;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Acerca = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background: ${logo};
`;

const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;
  letter-spacing: 130%;
  text-align: center;
  font-size: 24px;
  padding: 0 10%;
  @media (min-width: 520px) {
    font-size: 32px;
    padding: 0;
  }
  @media (min-width: 720px) {
    font-size: 36px;
  }

  &.dark {
    color: ${colors.black};
  }
`;

const Laurel = styled.div`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0;
  color: ${colors.black};
  max-width: 180px;
  min-height: 100px;
  text-align: center;
  overflow: visible;
  position: relative;
  background: url(${laurel}) no-repeat;
  background-size: cover;
  padding: 25px 30px;
  &:first-child {
    display: flex;
    align-items: center;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 430px;
`;

const Image = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Contact = props => {
  const { data, language } = props;

  const LogoParts = styled.div``;

  return (
    <div>
      <LogoParts>
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.pages[1].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(About);
