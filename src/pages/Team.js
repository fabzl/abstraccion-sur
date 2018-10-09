import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//import translations from "../translations";

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

const H2 = styled.h2`
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1em;
  font-family: "FuturaBold", "Futura", "Verdana";
  text-transform: uppercase;

  margin: 2rem 0 0.6em;

  text-align: center;
  font-size: 24px;
  color: ${colors.black};
  padding: 0 10%;
  @media (min-width: 520px) {
    font-size: 32px;
    padding: 0;
  }
  @media (min-width: 720px) {
    font-size: 36px;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 430px;
`;

const Image = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Team = props => {
  const { data, language } = props;

  const TeamParts = styled.div`
    padding-bottom: 10vh;
  `;

  return (
    <div>
      <TeamParts>
        <H2>
          {props.language === "es"
            ? "EQUIPO MICRO-DOCUMENTALES ABSTRACCIÓN SUR"
            : "ABSTRACCIÓN SUR MICRO-DOCUMENTARIES TEAM"}
        </H2>

        <H2>
          {props.language === "es"
            ? "DIRECCIÓN GENERAL. (Ramón Castillo)"
            : "GENERAL DIRECTION. (Ramón Castillo)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "PRODUCCIÓN. (Olivia Guasch)"
            : "PRODUCTION. (Olivia Guasch)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "GUIONES. (Ramón Castillo)"
            : "SCRIPTS. (Ramón Castillo)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "CÁMARA. (Rodrigo Avilés y Juan Millán)"
            : "CAMERA. (Rodrigo Avilés y Juan Millán)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "EDICIÓN Y MONTAJE. (Manuela Piña)"
            : "VIDEO EDITING & POST PRODUCTION. (Manuela Piña)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "SONIDO. (Carlos Arias)"
            : "SOUND. (Carlos Arias)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "MÚSICA. (Rodrigo Aros)"
            : "MUSIC. (Rodrigo Aros)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "DISEÑO Y PROGRAMACIÓN. (Fabián Andrade)"
            : "DESIGN & PROGRAMMING. (Fabián Andrade)"}
        </H2>
        <H2>{language === "es" ? "ARTISTAS:" : "ARTISTS:"}</H2>
        <H2>
          <ArtistUl>
            <ArtistList>Alejandro Siña</ArtistList>
            <ArtistList>Claudio Román</ArtistList>
            <ArtistList>Elsa Bolívar</ArtistList>
            <ArtistList>Federico Assler</ArtistList>
            <ArtistList> Miguel Cosgrove</ArtistList>
            <ArtistList> Paz Olea </ArtistList>
            <ArtistList> Ricardo Yrarrázabal</ArtistList>
            <ArtistList> Robinson Mora</ArtistList>
            <ArtistList> Sergio Berthoud</ArtistList>
          </ArtistUl>
        </H2>
        <H2>
          {props.language === "es"
            ? "AGRADECIMIENTOS: (Carlos Cruz) Jonus Bartholdson, Rita Hughes y David Huhhes *Gustavo Poblete (James Smith Rodriguez) *Carmen Piemonte"
            : "SPECIAL THANKS: (Carlos Cruz) Jonus Bartholdson, Rita Hughes y David Huhhes *Gustavo Poblete (James Smith Rodriguez) *Carmen Piemonte"}
        </H2>

        <H2>
          {props.language === "es"
            ? "(filmación taller) Centro Cultural Palacio La Moneda (CCPLM)"
            : "(Workshop filming) Centro Cultural Palacio La Moneda (CCPLM)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "Universidad Diego Portales (UDP)"
            : "University Diego Portales (UDP)"}
        </H2>

        <H2>
          {props.language === "es"
            ? "Proyecto financiado por Fondos de Cultura Concursables Chile (FONDART, 2018)"
            : "Proyect funded by Fondos de Cultura Concursables Chile (FONDART, 2018)"}
        </H2>
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
