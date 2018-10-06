import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//import translations from "../translations";

import { colors } from "../styles/globals";

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
        <img src={Triangulo} alt="triangulo" />

        <img src={Linea} alt="linea" />

        <img src={A01} alt="a" />
        <H2> EQUIPO MICRO-DOCUMENTALES ABSTRACCIÓN SUR</H2>
        <img src={B02} alt="b" />
        <H2> DIRECCIÓN GENERAL (Ramón Castillo) </H2>
        <img src={S03} alt="s" />
        <H2>PRODUCCIÓN. (Olivia Guasch) </H2>
        <img src={T04} alt="t" />
        <H2> GUIONES. (Ramón Castillo) </H2>
        <img src={R05} alt="r" />
        <H2>CÁMARA. (Rodrigo Avilés y Juan Millán) </H2>
        <img src={A06} alt="a" />
        <H2> EDICIÓN Y MONTAJE. (Manuela Piña)</H2>
        <img src={C07} alt="c" />
        <H2>SONIDO (Carlos Arias)</H2>
        <img src={C08} alt="c" />
        <H2>TEMAS MUSICALES. (Rodrigo Aros)</H2>
        <img src={I09} alt="i" />
        <H2>DISEÑO Y PROGRAMACIÓN. (Fabián Andrade)</H2>
        <img src={O10} alt="o" />

        <H2>ARTISTAS: </H2>
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
        <img src={N11} alt="n" />

        <H2>
          AGRADECIMIENTOS: (Carlos Cruz) Jonus Bartholdson, Rita Hughes y David
          Huhhes *Gustavo Poblete (James Smith Rodriguez) *Carmen Piemonte
        </H2>
        <img src={S12} alt="s" />
        <H2>(filmación taller) Centro Cultural Palacio La Moneda (CCPLM)</H2>
        <img src={U13} alt="u" />
        <H2>Universidad Diego Portales (UDP)</H2>
        <img src={R14} alt="r" />
        <H2>
          Proyecto financiado por Fondos de Cultura Concursables Chile (FONDART,
          2018)
        </H2>
      </TeamParts>
      <div />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.pages[1].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Team);
