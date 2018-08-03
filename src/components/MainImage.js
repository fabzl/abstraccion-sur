import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { playVideo } from "../redux/actions";
import { colors } from "../styles/globals";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60vh;
  width: 60%;
  padding-top: 10vh;
  align-items: center;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  color: ${colors.white};
  font-size: 16px;
  & a:first-child:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    & svg {
      margin-left: 15px;
    }
  }

  & a:last-child:hover {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
    & svg {
      margin-right: 15px;
    }
  }
`;

const H1 = styled.h1`
  /* margin-bottom: 0; */
  font-size: 62px;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  /* margin: 0 auto 0.6em; */
  text-align: center;
`;

const Arrow = styled(Link)`
  color: ${colors.white};
  height: 100%;
  align-items: center;
  display: flex;
  width: 10%;
  justify-content: center;
  background: transparent;
  & svg {
    transition: all 0.3s;
  }
`;

// const Left = styled.span`
//   &:hover {
//     padding-left: 15px;
//   }
// `;

// const Right = styled.span`
//   &:hover {
//     padding-right: 15px;
//   }
// `;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Play = styled.div`
  &:hover {
    opacity: 0.8;
  }
`;

const MainImage = props => (
  <Wrap src={props.url}>
    <Arrow to={props.prevLink}>
      <i className="fas fa-chevron-left fa-4x" />
    </Arrow>

    <Center>
      {/* <H1>{props.nombre_del_proyecto}</H1>
      <Play onClick={() => props.playVideo(props.videoUrl)}>
        <i className="far fa-play-circle fa-10x" />
      </Play> */}
    </Center>

    <Arrow to={props.nextLink}>
      <i className="fas fa-chevron-right fa-4x" />
    </Arrow>
  </Wrap>
);

export default connect(
  null,
  { playVideo }
)(MainImage);
