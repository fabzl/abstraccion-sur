import React from "react";
import { connect } from "react-redux";
import Grid from "../components/Grid";
import { smoothScroll } from "../components/Footer";
import styled from "styled-components";
import { colors } from "../styles/globals";

const ArtistsHolder = styled.ul`
    display:grid;
    top: 0;
    left: 0;
    padding: 10%;
    margin: 0;
    grid-template-columns: 20% 20% 20% 20%;
    grid-template-rows:  20% 20% 20% 20%; 
    grid-column-gap: 5%;
    grid-row-gap: 5%;
}
`;

const ArtImg = styled.img`

  width:100%;  
  line-height: .4em;
 
}
`;

const ArtDescription = styled.p`
    font-size: 1.7rem;
    margin: 0;
    padding: 0;
    color:${colors.white};
}

`;

const ArtistsgridContainer = styled.div`
  /* width: 100vw;
  height: 100vh; */
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* flex-direction: row; */
`;
const timelineLengthValue = 50;
const timelineHeight = 50;
const timelineCellWidth = 20;
const timelineCellHeight = 12;

const ArtistsGrid = styled.li`

  font-weight: 700;
  background-color: ${colors.black};
  /* width: ${timelineLengthValue * timelineCellWidth + "vmin"}; */
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.violet};
  display: inline-block;
  justify-content: center;
  align-content: center;
  flex-direction: row;
}
`;

const Artists = props => (
  <div>
    {console.log("pio")}
    {smoothScroll()}
    <ArtistsHolder>
      {props.dataArtists.map(p => (
        <ArtistsGrid key={p.id}>
          <ArtImg
            src={p.acf.fotoartista.url}
            alt=""
            className="img-responsive"
          />
          <ArtDescription>{p.acf.nombre}</ArtDescription>
        </ArtistsGrid>
      ))}
    </ArtistsHolder>
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

export default connect(mapStateToProps)(Artists);
