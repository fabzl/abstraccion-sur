import React from "react";
import styled from "styled-components";
import translations from "../translations";
import { colors } from "../styles/globals";

const Section = styled.div``;

const Container = styled.div`
  color: ${colors.black};
  text-align: right;
  font-size: 1.8rem;
  min-width: 40vw;
  height: 92vh;
  padding-right: 10vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.2em;
  color: ${colors.black};
  font-weight: 700;
  letter-spacing: 130%;
  font-family: "FuturaBold", "Futura", "Verdana";
`;

const Desc = props => (
  <Section>
    <Container>
      <Description>{props.desc}</Description>
    </Container>
  </Section>
);

export default Desc;
