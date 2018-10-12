import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

// import VideoHome from "../components/VideoHome";
import translations from "../translations";
import { colors } from "../styles/globals";

import HomePic from "../img/james_smith.jpg";
import ObrasPic from "../img/obras_artistas_placeholder.jpg";
import ArtistasPic from "../img/obras_artistas_placeholder.jpg";

import { Link, NavLink } from "react-router-dom";

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

import Parser from "html-react-parser";

const LinkTo = styled(NavLink)``;

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
  width: 100vw;
`;

const ImageBlock = styled.div`
  margin-top: 10vh;
  width: 30vw;
  height: 30vw;
  margin: 5vh;
  font-size: 4rem;
  display: flex;
  color: ${colors.violet};
  background-position: cover;
  align-items: center;
  flex-direction: column;
`;

const HomeContainer = styled.div`
  color: ${colors.black};
  text-align: center;
  margin: 0 auto;
`;

const Intro = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20%;
`;

const H1 = styled.h1`
  display: flex;
  color: ${colors.black};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.8rem;
  font-weight: 800;
  font-size: 5rem;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  margin-bottom: 0;
`;

const TextDesc = styled.p`
  margin-top: 0;
  display: flex;
  color: ${colors.black};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.8rem;
  margin: auto;

  &.description {
    /* margin-bottom: 5vh; */
    padding: 20%;
  }
  &.italic {
    font-style: italic;
    font-weight: 500;
    text-align: center;
    font-size: 2.5rem;
    line-height: auto;
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
    <Intro>
      <H1 className="title">
        {props.language === "es"
          ? "ARTISTAS, PROCESOS, TALLERES Y PERSISTENCIA EN EL CONSTRUCTIVISMO Y LA ABSTRACCIÓN GEOMÉTRICA"
          : "ARTISTS, PROCESS, STUDIOS Y PERSISTENCE IN CONSTRUCTIVISM & GEOMETRIC ABSTRACTION"}
      </H1>
      <TextDesc className="italic">
        {props.language === "es"
          ? "Aproximación a la visualidad, pensamiento creativo e investigación material que formaron parte de la emergencia de la abstracción en Chile desde la segunda mitad del siglo XX."
          : "Approach to visuality, creative thinking and material research that formed part of the emergence of abstraction in Chile since the second half of the 20th century."}
      </TextDesc>
    </Intro>
    <ImageHome src={HomePic} />
    <TextDesc className="description">
      {props.language === "es"
        ? Parser(
            "Abstracción Sur es un portal de información en torno a procesos intelectuales, creativos, acontecimientos, protagonistas y archivos implicados en la construcción nueva narrativa que hace visible y articula el capítulo de la abstracción en Chile.</br> Veremos que hay varias  orientaciones, desde los artistas adscritos a manifiestos, así como de artistas que trabajan de manera independiente. La narrativa articula por una parte actores que estaban invisibilizados, y por otra explicita las relaciones de intercambio y trabajo colaborativo entre los artistas de Chile, Argentina, Uruguay y Brasil. La presentación de los artistas en su taller, contextualizado con su tiempo, nos permitirá ver su trabajo desde si mismos. La idea de la visita guiada es en función de cada artista es experto en su obra, y contienen las claves para iniciar una primera aproximación a su trabajo. Esta narrativa audio visual será una estructura relacional y circular, que irá del contexto, al artista, la obra, los archivos, las fotografías, los documentos y las exposiciones. Se parte de una obra se llega al artista, se avanza a una exposición y se llega a otro autor. Los documentos o las referencias duras sirven para situar las reflexiones y el contexto de época."
          )
        : Parser(
            "Abstracción Sur is a portal of information about intellectual, creative processes, events, protagonists and files involved in the new narrative construction that makes visible and articulates the chapter of abstraction in Chile. </ Br> We will see that there are several orientations, from the artists attached to manifestos, as well as artists who work independently. The narrative articulates, on the one hand, actors who were invisible, and on the other, explicit relationships of exchange and collaborative work between artists from Chile, Argentina, Uruguay and Brazil. The presentation of the artists in their workshop, contextualized with their time, will allow us to see their work from themselves. The idea of ​​the guided tour is based on each artist is expert in his work, and contain the keys to start a first approach to his work. This audio visual narrative will be a relational and circular structure, which will go from the context, to the artist, the work, the archives, the photographs, the documents and the exhibitions. Be part of a work you get to the artist, you advance to an exhibition and you get to another author. The documents or the hard references serve to situate the reflections and the context of the period."
          )}
    </TextDesc>

    <LinkTo onClick={this.checkMobileNav} to="/artwork">
      <ImageBlock
        style={{
          backgroundImage: "url(" + ArtistasPic + ")"
        }}
      >
        {props.language === "es" ? "Obras" : "Artwork"}
      </ImageBlock>
    </LinkTo>
    <LinkTo onClick={this.checkMobileNav} to="/artists">
      <ImageBlock
        style={{
          backgroundImage: "url(" + ArtistasPic + ")"
        }}
      >
        {props.language === "es" ? "Artistas" : "Artists"}
      </ImageBlock>
    </LinkTo>
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
