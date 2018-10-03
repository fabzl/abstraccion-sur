import React from "react";
import { connect } from "react-redux";
import Grid from "../components/Grid";
import styled from "styled-components";
import { colors, colorRandomFromArray } from "../styles/globals";
import { Link } from "react-router-dom";

let circleSize = "25vw";

const ArtistsHolder = styled.ul`
  display: grid;
  top: 0;
  left: 0;
  padding: 10%;
  margin: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  position: relative;
  animation: all 0.5s;
`;

const ArtistsGrid = styled.li`

  width: ${circleSize};
  height: ${circleSize};
  font-weight: 700;
  /* background-color: ${colors.black}; */
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
  color: ${colors.violet};
  display: inline-block;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  animation: all 0.7s ease-in-out;
  border: 1px solid red;
  &.inactive {
    transform: perspective(500px) translate3d(0px,0px,-30vmax);
  }
  &.active {
    transform: perspective(500px) translate3d(0px,0px,-10vmax);
  }
`;

// translate3d(tx, ty, tz)

const ArtImg = styled.div`
  width: ${circleSize};
  height: ${circleSize};
  line-height: 0.4em;
  border-radius: 50%;
  background-size: cover;
  position: absolute;
  will-change: transform;
}
  &.active {
    transform: translate3d(0, 30vw, 10vw);
  }
`;

const PlayVideoCircle = styled.div`
  width: ${circleSize};
  height: ${circleSize};
  line-height: 0.4em;
  border-radius: 50%;
  position: absolute;

  &.active {
    transform: perspective(500px) translate3d(35vw, 0px, -30vmax);
    opacity: 0.5;
  }
`;

const GotoCaveCircle = styled.div`
  width: ${circleSize};
  height: ${circleSize};
  line-height: 0.4em;
  border-radius: 50%;
  will-change: transform;
  position:absolute;
}
  &.inactive {
    transform: perspective(500px) translate3d(0px, 0px, -30vmax);
  }
  &.active {
    transform: perspective(500px) translate3d(-35vw, 0px, -10vmax);
  }
`;

const ArtDescription = styled.p`
  font-size: 1.7rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${colors.white};
  &.inactive {
    transform: perspective(500px) translate3d(0px, 0px, -30vmax);
  }
  &.active {
    transform: perspective(500px) translate3d(0px, 0px, -10vmax);
  }
`;

class Artists extends React.Component {
  state = {
    openArtist: false,
    activeKey: 0,
    totalArtists: -1
  };

  componentDidMount() {
    this.setTotalArtistAmount();
  }

  openArtist = key => {
    this.setState({ openArtist: !this.state.openArtist });
    this.setState({ activeKey: key });
  };

  closeArtist = () => {
    this.setState({ openArtist: false });
    console.log("close Menu");
  };

  setTotalArtistAmount = () => {
    var artistAmount =
      document.getElementById("artistHolder").childElementCount - 1;
    this.setState({ totalArtists: artistAmount });
  };

  onArtistClicked = e => {
    let element = e.target;
    let currentKeyArtist = element.parentNode.className
      .toString()
      .replace(/\D+/g, "");
    console.log(currentKeyArtist);

    // console.log(element);
    if (this.state.openArtist) {
      this.closeArtist(currentKeyArtist);

      console.log("closeartist");
    } else {
      this.openArtist(currentKeyArtist);
    }
  };

  render() {
    return (
      <div>
        <ArtistsHolder id="artistHolder">
          {this.props.dataArtists.map((p, i) => (
            <ArtistsGrid
              key={p.id}
              onClick={this.onArtistClicked}
              className={
                (i + "",
                this.state.openArtist && this.state.activeKey == i
                  ? "active"
                  : "",
                this.state.openArtist && this.state.activeKey != i
                  ? "inactive"
                  : "")
              }
            >
              {/* <Link  to={"/artists/" + p.acf.nombre}> */}
              {/* {console.log(i)} */}
              <ArtImg
                style={{
                  backgroundImage: "url(" + p.acf.fotoartista.url + ")"
                }}
              />
              <PlayVideoCircle
                style={{
                  background: colorRandomFromArray()
                }}
              />
              <GotoCaveCircle
                style={{
                  background: colorRandomFromArray()
                }}
              />
              <ArtDescription>{p.acf.nombre}</ArtDescription>
            </ArtistsGrid>
          ))}
        </ArtistsHolder>
      </div>
    );
  }
}
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
