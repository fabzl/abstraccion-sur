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

}

`;

const ButtonYearIncrease = styled.button`
    position:fixed;
    top:50%;
    left:50%;
    background-color: ${colors.black};
    padding:30px;
    z-index:40;

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

const updateScrollPos = props => {
  console.log("upd");
};

// <ul>{props.dataArtwork.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
const Timeline = props => (
  <TimegridContainer>
    <CurrentYearHolder>{props.timeline.currentYear}</CurrentYearHolder>
    <ArtHolder>
      {props.dataArtwork.map(p => (
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
    <ButtonYearIncrease onClick={(props.increaseYear, updateScrollPos)}>
      increase
    </ButtonYearIncrease>
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
