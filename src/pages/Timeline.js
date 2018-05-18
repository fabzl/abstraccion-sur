import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import translations from "../translations";
import { colors } from "../styles/globals";
import {
  startTimeline,
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
  color: ${colors.white};
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  padding: 55px 0 45px;
  transition: all 1s;
  &:hover {
    color: ${colors.black};
  }
`;

const Timeline = props => (
  <div>
    {/* {console.log(props)}; */}
    <H3>{props.timeline.currentYear}</H3>
    <button onClick={props.increaseYear}>increase</button>
    <button onClick={props.decreaseYear}>decrease</button>
  </div>
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

export default connect(mapStateToProps, {
  startTimeline,
  increaseYear,
  decreaseYear,
  endTimeline
})(Timeline);
