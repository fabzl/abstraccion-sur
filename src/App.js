import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

// Sections
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Artistas from "./pages/Artistas";
import ShowWork from "./pages/ShowWork";
import Intro from "./pages/Intro";

// import About from "./pages/About";

// Components
import Header from "./components/Header";
import Loader from "./components/Loader";
// import VideoPlayer from './components/VideoPlayer';
import Modal from "./components/Modal";
import Fade from "./components/Fade";
import Footer from "./components/Footer";

import { colors } from "./styles/globals";
import { fetchData } from "./redux/actions";
import { loaderLoading, contentLoaded, loaderVisible } from "./redux/actions";

const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height: 100%;
  top: 0;
  background: ${colors.white};
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    this.props.loaderLoading();
    // window.scrollTo(0, 0);
  }

  setToDestroy = props => {
    this.props.contentLoaded();
    console.log("loaded");
  };

  render() {
    if (this.props.pages.length === 0) return <Loader />;

    return (
      <Wrap {...this.props}>
        {this.setToDestroy()}
        <Loader />
        {/* <Fade in={true}>
          <Modal />
        </Fade> */}
        <Router>
          <div style={{ display: "flex", flex: 1 }}>
            <Header />

            <div style={{ flex: 1 }}>
              <Route exact path="/intro" component={Intro} />
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/" component={Home} />
              <Route exact path="/artistas" component={Artistas} />
              <Route exact path="/astistas/:link" component={ShowWork} />
            </div>
          </div>
        </Router>
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    scrollY: state.video.scrollY,
    pages: state.data.pages,
    posts: state.data.posts,
    loading: state.data.loading,
    loaded: state.loader.loaded,
    visible: state.loader.visible
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData,
    loaderLoading,
    loaderVisible,
    contentLoaded
  }
)(App);
