import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

// import VideoHome from "../components/VideoHome";
//import translations from "../translations";
import { colors } from "../styles/globals";

import HomePic from "../img/james_smith.jpg";
import EndPic from "../img/end_pic.jpg";

import A01 from "../img/01_a.svg";
import B02 from "../img/02_b.svg";
import S03 from "../img/03_s.svg";
import T04 from "../img/04_t.svg";
import R05 from "../img/05_r.svg";
import A06 from "../img/06_a.svg";
import C07 from "../img/07_c.svg";
import C08 from "../img/08_c.svg";
import I09 from "../img/09_i.svg";
import O10 from "../img/10_o.svg";
import N11 from "../img/11_n.svg";
import S12 from "../img/12_s.svg";
import U13 from "../img/13_u.svg";
import R14 from "../img/14_r.svg";
import Linea from "../img/linea.svg";
import Triangulo from "../img/triangulo.svg";

const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;
`;
const ImageHome = styled.img`
  margin-top: 25vh;
  width: 80vw;
  margin-left: 20vw;
`;

const ImageEnd = styled.img`
  margin-top: 10vh;
  width: 50vw;
  margin-left: 20vw;
`;

const HomeContainer = styled.div`
  color: ${colors.black};
  text-align: center;
  margin: 0 auto;
`;

const TextDesc = styled.p`
  color: ${colors.black};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.8rem;
  top: 0;
  right: 0;
  width: 60%;
  margin-left: 30vw;
  text-align: right;

  &.description {
    margin-bottom: 20vh;
  }
  &.title {
    font-weight: 800;
    font-size: 5rem;
    text-transform: uppercase;
    text-align: center;
  }
  &.italic {
    font-style: italic;
    font-weight: 500;
    text-align: center;
    font-size: 2.5rem;
    line-height: auto;
  }
`;

const LogoParts = styled.div`
  position: fixed;
  top: 50px;
  width: 20vmax;

  img {
    top: 0;
    position: absolute;
  }
`;

const Button = styled.button`
  color: ${colors.gray};
  color: ${colors.black};
  border-radius: 25px;
  padding: 12px 35px;
  margin: 20px auto;
  letter-spacing: 0.07em;
  font-family: "FuturaBold", "Futura", "Verdana";
  border: none;
  display: block;
  text-align: center;
`;

const Home = props => (
  <HomeContainer>
    <LogoParts>
      <img src={Triangulo} alt="triangulo" />
      <img src={Linea} alt="linea" />
      <img src={A01} alt="a" />
      <img src={B02} alt="b" />
      <img src={S03} alt="s" />
      <img src={T04} alt="t" />
      <img src={R05} alt="r" />
      <img src={A06} alt="a" />
      <img src={C07} alt="c" />
      <img src={C08} alt="c" />
      <img src={I09} alt="i" />
      <img src={O10} alt="o" />
      <img src={N11} alt="n" />
      <img src={S12} alt="s" />
      <img src={U13} alt="u" />
      <img src={R14} alt="r" />
    </LogoParts>

    <TextDesc className="title">
      {props.language === "es"
        ? "ARTISTAS, PROCESOS, TALLERES Y PERSISTENCIA EN EL CONSTRUCTIVISMO Y LA ABSTRACCIÓN GEOMÉTRICA"
        : "ARTISTS, PROCESS, STUDIOS Y PERSISTENCE IN CONSTRUCTIVISM & GEOMETRIC ABSTRACTION"}
    </TextDesc>
    <TextDesc className="italic">
      {props.language === "es"
        ? "Aproximación a la visualidad, pensamiento creativo e investigación material que formaron parte de la emergencia de la abstracción en Chile desde la segunda mitad del siglo XX."
        : "Approach to visuality, creative thinking and material research that formed part of the emergence of abstraction in Chile since the second half of the 20th century."}
    </TextDesc>
    <ImageHome src={HomePic} />
    <TextDesc className="description">
      Abstracción Sur es un portal de información en torno a procesos
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
    </TextDesc>

    {/* <ImageEnd src={EndPic} /> */}
    {/*
    <Button>Conoce mas de los 9 Artistas</Button>
    <Button>Ve las Obras que realizaron</Button>
    <Button>Equipo</Button>*/}
  </HomeContainer>
);

function isSelectedPage(data, slug) {
  // // console.log(data.slug, "data found", slug);
  // if (data.slug === slug) {
  //   console.log("isSelected: ", slug, data.slug === slug);
  // }
  return data.slug === slug;
}

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages.filter(function(element) {
      return isSelectedPage(element, "home");
    }),
    dataContact: state.data.pages.filter(function(element) {
      return isSelectedPage(element, "contact");
    }),

    language: state.data.language
  };
};

export default connect(mapStateToProps)(Home);
