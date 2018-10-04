import React from "react";
import styled from "styled-components";

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

export default props => {
  let videoOverride = props.video;
  let videosArray = videoOverride.split("||");
  let randomValue = Math.floor(Math.random() * videosArray.length);
  let video = videosArray[randomValue];

  return (
    <Section {...props}>
      <VideoContainer>
        <Video>
          <source src={video} type="video/mp4" />
        </Video>
      </VideoContainer>
    </Section>
  );
};
