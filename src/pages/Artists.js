import React from "react";
import { connect } from "react-redux";
import Grid from "../components/Grid";
import { smoothScroll } from "../components/Footer";
import styled from "styled-components";
import { colors } from "../styles/globals";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
// class MyComponent extends React.Component {
//   state = {
//     redirect: false
//   }
//   setRedirect = () => {
//     this.setState({
//       redirect: true
//     })
//   }
//   renderRedirect = () => {
//     if (this.state.redirect) {
//       return <Redirect to='/target' />
//     }
//   }
//   render () {
//     return (
//        <div>
//         {this.renderRedirect()}
//         <button onClick={this.setRedirect}>Redirect</button>
//        </div>
//     )
//   }
// }

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
  width: 100%;
  line-height: 0.4em;
`;

const ArtDescription = styled.p`
  font-size: 1.7rem;
  margin: 0;
  padding: 0;
  color: ${colors.white};
`;

const ArtistsgridContainer = styled.div`
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ArtistsGrid = styled.li`
  font-weight: 700;
  background-color: ${colors.black};
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.violet};
  display: inline-block;
  justify-content: center;
  align-content: center;
  flex-direction: row;
`;

const Artists = props => (
  <div>
    {/* {console.log("pio")}
    {smoothScroll()}
    <ArtistsHolder>
      {props.dataArtists.map(p => (
        <ArtistsGrid key={p.id}>
          <Link to={"/artists/" + p.acf.nombre}>
            <ArtImg
              src={p.acf.fotoartista.url}
              alt=""
              className="img-responsive"
            />
            <ArtDescription>{p.acf.nombre}</ArtDescription>
          </Link>
        </ArtistsGrid>
      ))}
    </ArtistsHolder> */}
    <Grid data={props.dataArtists} language={props.language} />
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
