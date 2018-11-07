import React from "react";
import { connect } from "react-redux";
// import Grid from "../components/Grid";
import styled from "styled-components";
import { colors, colorRandomFromArray } from "../styles/globals";
import { Link } from "react-router-dom";
import translations from "../translations";
// import VideoPlayer from "../components/VideoPlayer";

// import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import Fade from "../components/Fade";
import { stopVideo, playVideo } from "../redux/actions";

import Parser from "html-react-parser";
import PlayButton from "../img/play_button.svg";

/////////////////// let

let circleSize = "53vw";
let circleSizeHeight = "30vw";
let gridFinalDistance = "0";
//let activeCirclesDistance = "35vw";

const SectionTitle = styled.h2`
  color: ${colors.black};
  font-size: 1.5rem;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.black};
  text-align: left;
  position: fixed;
  right: 0;
  width: 10rem;
  top: 33vh;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;

  &.active {
    height: auto;
  }
`;

const CloseButton = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
  z-index: 3030;
  color: ${colors.white};
  &:hover {
    opacity: 0.5;
  }
`;

const PlayButtonElement = styled.img`
  width: 10vw;
  height: 10vw;
  opacity: 0;
  transition: all 1.5s;
  &.active {
    opacity: 1;
  }
`;

const VideoHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 5vw;
  background: ${colors.deepblack};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  transition: all 1s;
  /* transform: translate3d(0px, -100vh, 0); */
  &.active {
    top: 0vh;
    /* transform: translate3d(0, 0, 0); */
    z-index: 99999;
  }
`;

const ArtistsHolder = styled.ul`
  width: 80vw;
  list-style: none;
  margin: 0;
  padding: 5vw 10vw;
  display: inline-grid;
  margin-top: 15vh;
  transition: all 0.9s ease-in-out;
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${colors.deepblack};

  &.active {
    grid-row-gap: ${gridFinalDistance};
    grid-column-gap: ${gridFinalDistance};
  }
`;

const ArtistsGrid = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: ${circleSize};
  height: ${circleSizeHeight};
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;
  color: ${colors.deepgray};
  justify-content: flex-start;
  align-content: center;
  transition: all 0.7s ease-in-out;
  opacity: 1;
  cursor: pointer;
  width: 80vw;

  &.passive {
    opacity: 0.3;
  }
  &.active {
    z-index: 10;
    height: 50vw;

    &.isOdd {
    }
  }
