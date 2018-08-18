import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import translations from "../translations";
import { colors } from "../styles/globals";

import ReactDOM from "react-dom";
import Slider, { Range } from "rc-slider";
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import "rc-slider/assets/index.css";

import {
  startTimeline,
  timelineLength,
  increaseYear,
  decreaseYear,
  setYear,
  endTimeline
} from "../redux/actions";

const CurrentYearHolder = styled.h3`
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.black};
  position: fixed;
  top: 0;
  left: 0;
  margin: 12px 60px;
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

const YearContainer = styled.div`
  width: 100vw;
  border: 1px solid pink;
  position: relative;
`;

const TimelineContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll-y;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
`;
const timelineLengthValue = 50;
const timelineHeight = 50;
const timelineCellWidth = 20;
const timelineCellHeight = 12;

const ArtWork = styled.div`
  padding-top: 10vh;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
`;

const YearHolder = styled.div`
    display:flex;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    transition: all 0.3s;
}
`;

const ArtImg = styled.img`
  margin-top: 10vh;
  height: 50vh;
  line-height: 0.4em;
`;

const ArtObject = styled.div`
  width: 100vw;
`;

const ArtDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;
const YearTitle = styled.h3`
  color: ${colors.blue};
`;

const ArtTitle = styled.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
  color: ${colors.black};
`;

const ButtonYearIncrease = styled.button`
  position: fixed;
  top: 50%;
  right: 20%;
  background-color: ${colors.black};
  padding: 30px;
  z-index: 40;
`;

const ButtonYearDecrease = styled.button`
  position: fixed;
  top: 50%;
  left: 20%;
  background-color: ${colors.black};
  padding: 30px;
  z-index: 40;
`;

const Sliderboy = Slider;

const SliderHolder = styled.div`
  position: fixed;
  top: 70%;
  width: 100%;

  &.rc-slider-rail {
    opacity: 1;
    background: solid ${colors.red}!important;
  }
  &.rc-slider-track {
    height: 100vh;
  }
  &.rc-slider-handle {
  }

  &.rc-slider-step {
    background: solid ${colors.red}!important;
  }
  z-index: 500;
`;

const updateScrollPos = props => {
  console.log("upd");
};

let yearToIndex = 1912;

const isCurrentYear = (props, key) => {
  // hardcoded min Year (change if you change the min year .
  //  dont do this at home .
  let currentYear = yearToIndex;

  // console.log(
  //   key,
  //   currentYear.toString() == props.acf.ano,
  //   currentYear,
  //   props.acf.ano
  // );

  return currentYear == props.acf.ano;
};

const createArtWorkForYear = props => {
  // filter data and return an array called art with the selected art.

  let art = props.dataArtwork.filter(isCurrentYear);

  // and return mapped objects
  let artObjects = art.map(p => (
    <ArtObject key={p.id}>
      <ArtImg
        src={p.acf.imagen_grande.sizes.small}
        alt=""
        className="img-responsive"
      />
      <ArtTitle>{p.acf.titulo}</ArtTitle>
      <ArtDescription>{p.acf.ano}</ArtDescription>
      <ArtDescription>{p.acf.artista}</ArtDescription>
      <ArtDescription>{p.acf.tecnica}</ArtDescription>
      <ArtDescription>{p.acf.dimensiones}</ArtDescription>
    </ArtObject>
  ));

  console.log("art:", artObjects);
  return artObjects;
};
const createTimeline = props => {
  console.log("timeLine", props.timeline.minYear, props.timeline.maxYear);

  let years = [];

  // Outer loop to create parent
  for (let i = props.timeline.minYear; i <= props.timeline.maxYear; i++) {
    let children = [];
    //Inner loop to create children
    // let artObj = props.dataArtwork[i - props.timeline.minYear];
    let artObj = props.dataArtwork.map(p => p.acf.ano == i);

    children.push(
      <ArtWork key={i} className={i}>
        {/* <YearTitle>{i}</YearTitle> */}
        {(yearToIndex = i)}
        {createArtWorkForYear(props)}
      </ArtWork>
    );
    //Create the parent and add the children
    years.push(
      <YearContainer className="mainholder" key={i}>
        {children}
      </YearContainer>
    );
  }
  return years;
};

// const checkSliderPos = props => {
//   console.log("check");
// };
// <ul>{props.dataArtwork.map(p => <li key={p.id}>{p.name}</li>)}</ul>;

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

  handleChange = (sliderValues, state) => {
    // this.setState({ sliderValues });
    console.log(
      "TESTER BOT",
      sliderValues,
      "currentYear",
      this.props.timeline.currentYear,
      "state"
      // state
    );

    this.setState({ currentYear: sliderValues + this.props.timeline.minYear });
  };

  render() {
    const style = {
      transform:
        "translateX(-" +
        (this.props.timeline.currentYear - this.props.timeline.minYear) *
          this.state.sliderSpeed +
        "px)"
    };
    const { sliderValues } = this.state;
    return (
      // const  = props => (
      <TimelineContainer>
        <CurrentYearHolder>{this.props.timeline.currentYear}</CurrentYearHolder>
        <SliderHolder>
          <Sliderboy
            min={0}
            max={this.props.timeline.timelineLength}
            defaultValue={0}
            onChange={this.handleChange}
            className={"slido"}
          />
          {/* <Range /> */}
        </SliderHolder>
        <YearHolder style={style}>
          {createTimeline(this.props, style)}
        </YearHolder>

        <ButtonYearIncrease onClick={this.props.increaseYear}>
          increase
        </ButtonYearIncrease>
        <ButtonYearDecrease onClick={this.props.decreaseYear}>
          decrease
        </ButtonYearDecrease>
      </TimelineContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[3].acf,
    dataContact: state.data.pages[0].acf,
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
