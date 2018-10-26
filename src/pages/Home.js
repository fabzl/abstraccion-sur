import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

// import VideoHome from "../components/VideoHome";
import translations from "../translations";
import { colors } from "../styles/globals";

// import HomePic from "../img/james_smith.jpg";
// import ObrasPic from "../img/obras_artistas_placeholder.jpg";

import RevDeLasFormas from "../img/la_rev_de_la_formas.jpg";
import RevDeLasFormasMobile from "../img/la_rev_de_la_formas_mobile.jpg";

import ArtistasPic from "../img/obras_artistas_placeholder.jpg";
import { Link, NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { stopVideo, playVideo } from "../redux/actions";

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

const MenuHolder = styled.div`
  top: 80vh;
  display: flex;
  justify-content: center;
  /* background: rgba(255, 255, 255, 0.85); */
`;

const LogoParts = styled.div`
  display: block;
  top: 35vh;
  position: relative;
  width: 20vmax;
  height: 30vh;
  text-align: center;
  opacity: 1;
  transform: translate3d(0, -100%, 0);
  transition: all 0.5;
  margin: 0 auto;
  img {
    top: 0;
    position: absolute;
    transform: translateX(-50%);
  }
  &.active {
    opacity: 1;
    height: 20vmax;
    transform: translate3d(0, 0, 0);
  }
`;
const LogoContainer = styled.div`
  margin-right: auto;
  position: fixed;
  top: 1.4rem;
  left: 6rem;
  transition: all 1s;
  &.passive {
    transform: translate3d(-30vw, 0, 0);
    opacity: 0;
  }
`;

const NavEnd = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const VideoHolder = styled.div`
  position: relative;
  width: 50vw;
  height: auto;
  z-index: 2000;
  transition: all 1s;
  /* transform: translate3d(0px, -100vh, 0); */
`;

const Nav = styled.nav`
  position: fixed;
  align-items: center;
  z-index: 900;
  flex-direction: column;
  display: flex;
  width: 100vw;
`;

const LinkTo = styled(NavLink)`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-indent: 0;
  color: ${colors.black};
  text-decoration: none;
  /* display: flex; */
  /* flex-direction: row; */
  font-size: 1.6em;
  letter-spacing: 130%;
  align-items: center;
  line-height: 1em;
  text-transform: uppercase;
  transition: 1s all;
  background: transparent;
  font-weight: 750;
  width: 10vw;
  padding: 1rem 2.5rem;
  text-align: center;
  font-family: "Helvetica";

  &.menu {
    border-right: 2px solid ${colors.black};
    box-sizing: border-box;
  }
  &:last-child {
    border-right: none;
  }

  &.active,
  &:hover {
    color: ${colors.black};
  }
`;

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
  text-align: center;
  justify-content: center;
  color: ${colors.white};
  text-decoration: none;
`;

const HomeContainer = styled.div`
  color: ${colors.black};
  text-align: center;
  margin: 0 auto;
`;
const GridBG = styled.div`
  /* background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); */
`;

const Intro = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20%;
  background-size: cover;
  background-repeat: no-repeat;
  position:relative;

  background-image: url(${RevDeLasFormasMobile});

  @media (min-width: 740px) {
    background-image: url(${RevDeLasFormas});
  }
  &::after {
    background-color: rgba(0, 0, 0, 0.37);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0
    top:0;
  }
`;

const H2 = styled.h2`
  text-align: left;
  display: flex;
  color: ${colors.red};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 4rem;
  font-weight: 800;
  color: ${colors.violet};
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  margin-bottom: 0;
`;

const H1 = styled.h1`
  display: flex;
  z-index: 300;
  color: ${colors.white};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.5rem;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-transform: uppercase;
  text-align: center;
  margin: auto;
  margin-bottom: 0;

  & span {
    height: 2rem;
    width: 2rem;
    background-color: ${colors.gray};
    border-radius: 50%;
    display: inline-block;
    display: flex;
    align-self: center;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 740px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1048px) {
    font-size: 4rem;
  }

  @media (min-width: 1540px) {
    font-size: 5rem;
  }
  @media (min-width: 2000px) {
    font-size: 7rem;
  }
`;

const Rev = styled.div`
  margin-top: 10vh;
  padding: 5vw;
  margin: 0 3vw;
  border-top: 2px solid ${colors.violet};
  border-bottom: 2px solid ${colors.violet};
  display: flex;
  flex-direction: row;
`;

const RevContainer = styled.div`
  width: 50vw;
`;
const TextDesc = styled.p`
  margin-top: 0;
  display: flex;
  color: ${colors.white};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.2rem;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  z-index: 300;

  &.description {
    /* margin-bottom: 5vh; */
    padding: 20%;
  }
  &.italic {
    font-style: italic;
    font-weight: 500;
    text-align: center;
    font-size: 1.5rem;
    line-height: auto;

    @media (min-width: 740px) {
      font-size: 2rem;
    }
    @media (min-width: 1048px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1748px) {
      font-size: 3.5rem;
    }
  }
`;

const TextReading = styled.p`
  margin-top: 0;
  display: flex;
  color: ${colors.black};
  font-weight: 400;
  /* letter-spacing: 130%; */
  line-height: 1em;
  padding: 5vh;
  font-family: "Helvetica", "HelveticaNeue", "Verdana";
  font-size: 2rem;
  margin: auto;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

const StillHeader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Home = props => (
  <HomeContainer>
    <StillHeader>
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
      <MenuHolder>
        <LinkTo className="menu" onClick={this.checkMobileNav} to="/">
          {translations.header.home[props.language]}
        </LinkTo>

        <LinkTo className="menu" onClick={this.checkMobileNav} to="/artists">
          {translations.header.artists[props.language]}
        </LinkTo>

        <LinkTo className="menu" onClick={this.checkMobileNav} to="/artwork">
          {translations.header.timeline[props.language]}
        </LinkTo>

        <LinkTo className="menu" onClick={this.checkMobileNav} to="/team">
          {translations.header.contact[props.language]}
        </LinkTo>
      </MenuHolder>
    </StillHeader>
    <Intro>
      <H1 className="title">
        {props.language === "es"
          ? Parser("ARTISTAS  <span></span>  PROCESOS <span></span>  TALLERES")
          : Parser("ARTISTS  <span></span>  PROCESS <span></span>  STUDIOS")}
      </H1>
      <TextDesc className="italic">
        {props.language === "es"
          ? Parser(
              "Aproximación a la visualidad, pensamiento creativo e investigación material de los que formaron parte del origen y desarrollo de la abstracción geométrica y constructiva en Chile desde la segunda mitad del siglo XX."
            )
          : Parser(
              "Approach to visuality, creative thinking and material research that formed part of the emergence of abstraction in Chile since the second half of the 20th century."
            )}
      </TextDesc>
    </Intro>
    {/* <ImageHome src={HomePic} /> */}
    <TextDesc className="description">
      {props.language === "es"
        ? Parser(
            "Abstracción Sur es un portal de información en torno a los artistas chilenos que estuvieron implicados en el desarrollo y auge de la abstracción en Chile. Veremos desde los artistas adscritos a manifiestos, a los que trabajan de manera independiente. La narrativa articula por una parte actores que estaban invisibilizados, y por otra explicita las relaciones de intercambio y trabajo colaborativo entre hombres y mujeres de Chile, Argentina, Uruguay y Brasil.</br>La presentación de los artistas en su taller, nos permitirá ver su trabajo desde sí mismo. Como cada artista es experto en su obra en términos de procesos, y darán a conocer algunas claves y complejidades de su investigación y poética. Esta narrativa audio visual es una estructura relacional y circular, que va del contexto al artista, la obra, los archivos, las fotografías y las exposiciones. El viaje por cada autor acontece entre el taller, la obra y la exposición, como si se tratara de un circulo virtuoso y complementario."
          )
        : Parser(
            "Abstracción Sur is a portal of information about intellectual, creative processes, events, protagonists and files involved in the new narrative construction that makes visible and articulates the chapter of abstraction in Chile. &lt;/ Br&gt; We will see that there are several orientations, from the artists attached to manifestos, as well as artists who work independently. The narrative articulates, on the one hand, actors who were invisible, and on the other, explicit relationships of exchange and collaborative work between artists from Chile, Argentina, Uruguay and Brazil. The presentation of the artists in their workshop, contextualized with their time, will allow us to see their work from themselves. The idea of ​​the guided tour is based on each artist is expert in his work, and contain the keys to start a first approach to his work. This audio visual narrative will be a relational and circular structure, which will go from the context, to the artist, the work, the archives, the photographs, the documents and the exhibitions. Be part of a work you get to the artist, you advance to an exhibition and you get to another author. The documents or the hard references serve to situate the reflections and the context of the period."
          )}
    </TextDesc>

    <Rev>
      <ReactPlayer
        id="react-player"
        url="https://www.youtube.com/watch?v=fuUhYr64Pqw"
        playing={false}
        controls
        width="50%"
        allow="autoplay; fullscreen"
        height="28vw"
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

      <RevContainer>
        <H2 className="title">
          {props.language === "es"
            ? "La Revolucíon de las Formas"
            : "The Shape Revolution"}
        </H2>
        <TextReading className="italic">
          {props.language === "es"
            ? Parser(
                "La gran exposición de patrimonio nacional que exhibe 214 obras de 42 artistas, realizadas entre mediados del siglo XX y la primera década del siglo actual, da cuenta de una parte fundamental de la historia del arte en Chile y Latinoamérica. <br> Una exclusiva recopilación realizada entre colecciones privadas y públicas, chilenas y extranjeras, que incluye pinturas, dibujos, fotografías y esculturas que rescatan la expresión del movimiento de la abstracción en Chile desde sus inicios, con la simplificación de las formas, hasta el desarrollo de un arte concreto y constructivo que explora nuevos lenguajes, más cotidianos y cercanos, integrando el arte con elementos de la arquitectura, la ciencia, el diseño, el urbanismo, la literatura y la música.<br>       A través de esta exposición el Centro Cultural La Moneda ha querido reconocer y rescatar el ímpetu y la envergadura del movimiento de los artistas geométricos, abstractos, concretos y cinéticos, así como también agradecer a los coleccionistas privados que han resguardado parte de estas obras y que hoy comprenden la importancia de ponerlas en valor facilitando su exhibición en este Centro Cultural y para todos los chilenos. <br> Exposición curada por el doctor en Historia del Arte, Ramón Castillo.<br>        Obras imagen página anterior © Ramón Vergara Grez. Detalle de la obra Sin título, 1976 / Matilde Pérez. Detalle de obra Sin título, 1973."
              )
            : Parser(
                "The great exhibition of national heritage that exhibits 214 works by 42 artists, made between the mid-twentieth century and the first decade of the current century, accounts for a fundamental part of the history of art in Chile and Latin America.<br/>An exclusive compilation realized between private and public collections, Chilean and foreign, that includes paintings, drawings, photographs and sculptures that rescue the expression of the movement of abstraction in Chile from its beginnings, with the simplification of the forms, until the development of a concrete and constructive art that explores new languages, more everyday and closer, integrating art with elements of architecture, science, design, urbanism, literature and music.<br/>Through this exhibition the Cultural Center La Moneda has wanted to recognize and rescue the impetus and the scope of the movement of geometric, abstract, concrete and kinetic artists, as well as to thank the private collectors who have protected part of these works and who today they understand the importance of putting them into value by facilitating their exhibition in this Cultural Center and for all Chileans.<br/>Exhibition curated by the doctor in History of Art, Ramón Castillo.<br/>Works image previous page © Ramón Vergara Grez. Detail of the work Untitled, 1976 / Matilde Pérez. Detail of work Untitled, 1973."
              )}
        </TextReading>
      </RevContainer>
    </Rev>

    <NavEnd>
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
    </NavEnd>
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
