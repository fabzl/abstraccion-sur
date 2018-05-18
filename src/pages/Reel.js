import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { fadeIn } from "../styles/globals";

// import { enableScroll, disableScroll } from "../helpers";
import { stopVideo } from "../redux/actions";
// import { colors } from "../styles/globals";
import { Link } from "react-router-dom";

import { colors, tvOn } from "../styles/globals";

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 9999; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  animation: 800ms ease-in-out;
  animation: ${fadeIn};
`;

const Content = styled.div`
  display: block;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${tvOn} 2s forwards;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 13px;
  top: 20px;
  color: ${colors.white};
  &:hover {
    opacity: 0.5;
  }
`;

class Reel extends Component {
  componentDidMount() {
    // disableScroll();
  }

  componentWillUnmount() {
    // enableScroll();
    // window.scrollTo(0, this.props.scrollY);
  }

  render() {
    return (
      <Overlay {...this.props}>
        <Content>
          <Link to="/">
            <CloseButton>
              <i className="fas fa-times fa-3x" />
            </CloseButton>
          </Link>

          <ReactPlayer
            url={this.props.dataHome.reel_url}
            playing={true}
            autoPlay
            controls
            width="100%"
            height="100%"
            config={{
              vimeo: {
                onReady: true,
                autoplay: true
              }
            }}
          />
        </Content>
      </Overlay>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[3].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps, { stopVideo })(Reel);
