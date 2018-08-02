import React from "react";
import { connect } from "react-redux";
import Grid from "../components/Grid";
import { smoothScroll } from "../components/Footer";
import styled from "styled-components";
import { colors } from "../styles/globals";

const ArtistsHolder = styled.ul`
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

const Artistas = props => (
  <div>
    {console.log("pio")}
    {smoothScroll()}
    <ArtistsHolder>
      {props.dataArtists.map(p => (
        <TimeGrid key={p.id}>
          <ArtImg
            src={p.acf.imagen_grande.sizes.large}
            alt=""
            className="img-responsive"
          />
          <ArtDescription>{p.acf.nombre}</ArtDescription>
          <ArtDescription>{p.acf.titulo}</ArtDescription>
          <ArtDescription>{p.acf.artista}</ArtDescription>
          <ArtDescription>{p.acf.tecnica}</ArtDescription>
          <ArtDescription>{p.acf.dimensiones}</ArtDescription>
        </TimeGrid>
      ))}
    </ArtistsHolder>;
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataArtwork: state.data.artwork,
    dataArtists: state.data.artists,
    dataDocuments: state.data.documents
  };
};

export default connect(mapStateToProps)(Artistas);
