import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import translations from "../translations";
import { colors } from "../styles/globals";
import {
  startTimeline,
  timelineLength,
  increaseYear,
  decreaseYear,
  endTimeline
} from "../redux/actions";

const H3 = styled.h3`
  margin-top: 10%;
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "poppins";
  text-transform: uppercase;
  color: ${colors.black};
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
  width: 100vw;
  heigth: 100vh;
  overflow: scroll-y;
`;
const timelineLengthValue = 50;
const timelineHeight = 50;
const timelineCellWidth = 20;
const timelineCellHeight = 12;

const TimeGrid = styled.div`
  margin-top: 10%;
  font-weight: 700;
  border: 1px solid red;
  width: ${timelineLengthValue * timelineCellWidth + "vmin"};
  height: 100vh;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.violet};
  display: grid;

  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(${timelineLengthValue},${timelineCellWidth +
  "vmin"});
  grid-template-rows: repeat(${timelineCellHeight},${timelineCellWidth +
  "vmin"});
  /* grid-column-gap: <line-size>;
  grid-row-gap: <line-size>; */
}

`;

const Timeline = props => (
  <TimegridContainer>
    <TimeGrid>
      <H3>{props.timeline.currentYear}</H3>
      <button onClick={props.increaseYear}>increase</button>
      <button onClick={props.decreaseYear}>decrease</button>
    </TimeGrid>
  </TimegridContainer>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[3].acf,
    dataContact: state.data.pages[0].acf,
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
    decreaseYear,
    endTimeline
  }
)(Timeline);
