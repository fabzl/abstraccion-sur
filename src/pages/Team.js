import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import translations from "../translations";
import { colors } from "../styles/globals";
import Parser from "html-react-parser";

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
import TeamDeco from "../img/team_deco.svg";

const SectionTitle = styled.h2`
  color: ${colors.black};
  font-size: 1.5rem;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.black};
  text-align: left;
  position: fixed;
  right: 0;
  width: 10rem;
  top: 33vh;
`;

const ShortLine = styled.div`
  border: 2px solid ${colors.black};
  width: 4rem;
  display: block;
  margin-bottom: 1rem;
  margin: 0 auto;
`;

const ArtistList = styled.li`
  list-style-type: none;
`;

const ArtistUl = styled.ul`
  text-align: right;
  padding: 10vh 30vw;
  line-height: 7rem;
`;

const Wrap = styled.div`
  height: 50vh;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const LogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

const H2 = styled.h2`
  font-weight: 700;
  letter-spacing: 130%;
  padding-left: 15vw;

  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;

  text-align: center;
  font-size: 2.7rem;
  color: ${colors.black};
  padding: 0 10%;
  &.margin {
    margin-bottom: 10vw;
  }
  span {
    margin-bottom: 0;
    margin-top: 10vw;
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    line-height: auto;
    margin: 0 auto;
  }

  @media (min-width: 520px) {
  }
  @media (min-width: 720px) {
  }
`;

const TeamName = styled.p`
  letter-spacing: 130%;
  padding-left: 15vw;

  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;

  text-align: left;
  padding-left: 15vw;

  color: ${colors.black};
  margin-bottom: 5vw;
  font-size: 2rem;
  font-weight: 700;
  line-height: auto;
  margin: 0 auto;
`;

const H3 = styled.h3`
  padding-left: 15vw;
  letter-spacing: 130%;
  text-align: left;
  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;
  color: ${colors.black};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-style: italic;
  font-weight: 500;
  line-height: auto;

  @media (min-width: 520px) {
    font-size: 1.5rem;
  }
`;

const LogoParts = styled.div`
  display: block;
  position: relative;
  width: 18vmax;
  height: 30vh;
  text-align: center;
  opacity: 1;
  transition: all 0.5;
  img {
    top: 0;
    position: absolute;
    transform: translateX(-50%);
  }
`;

const Image = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
`;

const Team = props => {
  const { data, language } = props;

  const TeamParts = styled.div`
    padding-top: 10vh;
    padding-bottom: 10vh;
    position: relative;
    background: "url(" + ${TeamDeco}+ ")";
  `;
  const TextHolder = styled.div`
    position: relative;
    margin-top: 30vh;
    columns: auto 2;
    column-gap: 2vw;
  `;

  return (
    <div>
      {/* <Background>
        <img src={TeamDeco} />
      </Background> */}
      <SectionTitle> {translations.header.contact[language]}</SectionTitle>

      <LogoContainer>
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
      </LogoContainer>
      <TeamParts>
        <TextHolder>
          <H2>
            {props.language === "es"
              ? Parser("<span>EQUIPO MICRO-DOCUMENTALES</span>")
              : Parser("<span>MICRO-DOCUMENTARIES TEAM</span>")}
          </H2>
          <ShortLine />
          <H2 className="margin">ABSTRACCIÓN SUR</H2>

          <H3>
            {props.language === "es"
              ? Parser("Dirección General ")
              : Parser("Team Lead")}
          </H3>
          <TeamName>Ramón Castillo</TeamName>

          <H3>
            {props.language === "es"
              ? Parser("Producción Olivia Guasch")
              : Parser("Production Olivia Guasch")}
          </H3>
          <TeamName>Olivia Guasch</TeamName>
          <H3>
            {props.language === "es" ? Parser("Cámara") : Parser("Camera")}
          </H3>
          <TeamName>Rodrigo Avilés y Juan Millán</TeamName>
          <H3>
            {props.language === "es"
              ? Parser("Edición y Montaje")
              : Parser("Video Editing & Post production")}
          </H3>
          <TeamName>Manuela Piña</TeamName>
          <H3>
            {props.language === "es"
              ? Parser("Diseño y Programación ")
              : Parser("Design & Programming")}
          </H3>
          <TeamName> Fabián Andrade</TeamName>

          <H3>
            {props.language === "es" ? Parser("Sonido") : Parser("Sound")}
          </H3>
          <TeamName>Carlos Arias</TeamName>

          <H3>
            {props.language === "es" ? Parser("Música") : Parser("Music")}
          </H3>
          <TeamName> Rodrigo Aros</TeamName>
          <H3>
            {props.language === "es"
              ? Parser("Asesoría visual")
              : Parser("Visual consultant")}
          </H3>
          <TeamName>Micchela Messone</TeamName>
        </TextHolder>
      </TeamParts>
      <div />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // data: state.data.pages[1].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Team);
