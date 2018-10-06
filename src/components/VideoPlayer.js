import React, { Component } from "react";
import styled from "styled-components";
// import Player from '@vimeo/player';
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { stopVideo } from "../redux/actions";
import { colors, tvOn } from "../styles/globals";

const Modal = styled.div`
  display: ${props => (props.showVideo ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Holder = styled.div`
  top: ${props => (props.showHolder ? 0 : "50%")};
  bottom: ${props => (props.showHolder ? 0 : "50%")};
  /* left: 100px;
  right: 100px; */
  position: absolute;
  overflow: hidden;
  transition: top 0.5s, bottom 0.5s, opacity 0.3s;
  transition-timing-function: cubic-bezier(0.3, 0, 1, 0.3),
    cubic-bezier(0.3, 0, 1, 0.3), ease;
  z-index: 10;
  transform: translateZ(0);
  opacity: 1;
`;

const Responsive = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  max-width: 175vh;
  padding-bottom: ${props => (props.showVideo ? 56.25 : 50)}%;
`;

const Player = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  /* width: 100%; */
  height: 100%;
  z-index: 0;
  transform: translateZ(0);
  transition: left 0.3s;
`;

const Close = styled.a`
  display: inline-block;
  font: normal normal normal 14px/1 "icons";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 2.6%;
  padding: 2px;
  font-size: 62px;
  color: ${colors.white};
  text-decoration: none;
  margin: -26vw -0.5em 0;
  opacity: ${props => (props.showVideo ? 1 : 0)};
  transition: opacity 0.3s 0.6s;
  z-index: 20;
  &::before {
    /* content: '\e90f'; */
  }
`;

class VideoPlayer extends Component {
  state = {
    showHolder: false,
    playing: true
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const delay = (func, ms) =>
      setTimeout(async () => {
        func();
      }, ms);

    if (!prevProps.showVideo && this.props.showVideo) {
      await delay(() => this.setState({ showHolder: true }), 300);
      await delay(() => this.setState({ playing: true }), 1000);
    }
  };

  componentDidMount() {
    // this.player = new Player(this.iframe);
  }

  closeVideo = async () => {
    this.setState({ showHolder: false, playing: false });
    this.props.stopVideo();
  };

  videoEnd = () => {
    console.log("videoEND");
  };

  videoReady = () => {
    console.log("videoReady");
  };

  render() {
    return (
      <Modal showVideo={this.props.showVideo} onClick={this.closeVideo}>
        <Close showVideo={this.props.showVideo} />

        <Holder showHolder={this.state.showHolder} onClick={this.closeVideo}>
          <Responsive
            showVideo={this.state.showVideo}
            onClick={this.closeVideo}
          >
            <ReactPlayer
              url={this.props.url}
              playing={this.state.playing}
              wrapper={Player}
              onEnded={this.videoEnd}
              onReady={this.videoReady}
            />
          </Responsive>
        </Holder>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    url: state.video.url
  };
};

export default connect(
  mapStateToProps,
  { stopVideo }
)(VideoPlayer);
