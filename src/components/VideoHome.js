import React from "react";
import styled from "styled-components";
import { colors } from "../styles/globals";
import WebFont from "webfontloader";

const Section = styled.section`
  height: ${props => (props.contact ? 80 : 100)}vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  z-index: 20;
  padding: 40px 80px;
  /* top: 50%; */
  pointer-events: none;
  /* opacity: 0; */
  transition: opacity 1.3s;
  width: 93.3333%;
  @media (max-width: 2000px) {
    max-width: 1600px;
  }
  text-align: center;
  margin: 0 auto;
  color: ${colors.white};
`;

const H2 = styled.h2`
  font-family: "FuturaBold", "Futura", "Verdana";
  margin: 0 auto;
  padding: 0 20px;
  transform: translateX(-1px);
  display: inline-block;
  transition: line-height 1s;
  text-transform: uppercase;
  font-weight: 900;
  font-style: bold;
  text-align: center;
  text-shadow: 0px 1px 0px #999;

  font-size: 32px;
  line-height: 1.2em;

  @media (min-width: 520px) {
    font-size: 42px;
  }
  @media (min-width: 720px) {
    font-size: 62px;
  }

  &::after,
  &::before {
    content: "";
    display: none;
    /* display: block; */
    width: 0;

    border-top: 3px solid ${colors.white};
    transition: width 0.6s 0.2s, left 0.6s 0.2s, right 0.6s 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    position: absolute;
    top: 50%;
    margin-top: -15px;
    transform: translateZ(0);
    width: 70px;
    @media (min-width: 520px) {
    }
  }

  &::before {
    left: -70px;
  }

  &::after {
    right: -70px;
  }
`;

WebFont.load({
  google: {
    families: ["Poppins:800", "sans-serif"]
  }
});

export default props => {
  let videoOverride = props.video;
  let videosArray = videoOverride.split("||");
  let randomValue = Math.floor(Math.random() * videosArray.length);
  let video = videosArray[randomValue];

  return (
    <Section {...props}>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </Video>
      </VideoContainer>

      <Text>
        <H2>{props.title}</H2>
      </Text>
    </Section>
  );
};
