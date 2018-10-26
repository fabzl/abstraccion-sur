import React, { Component } from "react";
import styled from "styled-components";
import TeamBox from "./TeamBox";
// import { colors } from "../styles/globals";

class TeamGrid extends Component {
  'renderBoxes' = () => {
    const { data } = this.props;
    return data.map((item, key) => {
      // Si no existe acf implementado
      if (!item.acf.photo) return null;
      const {
        photo: { url },
        name,
        job_title,
        description
      } = item.acf;
      return (
        <TeamBox
          key={item.id}
          photo={url}
          name={name}
          job_title={job_title}
          description={description}
        />
      );
    });
  };

  render() {
    const Wrap = styled.div`
      display: flex;
      padding: 5vmin;
      width: 100%;
      flex-flow: row wrap;
      justify-content: center;

      @media (min-width: 948px) {
        justify-content: space-between;
      }
    `;

    return <Wrap>{this.'renderBoxes'()}</Wrap>;
  }
}

export default TeamGrid;
