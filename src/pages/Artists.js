import React from "react";
import { connect } from "react-redux";
// import Grid from "../components/Grid";
import styled from "styled-components";
import { colors, colorRandomFromArray } from "../styles/globals";
import { Link } from "react-router-dom";
import translations from "../translations";
// import VideoPlayer from "../components/VideoPlayer";

import ReactPlayer from "react-player";
import { stopVideo, playVideo } from "../redux/actions";

let circleSize = "20vw";
let gridInitialDistance = "1";
let gridFinalDistance = "0";
let activeCirclesDistance = "45vw";

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${colors.white};
  &:hover {
    opacity: 0.5;
  }
`;

const VideoHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  transition: all 1s;
  transform: translate3d(0, -100vh, 0);
  &.active {
    transform: translate3d(0, 0, 0);
  }
`;

const ArtistsHolder = styled.ul`
  display: grid;
  top: 0;
  left: 0;
  padding: 10%;
  margin: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  transition: all 0.9s ease-in-out 0.1s;
  grid-row-gap: ${gridInitialDistance + "vw"};
  grid-column-gap: ${gridInitialDistance + "vw"};
  width: 100vw;

  &.active {
    grid-row-gap: ${gridFinalDistance + "vw"};
    grid-column-gap: ${gridFinalDistance + "vw"};
  }

  &.moveRight {
    &.moveUp {
      transform: translate3d(
          -${circleSize.toString().replace(/\D+/g, "") + "vh"},
          -${circleSize},
          0
        )
        rotate3d(1, 1, 0, -5deg);
    }
    &.moveCenterY {
      transform: translate3d(-${circleSize}, 0, 0) rotate3d(1, 1, 0, -5deg);
    }
    &.moveDown {
      transform: translate3d(-${circleSize}, ${circleSize}, 0)
        rotate3d(1, 1, 0, -5deg);
    }
  }
  &.moveCenter {
    &.moveUp {
      transform: perspective(500px) translate3d(0, -${circleSize}, 0)
        rotate3d(1, 1, 0, 5deg);
    }
    &.moveCenterY {
      transform: perspective(500px) translate3d(0, 0, 0) rotate3d(1, 1, 0, 5deg);
    }
    &.moveDown {
      transform: perspective(500px) translate3d(0, ${circleSize}, 0)
        rotate3d(1, 1, 0, 5deg);
    }
  }
  &.moveLeft {
    &.moveUp {
      transform: perspective(500px)
        translate3d(${circleSize}, -${circleSize}, 0) rotate3d(1, 1, 0, 5deg);
    }
    &.moveCenterY {
      transform: perspective(500px) translate3d(${circleSize}, 0, 0)
        rotate3d(1, 1, 0, 5deg);
    }
    &.moveDown {
      transform: perspective(500px) translate3d(${circleSize}, ${circleSize}, 0)
        rotate3d(1, 1, 0, 5deg);
    }
  }
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
  transition: all 0.7s ease-in-out;
  /* border: 1px solid getRa; */
  opacity: 1;
  
  &.passive {
    transform: perspective(500px) translate3d(0px,0px,-30vmax)  rotate3d(
        ${Math.random()},
        ${Math.random()},
        ${Math.random()},
        ${Math.random() * 20}deg
      );
     opacity: 0.3;
  }
  &.active {
    transform: perspective(500px) translate3d(0px,0px,-10vmax);
    z-index: 10;
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
  transition: all 0.5s;

  &.active {
    transform: perspective(500px) translate3d(0px, 0px, 20vmax);
  }
  &.passive {
    transform: perspective(500px) translate3d(0px, 0px, 0px);
    opacity: 0;
  }
`;

const PlayVideoCircle = styled.div`
  width: ${circleSize};
  height: ${circleSize};
  line-height: 1em;
  border-radius: 50%;
  will-change: transform;
  position: absolute;
  transition: all 0.5s 0.7s;
  display: flex;
  align-items: center;
  color: transparent;
  text-align: center;
  padding: 2vw;
  margin: 0 auto;
  cursor: pointer;

  &.active {
    transform: perspective(500px)
      translate3d(${activeCirclesDistance}, 0px, -5vmax);
    color: ${colors.black};
    &:hover {
      transition: all 0.3s;
      transform: perspective(500px)
        translate3d(${activeCirclesDistance}, 0px, -5vmax) scale(1.4);
    }
  }
  &.passive {
    transform: perspective(500px) translate3d(0px, 0px, 5vmax);
  }
`;

const GotoCaveCircle = styled.div`
  width: ${circleSize};
  height: ${circleSize};
  line-height: 1em;
  border-radius: 50%;
  will-change: transform;
  position: absolute;
  transition: all 0.5s 0.7s;
  display: flex;
  align-items: center;
  color: transparent;
  text-align: center;
  padding: 2vw;
  cursor: pointer;

  &.passive {
    transform: perspective(500px) translate3d(0px, 0px, 3vmax);
  }
  &.active {
    transform: perspective(500px)
      translate3d(-${activeCirclesDistance}, 0px, -5vmax);
    color: ${colors.black};

    &:hover {
      transition: all 0.3s;
      transform: perspective(500px)
        translate3d(-${activeCirclesDistance}, 0px, -5vmax) scale(1.4);
    }
  }
`;

const ArtDescription = styled.p`
  position: absolute;
  font-size: 8rem;
  line-height: 8.5rem;
  margin: 0;
  padding: 0;
  text-align: right;
  color: ${colors.white};
  transition: all 0.5s;
  z-index: 11;

  opacity: 0;

  &.active {
    transform: perspective(500px) translate3d(20vh, -35vh, 0);
    opacity: 1;
  }
`;

