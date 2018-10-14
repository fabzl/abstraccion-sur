import React from "react";
import { connect } from "react-redux";
// import Grid from "../components/Grid";
import styled from "styled-components";
import { colors, colorRandomFromArray } from "../styles/globals";
import { Link } from "react-router-dom";
import translations from "../translations";
// import VideoPlayer from "../components/VideoPlayer";

import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import Fade from "../components/Fade";
import { stopVideo, playVideo } from "../redux/actions";

import Parser from "html-react-parser";

/////////////////// lets

let circleSize = "47vw";
let circleSizeHeight = "26vw";
let gridInitialDistance = "2vw";
let gridInitialDistanceRow = "1vw";
let gridFinalDistance = "0";
let activeCirclesDistance = "35vw";

const LinkTo = styled(Link)`
  text-decoration: none;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  z-index: 3000;
  scolor: ${colors.white};
  &:hover {
    opacity: 0.5;
  }
`;

const VideoHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${circleSize};
  height: ${circleSizeHeight};
  z-index: -10;
  transition: all 1s;
  /* transform: translate3d(0px, -100vh, 0); */
  &.active {
    top: 0vh;
    /* transform: translate3d(0, 0, 0); */
    z-index: 1000;
  }
`;

const ArtistsHolder = styled.ul`
  width: 100vw;
  list-style: none;

  
  /* background: linear-gradient(to bottom, rgba(6,0,51,1) 0%,rgba(255,255,255,0) 55%);  */
  margin: 0;
  padding : 0;
  display: grid;
  margin-top: 15vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  /* padding-left: ${gridInitialDistance}; */
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  transition: all 0.9s ease-in-out 0.1s;
  grid-row-gap: ${gridInitialDistance};
  grid-column-gap: ${gridInitialDistanceRow};
  flex-flow: row wrap;

  justify-content: center;
  background-color:${colors.deepblack};

  &.active {
    grid-row-gap: ${gridFinalDistance};
    grid-column-gap: ${gridFinalDistance};
  } 

  &.moveRight {
    &.moveUp {
      /* transform: translate3d(
          -${circleSize.toString().replace(/\D+/g, "") + "vh"},
          -${circleSize},
          0
        )
        rotate3d(1, 1, 0, -5deg); */
    }
    &.moveCenterY {
      /* transform: translate3d(-${circleSize}, 0, 0) rotate3d(1, 1, 0, -5deg); */
    }
    &.moveDown {
      /* transform: translate3d(-${circleSize}, ${circleSize}, 0) */
        /* rotate3d(1, 1, 0, -5deg); */
    }
  }
  &.moveCenter {
    &.moveUp {
      /* transform: perspective(500px) translate3d(0, -${circleSize}, 0)
        rotate3d(1, 1, 0, 5deg); */
    }
    &.moveCenterY {
      /* transform: perspective(500px) translate3d(0, 0, 0) rotate3d(1, 1, 0, 5deg); */
    }
    &.moveDown {
      /* transform: perspective(500px) translate3d(0, ${circleSize}, 0)
        rotate3d(1, 1, 0, 5deg); */
    }
  }
  &.moveLeft {
    &.moveUp {
      /* transform: perspective(500px)
        translate3d(${circleSize}, -${circleSize}, 0) rotate3d(1, 1, 0, 5deg); */
    } 
    &.moveCenterY {
      /* transform: perspective(500px) translate3d(${circleSize}, 0, 0)
        rotate3d(1, 1, 0, 5deg); */
    }
    &.moveDown {
      /* transform: perspective(500px) translate3d(${circleSize}, ${circleSize}, 0)
        rotate3d(1, 1, 0, 5deg); */
    }
  }
`;

const ArtistsGrid = styled.li`
  margin: 0;
  padding : 0;
  width: ${circleSize};
  height: ${circleSizeHeight};
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family:  "FuturaBold", "Futura","Verdana";
  text-transform: uppercase;
  color: ${colors.violet};
  justify-content: center;
  align-content: center;
  transition: all 0.7s ease-in-out;
  opacity: 1;
  cursor:pointer;
  /* &:hover {
    border: 10rem solid ${colors.violet};
  } */

  &.passive {
    /* transform: perspective(500px) translate3d(0px,0px,-30vmax)  rotate3d(
        ${Math.random()},
        ${Math.random()},
        ${Math.random()},
        ${Math.random() * 20}deg
      ); */
     opacity: 0.3;
  }
  &.active {
    /* transform: perspective(500px) translate3d(0px,0px,-10vmax); */
    z-index: 10;
    /* width: 100vw;
    height: 82vw; */
  }

`;

// translate3d(tx, ty, tz)

const ArtImg = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 0.4em;
  background-size: cover;
  position: absolute;
  will-change: transform;
  transition: all 0.5s;
  width: ${circleSize};
  height: ${circleSizeHeight};

  &.active {
    /* transform: perspective(500px) translate3d(0, -26vw, 10vmax); */
    /* width: 100vw; */
    /* height: 56vw; */
  }
  &.passive {
    /* transform: perspective(500px) translate3d(0px, 0px, 0px); */
    opacity: 0;
  }
`;

const PlayVideoBox = styled.div`
  width: 50vw;
  height: ${circleSizeHeight};
  font-weight: 1em;
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
  justify-content: center;

  &.active {
    transform: perspective(500px) translate3d(0, ${circleSizeHeight}, 0);
    color: ${colors.black};
    &:hover {
      color: ${colors.black};
      padding: 6vw;
    }
  }
  &.passive {
    transform: perspective(500px) translate3d(0px, 0px, 5vmax);
  }
`;

