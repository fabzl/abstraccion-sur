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

const TimegridContainer = styled.div`
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

const TimeGrid = styled.li`
  padding: 10%;
  font-weight: 700;
  border: 1px solid red;
  /* width: ${timelineLengthValue * timelineCellWidth + "vmin"}; */
  height: 100vh;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.violet};
  display: inline-block;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  /* grid-template-columns: repeat(${timelineLengthValue},${timelineCellWidth +
  "vmin"});
  grid-template-rows: repeat(${timelineCellHeight},${timelineCellWidth +
  "vmin"});
  */
  /* grid-column-gap: <line-size>;
  grid-row-gap: <line-size>; */
}

`;

const ArtHolder = styled.ul`
    display:flex;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    transition: all 0.3s;
}
`;

const ArtImg = styled.img`
  margin-top:10vh;
  height:50vh;
  line-height: .4em;
}
`;

const ArtDescription = styled.p`
  font-size: 0.6rem;
  margin: 0;
  padding: 0;
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
  width: 80%;
  z-index: 500;
`;

const updateScrollPos = props => {
  console.log("upd");
};

// const checkSliderPos = props => {
//   console.log("check");
// };
// <ul>{props.dataArtwork.map(p => <li key={p.id}>{p.name}</li>)}</ul>;

class Timeline extends React.Component {
  state = {
    sliderSpeed: 300,
    value: 0
  };

  componentDidUpdate() {
    console.log("soy component did update : ", this.props.timeline.currentYear);
    console.dir(Sliderboy);
  }

  handleChange = sliderValues => {
    // this.setState({ sliderValues });
    console.log("I work", sliderValues);
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
      <TimegridContainer>
        <CurrentYearHolder>{this.props.timeline.currentYear}</CurrentYearHolder>
        <SliderHolder>
          <Sliderboy
            min={0}
            max={this.props.timeline.timelineLength}
            defaultValue={0}
            onChange={this.handleChange}
            className={"slido"}
          />
          <Range />
        </SliderHolder>
        <ArtHolder style={style}>
          {this.props.dataArtwork.map(p => (
            <TimeGrid key={p.id}>
              <ArtImg
                src={p.acf.imagen_grande.sizes.large}
                alt=""
                className="img-responsive"
              />
              <ArtDescription>{p.acf.ano}</ArtDescription>
              <ArtDescription>{p.acf.titulo}</ArtDescription>
              <ArtDescription>{p.acf.artista}</ArtDescription>
              <ArtDescription>{p.acf.tecnica}</ArtDescription>
              <ArtDescription>{p.acf.dimensiones}</ArtDescription>
            </TimeGrid>
          ))}
        </ArtHolder>;
        <ButtonYearIncrease onClick={this.props.increaseYear}>
          increase
        </ButtonYearIncrease>
        <ButtonYearDecrease onClick={this.props.decreaseYear}>
          decrease
        </ButtonYearDecrease>
      </TimegridContainer>
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
