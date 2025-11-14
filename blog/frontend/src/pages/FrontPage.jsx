import styled from "styled-components";

export default function FrontPage() {
  return (
    <>
      <Hero />
      <CTA />
    </>
  );
}

function Hero() {
  const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 50vw;
    margin: 2em auto 0;
    gap: 10em;
  `;
  const Heading = styled.h1`
    flex: 1 0 auto;
  `;
  return (
    <CenteredDiv>
      <Heading>Now THIS is a tech blog</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices
        est quis sapien blandit, ut sodales magna ornare. Sed libero urna,
        consectetur a sagittis sed, congue sit amet ex. Nunc sollicitudin eros
        tempor, consectetur quam id, hendrerit ex. Sed malesuada risus elit,
        eget sagittis felis scelerisque sit amet. Vivamus ultricies, elit sit
        amet ornare pretium, ante orci feugiat dui, tristique laoreet erat sem
        non velit. Sed fermentum ante vitae purus suscipit congue. Aliquam
        dignissim metus non purus vulputate, eu tempus ligula posuere.
      </p>
    </CenteredDiv>
  );
}

function CTA() {
  const CenteredDiv = styled.div`
    width: 100%;
    max-width: 50vw;
    margin: 2em auto 0;
    text-align: center;
    padding: 5em 0;
  `;
  return (
    <CenteredDiv>
      <h1> This is a statement to get you to do something</h1>
      <p>This is a sub statement to get you to click here</p>
      <form>
        <input type="text" />
        <input type="text" />
        <button type="submit">Join us</button>
      </form>
    </CenteredDiv>
  );
}
