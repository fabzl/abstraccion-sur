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

let ArtistSize = "30vw";
let gridInitialDistance = "2vw";

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
  font-size: 4rem;
  line-height: 8.5rem;
  margin: 0;
  padding: 0;
  color: ${colors.red};
  transition: all 0.5s;
  z-index: 11;
  opacity: 1;
  width: ${ArtistSize};
  height: ${ArtistSize};
  overflow: hidden;
`;

const ArtistsHolder = styled.ul`
  width: 100vw;
  list-style: none;
  transition: all 0.9s ease-in-out;
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${colors.deepblack};

  display: flex;
  padding: 5vmin;
`;

const ArtistsGrid = styled.li`
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: ${ArtistSize};
  height: ${ArtistSize};
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;
  color: ${colors.violet};
  justify-content: flex-start;
  align-content: center;
  transition: all 0.7s ease-in-out;
  opacity: 1;
  cursor: pointer;
`;

// translate3d(tx, ty, tz)

const ArtImg = styled.div`
  transform-style: preserve-3d;
  backface-visibility: hidden;
  width: ${ArtistSize};
  height: ${ArtistSize};
  background-size: cover;
  will-change: transform;
  transition: all 0.5s;
  text-align: center;
  background-position: center;
`;

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
  line-height: 1em;
  font-family: "Helvetica", "HelveticaNeue", "Verdana";
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

const Intro = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
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
  line-height: 3rem;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.6rem;
  font-weight: 800;
  color: ${colors.violet};
  text-transform: uppercase;
  text-align: center;
  padding-top: 20vh;

  &.title {
  }
`;

const H1 = styled.h1`
  display: flex;
  z-index: 300;
  color: ${colors.white};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 1.5rem;
  font-weight: 800;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: uppercase;
  text-align: center;
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
    font-size: 2.5rem;
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
  
  
  background: ${colors.white};
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  padding: 5vw;
  /* border-top: 2px solid ${colors.violet};
  border-bottom: 2px solid ${colors.violet}; */
  display: grid;
  /* flex-direction: row; */
`;

