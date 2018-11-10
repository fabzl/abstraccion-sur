import React from "react";
import styled from "styled-components";
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

import { colors, slideOut, colorsBGanimation } from "../styles/globals";
import { growOld } from "../styles/globals";
import { connect } from "react-redux";

const LogoParts = styled.div``;

const Loader = props => {
  // console.log("visible:", props.visible, "loaded", props.loaded);
  const LoaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    /* display: ${props.visible ? "grid" : "none"}; */
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(8, 1fr);
    width: 100vw;
    height: 100vh;
    background: ${colors.white};
    align-items: center;
    /* animation:  ${colorsBGanimation} 10s,${props.loaded ? slideOut : ""}; */
    animation:  ${props.loaded ? slideOut : ""};
    animation-duration: 800ms;
    animation-fill-mode: forwards;

    img {
      mix-blend-mode: multiply;
      width: 100%;
      height: auto;
      cursor: pointer;
      grid-column:3/7;
      grid-row:4/4;
      flex-grow: 2;
      display: flex;
      align-self: center;
      /* animation: ${growOld}; */
      animation-duration: 3000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
    }
  `;
  return (
    <LoaderContent>
      {/* <img src={Triangulo} alt="triangulo" />
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
      <img src={R14} alt="r" /> */}
    </LoaderContent>
  );
};

const mapStateToProps = state => {
  return {
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(mapStateToProps)(Loader);
