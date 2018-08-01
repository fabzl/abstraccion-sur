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

const CurrentYearHolder = styled.h3`
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.black};
  position: absolute;
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
  width: 100vw;
  height: 100vh;
  overflow: scroll-y;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: row;
`;
const timelineLengthValue = 50;
const timelineHeight = 50;
const timelineCellWidth = 20;
const timelineCellHeight = 12;

const TimeGrid = styled.li`
  /* margin-top: 10%; */
  font-weight: 700;
  border: 1px solid red;
  /* width: ${timelineLengthValue * timelineCellWidth + "vmin"}; */
  height: 100vh;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.violet};
  display: inline-grid;
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

/*

ano
:
"2016"
autor
:
"Alejandro Siña"
coleccion
:
"Colección Privada"
collection
:
"Private Collection"
dimensiones
:
"170 x 20 x 50 cm "
exhibition
:
"The forms revolution: 60 years of abstract art in Chile"
exposicion
:
"La revolución de las formas: 60 años de arte abstracto en Chile"
fotos
:
false
imagen_grande
:
{ID: 303, id: 303, title: "AlejandroSiña_Móvil-Triple_Big", filename: "AlejandroSiña_Móvil-Triple_Big.jpg", filesize: 5071720, …}
imagen_mediana
:
{ID: 304, id: 304, title: "AlejandroSiña_Móvil-Triple_Med", filename: "AlejandroSiña_Móvil-Triple_Med.jpg", filesize: 1489452, …}
imagen_pequena
:
{ID: 305, id: 305, title: "AlejandroSiña_Móvil-Triple_Small", filename: "AlejandroSiña_Móvil-Triple_Small.jpg", filesize: 122912, …}
tecnica
:
"Neón de electrodo"
tecnique
:
"Neon electrode"
titulo
:
"Móvil Triple"
videovisita
:
""
*/

// <ul>{props.dataArtwork.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
const Timeline = props => (
  <TimegridContainer>
    <CurrentYearHolder>{props.timeline.currentYear}</CurrentYearHolder>
    <ul>
      {props.dataArtwork.map(p => (
        <TimeGrid key={p.id}>
          <img
            src={p.acf.imagen_grande.sizes.large}
            alt=""
            className="img-responsive"
          />
          <p>{p.acf.ano}</p>
          <p>{p.acf.titulo}</p>
          <p>{p.acf.artista}</p>
          <p>{p.acf.tecnica}</p>
          <p>{p.acf.dimensiones}</p>
        </TimeGrid>
      ))}
    </ul>;
    <button onClick={props.increaseYear}>increase</button>
    <button onClick={props.decreaseYear}>decrease</button>
  </TimegridContainer>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[3].acf,
    dataContact: state.data.pages[0].acf,
    dataArtwork: state.data.artwork,
    dataArtist: state.data.artists,
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