/* grid-template-columns: repeat(12, [col-start] 1fr); */
/* grid-gap: 2rem; */
const RevContainer = styled.div`
  display: flex;
  min-height: 60vh;
  flex-flow: column wrap;
  align-content: flex-start;
`;
const TextDesc = styled.p`
  margin-top: 0;
  display: flex;
  color: ${colors.black};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.2rem;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  z-index: 300;

  &.description {
    /* margin-bottom: 5vh; */
    padding: 20%;
    text-align: justify;
    font-size: 2.4rem;
  }
  &.italic {
    font-style: italic;
    font-weight: 500;
    text-align: center;
    font-size: 1.5rem;
    line-height: auto;
    color: ${colors.white};
    margin: 0 20%;

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
  /* display: flex; */
  color: ${colors.black};
  font-weight: 400;
  /* letter-spacing: 130%; */
  line-height: 1em;
  padding: 5vh;
  font-family: "Helvetica", "HelveticaNeue", "Verdana";
  font-size: 2rem;
  margin: auto;
  text-align: justify;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: 1048px) {
    columns: 40vw 2;
  }

  @media (min-width: 1748px) {
    columns: 30vw 3;
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
            "Este portal despliega a 12 artistas que de manera colectiva e individual, integrando grupos o de forma independiente, desarrollaron en Chile, entre 1955 y la actualidad, una visualidad crítica de la figuración tradicional, y por lo tanto, se orientaron hacia una modernidad abstracta y utópica en sus distintas variantes: geométrica, constructiva, óptica y cinética. <br/><br/>Hubo varios factores que permitieron esta vanguardia artística, tanto a nivel de estudiantes como de profesores: crisis y renovación de la enseñanza universitaria (1930, 1945 y 1970); información, intercambios y viajes a Europa y EEUU de los artistas chilenos; la llegada de exposiciones internacionales (De Manet a nuestros días en 1950 y De Cezanne a Miró en 1968, entre otras), y la residencia temporal o permanente de artistas y teóricos extranjeros a nuestro país.<br/><br/>En medio de este contexto creativo, durante varias décadas los artistas chilenos permanecieron en el silencio, rumor y rigor de largas jornadas creativas en las aulas universitarias y en sus talleres, y no siempre fueron suficientemente comprendidos y valorados a nivel de la crítica oficial, el público, las instituciones y los coleccionistas. Hubo obras, manifiestos, exposiciones en Chile, intercambios con Argentina, Uruguay y Brasil, y sin embargo, quedaron circunscritas a un circuito especializado del arte. Las obras no tuvieron espectadores en su tiempo histórico, y por consiguiente, tardaron muchos años en ser conocidas.<br/>Abstracción Sur propone desde la actualidad, dar visibilidad, no sólo a una galería de autores, obras y de espacios de diversos formatos y escalas, sino que es una invitación a conocer desde el propio taller del artista, desde su propia voz, los procesos materiales y el sistema de pensamiento y las poéticas en las que han permanecido realizando obras hasta nuestros días."
          )
        : Parser(
            "This portal portraits 12 artists who collectively and individually, integrating groups or independently, developed in Chile, between 1955 and today, a critical vision of traditional figuration, and therefore, are oriented towards an abstract and utopian modernity in its different variants: geometric, constructive, optical and kinetic.<br/><br/>There were several factors that allowed this artistic avant-garde, both at the level of students and teachers: crisis and renewal of university education (1930, 1945 and 1970); Information, exchanges and trips to Europe and the USA of Chilean artists; The arrival of international exhibitions (De Manet to our days in 1950 and De Cezanne to Miró in 1968, among others), and the temporary or permanent residence of foreign artists and theoreticians to our country.<br/><br/>In the middle of this creative context, for several decades the artists remained in silence, the rumor and the rigor of the long creative days in the university classrooms and in their workshops, and they were not always sufficiently understood and valued at the level of the official criticism, the Public, institutions and collectors. There were works, manifestos, exhibitions in Chile, exchanges with Argentina, Uruguay and Brazil, and nevertheless, they were circumscribed in a specialized circuit of art. The works have no spectators in their historical time, and therefore, it took many years to be known.<br/><br/>Abstraction South proposes, from the present, the visibility, not only a gallery of authors, works and spaces of diverse formats and scales, but it is an invitation to know from the own workshop, from its own voice, the material processes and the system of thought and the poetics in which the works remain to this day."
          )}
    </TextDesc>

    <ArtistsHolder
    // id="artistHolder"
    >
      {props.dataArtists.map((p, i) => (
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
          className={[i]}
        >
          <ArtImg
            style={{
              backgroundImage: "url(" + p.acf.fotoartista.url + ")"
            }}
          />
          <ArtDescription>
            {p.acf.nombre}

            <LinkTo
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
            />
          </ArtDescription>
        </ArtistsGrid>
      ))}
    </ArtistsHolder>

    <RevContainer>
      <TextReading className="italic">
        <H2 className="title">
          {props.language === "es"
            ? "Una exposición emblemática y una historia circular"
            : "An emblematic exhibition and a circular history"}
        </H2>
        {props.language === "es"
          ? Parser(
              '"La Revolución de las formas: 60 años de arte abstracto en Chile" fue una exposición que desplegó 42 artistas a través de 214 obras de realizadas desde mediados las primeras décadas del siglo XX, de los años 50 y hasta los años 2000, dando cuenta de una parte fundamental de la historia del arte en Chile y su permanente diálogo con Latinoamérica. <br/><br/> Una histórica recopilación en colecciones privadas y públicas permitió mostrar por primera vez dibujos, fotografías y esculturas que rescatan la expresión del movimiento de la abstracción en Chile.<br/><br/> A través de esta exposición ocurrida en el Centro Cultural La Moneda se ha reconocido y rescatado el ímpetu y la envergadura del movimiento de los artistas geométricos, abstractos, concretos y cinéticos. <br/><br/> En la exposición se realizó la primera pieza audiovisual que muestra el conjunto de las obras y a sus autores en general. A través del portal Abstracción Sur se podrá conocer y profundizar en cada uno de los artistas a través de microdocumentales y una galería de obras que nos llevará desde el taller a la exposición La revolución de las formas. Documental La revolución de las formas, Director: Andrés Mardones, Montaje: Martín Hernández. Microdocumentales Abstracción Sur, Director: Ramón Castillo, Montaje: Manuela Piña y música original Rodrigo “Chino” Aros.'
            )
          : Parser(
              "The great exhibition of national heritage that exhibits 214 works by 42 artists, made between the mid-twentieth century and the first decade of the current century, accounts for a fundamental part of the history of art in Chile and Latin America.<br/>An exclusive compilation realized between private and public collections, Chilean and foreign, that includes paintings, drawings, photographs and sculptures that rescue the expression of the movement of abstraction in Chile from its beginnings, with the simplification of the forms, until the development of a concrete and constructive art that explores new languages, more everyday and closer, integrating art with elements of architecture, science, design, urbanism, literature and music.<br/>Through this exhibition the Cultural Center La Moneda has wanted to recognize and rescue the impetus and the scope of the movement of geometric, abstract, concrete and kinetic artists, as well as to thank the private collectors who have protected part of these works and who today they understand the importance of putting them into value by facilitating their exhibition in this Cultural Center and for all Chileans.<br/>Exhibition curated by the doctor in History of Art, Ramón Castillo.<br/>Works image previous page © Ramón Vergara Grez. Detail of the work Untitled, 1976 / Matilde Pérez. Detail of work Untitled, 1973."
            )}
      </TextReading>
    </RevContainer>
    <Rev>
      <ReactPlayer
        id="react-player"
        url="https://www.youtube.com/watch?v=fuUhYr64Pqw"
        playing={false}
        controls
        width="80vw"
        height="45vw"
        allow="autoplay; fullscreen"
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
    </Rev>

    {/* <NavEnd>
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
    </NavEnd> */}
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
    dataArtists: state.data.artists,

    language: state.data.language
  };
};

export default connect(mapStateToProps)(Home);
