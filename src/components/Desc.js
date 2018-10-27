import React from "react";
import styled from "styled-components";
import translations from "../translations";
import { colors } from "../styles/globals";
import Parser from "html-react-parser";

const Section = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  padding-left: 0;
  color: ${colors.black};
  font-size: 1.8rem;
  min-width: 40vw;
  /* height: 92vh; */
  padding: 10vw;
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  margin-top: 0;
  /* display: flex; */
  color: ${colors.black};
  font-weight: 700;
  letter-spacing: 130%;
  line-height: 1.5em;
  font-family: "FuturaBold", "Futura", "Verdana";
  font-size: 2.2rem;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  display: flex;
  columns: 40vw 2;

  @media (min-width: 740px) {
    font-size: 2rem;
    columns: 40vw 2;
  }
  @media (min-width: 1048px) {
    font-size: 2.5rem;
    columns: 33vw 3;
  }

  @media (min-width: 1748px) {
    font-size: 3.5rem;
    columns: 30vw 3;
  }
`;

const Desc = props => (
  <Section>
    <Container>
      <Description>{Parser(props.desc)}</Description>
    </Container>
  </Section>
);

export default Desc;