`;

const ArtImg = styled.div`
  transform-style: preserve-3d;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-size: cover;
  will-change: transform;
  transition: all 0.5s;
  text-align: center;
  grid-row-start: 1;
  grid-row-end: 4;

  &.isEven {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  &.isOdd {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &.active {
    /* transform: perspective(500px) translate3d(0, -26vw, 10vmax); */
    grid-row-start: 1;
    grid-row-end: 6;
    transform: scale(1);
  }
  &.passive {
    /* transform: perspective(500px) translate3d(0px, 0px, 0px); */
    /* opacity: 0; */
  }
`;

const goToId = id => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
};

const PlayVideoBox = styled.div`
  position: absolute;
  will-change: transform;
  transition: all 0.5s 0.7s;
  display: flex;
  align-items: center;
  color: transparent;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  justify-content: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.37);
  transform: perspective(500px) translate3d(-30%, 0, 0);

  &.active {
    opacity: 1;
    color: ${colors.white};
    transform: perspective(500px) translate3d(0, 0, 0);
  }

  &.passive {
  }
`;

const GotoArtistStudio = styled.div`
  overflow: hidden;
  width: 0;
  height: 0;
  font-weight: 1em;
  will-change: transform;
  transition: all 0.5s 0.7s;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  opacity: 1;
  color: ${colors.black};
  font-weight: 400;
  line-height: 1em;
  font-family: "Helvetica", "HelveticaNeue", "Verdana";
  font-size: 2rem;
  margin: auto;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.passive {
  }
  &.active {
    width: 100%;
    height: 100%;
    color: ${colors.black};
    opacity: 1;
    padding: 2vw 0vw;
  }
`;

function isEven(value) {
  if (value % 2 === 0) return true;
  else return false;
}

const ArtDescription = styled.p`
  position: relative;
  text-align: center;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  display: flex;
  background-color: ${colors.white};
  padding-left: 2vw;
  bottom: 0;
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 0;
  padding: 0;
  color: ${colors.red};
  transition: all 0.5s;
  z-index: 11;
  opacity: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-row-start: 1;
  grid-row-end: 6;
  @media (min-width: 740px) {
    line-height: 3.5rem;
  }

  &.isOdd {
    grid-column-start: 3;
    grid-column-end: 3;
  }

  &.isEven {
    grid-column-start: 1;
    grid-column-end: 1;
  }
  &.active {
    opacity: 1;
    width: auto;
    grid-row-start: 1;
    grid-row-end: 6;
  }
  &.passive {
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

  componentDidMount() {
    this.setTotalArtistAmount();
    this.fadeIn();
  }

  fadeIn = () => {
    document.getElementById("main");
  };

  openArtist = key => {
    this.setState({ openArtist: !this.state.openArtist });
    this.setState({ activeKey: key });
    console.log("key", key);
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
    console.log("currentKeyArtist :", currentKeyArtist);
    console.log("activeKeyArtist :", this.state.activeKey);
    // goToId(element);
    console.log("el");
    console.dir(element.offsetParent);

    if (this.state.openArtist) {
      if (this.state.currentKeyArtist != this.state.activeKey) {
        this.openArtist(currentKeyArtist);
        console.log("clicked on guy next to me");
      } else {
        this.closeArtist(currentKeyArtist);
      }
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
          <SectionTitle> {translations.header.artists[language]}</SectionTitle>

          <ArtistsHolder
            id="artistHolder"
            className={[this.state.openArtist ? "active" : ""]}
          >
            {this.props.dataArtists.map((p, i) => (
              <ArtistsGrid
                key={p.id}
                id={p.acf.nombre
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/á/gi, "a")
                  .replace(/é/gi, "e")
                  .replace(/í/gi, "i")
                  .replace(/ó/gi, "o")
                  .replace(/ú/gi, "u")
                  .replace(/ñ/gi, "n")}
                onClick={this.onArtistClicked}
                className={[
                  (this.state.openArtist &&
                  this.state.activeKey == i &&
                  this.state.activeKey == i
                    ? "active"
                    : "") +
                    " " +
                    i +
                    " " +
                    (this.state.openArtist && this.state.activeKey != i
                      ? "passive"
                      : "") +
                    " " +
                    (isEven(i) ? "isOdd" : "isEven")
                ]}
              >
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
                        : "") +
                      " " +
                      (isEven(i) ? "isOdd" : "isEven")
                  ]}
                  style={{
                    backgroundImage: "url(" + p.acf.fotoartista.url + ")"
                  }}
                >
                  <PlayVideoBox
                    onClick={
                      this.state.openArtist && this.state.activeKey == i
                        ? this.displayVideo
                        : null
                    }
                    className={[
                      (this.state.openArtist && this.state.activeKey == i
                        ? "active"
                        : "") +
                        " " +
                        i +
                        " " +
                        (this.state.openArtist && this.state.activeKey != i
                          ? "passive"
                          : "") +
                        " " +
                        (isEven(i) ? "isOdd" : "isEven")
                    ]}
                  >
                    <PlayButtonElement
                      src={PlayButton}
                      className={[
                        this.state.openArtist && this.state.activeKey == i
                          ? "active"
                          : ""
                      ]}
                    />
                    {translations.artists.video[language]}
                  </PlayVideoBox>
                </ArtImg>
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
                        : "") +
                      " " +
                      (isEven(i) ? "isOdd" : "isEven")
                  ]}
                >
                  {p.acf.nombre}

                  <LinkTo
                    className={[
                      (this.state.openArtist && this.state.activeKey == i
                        ? "active"
                        : "") +
                        " " +
                        i +
                        " " +
                        (this.state.openArtist && this.state.activeKey != i
                          ? "passive"
                          : "") +
                        " " +
                        (isEven(i) ? "isOdd" : "isEven")
                    ]}
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
                    <GotoArtistStudio
                      className={[
                        (this.state.openArtist && this.state.activeKey == i
                          ? "active"
                          : "") +
                          " " +
                          i +
                          " " +
                          (this.state.openArtist && this.state.activeKey != i
                            ? "passive"
                            : "") +
                          " " +
                          (isEven(i) ? "isOdd" : "isEven")
                      ]}
                      style={{
                        background: colorRandomFromArray()
                      }}
                    >
                      {translations.artists.cave[language]}
                    </GotoArtistStudio>
                  </LinkTo>
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
                width="100vw"
                allow="autoplay; fullscreen"
                height="95vh"
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