const GotoCaveCircle = styled.div`
  width: 50vw;
  height: ${circleSizeHeight};
  font-weight: 1em;
  will-change: transform;
  position: absolute;
  transition: all 0.5s 0.7s;
  display: flex;
  align-items: center;
  color: transparent;
  text-align: center;
  padding: 2vw;
  cursor: pointer;
  justify-content: center;

  &.passive {
    transform: perspective(500px) translate3d(0, 0, 3vmax);
  }
  &.active {
    transform: translate3d(${circleSize}, ${circleSizeHeight}, 0);

    color: ${colors.black};
    padding: 6vw;

    &:hover {
      transition: all 0.3s;
      transform: perspective(500px)
        translate3d(-${activeCirclesDistance}, 0, 0vmax) scale(1.4);
    }
  }
`;

const ArtDescription = styled.p`
  position: absolute;
  font-size: 3rem;
  line-height: 8.5rem;
  margin: 0;
  padding: 0;
  text-align: right;
  color: ${colors.white};
  transition: all 2.5s;
  z-index: 11;
  opacity: 1;
  /* width: 0; */
  overflow: hidden;

  &.active {
    /* transform: perspective(500px) translate3d(20vh, -35vh, 0); */
    opacity: 1;
    width: auto;
  }
  &.pssive {
    opacity: 0;
  }
`;

class Artists extends React.Component {
  state = {
    playerVisible: false,
    openArtist: false,
    openVideo: false,
    videoPlaying: true,
    activeKey: -1,
    totalArtists: -1,
    holderPositionX: 1,
    holderPositionY: 1,
    activeVideoToPlay: "https://vimeo.com/168777320"
  };
  // "https://vimeo.com/168777320"
  //  https://www.youtube.com/watch?v=013lbJ-Iehg"

  componentDidMount() {
    this.setTotalArtistAmount();
    //var iframe = document.querySelector("iframe");
    // var player = new Vimeo.Player(iframe);

    // console.log(iframe, player);

    this.fadeIn();
  }

  fadeIn = () => {
    document.getElementById("main");
  };

  openArtist = key => {
    this.setState({ openArtist: !this.state.openArtist });
    this.setState({ activeKey: key });
    this.centerElement(key);
  };
  centerElement = key => {
    // position mainHolderPositionX.  0 1 2
    let positionX = key % 3;
    this.setState({ holderPositionX: positionX });

    // this must be changed if artist num changes
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

  videoReady = () => {
    console.log("videoReady");
  };

  closeVideo = () => {
    console.log("closeVideo");
    this.setState({ openVideo: false, videoPlaying: false });
    this.setState({ playerVisible: false });
  };
  displayVideo = () => {
    console.log("displayVideo");
    this.setState({ videoPlaying: true });
    this.setState({ openVideo: true });
    this.selectVideoURL(this.state.activeKey);
  };

  setTotalArtistAmount = () => {
    let artistAmount =
      document.getElementById("artistHolder").childElementCount - 1;
    this.setState({ totalArtists: artistAmount });
  };

  selectVideoURL = key => {
    let videoURL = this.props.dataArtists[key].acf.videomain;
    this.setState({ activeVideoToPlay: videoURL });

    console.log(this.state.activeKey, "videoURL", videoURL);
    // get player
    let reactPlayer = document.getElementById("react-player");

    this.setState({ playerVisible: true });

    let reactHolder = document.getElementById("video-holder");
    // force reload
    console.log(reactPlayer, reactHolder);

    // return videoURL;

    //   render() {
    //     return (
    //       <video ref="video">
    //         {this.props.sources.map(function(srcUrl, index) {
    //           return <source key={index} src={srcUrl} />;
    //         })}
    //       </video>
    //     );
    //   }
    // });
  };

  render() {
    const { language } = this.props;
    return (
      <Fade in={true}>
        <div
          id="main"
          style={{
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            background: colors.white,
            transition: "background 5s",
            height: "auto",
            width: "100vw"
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
                <PlayVideoBox
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
                </PlayVideoBox>
                <LinkTo
                  to={
                    "/artists/" +
                    p.acf.nombre
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/á/gi, "a")
                      .replace(/é/gi, "e")
                      .replace(/í/gi, "i")
                      .replace(/ó/gi, "o")
                      .replace(/ú/gi, "u")
                      .replace(/ñ/gi, "n")
                  }
                >
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
                </LinkTo>
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

          <VideoHolder
            id="video-holder"
            className={[this.state.openVideo ? "active" : ""]}
          >
            <CloseButton onClick={this.closeVideo}>
              <i className="fas fa-times fa-3x" />
            </CloseButton>
            {console.log(
              "this.state.activeVideoToPlay",
              this.state.activeVideoToPlay
            )}

            {!this.state.playerVisible ? (
              ""
            ) : (
              <ReactPlayer
                id="react-player"
                url={this.state.activeVideoToPlay}
                playing={this.state.videoPlaying}
                controls
                width="100%"
                allow="autoplay; fullscreen"
                height="100vh"
                onReady={this.videoReady}
                wrapper={VideoHolder}
                onEnded={this.videoEnd}
                config={{
                  vimeo: {
                    onReady: true
                    // autoplay: true
                  }
                }}
              />
            )}
          </VideoHolder>
        </div>
      </Fade>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    // dataArtwork: state.data.artwork,
    dataArtists: state.data.artists,
    dataDocuments: state.data.documents
  };
};

export default connect(
  mapStateToProps,
  { stopVideo, playVideo }
)(Artists);
