import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";

class Grid extends Component {
  state = {
    column: "1fr"
  };

  setfullWidth = () => {
    if (this.props.large) {
      return true;
    } else {
      return false;
    }
  };

  renderBoxes = () => {
    const { language, data } = this.props;
    return data.map((item, key) => {
      // Si no existe acf implementado
      if (!item.acf.fotoartista) return null;

      const {
        biografia,
        biography,
        fecha_de_nacimiento,
        fecha_de_fallecimiento,
        fotoartista: { url },
        nombre,
        obras,
        videomain,
        videos
      } = item.acf;

      return (
        <Box
          key={item.id}
          image={url}
          nombre={nombre}
          videoUrl={videomain}
          link={nombre}
        />
      );
    });
  };

  render() {
    const Wrap = styled.div`
      display: grid;
      padding: 10%;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 5%;
      grid-row-gap: 5%;
      grid-auto-rows: 43rem;
    `;

    return <Wrap>{this.renderBoxes()}</Wrap>;
  }
}

export default Grid;
