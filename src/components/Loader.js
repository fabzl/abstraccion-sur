import React from "react";
import styled from "styled-components";
import logo from "../img/logo_loader.svg";
import { colors, slideOut, colorsBGanimation } from "../styles/globals";
import { growOld } from "../styles/globals";
import { connect } from "react-redux";

const Loader = props => {
  // console.log("visible:", props.visible, "loaded", props.loaded);
  const LoaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    /* display: ${props.visible ? "grid" : "none"}; */
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(7, 1fr);
    width: 100vw;
    height: 100vh;
    background: ${colors.white};
    align-items: center;

    animation:  ${colorsBGanimation} 10s,${props.loaded ? slideOut : ""};

    animation-duration: 800ms;
    animation-fill-mode: forwards;

    img {
      width: 100%;
      height: auto;
      cursor: pointer;
      grid-column:4 /4;
      grid-row:2/2;
      flex-grow: 2;
      display: flex;
      align-self: center;
      animation: ${growOld};
      animation-duration: 3000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate-reverse;
    }
  `;
  return (
    <LoaderContent>
      <img src={logo} alt="loaderContent" />
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
