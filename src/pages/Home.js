import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import VideoHome from "../components/VideoHome";
import Grid from "../components/Grid";
import translations from "../translations";
import { colors } from "../styles/globals";

const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "Futura";
  text-transform: uppercase;
`;

const textDesc = styled.p`
  color: ${colors.white};
`;

const Button = styled.button`
  color: ${colors.gray};
  color: ${colors.black};
  border-radius: 25%;
  padding: 5px 20px;
  font-family: "Futura";
  border: none;
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  padding: 55px 0 45px;
  transition: all 1s;
  &:hover {
    color: ${colors.black};
  }
`;

const Home = props => (
  <div>
    <textDesc>
      Abstracción sur es un portal de información en torno a procesos
      intelectuales, creativos, acontecimientos, protagonistas y archivos
      implicados en la construcción nueva narrativa que hace visible y articula
      el capítulo de la abstracción en Chile. Veremos que hay varias
      orientaciones, desde los artistas adscritos a manifiestos, así como de
      artistas que trabajan de manera independiente. La narrativa articula por
      una parte actores que estaban invisibilizados, y por otra explicita las
      relaciones de intercambio y trabajo colaborativo entre los artistas de
      Chile, Argentina, Uruguay y Brasil. La presentación de los artistas en su
      taller, contextualizado con su tiempo, nos permitirá ver su trabajo desde
      si mismos. La idea de la visita guiada es en función de cada artista es
      experto en su obra, y contienen las claves para iniciar una primera
      aproximación a su trabajo. Esta narrativa audio visual será una estructura
      relacional y circular, que irá del contexto, al artista, la obra, los
      archivos, las fotografías, los documentos y las exposiciones. Se parte de
      una obra se llega al artista, se avanza a una exposición y se llega a otro
      autor. Los documentos o las referencias duras sirven para situar las
      reflexiones y el contexto de época.
    </textDesc>
    <Button> explora la linea de tiempo </Button>
    <Button> ver por artistas </Button>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[3].acf,
    dataContact: state.data.pages[0].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Home);