class Artists extends React.Component {
  state = {
    openArtist: false,
    openVideo: false,
    videoPlaying: "playing",
    activeKey: 0,
    totalArtists: -1,
    holderPositionX: 1,
    holderPositionY: 1
  };

  componentDidMount() {
    this.setTotalArtistAmount();
  }

  openArtist = key => {
    this.setState({ openArtist: !this.state.openArtist });
    this.setState({ activeKey: key });
    this.centerElement(key);
  };
  centerElement = key => {
    // position mainHolderPositionX.  0 1 2
    let positionX = key % 3;
    this.setState({ holderPositionX: positionX });

    // this must be changed
    let positionY = key >= 6 ? "moveUp" : key > 2 ? "moveCenterY" : "moveDown";
    this.setState({ holderPositionY: positionY });
  };

  closeArtist = () => {
    this.setState({ openArtist: false });
    // console.log("close Menu");
  };

  onArtistClicked = e => {
    let element = e.target;
    let currentKeyArtist = element.parentNode.className
      .toString()
      .replace(/\D+/g, "");
    // console.log("currentKeyArtist :", currentKeyArtist);

    // console.log(element);
    if (this.state.openArtist) {
      this.closeArtist(currentKeyArtist);

      // console.log("closeartist");
    } else {
      this.openArtist(currentKeyArtist);
    }
  };

  ////// video

  videoEnd = () => {
    console.log("videoEND");
    this.setState({ openVideo: false, videoPlaying: false });
  };

  closeVideo = () => {
    console.log("closeVideo");
    this.setState({ openVideo: false, videoPlaying: false });
  };
  displayVideo = () => {
    console.log("displayVideo");
    this.setState({ openVideo: true, videoPlaying: true });
  };

  setTotalArtistAmount = () => {
    var artistAmount =
      document.getElementById("artistHolder").childElementCount - 1;
    this.setState({ totalArtists: artistAmount });
  };

  render() {
    const { language } = this.props;
    return (
      <div
        style={{
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
          background: colorRandomFromArray(),
          transition: "background 5s",
          height: "100vh"
        }}
      >
        <ArtistsHolder
          id="artistHolder"
          className={[
            (this.state.openArtist ? "active" : "") +
              " " +
              (this.state.openArtist && this.state.holderPositionX == 0
                ? "moveLeft"
                : "") +
              " " +
              (this.state.openArtist && this.state.holderPositionX == 1
                ? "moveCenter"
                : "") +
              " " +
              (this.state.openArtist && this.state.holderPositionX == 2
                ? "moveRight"
                : "") +
              " " +
              (this.state.openArtist && this.state.holderPositionY + "")
          ]}
        >
          {this.props.dataArtists.map((p, i) => (
            <ArtistsGrid
              key={p.id}
              onClick={this.onArtistClicked}
              className={[
                (this.state.openArtist && this.state.activeKey == i
                  ? "active"
                  : "") +
                  " " +
                  i +
                  " " +
                  (this.state.openArtist && this.state.activeKey != i
                    ? "passive"
                    : "")
              ]}
            >
              <PlayVideoCircle
                onClick={this.displayVideo}
                className={[
                  (this.state.openArtist && this.state.activeKey == i
                    ? "active"
                    : "") +
                    " " +
                    i +
                    " " +
                    (this.state.openArtist && this.state.activeKey != i
                      ? "passive"
                      : "")
                ]}
                style={{
                  background: colorRandomFromArray()
                }}
              >
                {translations.artists.video[language]}
              </PlayVideoCircle>
              <GotoCaveCircle
                className={[
                  (this.state.openArtist && this.state.activeKey == i
                    ? "active"
                    : "") +
                    " " +
                    i +
                    " " +
                    (this.state.openArtist && this.state.activeKey != i
                      ? "passive"
                      : "")
                ]}
                style={{
                  background: colorRandomFromArray()
                }}
              >
                {translations.artists.cave[language]}
              </GotoCaveCircle>

              <ArtImg
                className={[
                  (this.state.openArtist && this.state.activeKey == i
                    ? "active"
                    : "") +
                    " " +
                    i +
                    " " +
                    (this.state.openArtist && this.state.activeKey != i
                      ? "passive"
                      : "")
                ]}
                style={{
                  backgroundImage: "url(" + p.acf.fotoartista.url + ")"
                }}
              />
              <ArtDescription
                className={[
                  (this.state.openArtist && this.state.activeKey == i
                    ? "active"
                    : "") +
                    " " +
                    i +
                    " " +
                    (this.state.openArtist && this.state.activeKey != i
                      ? "passive"
                      : "")
                ]}
              >
                {p.acf.nombre}
              </ArtDescription>
            </ArtistsGrid>
          ))}
        </ArtistsHolder>

        <VideoHolder className={[this.state.openVideo ? "active" : ""]}>
          <CloseButton onClick={this.closeVideo}>
            <i className="fas fa-times fa-3x" />
          </CloseButton>
          <ReactPlayer
            url={"https://vimeo.com/92830563"}
            playing={this.props.videoPlaying}
            true
            controls
            width="100%"
            allow="autoplay; fullscreen"
            height="100vh"
            onEnded={this.videoEnd}
            config={{
              vimeo: {
                onReady: true
                // autoplay: true
              }
            }}
          />
        </VideoHolder>
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

export default connect(
  mapStateToProps,
  { stopVideo, playVideo }
)(Artists);
