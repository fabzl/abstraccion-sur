import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import translations from "../translations";
import { colors, colorRandomFromArray } from "../styles/globals";

import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";
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

// const ArtworkHolder = styled.div`
//   display: grid;
// `;

// const CurrentYearHolder = styled.h3`
//   font-weight: 700;
//   line-height: 1.2em;
//   font-size: 2.9rem;
//   font-family: "FuturaBold", "Futura", "Verdana";
//   text-transform: uppercase;
//   color: ${colors.black};
//   position: fixed;
//   top: 0;
//   left: 0;
//   margin: 12px 60px;
// `;

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
  width: 95vw;
  margin: 10vh auto;
  height: auto;
  flex-direction: auto-flow;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  position: relative;
  background: ${colors.deepblack};
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;
// const ArtWork = styled.div`
//   padding-top: 10vh;
//   width: 90%;
//   height: auto;
//   /* border: 1px solid red; */
//   display: flex;
//   align-items: center;
// `;

// const YearHolder = styled.div`
//     display:flex;
//     top: 0;
//     left: 0;
//     padding: 0;
//     margin: 0;
//     transition: all 0.3s;
// }
// `;

// const ArtImg = styled.img`
//   object-fit: contain;
//   line-height: 0.4em;
//   height: auto;
//   position: relative;
//   width: 84vw;
//   margin-bottom: 3vh;
// `;

const ArtObject = styled.div`
  /* border: 1px solid green; */
  position: relative;
  height: auto;
  margin: 0 auto;

  & img {
    object-fit: contain;
  }
`;

const ArtDescription = styled.p`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  color: ${colors.black};
`;
// const YearTitle = styled.h3`
//   color: ${colors.blue};
// `;

const ArtTitle = styled.p`
  font-size: 1.8rem;
  margin: 0;
  padding: 0;
  color: ${colors.black};
`;

// const ButtonYearIncrease = styled.button`
//   position: fixed;
//   top: 50%;
//   right: 20%;
//   background-color: ${colors.black};
//   padding: 30px;
//   z-index: 40;
// `;

// const ButtonYearDecrease = styled.button`
//   position: fixed;
//   top: 50%;
//   left: 20%;
//   background-color: ${colors.black};
//   padding: 30px;
//   z-index: 40;
// `;

// const Sliderboy = Slider;

// const SliderHolder = styled.div`
//   position: fixed;
//   top: 70%;
//   width: 100%;

//   &.rc-slider-rail {
//     opacity: 1;
//     background: solid ${colors.red}!important;
//   }
//   &.rc-slider-track {
//     height: 100vh;
//   }
//   &.rc-slider-handle {
//   }

//   &.rc-slider-step {
//     background: solid ${colors.red}!important;
//   }
//   z-index: 500;
// `;

// const updateScrollPos = props => {
//   console.log("upd");
// };

// let yearToIndex = 1912;

// const isCurrentYear = (props, key) => {
//   // hardcoded min Year (change if you change the min year .
//   //  dont do this at home .
//   let currentYear = yearToIndex;

//   // console.log(
//   //   key,
//   //   currentYear.toString() == props.acf.ano,
//   //   currentYear,
//   //   props.acf.ano
//   // );

//   return currentYear == props.acf.ano;
// };

const createTimeline = props => {
  // filter data and return an array called art with the selected art.
  // and return mapped objects

  let artObjects = props.dataArtwork.map(p => (
    <ArtObject key={p.id}>
      <ProgressiveImage
        style={{
          backgroundColor: colorRandomFromArray(),
          objectFit: "contain",
          position: "relative",
          transition: "all 1s"
        }}
        src="large-image.jpg"
        placeholder="tiny-image.jpg"
      >
        {(src, loading) => (
          <img
            style={{
              backgroundColor: colorRandomFromArray(),
              objectFit: "contain",
              width: "100%"
              // height: "100%"
            }}
            src={p.acf.imagen_pequena.url}
            alt={p.acf.titulo}
          />
        )}
      </ProgressiveImage>
      <ArtTitle>{p.acf.titulo + " - " + p.acf.autor}</ArtTitle>
      <ArtDescription>{p.acf.ano}</ArtDescription>
      <ArtDescription>{p.acf.autor}</ArtDescription>
      <ArtDescription>{p.acf.tecnica}</ArtDescription>
      <ArtDescription>{p.acf.dimensiones}</ArtDescription>
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
    sliderSpeed: 300,
    value: 0,
    startYear: this.props.timeline.minYear,
    endYear: this.props.timeline.maxYear,
    currentYear: this.props.timeline.currentYear,
    timeLinePosition:
      this.props.timeline.currentYear - this.props.timeline.minYear
  };

  componentDidUpdate() {
    // console.log("soy component did update : ", this.props.timeline.currentYear);
    // console.dir(Sliderboy);
  }

  render() {
    const { width } = this.props;

    return (
      // const  = props => (
      <TimelineContainer>{createTimeline(this.props)}</TimelineContainer>
    );
  }
}
function isSelectedPage(data, slug) {
  // // console.log(data.slug, "data found", slug);
  // if (data.slug === slug) {
  //   console.log("isSelected: ", slug, data.slug === slug);
  // }
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
