import { useState } from "react";
import styled from "styled-components";

export default function FrontPage() {
  return (
    <>
      <Hero />
      <CTA />
    </>
  );
}

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em auto 0;
  padding: 5rem 3rem;
`;
const Heading = styled.h1`
  padding: 5rem;
  flex: 1 1 auto;
`;

const HeroP = styled.p`
  width: 50%;
`;

function Hero() {
  return (
    <CenteredDiv>
      <Heading>Now THIS is a tech blog</Heading>
      <HeroP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices
        est quis sapien blandit, ut sodales magna ornare. Sed libero urna,
        consectetur a sagittis sed, congue sit amet ex. Nunc sollicitudin eros
        tempor, consectetur quam id, hendrerit ex. Sed malesuada risus elit,
        eget sagittis felis scelerisque sit amet. Vivamus ultricies, elit sit
        amet ornare pretium, ante orci feugiat dui, tristique laoreet erat sem
        non velit. Sed fermentum ante vitae purus suscipit congue. Aliquam
        dignissim metus non purus vulputate, eu tempus ligula posuere.
      </HeroP>
    </CenteredDiv>
  );
}

const CTADiv = styled.div`
  max-width: 50vw;
  margin: 2em auto 0;
  text-align: center;
  padding: 5em 0;
`;

const Container = styled.div`
  background-color: gray;
  margin: 0 auto;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  padding: 0.25em 1em;
  width: 100%;
`;

const HeaderCTA = styled.h1`
  padding: 0.2em 1em 0.25em;
`;

const ParagraphCTA = styled.p`
  padding: 0.5em 1em;
`;

const ButtonCTA = styled.button`
  padding: 1em;
`;
function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <CTADiv>
        <HeaderCTA>This is a statement to get you to do something</HeaderCTA>
        <ParagraphCTA>
          This is a sub statement to get you to click here
        </ParagraphCTA>
        <form>
          <Col>
            <Row>
              <input
                type="text"
                placeholder="Name..."
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Row>
            <Row>
              <input
                type="text"
                placeholder="Email..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Row>
            <Row>
              <ButtonCTA type="submit">Join us</ButtonCTA>
            </Row>
          </Col>
        </form>
      </CTADiv>
    </Container>
  );
}
