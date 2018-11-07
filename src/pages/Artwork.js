import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import translations from "../translations";
import { colors, colorRandomFromArray } from "../styles/globals";

// import ReactDOM from "react-dom";
// import Slider, { Range } from "rc-slider";
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import "rc-slider/assets/index.css";

import Parser from "html-react-parser";
import ProgressiveImage from "react-progressive-image";

import {
  startTimeline,
  timelineLength,
  increaseYear,
  decreaseYear,
  setYear,
  endTimeline
} from "../redux/actions";

const ArtDescriptionHolder = styled.div`
  width: 50%;
`;

const ShortLine = styled.div`
  border: 2px solid ${colors.white};
  width: 4rem;
  display: block;
  margin-bottom: 1rem;
`;

const ArtworkWrapper = styled.div`
  background: ${colors.deepblack};
  padding-top: 33vh;
`;

const CloseButton = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 3030;
  color: ${colors.white};
  &:hover {
    opacity: 0.5;
  }
`;

const LinkTo = styled(Link)`
  color: ${colors.violet};
  text-decoration: none;
  display: block;
  padding: 55px 0 45px;
  transition: all 1s;
  &:hover {
    color: ${colors.black};
  }
`;

const TimelineContainer = styled.div`
  display: grid;
  width: 80vw;
  margin: 0 auto;
  height: auto;

  max-width: 1200px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(40vw, auto);
  grid-gap: 2rem;

  @media (min-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(30vw, auto);
    grid-gap: 4rem;
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(26.66vw, auto);
    grid-gap: 6rem;
  }

  position: relative;
  background: ${colors.deepblack};
  grid-template-areas:
    "header"
    "main main"
    "section"
    "section section section section"
    "footer footer footer footer";
`;

const ModalArt = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${colors.deepblack};
  z-index: 99999;
  top: 0;
  left: 0;
  opacity: 0;
  display: none;

  &.active {
    display: block;
    transition: all 3s;
    opacity: 1;
  }
`;
const ArtObject = styled.div`
  align-self: flex-end;
  position: relative;
  height: auto;
  margin-bottom: 5vh;
  text-align: center;
  min-width: 30vh;
`;
const SectionTitle = styled.h2`
  color: ${colors.black};
  font-size: 1.5rem;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.black};
  text-align: left;
  position: fixed;
  right: 0;
  width: 10rem;
  top: 33vh;
  transform: rotateX("90deg");
`;

const ArtTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem 0;
  padding: 0;
  color: ${colors.white};
  text-align: left;
`;

const ArtDescription = styled.p`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  color: ${colors.white};
  text-align: left;

  &.autor {
    font-size: 1.8rem;
  }
  &.ano {
    font-size: 1.6rem;
    font-weight: 600;
  }
  &.tecnica {
  }
  &.dimensiones {
  }
`;

const createTimeline = props => {
  // filter data and return an array called art with the selected art.
  // and return mapped objects
  // var points = [40, 100, 1, 5, 25, 10];
  // points.sort(function(a, b){return b-a});

  let artObjects = props.dataArtwork.map(p => (
    <ArtObject key={p.id}>
      <ProgressiveImage
        style={{
          backgroundColor: colorRandomFromArray(),
          objectFit: "contain",
          position: "relative",
          transition: "all 1s",
          minHeight: "20vh",
          padding: "10vh"
        }}
        src="imagen_mediana"
        srcBig="large-image.jpg"
        placeholder="tiny-image.jpg"
      >
        {(src, loading) => (
          <img
            onClick={this.openArtworkFunction}
            style={{
              cursor: "pointer",
              backgroundColor: colorRandomFromArray(),
              objectFit: "contain",
              width: "100%",
              margin: "0 auto"
              // height: "100%"
            }}
            src={p.acf.imagen_mediana.url}
            alt={p.acf.titulo}
          />
        )}
      </ProgressiveImage>
      <ArtDescriptionHolder>
        <ArtTitle>{Parser(p.acf.titulo)}</ArtTitle>
        <ShortLine />
        <ArtDescription className="autor">{Parser(p.acf.autor)}</ArtDescription>
        <ArtDescription className="tecnica">
          {Parser(p.acf.tecnica)}
        </ArtDescription>
        <ArtDescription className="dimensiones">
          {p.acf.dimensiones}
        </ArtDescription>
        <ArtDescription className="ano">{Parser(p.acf.ano)}</ArtDescription>
      </ArtDescriptionHolder>
    </ArtObject>
  ));

  console.log("art:", artObjects);
  return artObjects;
};

//  const checkSliderPos = props => {
//    console.log("check");
//  };
//  <ul>{props.dataArtwork.map(p => <li key={p.id}>{p.name}</li>)}</ul>;

class Timeline extends React.Component {
  state = {
    openArtwork: false,
    bigImageIndex: 0
  };

  componentDidUpdate() {
    // console.log("soy component did update : ", this.props.timeline.currentYear);
    // console.dir(Sliderboy);
  }

  openArtworkFunction = key => {
    this.setState({ openArtwork: !this.state.openArtwork });
    this.setState({ activeKey: key });
    console.log("key", key);
  };

  closeArtwork = () => {
    this.setState({ openArtwork: false });
    // console.log("close Menu");
  };

  render() {
    const { language } = this.props;

    return (
      // const  = props => (
      <ArtworkWrapper>
        <SectionTitle>Artistas</SectionTitle>
        <TimelineContainer>{createTimeline(this.props)}</TimelineContainer>
        <ModalArt className={this.state.openArtWork ? "active" : ""}>
          <CloseButton onClick={this.closeVideo}>
            <i className="fas fa-times fa-3x" />
          </CloseButton>
        </ModalArt>
      </ArtworkWrapper>
    );
  }
}
function isSelectedPage(data, slug) {
  return data.slug === slug;
}

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages.filter(function(element) {
      return isSelectedPage(element, "home");
    }),
    dataContact: state.data.pages.filter(function(element) {
      return isSelectedPage(element, "contact");
    }),
    dataArtwork: state.data.artwork,
    dataArtists: state.data.artists,
    language: state.data.language,
    timeline: state.timeline
  };
};

export default connect(
  mapStateToProps,
  {
    startTimeline,
    timelineLength,
    increaseYear,
    setYear,
    decreaseYear,
    endTimeline
  }
)(Timeline);
