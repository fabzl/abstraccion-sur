import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { stopVideo } from "../redux/actions";
// import { enableScroll, disableScroll } from "../helpers";

import { tvOn } from "../styles/globals";

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;

  z-index: 9999; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  /* transition: opacity 300ms ease-in-out;
  opacity: 0; */
`;

const Content = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  width: 100%;
  height: 100%; */
  border: 1px solid white;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${tvOn} 2s forwards;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ddd;
  &:hover {
    opacity: 0.5;
  }
`;

class Modal extends Component {
  componentDidMount() {
    // disableScroll();
  }

  componentWillUnmount() {
    // enableScroll();
    // window.scrollTo(0, this.props.scrollY);
  }

  videoEnd = () => {
    console.log("videoEND");
  };

  render() {
    // <ReactPlayer url="https://vimeo.com/247535876" playing={true} />
    return (
      <Overlay {...this.props}>
        <Content>
          <CloseButton onClick={this.props.stopVideo}>
            <i className="fas fa-times fa-3x" />
          </CloseButton>

          <ReactPlayer
            url={this.props.url}
            playing={true}
            autoPlay
            controls
            width="100%"
            height="100vmin"
            onEnded={this.videoEnd}
          />
        </Content>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.video.url
  };
};

export default connect(
  mapStateToProps,
  { stopVideo }
)(Modal);
