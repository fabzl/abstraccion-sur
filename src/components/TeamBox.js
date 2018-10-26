import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { playVideo } from "../redux/actions";
// import { Link } from "react-router-dom";
import { colors } from "../styles/globals";

const Job = styled.p`
  color: ${colors.gray};
  text-decoration: none;
`;

const Name = styled.h3`
  color: ${colors.red};
  text-decoration: none;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  background: rgba(68, 48, 79, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  user-select: none;
  opacity: 0;
  color: ${colors.white};

  h4 {
    margin: 0 0 10px;
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    font-style: italic;
    opacity: 0;
    transform: translateX(-200px);
  }

  h3 {
    font-size: 2rem;
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    color: ${colors.red};
    padding: 0.33em 10px 5px;
    margin: 0;
    line-height: 1em;
    transform: translateX(200px);
  }

  h3,
  h4 {
    transition: transform 0.8s, opacity 1.2s;
    transition-timing-function: cubic-bezier(0.1, 0.1, 0.2, 1), ease;
  }
`;

const Middle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: none;
  margin-top: -3em;
`;

const WrapPhoto = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  width: 100%;
  align-self: center;
  height: 200px;
  /* width: 150px; */

  @media (min-width: 740px) {
    height: 250px;
  }

  @media (min-width: 1200px) {
    height: 300px;
  }
`;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  align-items: flex-start;
  width: auto;
  align-self: center;
  width: 200px;
  /* width: 150px; */

  @media (min-width: 740px) {
    width: 250px;
  }

  @media (min-width: 1200px) {
    width: 300px;
  }

  /* @media (min-width: 740px) {
    width: 50%;
  } */

  &:hover {
    > a > div {
      opacity: 1;
      h4 {
        opacity: 1;
        transform: translateX(0);
      }
      h3 {
        transform: translateX(100);
      }
    }
  }
`;

class TeamBox extends Component {
  handleLink = e => {
    if (!this.props.link) {
      e.preventDefault();
    }
  };

  render() {
    return (
      <Wrap>
        <WrapPhoto src={this.props.photo} />
        {/* <img src={this.props.photo} alt={this.props.name} /> */}
        <Name>{this.props.name}</Name>
        <Job>{this.props.job_title}</Job>
        <Content>
          <Middle>
            <h4>{this.props.description}</h4>
          </Middle>
        </Content>
      </Wrap>
    );
  }
}

export default connect(
  null,
  { playVideo }
)(TeamBox);
