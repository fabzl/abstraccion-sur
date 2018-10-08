import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { playVideo } from "../redux/actions";
import { Link } from "react-router-dom";
import { colors } from "../styles/globals";

const getStringCleaned = stringToReplace => {
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";

  // Los eliminamos todos
  for (var i = 0; i < specialChars.length; i++) {
    stringToReplace = stringToReplace.replace(
      new RegExp("\\" + specialChars[i], "gi"),
      ""
    );
  }
  // Lo queremos devolver limpio en minusculas
  stringToReplace = stringToReplace.toLowerCase();

  // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
  stringToReplace = stringToReplace.replace(/ /g, "-");

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  stringToReplace = stringToReplace.replace(/á/gi, "a");
  stringToReplace = stringToReplace.replace(/é/gi, "e");
  stringToReplace = stringToReplace.replace(/í/gi, "i");
  stringToReplace = stringToReplace.replace(/ó/gi, "o");
  stringToReplace = stringToReplace.replace(/ú/gi, "u");
  stringToReplace = stringToReplace.replace(/ñ/gi, "n");
  return stringToReplace;
};

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;

  &:hover {
    > a > div {
      opacity: 1;
      h4 {
        opacity: 1;
        transform: translateX(0);
      }
      h3 {
        transform: translateX(0);
      }
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2rem;
  background: rgba(0, 1, 40, 0.85);
  opacity: 0;
  transition: opacity 0.5s;
  text-align: center;
  user-select: none;
  color: ${colors.black};

  h4 {
    margin: 0 0 10px;
    font-size: 21px;
    font-weight: 500;
    text-transform: uppercase;
    font-style: italic;
    opacity: 1;
    /* transform: translateX(-200px); */
  }

  h3 {
    font-size: 42px;
    font-weight: 700;
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

const LinkTo = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  display: block;
  height: 100%;
`;

class Box extends Component {
  handleLink = e => {
    if (!this.props.link) {
      e.preventDefault();
      console.log("handleLink");
      // this.props.playVideo(this.props.videoUrl);
    }
  };

  render() {
    return (
      <Wrap src={this.props.image}>
        <LinkTo
          to={
            this.props.link
              ? `/artists/${getStringCleaned(this.props.link)}`
              : "/"
          }
          onClick={this.handleLink}
        >
          <Content>
            <Middle>
              <h4>{this.props.nombre}</h4>
            </Middle>
          </Content>
        </LinkTo>
      </Wrap>
    );
  }
}

export default connect(
  null,
  { playVideo }
)(Box);
