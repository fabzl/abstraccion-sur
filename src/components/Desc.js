import React from "react";
import styled from "styled-components";
import translations from "../translations";
import { colors } from "../styles/globals";

const Section = styled.div`
  padding: 40px 0 20px;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  color: ${colors.black};
  text-align: center;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.2em;
`;

const Dl = styled.dl`
  margin: 10px 0;
  font-size: 20px;
  font-style: italic;
  line-height: 1.6em;
  text-align: center;
`;

const Dt = styled.dt`
  font-weight: 700;
  text-transform: uppercase;
  margin: 20px 0 3px;
`;

const Dd = styled.dd`
  margin: 3px 0 20px;
`;

const Desc = props => (
  <Section>
    {console.log("obras:", props.obras)}
    <Container>
      <H2>{props.title}</H2>
      <Description>{props.desc}</Description>
      <Dl>
        <Dd>{props.obras}</Dd>
      </Dl>
    </Container>
  </Section>
);

export default Desc;
