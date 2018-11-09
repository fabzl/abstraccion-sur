import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import translations from "../translations";
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
  padding-top: 22vh;
  padding-bottom: 10vh;
`;

const CloseButton = styled.div`
  cursor:pointer;

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
  transition: all 1.2s;
  transform:translateY(-100%);
  opacity: 0;
  display:block;
     width: 100vw;

  &.active {
    display: flex;
    opacity: 1;
    transform:translateY(0);
  }
`;
const ArtObject = styled.div`
  align-self: flex-end;
  position: relative;
  height: auto;
  margin-bottom: 5vh;
  text-align: center;
  min-width: 30vh;
  &.big {
    padding-top:5vh;
    width: 100vw;
    align-self: center;
  }
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

const createTimeline = (props, thisGuy) => {
  // filter data and return an array called art with the selected art.
  // and return mapped objects
  // var points = [40, 100, 1, 5, 25, 10];
  // points.sort(function(a, b){return b-a});

  let artObjects = props.dataArtwork.map((p, i) => (
    <ArtObject
      key={p.id}
      className={i + ""}
      onClick={thisGuy.openArtworkFunction}
    >
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
           {props.language === "es"
                ? Parser(p.acf.tecnica)
                : Parser(p.acf.tecnique)} 
        </ArtDescription>
        <ArtDescription className="dimensiones">
          {p.acf.dimensiones}
        </ArtDescription>
        <ArtDescription className="ano">{Parser(p.acf.ano)}</ArtDescription>
      </ArtDescriptionHolder>
    </ArtObject>
  ));

  // console.log("art:", artObjects);
  return artObjects;
};

class Timeline extends React.Component {
  state = {
    openArtwork: false,
    bigImageIndex: 0,
    selectedURL: "",
    selectedTitulo: "",
    selectedAutor: "",
    selectedDimensiones: "",
    selectedTecnica: "",
    selectedTecnique: "",
    selectedAno: ""
  };

  componentDidUpdate() {
    // console.log("soy component did update : ", this.props.timeline.currentYear);
  }

  openArtworkFunction = e => {
    this.setState({ openArtwork: true });

    let element = e.currentTarget;
    let artKey = element.className.toString().replace(/\D+/g, "");
    let artOBj = this.props.dataArtwork[artKey];
   
    this.setState({ selectedURL: artOBj.acf.imagen_grande.url });
    this.setState({ selectedTitle: artOBj.acf.titulo });
    this.setState({ selectedAutor: artOBj.acf.autor });
    this.setState({ selectedDimensiones: artOBj.acf.dimensiones });
    this.setState({ selectedTecnica: artOBj.acf.tecnica });

    this.setState({ selectedTecnica: artOBj.acf.tecnique });
    this.setState({ selectedAno: artOBj.acf.ano });
  };

  closeArtwork = () => {
    this.setState({ openArtwork: false });
    console.log("close Menu");
  };

  render() {
    const { language } = this.props;
    return (
      <ArtworkWrapper>
        <SectionTitle> {translations.header.timeline[language]}</SectionTitle>
        <TimelineContainer>
          {createTimeline(this.props, this)}
        </TimelineContainer>
        <ModalArt className={[this.state.openArtwork ? "active" : ""]}>
          <CloseButton onClick={this.closeArtwork}>
            <i className="fas fa-times fa-3x" />
          </CloseButton>

          <ArtObject className="big">
            <ProgressiveImage
              style={{
                backgroundColor: colorRandomFromArray(),
                objectFit: "contain",
                position: "relative",
                transition: "all 1s",
               
                maxWidth: "80vw"
              }}
              src="large-image.jpg"
              placeholder="tiny-image.jpg"
            >
              {(src, loading) => (
                <img
                  style={{
                    cursor: "pointer",
                    backgroundColor: colorRandomFromArray(),
                    objectFit: "contain",
                    maxWidth: "80vw",
                    maxHeight: "80vh",
                    margin: "0 auto"
                  }}
                  src={Parser(this.state.selectedURL)}
                  alt={Parser(this.state.selectedTitulo)}
                />
              )}
            </ProgressiveImage>
            <ArtDescriptionHolder>
              <ArtTitle>{Parser(this.state.selectedTitulo)}</ArtTitle>
              <ShortLine />
              <ArtDescription className="autor">
                {Parser(this.state.selectedAutor)}
              </ArtDescription>
              <ArtDescription className="tecnica">
            
                {this.props.language === "es"
                ? Parser(this.state.selectedTecnica)
                : Parser(this.state.selectedTecnique)}
              </ArtDescription>
              <ArtDescription className="dimensiones">
                {Parser(this.state.selectedDimensiones)}
              </ArtDescription>
              <ArtDescription className="ano">
                {Parser(this.state.selectedAno)}
              </ArtDescription>
            </ArtDescriptionHolder>
          </ArtObject>
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
)(Timeline, SectionTitle);
